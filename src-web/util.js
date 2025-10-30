/**
 * @template {Object} T
 * @template {keyof T} K
 * @param {T} target
 * @param {K} callbackName
 * @param {T[K]} callback
 */
export function setCallback(target, callbackName, callback) {
    const originalCallback = target[callbackName];
    target[callbackName] = function (...args) {
        const r = originalCallback?.apply(this, args);
        callback?.apply(this, args);
        return r;
    };
}

/**
 * Updates a prototype with new properties, preserving existing ones. Intended for use with
 * beforeRegisterNodeDef(). See dtModelNodes.js for an example
 *
 * Accepts functions and property descriptors. Functions already on the prototype will be wrapped
 *
 * @param {{prototype: any}} base an object with a prototype to be updated (not the prototype itself)
 * @param {Record<string, Function | PropertyDescriptor | any} update
 */
export function updateProto(base, update) {
    const proto = base.prototype;
    for (const key in update) {
        if (typeof update[key] === "function" && proto[key] !== undefined) {
            const original = proto[key];
            proto[key] = function () {
                const r = original.apply(this, arguments);
                try {
                    update[key].apply(this, arguments);
                } finally {
                    return r;
                }
            };
        } else if (typeof update[key] === "object") {
            Object.defineProperty(proto, key, update[key]);
        } else proto[key] = update[key];
    }
}

const propertyMap = {
    preserveOriginalAfterInpaint: "preserve_original",
    hiresFix: "high_res_fix",
    sampler: "sampler_name",
};
const reversePropertyMap = Object.fromEntries(Object.entries(propertyMap).map(([k, v]) => [v, k]));

/**
 * Converts a DrawThings config property name to a ComfyUI property name.
 *
 * This function maps specific DrawThings names to corresponding widget names
 * using a predefined map. If a name is not found in the map, it converts
 * camelCase names to snake_case by inserting underscores before uppercase
 * letters and converting all characters to lowercase.
 *
 * @param {string} dtName - The DrawThings name to convert.
 * @returns {string} The corresponding widget name.
 */
export function getWidgetName(dtName) {
    if (dtName in propertyMap) return propertyMap[dtName];

    return dtName.replace(/([A-Z])/g, "_$1").toLowerCase();
}

export function getDTPropertyName(widgetName) {
    if (widgetName in reversePropertyMap) return reversePropertyMap[widgetName];

    return widgetName.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}


export function findWidgetByName(node, name) {
    return node.widgets.find((w) => w.name === name)
}
