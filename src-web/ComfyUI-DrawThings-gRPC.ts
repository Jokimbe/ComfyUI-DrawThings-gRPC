import { ComfyExtension } from "@comfyorg/comfyui-frontend-types";
import { LGraphNode } from "@comfyorg/litegraph";
import { importConfig } from "./configImport.js";
import {
    findPropertyPython
} from "./configProperties.js";
import { DtButtonsTypeHandler } from "./lora.js";
import { DtModelTypeHandler } from "./models.js";
import { DTSampler } from "./types.js";
import { checkVersion } from "./upgrade.js";
import { setCallback, updateProto } from "./util.js";

export const nodePackVersion = "1.7.2";
let previewMethod = undefined;

/** @type {import("@comfyorg/comfyui-frontend-types").ComfyExtension} */
export default {
    name: "core",

    getCustomWidgets(): unknown {
        return {
            DT_MODEL: DtModelTypeHandler,
            "DT_BUTTONS": DtButtonsTypeHandler
        }
    },

    beforeConfigureGraph(graph) {
        for (const node of graph.nodes) {
            if (
                node.type === "DrawThingsPositive" ||
                node.type === "DrawThingsNegative"
            ) {
                node.type = "DrawThingsPrompt";
                node.properties["Node name for S&R"] = "DrawThingsPrompt";
                delete node.properties.ver;
                node.widgets_values.unshift("...");
            }
        }
    },

    async beforeRegisterNodeDef(nodeType, _nodeData, _app) {
        if (
            "comfyClass" in nodeType &&
            nodeType.comfyClass === "DrawThingsSampler"
        ) {
            updateProto(nodeType, samplerProto);
        }
    },

    // beforeConfigureGraph: function (graph) {
    //     const samplerNodes = graph.nodes.filter(n => n.type === "DrawThingsSampler")
    //     if (samplerNodes.some(n => n.nodePackVersion !== nodePackVersion)) {
    //         console.log("Nodes in workflow are from different version of ComfyUI-DrawThings-gRPC")
    //     }
    // },

    async setup(app) {
        // query the api for the preview setting
        await updatePreviewSetting();

        // listen to the manager ui to update preview setting if necessary
        const closeHandler = async () => {
            await updatePreviewSetting();
        };
        setTimeout(
            () =>
                document
                    .querySelector('button[title="ComfyUI Manager"]')
                    ?.addEventListener("click", async () => {
                        document
                            .getElementById("cm-close-button")
                            ?.addEventListener("click", closeHandler, {
                                once: true,
                            });
                    }),
            3000
        );

        // if the prompt is cancelled, send a signal to the server to cancel the grpc request
        setCallback(app.api, "interrupt", async (_e) => {
            if (app.graph.nodes.some((n) => n.type === "DrawThingsSampler")) {
                await app.api.fetchApi(`/dt_grpc/interrupt`, {
                    method: "POST",
                });
            }
        });
    },
} as ComfyExtension;

