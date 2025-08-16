import base64
from google.protobuf.json_format import MessageToJson
import json
import grpc
import grpc.aio
import torch
import flatbuffers
from .. import cancel_request, settings
from .config import build_config
import numpy as np
from PIL import Image
from .credentials import credentials
from .data_types import DrawThingsLists, HintStack, ModelsInfo, UpscalerInfo
from .generated import imageService_pb2, imageService_pb2_grpc

from .image_handlers import (
    convert_image_for_request,
    convert_mask_for_request,
    convert_response_image,
    decode_preview,
    prepare_callback,
)


async def get_files(server, port, use_tls) -> ModelsInfo:
    async with get_aio_channel(server, port, use_tls) as channel:
        stub = imageService_pb2_grpc.ImageGenerationServiceStub(channel)
        response = await stub.Echo(imageService_pb2.EchoRequest(name="ComfyUI"))
        response_json = json.loads(MessageToJson(response))
        override = dict(response_json["override"])
        model_info = {
            k: json.loads(str(base64.b64decode(override[k]), "utf8"))
            for k in override.keys()
        }

        if "upscalers" not in model_info:
            official = [
                "realesrgan_x2plus_f16.ckpt",
                "realesrgan_x4plus_f16.ckpt",
                "realesrgan_x4plus_anime_6b_f16.ckpt",
                "esrgan_4x_universal_upscaler_v2_sharp_f16.ckpt",
                "remacri_4x_f16.ckpt",
                "4x_ultrasharp_f16.ckpt",
            ]
            model_info["upscalers"] = [UpscalerInfo(file=f, name=f) for f in official]

        return ModelsInfo(
            models=model_info["models"],
            controlNets=model_info["controlNets"],
            loras=model_info["loras"],
            upscalers=model_info["upscalers"],
            textualInversions=model_info["textualInversions"],
        )


def get_aio_channel(server, port, use_tls):
    options = [
        ["grpc.max_send_message_length", -1],
        ["grpc.max_receive_message_length", -1],
    ]
    if use_tls and credentials is not None:
        return grpc.aio.secure_channel(f"{server}:{port}", credentials, options=options)
    return grpc.aio.insecure_channel(f"{server}:{port}", options=options)


async def dt_sampler(inputs: dict):
    server, port, use_tls = (
        inputs.get("server"),
        inputs.get("port"),
        inputs.get("use_tls"),
    )
    positive, negative = inputs.get("positive"), inputs.get("negative")
    image, mask = inputs.get("image"), inputs.get("mask")
    version = inputs.get("version")

    config = build_config(inputs)
    width = config.startWidth * 64
    height = config.startHeight * 64

    builder = flatbuffers.Builder(0)
    builder.Finish(config.Pack(builder))
    config_fbs = bytes(builder.Output())

    try:
        print(json.dumps(inputs, indent=4))
        print(json.dumps(config, indent=4))
    except Exception as e:
        pass

    contents = []
    img2img = None
    maskimg = None
    if image is not None:
        img2img = convert_image_for_request(image, width=width, height=height)
    if mask is not None:
        maskimg = convert_mask_for_request(mask, width=width, height=height)

    # hints can be with sampler, cnet, or lora
    # get hints from sampler
    hints: HintStack = inputs.get("hints", [])

    # add hints from cnets
    cnets = inputs.get("control_net")
    if cnets is not None:
        for cnet in cnets:
            cnet_image = cnet.get("image")
            cnet_hint_type = cnet.get("hint_type")
            if cnet_image is not None and cnet_hint_type is not None:
                hints.append(
                    {
                        "image": cnet_image,
                        "type": cnet_hint_type,
                        "weight": 1,
                    }
                )

    print(hints)
    req_hints = []
    # add all hints to request
    for hint_type in DrawThingsLists.hint_types_mapping.values():
        if hint_type is None:
            continue
        hints_of_type = filter(lambda hint: hint.get("type") == hint_type, hints)
        taws = []
        for hint in hints_of_type:
            hint_images = hint.get("image")
            hint_weight = hint.get("weight", 1.0)
            if hint_images is None:
                continue

            # hint images might be batched, so check for multiple images and add each
            for i in range(hint_images.size(dim=0)):
                hint_tensor = convert_image_for_request(
                    hint_images,
                    hint_type,
                    batch_index=i,
                    width=width,
                    height=height,
                )
                taw = imageService_pb2.TensorAndWeight()
                taw.weight = 1
                taw.tensor = hint_tensor
                taws.append(taw)
                print('added hint of type', hint_type, 'weight', hint_weight)

        hp = imageService_pb2.HintProto()
        hp.hintType = hint_type
        hp.tensors.extend(taws)
        req_hints.append(hp)

    async with get_aio_channel(server, port, use_tls) as channel:
        stub = imageService_pb2_grpc.ImageGenerationServiceStub(channel)
        generate_stream = stub.GenerateImage(
            imageService_pb2.ImageGenerationRequest(
                image=img2img,
                scaleFactor=1,
                mask=maskimg,
                hints=req_hints,
                prompt=positive,
                negativePrompt=negative,
                configuration=config_fbs,
                # override = override,
                user="ComfyUI",
                device="LAPTOP",
                contents=contents,
            )
        )

        cancel_request.reset()
        response_images = []

        while True:
            response = await generate_stream.read()
            if response == grpc.aio.EOF:
                break

            if cancel_request.should_cancel:
                await channel.close()
                raise Exception("canceled")

            current_step = response.currentSignpost.sampling.step
            preview_image = response.previewImage
            generated_images = response.generatedImages

            if current_step:
                try:
                    x0 = None
                    if preview_image and version and settings.show_preview:
                        x0 = decode_preview(preview_image, version)
                    prepare_callback(current_step, config.steps, x0)
                except Exception as e:
                    print("DrawThings-gRPC had an error decoding the preview image:", e)

            if generated_images:
                response_images.extend(generated_images)

        images = []
        for img_data in response_images:
            result = convert_response_image(img_data)
            if result is not None:
                data = result["data"]
                width = result["width"]
                height = result["height"]
                channels = result["channels"]
                mode = "RGB"
                if channels >= 4:
                    mode = "RGBA"
                img = Image.frombytes(mode, (width, height), data)
                image_np = np.array(img)
                tensor_image = torch.from_numpy(image_np.astype(np.float32) / 255.0)
                images.append(tensor_image)

        return (torch.stack(images),)
