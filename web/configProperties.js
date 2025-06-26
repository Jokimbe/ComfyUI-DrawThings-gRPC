import { modelService } from './models.js'

export const samplers = [
    "DPM++ 2M Karras",
    "Euler A",
    "DDIM",
    "PLMS",
    "DPM++ SDE Karras",
    "UniPC",
    "LCM",
    "Euler A Substep",
    "DPM++ SDE Substep",
    "TCD",
    "Euler A Trailing",
    "DPM++ SDE Trailing",
    "DPM++ 2M AYS",
    "Euler A AYS",
    "DPM++ SDE AYS",
    "DPM++ 2M Trailing",
    "DDIM Trailing",
]

export const seedModes = ["Legacy", "TorchCpuCompatible", "ScaleAlike", "NvidiaGpuCompatible"]

// From flux-auto-workflow.js
export function calcShift(h, w) {
    const step1 = (h * w) / 256
    const step2 = (1.15 - 0.5) / (4096 - 256)
    const step3 = (step1 - 256) * step2
    const step4 = step3 + 0.5
    const result = Math.exp(step4)
    return Math.round(result * 100) / 100
}

/** @typedef {"v1" | "v2" | "kandinsky2.1" | "sdxl_base_v0.9" | "sdxl_refiner_v0.9" | "ssd_1b" | "svd_i2v"} _Models_A */
/** @typedef {"wurstchen_v3.0_stage_c" | "wurstchen_v3.0_stage_b" | "sd3" | "pixart" | "auraflow" | "flux1" } _Models_B */
/** @typedef {"sd3_large" | "hunyuan_video" | "wan_v2.1_1.3b" | "wan_v2.1_14b" | "hidream_i1"} _Models_C */

/** @typedef {_Models_A | _Models_B | _Models_C | "Other"} ModelVersion */

/** @typedef {Record<ModelVersion, any>} ModelMap */

/** @type ModelMap */
const numFramesMaxMap = { "wan_v2.1_1.3b": 129, "wan_v2.1_14b": 129, "hunyuan_video": 201, "svd_i2v": 25 }
const numFramesDefMap = { "wan_v2.1_1.3b": 81, "wan_v2.1_14b": 81, "hunyuan_video": 129, "svd_i2v": 14 }

