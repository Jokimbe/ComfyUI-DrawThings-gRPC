var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src-web/models.js
var app2 = window.comfyAPI.app.app;
var _updateNodesPromise, _ModelService_instances, updateNodes_fn;
var ModelService = class {
  constructor() {
    __privateAdd(this, _ModelService_instances);
    __privateAdd(this, _updateNodesPromise, null);
  }
  async updateNodes() {
    if (!__privateGet(this, _updateNodesPromise)) {
      __privateSet(this, _updateNodesPromise, new Promise((res) => {
        setTimeout(() => {
          __privateSet(this, _updateNodesPromise, null);
          res(__privateMethod(this, _ModelService_instances, updateNodes_fn).call(this));
        }, 10);
      }));
    }
    return __privateGet(this, _updateNodesPromise);
  }
};
_updateNodesPromise = new WeakMap();
_ModelService_instances = new WeakSet();
updateNodes_fn = async function() {
  const dtModelNodes = app2.graph.nodes.filter((n) => n.isDtServerNode !== void 0);
  const graphServerNodes = dtModelNodes.filter((n) => n.isDtServerNode);
  if (!graphServerNodes.length) return;
  const nodesUpdated = new Map(dtModelNodes.map((n) => [n, false]));
  const serverModels = /* @__PURE__ */ new Map();
  for (const sn of graphServerNodes) {
    const { server, port, useTls } = sn.getServer();
    if (!server || !port || useTls === void 0) continue;
    const key = modelInfoStoreKey(server, port, useTls);
    if (!serverModels.has(key)) {
      serverModels.set(key, await getModels(server, port, useTls));
    }
    const models2 = serverModels.get(key);
    sn.updateModels?.(models2);
    nodesUpdated.set(sn, true);
  }
  for (const node of dtModelNodes) {
    if (nodesUpdated.get(node)) continue;
    const serverNodes = node?.findServerNodes();
    if (!serverNodes || !serverNodes.length) continue;
    let mergedModels = {};
    for (const sn of serverNodes) {
      const { server, port, useTls } = sn.getServer();
      if (!server || !port || useTls === void 0) continue;
      const models2 = serverModels.get(modelInfoStoreKey(server, port, useTls));
      mergedModels = mergeModels(mergedModels, models2);
    }
    const versions = serverNodes.map((sn) => sn?.getModelVersion()).filter((v) => v);
    node.updateModels?.(mergedModels, versions);
    nodesUpdated.set(node, true);
  }
  const models = serverModels.size === 1 ? serverModels.values().next().value : null;
  for (const node of nodesUpdated.keys()) {
    if (nodesUpdated.get(node) === false) {
      nodesUpdated.set(node, true);
      node.updateModels?.(models);
    }
  }
};
var modelService = new ModelService();
function DtModelTypeHandler(node, inputName, inputData, app8) {
  const widget = node.addWidget(
    "combo",
    inputName,
    "(None selected)",
    /** @type WidgetCallback<IWidget<any, any>> */
    (value, graph, node2) => {
      node2.saveSelectedModels?.();
      modelService.updateNodes();
    },
    {
      values: ["(None selected)"],
      modelType: inputData[1].model_type
    }
  );
  return { widget };
}
async function getFiles(server, port, useTls) {
  const body = new FormData();
  body.append("server", server);
  body.append("port", port);
  body.append("use_tls", useTls);
  const api = window.comfyAPI.api.api;
  const filesInfoResponse = await api.fetchApi(`/dt_grpc/files_info`, {
    method: "POST",
    body
  });
  return filesInfoResponse;
}
var modelInfoStore = /* @__PURE__ */ new Map();
var modelInfoRequests = /* @__PURE__ */ new Map();
var modelInfoStoreKey = (server, port, useTls) => `${server}:${port}${useTls ? ":tls" : ""}`;
var failedConnectionOptions = ["Couldn't connect to server", "Check server and click to retry"].map((c, i) => ({
  name: c,
  version: "fail",
  order: i + 1
}));
var notConnectedOptions = ["Not connected to sampler node", "Connect to a sampler node to list available models"].map(
  (c) => ({
    name: c,
    version: "fail"
  })
);
async function getModels(server, port, useTls) {
  if (!server || !port || useTls === void 0) return;
  const key = modelInfoStoreKey(server, port, useTls);
  if (modelInfoRequests.has(key)) {
    const request = modelInfoRequests.get(key);
    await request;
  } else {
    const promise = new Promise((resolve) => {
      getFiles(server, port, useTls).then(async (response) => {
        if (!response.ok) {
          modelInfoStore.set(key, null);
        } else {
          const data = await response.json();
          testHack(data);
          modelInfoStore.set(key, data);
        }
        modelInfoRequests.delete(key);
        resolve();
      });
    });
    modelInfoRequests.set(key, promise);
    await promise;
  }
  return modelInfoStore.get(key);
}
var failedConnectionInfo = {
  models: failedConnectionOptions,
  controlNets: notConnectedOptions,
  loras: notConnectedOptions,
  upscalers: notConnectedOptions,
  textualInversions: notConnectedOptions,
  isNotConnected: true
};
modelInfoStore.set(modelInfoStoreKey(), failedConnectionInfo);
function getMenuItem(model, disabled) {
  return {
    value: model,
    content: model.version && model.version !== "fail" ? `${model.name} (${getVersionAbbrev(model.version)})` : model.name,
    toString() {
      return model.name;
    },
    // has_submenu?: boolean;
    disabled,
    // submenu?: IContextMenuSubmenu<TValue>;
    // property?: string;
    // type?: string;
    // slot?: IFoundSlot;
    // callback(this: ContextMenuDivElement<TValue>, value?: TCallbackValue, options?: unknown, event?: MouseEvent, previous_menu?: ContextMenu<TValue>, extra?: TExtra) {
    callback(...args) {
      return false;
    }
  };
}
function mergeModels(modelInfoA, modelInfoB) {
  const merged = {};
  const types = new Set(Object.keys(modelInfoA ?? {}).concat(Object.keys(modelInfoB ?? {})));
  for (const type of types.values()) {
    merged[type] = modelInfoA[type] ?? [];
    const modelFiles = merged[type].map((m) => m.file);
    const extras = (modelInfoB[type] ?? []).filter((m) => !modelFiles.includes(m.file));
    merged[type] = merged[type].concat(extras);
  }
  return merged;
}
var versionNames = {
  v1: "SD",
  v2: "SD2",
  "kandinsky2.1": "Kan",
  "sdxl_base_v0.9": "SDXL",
  "sdxl_refiner_v0.9": "SDXL",
  ssd_1b: "SSD",
  svd_i2v: "SVD",
  "wurstchen_v3.0_stage_c": "Wur",
  "wurstchen_v3.0_stage_b": "Wur",
  sd3: "SD3",
  pixart: "Pix",
  auraflow: "AF",
  flux1: "F1",
  sd3_large: "SD3L",
  hunyuan_video: "Hun",
  "wan_v2.1_1.3b": "Wan",
  "wan_v2.1_14b": "Wan",
  hidream_i1: "HiD",
  qwen_image: "Qwen"
};
function getVersionAbbrev(version) {
  return versionNames[version] ?? version;
}
function testHack(models) {
  try {
    if (new URL(document.location).searchParams.has("dtgrpctesthack")) {
      if (Array.isArray(models?.models)) {
        models.models.push({
          "file": "fake_qwen.ckpt",
          "version": "qwen_image",
          "name": "Qwen Image Fake"
        });
        models.models.push({
          "file": "fake_wan.ckpt",
          "version": "wan_v2.1_14b",
          "name": "Wan Fake"
        });
      }
    }
  } catch {
  }
}

