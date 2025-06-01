/** @import { INodeInputSlot, LGraphNode } from '@comfyorg/litegraph' */
import { app } from "../../scripts/app.js";

const allWidgets = [
    "settings",
    "server",
    "port",
    "model",
    "strength",
    "seed",
    "seed_mode",
    "width",
    "height",
    "steps",
    // "num_frames", // For now not touching widgets that are hidden/shown by other widgets
    "cfg",
    // "speed_up",
    "sampler_name",
    // "res_dpt_shift",
    "shift",
    "batch_size",
    "fps",
    "motion_scale",
    "guiding_frame_noise",
    "start_frame_guidance",
    // zero neg
    // sep clip
    "clip_skip",
    "sharpness",
    "mask_blur",
    "mask_blur_outset",
    "preserve_original",
    // ti embed
];
const basicWidgets = [
    "server",
    "port",
    // "model",
    "strength",
    "seed",
    "width",
    "height",
    "steps",
    "cfg",
    "sampler_name",
    // "res_dpt_shift",
    "shift",
    "batch_size",
];
const advancedWidgets = [
    "seed_mode",
    "speed_up",
    "guidance_embed",
    "fps",
    "motion_scale",
    "guiding_frame_noise",
    "start_frame_guidance",
    // zero neg
    // sep clip
    "clip_skip",
    "sharpness",
    "mask_blur",
    "mask_blur_outset",
    "preserve_original",
    "separate_clip_l",
    "separate_open_clip_g",
    // ti embed

];

const getSetWidgets = [
    "settings",
    "model",
    "res_dpt_shift",
    "high_res_fix",
    "tiled_decoding",
    "tiled_diffusion",
    "tea_cache",
    "speed_up",
    "separate_clip_l",
    "separate_open_clip_g",

    "control_name",
];
const getSetTypes = ["DrawThingsSampler", "DrawThingsControlNet"];

let origProps = {};

// From flux-auto-workflow.js
function calcShift(h, w) {
    const step1 = (h * w) / 256;
    const step2 = (1.15 - 0.5) / (4096 - 256);
    const step3 = (step1 - 256) * step2;
    const step4 = step3 + 0.5;
    const result = Math.exp(step4);
    return Math.round(result * 100) / 100;
}

function findWidgetByName(node, name) {
    return node.widgets.find((w) => w.name === name);
}

function doesInputWithNameExist(node, name) {
    return node.inputs ? node.inputs.some((input) => input.name === name) : false;
}

/**
 * Adds _isHidden property to an input slot and changes the pos property to return
 * the "collapsed position" if the slot is hidden
 * @param {INodeInputSlot?} input
 */
function updateInput(input) {
    if (!input) return;
    if (input._isHidden === undefined) {
        input._isHidden = false
        input._origPos = input.pos;

        Object.defineProperty(input, "pos", {
            get() {
                if (input._isHidden) {
                    return this.collapsedPos
                } else {
                    return input._origPos
                }
            },
            set(value) {
                input._origPos = value
            }
        })
    }
}

/** @param node {LGraphNode} */
function showWidget(node, widgetName, show = false, suffix = "") {
    const widget = findWidgetByName(node, widgetName);
    if (!widget) return;
    if (!origProps[widget.name]) {
        origProps[widget.name] = {
            origType: widget.type,
            origComputeSize: widget.computeSize,
            origComputedHeight: widget.computedHeight,
        };
    }

    const input = node.getSlotFromWidget(widget)
    if (input) {
        updateInput(input)
        input._isHidden = !show
    }

    widget.type = show ? origProps[widget.name].origType : "hidden" + suffix;
    widget.computeSize = show ? origProps[widget.name].origComputeSize : () => [0, -4];
    widget.computedHeight = show ? origProps[widget.name].origComputedHeight : 0;

    widget.linkedWidgets?.forEach((w) => showWidget(node, w, ":" + widget.name, show));

    const minHeight = node.computeSize()[1];
    if (minHeight > node.size[1]) node.setSize([node.size[0], minHeight]);

    if (app.extensionManager.setting.get("drawthings.node.keep_shrunk") && minHeight < node.size[1])
        node.setSize([node.size[0], minHeight]);

    setTimeout(() =>app.canvas.setDirty(true, true), 10)
}

