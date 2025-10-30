import { findPropertyJson, findPropertyPython } from "./configProperties.js"
import { DtButtonsTypeHandler } from './lora.js'
import { DtModelTypeHandler } from "./models.js"
import { checkVersion } from './upgrade.js'
import { setCallback, updateProto } from "./util.js"


export const nodePackVersion = "1.7.4"
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

    getExtraMenuOptions(canvas, options) {
        const keepNodeShrunk = app.extensionManager.setting.get("drawthings.node.keep_shrunk")
        const bridgeMode = app.extensionManager.setting.get("drawthings.bridge_mode.enabled")
        const bridgeCommunity = app.extensionManager.setting.get("drawthings.bridge_mode.community")
        const bridgeUncurated = app.extensionManager.setting.get("drawthings.bridge_mode.uncurated")

        options.push(null)
        options.push({
            content: "Paste Draw Things config",
            callback: () => {
                navigator.clipboard.readText().then(async (text) => {
                    try {
                        const config = JSON.parse(text)

                        for (const [k, v] of Object.entries(config)) {
                            const prop = findPropertyJson(k)
                            if (!prop) {
                                console.debug('unknown property in dt config', k, v)
                                continue
                            }
                            if (prop.node !== this.type) {
                                console.debug('prop found for support node', k, v)
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
                    } catch (e) {
                        alert("Failed to parse Draw Things config from clipboard\n\n" + e)
                        console.warn(e)
                    }
                })
            },
        })
        options.push({
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
        })
        options.push({
            content: (keepNodeShrunk ? "✓ " : "") + "Keep node shrunk when widgets change",
            callback: async () => {
                try {
                    await app.extensionManager.setting.set("drawthings.node.keep_shrunk", !keepNodeShrunk)
                } catch (error) {
                    console.error(`Error changing setting: ${error}`)
                }
            },
        })
        options.push({
            content: (bridgeMode ? "✓ " : "") + "Use bridge mode",
            callback: async () => {
                try {
                    await app.extensionManager.setting.set("drawthings.bridge_mode.enabled", !bridgeMode)
                } catch (error) {
                    console.error(`Error changing setting: ${error}`)
                }
            },
        })
        if (bridgeMode) {
            options.push({
                content: (bridgeCommunity ? "✓ " : "") + "Show community models",
                callback: async () => {
                    try {
                        await app.extensionManager.setting.set("drawthings.bridge_mode.community", !bridgeCommunity)
                    } catch (error) {
                        console.error(`Error changing setting: ${error}`)
                    }
                },
            })
            options.push({
                content: (bridgeUncurated ? "✓ " : "") + "Show uncurated models",
                callback: async () => {
                    try {
                        await app.extensionManager.setting.set("drawthings.bridge_mode.uncurated", !bridgeUncurated)
                    } catch (error) {
                        console.error(`Error changing setting: ${error}`)
                    }
                },
            })
        }
        options.push(null)
    },
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