// src-web/configProperties.js
var samplers = [
  "DPM++ 2M Karras",
  "Euler A",
  "DDIM",
  "PLMS",
  "DPM++ SDE Karras",
  "UniPC",
  "LCM",
  "Euler A Substep",
  "DPM++ SDE Substep",
  "TCD",
  "Euler A Trailing",
  "DPM++ SDE Trailing",
  "DPM++ 2M AYS",
  "Euler A AYS",
  "DPM++ SDE AYS",
  "DPM++ 2M Trailing",
  "DDIM Trailing",
  "UniPC Trailing",
  "UniPC AYS"
];
var seedModes = ["Legacy", "TorchCpuCompatible", "ScaleAlike", "NvidiaGpuCompatible"];
function calcShift(h, w) {
  const step1 = h * w / 256;
  const step2 = (1.15 - 0.5) / (4096 - 256);
  const step3 = (step1 - 256) * step2;
  const step4 = step3 + 0.5;
  const result = Math.exp(step4);
  return Math.round(result * 100) / 100;
}
var numFramesDefMap = { "wan_v2.1_1.3b": 81, "wan_v2.1_14b": 81, hunyuan_video: 129, svd_i2v: 14 };
var propertyData = [
  ["start_width", "width", "DrawThingsSampler", "width", "int", 512, 128, 2048, 64, "roundTo64"],
  ["start_height", "height", "DrawThingsSampler", "height", "int", 512, 128, 2048, 64, "roundTo64"],
  ["seed", "seed", "DrawThingsSampler", "seed", "int", -1, -1, null, 1, "modulo=4294967295"],
  ["steps", "steps", "DrawThingsSampler", "steps", "int", 16, 1, 150, 1],
  ["guidance_scale", "cfg", "DrawThingsSampler", "guidanceScale", "float", 5, 0, 50, 0.1],
  ["strength", "strength", "DrawThingsSampler", "strength", "float", 1, 0, 1, 0.01],
  ["model", "model", "DrawThingsSampler", "model", "DT_MODEL", null],
  ["sampler", "sampler_name", "DrawThingsSampler", "sampler", "index", 0, samplers],
  ["batch_count", "batch_count", "DrawThingsSampler", "batchCount", "int", 1, 1, 4, 1],
  ["batch_size", "batch_size", "DrawThingsSampler", "batchSize", "int", 1, 1, 1, 1],
  ["hires_fix", "high_res_fix", "DrawThingsSampler", "hiresFix", "bool", false],
  ["hires_fix_start_width", "high_res_fix_start_width", "DrawThingsSampler", "hiresFixWidth", "int", 512, 128, 2048, 64, "roundTo64,ifTrue=hiresFix"],
  ["hires_fix_start_height", "high_res_fix_start_height", "DrawThingsSampler", "hiresFixHeight", "int", 512, 128, 2048, 64, "roundTo64,ifTrue=hiresFix"],
  ["hires_fix_strength", "high_res_fix_strength", "DrawThingsSampler", "hiresFixStrength", "float", 0.7, 0, 1, 0.01, "ifTrue=hiresFix"],
  ["image_guidance_scale", "image_guidance_scale", "DrawThingsSampler", "imageGuidanceScale", "float", 5, 0, 50, 0.1],
  ["seed_mode", "seed_mode", "DrawThingsSampler", "seedMode", "index", 2, seedModes],
  ["clip_skip", "clip_skip", "DrawThingsSampler", "clipSkip", "int", 1, 1, 23, 1],
  ["controls", null, "DrawThingsControlNet", "controls"],
  ["loras", null, "DrawThingsLoRA", "loras"],
  ["mask_blur", "mask_blur", "DrawThingsSampler", "maskBlur", "float", 2.5, 0, 15, 0.1],
  ["face_restoration", null, null, "faceRestoration"],
  ["decode_with_attention", null, null],
  ["hires_fix_decode_with_attention", null, null],
  ["clip_weight", null, null],
  ["negative_prompt_for_image_prior", null, null],
  ["image_prior_steps", null, null],
  ["original_image_height", null, null, "originalImageHeight"],
  ["original_image_width", null, null, "originalImageWidth"],
  ["crop_top", null, null, "cropTop"],
  ["crop_left", null, null, "cropLeft"],
  ["target_image_height", null, null, "targetImageHeight"],
  ["target_image_width", null, null, "targetImageWidth"],
  ["aesthetic_score", null, null, "aestheticScore"],
  ["negative_aesthetic_score", null, null, "negativeAestheticScore"],
  ["zero_negative_prompt", null, null, "zeroNegativePrompt"],
  ["negative_original_image_height", null, null, "negativeOriginalImageHeight"],
  ["negative_original_image_width", null, null, "negativeOriginalImageWidth"],
  ["name", null, null, null],
  ["fps_id", "fps", "DrawThingsSampler", "fps", "int", 12, 1, 30, 1],
  ["motion_bucket_id", "motion_scale", "DrawThingsSampler", "motionScale", "int", 127, 0, 255, 1],
  ["cond_aug", "guiding_frame_noise", "DrawThingsSampler", "guidingFrameNoise", "float", 0.02, 0, 1, 0.01],
  ["start_frame_cfg", "start_frame_guidance", "DrawThingsSampler", "startFrameGuidance", "float", 1, 0, 15, 0.1],
  ["num_frames", "num_frames", "DrawThingsSampler", "numFrames", "int", 25, 1, numFramesDefMap, 1],
  ["mask_blur_outset", "mask_blur_outset", "DrawThingsSampler", "maskBlurOutset", "float", 0, -100, 100, 0.1],
  ["sharpness", "sharpness", "DrawThingsSampler", "sharpness", "float", 0, 0, 30, 0.1],
  ["shift", "shift", "DrawThingsSampler", "shift", "float", 1, 0, 16, 0.01],
  ["stage_2_steps", null, null, "stage2Steps"],
  ["stage_2_cfg", null, null, "stage2Guidance"],
  ["stage_2_shift", null, null, "stage2Shift"],
  ["tiled_decoding", "tiled_decoding", "DrawThingsSampler", "tiledDecoding", "bool", false],
  ["decoding_tile_width", "decoding_tile_width", "DrawThingsSampler", "decodingTileWidth", "int", 512, 128, 2048, 64, "roundTo64,ifTrue=tiledDecoding"],
  ["decoding_tile_height", "decoding_tile_height", "DrawThingsSampler", "decodingTileHeight", "int", 512, 128, 2048, 64, "roundTo64,ifTrue=tiledDecoding"],
  ["decoding_tile_overlap", "decoding_tile_overlap", "DrawThingsSampler", "decodingTileOverlap", "int", 512, 64, 1024, 64, "roundTo64,ifTrue=tiledDecoding"],
  ["stochastic_sampling_gamma", "stochastic_sampling_gamma", "DrawThingsSampler", "stochasticSamplingGamma", "float", 0.3, 0, 1, 0.01],
  ["preserve_original_after_inpaint", "preserve_original", "DrawThingsSampler", "preserveOriginalAfterInpaint", "bool", true],
  ["tiled_diffusion", "tiled_diffusion", "DrawThingsSampler", "tiledDiffusion", "bool", false],
  ["diffusion_tile_width", "diffusion_tile_width", "DrawThingsSampler", "diffusionTileWidth", "int", 512, 128, 2048, 64, "roundTo64,ifTrue=tiledDiffusion"],
  ["diffusion_tile_height", "diffusion_tile_height", "DrawThingsSampler", "diffusionTileHeight", "int", 512, 128, 2048, 64, "roundTo64,ifTrue=tiledDiffusion"],
  ["diffusion_tile_overlap", "diffusion_tile_overlap", "DrawThingsSampler", "diffusionTileOverlap", "int", 512, 64, 1024, 64, "roundTo64,ifTrue=tiledDiffusion"],
  ["t5_text_encoder", null, null, "t5TextEncoder"],
  ["separate_clip_l", "separate_clip_l", "DrawThingsSampler", "separateClipL", "bool", false],
  ["clip_l_text", "clip_l_text", "DrawThingsSampler", "clipLText", "string", "", "ifTrue=separateClipL"],
  ["separate_open_clip_g", "separate_open_clip_g", "DrawThingsSampler", "separateOpenClipG", "bool", false],
  ["open_clip_g_text", "open_clip_g_text", "DrawThingsSampler", "openClipGText", "string", "", "ifTrue=separateOpenClipG"],
  ["speed_up_with_guidance_embed", "speed_up", "DrawThingsSampler", "speedUpWithGuidanceEmbed", "bool", true],
  ["guidance_embed", "guidance_embed", "DrawThingsSampler", "guidanceEmbed", "float", 4.5, 0, 50, 0.1, "ifFalse=speedUpWithGuidanceEmbed"],
  ["resolution_dependent_shift", "res_dpt_shift", "DrawThingsSampler", "resolutionDependentShift", "bool", true],
  ["tea_cache_start", "tea_cache_start", "DrawThingsSampler", "teaCacheStart", "int", 5, 0, 150, 1, "ifTrue=teaCache"],
  ["tea_cache_end", "tea_cache_end", "DrawThingsSampler", "teaCacheEnd", "int", -1, -151, 150, 1, "ifTrue=teaCache"],
  ["tea_cache_threshold", "tea_cache_threshold", "DrawThingsSampler", "teaCacheThreshold", "float", 0.06, 0, 1, 0.01, "ifTrue=teaCache"],
  ["tea_cache", "tea_cache", "DrawThingsSampler", "teaCache", "bool", false],
  ["separate_t5", null, null, "separateT5"],
  ["t5_text", null, null, null],
  ["tea_cache_max_skip_steps", "tea_cache_max_skip_steps", "DrawThingsSampler", "teaCacheMaxSkipSteps", "int", 3, 1, 50, 1, "ifTrue=teaCache"],
  // causal_inference_enabled is implied by causal_inference>0
  ["causal_inference_enabled", null, null, null],
  ["causal_inference", "causal_inference", "DrawThingsSampler", "causalInference", "int", 0, 0, 129, 4, "ifPos=set(causalInference, true),causInfConvert"],
  ["causal_inference_pad", "causal_inference_pad", "DrawThingsSampler", "causalInferencePad", "int", 0, 0, 129, 4, "causInfConvert"],
  // in upscaler node
  ["upscaler", "upscaler_model", "DrawThingsUpscaler", "upscaler"],
  ["upscaler_scale_factor", "upscaler_scale_factor", "DrawThingsUpscaler", "upscalerScaleFactor", "int", 4, 2, 4, 2],
  // in refiner node
  ["refiner_model", "refiner_model", "DrawThingsRefiner", "refinerModel"],
  ["refiner_start", "refiner_start", "DrawThingsRefiner", "refinerStart", "int", 0.85, 0, 1, 0.01],
  ["cfg_zero_star", "cfg_zero_star", "DrawThingsSampler", "cfgZeroStar", "bool", false],
  ["cfg_zero_star_init_steps", "cfg_zero_star_init_steps", "DrawThingsSampler", "cfgZeroInitSteps", "int", 0, 0, "ref=steps", 1, "ifTrue=cfgZeroStar"]
];
function roundBy64(value) {
  return Math.round(value / 64) * 64;
}
var importers = {
  model: async (k, v, w, n, c) => {
    await modelService.updateNodes();
    const matchingOption = w?.options?.values?.find((ov) => ov.value?.file === v);
    if (matchingOption) w.value = matchingOption;
  },
  refiner_model: (k, v, w) => {
    const matchingOption = w?.options?.values?.find((wv) => wv.value?.file === v);
    if (matchingOption) w.value = matchingOption;
  },
  upscaler: (k, v, w) => {
    const matchingOption = w?.options?.values?.find((wv) => wv.value?.file === v);
    if (matchingOption) w.value = matchingOption;
  },
  start_width: (k, v, w) => {
    if (w) w.value = roundBy64(v);
  },
  start_height: (k, v, w) => {
    if (w) w.value = roundBy64(v);
  },
  sampler: (k, v, w) => {
    w.value = samplers[v];
  },
  seed: (k, v, w, n) => {
    if (typeof v === "number" && v >= 0) {
      w.value = v;
    }
  },
  hires_fix_start_width: (k, v, w, n, c) => {
    if (!c.hiresFix) return;
    if (w) w.value = roundBy64(v);
  },
  hires_fix_start_height: (k, v, w, n, c) => {
    if (!c.hiresFix) return;
    if (w) w.value = roundBy64(v);
  },
  hires_fix_strength: (k, v, w, n, c) => {
    if (!c.hiresFix) return;
    if (w) w.value = v;
  },
  seed_mode: (k, v, w) => {
    if (w && seedModes[v]) w.value = seedModes[v];
  },
  decoding_tile_width: (k, v, w, n, c) => {
    if (!c.tiledDecoding) return;
    if (w) w.value = roundBy64(v);
  },
  decoding_tile_height: (k, v, w, n, c) => {
    if (!c.tiledDecoding) return;
    if (w) w.value = roundBy64(v);
  },
  decoding_tile_overlap: (k, v, w, n, c) => {
    if (!c.tiledDecoding) return;
    if (w) w.value = roundBy64(v);
  },
  diffusion_tile_width: (k, v, w, n, c) => {
    if (!c.tiledDiffusion) return;
    if (w) w.value = roundBy64(v);
  },
  diffusion_tile_height: (k, v, w, n, c) => {
    if (!c.tiledDiffusion) return;
    if (w) w.value = roundBy64(v);
  },
  diffusion_tile_overlap: (k, v, w, n, c) => {
    if (!c.tiledDiffusion) return;
    if (w) w.value = roundBy64(v);
  },
  guidance_embed: (k, v, w, n, c) => {
    if (w) w.value = v;
  },
  resolution_dependent_shift: (k, v, w, n, c) => {
    if (w) w.value = v;
    if (v) {
      const shiftWidget = n.widgets.find((w2) => w2.name === "shift");
      const width = c.width || n.widgets.find((w2) => w2.name === "width")?.value;
      const height = c.height || n.widgets.find((w2) => w2.name === "height")?.value;
      if (shiftWidget && width && height) shiftWidget.value = calcShift(width, height);
    }
  },
  causal_inference: function(k, v, w, n, c) {
    if (Number.isFinite(v)) w.value = v * 4 - 3;
    else w.value = this.defaultValue;
  },
  causal_inference_pad: (k, v, w, n, c) => {
    if (w && typeof v === "number") w.value = v * 4;
  },
  // since upscaler and refiner live in different nodes, it's easier to do
  // coercion in the import function
  upscaler_scale_factor: (k, v, w) => {
    if (v === 2) w.value = 2;
    else w.value = 4;
  },
  refiner_start: (k, v, w) => {
    if (typeof v === "number")
      w.value = Math.min(1, Math.max(0, v));
    else
      w.value = (void 0).defaultValue;
  }
};
var exporters = {
  // start_width: {},
  // start_height: {},
  model: async (w, n, c) => {
    if (w && w.value && w.value.value) c.model = w.value.value.file ?? w.value.value.name;
  },
  sampler: (w, n, c) => {
    if (w && typeof w.value === "string") c.sampler = samplers.indexOf(w.value);
  },
  // hires_fix_start_width: {},
  // hires_fix_start_height: {},
  seed_mode: (w, n, c) => {
    if (w && typeof w.value === "string") c.seed_mode = seedModes.indexOf(w.value);
  },
  // decoding_tile_width: {},
  // decoding_tile_height: {},
  // decoding_tile_overlap: {},
  // diffusion_tile_width: {},
  // diffusion_tile_height: {},
  // diffusion_tile_overlap: {},
  // guidance_embed: (w, n, c) => {
  // },
  // resolution_dependent_shift: (w, n, c) => {
  // },
  // shift: (w, n, c) => {
  // },
  causal_inference: (w, n, c) => {
    if (w && typeof w.value === "number") c.causal_inference = Math.floor((w.value + 3) / 4);
  },
  causal_inference: (w, n, c) => {
    if (w && typeof w.value === "number") c.causal_inference_pad = Math.floor(w.value / 4);
  }
};
var DTProperty = class {
  constructor(fbs, python, node, json, type, defaultValue, ...rest) {
    __publicField(this, "customImport");
    __publicField(this, "customExport");
    this.fbs = fbs;
    this.python = python;
    this.node = node;
    this.json = json;
    this.type = type;
    this.defaultValue = defaultValue;
    if (type === "int" || type === "float") {
      this.min = rest[0];
      this.max = rest[1];
      this.step = rest[2];
      this.spec = rest[3];
    }
    if (type === "bool") {
      this.spec = rest[0];
    }
    if (type === "index") {
      this.values = rest[0];
      this.spec = rest[1];
    }
    if (type === "string") {
      this.spec = rest[0];
    }
  }
  async import(jsonKey, jsonValue, widget, node, config) {
    if (!widget || !node) return;
    if (this.customImport) await this.customImport(jsonKey, jsonValue, widget, node, config);
    else {
      widget.value = jsonValue ?? this.defaultValue;
    }
  }
  async export(widget, node, config) {
    if (this.customExport) await this.customExport(widget, node, config);
    else {
      if (this.json && widget && widget.value !== void 0) config[this.json] = widget.value;
    }
  }
  coerce(value) {
    if (this.type === "int" || this.type === "float") {
      if (typeof value !== "number") return this.defaultValue || 0;
      if (Number.isFinite(this.min) && value < this.min) return this.min;
      if (Number.isFinite(this.max) && value > this.max) return this.max;
      return this.type === "int" ? Math.round(value) : value;
      ;
    }
    if (this.type === "bool") {
      if (typeof value !== "boolean") return this.defaultValue || false;
      return value;
    }
    if (this.type === "string") {
      if (typeof value !== "string") return this.defaultValue || "";
      return value;
    }
    if (this.type === "index") {
      if (typeof value === "number" && value >= 0 && value < this.values.length) return this.values[value];
      if (typeof value === "string" && this.values.includes(value)) return value;
      return this.values[this.defaultValue];
    }
    return value;
  }
  getRequiredNodes(value, config) {
    if (this.node) return [this.node];
    return [];
  }
};
var properties = propertyData.map(([fbs, ...rest]) => {
  const prop = new DTProperty(fbs, ...rest);
  prop.customImport = importers[fbs];
  prop.customExport = exporters[fbs];
  return prop;
});
function findPropertyJson(name) {
  return properties.find((p) => p.json === name);
}
function findPropertyPython(name) {
  return properties.find((p) => p.python === name);
}
function findPropertiesByNode(nodeType) {
  return properties.filter((p) => p.node === nodeType);
}
patchProp("loras", "getRequiredNodes", (value) => {
  if (Array.isArray(value) && value.length > 0)
    return Array(Math.ceil(value.length / 8)).fill("DrawThingsLoRA");
  else
    return [];
});
patchProp("controls", "getRequiredNodes", (value) => {
  if (Array.isArray(value))
    return value.map((_) => "DrawThingsControlNet");
  else
    return [];
});
patchProp("upscaler", "getRequiredNodes", (value) => {
  if (value)
    return ["DrawThingsUpscaler"];
  return [];
});
patchProp("upscaler_scale_factor", "getRequiredNodes", () => []);
patchProp("refinerModel", "getRequiredNodes", (value) => {
  if (value)
    return ["DrawThingsRefiner"];
  return [];
});
patchProp("refinerStart", "getRequiredNodes", () => []);
function patchProp(jsonName, funcName, func) {
  const prop = findPropertyJson(jsonName);
  if (prop)
    prop[funcName] = func;
}

