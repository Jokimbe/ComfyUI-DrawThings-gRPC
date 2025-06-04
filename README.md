# ComfyUI-DrawThings-gRPC

Connect to any Draw Things [gRPCServerCLI](https://github.com/drawthingsai/draw-things-community/tree/main?tab=readme-ov-file#self-host-grpcservercli-from-packaged-binaries) and let ComfyUI generate and provide DT with images for ControlNet without needing to set them in DT itself.

> [!NOTE]
> Previews might look wrong for some models, however this does not have any influence over the final image.

## Draw Things gRPC server

Run your server with the following options:
    --no-tls
    --no-response-compression
    --model-browser

## TODO

- Load default settings per model-type
- Add all possible options
- Create example workflows
- Automatically check for incompatible settings/models

## Discussion

Discuss this project on [Discord](https://discord.com/channels/1038516303666876436/1357377020299837464)

# Features

- Connect to any Draw Things [gRPCServerCLI](https://github.com/drawthingsai/draw-things-community/tree/main?tab=readme-ov-file#self-host-grpcservercli-from-packaged-binaries).
- Let ComfyUI generate and provide DT with images for ControlNet without needing to set them in DT itself.

## Quickstart

1. Install [ComfyUI](https://docs.comfy.org/get_started).
1. Install [ComfyUI-Manager](https://github.com/ltdrdata/ComfyUI-Manager)
1. Look up this extension in ComfyUI-Manager. If you are installing manually, clone this repository under `ComfyUI/custom_nodes`.
1. Restart ComfyUI.

> [!NOTE]
> This projected was created with a [cookiecutter](https://github.com/Comfy-Org/cookiecutter-comfy-extension) template. It helps you start writing custom nodes without worrying about the Python setup.

# Thanks to

- https://github.com/drawthingsai/draw-things-community
- https://github.com/JosephThomasParker/ComfyUI-DrawThingsWrapper for starting me off looking into what's possible connecting ComfyUI to Draw Things.
- https://github.com/kcjerrell/dt-grpc-ts
- https://github.com/TinyTerra/ComfyUI_tinyterraNodes for collapsing widgets.
