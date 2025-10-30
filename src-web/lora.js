import { nodePackVersion } from "./ComfyUI-DrawThings-gRPC.js"
import { updateProto } from "./util.js"
import { showWidget } from "./widgets.js"

/**
 * so I don't really see an official way to remove widgets other than .splice
 * which seems weird, because then you have to call onRemove() yourself
 * So I'm going to go with "create 8 of them and hide the ones you don't need"
 * If someone needs more than 8 lora, well, they are crazy, and also they can
 * just chain another node
 *
 * we'll use model = null for loras above count
 * distinct from model = "(None selected)"
 *
 * .loraCount prop will 'add' and 'remove' (hide/show) widgets when changed
 * serialize and deserialize it with the node
 *
 * (outdated) and we'll need a callback on each of the lora models so we can add control
 * image inputs if necessary
 * (current) actually I think I'm going to have a separate node for hint images. It's less
 * "comfy" but aligns better with the draw things API and the app
 *
 * the buttons widget is a custom widget type, so it's defined in the python
 * code, event listeners attached by the type handler
 */

/**
 * @param node {LGraphNode}
 * @param inputName {string}
 * @param inputData {["DT_MODEL", {model_type: string}]}
 */
export function DtButtonsTypeHandler(node, inputName, inputData, app) {
    const { container, buttons } = createButtons([
        {
            label: "Show Mode",
            callback: () => {
                node.showMode = !node.showMode;
            },
            dataTestId: "dtgrpc-lora-show-mode",
        },
        {
            label: "Less",
            callback: () => {
                node.loraCount -= 1;
            },
            dataTestId: "dtgrpc-lora-less",
        },
        {
            label: "More",
            callback: () => {
                node.loraCount += 1;
            },
            dataTestId: "dtgrpc-lora-more",
        },
    ]);
    const options = {
        hideOnZoom: false,
        getValue: () => undefined,
        setValue: (value) => {},
        getMinHeight: () => 36,
        getMaxHeight: () => 36,
        getHeight: () => 36,
        margin: 4,
    };
    const widget = node.addDOMWidget("buttons", "DT_BUTTONS", container, options);
    widget._buttonElements = buttons;
    widget.value = null;
    return { widget };
}

/** @type {import("@comfyorg/litegraph").LGraphNode} */
const loraProto = {
    onNodeCreated(graph) {
        this.loraCount = 1;
        this.showMode = false;
    },

    onConfigure(serialised) {
        if ("loraCount" in serialised) this.loraCount = serialised.loraCount;

        if ("showMode" in serialised) this.showMode = serialised.showMode;

        if (serialised.widget_values_keyed) {
            for (const [name, value] of Object.entries(serialised.widget_values_keyed)) {
                const widget = this.widgets.find((w) => w.name === name);
                if (widget) widget.value = value;
            }
        } else if (serialised.widgets_values && serialised.widgets_values.length === 2) {
            // if keyed values are missing, then values from a previous version
            // have been incorrectly loaded
            // widget_values for all previous version are [ loraModel, weight ]

            // buttons widget, value should be null (None)
            this.widgets[0].value = null;

            // model
            const modelWidget = this.widgets.find((w) => w.name === "lora");
            modelWidget.value = serialised.widgets_values[0];

            // weight
            const weightWidget = this.widgets.find((w) => w.name === "weight");
            weightWidget.value = serialised.widgets_values[1];

            // if loading a previous version, inputs need to be fixed
            const inputs = this.inputs
                .map((input, slot) => ({ slot, input }))
                .filter(({ input }) => input.link !== null);
            const inputNodes = inputs.map(({ input, slot }) => ({ node: this.getInputNode(slot), input, slot }));

            // move lora nodes to correct input slot, disconnect all others
            for (const { node, input, slot } of inputNodes) {
                if (node.type === "DrawThingsLoRA") {
                    this.disconnectInput(slot)
                    this.graph.removeLink(input.link)
                    node.connect(0, this, 0)
                }
                else {
                    this.disconnectInput(slot)
                    this.graph.removeLink(input.link)
                }
            }

            // lastly, remove the image input
            const imageInput = this.inputs.findIndex(input => input.name === 'control_image')
            if (imageInput) this.removeInput(imageInput)
        }

        delete this.widget_values_keyed;
    },

    onSerialize(serialised) {
        serialised.loraCount = this._loraCount;
        serialised.showMode = this._showMode;
        serialised.nodePackVersion = nodePackVersion;
        serialised.widget_values_keyed = Object.fromEntries(this.widgets.map((w) => [w.name, w.value]));
    },

    loraCount: {
        get() {
            return this._loraCount;
        },
        set(count) {
            if (this._loraCount === count) return;
            this._loraCount = Math.max(0, Math.min(count, 8));
            this.updateWidgets();

            const buttons = this.widgets[0]._buttonElements;
            buttons[1].disabled = this._loraCount <= 1;
            buttons[2].disabled = this._loraCount >= 8;
        },
        enumerable: true,
    },

    showMode: {
        get() {
            return this._showMode;
        },
        set(value) {
            if (this._showMode === value) return;
            this._showMode = value;
            this.updateWidgets();

            /** @type {HTMLButtonElement[]} */
            const buttons = this.widgets[0]._buttonElements;
            buttons[0].textContent = value ? "Hide Mode" : "Show Mode";
        },
        enumerable: true,
    },

    updateWidgets() {
        for (let i = 0; i < 8; i++) {
            const modelIndex = i * 3 + 1;
            const weightIndex = i * 3 + 2;
            const modeIndex = i * 3 + 3;
            if (i < this.loraCount) {
                showWidget(this, this.widgets[modelIndex].name, true);
                showWidget(this, this.widgets[weightIndex].name, true);
                showWidget(this, this.widgets[modeIndex].name, this.showMode);
                if (!this.widgets[modelIndex].value) {
                    this.widgets[modelIndex].value = "(None selected)";
                }
            } else {
                showWidget(this, this.widgets[modelIndex].name, false);
                showWidget(this, this.widgets[weightIndex].name, false);
                showWidget(this, this.widgets[modeIndex].name, false);

                this.widgets[modelIndex].value = null;
            }
        }
    },
};

/** @type {import("@comfyorg/comfyui-frontend-types").ComfyExtension}*/
export default {
    name: "loraNode",

    beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeType.comfyClass === "DrawThingsLoRA") {
            updateProto(nodeType, loraProto);
        }
    },
};

/**
 * @typedef ButtonDef
 * @property {string?} label
 * @property {node => void} callback
 * @property {string?} style
 * @property {string[]?} classList
 * @property {string?} dataTestId
 */

/** @param {ButtonDef[]} buttonsDefs */
function createButtons(buttonsDefs) {
    const container = document.createElement("div");
    container.classList.add("dt-buttons-container");
    const buttons = [];

    for (const buttonDef of buttonsDefs) {
        const button = document.createElement("button");
        buttons.push(button);
        button.classList.add("dt-button");
        if (buttonDef.label) button.innerText = buttonDef.label;
        button.addEventListener("click", () => {
            buttonDef.callback();
        });
        if (buttonDef.style) {
            button.style.cssText = buttonDef.style;
        }
        if (buttonDef.classList) {
            button.classList.add(...buttonDef.classList);
        }
        if (buttonDef.dataTestId) {
            button.setAttribute("data-testid", buttonDef.dataTestId);
        }
        container.appendChild(button);
    }

    return { container, buttons };
}