// src-web/configImport.ts
function importConfig(sampler) {
  {
    navigator.clipboard.readText().then(async (text) => {
      try {
        const config = JSON.parse(text);
        const requiredNodes = [];
        for (const [k, v] of Object.entries(config)) {
          const prop = findPropertyJson(k);
          if (!prop) {
            continue;
          }
          if (prop.node !== sampler.type) {
            requiredNodes.push(...prop.getRequiredNodes(v, config));
            continue;
          }
          const widget = sampler.widgets?.find(
            (w) => w.name === prop.python
          );
          if (!widget) {
            continue;
          }
          await prop.import(k, v, widget, sampler, config);
        }
        sampler.coerceWidgetValues();
        sampler.updateDynamicWidgets?.();
        const availableNodes = sampler.getConfigInputNodes();
        const missingNodes = [];
        if (requiredNodes.includes("DrawThingsUpscaler")) {
          if (!availableNodes.DrawThingsUpscaler.length)
            missingNodes.push("DrawThingsUpscaler");
          else
            applyConfig(
              availableNodes.DrawThingsUpscaler[0],
              config
            );
        }
        if (requiredNodes.includes("DrawThingsRefiner")) {
          if (!availableNodes.DrawThingsRefiner.length)
            missingNodes.push("DrawThingsRefiner");
          else
            applyConfig(
              availableNodes.DrawThingsRefiner[0],
              config
            );
        }
        if (requiredNodes.includes("DrawThingsControlNet")) {
          const cnetNeeded = requiredNodes.filter(
            (n) => n === "DrawThingsControlNet"
          ).length;
          if (cnetNeeded > availableNodes.DrawThingsControlNet.length)
            missingNodes.push(
              `${cnetNeeded - availableNodes.DrawThingsControlNet.length} x DrawThingsControlNet`
            );
          let controlIndex = 0;
          for (const cnetNode of availableNodes.DrawThingsControlNet) {
            applyCnetConfig(
              cnetNode,
              config.controls[controlIndex++]
            );
          }
        }
        if (requiredNodes.includes("DrawThingsLoRA")) {
          const loraNeeded = requiredNodes.filter(
            (n) => n === "DrawThingsLoRA"
          ).length;
          if (loraNeeded > availableNodes.DrawThingsLoRA.length)
            missingNodes.push(
              `${loraNeeded - availableNodes.DrawThingsLoRA.length} x DrawThingsLoRA`
            );
          applyLoraConfig(
            availableNodes.DrawThingsLoRA,
            config.loras
          );
        }
        if (missingNodes.length) {
          window.app?.extensionManager.toast.add({
            severity: "warn",
            summary: "Draw Things gRPC",
            detail: [
              "The Draw Things config has been partially loaded. To load the full config, add the following nodes:\n",
              ...missingNodes.map((n) => `\u2022 ${n}`)
            ].join("\n"),
            life: 8e3
          });
        }
      } catch (e) {
        alert(
          "Failed to parse Draw Things config from clipboard\n\n" + e
        );
        console.warn(e);
      }
    });
  }
}
function applyConfig(node, config) {
  const nodeProps = findPropertiesByNode(node.type);
  for (const nodeProp of nodeProps) {
    const widget = node.widgets?.find((w) => w.name === nodeProp.python);
    if (!widget) continue;
    nodeProp.import(
      nodeProp.json,
      config[nodeProp.json],
      widget,
      node,
      config
    );
  }
}
function applyCnetConfig(node, controlConfig) {
  const widgets = node.widgets?.reduce((acc, w) => {
    acc[w.name] = w;
    return acc;
  }, {}) ?? {};
  if ("file" in controlConfig) {
    const options = widgets.control_name?.options;
    const matchingOption = options.values?.find(
      (wv) => wv.value?.file === controlConfig.file
    );
    if (matchingOption) widgets.control_name.value = matchingOption;
  }
  if ("globalAveragePooling" in controlConfig)
    widgets.global_average_pooling.value = !!controlConfig.globalAveragePooling;
  if ("weight" in controlConfig && typeof controlConfig.weight === "number")
    widgets.control_weight.value = Math.min(
      Math.max(controlConfig.weight, 0),
      1.5
    );
  else widgets.control_weight.value = 1;
  if ("guidanceStart" in controlConfig && typeof controlConfig.guidanceStart === "number")
    widgets.control_start.value = Math.min(
      Math.max(controlConfig.guidanceStart, 0),
      1
    );
  else widgets.control_start.value = 0;
  if ("guidanceEnd" in controlConfig && typeof controlConfig.guidanceEnd === "number")
    widgets.control_end.value = Math.min(
      Math.max(controlConfig.guidanceEnd, 0),
      1
    );
  else widgets.control_end.value = 1;
  if ("downSamplingRate" in controlConfig && typeof controlConfig.downSamplingRate === "number")
    widgets.down_sampling_rate.value = controlConfig.downSamplingRate;
  else widgets.down_sampling_rate.value = 1;
  if ("inputOverride" in controlConfig && typeof controlConfig.inputOverride === "string") {
    const capitalized = controlConfig.inputOverride.charAt(0).toUpperCase() + controlConfig.inputOverride.slice(1);
    const options = widgets.control_input_type?.options;
    if (options?.values?.includes(capitalized))
      widgets.control_input_type.value = capitalized;
    else widgets.control_input_type.value = "Unspecified";
  } else widgets.control_input_type.value = "Unspecified";
  if ("controlImportance" in controlConfig && typeof controlConfig.controlImportance === "string") {
    const capitalized = controlConfig.controlImportance.charAt(0).toUpperCase() + controlConfig.controlImportance.slice(1);
    const options = widgets.control_mode?.options;
    if (options?.values?.includes(capitalized))
      widgets.control_mode.value = capitalized;
    else widgets.control_mode.value = "Balanced";
  } else widgets.control_mode.value = "Balanced";
  if ("targetBlocks" in controlConfig && Array.isArray(controlConfig.targetBlocks)) {
    if (controlConfig.targetBlocks.length === 0)
      widgets.target_blocks.value = "All";
    if (controlConfig.targetBlocks.length === 1)
      widgets.target_blocks.value = "Style";
    if (controlConfig.targetBlocks.length > 1)
      widgets.target_blocks.value = "Style and Layout";
  } else widgets.target_blocks.value = "All";
}
async function applyLoraConfig(nodes, loraConfig) {
  for (let iNode = 0; iNode < nodes.length; iNode++) {
    const node = nodes[iNode];
    const lastIndex = iNode * 8 + 8;
    if (loraConfig.length > lastIndex) node.loraCount = 8;
    else node.loraCount = 8 - (lastIndex - loraConfig.length);
    for (let iSlot = 0; iSlot < 8; iSlot++) {
      const lc = loraConfig[iSlot + iNode * 8];
      const { file, weight, mode } = getLoraSlotWidgets(node, iSlot);
      if (!lc || !lc.file) {
        file.value = "(None selected)";
        weight.value = 1;
        mode.value = "All";
        continue;
      }
      const loraOptions = file?.options;
      const matchingOption = loraOptions?.values?.find(
        (wv) => wv.value?.file === lc.file
      );
      if (matchingOption) file.value = matchingOption;
      if ("weight" in lc && typeof lc.weight === "number")
        weight.value = Math.min(Math.max(lc.weight, -5), 5);
      else weight.value = 1;
      if ("mode" in lc && typeof lc.mode === "string") {
        const capitalized = lc.mode.charAt(0).toUpperCase() + lc.mode.slice(1);
        const options = mode?.options;
        if (options?.values?.includes(capitalized))
          mode.value = capitalized;
        else mode.value = "All";
      } else mode.value = "All";
    }
  }
}
function getLoraSlotWidgets(node, loraIndex) {
  const widgets = node.widgets?.slice(loraIndex * 3 + 1, loraIndex * 3 + 4) ?? [];
  return {
    file: widgets[0],
    weight: widgets[1],
    mode: widgets[2]
  };
}

