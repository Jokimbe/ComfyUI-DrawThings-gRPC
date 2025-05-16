import { app } from "../../scripts/app.js";
import { addServerListeners, DtModelTypeHandler, updateNodeModels } from "./models.js";
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
        if (DrawThingsNodeTypes.includes(node?.comfyClass)) {
            updateNodeModels(node);
        }
        if (node?.comfyClass === "DrawThingsSampler") {
            addServerListeners(node);

            const original_onMouseDown = node.onMouseDown;
            node.onMouseDown = function (e, pos, canvas) {
                console.debug("Click!", node);
                return original_onMouseDown?.apply(this, arguments);
            };

            const inputPos = node.inputs.find(inputPos => inputPos.name == "positive");
            const inputNeg = node.inputs.find(inputNeg => inputNeg.name == "negative");
            inputPos.color_on = inputPos.color_off = inputNeg.color_on = inputNeg.color_off = app.canvas.default_connection_color_byType["CONDITIONING"];
            app.canvas.default_connection_color_byType["DT_LORA"] = app.canvas.default_connection_color_byType["MODEL"];
            app.canvas.default_connection_color_byType["DT_CNET"] = app.canvas.default_connection_color_byType["CONTROL_NET"];
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
        if (DrawThingsNodeTypes.includes(node?.comfyClass) && node?.isDtServerNode) {
            updateNodeModels(node);
        }
    },
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (DrawThingsNodeTypes.includes(nodeType.comfyClass)) {
            // is this a 'root' node (ie - it has a server and port)
            if ("server" in nodeData.input.required && "port" in nodeData.input.required) {
                nodeType.prototype.isDtServerNode = true;
                nodeType.prototype.getServer = function () {
                    const server = this.widgets.find((w) => w.name === "server")?.value;
                    const port = this.widgets.find((w) => w.name === "port")?.value;
                    return { server, port };

                    // todo - update proto instead of adding listeners to each new instance
                };

                nodeType.prototype.getModelVersion = function () {
                    return this.widgets.find((w) => w.options?.modelType === "models")?.value?.value?.version;
                };
            }
            // support or stacker nodes
            else {
                nodeType.prototype.isDtServerNode = false;
                // check if uses the dynamic DT_MODEL type
                const allInputs = Object.values({
                    ...nodeData.input.required,
                    ...nodeData.input.optional,
                });
                if (allInputs.some(([type]) => type === "DT_MODEL")) {
                    const originalOnConnectionsChange = nodeType.prototype.onConnectionsChange;

                    nodeType.prototype.onConnectionsChange = function (...args) {
                        const r = originalOnConnectionsChange?.apply(this, args);
                        const isConnected = args[2];
                        if (isConnected) updateNodeModels(this);
                        return r;
                    };
                }
            }

            if (nodeType.comfyClass === "DrawThingsSampler") {
                setCallback(nodeType.prototype, "getExtraMenuOptions", function (canvas, options) {
                    const keepNodeShrunk = app.extensionManager.setting.get("drawthings.node.keep_shrunk");
                    options.push(
                        null,
                        {
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
                                                    const model = w.options.values.find(
                                                        (val) => val?.value?.file === v
                                                    );
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
                        },
                        {
                            content: (keepNodeShrunk ? "✓ " : "") + "Keep node shrunk when widgets change",
                            callback: async () => {
                                try {
                                    await app.extensionManager.setting.set(
                                        "drawthings.node.keep_shrunk",
                                        !keepNodeShrunk
                                    );
                                } catch (error) {
                                    console.error(`Error changing setting: ${error}`);
                                }
                            },
                        },
                        null
                    );
                });
            }
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
