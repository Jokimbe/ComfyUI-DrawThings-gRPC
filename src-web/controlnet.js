import { nodePackVersion } from './ComfyUI-DrawThings-gRPC.js'
import { findWidgetByName, updateProto } from "./util.js"
import { showWidget } from './widgets.js'

/** @param {import("@comfyorg/litegraph").LGraphNode} node */
function updateControlWidgets(node) {
    const widget = findWidgetByName(node, "control_name")
    const modelInfo = widget?.value?.value
    const isModelSelected = !!modelInfo
    const modifier = modelInfo?.modifier
    const cnetType = modelInfo?.type

    const inputTypeNode = findWidgetByName(node, "control_input_type")

    // control_input_type, hide by default
    // set this automatically based on modifier
    // only show if type=controlnetunion or modifier is missing
    const showInputType = isModelSelected && (!modifier || cnetType === "controlnetunion")
    showWidget(node, "control_input_type", showInputType)

    // global_average_pooling, hide by default
    // visible if model.globalAveragePooling = true
    const showGAP = modelInfo?.global_average_pooling
    showWidget(node, "global_average_pooling", showGAP)

    // down_sampling_rate, hide by default
    // visible if control_input_type or modifier is lowquality, blur, tile
    const downSampleTypes = ["lowquality", "blur", "tile"]
    const showDownsample = downSampleTypes.includes(modifier) || downSampleTypes.includes(inputTypeNode?.value?.toLowerCase())
    showWidget(node, "down_sampling_rate", showDownsample)

    // target_blocks, hide by default
    // visible if modifier=shuffle and version is v1 or sdxl
    const targetBlocksTypes = ["ipadapterplus", "ipadapterfull", "ipadapterfaceidplus"]
    const showTargetBlocks = targetBlocksTypes.includes(cnetType) && (modelInfo?.version === "v1" || modelInfo?.version?.startsWith("sdxl"))
    showWidget(node, "target_blocks", showTargetBlocks)
}

/** @type {import("@comfyorg/litegraph").LGraphNode} */
const controlNetProto = {
    updateDynamicWidgets() {
        try {
            updateControlWidgets(this)
        } catch (error) {
            console.error(error)
        }
    },
    onNodeCreated() {
        this.updateDynamicWidgets()
    },
    onSerialize(serialised) {
        serialised.nodePackVersion = nodePackVersion
        serialised.widget_values_keyed = Object.fromEntries(this.widgets.map(w => ([w.name, w.value])))
    },
    onConfigure(data) {
        if (data.widget_values_keyed) {
            for (const [name, value] of Object.entries(data.widget_values_keyed)) {
                const widget = this.widgets.find((w) => w.name === name)
                if (widget) widget.value = value
            }
        }

        else if (data.widgets_values && data.widgets_values.length === 8) {
            const widgetNames = [
                "control_name",
                "control_input_type",
                "control_mode",
                "control_weight",
                "control_start",
                "control_end",
                "global_average_pooling",
                "invert_image"]
            for (let i = 0; i < widgetNames.length; i++) {
                const widget = this.widgets.find((w) => w.name === widgetNames[i])
                if (widget) widget.value = data.widgets_values[i]
            }
        }

        delete this.widget_values_keyed

        this.updateDynamicWidgets()
    },
    onWidgetChanged(name, value, old_Value, widget) {
        if (name === "control_name") {
            const modifier = value?.value?.modifier
            const inputWidget = findWidgetByName(this, "control_input_type")
            if (modifier && inputWidget?.value !== capitalize(modifier))
                inputWidget.value = capitalize(modifier)
        }

        this.updateDynamicWidgets()
    },
}


/** @type {import("@comfyorg/comfyui-frontend-types").ComfyExtension}*/
export default {
    name: "controlNetNode",

    beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeType.comfyClass === "DrawThingsControlNet") {
            updateProto(nodeType, controlNetProto)
        }
    }
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}