// src-web/util.ts
function setCallback(target, callbackName, callback) {
  const original = target[callbackName];
  target[callbackName] = function(...args) {
    const r = original?.apply(this, args);
    callback?.apply(this, args);
    return r;
  };
}
function updateProto(base, update) {
  const proto = base.prototype;
  for (const key in update) {
    const val = update[key];
    if (typeof val === "function" && typeof proto[key] === "function") {
      const original = proto[key];
      const added = val;
      proto[key] = function(...args) {
        const r = original.apply(this, args);
        try {
          added.apply(this, args);
        } finally {
          return r;
        }
      };
    } else if (isPropertyDescriptor(val)) {
      Object.defineProperty(proto, key, val);
    } else {
      proto[key] = val;
    }
  }
}
function isPropertyDescriptor(v) {
  if (v == null) return false;
  const hasDescKeys = "value" in v || "get" in v || "set" in v || "writable" in v || "enumerable" in v || "configurable" in v;
  return typeof v === "object" && hasDescKeys;
}
var propertyMap = {
  preserveOriginalAfterInpaint: "preserve_original",
  hiresFix: "high_res_fix",
  sampler: "sampler_name"
};
var reversePropertyMap = Object.fromEntries(Object.entries(propertyMap).map(([k, v]) => [v, k]));
function findWidgetByName(node, name) {
  return node.widgets?.find((w) => w.name === name);
}

