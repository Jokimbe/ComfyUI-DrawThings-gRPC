import { app } from "../../scripts/app.js";
import { addServerListeners, DtModelTypeHandler, updateNodeModels } from "./models.js";

const dtModelNodeTypes = ["DrawThingsSampler", "DrawThingsControlNet", "DrawThingsLoRA", "DrawThingsUpscaler"];

app.registerExtension({
    name: "ComfyUI-DrawThings-gRPC-DtModelNodes",
    beforeRegisterNodeDef: (nodeType, nodeData, app) => {
        if (dtModelNodeTypes.includes(nodeType.comfyClass)) {
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

            // Object.defineProperty(nodeType.prototype, "lastSelectedModel", {
            //     get() {
            //         return this._lastSelectedModel;
            //     },
            //     enumerable: true,
            // });

            // nodeType.prototype.saveSelectedModels = function () {
            //     const modelWidgets = this.widgets.filter((w) => w.options?.modelType);
            //     const selections = modelWidgets.reduce((acc, w) => {
            //         acc[w.name] = w.value;
            //         return acc;
            //     }, {});

            //     this._lastSelectedModel = selections;
            // };

            updateProto(nodeType, dtModelNodeProto);
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
