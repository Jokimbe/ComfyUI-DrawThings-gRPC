import { findPropertyJson, findPropertyPython, findPropertiesByNode } from "./configProperties.js"
import { DtButtonsTypeHandler } from './lora.js'
import { DtModelTypeHandler } from "./models.js"
import { checkVersion } from './upgrade.js'
import { setCallback, updateProto } from "./util.js"


export const nodePackVersion = "1.7.2"
let previewMethod = undefined

// this holds the node definition from python
let dtSamplerNodeData = null

/** @type {import("@comfyorg/comfyui-frontend-types").ComfyExtension} */
export default {
    name: "core",

    getCustomWidgets(app) {
        return {
            DT_MODEL: DtModelTypeHandler,
            "DT_BUTTONS": DtButtonsTypeHandler
        }
    },

    beforeConfigureGraph(graph) {
        for (const node of graph.nodes) {
            if (node.type === "DrawThingsPositive" || node.type === "DrawThingsNegative") {
                node.type = "DrawThingsPrompt"
                node.properties['Node name for S&R'] = "DrawThingsPrompt"
                delete node.properties.ver
                node.widgets_values.unshift("...")
            }
        }
    },

    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeType.comfyClass === "DrawThingsSampler") {
            updateProto(nodeType, samplerProto)
            dtSamplerNodeData = nodeData
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
        await updatePreviewSetting()

        // listen to the manager ui to update preview setting if necessary
        const closeHandler = async () => {
            await updatePreviewSetting()
        }
        setTimeout(() => document.querySelector('button[title="ComfyUI Manager"]').addEventListener("click", async () => {
            document.getElementById('cm-close-button')?.addEventListener("click", closeHandler, { once: true })
        }), 3000)

        // if the prompt is cancelled, send a signal to the server to cancel the grpc request
        setCallback(app.api, "interrupt", async (e) => {
            if (app.graph.nodes.some(n => n.type === "DrawThingsSampler")) {
                await app.api.fetchApi(`/dt_grpc/interrupt`, {
                    method: "POST",
                })
            }
        })
    }
}