// src-web/widgets.js
var app3 = window.comfyAPI.app.app;
var basicWidgets = [
  "server",
  "port",
  "use_tls",
  // "model",
  "strength",
  "seed",
  "control_after_generate",
  "width",
  "height",
  "steps",
  "cfg",
  "sampler_name",
  "res_dpt_shift",
  "shift",
  "batch_size",
  "num_frames"
];
var advancedWidgets = [
  "seed_mode",
  "speed_up",
  "guidance_embed",
  "fps",
  "motion_scale",
  "guiding_frame_noise",
  "start_frame_guidance",
  "causal_inference",
  "causal_inference_pad",
  // zero neg
  // sep clip
  "clip_skip",
  "sharpness",
  "mask_blur",
  "mask_blur_outset",
  "preserve_original",
  "separate_clip_l",
  "clip_l_text",
  "separate_open_clip_g",
  "open_clip_g_text",
  "high_res_fix",
  "high_res_fix_start_width",
  "high_res_fix_start_height",
  "high_res_fix_strength",
  "upscaler",
  "image_guidance_scale",
  "tiled_decoding",
  "decoding_tile_width",
  "decoding_tile_height",
  "decoding_tile_overlap",
  "tiled_diffusion",
  "diffusion_tile_width",
  "diffusion_tile_height",
  "diffusion_tile_overlap",
  "tea_cache",
  "tea_cache_start",
  "tea_cache_end",
  "tea_cache_threshold",
  "tea_cache_max_skip_steps"
];
var origProps = {};
function updateInput(input, node) {
  if (!input || !input.widget || !node || !node.getWidgetFromSlot) return;
  if (input._origPos === void 0) {
    input._origPos = input.pos;
    const widget = node.getWidgetFromSlot(input);
    Object.defineProperty(input, "pos", {
      get() {
        if (widget.hidden) {
          return this.collapsedPos;
        } else {
          return input._origPos;
        }
      },
      set(value) {
        input._origPos = value;
      }
    });
  }
}
function showWidget(node, widgetName, show = false, suffix = "") {
  const widget = findWidgetByName(node, widgetName);
  if (!widget) return;
  if (!origProps[widget.name]) {
    origProps[widget.name] = {
      // origType: widget.type,
      origComputeSize: widget.computeSize,
      origComputedHeight: widget.computedHeight
    };
  }
  const isVisible = !widget.hidden;
  if (isVisible === show) return;
  widget.computeSize = show ? origProps[widget.name].origComputeSize : () => [0, -4];
  widget.computedHeight = show ? origProps[widget.name].origComputedHeight : 0;
  widget.hidden = !show;
  widget.linkedWidgets?.forEach((w) => showWidget(node, w, ":" + widget.name, show));
  const minHeight = node.computeSize()[1];
  if (minHeight > node.size[1]) node.setSize([node.size[0], minHeight]);
  if (app3.extensionManager.setting.get("drawthings.node.keep_shrunk") && minHeight < node.size[1])
    node.setSize([node.size[0], minHeight]);
  setTimeout(() => app3.canvas.setDirty(true, true), 10);
}
function showWidgets(node, show, ...widgetNames) {
  widgetNames.forEach((w) => showWidget(node, w, show));
}
function updateSamplerWidgets(node) {
  const selectedModel = findWidgetByName(node, "model")?.value;
  const version = selectedModel?.value?.version ?? node?._lastSelectedModel?.model?.value?.version;
  const settings = findWidgetByName(node, "settings")?.value;
  const isBasic = settings === "Basic" || settings === "All";
  const isAdvanced = settings === "Advanced" || settings === "All";
  showWidgets(node, isBasic, ...basicWidgets);
  showWidgets(node, isAdvanced, ...advancedWidgets);
  if (isBasic) {
    const isTcd = findWidgetByName(node, "sampler_name")?.value === "TCD";
    showWidget(node, "stochastic_sampling_gamma", isTcd);
    const resDPTShiftAvailable = ["flux1", "sd3", "hidream_i1", "qwen_image"].includes(version);
    showWidget(node, "res_dpt_shift", resDPTShiftAvailable);
    const shiftDisabled = resDPTShiftAvailable && findWidgetByName(node, "res_dpt_shift")?.value;
    findWidgetByName(node, "shift").disabled = shiftDisabled;
    const isVideo = ["hunyuan_video", "wan_v2.1_1.3b", "wan_v2.1_14b", "svd_i2v"].includes(version);
    showWidget(node, "num_frames", isVideo);
    const zeroCfgAvailable = ["flux1", "hidream_i1", "wan_v2.1_1.3b", "wan_v2.1_14b", "sd3", "hunyuan_video", "qwen_image"].includes(
      version
    );
    const zeroCfgEnabled = zeroCfgAvailable && findWidgetByName(node, "cfg_zero_star")?.value;
    showWidget(node, "cfg_zero_star", zeroCfgAvailable);
    showWidget(node, "cfg_zero_star_init_steps", zeroCfgEnabled);
  }
  if (isAdvanced) {
    const teaCacheAvailable = ["flux1", "hidream_i1", "wan_v2.1_1.3b", "wan_v2.1_14b", "hunyuan_video"].includes(
      version
    );
    const teaCacheEnabled = teaCacheAvailable && findWidgetByName(node, "tea_cache")?.value;
    showWidget(node, "tea_cache", teaCacheAvailable);
    showWidgets(
      node,
      teaCacheEnabled,
      "tea_cache_start",
      "tea_cache_end",
      "tea_cache_threshold",
      "tea_cache_max_skip_steps"
    );
    const speedUpAvailable = ["flux1", "hidream_i1", "hunyuan_video"].includes(version);
    showWidget(node, "speed_up", speedUpAvailable);
    const speedUpEnabled = findWidgetByName(node, "speed_up")?.value;
    showWidget(node, "guidance_embed", speedUpAvailable && !speedUpEnabled);
    const separateClipLAvailable = ["flux1", "hidream_i1", "sd3"].includes(version);
    showWidget(node, "separate_clip_l", separateClipLAvailable);
    const separateClipLEnabled = separateClipLAvailable && findWidgetByName(node, "separate_clip_l")?.value;
    showWidget(node, "clip_l_text", separateClipLEnabled);
    const separateOpenClipGAvailable = ["sd3"].includes(version);
    showWidget(node, "separate_open_clip_g", separateOpenClipGAvailable);
    const separateOpenClipGEnabled = separateOpenClipGAvailable && findWidgetByName(node, "separate_open_clip_g")?.value;
    showWidget(node, "open_clip_g_text", separateOpenClipGEnabled);
    const isSvd = ["svd_i2v"].includes(version);
    showWidgets(node, isSvd, "fps", "motion_scale", "guiding_frame_noise", "start_frame_guidance");
    const causalInferenceAvailable = ["wan_v2.1_1.3b", "wan_v2.1_14b"].includes(version);
    showWidget(node, "causal_inference", causalInferenceAvailable);
    showWidget(node, "causal_inference_pad", causalInferenceAvailable);
    const hiResFixEnabled = findWidgetByName(node, "high_res_fix")?.value;
    showWidgets(
      node,
      hiResFixEnabled,
      "high_res_fix_start_width",
      "high_res_fix_start_height",
      "high_res_fix_strength"
    );
    const tiledDecodingEnabled = findWidgetByName(node, "tiled_decoding")?.value;
    showWidgets(node, tiledDecodingEnabled, "decoding_tile_width", "decoding_tile_height", "decoding_tile_overlap");
    const tiledDiffusionEnabled = findWidgetByName(node, "tiled_diffusion")?.value;
    showWidgets(
      node,
      tiledDiffusionEnabled,
      "diffusion_tile_width",
      "diffusion_tile_height",
      "diffusion_tile_overlap"
    );
  }
}
var widgets_default = {
  name: "widgets",
  settings: [
    {
      id: "drawthings.node.keep_shrunk",
      type: "boolean",
      name: "Keep node shrunk when widgets change",
      default: true,
      category: ["DrawThings", "Nodes", "Keep node shrunk"],
      onChange: (newVal, oldVal) => {
        if (oldVal === false && newVal === true) {
          app3.graph.nodes.filter((n) => n.type === "DrawThingsSampler").forEach((n) => {
            setTimeout(() => n.updateDynamicWidgets(), 10);
          });
        }
      }
    }
  ],
  async beforeRegisterNodeDef(nodeType, nodeData, app8) {
    if (nodeType.comfyClass === "DrawThingsSampler") {
      updateProto(nodeType, samplerWidgetsProto);
    }
  }
};
var samplerWidgetsProto = {
  updateDynamicWidgets() {
    updateSamplerWidgets(this);
  },
  onNodeCreated() {
    this.updateDynamicWidgets();
  },
  onConfigure(data) {
    this.updateDynamicWidgets();
  },
  onInputAdded(input) {
    if (input.widget) updateInput(input, this);
  },
  onWidgetChanged(name, value, old_Value, widget) {
    this.updateDynamicWidgets();
    if (name === "res_dpt_shift") {
      const resDPTShiftAvailable = ["flux1", "sd3", "hidream_i1"].includes(this.getModelVersion());
      const resDptShiftEnabled = resDPTShiftAvailable && findWidgetByName(this, "res_dpt_shift")?.value;
      if (resDptShiftEnabled) {
        const height = findWidgetByName(this, "height").value;
        const width = findWidgetByName(this, "width").value;
        findWidgetByName(this, "shift").value = calcShift(height, width);
      }
    }
  }
};