/** [ config.fbs name, comfy widget name, the node it belongs to, the property name in DT's json config] */
export const propertyData = [
    ['start_width', 'width', 'DrawThingsSampler', 'width', 'int', 512, 128, 2048, 64, 'roundTo64'],
    ['start_height', 'height', 'DrawThingsSampler', 'height', 'int', 512, 128, 2048, 64, 'roundTo64'],
    ['seed', 'seed', 'DrawThingsSampler', 'seed', 'int', -1, -1, null, 1, 'modulo=4294967295'],
    ['steps', 'steps', 'DrawThingsSampler', 'steps', 'int', 16, 1, 150, 1],
    ['guidance_scale', 'cfg', 'DrawThingsSampler', 'guidanceScale', 'float', 5, 0, 50, 0.1],
    ['strength', 'strength', 'DrawThingsSampler', 'strength', 'float', 1, 0, 1, 0.01],
    ['model', 'model', 'DrawThingsSampler', 'model', 'DT_MODEL', null],
    ['sampler', 'sampler_name', 'DrawThingsSampler', 'sampler', 'index', 0, samplers],
    ['batch_count', 'batch_count', 'DrawThingsSampler', 'batchCount', 'int', 1, 1, 4, 1],
    ['batch_size', 'batch_size', 'DrawThingsSampler', 'batchSize', 'int', 1, 1, 1, 1],
    ['hires_fix', 'high_res_fix', 'DrawThingsSampler', 'hiresFix', 'bool', false],
    ['hires_fix_start_width', 'high_res_fix_start_width', 'DrawThingsSampler', 'hiresFixWidth', 'int', 512, 128, 2048, 64, 'roundTo64,ifTrue=hiresFix'],
    ['hires_fix_start_height', 'high_res_fix_start_height', 'DrawThingsSampler', 'hiresFixHeight', 'int', 512, 128, 2048, 64, 'roundTo64,ifTrue=hiresFix'],
    ['hires_fix_strength', 'high_res_fix_strength', 'DrawThingsSampler', 'hiresFixStrength', 'float', 0.7, 0, 1, 0.01, 'ifTrue=hiresFix'],


    ['image_guidance_scale', 'image_guidance_scale', 'DrawThingsSampler', 'imageGuidanceScale', 'float', 5, 0, 50, 0.1],
    ['seed_mode', 'seed_mode', 'DrawThingsSampler', 'seedMode', 'index', 2, seedModes],
    ['clip_skip', 'clip_skip', 'DrawThingsSampler', 'clipSkip', 'int', 1, 1, 23, 1],
    ['controls', null, 'DrawThingsControlNet', 'controls'],
    ['loras', null, 'DrawThingsLoRA', 'loras'],
    ['mask_blur', 'mask_blur', 'DrawThingsSampler', 'maskBlur', 'float', 2.5, 0, 15, 0.1],
    ['face_restoration', null, null, 'faceRestoration'],
    ['decode_with_attention', null, null],
    ['hires_fix_decode_with_attention', null, null],
    ['clip_weight', null, null],
    ['negative_prompt_for_image_prior', null, null],
    ['image_prior_steps', null, null],

    ['original_image_height', null, null, 'originalImageHeight'],
    ['original_image_width', null, null, 'originalImageWidth'],
    ['crop_top', null, null, 'cropTop'],
    ['crop_left', null, null, 'cropLeft'],
    ['target_image_height', null, null, 'targetImageHeight'],
    ['target_image_width', null, null, 'targetImageWidth'],
    ['aesthetic_score', null, null, 'aestheticScore'],
    ['negative_aesthetic_score', null, null, 'negativeAestheticScore'],
    ['zero_negative_prompt', null, null, 'zeroNegativePrompt'],
    ['negative_original_image_height', null, null, 'negativeOriginalImageHeight'],
    ['negative_original_image_width', null, null, 'negativeOriginalImageWidth'],
    ['name', null, null, null],

    ['fps_id', 'fps', 'DrawThingsSampler', 'fps', 'int', 12, 1, 30, 1],
    ['motion_bucket_id', 'motion_scale', 'DrawThingsSampler', 'motionScale', 'int', 127, 0, 255, 1],
    ['cond_aug', 'guiding_frame_noise', 'DrawThingsSampler', 'guidingFrameNoise', 'float', 0.02, 0, 1, 0.01],
    ['start_frame_cfg', 'start_frame_guidance', 'DrawThingsSampler', 'startFrameGuidance', 'float', 1, 0, 15, 0.1],

    ['num_frames', 'num_frames', 'DrawThingsSampler', 'numFrames', 'int', numFramesDefMap, 1, numFramesDefMap, 1],

    ['mask_blur_outset', 'mask_blur_outset', 'DrawThingsSampler', 'maskBlurOutset', 'float', 0, -100, 100, 0.1],
    ['sharpness', 'sharpness', 'DrawThingsSampler', 'sharpness', 'float', 0, 0, 30, 0.1],
    ['shift', 'shift', 'DrawThingsSampler', 'shift', 'float', 1, 0, 8, 0.01],
    ['stage_2_steps', null, null, 'stage2Steps'],
    ['stage_2_cfg', null, null, 'stage2Guidance'],
    ['stage_2_shift', null, null, 'stage2Shift'],
    ['tiled_decoding', 'tiled_decoding', 'DrawThingsSampler', 'tiledDecoding', 'bool', false],
    ['decoding_tile_width', 'decoding_tile_width', 'DrawThingsSampler', 'decodingTileWidth', 'int', 512, 128, 2048, 64, 'roundTo64,ifTrue=tiledDecoding'],
    ['decoding_tile_height', 'decoding_tile_height', 'DrawThingsSampler', 'decodingTileHeight', 'int', 512, 128, 2048, 64, 'roundTo64,ifTrue=tiledDecoding'],
    ['decoding_tile_overlap', 'decoding_tile_overlap', 'DrawThingsSampler', 'decodingTileOverlap', 'int', 512, 64, 1024, 64, 'roundTo64,ifTrue=tiledDecoding'],
    ['stochastic_sampling_gamma', 'stochastic_sampling_gamma', null, 'stochasticSamplingGamma'],
    ['preserve_original_after_inpaint', 'preserve_original', 'DrawThingsSampler', 'preserveOriginalAfterInpaint', 'bool', true],
    ['tiled_diffusion', 'tiled_diffusion', 'DrawThingsSampler', 'tiledDiffusion', 'bool', false],
    ['diffusion_tile_width', 'diffusion_tile_width', 'DrawThingsSampler', 'diffusionTileWidth', 'int', 512, 128, 2048, 64, 'roundTo64,ifTrue=tiledDiffusion'],
    ['diffusion_tile_height', 'diffusion_tile_height', 'DrawThingsSampler', 'diffusionTileHeight', 'int', 512, 128, 2048, 64, 'roundTo64,ifTrue=tiledDiffusion'],
    ['diffusion_tile_overlap', 'diffusion_tile_overlap', 'DrawThingsSampler', 'diffusionTileOverlap', 'int', 512, 64, 1024, 64, 'roundTo64,ifTrue=tiledDiffusion'],

    ['t5_text_encoder', null, null, 't5TextEncoder'],
    ['separate_clip_l', 'separate_clip_l', 'DrawThingsSampler', 'separateClipL', 'bool', false],
    ['clip_l_text', 'clip_l_text', 'DrawThingsSampler', null, 'string', "", 'ifTrue=separateClipL'],
    ['separate_open_clip_g', 'separate_open_clip_g', 'DrawThingsSampler', 'separateOpenClipG', 'bool', false],
    ['open_clip_g_text', 'open_clip_g_text', 'DrawThingsSampler', null, 'string', "", 'ifTrue=separateOpenClipG'],
    ['speed_up_with_guidance_embed', 'speed_up', 'DrawThingsSampler', 'speedUpWithGuidanceEmbed', 'bool', true],
    ['guidance_embed', 'guidance_embed', 'DrawThingsSampler', 'guidanceEmbed', 'float', 4.5, 0, 50, 0.1, 'ifFalse=speedUpWithGuidanceEmbed'],
    ['resolution_dependent_shift', 'res_dpt_shift', 'DrawThingsSampler', 'resolutionDependentShift', 'bool', true],
    ['tea_cache_start', 'tea_cache_start', 'DrawThingsSampler', 'teaCacheStart', 'int', 5, 0, 'ref=steps', 1, 'ifTrue=teaCache'],
    ['tea_cache_end', 'tea_cache_end', 'DrawThingsSampler', 'teaCacheEnd', 'int', 'ref=steps', 0, 'ref=steps', 1, 'ifTrue=teaCache'],
    ['tea_cache_threshold', 'tea_cache_threshold', 'DrawThingsSampler', 'teaCacheThreshold', 'float', 0.3, 0, 1, 0.01, 'ifTrue=teaCache'],
    ['tea_cache', 'tea_cache', 'DrawThingsSampler', 'teaCache', 'bool', false],
    ['separate_t5', null, null, 'separateT5'],
    ['t5_text', null, null, null],
    ['tea_cache_max_skip_steps', 'tea_cache_max_skip_steps', 'DrawThingsSampler', 'teaCacheMaxSkipSteps', 'int', 3, 1, 50, 1, 'ifTrue=teaCache'],

    // causal_inference_enabled is implied by causal_inference==0
    ['causal_inference_enabled', null, null, null],
    ['causal_inference', 'causal_inference', 'DrawThingsSampler', 'causalInference', 'int', 3, 0, 129, 4, 'ifPos=set(causalInference, true),causInfConvert'],

    // in upscaler node
    ['upscaler', 'upscaler', 'DrawThingsUpscaler', 'upscaler'],
    ['upscaler_scale_factor', 'upscaler_scale_factor', 'DrawThingsUpscaler', 'upscalerScaleFactor'],
    // in refiner node
    ['refiner_model', 'refiner_model', 'DrawThingsRefiner', 'refinerModel'],
    ['refiner_start', 'refiner_start', 'DrawThingsRefiner', 'refinerStart'],
]