function widgetLogic(node, widget) {
    switch (widget.name) {
        case "settings":
            // First show all, then either hide basic or advanced
            allWidgets.forEach(listAllWidgets);
            function listAllWidgets(listedWidget) {
                // console.log(listedWidget);
                showWidget(node, listedWidget, true);
            }

            switch (widget.value) {
                case "Basic":
                    // Hide advanced
                    advancedWidgets.forEach(listAdvancedWidgets);
                    function listAdvancedWidgets(listedWidget) {
                        showWidget(node, listedWidget, false);
                    }
                    break;
                case "Advanced":
                    // Hide basic
                    basicWidgets.forEach(listBasicWidgets);
                    function listBasicWidgets(listedWidget) {
                        showWidget(node, listedWidget, false);
                    }
                    break;
            }
            break;

        case "model":
            const selectedModel = widget.value;
            const version = selectedModel?.value?.version;
            if (!version) break;

            /**
             * A list of versions can be found here:
             * https://github.com/drawthingsai/draw-things-community/blob/6f03f7d4a200ffeb6fdc6022a6ee579e4e534831/Libraries/SwiftDiffusion/Sources/Samplers/Sampler.swift#L4
             * "v1", "v2", "kandinsky2.1", "sdxl_base_v0.9", "sdxl_refiner_v0.9", "ssd_1b", "svd_i2v",
             * "wurstchen_v3.0_stage_c", "wurstchen_v3.0_stage_b", "sd3", "pixart", "auraflow", "flux1",
             * "sd3_large", "hunyuan_video", "wan_v2.1_1.3b", "wan_v2.1_14b", "hidream_i1"
             */

            // NOTE: I know it's not pretty, but this way it accounts for more models/namechanges in the future, to a certain extent ofc...

            let isSD3 = false;
            if (version.includes("sd3")) { // leaving room for more
                isSD3 = true;
            }
            let isFlux = false;
            if (
                version.includes("flux") ||
                version.includes("hidream")
            ) {
                isFlux = true;
            }
            let isSVD = false;
            if (version.includes("svd")) { // leaving room for more
                isSVD = true;
            }
            let isWurst = false;
            if (version.includes("wurst")) { // leaving room for more
                isWurst = true;
            }
            let isVideo = false;
            if (
                version.includes("svd") ||
                version.includes("video") ||
                version.includes("wan")
            ) {
                isVideo = true;
            }

            if (isFlux === false && isVideo === false) {
                showWidget(node, "tea_cache", false);
                showWidget(node, "tea_cache_start", false);
                showWidget(node, "tea_cache_end", false);
                showWidget(node, "tea_cache_threshold", false);
                showWidget(node, "tea_cache_max_skip_steps", false);
            } else {
                showWidget(node, "tea_cache", true);
                const teaCacheEnabled = findWidgetByName(node, "tea_cache")?.value;
                showWidget(node, "tea_cache_start", teaCacheEnabled);
                showWidget(node, "tea_cache_end", teaCacheEnabled);
                showWidget(node, "tea_cache_threshold", teaCacheEnabled);
                showWidget(node, "tea_cache_max_skip_steps", teaCacheEnabled);
            }

            if (isSD3 === false && isFlux === false) {
                showWidget(node, "res_dpt_shift", false);
                findWidgetByName(node, "shift").disabled = false;
            } else {
                showWidget(node, "res_dpt_shift", true);
                findWidgetByName(node, "shift").disabled = findWidgetByName(node, "res_dpt_shift")?.value;
            }

            showWidget(node, "speed_up", isFlux);
            showWidget(node, "guidance_embed", isFlux);

            // separate clip texts
            showWidget(node, "separate_clip_l", isFlux || isSD3)
            showWidget(node, "clip_l_text", isFlux || isSD3)
            showWidget(node, "separate_open_clip_g", isSD3)
            showWidget(node, "open_clip_g_text", isSD3)

            // video options
            showWidget(node, "num_frames", isVideo);

            showWidget(node, "fps", isSVD);
            showWidget(node, "motion_scale", isSVD);
            showWidget(node, "guiding_frame_noise", isSVD);
            showWidget(node, "start_frame_guidance", isSVD);
            break;

        case "res_dpt_shift":
            if (widget.value == true) {
                const height = findWidgetByName(node, "height").value;
                const width = findWidgetByName(node, "width").value;
                findWidgetByName(node, "shift").value = calcShift(height, width);
            }
            findWidgetByName(node, "shift").disabled = widget.value
            break;

        case "speed_up":
            findWidgetByName(node, "guidance_embed").disabled = widget.value;
            break;

        case "high_res_fix":
            showWidget(node, "high_res_fix_start_width", widget.value);
            showWidget(node, "high_res_fix_start_height", widget.value);
            showWidget(node, "high_res_fix_strength", widget.value);
            break;

        case "tiled_decoding":
            showWidget(node, "decoding_tile_width", widget.value);
            showWidget(node, "decoding_tile_height", widget.value);
            showWidget(node, "decoding_tile_overlap", widget.value);
            break;

        case "tiled_diffusion":
            showWidget(node, "diffusion_tile_width", widget.value);
            showWidget(node, "diffusion_tile_height", widget.value);
            showWidget(node, "diffusion_tile_overlap", widget.value);
            break;

        case "tea_cache":
            showWidget(node, "tea_cache_start", widget.value);
            showWidget(node, "tea_cache_end", widget.value);
            showWidget(node, "tea_cache_threshold", widget.value);
            break;

        case "separate_clip_l":
            showWidget(node, "clip_l_text", widget.value);
            break;

        case "separate_open_clip_g":
            showWidget(node, "open_clip_g_text", widget.value);
            break;

        case "control_name":
            if (widget.value.value != null) {
                const modifier = widget.value.value.modifier;
                const typeWidget = findWidgetByName(node, "control_input_type");
                const options = typeWidget.options.values;
                const option = options.find((option) => option.toLowerCase() == modifier);
                if (option != null) {
                    typeWidget.value = option;
                }
            }
            break;
    }
}