// src-web/lora.js
function DtButtonsTypeHandler(node, inputName, inputData, app8) {
  const { container, buttons } = createButtons([
    {
      label: "Show Mode",
      callback: () => {
        node.showMode = !node.showMode;
      },
      dataTestId: "dtgrpc-lora-show-mode"
    },
    {
      label: "Less",
      callback: () => {
        node.loraCount -= 1;
      },
      dataTestId: "dtgrpc-lora-less"
    },
    {
      label: "More",
      callback: () => {
        node.loraCount += 1;
      },
      dataTestId: "dtgrpc-lora-more"
    }
  ]);
  const options = {
    hideOnZoom: false,
    getValue: () => void 0,
    setValue: (value) => {
    },
    getMinHeight: () => 36,
    getMaxHeight: () => 36,
    getHeight: () => 36,
    margin: 4
  };
  const widget = node.addDOMWidget("buttons", "DT_BUTTONS", container, options);
  widget._buttonElements = buttons;
  widget.value = null;
  return { widget };
}
var loraProto = {
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
      this.widgets[0].value = null;
      const modelWidget = this.widgets.find((w) => w.name === "lora");
      modelWidget.value = serialised.widgets_values[0];
      const weightWidget = this.widgets.find((w) => w.name === "weight");
      weightWidget.value = serialised.widgets_values[1];
      const inputs = this.inputs.map((input, slot) => ({ slot, input })).filter(({ input }) => input.link !== null);
      const inputNodes = inputs.map(({ input, slot }) => ({ node: this.getInputNode(slot), input, slot }));
      for (const { node, input, slot } of inputNodes) {
        if (node.type === "DrawThingsLoRA") {
          this.disconnectInput(slot);
          this.graph.removeLink(input.link);
          node.connect(0, this, 0);
        } else {
          this.disconnectInput(slot);
          this.graph.removeLink(input.link);
        }
      }
      const imageInput = this.inputs.findIndex((input) => input.name === "control_image");
      if (imageInput) this.removeInput(imageInput);
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
    enumerable: true
  },
  showMode: {
    get() {
      return this._showMode;
    },
    set(value) {
      if (this._showMode === value) return;
      this._showMode = value;
      this.updateWidgets();
      const buttons = this.widgets[0]._buttonElements;
      buttons[0].textContent = value ? "Hide Mode" : "Show Mode";
    },
    enumerable: true
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
  }
};
var lora_default = {
  name: "loraNode",
  beforeRegisterNodeDef(nodeType, nodeData, app8) {
    if (nodeType.comfyClass === "DrawThingsLoRA") {
      updateProto(nodeType, loraProto);
    }
  }
};
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

// src-web/upgrade.js
import * as App from "../../scripts/app.js";
var app5 = App.app;
var dataPath = "./drawthings-grpc/data.json";
async function checkVersion() {
  const announced = await getAnnounced();
  const latestAnnouncement = announcements[announcements.length - 1];
  if (!announced.includes(latestAnnouncement.version)) {
    await saveAnnounced(latestAnnouncement.version);
    app5.extensionManager.toast.add({
      summary: latestAnnouncement.title,
      detail: latestAnnouncement.detail,
      severity: "success",
      life: 0
    });
  }
}
async function getAnnounced() {
  const data = await getUserData();
  return data?.announced ?? [];
}
async function saveAnnounced(version) {
  const data = await getUserData();
  if (!data?.announced || !Array.isArray(data?.announced))
    data.announced = [];
  data.announced.push(version);
  await app5.api.storeUserData(dataPath, data);
}
async function getUserData() {
  try {
    const response = await app5.api.getUserData(dataPath);
    if (response.status === 200) {
      const data2 = await response.json();
      return data2;
    }
  } catch (error) {
    console.error(`Error getting user data: ${error}`);
  }
  const data = {
    announced: []
  };
  await app5.api.storeUserData(dataPath, data);
  return data;
}
var announcements = [
  {
    version: "1.6.0",
    title: "DrawThings-gRPC 1.6.0",
    detail: [
      `The Draw Things Sampler has a new input and corresponding node: Hints!`,
      `Hints are Draw Thing's control images, used by ControlNets, Flux Kontext,`,
      `Hi-Dream E1 and a handful of LoRAs. Use this node to add references images,`,
      `like the "Moodboard" in the Draw Things App.`,
      `

For ControlNets, images can be added with either the ControlNet node,`,
      `or with the Hints node.  For LoRAs (like Flux Depth), use the Hints node with the`,
      `appropriate hint type. For Flux Kontext or Hi-Dream E1, use the Hints node with`,
      `"Shuffle (Moodboard)" as the hint type.`,
      `

Note: Currently pose or scribble images are not working correctly, but depth or`,
      `moodboard images should work as expected.`
    ].join(" ")
  },
  {
    version: "1.7.0",
    title: "DrawThings-gRPC 1.7.0",
    detail: [
      `\u2022 Response compression is now supported! It's no longer necessary to disable this option in Draw Things or the gRPC CLI.`,
      `\u2022 Added hi res fix support for hint images`,
      `\u2022 Add support for pose hint images`,
      `\u2022 Fix: Model widgets should no longer show[object Object] when loading a workflow while disconnected`,
      `\u2022 Fix: The Draw Things Sampler Node now shows the correct error when running a workflow while not connected.`,
      `\u2022 Fix: Hint images are provided in both sizes when HiResFix is enabled`,
      `\u2022 Fix: When loading a workflow while disconnected, the widgets for the last selected model version will be shown.`,
      `\u2022 Fix: Update notes messages should only appear once`
    ].join("\n")
  }
];

