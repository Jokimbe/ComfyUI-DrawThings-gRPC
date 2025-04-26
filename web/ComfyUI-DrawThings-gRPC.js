import { app } from "../../scripts/app.js";
import { DtModelTypeHandler, updateNodeModels } from "./models.js";
import { setCallback } from "./dynamicInputs.js";

// Include the name of any nodes to have their DT_MODEL inputs updated
const DrawThingsNodeTypes = ["DrawThingsSampler", "DrawThingsControlNet", "DrawThingsLoRA", "DrawThingsUpscaler"];

app.registerExtension({
    name: "ComfyUI-DrawThings-gRPC",
    getCustomWidgets(app) {
        return {
            DT_MODEL: DtModelTypeHandler,
        };
    },
    async nodeCreated(node) {
        if (node?.comfyClass === "DrawThingsSampler") {
            const original_onMouseDown = node.onMouseDown;
            node.onMouseDown = function (e, pos, canvas) {
                console.debug("Click!", node);
                return original_onMouseDown?.apply(this, arguments);
            };

            const inputPos = node.inputs.find((inputPos) => inputPos.name == "positive");
            const inputNeg = node.inputs.find((inputNeg) => inputNeg.name == "negative");
            inputPos.color_on =
                inputPos.color_off =
                inputNeg.color_on =
                inputNeg.color_off =
                    app.canvas.default_connection_color_byType["CONDITIONING"];
            app.canvas.default_connection_color_byType["DT_LORA"] = app.canvas.default_connection_color_byType["MODEL"];
            app.canvas.default_connection_color_byType["DT_CNET"] =
                app.canvas.default_connection_color_byType["CONTROL_NET"];
        }
        // Some default node colours, available are:
        // black, blue, brown, cyan, green, pale_blue, purple, red, yellow
        if (node?.comfyClass === "DrawThingsPositive") {
            node.color = LGraphCanvas.node_colors.green.color;
            node.bgcolor = LGraphCanvas.node_colors.green.bgcolor;
            const output = node.outputs.find(output => output.name == "POSITIVE");
            output.color_on = output.color_off = app.canvas.default_connection_color_byType["CONDITIONING"];
        }
        if (node?.comfyClass === "DrawThingsNegative") {
            node.color = LGraphCanvas.node_colors.red.color;
            node.bgcolor = LGraphCanvas.node_colors.red.bgcolor;
            const output = node.outputs.find(output => output.name == "NEGATIVE");
            output.color_on = output.color_off = app.canvas.default_connection_color_byType["CONDITIONING"];
        }
    },
    async loadedGraphNode(node) {
        for (const widget of node.widgets.filter((w) => w.options?.modelType)) {
            if (widget.value?.toString() === "[object Object]") {
                const value = {
                    ...widget.value,
                    toString() {
                        return this.value.name;
                    },
                };
                widget.setValue(value);
            }
        }
    },

    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeType.comfyClass === "DrawThingsSampler") {
            setCallback(nodeType.prototype, "getExtraMenuOptions", function (canvas, options) {
                options.push({
                    content: "Paste Draw Things config",
                    callback: () => {
                        navigator.clipboard.readText().then((text) => {
                            try {
                                for (const [k, v] of Object.entries(JSON.parse(text))) {
                                    const name = getWidgetName(k);
                                    const w = this.widgets.find((w) => w.name === name);
                                    if (w) {
                                        if (k === "sampler") w.value = samplers[v];
                                        else if (name === "model") {
                                            const model = w.options.values.find((val) => val?.value?.file === v);
                                            if (model) w.value = model;
                                            else w.value = w.options.values[0];
                                        } else if (name === "seed_mode") w.value = seedModes[v];
                                        else w.value = v;
                                    }
                                }
                            } catch (e) {
                                alert("Failed to parse Draw Things config from clipboard");
                                console.warn(e);
                            }
                        });
                    },
                });
            });
        }
    },
    refreshComboInNodes(defs, app) {
        for (const type of DrawThingsNodeTypes) {
            for (const node of app.graph.findNodesByType(type)) {
                if (node.widgets.some((w) => w.options.values === "DT_MODEL")) updateNodeModels(node, true);
            }
        }
    },
});

function getWidgetName(dtName) {
    const map = {
        preserveOriginalAfterInpaint: "preserve_original",
        hiresFix: "high_res_fix",
        sampler: "sampler_name",
    };

    if (dtName in map) return map[dtName];

    return dtName.replace(/([A-Z])/g, "_$1").toLowerCase();
}

const samplers = [
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
];

const seedModes = ["Legacy", "TorchCpuCompatible", "ScaleAlike", "NvidiaGpuCompatible"];

/** @import { LGraphCanvas, LGraphNode, WidgetCallback, IWidget } from "litegraph.js"; */