/** @type {import("@comfyorg/litegraph").LGraphNode} */
const samplerProto = {
    async onNodeCreated() {
        const inputPos = this.inputs.find((inputPos) => inputPos.name == "positive")
        const inputNeg = this.inputs.find((inputNeg) => inputNeg.name == "negative")
        inputPos.color_on =
            inputPos.color_off =
            inputNeg.color_on =
            inputNeg.color_off =
            app.canvas.default_connection_color_byType["CONDITIONING"]
        app.canvas.default_connection_color_byType["DT_LORA"] = app.canvas.default_connection_color_byType["MODEL"]
        app.canvas.default_connection_color_byType["DT_CNET"] =
            app.canvas.default_connection_color_byType["CONTROL_NET"]

        setTimeout(() => checkVersion(nodePackVersion), 2000)
    },

    onMouseDown(e, pos, canvas) {
        // this exists for easier debugging in devtools
        console.debug("Click!", this)
    },

    onSerialize(serialised) {
        serialised.nodePackVersion = nodePackVersion
        serialised.widget_values_keyed = Object.fromEntries(this.widgets.map(w => ([w.name, w.value])))
    },

    onConfigure(serialised) {
        // at this point, the node should already be loaded with values from the values array

        // if there is keyed data, apply that
        if (serialised.widget_values_keyed) {
            for (const [name, value] of Object.entries(serialised.widget_values_keyed)) {
                const widget = this.widgets.find((w) => w.name === name)
                if (widget) widget.value = value
            }
        }

        this.coerceWidgetValues()

        delete this.widget_values_keyed

        this.updateDynamicWidgets?.()
    },

    coerceWidgetValues() {
        // check each widget value
        const corrections = []
        for (const w of this.widgets) {
            const prop = findPropertyPython(w.name)
            if (!prop) {
                continue
            }
            const coerced = prop.coerce(w.value)
            if (coerced !== w.value) {
                corrections.push({ name: w.name, value: w.value, coerced })
                w.value = coerced
            }
        }

        if (corrections.length) {
            const message = 'The Draw Things Sampler node contained invalid values - they have been corrected:'
            const list = corrections.map((c) => `${c.name}: ${c.value} -> ${c.coerced}`)
            const detail = message + "\n\n" + list.join("\n")

            app.extensionManager.toast.add({
                severity: "info",
                summary: "Draw Things gRPC",
                detail,
                life: 8000
            })
        }
    },

    getConfigInputNodes() {
        const inputs = {
            DrawThingsLoRA: [],
            DrawThingsControlNet: [],
            DrawThingsUpscaler: [],
            DrawThingsRefiner: []
        }

        const upscaler = this.getInputNode(this.findInputSlot("upscaler"))
        if (upscaler) inputs.DrawThingsUpscaler.push(upscaler)

        const refiner = this.getInputNode(this.findInputSlot("refiner"))
        if (refiner) inputs.DrawThingsRefiner.push(refiner)

        let cnet = this.getInputNode(this.findInputSlot("control_net"))
        while (cnet) {
            inputs.DrawThingsControlNet.push(cnet)
            cnet = cnet.getInputNode(cnet.findInputSlot("control_net"))
        }

        let lora = this.getInputNode(this.findInputSlot("lora"))
        while (lora) {
            inputs.DrawThingsLoRA.push(lora)
            lora = lora.getInputNode(lora.findInputSlot("lora_stack"))
        }

        return inputs
    },

    getExtraMenuOptions(canvas, options) {
        const keepNodeShrunk = app.extensionManager.setting.get("drawthings.node.keep_shrunk")
        options.push(
            null,
            {
                content: "Paste Draw Things config",
                callback: () => {
                    navigator.clipboard.readText().then(async (text) => {
                        try {
                            const config = JSON.parse(text)

                            const requiredNodes = []

                            for (const [k, v] of Object.entries(config)) {
                                const prop = findPropertyJson(k)
                                if (!prop) {
                                    console.debug('unknown property in dt config', k, v)
                                    continue
                                }
                                if (prop.node !== this.type) {
                                    console.log(prop.node, k, v)
                                    requiredNodes.push(...prop.getRequiredNodes(v, config))
                                    continue
                                }
                                const widget = this.widgets.find(w => w.name === prop.python)
                                if (!widget) {
                                    console.debug('widget not found for property', k, v)
                                    continue
                                }
                                await prop.import(k, v, widget, this, config)
                                console.debug('imported', prop.json, 'to', widget.name, config[prop.json], '->', widget.value)
                            }
                            this.coerceWidgetValues()
                            this.updateDynamicWidgets?.()

                            console.log(requiredNodes)
                            const availableNodes = this.getConfigInputNodes()
                            const missingNodes = []

                            if (requiredNodes.includes("DrawThingsUpscaler")) {
                                if (!availableNodes.DrawThingsUpscaler.length)
                                    missingNodes.push("DrawThingsUpscaler")
                                else
                                    applyConfig(availableNodes.DrawThingsUpscaler[0], config)
                            }

                            if (requiredNodes.includes("DrawThingsRefiner")) {
                                if (!availableNodes.DrawThingsRefiner.length)
                                    missingNodes.push("DrawThingsRefiner")
                                else
                                    applyConfig(availableNodes.DrawThingsRefiner[0], config)
                            }

                            if (requiredNodes.includes("DrawThingsControlNet")) {
                                const cnetNeeded = requiredNodes.filter(n => n === "DrawThingsControlNet").length
                                if (cnetNeeded > availableNodes.DrawThingsControlNet.length)
                                    missingNodes.push(`${cnetNeeded - availableNodes.DrawThingsControlNet.length} x DrawThingsControlNet`)
                                let controlIndex = 0
                                for (const cnetNode of availableNodes.DrawThingsControlNet) {
                                    applyCnetConfig(cnetNode, config.controls[controlIndex++])
                                }
                            }

                            if (requiredNodes.includes("DrawThingsLoRA")) {
                                const loraNeeded = requiredNodes.filter(n => n === "DrawThingsLoRA").length
                                if (loraNeeded > availableNodes.DrawThingsLoRA.length)
                                    missingNodes.push(`${loraNeeded - availableNodes.DrawThingsLoRA.length} x DrawThingsLoRA`)

                                applyLoraConfig(availableNodes.DrawThingsLoRA, config.loras)
                            }

                            if (missingNodes.length) {
                                app.extensionManager.toast.add({
                                    severity: "warn",
                                    summary: "Draw Things gRPC",
                                    detail: [
                                        'The Draw Things config has been partially loaded. To load the full config, add the following nodes:\n',
                                        ...missingNodes.map(n => `• ${n}`)
                                    ].join('\n'),
                                    life: 8000
                                })
                            }

                        } catch (e) {
                            alert("Failed to parse Draw Things config from clipboard\n\n" + e)
                            console.warn(e)
                        }
                    })
                },
            },
            {
                content: "Copy Draw Things config",
                callback: () => {
                    const config = {}
                    for (const w of this.widgets) {
                        const prop = findPropertyPython(w.name)
                        if (!prop)
                            continue
                        prop.export(w, this, config)
                    }
                    config.loras = []
                    config.control = []
                    navigator.clipboard.writeText(JSON.stringify(config))
                },
            },
            {
                content: (keepNodeShrunk ? "✓ " : "") + "Keep node shrunk when widgets change",
                callback: async () => {
                    try {
                        await app.extensionManager.setting.set("drawthings.node.keep_shrunk", !keepNodeShrunk)
                    } catch (error) {
                        console.error(`Error changing setting: ${error}`)
                    }
                },
            },
            null
        )
    },
}


function applyConfig(node, config) {
    const nodeProps = findPropertiesByNode(node.type)
    for (const nodeProp of nodeProps) {
        const widget = node.widgets.find(w => w.name === nodeProp.python)
        if (!widget) continue
        nodeProp.import(nodeProp.json, config[nodeProp.json], widget, node, config)
    }
}