// src-web/ComfyUI-DrawThings-gRPC.ts
var nodePackVersion = "1.7.2";
var previewMethod = void 0;
var ComfyUI_DrawThings_gRPC_default = {
  name: "core",
  getCustomWidgets() {
    return {
      DT_MODEL: DtModelTypeHandler,
      "DT_BUTTONS": DtButtonsTypeHandler
    };
  },
  beforeConfigureGraph(graph) {
    for (const node of graph.nodes) {
      if (node.type === "DrawThingsPositive" || node.type === "DrawThingsNegative") {
        node.type = "DrawThingsPrompt";
        node.properties["Node name for S&R"] = "DrawThingsPrompt";
        delete node.properties.ver;
        node.widgets_values.unshift("...");
      }
    }
  },
  async beforeRegisterNodeDef(nodeType, _nodeData, _app) {
    if ("comfyClass" in nodeType && nodeType.comfyClass === "DrawThingsSampler") {
      updateProto(nodeType, samplerProto);
    }
  },
  // beforeConfigureGraph: function (graph) {
  //     const samplerNodes = graph.nodes.filter(n => n.type === "DrawThingsSampler")
  //     if (samplerNodes.some(n => n.nodePackVersion !== nodePackVersion)) {
  //         console.log("Nodes in workflow are from different version of ComfyUI-DrawThings-gRPC")
  //     }
  // },
  async setup(app8) {
    await updatePreviewSetting();
    const closeHandler = async () => {
      await updatePreviewSetting();
    };
    setTimeout(
      () => document.querySelector('button[title="ComfyUI Manager"]')?.addEventListener("click", async () => {
        document.getElementById("cm-close-button")?.addEventListener("click", closeHandler, {
          once: true
        });
      }),
      3e3
    );
    setCallback(app8.api, "interrupt", async (_e) => {
      if (app8.graph.nodes.some((n) => n.type === "DrawThingsSampler")) {
        await app8.api.fetchApi(`/dt_grpc/interrupt`, {
          method: "POST"
        });
      }
    });
  }
};
var samplerProto = {
  onNodeCreated: async function() {
    const inputPos = this.inputs?.find(
      (inputPos2) => inputPos2.name == "positive"
    );
    const inputNeg = this.inputs?.find(
      (inputNeg2) => inputNeg2.name == "negative"
    );
    if (app.canvas) {
      inputPos.color_on = inputPos.color_off = inputNeg.color_on = inputNeg.color_off = app.canvas.default_connection_color_byType["CONDITIONING"];
      app.canvas.default_connection_color_byType["DT_LORA"] = app.canvas.default_connection_color_byType["MODEL"];
      app.canvas.default_connection_color_byType["DT_CNET"] = app.canvas.default_connection_color_byType["CONTROL_NET"];
    }
    setTimeout(() => checkVersion(), 2e3);
  },
  onMouseDown: function(_e, _pos, _canvas) {
    console.debug("Click!", this);
    return true;
  },
  onSerialize(serialised) {
    const ser = serialised;
    ser.nodePackVersion = nodePackVersion;
    const widgetValuesKeyed = this.widgets?.map((w) => [w.name, w.value]);
    ser.widget_values_keyed = Object.fromEntries(widgetValuesKeyed ?? []);
  },
  onConfigure(serialised) {
    if ("widget_values_keyed" in serialised && serialised.widget_values_keyed && typeof serialised.widget_values_keyed === "object") {
      for (const [name, value] of Object.entries(
        serialised.widget_values_keyed
      )) {
        const widget = this.widgets?.find((w) => w.name === name);
        if (widget)
          widget.value = value;
      }
    }
    this.coerceWidgetValues();
    if ("widget_values_keyed" in this) delete this.widget_values_keyed;
    this.updateDynamicWidgets?.();
  },
  coerceWidgetValues() {
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
      const message = "The Draw Things Sampler node contained invalid values - they have been corrected:";
      const list = corrections.map(
        (c) => `${c.name}: ${c.value} -> ${c.coerced}`
      );
      const detail = message + "\n\n" + list.join("\n");
      app.extensionManager.toast.add({
        severity: "info",
        summary: "Draw Things gRPC",
        detail,
        life: 8e3
      });
    }
  },
  getConfigInputNodes() {
    const inputs = {
      DrawThingsLoRA: [],
      DrawThingsControlNet: [],
      DrawThingsUpscaler: [],
      DrawThingsRefiner: []
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
  getExtraMenuOptions(_canvas, options) {
    const keepNodeShrunk = app.extensionManager.setting.get(
      "drawthings.node.keep_shrunk"
    );
    options.push(
      null,
      {
        content: "Paste Draw Things config",
        callback: () => importConfig(this)
      },
      {
        content: "Copy Draw Things config",
        callback: () => {
          const config = {};
          for (const w of this.widgets ?? []) {
            const prop = findPropertyPython(w.name);
            if (!prop) continue;
            prop.export(w, this, config);
          }
          config.loras = [];
          config.control = [];
          navigator.clipboard.writeText(JSON.stringify(config));
        }
      },
      {
        content: (keepNodeShrunk ? "\u2713 " : "") + "Keep node shrunk when widgets change",
        callback: () => {
          app.extensionManager.setting.set(
            "drawthings.node.keep_shrunk",
            !keepNodeShrunk
          );
        }
      },
      null
    );
    return options;
  }
};
async function updatePreviewSetting() {
  const api = window.comfyAPI.api.api;
  const res = await api.fetchApi("/manager/preview_method");
  previewMethod = await res.text();
  const body = new FormData();
  body.append("preview", previewMethod);
  await api.fetchApi(`/dt_grpc/preview`, {
    method: "POST",
    body
  });
}

// src-web/controlnet.js
function updateControlWidgets(node) {
  const widget = findWidgetByName(node, "control_name");
  const modelInfo = widget?.value?.value;
  const isModelSelected = !!modelInfo;
  const modifier = modelInfo?.modifier;
  const cnetType = modelInfo?.type;
  const inputTypeNode = findWidgetByName(node, "control_input_type");
  const showInputType = isModelSelected && (!modifier || cnetType === "controlnetunion");
  showWidget(node, "control_input_type", showInputType);
  const showGAP = modelInfo?.global_average_pooling;
  showWidget(node, "global_average_pooling", showGAP);
  const downSampleTypes = ["lowquality", "blur", "tile"];
  const showDownsample = downSampleTypes.includes(modifier) || downSampleTypes.includes(inputTypeNode?.value?.toLowerCase());
  showWidget(node, "down_sampling_rate", showDownsample);
  const targetBlocksTypes = ["ipadapterplus", "ipadapterfull", "ipadapterfaceidplus"];
  const showTargetBlocks = targetBlocksTypes.includes(cnetType) && (modelInfo?.version === "v1" || modelInfo?.version?.startsWith("sdxl"));
  showWidget(node, "target_blocks", showTargetBlocks);
}
var controlNetProto = {
  updateDynamicWidgets() {
    try {
      updateControlWidgets(this);
    } catch (error) {
      console.error(error);
    }
  },
  onNodeCreated() {
    this.updateDynamicWidgets();
  },
  onSerialize(serialised) {
    serialised.nodePackVersion = nodePackVersion;
    serialised.widget_values_keyed = Object.fromEntries(this.widgets.map((w) => [w.name, w.value]));
  },
  onConfigure(data) {
    if (data.widget_values_keyed) {
      for (const [name, value] of Object.entries(data.widget_values_keyed)) {
        const widget = this.widgets.find((w) => w.name === name);
        if (widget) widget.value = value;
      }
    } else if (data.widgets_values && data.widgets_values.length === 8) {
      const widgetNames = [
        "control_name",
        "control_input_type",
        "control_mode",
        "control_weight",
        "control_start",
        "control_end",
        "global_average_pooling",
        "invert_image"
      ];
      for (let i = 0; i < widgetNames.length; i++) {
        const widget = this.widgets.find((w) => w.name === widgetNames[i]);
        if (widget) widget.value = data.widgets_values[i];
      }
    }
    delete this.widget_values_keyed;
    this.updateDynamicWidgets();
  },
  onWidgetChanged(name, value, old_Value, widget) {
    if (name === "control_name") {
      const modifier = value?.value?.modifier;
      const inputWidget = findWidgetByName(this, "control_input_type");
      if (modifier && inputWidget?.value !== capitalize(modifier))
        inputWidget.value = capitalize(modifier);
    }
    this.updateDynamicWidgets();
  }
};
var controlnet_default = {
  name: "controlNetNode",
  beforeRegisterNodeDef(nodeType, nodeData, app8) {
    if (nodeType.comfyClass === "DrawThingsControlNet") {
      updateProto(nodeType, controlNetProto);
    }
  }
};
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// src-web/dynamicInputs.js
function setCallback2(target, callbackName, callback) {
  const originalCallback = target[callbackName];
  target[callbackName] = function(...args) {
    const r = originalCallback?.apply(this, args);
    callback?.apply(this, args);
    return r;
  };
}

// src-web/dtModelNodes.js
var dtModelNodeTypes = ["DrawThingsSampler", "DrawThingsControlNet", "DrawThingsLoRA", "DrawThingsUpscaler", "DrawThingsRefiner", "DrawThingsPrompt"];
var dtServerNodeTypes = ["DrawThingsSampler"];
var dtModelNodes_default = {
  name: "modelNodes",
  beforeRegisterNodeDef: (nodeType, nodeData, app8) => {
    if (dtModelNodeTypes.includes(nodeType.comfyClass)) {
      updateProto(nodeType, dtModelNodeProto);
      if (dtServerNodeTypes.includes(nodeType.comfyClass)) {
        updateProto(nodeType, dtServerNodeProto);
      } else if (nodeType.comfyClass === "DrawThingsPrompt") {
        updateProto(nodeType, dtModelPromptNodeProto);
      } else {
        updateProto(nodeType, dtModelStandardNodeProto);
      }
    }
  },
  afterConfigureGraph() {
    modelService.updateNodes();
  }
};
var dtModelNodeProto = {
  saveSelectedModels() {
    const modelWidgets = this.widgets.filter((w) => w.options?.modelType);
    const selections = modelWidgets.reduce((acc, w) => {
      if (typeof w.value === "object" || w.value === "(None selected)") acc[w.name] = w.value;
      else acc[w.name] = this._lastSelectedModel?.[w.name];
      return acc;
    }, {});
    this._lastSelectedModel = selections;
  },
  lastSelectedModel: {
    get() {
      return this._lastSelectedModel;
    },
    enumerable: true
  },
  isDtServerNode: {
    get() {
      return dtServerNodeTypes.includes(this?.comfyClass);
    },
    enumerable: true
  },
  onSerialize(serialised) {
    serialised._lastSelectedModel = JSON.parse(JSON.stringify(this._lastSelectedModel ?? {}));
  },
  onConfigure(serialised) {
    this._lastSelectedModel = serialised._lastSelectedModel || {};
  },
  getModelWidgets() {
    return this.widgets.filter((w) => w.options?.modelType);
  },
  onAdded() {
    modelService.updateNodes();
  },
  findServerNodes() {
    if (dtServerNodeTypes.includes(this.comfyClass)) return [this];
    if (this.outputs.length !== 1)
      throw new Error("what node is this? Should only have a single output");
    function searchOutputNodes(node) {
      const serverNodes = [];
      const outputNodes = node.getOutputNodes(0) ?? [];
      for (const outputNode of outputNodes) {
        if (outputNode.isDtServerNode) serverNodes.push(outputNode);
        else serverNodes.push(...searchOutputNodes(outputNode));
      }
      return serverNodes;
    }
    return searchOutputNodes(this);
  }
};
var dtServerNodeProto = {
  onNodeCreated() {
    const serverWidget = this.widgets.find((w) => w.name === "server");
    if (serverWidget) setCallback2(serverWidget, "callback", () => modelService.updateNodes());
    const portWidget = this.widgets.find((w) => w.name === "port");
    if (portWidget) setCallback2(portWidget, "callback", () => modelService.updateNodes());
    const tlsWidget = this.widgets.find((w) => w.name === "use_tls");
    if (tlsWidget) setCallback2(tlsWidget, "callback", () => modelService.updateNodes());
  },
  getServer() {
    const server = this.widgets.find((w) => w.name === "server")?.value;
    const port = this.widgets.find((w) => w.name === "port")?.value;
    const useTls = this.widgets.find((w) => w.name === "use_tls")?.value;
    return { server, port, useTls };
  },
  getModelVersion() {
    return this.widgets.find((w) => w.options?.modelType === "models")?.value?.value?.version;
  },
  /**
   * @param {import("./models.js").ModelInfo} models
   * @param {string} version
   */
  updateModels(models, version) {
    const widgets = this.getModelWidgets();
    for (const widget of widgets) {
      if (!widget) return;
      if (models === null) {
        widget.options.values = ["Not connected", "Click to retry"];
        widget.value = "Not connected";
        continue;
      }
      widget.options.values = ["(None selected)", ...models.models.map((m) => getMenuItem(m)).sort((a, b) => a.content.localeCompare(b.content))];
      if (widget.value === "Click to retry" || widget.value === "Not connected") {
        if (this._lastSelectedModel?.model) widget.value = this._lastSelectedModel.model;
        else widget.value = "(None selected)";
      }
      if (widget.value?.toString() === "[object Object]") {
        const value = {
          ...widget.value,
          toString() {
            return this.value.name;
          }
        };
        widget.value = value;
      }
    }
  }
};
var dtModelStandardNodeProto = {
  onConnectionsChange(type, index, isConnected, link_info, inputOrOutput) {
    if (isConnected) modelService.updateNodes();
  },
  /**
   * @param {import("./models.js").ModelInfo} models
   * @param {string[]} versions
   */
  updateModels(models, versions = []) {
    const widgets = this.getModelWidgets();
    for (const widget of widgets) {
      if (!widget) return;
      const type = widget?.options?.modelType;
      if (!models?.[type]) {
        widget.options.values = ["Not connected", "Click to retry"];
        widget.value = "Not connected";
        continue;
      }
      widget.options.values = ["(None selected)", ...models[type].map((m) => getMenuItem(m, m.version && versions.length > 0 && !versions.includes(m.version))).sort((a, b) => {
        if (a.disabled && !b.disabled) return 1;
        if (!a.disabled && b.disabled) return -1;
        return a.content.toUpperCase().localeCompare(b.content.toUpperCase());
      })];
      if (widget.value === "Click to retry" || widget.value === "Not connected") {
        if (this._lastSelectedModel?.[widget.name]) widget.value = fixLabel(this._lastSelectedModel[widget.name]);
        else widget.value = "(None selected)";
      }
      if (widget.value?.toString() === "[object Object]") {
        const value = {
          ...widget.value,
          toString() {
            return this.value.name;
          }
        };
        widget.value = value;
      }
    }
  }
};
var dtModelPromptNodeProto = {
  onConnectionsChange(type, index, isConnected, link_info, inputOrOutput) {
    if (isConnected) modelService.updateNodes();
  },
  updateModels(models, version) {
    this._models = models?.textualInversions || null;
    this._version = version;
    this.updateOptions();
  },
  updateOptions() {
    const widgets = this.getModelWidgets();
    for (const widget of widgets) {
      if (!widget) return;
      if (this._models === null) {
        widget.options.values = ["Not connected", "Click to retry"];
        widget.value = "Not connected";
        return;
      }
      const promptText = this.widgets.find((w) => w.name === "prompt")?.value;
      const matches = [...promptText.matchAll(/<(.*?)>/gm)];
      const tags = matches.map((m) => m[1]);
      widget.options.values = ["...", ...this._models.map((m) => getMenuItem(m, this._version && this._version.length > 0 && !this._version.includes(m.version) && !tags.includes(m.keyword))).map((m) => {
        Object.defineProperty(m, "content", {
          get() {
            return `${tags.includes(m.value.keyword) ? "\u2713 " : ""}${m.value.name} (${m.value.version})`;
          }
        });
        return m;
      }).sort((a, b) => {
        if (a.disabled && !b.disabled) return 1;
        if (!a.disabled && b.disabled) return -1;
        return a.content.toUpperCase().localeCompare(b.content.toUpperCase());
      })];
      widget.value = "...";
    }
  }
};
function fixLabel(value) {
  if (value?.toString() === "[object Object]") {
    return {
      ...value,
      toString() {
        return this.value.name;
      }
    };
  }
  return value;
}

// src-web/dtPromptNode.js
var promptProto = {
  onWidgetChanged(name, value, old_Value, widget) {
    if (name === "insert_textual_inversion") {
      const keyword = value?.value?.keyword;
      if (!keyword) return;
      const tag = `<${keyword}>`;
      const textWidget = this.widgets.find((w) => w.name === "prompt");
      const text = textWidget?.value ?? "";
      if (text.includes(tag)) {
        textWidget.value = text.replaceAll(tag, "");
      } else {
        textWidget.value = `<${keyword}> ${text}`;
      }
      widget.value = "...";
    }
  },
  onConnectionsChange(type, index, isConnected, link_info, inputOrOutput) {
    if (app.extensionManager.setting.get("drawthings.node.color_prompts") === false) return;
    let isPositive = false;
    let isNegative = false;
    for (const linkId of this.outputs[0]?.links ?? []) {
      const link = this.graph.getLink(linkId);
      const targetId = link?.target_id;
      const targetNode = this.graph.getNodeById(targetId);
      if (targetNode?.comfyClass === "DrawThingsSampler") {
        const input = targetNode.inputs[link.target_slot];
        if (input?.name === "positive") isPositive = true;
        if (input?.name === "negative") isNegative = true;
      }
    }
    if (isPositive && isNegative) {
      this.color = LGraphCanvas.node_colors.purple.color;
      this.bgcolor = LGraphCanvas.node_colors.purple.bgcolor;
    } else if (isPositive) {
      this.color = LGraphCanvas.node_colors.green.color;
      this.bgcolor = LGraphCanvas.node_colors.green.bgcolor;
    } else if (isNegative) {
      this.color = LGraphCanvas.node_colors.red.color;
      this.bgcolor = LGraphCanvas.node_colors.red.bgcolor;
    } else {
      this.color = void 0;
      this.bgcolor = void 0;
    }
  },
  onNodeCreated() {
    const output = this.outputs.find((output2) => output2.name == "PROMPT");
    output.color_on = output.color_off = app.canvas.default_connection_color_byType["CONDITIONING"];
    const promptWidget = this.widgets.find((w) => w.name === "prompt");
    const promptNode = this;
    promptWidget.element.addEventListener("change", () => {
      promptNode.updateOptions();
    });
  },
  getExtraMenuOptions(canvas, options) {
    const promptColors = app.extensionManager.setting.get("drawthings.node.color_prompts");
    options.push(
      ...[
        null,
        {
          content: (promptColors ? "\u2713 " : "") + "Change colors when connections change",
          callback: async () => {
            try {
              await app.extensionManager.setting.set("drawthings.node.color_prompts", !promptColors);
            } catch (error) {
              console.error(`Error changing setting: ${error}`);
            }
          }
        },
        null
      ]
    );
  }
};
var dtPromptNode_default = {
  name: "promptNode",
  beforeRegisterNodeDef(nodeType, nodeData, app8) {
    if (nodeType.comfyClass === "DrawThingsPrompt") {
      updateProto(nodeType, promptProto);
    }
  },
  settings: [
    {
      id: "drawthings.node.color_prompts",
      type: "boolean",
      name: "Change prompt node colors when connections change",
      default: true,
      category: ["DrawThings", "Nodes", "Change prompt"],
      onChange: (newVal, oldVal) => {
        if (oldVal === false && newVal === true) {
          app.graph.nodes.filter((n) => n.type === "DrawThingsPrompt").forEach((n) => {
            setTimeout(() => n.onConnectionsChange(), 10);
          });
        }
      }
    }
  ]
};

// src-web/extension.js
import * as App2 from "../../scripts/app.js";
var app7 = App2.app;
var modules = [
  ComfyUI_DrawThings_gRPC_default,
  dtPromptNode_default,
  dtModelNodes_default,
  /* dtDynamicInputs, */
  widgets_default,
  lora_default,
  controlnet_default
];
app7.registerExtension({
  name: "DrawThings-gRPC",
  getCustomWidgets(...args) {
    return ComfyUI_DrawThings_gRPC_default.getCustomWidgets(...args);
  },
  beforeConfigureGraph(...args) {
    for (const module of modules) {
      try {
        module.beforeConfigureGraph?.(...args);
      } catch (e) {
        console.error(`Error in ${module.name} beforeConfigureGraph:`, e);
      }
    }
  },
  beforeRegisterNodeDef(...args) {
    for (const module of modules) {
      try {
        module.beforeRegisterNodeDef?.(...args);
      } catch (e) {
        console.error(`Error in ${module.name} beforeConfigureGraph:`, e);
      }
    }
  },
  afterConfigureGraph(...args) {
    for (const module of modules) {
      try {
        module.afterConfigureGraph?.(...args);
      } catch (e) {
        console.error(`Error in ${module.name} afterConfigureGraph:`, e);
      }
    }
  },
  setup(...args) {
    for (const module of modules) {
      try {
        module.setup?.(...args);
      } catch (e) {
        console.error(`Error in ${module.name} beforeConfigureGraph:`, e);
      }
    }
    injectCss("extensions/drawthings-grpc/drawThings.css");
  },
  settings: modules.flatMap((m) => m.settings ?? []),
  aboutPageBadges: [
    {
      label: `DrawThings-gRPC v${nodePackVersion}`,
      url: "https://github.com/Jokimbe/ComfyUI-DrawThings-gRPC",
      icon: "dt-grpc-about-badge-logo"
    }
  ]
});
function injectCss(href) {
  if (document.querySelector(`link[href^="${href}"]`)) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    const timeout = setTimeout(resolve, 1e3);
    link.addEventListener("load", (e) => {
      clearInterval(timeout);
      resolve();
    });
    link.href = href;
    document.head.appendChild(link);
  });
}
export {
  injectCss
};
//# sourceMappingURL=extension.esm.js.map