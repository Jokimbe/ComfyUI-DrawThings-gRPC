import { ComfyApi, ComfyApp } from "@comfyorg/comfyui-frontend-types";
import { LGraphNode } from "@comfyorg/litegraph";
import { DTSamplerExtensions } from "./ComfyUI-DrawThings-gRPC";

declare global {
    interface Window {
        app: ComfyApp;
        comfyAPI: {
            api: {
                api: ComfyApi;
            };
        };
    }

    const app: ComfyApp;
}

interface IDTSampler extends LGraphNode {
    constructor: typeof LGraphNode;
    getConfigInputNodes: () => Record<string, LGraphNode[]>;
    coerceWidgetValues: () => void;
    updateDynamicWidgets: () => Promise<void>;
}

type DTSampler = Omit<IDTSampler, "constructor">