function applyCnetConfig(node, controlConfig) {
    const widgets = node.widgets.reduce((acc, w) => {
        acc[w.name] = w
        return acc
    }, {})

    if ("file" in controlConfig) {
        const matchingOption = widgets.control_name?.options?.values?.find(wv => wv.value?.file === controlConfig.file)
        if (matchingOption) widgets.control_name.value = matchingOption
    }

    if ("globalAveragePooling" in controlConfig)
        widgets.global_average_pooling.value = !!controlConfig.globalAveragePooling

    if ("weight" in controlConfig && typeof controlConfig.weight === "number")
        widgets.control_weight.value = Math.min(Math.max(controlConfig.weight, 0), 1.5)
    else
        widgets.control_weight.value = 1.0

    if ("guidanceStart" in controlConfig && typeof controlConfig.guidanceStart === "number")
        widgets.control_start.value = Math.min(Math.max(controlConfig.guidanceStart, 0), 1)
    else
        widgets.control_start.value = 0

    if ("guidanceEnd" in controlConfig && typeof controlConfig.guidanceEnd === "number")
        widgets.control_end.value = Math.min(Math.max(controlConfig.guidanceEnd, 0), 1)
    else
        widgets.control_end.value = 1

    if ("downSamplingRate" in controlConfig && typeof controlConfig.downSamplingRate === "number")
        widgets.down_sampling_rate.value = controlConfig.downSamplingRate
    else
        widgets.down_sampling_rate.value = 1

    if ("inputOverride" in controlConfig && typeof controlConfig.inputOverride === "string") {
        const capitalized = controlConfig.inputOverride.charAt(0).toUpperCase() + controlConfig.inputOverride.slice(1)
        if (widgets.control_input_type?.options?.values?.includes(capitalized))
            widgets.control_input_type.value = capitalized
        else
            widgets.control_input_type.value = "Unspecified"
    }
    else
        widgets.control_input_type.value = "Unspecified"

    if ("controlImportance" in controlConfig && typeof controlConfig.controlImportance === "string") {
        const capitalized = controlConfig.controlImportance.charAt(0).toUpperCase() + controlConfig.controlImportance.slice(1)
        if (widgets.control_mode?.options?.values?.includes(capitalized))
            widgets.control_mode.value = capitalized
        else
            widgets.control_mode.value = "Balanced"
    }
    else
        widgets.control_mode.value = "Balanced"

    if ("targetBlocks" in controlConfig && Array.isArray(controlConfig.targetBlocks)) {
        if (controlConfig.targetBlocks.length === 0)
            widgets.target_blocks.value = "All"
        if (controlConfig.targetBlocks.length === 1)
            widgets.target_blocks.value = "Style"
        if (controlConfig.targetBlocks.length > 1)
            widgets.target_blocks.value = "Style and Layout"
    }
    else
        widgets.target_blocks.value = "All"
}

async function applyLoraConfig(nodes, loraConfig) {
    // any exissting loras will be cleared when loading a config
    // lora count will be set to the number of loras in config, unless the current count is higher
    // (to preserve layouts)
    for (let iNode = 0; iNode < nodes.length; iNode++) {
        const node = nodes[iNode]

        const lastIndex = iNode * 8 + 8
        if (loraConfig.length > lastIndex)
            node.loraCount = 8
        else
            // 13 loras
            // 8 - (16 - 13) = 5
            node.loraCount = 8 - (lastIndex - loraConfig.length)

        for (let iSlot = 0; iSlot < 8; iSlot++) {
            const lc = loraConfig[iSlot + iNode * 8]
            const { file, weight, mode } = getLoraSlotWidgets(node, iSlot)

            if (!lc || !lc.file) {
                file.value = "(None selected)"
                weight.value = 1.0
                mode.value = "All"
                continue
            }

            const matchingOption = file?.options?.values?.find(wv => wv.value?.file === lc.file)
            if (matchingOption) file.value = matchingOption


            if ("weight" in lc && typeof lc.weight === "number")
                weight.value = Math.min(Math.max(lc.weight, -5.0), 5.0)
            else weight.value = 1.0

            if ("mode" in lc && typeof lc.mode === "string") {
                const capitalized = lc.mode.charAt(0).toUpperCase() + lc.mode.slice(1)
                if (mode?.options?.values?.includes(capitalized))
                    mode.value = capitalized
                else
                    mode.value = "All"
            }
            else mode.value = "All"
        }
    }
}

function getLoraSlotWidgets(node, loraIndex) {
    const widgets = node.widgets.slice(loraIndex * 3 + 1, loraIndex * 3 + 4)
    return {
        file: widgets[0],
        weight: widgets[1],
        mode: widgets[2],
    }
}


async function updatePreviewSetting() {
    const api = window.comfyAPI.api.api

    const res = await api.fetchApi('/manager/preview_method')
    previewMethod = await res.text()

    const body = new FormData()
    body.append("preview", previewMethod)

    await api.fetchApi(`/dt_grpc/preview`, {
        method: "POST",
        body,
    })
}

/** @import { LGraphCanvas, LGraphNode, WidgetCallback, IWidget } from "litegraph.js"; */