/** @param {import("@comfyorg/litegraph").LGraphNode} node */
function getSetters(node) {
    if (node.widgets) {
        for (const w of node.widgets) {
            if (getSetWidgets.includes(w.name)) {
                const originalCallback = w.callback
                w.callback = function (value, graph, node) {
                    const r = originalCallback?.apply(this, [value, graph, node]);
                    widgetLogic(node, w)
                    return r
                }

                widgetLogic(node, w)
            }
        }
    }
}

app.registerExtension({
    name: "ComfyUI-DrawThings-gRPC-Widgets",

    async nodeCreated(node) {
        const nodeType = node.constructor.type;
        if (getSetTypes.includes(nodeType)) {
            getSetters(node);
        }
    },
    async afterConfigureGraph() {
        app.graph._nodes.forEach(listNodes);
        function listNodes(node) {
            const nodeType = node.constructor.type;
            if (getSetTypes.includes(nodeType)) {
                getSetters(node);
            }
        }
    },
    settings: [
        {
            id: "drawthings.node.keep_shrunk",
            type: "boolean",
            name: "Keep node shrunk",
            default: false,
            category: ["DrawThings", "Nodes", "Keep node shrunk"],
            onChange: (newVal, oldVal) => {
                if (oldVal === false && newVal === true) {
                    app.graph.nodes
                        .filter((n) => n.type === "DrawThingsSampler")
                        .forEach((n) => {
                            setTimeout(() => showWidget(n, "server", true), 10);
                        });
                }
            },
        },
    ],
});