export const samplerProto: Partial<DTSampler> = {
    onNodeCreated: async function (this: DTSampler & LGraphNode) {
        const inputPos = this.inputs?.find(
            (inputPos) => inputPos.name == "positive"
        )!;
        const inputNeg = this.inputs?.find(
            (inputNeg) => inputNeg.name == "negative"
        )!;
        if (app.canvas) {
            inputPos.color_on =
                inputPos.color_off =
                inputNeg.color_on =
                inputNeg.color_off =
                    app.canvas.default_connection_color_byType["CONDITIONING"];
            app.canvas.default_connection_color_byType["DT_LORA"] =
                app.canvas.default_connection_color_byType["MODEL"];
            app.canvas.default_connection_color_byType["DT_CNET"] =
                app.canvas.default_connection_color_byType["CONTROL_NET"];
        }

        setTimeout(() => checkVersion(), 2000);
    },

    onMouseDown: function (_e, _pos, _canvas) {
        // this exists for easier debugging in devtools
        console.debug("Click!", this);
        return true;
    },

    onSerialize(serialised: unknown) {
        const ser = serialised as Record<string, unknown>;
        ser.nodePackVersion = nodePackVersion;

        const widgetValuesKeyed = this.widgets?.map((w) => [w.name, w.value]);
        ser.widget_values_keyed = Object.fromEntries(widgetValuesKeyed ?? []);
    },

    onConfigure(this: DTSampler & LGraphNode, serialised) {
        // at this point, the node should already be loaded with values from the values array

        // if there is keyed data, apply that
        if (
            "widget_values_keyed" in serialised &&
            serialised.widget_values_keyed &&
            typeof serialised.widget_values_keyed === "object"
        ) {
            for (const [name, value] of Object.entries(
                serialised.widget_values_keyed
            )) {
                const widget = this.widgets?.find((w) => w.name === name);
                if (widget)
                    widget.value = value as
                        | string
                        | number
                        | boolean
                        | object
                        | undefined;
            }
        }

        this.coerceWidgetValues();

        if ("widget_values_keyed" in this) delete this.widget_values_keyed;

        this.updateDynamicWidgets?.();
    },

    coerceWidgetValues() {
        // check each widget value
        const corrections = [];
        for (const w of this.widgets ?? []) {
            const prop = findPropertyPython(w.name);
            if (!prop) {
                continue;
            }
            const coerced = prop.coerce(w.value);
            if (coerced !== w.value) {
                corrections.push({ name: w.name, value: w.value, coerced });
                w.value = coerced;
            }
        }

        if (corrections.length) {
            const message =
                "The Draw Things Sampler node contained invalid values - they have been corrected:";
            const list = corrections.map(
                (c) => `${c.name}: ${c.value} -> ${c.coerced}`
            );
            const detail = message + "\n\n" + list.join("\n");

            app.extensionManager.toast.add({
                severity: "info",
                summary: "Draw Things gRPC",
                detail,
                life: 8000,
            });
        }
    },

    getConfigInputNodes(this: LGraphNode) {
        const inputs: Record<string, LGraphNode[]> = {
            DrawThingsLoRA: [],
            DrawThingsControlNet: [],
            DrawThingsUpscaler: [],
            DrawThingsRefiner: [],
        };

        const upscaler = this.getInputNode(this.findInputSlot("upscaler"));
        if (upscaler) inputs.DrawThingsUpscaler.push(upscaler);

        const refiner = this.getInputNode(this.findInputSlot("refiner"));
        if (refiner) inputs.DrawThingsRefiner.push(refiner);

        let cnet = this.getInputNode(this.findInputSlot("control_net"));
        while (cnet) {
            inputs.DrawThingsControlNet.push(cnet);
            cnet = cnet.getInputNode(cnet.findInputSlot("control_net"));
        }

        let lora = this.getInputNode(this.findInputSlot("lora"));
        while (lora) {
            inputs.DrawThingsLoRA.push(lora);
            lora = lora.getInputNode(lora.findInputSlot("lora_stack"));
        }

        return inputs;
    },

    getExtraMenuOptions(this: LGraphNode, _canvas, options) {
        const keepNodeShrunk = app.extensionManager.setting.get(
            "drawthings.node.keep_shrunk"
        );
        options.push(
            null,
            {
                content: "Paste Draw Things config",
                callback: () => importConfig(this as unknown as DTSampler),
            },
            {
                content: "Copy Draw Things config",
                callback: () => {
                    const config: Record<string, unknown> = {};
                    for (const w of this.widgets ?? []) {
                        const prop = findPropertyPython(w.name);
                        if (!prop) continue;
                        prop.export(w, this, config);
                    }
                    config.loras = [];
                    config.control = [];
                    navigator.clipboard.writeText(JSON.stringify(config));
                },
            },
            {
                content:
                    (keepNodeShrunk ? "✓ " : "") +
                    "Keep node shrunk when widgets change",
                callback: () => {
                    app.extensionManager.setting.set(
                        "drawthings.node.keep_shrunk",
                        !keepNodeShrunk
                    );
                },
            },
            null
        );
        return options;
    },
};

async function updatePreviewSetting() {
    const api = window.comfyAPI.api.api;

    const res = await api.fetchApi("/manager/preview_method");
    previewMethod = await res.text();

    const body = new FormData();
    body.append("preview", previewMethod);

    await api.fetchApi(`/dt_grpc/preview`, {
        method: "POST",
        body,
    });
}

/** @import { LGraphCanvas, LGraphNode, WidgetCallback, IWidget } from "litegraph.js"; */
