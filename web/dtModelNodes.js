import { app } from "../../scripts/app.js";
import { setCallback } from "./dynamicInputs.js";
import { updateNodeModels } from "./models.js";

const dtModelNodeTypes = ["DrawThingsSampler", "DrawThingsControlNet", "DrawThingsLoRA", "DrawThingsUpscaler"];
const dtServerNodeTypes = ["DrawThingsSampler"];

app.registerExtension({
    name: "ComfyUI-DrawThings-gRPC-DtModelNodes",
    beforeRegisterNodeDef: (nodeType, nodeData, app) => {
        if (dtModelNodeTypes.includes(nodeType.comfyClass)) {
            updateProto(nodeType, dtModelNodeProto);
            if (dtServerNodeTypes.includes(nodeType.comfyClass)) {
                updateProto(nodeType, dtServerNodeProto);
            } else {
                updateProto(nodeType, dtExtraNodeProto);
            }
        }
    },

    nodeCreated: (node) => {},

    loadedGraphNode: (node) => {
        if (dtModelNodeTypes.includes(node?.comfyClass)) {
            node?.saveSelectedModels();
        }
    },
});

/** @type {import("@comfyorg/litegraph").LGraphNode} */
const dtModelNodeProto = {
    onAdded() {
        console.log("hey it was added");
    },
    saveSelectedModels() {
        const modelWidgets = this.widgets.filter((w) => w.options?.modelType);
        const selections = modelWidgets.reduce((acc, w) => {
            acc[w.name] = w.value;
            return acc;
        }, {});

        this._lastSelectedModel = selections;
    },
    lastSelectedModel: {
        get() {
            return this._lastSelectedModel;
        },
        enumerable: true,
    },
    isDtServerNode: {
        get() {
            return dtServerNodeTypes.includes(this?.comfyClass);
        },
        enumerable: true,
    },
};

/** @type {import("@comfyorg/litegraph").LGraphNode} */
const dtServerNodeProto = {
    onNodeCreated() {
        // update when server or port changes
        const serverWidget = this.widgets.find((w) => w.name === "server");
        if (serverWidget) setCallback(serverWidget, "callback", () => updateNodeModels(this));

        const portWidget = this.widgets.find((w) => w.name === "port");
        if (portWidget) setCallback(portWidget, "callback", () => updateNodeModels(this));

        console.log("added with " + serverWidget.value);
    },

    onConfigure() {
        updateNodeModels(this);
    },

    getServer() {
        const server = this.widgets.find((w) => w.name === "server")?.value;
        const port = this.widgets.find((w) => w.name === "port")?.value;
        return { server, port };
    },

    getModelVersion() {
        return this.widgets.find((w) => w.options?.modelType === "models")?.value?.value?.version;
    },
};

/** @type {import("@comfyorg/litegraph").LGraphNode} */
const dtExtraNodeProto = {
    onConnectionsChange(...args) {
        const isConnected = args[2];
        if (isConnected) updateNodeModels(this);
    },
};

/** @param {{prototype: any}} base, @param {Record<string, Function | PropertyDescriptor} update */
function updateProto(base, update) {
    const proto = base.prototype;
    for (const key in update) {
        if (typeof update[key] === "function" && proto[key] !== undefined) {
            const original = proto[key];
            proto[key] = function () {
                const r = original.apply(this, arguments);
                update[key].apply(this, arguments);
                return r;
            };
        } else if (typeof update[key] === "object") {
            Object.defineProperty(proto, key, update[key]);
        } else proto[key] = update[key];
    }
}