/** @typedef {{ fbs: string, python: string, node: string, json: string }} DTProperty */

function roundBy64(value) {
    return Math.round(value / 64) * 64
}

/** @type {Record<string, (key, value, widget: import('@comfyorg/litegraph').IWidget, node, config) => void>} */
const importers = {
    model: async (k, v, w, n, c) => {
        await modelService.updateNodes()
        const matchingOption = w?.options?.values?.find(ov => ov.value?.file === v)
        if (matchingOption) w.value = matchingOption
    },
    start_width: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    start_height: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    sampler: (k, v, w) => {
        w.value = samplers[v]
    },
    seed: (k, v, w, n) => {
        if (typeof v === "number" && v >= 0) {
            w.value = v
            // Originally was setting to "fixed" if the config has a specific seed
            // but then I realised copying a config from draw things *always* has a seed
            // const controlWidget = n.widgets.find((w) => w.name === "control_after_generate")
            // if (controlWidget) controlWidget.value = "fixed"
        }
    },
    hires_fix_start_width: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    hires_fix_start_height: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    seed_mode: (k, v, w) => {
        if (w && seedModes[v]) w.value = seedModes[v]
    },
    decoding_tile_width: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    decoding_tile_height: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    decoding_tile_overlap: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    diffusion_tile_width: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    diffusion_tile_height: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    diffusion_tile_overlap: (k, v, w) => {
        if (w) w.value = roundBy64(v)
    },
    guidance_embed: (k, v, w, n, c) => {
        if (w) w.value = v
    },
    resolution_dependent_shift: (k, v, w, n, c) => {
        if (w) w.value = v
        if (v) {
            const shiftWidget = n.widgets.find((w) => w.name === "shift")
            const width = c.width || n.widgets.find((w) => w.name === "width")?.value
            const height = c.height || n.widgets.find((w) => w.name === "height")?.value
            if (shiftWidget && width && height) shiftWidget.value = calcShift(width, height)
        }
    },
    causal_inference: (k, v, w, n, c) => {
        // only set if enabled in the config
        if (w && typeof v === 'number') w.value = v * 4 - 3
    },
}

