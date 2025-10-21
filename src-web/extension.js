import dtCore, { nodePackVersion } from "./ComfyUI-DrawThings-gRPC.js"
import controlNetNode from "./controlnet.js"
import dtModelNodes from "./dtModelNodes.js"
import dtPrompt from "./dtPromptNode.js"
import loraNode from "./lora.js"
import dtWidgets from "./widgets.js"

import * as App from "../../scripts/app.js"

/** @type {import("@comfyorg/comfyui-frontend-types").ComfyApp} */
const app = App.app

const modules = [dtCore, dtPrompt, dtModelNodes, /* dtDynamicInputs, */ dtWidgets, loraNode, controlNetNode]

// different features of the nodepack extension are implemented in different modules
// here we combine them and register a single extension
app.registerExtension({
    name: "DrawThings-gRPC",

    getCustomWidgets(...args) {
        return dtCore.getCustomWidgets(...args)
    },

    beforeConfigureGraph(...args) {
        for (const module of modules) {
            try { module.beforeConfigureGraph?.(...args) }
            catch (e) {
                console.error(`Error in ${module.name} beforeConfigureGraph:`, e)
            }
        }
    },

    beforeRegisterNodeDef(...args) {
        for (const module of modules) {
            try { module.beforeRegisterNodeDef?.(...args) }
            catch (e) {
                console.error(`Error in ${module.name} beforeConfigureGraph:`, e)
            }
        }
    },

    afterConfigureGraph(...args) {
        for (const module of modules) {
            try { module.afterConfigureGraph?.(...args) }
            catch (e) {
                console.error(`Error in ${module.name} afterConfigureGraph:`, e)
            }
        }
    },

    setup(...args) {
        for (const module of modules) {
            try { module.setup?.(...args) }
            catch (e) {
                console.error(`Error in ${module.name} beforeConfigureGraph:`, e)
            }
        }

        injectCss("extensions/drawthings-grpc/drawThings.css")
    },

    settings: modules.flatMap(m => m.settings ?? []),

    aboutPageBadges: [
        {
            label: `DrawThings-gRPC v${nodePackVersion}`,
            url: 'https://github.com/Jokimbe/ComfyUI-DrawThings-gRPC',
            icon: 'dt-grpc-about-badge-logo'
        }
    ],
})

/**
 * Injects CSS into the page with a promise when complete.
 * This was copied from rgthree
 *
 */
export function injectCss(href) {
    if (document.querySelector(`link[href^="${href}"]`)) {
        return Promise.resolve()
    }
    return new Promise((resolve) => {
        const link = document.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("type", "text/css")
        const timeout = setTimeout(resolve, 1000)
        link.addEventListener("load", (e) => {
            clearInterval(timeout)
            resolve()
        })
        link.href = href
        document.head.appendChild(link)
    })
}