const exporters = {
    // start_width: {},
    // start_height: {},
    model: async (w, n, c) => {
        if (w && w.value && w.value.value) c.model = w.value.value.file ?? w.value.value.name
    },
    sampler: (w, n, c) => {
        if (w && typeof w.value === 'string') c.sampler = samplers.indexOf(w.value)
    },
    // hires_fix_start_width: {},
    // hires_fix_start_height: {},
    seed_mode: (w, n, c) => {
        if (w && typeof w.value === 'string') c.seed_mode = seedModes.indexOf(w.value)
    },
    // decoding_tile_width: {},
    // decoding_tile_height: {},
    // decoding_tile_overlap: {},
    // diffusion_tile_width: {},
    // diffusion_tile_height: {},
    // diffusion_tile_overlap: {},
    // guidance_embed: (w, n, c) => {
    // },
    // resolution_dependent_shift: (w, n, c) => {
    // },
    // shift: (w, n, c) => {
    // },
    causal_inference: (w, n, c) => {
        if (w && typeof w.value === 'number') c.causal_inference = (w.value + 3) / 4
    },
}

class DTProperty {
    constructor(fbs, python, node, json, type, defaultValue, ...rest) {
        this.fbs = fbs
        this.python = python
        this.node = node
        this.json = json
        this.type = type
        this.defaultValue = defaultValue

        if (type === "int" || type === "float") {
            this.min = rest[0]
            this.max = rest[1]
            this.step = rest[2]
            this.spec = rest[3]
        }

        if (type === "bool") {
            this.spec = rest[0]
        }

        if (type === "index") {
            this.values = rest[0]
            this.spec = rest[1]
        }

        if (type === "string") {
            this.spec = rest[0]
        }

        // console.log(this.fbs, this.defaultValue)
    }

    customImport = undefined
    customExport = undefined

    async import(jsonKey, jsonValue, widget, node, config) {
        if (this.customImport)
            return await this.customImport(jsonKey, jsonValue, widget, node, config)
        else {
            if (widget)
                widget.value = jsonValue
        }
    }

    async export(widget, node, config) {
        if (this.customExport)
            return await this.customExport(widget, node, config)
        else {
            if (this.json && widget && widget.value !== undefined) config[this.json] = widget.value
        }
    }

    coerce(value) {
        if (this.type === "int" || this.type === "float") {
            if (typeof value !== "number")
                return this.defaultValue || 0
            if (Number.isFinite(this.min) && value < this.min) return this.min
            if (Number.isFinite(this.max) && value > this.max) return this.max
            return value
        }

        if (this.type === "bool") {
            if (typeof value !== "boolean") return this.defaultValue || false
            return value
        }

        if (this.type === "string") {
            if (typeof value !== "string") return this.defaultValue || ""
            return value
        }

        if (this.type === "index") {
            if (typeof value === "number" && value >= 0 && value < this.values.length)
                return this.values[value]
            if (typeof value === "string" && this.values.includes(value)) return value
            return this.values[this.defaultValue]
        }

        return value
    }
}

/** @type {DTProperty[]} */
export const properties = propertyData.map(([fbs, ...rest]) => {
    const prop = new DTProperty(fbs, ...rest)
    prop.customImport = importers[fbs]
    prop.customExport = exporters[fbs]
    return prop
})

export function findPropertyJson(name) {
    return properties.find(p => p.json === name)
}

export function findPropertyPython(name) {
    return properties.find(p => p.python === name)
}

for (const pd of propertyData) {
    if (pd[4] === "int" || pd[4] === "float") {
        if (pd.length < 9)
            console.log(pd[0])
    }

    if (pd[4] === 'bool') {
        if (pd.length < 6)
            console.log(pd[0])
    }
}
