var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src-web/models/models.json
var models_exports = {};
__export(models_exports, {
  default: () => models_default
});
var models_default;
var init_models = __esm({
  "src-web/models/models.json"() {
    models_default = [
      {
        version: "v1",
        prefix: "redshift style ",
        upcast_attention: false,
        default_scale: 8,
        file: "redshift_v1_f16.ckpt",
        text_encoder: "redshift_v1_clip_vit_l14_f16.ckpt",
        name: "3D Model (Redshift v1)"
      },
      {
        name: "3D Model 768 (Redshift 768)",
        objective: {
          v: {}
        },
        file: "redshift_768_v_f16.ckpt",
        version: "v2",
        upcast_attention: false,
        prefix: "redshift style ",
        text_encoder: "redshift_768_v_open_clip_vit_h14_f16.ckpt",
        default_scale: 12
      },
      {
        upcast_attention: false,
        version: "v1",
        name: "AloeVera's SimpMaker 3K1",
        file: "aloeveras_simpmaker_3k1_f16.ckpt",
        prefix: "",
        default_scale: 8
      },
      {
        name: "Analog (v1)",
        prefix: "analog style ",
        default_scale: 8,
        version: "v1",
        upcast_attention: false,
        file: "analog_v1_f16.ckpt",
        text_encoder: "analog_v1_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Animagine XL v3.1",
        modifier: "none",
        text_encoder: "animagine_xl_v3.1_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "animagine_xl_v3.1_clip_vit_l14_f16.ckpt",
        file: "animagine_xl_v3.1_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Animagine XL v3.1 (8-bit)",
        modifier: "none",
        text_encoder: "animagine_xl_v3.1_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "animagine_xl_v3.1_clip_vit_l14_f16.ckpt",
        file: "animagine_xl_v3.1_q6p_q8p.ckpt"
      },
      {
        prefix: "",
        upcast_attention: false,
        clip_encoder: "open_clip_vit_h14_visual_proj_f16.ckpt",
        text_encoder: "open_clip_vit_h14_vision_model_f16.ckpt",
        conditioning: "noise",
        version: "svd_i2v",
        default_scale: 8,
        name: "AnimateLCM SVD XT v1.1",
        noise_discretization: {
          edm: {
            _0: {
              sigma_max: 700,
              sigma_data: 0.5,
              sigma_min: 2e-3
            }
          }
        },
        modifier: "none",
        objective: {
          v: {}
        },
        file: "animatelcm_svd_xt_v1.1_f16.ckpt"
      },
      {
        prefix: "",
        upcast_attention: false,
        clip_encoder: "open_clip_vit_h14_visual_proj_f16.ckpt",
        text_encoder: "open_clip_vit_h14_vision_model_f16.ckpt",
        conditioning: "noise",
        version: "svd_i2v",
        default_scale: 8,
        name: "AnimateLCM SVD XT v1.1 (8-bit)",
        noise_discretization: {
          edm: {
            _0: {
              sigma_max: 700,
              sigma_data: 0.5,
              sigma_min: 2e-3
            }
          }
        },
        modifier: "none",
        objective: {
          v: {}
        },
        file: "animatelcm_svd_xt_v1.1_q6p_q8p.ckpt"
      },
      {
        text_encoder: "anything_v3_clip_vit_l14_f16.ckpt",
        default_scale: 8,
        version: "v1",
        file: "anything_v3_f16.ckpt",
        prefix: "",
        autoencoder: "anything_v3_vae_f16.ckpt",
        name: "Anime (Anything v3)",
        upcast_attention: false
      },
      {
        upcast_attention: false,
        version: "v1",
        file: "wd_v1.3_f16.ckpt",
        prefix: "",
        name: "Anime (Waifu Diffusion v1.3)",
        default_scale: 8
      },
      {
        name: "AniSora v2 I2V Wan 2.1 14B",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "anisora_v2_i2v_wan_2.1_14b_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[AniSora v2](https://huggingface.co/IndexTeam/Index-anisora) is a state-of-the-art image-to-video model fine-tuned by Bilibili for anime generation."
      },
      {
        name: "AniSora v2 I2V Wan 2.1 14B (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "anisora_v2_i2v_wan_2.1_14b_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[AniSora v2](https://huggingface.co/IndexTeam/Index-anisora) is a state-of-the-art image-to-video model fine-tuned by Bilibili for anime generation.",
        builtin_lora: true
      },
      {
        name: "AniSora v3.1 I2V Wan 2.1 14B",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "anisora_v3.1_i2v_wan_2.1_14b_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[AniSora v3.1](https://huggingface.co/IndexTeam/Index-anisora) is a state-of-the-art image-to-video model fine-tuned by Bilibili for anime generation."
      },
      {
        name: "AniSora v3.1 I2V Wan 2.1 14B (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "anisora_v3.1_i2v_wan_2.1_14b_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[AniSora v3.1](https://huggingface.co/IndexTeam/Index-anisora) is a state-of-the-art image-to-video model fine-tuned by Bilibili for anime generation.",
        builtin_lora: true
      },
      {
        file: "arcane_v3_f16.ckpt",
        text_encoder: "arcane_v3_clip_vit_l14_f16.ckpt",
        name: "Arcane (v3)",
        default_scale: 8,
        prefix: "arcane style ",
        upcast_attention: false,
        version: "v1"
      },
      {
        name: "Artsy Vibe v1",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "artsy_vibe_v1_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "Artsy Vibe v1 (5-bit, SVDQuant)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "artsy_vibe_v1_q5p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        builtin_lora: true
      },
      {
        name: "AuraFlow v0.1",
        file: "auraflow_v0.1_q8p.ckpt",
        version: "auraflow",
        official: true
      },
      {
        name: "AuraFlow v0.1 (8-bit)",
        file: "auraflow_v0.1_q5p.ckpt",
        version: "auraflow",
        official: true
      },
      {
        name: "AuraFlow v0.2",
        file: "auraflow_v0.2_q8p.ckpt",
        version: "auraflow",
        official: true
      },
      {
        name: "AuraFlow v0.2 (8-bit)",
        file: "auraflow_v0.2_q5p.ckpt",
        version: "auraflow",
        official: true
      },
      {
        name: "Balloon Art (v1)",
        upcast_attention: false,
        version: "v1",
        file: "balloonart_v1_f16.ckpt",
        prefix: "balloonart ",
        default_scale: 8,
        text_encoder: "balloonart_v1_clip_vit_l14_f16.ckpt"
      },
      {
        name: "Chroma v47 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v47_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v47 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v47_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v48 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v48_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v48 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v48_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma1 HD",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_1_hd_r0.1_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma1 HD](https://huggingface.co/lodestones/Chroma1-HD)."
      },
      {
        name: "Chroma1 HD (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_1_hd_r0.1_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma1 HD](https://huggingface.co/lodestones/Chroma1-HD)."
      },
      {
        text_encoder: "classicanim_v1_clip_vit_l14_f16.ckpt",
        default_scale: 8,
        version: "v1",
        file: "classicanim_v1_f16.ckpt",
        prefix: "classic disney style ",
        name: "Classic Animation (v1)",
        upcast_attention: false
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "ColorfulXL v6.0",
        modifier: "none",
        clip_encoder: "colorfulxl_v6.0_clip_vit_l14_f16.ckpt",
        file: "colorfulxl_v6.0_f16.ckpt",
        text_encoder: "colorfulxl_v6.0_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "ColorfulXL v6.0 (8-bit)",
        modifier: "none",
        clip_encoder: "colorfulxl_v6.0_clip_vit_l14_f16.ckpt",
        file: "colorfulxl_v6.0_q6p_q8p.ckpt",
        text_encoder: "colorfulxl_v6.0_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        version: "v1",
        default_scale: 8,
        prefix: "",
        name: "Counterfeit v3.0",
        upcast_attention: false,
        modifier: "none",
        file: "counterfeit_v3.0_f16.ckpt",
        text_encoder: "counterfeit_v3.0_clip_vit_l14_f16.ckpt"
      },
      {
        version: "v1",
        default_scale: 8,
        prefix: "",
        name: "Counterfeit v3.0 (8-bit)",
        upcast_attention: false,
        modifier: "none",
        file: "counterfeit_v3.0_q6p_q8p.ckpt",
        text_encoder: "counterfeit_v3.0_clip_vit_l14_f16.ckpt"
      },
      {
        prefix: "dgs illustration style ",
        file: "cyberpunk_anime_f16.ckpt",
        default_scale: 8,
        upcast_attention: false,
        version: "v1",
        name: "Cyberpunk Anime",
        text_encoder: "cyberpunk_anime_clip_vit_l14_f16.ckpt"
      },
      {
        version: "v1",
        name: "Deliberate v2.0 (8-bit)",
        file: "deliberate_v2_q6p_q8p.ckpt",
        prefix: "",
        text_encoder: "deliberate_v2_clip_vit_l14_f16.ckpt",
        default_scale: 8,
        upcast_attention: false
      },
      {
        name: "devMODE v0.3 Turbo",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "devmode_v0.3_turbo_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "devMODE v0.3 Turbo (5-bit, SVDQuant)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "devmode_v0.3_turbo_q5p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        builtin_lora: true
      },
      {
        default_scale: 8,
        text_encoder: "disney_pixar_cartoon_type_b_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        prefix: "",
        file: "disney_pixar_cartoon_type_b_q6p_q8p.ckpt",
        name: "Disney Pixar Cartoon Type B (8-bit)",
        version: "v1"
      },
      {
        file: "dnd_classes_and_species_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        default_scale: 8,
        version: "v1",
        text_encoder: "dnd_classes_and_species_clip_vit_l14_f16.ckpt",
        name: "DnD Classes and Species"
      },
      {
        version: "v1",
        default_scale: 12,
        prefix: "",
        name: "DreamShaper v8",
        upcast_attention: false,
        file: "dreamshaper_v8_f16.ckpt",
        text_encoder: "dreamshaper_v8_clip_vit_l14_f16.ckpt",
        modifier: "none"
      },
      {
        version: "v1",
        default_scale: 12,
        prefix: "",
        name: "DreamShaper v8 (8-bit)",
        upcast_attention: false,
        file: "dreamshaper_v8_q6p_q8p.ckpt",
        text_encoder: "dreamshaper_v8_clip_vit_l14_f16.ckpt",
        modifier: "none"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "DreamShaper XL v2.1 Turbo",
        modifier: "none",
        clip_encoder: "dreamshaper_xl_v2.1_turbo_clip_vit_l14_f16.ckpt",
        file: "dreamshaper_xl_v2.1_turbo_f16.ckpt",
        text_encoder: "dreamshaper_xl_v2.1_turbo_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "DreamShaper XL v2.1 Turbo (8-bit)",
        modifier: "none",
        clip_encoder: "dreamshaper_xl_v2.1_turbo_clip_vit_l14_f16.ckpt",
        file: "dreamshaper_xl_v2.1_turbo_q6p_q8p.ckpt",
        text_encoder: "dreamshaper_xl_v2.1_turbo_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        version: "v1",
        file: "dnd_30000_f16.ckpt",
        prefix: "",
        default_scale: 8,
        upcast_attention: false,
        name: "Dungeons and Diffusion (30000)",
        text_encoder: "dnd_30000_clip_vit_l14_f16.ckpt"
      },
      {
        prefix: "elden ring style ",
        upcast_attention: false,
        name: "Elden Ring (v3)",
        file: "eldenring_v3_f16.ckpt",
        default_scale: 8,
        text_encoder: "eldenring_v3_clip_vit_l14_f16.ckpt",
        version: "v1"
      },
      {
        upcast_attention: false,
        version: "v1",
        name: "F222",
        file: "f222_f16.ckpt",
        prefix: "",
        default_scale: 8
      },
      {
        name: "FLUX.1 [dev]",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_dev_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "FLUX.1 [dev] (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_dev_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "FLUX.1 [dev] (Exact)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_dev_f16.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "FLUX.1 [dev] De-distill",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_dev_de_distill_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "FLUX.1 [dev] De-distill (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_dev_de_distill_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "FLUX.1 [schnell]",
        file: "flux_1_schnell_q8p.ckpt",
        version: "flux1",
        official: true
      },
      {
        name: "FLUX.1 [schnell] (5-bit)",
        file: "flux_1_schnell_q5p.ckpt",
        version: "flux1",
        official: true
      },
      {
        name: "FLUX.1 Canny [dev]",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        modifier: "canny",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_canny_dev_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "FLUX.1 Canny [dev] (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        modifier: "canny",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_canny_dev_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "FLUX.1 Depth [dev]",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        modifier: "depth",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_depth_dev_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "FLUX.1 Depth [dev] (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        modifier: "depth",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_depth_dev_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "FLUX.1 Fill [dev]",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        modifier: "inpainting",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_fill_dev_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 128,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "FLUX.1 Fill [dev] (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        modifier: "inpainting",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_fill_dev_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 128,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "FLUX.1 Kontext [dev]",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        modifier: "kontext",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_kontext_dev_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "FLUX.1 Kontext [dev] (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        modifier: "kontext",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_kontext_dev_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "FLUX.1 Kontext [dev] (Exact)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        modifier: "kontext",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_kontext_dev_f16.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "FLUX.1 Krea [dev]",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_krea_dev_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "FLUX.1 Krea [dev] (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "flux_1_krea_dev_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "Fooocus Inpaint SDXL v2.6",
        file: "fooocus_inpaint_sd_xl_v2.6_f16.ckpt",
        version: "sdxlBase",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Fooocus Inpaint SDXL v2.6 (8-bit)",
        file: "fooocus_inpaint_sd_xl_v2.6_q6p_q8p.ckpt",
        version: "sdxlBase",
        modifier: "inpainting",
        official: true
      },
      {
        upcast_attention: false,
        prefix: "ghibli style ",
        text_encoder: "ghibli_v1_clip_vit_l14_f16.ckpt",
        default_scale: 8,
        file: "ghibli_v1_f16.ckpt",
        name: "Ghibli (v1)",
        version: "v1"
      },
      {
        file: "hna_3dkx_1.1_f16.ckpt",
        upcast_attention: false,
        text_encoder: "hna_3dkx_1.1_clip_vit_l14_f16.ckpt",
        default_scale: 8,
        version: "v1",
        name: "H&A's 3DKX 1.1",
        prefix: "a 3d render / cartoon of "
      },
      {
        version: "v1",
        file: "hassanblend_v1.5.1.2_f16.ckpt",
        prefix: "",
        text_encoder: "hassanblend_v1.5.1.2_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        default_scale: 8,
        name: "Hassanblend (v1.5.1.2)"
      },
      {
        name: "HiDream E1 [full]",
        file: "hidream_e1_full_q8p.ckpt",
        version: "hiDreamI1",
        modifier: "editing",
        official: true
      },
      {
        name: "HiDream E1 [full] (5-bit)",
        file: "hidream_e1_full_q5p.ckpt",
        version: "hiDreamI1",
        modifier: "editing",
        official: true
      },
      {
        name: "HiDream E1-1",
        file: "hidream_e1_1_q8p.ckpt",
        version: "hiDreamI1",
        modifier: "editing",
        official: true
      },
      {
        name: "HiDream E1-1 (5-bit)",
        file: "hidream_e1_1_q5p.ckpt",
        version: "hiDreamI1",
        modifier: "editing",
        official: true
      },
      {
        name: "HiDream E1-1 (Exact)",
        version: "hidream_i1",
        autoencoder: "flux_1_vae_f16.ckpt",
        modifier: "editing",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "hidream_e1_1_f16.ckpt",
        upcast_attention: false,
        text_encoder: "llama_3.1_8b_instruct_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_f16.ckpt",
        clip_encoder: "long_clip_vit_l14_f16.ckpt",
        additional_clip_encoders: [
          "long_open_clip_vit_bigg14_f16.ckpt"
        ],
        high_precision_autoencoder: true,
        padded_text_encoding_length: 128,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        note: "[HiDream-E1-1](https://huggingface.co/HiDream-ai/HiDream-E1-1) is an image editing model built on HiDream-I1. It is MIT-licensed and commercially friendly. Trained at dynamic resolutions (around 1MP) using a Flow Matching objective, the model performs best with trailing samplers and 30\u201350 sampling steps."
      },
      {
        name: "HiDream I1 [dev]",
        file: "hidream_i1_dev_q8p.ckpt",
        version: "hiDreamI1",
        official: true
      },
      {
        name: "HiDream I1 [dev] (5-bit)",
        file: "hidream_i1_dev_q5p.ckpt",
        version: "hiDreamI1",
        official: true
      },
      {
        name: "HiDream I1 [dev] (Exact)",
        version: "hidream_i1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "hidream_i1_dev_f16.ckpt",
        upcast_attention: false,
        text_encoder: "llama_3.1_8b_instruct_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_f16.ckpt",
        clip_encoder: "long_clip_vit_l14_f16.ckpt",
        additional_clip_encoders: [
          "long_open_clip_vit_bigg14_f16.ckpt"
        ],
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 128,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        note: "[HiDream-I1 [dev]](https://huggingface.co/HiDream-ai/HiDream-I1-Dev) is a state-of-the-art open-source image generation model known for its strong prompt adherence across diverse styles, including photorealistic, cartoon, and artistic. It is MIT-licensed and commercially friendly. The model is trained at multiple resolutions using a Flow Matching objective; trailing samplers yield the best results, with 20\u201330 sampling steps recommended. Text guidance is not effective for this model."
      },
      {
        name: "HiDream I1 [fast]",
        file: "hidream_i1_fast_q8p.ckpt",
        version: "hiDreamI1",
        official: true
      },
      {
        name: "HiDream I1 [fast] (5-bit)",
        file: "hidream_i1_fast_q5p.ckpt",
        version: "hiDreamI1",
        official: true
      },
      {
        name: "HiDream I1 [fast] (Exact)",
        version: "hidream_i1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "hidream_i1_fast_f16.ckpt",
        upcast_attention: false,
        text_encoder: "llama_3.1_8b_instruct_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_f16.ckpt",
        clip_encoder: "long_clip_vit_l14_f16.ckpt",
        additional_clip_encoders: [
          "long_open_clip_vit_bigg14_f16.ckpt"
        ],
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 128,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        note: "[HiDream-I1 [fast]](https://huggingface.co/HiDream-ai/HiDream-I1-Fast) is a state-of-the-art open-source image generation model known for its strong prompt adherence across diverse styles, including photorealistic, cartoon, and artistic. It is MIT-licensed and commercially friendly. The model is trained at multiple resolutions using a Flow Matching objective; trailing samplers yield the best results, with 10\u201320 sampling steps recommended. Text guidance is not effective for this model."
      },
      {
        name: "HiDream I1 [full]",
        file: "hidream_i1_full_q8p.ckpt",
        version: "hiDreamI1",
        official: true
      },
      {
        name: "HiDream I1 [full] (5-bit)",
        file: "hidream_i1_full_q5p.ckpt",
        version: "hiDreamI1",
        official: true
      },
      {
        name: "HiDream I1 [full] (Exact)",
        version: "hidream_i1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "hidream_i1_full_f16.ckpt",
        upcast_attention: false,
        text_encoder: "llama_3.1_8b_instruct_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_f16.ckpt",
        clip_encoder: "long_clip_vit_l14_f16.ckpt",
        additional_clip_encoders: [
          "long_open_clip_vit_bigg14_f16.ckpt"
        ],
        high_precision_autoencoder: true,
        padded_text_encoding_length: 128,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        note: "[HiDream-I1 [full]](https://huggingface.co/HiDream-ai/HiDream-I1-Full) is a state-of-the-art open-source image generation model known for its exceptional prompt adherence across a wide range of styles, including photorealistic, cartoon, and artistic. It is MIT-licensed and commercially friendly. The model is trained at multiple resolutions using a Flow Matching objective; trailing samplers yield the best results, with 30\u201350 sampling steps recommended."
      },
      {
        name: "Hunyuan Video T2V 720p",
        version: "hunyuan_video",
        autoencoder: "hunyuan_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 24,
        file: "hunyuan_video_t2v_720p_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "llava_llama_3_8b_v1.1_q8p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: false,
        guidance_embed: true,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 30,
        tea_cache_coefficients: [
          733.226126,
          -401.131952,
          67.5869174,
          -3.149878,
          0.0961237896
        ],
        note: "[Hunyuan Video](https://huggingface.co/tencent/HunyuanVideo) is a state-of-the-art text-to-video model developed by Tencent. It can generate video clips of up to 5 seconds in length. The recommended resolutions are 960\xD7544 or 1280\xD7720. The model supports up to 129 frames, with a recommended shift value of 7.0."
      },
      {
        name: "Hunyuan Video T2V 720p (5-bit, SVDQuant)",
        version: "hunyuan_video",
        autoencoder: "hunyuan_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 24,
        file: "hunyuan_video_t2v_720p_q5p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "llava_llama_3_8b_v1.1_q8p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: false,
        guidance_embed: true,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 30,
        tea_cache_coefficients: [
          733.226126,
          -401.131952,
          67.5869174,
          -3.149878,
          0.0961237896
        ],
        note: "[Hunyuan Video](https://huggingface.co/tencent/HunyuanVideo) is a state-of-the-art text-to-video model developed by Tencent. It can generate video clips of up to 5 seconds in length. The recommended resolutions are 960\xD7544 or 1280\xD7720. The model supports up to 129 frames, with a recommended shift value of 7.0.",
        builtin_lora: true
      },
      {
        name: "iCatcher Cartoon",
        file: "icatcher_cartoon_f16.ckpt",
        prefix: "",
        modifier: "none",
        default_scale: 16,
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "icatcher_cartoon_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        text_encoder: "icatcher_cartoon_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        name: "iCatcher Cartoon (8-bit)",
        file: "icatcher_cartoon_q6p_q8p.ckpt",
        prefix: "",
        modifier: "none",
        default_scale: 16,
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "icatcher_cartoon_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        text_encoder: "icatcher_cartoon_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        name: "iCatcher Realistic",
        file: "icatcher_realistic_f16.ckpt",
        prefix: "",
        modifier: "none",
        default_scale: 16,
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "icatcher_realistic_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "icatcher_realistic_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        name: "iCatcher Realistic (8-bit)",
        file: "icatcher_realistic_q6p_q8p.ckpt",
        prefix: "",
        modifier: "none",
        default_scale: 16,
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "icatcher_realistic_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "icatcher_realistic_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        version: "v1",
        file: "inkpunk_v2_f16.ckpt",
        name: "Inkpunk (v2)",
        upcast_attention: false,
        prefix: "nvinkpunk ",
        default_scale: 8,
        text_encoder: "inkpunk_v2_clip_vit_l14_f16.ckpt"
      },
      {
        name: "Instruct Pix2Pix",
        file: "instruct_pix2pix_22000_f16.ckpt",
        version: "v1",
        modifier: "editing",
        official: true
      },
      {
        version: "v1",
        default_scale: 12,
        prefix: "",
        name: "Juggernaut Reborn",
        upcast_attention: false,
        file: "juggernaut_reborn_f16.ckpt",
        text_encoder: "juggernaut_reborn_clip_vit_l14_f16.ckpt",
        modifier: "none"
      },
      {
        version: "v1",
        default_scale: 12,
        prefix: "",
        name: "Juggernaut Reborn (8-bit)",
        upcast_attention: false,
        file: "juggernaut_reborn_q6p_q8p.ckpt",
        text_encoder: "juggernaut_reborn_clip_vit_l14_f16.ckpt",
        modifier: "none"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Juggernaut XL Ragnarok",
        modifier: "none",
        text_encoder: "juggernaut_xl_ragnarok_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "juggernaut_xl_ragnarok_clip_vit_l14_f16.ckpt",
        file: "juggernaut_xl_ragnarok_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Juggernaut XL Ragnarok (8-bit)",
        modifier: "none",
        text_encoder: "juggernaut_xl_ragnarok_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "juggernaut_xl_ragnarok_clip_vit_l14_f16.ckpt",
        file: "juggernaut_xl_ragnarok_q6p_q8p.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Juggernaut XL v9",
        modifier: "none",
        text_encoder: "juggernaut_xl_v9_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "juggernaut_xl_v9_clip_vit_l14_f16.ckpt",
        file: "juggernaut_xl_v9_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Juggernaut XL v9 (8-bit)",
        modifier: "none",
        text_encoder: "juggernaut_xl_v9_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "juggernaut_xl_v9_clip_vit_l14_f16.ckpt",
        file: "juggernaut_xl_v9_q6p_q8p.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Juggernaut XL v9 Lightning",
        modifier: "none",
        file: "juggernaut_xl_v9_lightning_f16.ckpt",
        text_encoder: "juggernaut_xl_v9_lightning_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "juggernaut_xl_v9_lightning_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Juggernaut XL v9 Lightning (8-bit)",
        modifier: "none",
        file: "juggernaut_xl_v9_lightning_q6p_q8p.ckpt",
        text_encoder: "juggernaut_xl_v9_lightning_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "juggernaut_xl_v9_lightning_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Juggernaut XL X",
        modifier: "none",
        text_encoder: "juggernaut_xl_x_open_clip_vit_bigg14_f16.ckpt",
        file: "juggernaut_xl_x_f16.ckpt",
        clip_encoder: "juggernaut_xl_x_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Juggernaut XL X (8-bit)",
        modifier: "none",
        text_encoder: "juggernaut_xl_x_open_clip_vit_bigg14_f16.ckpt",
        file: "juggernaut_xl_x_q6p_q8p.ckpt",
        clip_encoder: "juggernaut_xl_x_clip_vit_l14_f16.ckpt"
      },
      {
        name: "Kandinsky v2.1",
        file: "kandinsky_f16.ckpt",
        version: "kandinsky21",
        official: true
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Kwai Kolors 1.0",
        modifier: "none",
        file: "kwai_kolors_1.0_f16.ckpt",
        text_encoder: "chatglm3_6b_q6p_q8p.ckpt",
        text_encoder_version: "chatglm3_6b"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Kwai Kolors 1.0 (8-bit)",
        modifier: "none",
        file: "kwai_kolors_1.0_q6p_q8p.ckpt",
        text_encoder: "chatglm3_6b_q6p_q8p.ckpt",
        text_encoder_version: "chatglm3_6b"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: true,
        name: "Kwai Kolors Inpainting 1.0",
        modifier: "inpainting",
        file: "kwai_kolors_inpainting_1.0_f16.ckpt",
        text_encoder: "chatglm3_6b_q6p_q8p.ckpt",
        text_encoder_version: "chatglm3_6b"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: true,
        name: "Kwai Kolors Inpainting 1.0 (8-bit)",
        modifier: "inpainting",
        file: "kwai_kolors_inpainting_1.0_q6p_q8p.ckpt",
        text_encoder: "chatglm3_6b_q6p_q8p.ckpt",
        text_encoder_version: "chatglm3_6b"
      },
      {
        version: "v1",
        default_scale: 8,
        prefix: "",
        name: "MajicMIX Realistic v7",
        upcast_attention: false,
        file: "majicmix_realistic_v7_f16.ckpt",
        text_encoder: "majicmix_realistic_v7_clip_vit_l14_f16.ckpt",
        modifier: "none"
      },
      {
        version: "v1",
        default_scale: 8,
        prefix: "",
        name: "MajicMIX Realistic v7 (8-bit)",
        upcast_attention: false,
        file: "majicmix_realistic_v7_q6p_q8p.ckpt",
        text_encoder: "majicmix_realistic_v7_clip_vit_l14_f16.ckpt",
        modifier: "none"
      },
      {
        name: "MiniSD v1.4",
        file: "minisd_v1.4_f16.ckpt",
        version: "v1",
        official: true
      },
      {
        prefix: "modern disney style ",
        upcast_attention: false,
        version: "v1",
        file: "modi_v1_f16.ckpt",
        name: "Modern Disney (v1)",
        text_encoder: "modi_v1_clip_vit_l14_f16.ckpt",
        default_scale: 8
      },
      {
        file: "nitro_v1_f16.ckpt",
        default_scale: 8,
        version: "v1",
        prefix: "",
        name: "Multi-Style (Nitro Diffusion v1)",
        upcast_attention: false,
        text_encoder: "nitro_v1_clip_vit_l14_f16.ckpt"
      },
      {
        text_encoder: "mdjrny_v4_clip_vit_l14_f16.ckpt",
        version: "v1",
        prefix: "mdjrny-v4 style ",
        upcast_attention: false,
        file: "mdjrny_v4_f16.ckpt",
        name: "Openjourney",
        default_scale: 8
      },
      {
        autoencoder: "vae_ft_mse_840000_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "v1",
        upcast_attention: false,
        name: "Outfitting Fusion Virtual Try-on (Full-Body)",
        modifier: "double",
        file: "ootd_vton_full_body_1.0_f16.ckpt",
        text_encoder: "clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "vae_ft_mse_840000_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "v1",
        upcast_attention: false,
        name: "Outfitting Fusion Virtual Try-on (Upper-Body)",
        modifier: "double",
        file: "ootd_vton_upper_body_1.0_f16.ckpt",
        text_encoder: "clip_vit_l14_f16.ckpt"
      },
      {
        name: "Paper Cut (v1)",
        upcast_attention: false,
        version: "v1",
        file: "papercut_v1_f16.ckpt",
        prefix: "papercut ",
        default_scale: 8,
        text_encoder: "papercut_v1_clip_vit_l14_f16.ckpt"
      },
      {
        name: "PixArt Sigma XL 1K",
        file: "pixart_sigma_xl_2_1024_ms_f16.ckpt",
        version: "pixart",
        official: true
      },
      {
        name: "PixArt Sigma XL 1K (8-bit)",
        file: "pixart_sigma_xl_2_1024_ms_q8p.ckpt",
        version: "pixart",
        official: true
      },
      {
        name: "PixArt Sigma XL 512",
        file: "pixart_sigma_xl_2_512_ms_f16.ckpt",
        version: "pixart",
        official: true
      },
      {
        name: "PixArt Sigma XL 512 (8-bit)",
        file: "pixart_sigma_xl_2_512_ms_q8p.ckpt",
        version: "pixart",
        official: true
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "PixelWave 10",
        modifier: "none",
        file: "pixelwave_10_f16.ckpt",
        clip_encoder: "pixelwave_10_clip_vit_l14_f16.ckpt",
        text_encoder: "pixelwave_10_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "PixelWave 10 (8-bit)",
        modifier: "none",
        file: "pixelwave_10_q6p_q8p.ckpt",
        clip_encoder: "pixelwave_10_clip_vit_l14_f16.ckpt",
        text_encoder: "pixelwave_10_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        name: "PixelWave FLUX.1 Schnell 04",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "pixelwave_flux_1_schnell_04_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "PixelWave FLUX.1 Schnell 04 (5-bit, SVDQuant)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "pixelwave_flux_1_schnell_04_q5p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        builtin_lora: true
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "PixelWave v9",
        modifier: "none",
        text_encoder: "pixelwave_v9_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "pixelwave_v9_clip_vit_l14_f16.ckpt",
        file: "pixelwave_v9_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "PixelWave v9 (8-bit)",
        modifier: "none",
        text_encoder: "pixelwave_v9_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "pixelwave_v9_clip_vit_l14_f16.ckpt",
        file: "pixelwave_v9_q6p_q8p.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Playground v2",
        file: "playground_v2_f16.ckpt",
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        modifier: "none"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Playground v2 (8-bit)",
        file: "playground_v2_q6p_q8p.ckpt",
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        modifier: "none"
      },
      {
        conditioning: "noise",
        latents_std: [
          8.4927,
          5.9022,
          6.5498,
          5.2299
        ],
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        objective: {
          edm: {
            sigma_data: 0.5
          }
        },
        prefix: "",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Playground v2.5",
        file: "playground_v2.5_f16.ckpt",
        noise_discretization: {
          edm: {
            _0: {
              sigma_min: 2e-3,
              sigma_data: 0.5,
              sigma_max: 80
            }
          }
        },
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        latents_mean: [
          -1.6574,
          1.886,
          -1.383,
          2.5155
        ],
        latents_scaling_factor: 0.5
      },
      {
        conditioning: "noise",
        latents_std: [
          8.4927,
          5.9022,
          6.5498,
          5.2299
        ],
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        objective: {
          edm: {
            sigma_data: 0.5
          }
        },
        prefix: "",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Playground v2.5 (8-bit)",
        file: "playground_v2.5_q6p_q8p.ckpt",
        noise_discretization: {
          edm: {
            _0: {
              sigma_min: 2e-3,
              sigma_data: 0.5,
              sigma_max: 80
            }
          }
        },
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        latents_mean: [
          -1.6574,
          1.886,
          -1.383,
          2.5155
        ],
        latents_scaling_factor: 0.5
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Proteus v0.3",
        modifier: "none",
        clip_encoder: "proteus_v0.3_clip_vit_l14_f16.ckpt",
        file: "proteus_v0.3_f16.ckpt",
        text_encoder: "proteus_v0.3_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "Proteus v0.3 (8-bit)",
        modifier: "none",
        clip_encoder: "proteus_v0.3_clip_vit_l14_f16.ckpt",
        file: "proteus_v0.3_q6p_q8p.ckpt",
        text_encoder: "proteus_v0.3_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        name: "Qwen Image 1.0",
        file: "qwen_image_1.0_q8p.ckpt",
        version: "qwenImage",
        official: true
      },
      {
        name: "Qwen Image 1.0 (6-bit)",
        file: "qwen_image_1.0_q6p.ckpt",
        version: "qwenImage",
        official: true
      },
      {
        name: "Qwen Image 1.0 (BF16, 6-bit)",
        file: "qwen_image_1.0_bf16_q6p.ckpt",
        version: "qwenImage",
        official: true
      },
      {
        name: "Qwen Image 1.0 (BF16, Exact)",
        version: "qwen_image",
        autoencoder: "qwen_image_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "qwen_image_1.0_bf16.ckpt",
        upcast_attention: false,
        text_encoder: "qwen_2.5_vl_7b_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        is_bf16: true,
        note: "[Qwen Image](https://huggingface.co/Qwen/Qwen-Image) is a state-of-the-art open-source image generation model known for its exceptional text layout and prompt adherence across a wide range of styles, including photorealistic, cartoon, and artistic. It is Apache 2.0-licensed and commercially friendly. The model is trained at multiple resolutions using a Flow Matching objective; trailing samplers yield the best results, with 30\u201350 sampling steps recommended. The BF16 version is only compatible with macOS 15, iOS 18 and above."
      },
      {
        name: "Qwen Image 1.0 (BF16)",
        file: "qwen_image_1.0_bf16_q8p.ckpt",
        version: "qwenImage",
        official: true
      },
      {
        name: "Qwen Image 1.0 (Exact)",
        version: "qwen_image",
        autoencoder: "qwen_image_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "qwen_image_1.0_f16.ckpt",
        upcast_attention: false,
        text_encoder: "qwen_2.5_vl_7b_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        note: "[Qwen Image](https://huggingface.co/Qwen/Qwen-Image) is a state-of-the-art open-source image generation model known for its exceptional text layout and prompt adherence across a wide range of styles, including photorealistic, cartoon, and artistic. It is Apache 2.0-licensed and commercially friendly. The model is trained at multiple resolutions using a Flow Matching objective; trailing samplers yield the best results, with 30\u201350 sampling steps recommended."
      },
      {
        name: "Qwen Image Edit 1.0",
        file: "qwen_image_edit_1.0_q8p.ckpt",
        version: "qwenImage",
        modifier: "kontext",
        official: true
      },
      {
        name: "Qwen Image Edit 1.0 (6-bit)",
        file: "qwen_image_edit_1.0_q6p.ckpt",
        version: "qwenImage",
        modifier: "kontext",
        official: true
      },
      {
        name: "Qwen Image Edit 2509",
        file: "qwen_image_edit_2509_q8p.ckpt",
        version: "qwenImage",
        modifier: "qwenimageEditPlus",
        official: true
      },
      {
        name: "Qwen Image Edit 2509 (6-bit)",
        file: "qwen_image_edit_2509_q6p.ckpt",
        version: "qwenImage",
        modifier: "qwenimageEditPlus",
        official: true
      },
      {
        name: "Qwen Image Edit 2509 (BF16, 6-bit)",
        file: "qwen_image_edit_2509_bf16_q6p.ckpt",
        version: "qwenImage",
        modifier: "qwenimageEditPlus",
        official: true
      },
      {
        name: "Qwen Image Edit 2509 (BF16, Exact)",
        version: "qwen_image",
        autoencoder: "qwen_image_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "qwen_image_edit_2509_bf16.ckpt",
        upcast_attention: false,
        modifier: "qwenimage_edit_plus",
        text_encoder: "qwen_2.5_vl_7b_f16.ckpt",
        clip_encoder: "qwen_2.5_vl_7b_vit_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        is_bf16: true,
        note: "[Qwen Image Edit 2509](https://huggingface.co/Qwen/Qwen-Image-2509) is a state-of-the-art open-source image edit model excels at image edit tasks such as background alternation, style transfer, object removal etc. It is Apache 2.0-licensed and commercially friendly. The model is trained at multiple resolutions using a Flow Matching objective; trailing samplers yield the best results, with 30\u201350 sampling steps recommended. This is an update in Sep, 2025. The BF16 version is only compatible with macOS 15, iOS 18 and above."
      },
      {
        name: "Qwen Image Edit 2509 (BF16)",
        file: "qwen_image_edit_2509_bf16_q8p.ckpt",
        version: "qwenImage",
        modifier: "qwenimageEditPlus",
        official: true
      },
      {
        name: "Qwen Image Edit 2509 (Exact)",
        version: "qwen_image",
        autoencoder: "qwen_image_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "qwen_image_edit_2509_f16.ckpt",
        upcast_attention: false,
        modifier: "qwenimage_edit_plus",
        text_encoder: "qwen_2.5_vl_7b_f16.ckpt",
        clip_encoder: "qwen_2.5_vl_7b_vit_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        note: "[Qwen Image Edit 2509](https://huggingface.co/Qwen/Qwen-Image-2509) is a state-of-the-art open-source image edit model excels at image edit tasks such as background alternation, style transfer, object removal etc. It is Apache 2.0-licensed and commercially friendly. The model is trained at multiple resolutions using a Flow Matching objective; trailing samplers yield the best results, with 30\u201350 sampling steps recommended. This is an update in Sep, 2025."
      },
      {
        name: "RayFLUX v3.0",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "rayflux_v3.0_aio_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        name: "RayFLUX v3.0 (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "rayflux_v3.0_aio_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        guidance_embed: true,
        padded_text_encoding_length: 512,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        tea_cache_coefficients: [
          498.651651,
          -283.781631,
          55.8554382,
          -3.82021401,
          0.264230861
        ]
      },
      {
        version: "v1",
        default_scale: 12,
        prefix: "",
        name: "Realistic Vision v5.1",
        upcast_attention: false,
        text_encoder: "realistic_vision_v5.1_clip_vit_l14_f16.ckpt",
        file: "realistic_vision_v5.1_f16.ckpt",
        modifier: "none"
      },
      {
        version: "v1",
        default_scale: 12,
        prefix: "",
        name: "Realistic Vision v5.1 (8-bit)",
        upcast_attention: false,
        text_encoder: "realistic_vision_v5.1_clip_vit_l14_f16.ckpt",
        file: "realistic_vision_v5.1_q6p_q8p.ckpt",
        modifier: "none"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "RealVisXL v4.0",
        modifier: "none",
        clip_encoder: "realvisxl_v4.0_clip_vit_l14_f16.ckpt",
        text_encoder: "realvisxl_v4.0_open_clip_vit_bigg14_f16.ckpt",
        file: "realvisxl_v4.0_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        name: "RealVisXL v4.0 (8-bit)",
        modifier: "none",
        clip_encoder: "realvisxl_v4.0_clip_vit_l14_f16.ckpt",
        text_encoder: "realvisxl_v4.0_open_clip_vit_bigg14_f16.ckpt",
        file: "realvisxl_v4.0_q6p_q8p.ckpt"
      },
      {
        version: "v1",
        default_scale: 8,
        prefix: "",
        name: "Rev Animated v1.22",
        upcast_attention: false,
        modifier: "none",
        text_encoder: "rev_animated_v1.22_clip_vit_l14_f16.ckpt",
        file: "rev_animated_v1.22_f16.ckpt"
      },
      {
        version: "v1",
        default_scale: 8,
        prefix: "",
        name: "Rev Animated v1.22 (8-bit)",
        upcast_attention: false,
        modifier: "none",
        text_encoder: "rev_animated_v1.22_clip_vit_l14_f16.ckpt",
        file: "rev_animated_v1.22_q6p_q8p.ckpt"
      },
      {
        version: "v1",
        name: "SamDoesArt (v3)",
        upcast_attention: false,
        text_encoder: "samdoesart_v3_clip_vit_l14_f16.ckpt",
        default_scale: 8,
        prefix: "samdoesart ",
        file: "samdoesart_v3_f16.ckpt"
      },
      {
        name: "schnellMODE v3.3",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "schnellmode_v3.3_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "schnellMODE v3.3 (5-bit, SVDQuant)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "schnellmode_v3.3_q5p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        builtin_lora: true
      },
      {
        name: "SD3 Large 3.5",
        version: "sd3_large",
        autoencoder: "sd3_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_q6p.ckpt",
        prefix: "",
        default_scale: 16,
        file: "sd3_large_3.5_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "SD3 Large 3.5 (6-bit)",
        version: "sd3_large",
        autoencoder: "sd3_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_q6p.ckpt",
        prefix: "",
        default_scale: 16,
        file: "sd3_large_3.5_q6p.ckpt",
        upcast_attention: false,
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "SD3 Large 3.5 (Exact)",
        version: "sd3_large",
        autoencoder: "sd3_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_q6p.ckpt",
        prefix: "",
        default_scale: 16,
        file: "sd3_large_3.5_f16.ckpt",
        upcast_attention: false,
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "SD3 Large Turbo 3.5",
        version: "sd3_large",
        autoencoder: "sd3_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_q6p.ckpt",
        prefix: "",
        default_scale: 16,
        file: "sd3_large_turbo_3.5_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        is_consistency_model: true
      },
      {
        name: "SD3 Large Turbo 3.5 (6-bit)",
        version: "sd3_large",
        autoencoder: "sd3_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_q6p.ckpt",
        prefix: "",
        default_scale: 16,
        file: "sd3_large_turbo_3.5_q6p.ckpt",
        upcast_attention: false,
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        is_consistency_model: true
      },
      {
        name: "SD3 Medium",
        version: "sd3",
        autoencoder: "sd3_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_q6p.ckpt",
        prefix: "",
        default_scale: 16,
        file: "sd3_medium_f16.ckpt",
        upcast_attention: false,
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "SD3 Medium (8-bit)",
        version: "sd3",
        autoencoder: "sd3_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_q6p.ckpt",
        prefix: "",
        default_scale: 16,
        file: "sd3_medium_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "SD3 Medium 3.5",
        version: "sd3",
        autoencoder: "sd3_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_q6p.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 32,
        file: "sd3_medium_3.5_f16.ckpt",
        upcast_attention: false,
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          qk_norm: true,
          dual_attention_layers: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
          ]
        }
      },
      {
        name: "SD3 Medium 3.5 (8-bit)",
        version: "sd3",
        autoencoder: "sd3_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        t5_encoder: "t5_xxl_encoder_q6p.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 32,
        file: "sd3_medium_3.5_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          qk_norm: true,
          dual_attention_layers: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
          ]
        }
      },
      {
        name: "SDXL Base (v0.9)",
        file: "sd_xl_base_0.9_f16.ckpt",
        version: "sdxlBase",
        official: true
      },
      {
        name: "SDXL Base (v1.0)",
        file: "sd_xl_base_1.0_f16.ckpt",
        version: "sdxlBase",
        official: true
      },
      {
        name: "SDXL Base v1.0 (8-bit)",
        file: "sd_xl_base_1.0_q6p_q8p.ckpt",
        version: "sdxlBase",
        official: true
      },
      {
        name: "SDXL Refiner (v0.9)",
        file: "sd_xl_refiner_0.9_f16.ckpt",
        version: "sdxlRefiner",
        official: true
      },
      {
        name: "SDXL Refiner (v1.0)",
        file: "sd_xl_refiner_1.0_f16.ckpt",
        version: "sdxlRefiner",
        official: true
      },
      {
        name: "SDXL Refiner v1.0 (8-bit)",
        file: "sd_xl_refiner_1.0_q6p_q8p.ckpt",
        version: "sdxlRefiner",
        official: true
      },
      {
        name: "SDXL Turbo",
        prefix: "",
        default_scale: 8,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        file: "sd_xl_turbo_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        is_consistency_model: true
      },
      {
        name: "SDXL Turbo (8-bit)",
        prefix: "",
        default_scale: 8,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        file: "sd_xl_turbo_q6p_q8p.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        is_consistency_model: true
      },
      {
        text_encoder: "seek_art_mega_v1_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        name: "seek.art MEGA (v1)",
        version: "v1",
        file: "seek_art_mega_v1_f16.ckpt",
        default_scale: 10,
        prefix: ""
      },
      {
        name: "Shuttle Jaguar",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "shuttle_jaguar_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "Shuttle Jaguar (5-bit, SVDQuant)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "shuttle_jaguar_q5p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        builtin_lora: true
      },
      {
        name: "Shuttle v3.1 Aesthetic",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "shuttle_v3.1_aesthetic_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        }
      },
      {
        name: "Shuttle v3.1 Aesthetic (5-bit, SVDQuant)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "shuttle_v3.1_aesthetic_q5p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        is_consistency_model: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        builtin_lora: true
      },
      {
        name: "SkyReels v1 Hunyuan I2V 544p",
        version: "hunyuan_video",
        autoencoder: "hunyuan_video_vae_f16.ckpt",
        prefix: "FPS-24, ",
        default_scale: 12,
        hires_fix_scale: 24,
        file: "skyreels_v1_hunyuan_i2v_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "llava_llama_3_8b_v1.1_q8p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: false,
        modifier: "inpainting",
        guidance_embed: true,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          733.226126,
          -401.131952,
          67.5869174,
          -3.149878,
          0.0961237896
        ],
        note: '[SkyReels v1](https://huggingface.co/collections/Skywork/skyreels-v1-67b34676ff65b4ec02d16307) is a significant fine-tune of Hunyuan Video, Tencent\u2019s state-of-the-art text-to-video model. SkyReels v1 I2V is an image-to-video (img2vid) fine-tune that generates video clips up to 4 seconds long from a single image. The model supports up to 97 frames, with a recommended shift value of 7.0 or higher. For optimal results, disable "Speedup w/ Guidance Embed" by setting it to 1.0 and use a Text Guidance value of 6.'
      },
      {
        name: "SkyReels v1 Hunyuan I2V 544p (5-bit, SVDQuant)",
        version: "hunyuan_video",
        autoencoder: "hunyuan_video_vae_f16.ckpt",
        prefix: "FPS-24, ",
        default_scale: 12,
        hires_fix_scale: 24,
        file: "skyreels_v1_hunyuan_i2v_q5p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "llava_llama_3_8b_v1.1_q8p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: false,
        modifier: "inpainting",
        guidance_embed: true,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          733.226126,
          -401.131952,
          67.5869174,
          -3.149878,
          0.0961237896
        ],
        note: '[SkyReels v1](https://huggingface.co/collections/Skywork/skyreels-v1-67b34676ff65b4ec02d16307) is a significant fine-tune of Hunyuan Video, Tencent\u2019s state-of-the-art text-to-video model. SkyReels v1 I2V is an image-to-video (img2vid) fine-tune that generates video clips up to 4 seconds long from a single image. The model supports up to 97 frames, with a recommended shift value of 7.0 or higher. For optimal results, disable "Speedup w/ Guidance Embed" by setting it to 1.0 and use a Text Guidance value of 6.',
        builtin_lora: true
      },
      {
        name: "SkyReels v1 Hunyuan T2V 544p",
        version: "hunyuan_video",
        autoencoder: "hunyuan_video_vae_f16.ckpt",
        prefix: "FPS-24, ",
        default_scale: 12,
        hires_fix_scale: 24,
        file: "skyreels_v1_hunyuan_t2v_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "llava_llama_3_8b_v1.1_q8p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: false,
        guidance_embed: true,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          733.226126,
          -401.131952,
          67.5869174,
          -3.149878,
          0.0961237896
        ],
        note: '[SkyReels v1](https://huggingface.co/collections/Skywork/skyreels-v1-67b34676ff65b4ec02d16307) is a significant fine-tune of Hunyuan Video, Tencent\u2019s state-of-the-art text-to-video model. It can generate video clips up to 4 seconds long at a recommended resolution of 960\xD7544. The model supports up to 97 frames, with a recommended shift value of 7.0 or higher. For optimal results, disable "Speedup w/ Guidance Embed" by setting it to 1.0 and use a Text Guidance value of 6.'
      },
      {
        name: "SkyReels v1 Hunyuan T2V 544p (5-bit, SVDQuant)",
        version: "hunyuan_video",
        autoencoder: "hunyuan_video_vae_f16.ckpt",
        prefix: "FPS-24, ",
        default_scale: 12,
        hires_fix_scale: 24,
        file: "skyreels_v1_hunyuan_t2v_q5p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "llava_llama_3_8b_v1.1_q8p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: false,
        guidance_embed: true,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          733.226126,
          -401.131952,
          67.5869174,
          -3.149878,
          0.0961237896
        ],
        note: '[SkyReels v1](https://huggingface.co/collections/Skywork/skyreels-v1-67b34676ff65b4ec02d16307) is a significant fine-tune of Hunyuan Video, Tencent\u2019s state-of-the-art text-to-video model. It can generate video clips up to 4 seconds long at a recommended resolution of 960\xD7544. The model supports up to 97 frames, with a recommended shift value of 7.0 or higher. For optimal results, disable "Speedup w/ Guidance Embed" by setting it to 1.0 and use a Text Guidance value of 6.',
        builtin_lora: true
      },
      {
        name: "SkyReels v2 I2V 1.3B 540p",
        version: "wan_v2.1_1.3b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 8,
        hires_fix_scale: 12,
        file: "skyreels_v2_i2v_1.3b_540p_f16.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          257151.496,
          -35422.9917,
          1402.86849,
          -13.5890334,
          0.132517977
        ],
        note: "[SkyReels v2 I2V 1.3B 540p](https://huggingface.co/Skywork/SkyReels-V2-I2V-1.3B-540P) is a image-to-video model developed by Skywork AI. It can generate video clips of up to 4 seconds in length. The model is trained at 544x960, supports up to 97 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (1.3B), it performs best with similar generation settings."
      },
      {
        name: "SkyReels v2 I2V 1.3B 540p (8-bit)",
        version: "wan_v2.1_1.3b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 8,
        hires_fix_scale: 12,
        file: "skyreels_v2_i2v_1.3b_540p_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          257151.496,
          -35422.9917,
          1402.86849,
          -13.5890334,
          0.132517977
        ],
        note: "[SkyReels v2 I2V 1.3B 540p](https://huggingface.co/Skywork/SkyReels-V2-I2V-1.3B-540P) is a image-to-video model developed by Skywork AI. It can generate video clips of up to 4 seconds in length. The model is trained at 544x960, supports up to 97 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (1.3B), it performs best with similar generation settings."
      },
      {
        name: "SkyReels v2 I2V 14B 540p",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "skyreels_v2_i2v_14b_540p_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          257151.496,
          -35422.9917,
          1402.86849,
          -13.5890334,
          0.132517977
        ],
        note: "[SkyReels v2 I2V 14B 540p](https://huggingface.co/Skywork/SkyReels-V2-I2V-14B-540P) is a image-to-video model developed by Skywork AI. It can generate video clips of up to 4 seconds in length. The model is trained at 544x960, supports up to 97 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (14B), it performs best with similar generation settings."
      },
      {
        name: "SkyReels v2 I2V 14B 540p (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "skyreels_v2_i2v_14b_540p_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          257151.496,
          -35422.9917,
          1402.86849,
          -13.5890334,
          0.132517977
        ],
        note: "[SkyReels v2 I2V 14B 540p](https://huggingface.co/Skywork/SkyReels-V2-I2V-14B-540P) is a image-to-video model developed by Skywork AI. It can generate video clips of up to 4 seconds in length. The model is trained at 544x960, supports up to 97 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (14B), it performs best with similar generation settings.",
        builtin_lora: true
      },
      {
        name: "SkyReels v2 I2V 14B 720p",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "skyreels_v2_i2v_14b_720p_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[SkyReels v2 I2V 14B 720p](https://huggingface.co/Skywork/SkyReels-V2-I2V-14B-720P) is a image-to-video model developed by Skywork AI. It can generate video clips of up to 5 seconds in length. The model is trained at 720x1280, supports up to 121 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (14B), it performs best with similar generation settings."
      },
      {
        name: "SkyReels v2 I2V 14B 720p (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "skyreels_v2_i2v_14b_720p_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[SkyReels v2 I2V 14B 720p](https://huggingface.co/Skywork/SkyReels-V2-I2V-14B-720P) is a image-to-video model developed by Skywork AI. It can generate video clips of up to 5 seconds in length. The model is trained at 720x1280, supports up to 121 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (14B), it performs best with similar generation settings.",
        builtin_lora: true
      },
      {
        name: "SkyReels v2 T2V 14B 540p",
        version: "wan_v2.1_14b",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "skyreels_v2_t2v_14b_540p_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          -303318.725,
          49053.7029,
          -2655.30556,
          58.7365115,
          -0.315583525
        ],
        note: "[SkyReels v2 T2V 14B 540p](https://huggingface.co/Skywork/SkyReels-V2-T2V-14B-540P) is a text-to-video model developed by Skywork AI. It can generate video clips of up to 4 seconds in length. The model is trained at 544x960, supports up to 97 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (14B), it performs best with similar generation settings."
      },
      {
        name: "SkyReels v2 T2V 14B 540p (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "skyreels_v2_t2v_14b_540p_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          -303318.725,
          49053.7029,
          -2655.30556,
          58.7365115,
          -0.315583525
        ],
        note: "[SkyReels v2 T2V 14B 540p](https://huggingface.co/Skywork/SkyReels-V2-T2V-14B-540P) is a text-to-video model developed by Skywork AI. It can generate video clips of up to 4 seconds in length. The model is trained at 544x960, supports up to 97 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (14B), it performs best with similar generation settings.",
        builtin_lora: true
      },
      {
        name: "SkyReels v2 T2V 14B 720p",
        version: "wan_v2.1_14b",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "skyreels_v2_t2v_14b_720p_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          -303318.725,
          49053.7029,
          -2655.30556,
          58.7365115,
          -0.315583525
        ],
        note: "[SkyReels v2 T2V 14B 720p](https://huggingface.co/Skywork/SkyReels-V2-T2V-14B-720P) is a text-to-video model developed by Skywork AI. It can generate video clips of up to 5 seconds in length. The model is trained at 720x1280, supports up to 121 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (14B), it performs best with similar generation settings."
      },
      {
        name: "SkyReels v2 T2V 14B 720p (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "skyreels_v2_t2v_14b_720p_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 24,
        tea_cache_coefficients: [
          -303318.725,
          49053.7029,
          -2655.30556,
          58.7365115,
          -0.315583525
        ],
        note: "[SkyReels v2 T2V 14B 720p](https://huggingface.co/Skywork/SkyReels-V2-T2V-14B-720P) is a text-to-video model developed by Skywork AI. It can generate video clips of up to 5 seconds in length. The model is trained at 720x1280, supports up to 121 frames, with a recommended shift value of 5.0. As a derivative of Wan 2.1 (14B), it performs best with similar generation settings.",
        builtin_lora: true
      },
      {
        name: "Spider-Verse (v1)",
        version: "v1",
        text_encoder: "spiderverse_v1_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        default_scale: 8,
        file: "spiderverse_v1_f16.ckpt",
        prefix: "spiderverse style "
      },
      {
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        file: "ssd_1b_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        version: "ssd_1b",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        name: "SSD 1B (Segmind SDXL)",
        default_scale: 16
      },
      {
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        file: "ssd_1b_q6p_q8p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        version: "ssd_1b",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        name: "SSD 1B (Segmind SDXL) (8-bit)",
        default_scale: 16
      },
      {
        name: "Stable Cascade (W\xFCrstchen v3.0)",
        stage_models: [
          "wurstchen_3.0_stage_b_f16.ckpt"
        ],
        version: "wurstchen_v3.0_stage_c",
        default_scale: 16,
        file: "wurstchen_3.0_stage_c_f32_f16.ckpt",
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "wurstchen_3.0_stage_a_hq_f16.ckpt",
        upcast_attention: false,
        prefix: ""
      },
      {
        name: "Stable Cascade (W\xFCrstchen v3.0) (8-bit)",
        stage_models: [
          "wurstchen_3.0_stage_b_q6p_q8p.ckpt"
        ],
        version: "wurstchen_v3.0_stage_c",
        default_scale: 16,
        file: "wurstchen_3.0_stage_c_f32_q6p_q8p.ckpt",
        text_encoder: "open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "wurstchen_3.0_stage_a_hq_f16.ckpt",
        upcast_attention: false,
        prefix: ""
      },
      {
        name: "Stable Diffusion v1.4",
        file: "sd_v1.4_f16.ckpt",
        version: "v1",
        official: true
      },
      {
        name: "Stable Diffusion v1.5",
        file: "sd_v1.5_f16.ckpt",
        version: "v1",
        official: true
      },
      {
        name: "Stable Diffusion v1.5 Inpainting",
        file: "sd_v1.5_inpainting_f16.ckpt",
        version: "v1",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Stable Diffusion v2.0",
        file: "sd_v2.0_f16.ckpt",
        version: "v2",
        official: true
      },
      {
        name: "Stable Diffusion v2.0 768-v",
        file: "sd_v2.0_768_v_f16.ckpt",
        version: "v2",
        official: true
      },
      {
        name: "Stable Diffusion v2.0 Depth",
        file: "sd_v2.0_depth_f16.ckpt",
        version: "v2",
        modifier: "depth",
        official: true
      },
      {
        name: "Stable Diffusion v2.0 Inpainting",
        file: "sd_v2.0_inpainting_f16.ckpt",
        version: "v2",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Stable Diffusion v2.1",
        file: "sd_v2.1_f16.ckpt",
        version: "v2",
        official: true
      },
      {
        name: "Stable Diffusion v2.1 768-v",
        file: "sd_v2.1_768_v_f16.ckpt",
        version: "v2",
        official: true
      },
      {
        file: "svd_i2v_1.0_f16.ckpt",
        version: "svd_i2v",
        conditioning: "noise",
        objective: {
          v: {}
        },
        prefix: "",
        default_scale: 8,
        clip_encoder: "svd_i2v_1.0_f16.ckpt",
        name: "Stable Video Diffusion I2V v1.0",
        text_encoder: "open_clip_vit_h14_vision_model_f16.ckpt",
        upcast_attention: false,
        modifier: "none",
        noise_discretization: {
          edm: {
            _0: {
              sigma_max: 700,
              sigma_data: 0.5,
              sigma_min: 2e-3
            }
          }
        }
      },
      {
        file: "svd_i2v_1.0_q6p_q8p.ckpt",
        version: "svd_i2v",
        conditioning: "noise",
        objective: {
          v: {}
        },
        prefix: "",
        default_scale: 8,
        clip_encoder: "svd_i2v_1.0_q6p_q8p.ckpt",
        name: "Stable Video Diffusion I2V v1.0 (8-bit)",
        text_encoder: "open_clip_vit_h14_vision_model_f16.ckpt",
        upcast_attention: false,
        modifier: "none",
        noise_discretization: {
          edm: {
            _0: {
              sigma_max: 700,
              sigma_data: 0.5,
              sigma_min: 2e-3
            }
          }
        }
      },
      {
        name: "Stable Video Diffusion I2V XT 1.0 (8-bit)",
        file: "svd_i2v_xt_1.0_q6p_q8p.ckpt",
        version: "svdI2v",
        official: true
      },
      {
        name: "Stable Video Diffusion I2V XT v1.0",
        file: "svd_i2v_xt_1.0_f16.ckpt",
        version: "svdI2v",
        official: true
      },
      {
        file: "svd_i2v_xt_1.1_f16.ckpt",
        version: "svd_i2v",
        conditioning: "noise",
        objective: {
          v: {}
        },
        prefix: "",
        default_scale: 8,
        clip_encoder: "svd_i2v_xt_1.1_f16.ckpt",
        name: "Stable Video Diffusion I2V XT v1.1",
        text_encoder: "open_clip_vit_h14_vision_model_f16.ckpt",
        upcast_attention: false,
        modifier: "none",
        noise_discretization: {
          edm: {
            _0: {
              sigma_max: 700,
              sigma_data: 0.5,
              sigma_min: 2e-3
            }
          }
        }
      },
      {
        file: "svd_i2v_xt_1.1_q6p_q8p.ckpt",
        version: "svd_i2v",
        conditioning: "noise",
        objective: {
          v: {}
        },
        prefix: "",
        default_scale: 8,
        clip_encoder: "svd_i2v_xt_1.1_q6p_q8p.ckpt",
        name: "Stable Video Diffusion I2V XT v1.1 (8-bit)",
        text_encoder: "open_clip_vit_h14_vision_model_f16.ckpt",
        upcast_attention: false,
        modifier: "none",
        noise_discretization: {
          edm: {
            _0: {
              sigma_max: 700,
              sigma_data: 0.5,
              sigma_min: 2e-3
            }
          }
        }
      },
      {
        name: "Super Mario Nation (v2)",
        default_scale: 8,
        text_encoder: "supermarionation_v2_clip_vit_l14_f16.ckpt",
        file: "supermarionation_v2_f16.ckpt",
        prefix: "supermarionation ",
        version: "v1",
        upcast_attention: false
      },
      {
        version: "v1",
        prefix: "trnlgcy style ",
        upcast_attention: false,
        default_scale: 8,
        text_encoder: "trnlgcy_clip_vit_l14_f16.ckpt",
        name: "Tron Legacy",
        file: "trnlgcy_f16.ckpt"
      },
      {
        name: "Van Gogh Style (Lvngvncnt v2)",
        version: "v1",
        text_encoder: "lvngvncnt_v2_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        default_scale: 8,
        file: "lvngvncnt_v2_f16.ckpt",
        prefix: "lvngvncnt "
      },
      {
        name: "VoxelArt (v1)",
        upcast_attention: false,
        version: "v1",
        file: "voxelart_v1_f16.ckpt",
        prefix: "voxelart ",
        default_scale: 8,
        text_encoder: "voxelart_v1_clip_vit_l14_f16.ckpt"
      },
      {
        name: "Wan 2.1 1.3B Fun InP",
        version: "wan_v2.1_1.3b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 8,
        hires_fix_scale: 12,
        file: "wan_2.1_1.3b_fun_inp_f16.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          -52186.2437,
          9230.41404,
          -528.275948,
          13.6987616,
          -0.0499875664
        ],
        note: "[Wan2.1 1.3B Fun InP](https://huggingface.co/alibaba-pai/Wan2.1-Fun-1.3B-InP) is a state-of-the-art image-to-video model developed by Alibaba PAI. It can generate video clips of up to 4 seconds in length. The model is trained at multiple resolutions, supports up to 81 frames, with a recommended shift value of 5.0. Text Guidance should be somewhere between 3 to 7. Wan2.1 is trained with Flow Matching objective, Trailing samplers would give the best result."
      },
      {
        name: "Wan 2.1 1.3B Fun InP (8-bit)",
        version: "wan_v2.1_1.3b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 8,
        hires_fix_scale: 12,
        file: "wan_2.1_1.3b_fun_inp_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          -52186.2437,
          9230.41404,
          -528.275948,
          13.6987616,
          -0.0499875664
        ],
        note: "[Wan2.1 1.3B Fun InP](https://huggingface.co/alibaba-pai/Wan2.1-Fun-1.3B-InP) is a state-of-the-art image-to-video model developed by Alibaba PAI. It can generate video clips of up to 4 seconds in length. The model is trained at multiple resolutions, supports up to 81 frames, with a recommended shift value of 5.0. Text Guidance should be somewhere between 3 to 7. Wan2.1 is trained with Flow Matching objective, Trailing samplers would give the best result."
      },
      {
        name: "Wan 2.1 1.3B v1.1 Fun InP",
        version: "wan_v2.1_1.3b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 8,
        hires_fix_scale: 12,
        file: "wan_2.1_1.3b_v1.1_fun_inp_f16.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          -52186.2437,
          9230.41404,
          -528.275948,
          13.6987616,
          -0.0499875664
        ],
        note: "[Wan2.1 1.3B v1.1 Fun InP](https://huggingface.co/alibaba-pai/Wan2.1-Fun-V1.1-1.3B-InP) is a state-of-the-art image-to-video model developed by Alibaba PAI. It can generate video clips of up to 4 seconds in length. The model is trained at multiple resolutions, supports up to 81 frames, with a recommended shift value of 5.0. Text Guidance should be somewhere between 3 to 7. Wan2.1 is trained with Flow Matching objective, Trailing samplers would give the best result."
      },
      {
        name: "Wan 2.1 1.3B v1.1 Fun InP (8-bit)",
        version: "wan_v2.1_1.3b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 8,
        hires_fix_scale: 12,
        file: "wan_2.1_1.3b_v1.1_fun_inp_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          -52186.2437,
          9230.41404,
          -528.275948,
          13.6987616,
          -0.0499875664
        ],
        note: "[Wan2.1 1.3B v1.1 Fun InP](https://huggingface.co/alibaba-pai/Wan2.1-Fun-V1.1-1.3B-InP) is a state-of-the-art image-to-video model developed by Alibaba PAI. It can generate video clips of up to 4 seconds in length. The model is trained at multiple resolutions, supports up to 81 frames, with a recommended shift value of 5.0. Text Guidance should be somewhere between 3 to 7. Wan2.1 is trained with Flow Matching objective, Trailing samplers would give the best result."
      },
      {
        name: "Wan 2.1 14B Fun InP",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_2.1_14b_fun_inp_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[Wan2.1 14B Fun InP](https://huggingface.co/alibaba-pai/Wan2.1-Fun-14B-InP) is a state-of-the-art image-to-video model developed by Alibaba PAI. It can generate video clips of up to 4 seconds in length. The model is trained at multiple resolutions, supports up to 81 frames, with a recommended shift value of 5.0. Text Guidance should be somewhere between 3 to 7. Wan2.1 is trained with Flow Matching objective, Trailing samplers would give the best result."
      },
      {
        name: "Wan 2.1 14B Fun InP (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_2.1_14b_fun_inp_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[Wan2.1 14B Fun InP](https://huggingface.co/alibaba-pai/Wan2.1-Fun-14B-InP) is a state-of-the-art image-to-video model developed by Alibaba PAI. It can generate video clips of up to 4 seconds in length. The model is trained at multiple resolutions, supports up to 81 frames, with a recommended shift value of 5.0. Text Guidance should be somewhere between 3 to 7. Wan2.1 is trained with Flow Matching objective, Trailing samplers would give the best result.",
        builtin_lora: true
      },
      {
        name: "Wan 2.1 14B I2V FusionX",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_2.1_14b_i2v_fusionx_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[Wan2.1 14B FusionX](https://huggingface.co/vrgamedevgirl84/Wan14BT2VFusioniX) is a merged model of multiple quality and acceleration LoRAs."
      },
      {
        name: "Wan 2.1 14B I2V FusionX (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_2.1_14b_i2v_fusionx_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[Wan2.1 14B FusionX](https://huggingface.co/vrgamedevgirl84/Wan14BT2VFusioniX) is a merged model of multiple quality and acceleration LoRAs.",
        builtin_lora: true
      },
      {
        name: "Wan 2.1 14B T2V FusionX",
        version: "wan_v2.1_14b",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_2.1_14b_t2v_fusionx_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          -303318.725,
          49053.7029,
          -2655.30556,
          58.7365115,
          -0.315583525
        ],
        note: "[Wan2.1 14B FusionX](https://huggingface.co/vrgamedevgirl84/Wan14BT2VFusioniX) is a merged model of multiple quality and acceleration LoRAs."
      },
      {
        name: "Wan 2.1 14B T2V FusionX (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_2.1_14b_t2v_fusionx_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          -303318.725,
          49053.7029,
          -2655.30556,
          58.7365115,
          -0.315583525
        ],
        note: "[Wan2.1 14B FusionX](https://huggingface.co/vrgamedevgirl84/Wan14BT2VFusioniX) is a merged model of multiple quality and acceleration LoRAs.",
        builtin_lora: true
      },
      {
        name: "Wan 2.1 14B v1.1 Fun InP",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_2.1_14b_v1.1_fun_inp_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[Wan2.1 14B v1.1 Fun InP](https://huggingface.co/alibaba-pai/Wan2.1-Fun-V1.1-14B-InP) is a state-of-the-art image-to-video model developed by Alibaba PAI. It can generate video clips of up to 4 seconds in length. The model is trained at multiple resolutions, supports up to 81 frames, with a recommended shift value of 5.0. Text Guidance should be somewhere between 3 to 7. Wan2.1 is trained with Flow Matching objective, Trailing samplers would give the best result."
      },
      {
        name: "Wan 2.1 14B v1.1 Fun InP (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        modifier: "inpainting",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_2.1_14b_v1.1_fun_inp_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        clip_encoder: "open_clip_xlm_roberta_large_vit_h14_f16.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          8107.0546,
          2133.93892,
          -372.934672,
          16.6203073,
          -0.0417769401
        ],
        note: "[Wan2.1 14B v1.1 Fun InP](https://huggingface.co/alibaba-pai/Wan2.1-Fun-V1.1-14B-InP) is a state-of-the-art image-to-video model developed by Alibaba PAI. It can generate video clips of up to 4 seconds in length. The model is trained at multiple resolutions, supports up to 81 frames, with a recommended shift value of 5.0. Text Guidance should be somewhere between 3 to 7. Wan2.1 is trained with Flow Matching objective, Trailing samplers would give the best result.",
        builtin_lora: true
      },
      {
        name: "Wan 2.1 I2V 14B 480p",
        file: "wan_v2.1_14b_i2v_480p_q8p.ckpt",
        version: "wan21_14b",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Wan 2.1 I2V 14B 480p (6-bit, SVDQuant)",
        file: "wan_v2.1_14b_i2v_480p_q6p_svd.ckpt",
        version: "wan21_14b",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Wan 2.1 I2V 14B 720p",
        file: "wan_v2.1_14b_i2v_720p_q8p.ckpt",
        version: "wan21_14b",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Wan 2.1 I2V 14B 720p (6-bit, SVDQuant)",
        file: "wan_v2.1_14b_i2v_720p_q6p_svd.ckpt",
        version: "wan21_14b",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Wan 2.1 T2V 1.3B",
        file: "wan_v2.1_1.3b_480p_f16.ckpt",
        version: "wan21_1_3b",
        official: true
      },
      {
        name: "Wan 2.1 T2V 1.3B (8-bit)",
        file: "wan_v2.1_1.3b_480p_q8p.ckpt",
        version: "wan21_1_3b",
        official: true
      },
      {
        name: "Wan 2.1 T2V 14B",
        file: "wan_v2.1_14b_720p_q8p.ckpt",
        version: "wan21_14b",
        official: true
      },
      {
        name: "Wan 2.1 T2V 14B (5-bit, SVDQuant)",
        file: "wan_v2.1_14b_720p_q5p_svd.ckpt",
        version: "wan21_14b",
        official: true
      },
      {
        name: "Wan 2.1 T2V 14B (6-bit, SVDQuant)",
        file: "wan_v2.1_14b_720p_q6p_svd.ckpt",
        version: "wan21_14b",
        official: true
      },
      {
        name: "Wan 2.2 High Noise Expert I2V A14B",
        file: "wan_v2.2_a14b_hne_i2v_q8p.ckpt",
        version: "wan21_14b",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Wan 2.2 High Noise Expert I2V A14B (6-bit, SVDQuant)",
        file: "wan_v2.2_a14b_hne_i2v_q6p_svd.ckpt",
        version: "wan21_14b",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Wan 2.2 High Noise Expert T2V A14B",
        file: "wan_v2.2_a14b_hne_t2v_q8p.ckpt",
        version: "wan21_14b",
        official: true
      },
      {
        name: "Wan 2.2 High Noise Expert T2V A14B (6-bit, SVDQuant)",
        file: "wan_v2.2_a14b_hne_t2v_q6p_svd.ckpt",
        version: "wan21_14b",
        official: true
      },
      {
        name: "Wan 2.2 Low Noise Expert I2V A14B",
        file: "wan_v2.2_a14b_lne_i2v_q8p.ckpt",
        version: "wan21_14b",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Wan 2.2 Low Noise Expert I2V A14B (6-bit, SVDQuant)",
        file: "wan_v2.2_a14b_lne_i2v_q6p_svd.ckpt",
        version: "wan21_14b",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Wan 2.2 Low Noise Expert T2V A14B",
        file: "wan_v2.2_a14b_lne_t2v_q8p.ckpt",
        version: "wan21_14b",
        official: true
      },
      {
        name: "Wan 2.2 Low Noise Expert T2V A14B (6-bit, SVDQuant)",
        file: "wan_v2.2_a14b_lne_t2v_q6p_svd.ckpt",
        version: "wan21_14b",
        official: true
      },
      {
        name: "Wan 2.2 TI2V 5B",
        file: "wan_v2.2_5b_ti2v_f16.ckpt",
        version: "wan22_5b",
        official: true
      },
      {
        name: "Wan 2.2 TI2V 5B (8-bit)",
        file: "wan_v2.2_5b_ti2v_q8p.ckpt",
        version: "wan22_5b",
        official: true
      },
      {
        name: "Wan v2.2 High Noise Expert T2V A14B Lightning 250928",
        version: "wan_v2.1_14b",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_v2.2_a14b_hne_t2v_lightning_250928_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          -303318.725,
          49053.7029,
          -2655.30556,
          58.7365115,
          -0.315583525
        ],
        note: "[Wan2.2 High Noise Expert T2V A14B Lightning 250928](https://huggingface.co/lightx2v/Wan2.2-Lightning/tree/main/Wan2.2-T2V-A14B-4steps-250928-dyno) is a fine-tune of Wan v2.2 High Noise Expert model. It can generate more dynamic motions with 4 steps and text guidance 1.0."
      },
      {
        name: "Wan v2.2 High Noise Expert T2V A14B Lightning 250928 (6-bit, SVDQuant)",
        version: "wan_v2.1_14b",
        autoencoder: "wan_v2.1_video_vae_f16.ckpt",
        prefix: "",
        default_scale: 12,
        hires_fix_scale: 16,
        file: "wan_v2.2_a14b_hne_t2v_lightning_250928_q6p_svd.ckpt",
        upcast_attention: false,
        text_encoder: "umt5_xxl_encoder_q8p.ckpt",
        high_precision_autoencoder: false,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        frames_per_second: 16,
        tea_cache_coefficients: [
          -303318.725,
          49053.7029,
          -2655.30556,
          58.7365115,
          -0.315583525
        ],
        note: "[Wan2.2 High Noise Expert T2V A14B Lightning 250928](https://huggingface.co/lightx2v/Wan2.2-Lightning/tree/main/Wan2.2-T2V-A14B-4steps-250928-dyno) is a fine-tune of Wan v2.2 High Noise Expert model. It can generate more dynamic motions with 4 steps and text guidance 1.0.",
        builtin_lora: true
      }
    ];
  }
});

// src-web/models/uncurated_models.json
var uncurated_models_exports = {};
__export(uncurated_models_exports, {
  default: () => uncurated_models_default
});
var uncurated_models_default;
var init_uncurated_models = __esm({
  "src-web/models/uncurated_models.json"() {
    uncurated_models_default = [
      {
        upcast_attention: false,
        clip_encoder: "2dn_clip_vit_l14_f16.ckpt",
        modifier: "none",
        version: "sdxl_base_v0.9",
        name: "2DN",
        text_encoder: "2dn_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        prefix: "",
        file: "2dn_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1693152_8stepscrearthyperflux_creartultimate_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "8Steps_Creart_Hyper_Flux_creart_Ultimate",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "862930_8stepscrearthyperflux_v24hyperdevfp8unet_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "8Steps_Creart_Hyper_Flux_v24Hyper_Dev_Fp8Unet",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "930403_8stepscrearthyperflux_v26hyperdevfp8unet_f16.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "8Steps_Creart_Hyper_Flux_v26Hyper_Dev_Fp8Unet",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "930403_8stepscrearthyperflux_v26hyperdevfp8unet_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "8Steps_Creart_Hyper_Flux_v26Hyper_Dev_Fp8Unet (8-bit)",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1187144_8stepscrearthyperflux_v30hyperdevfp8unet_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "8Steps_Creart_Hyper_Flux_v30Hyper_Dev_Fp8Unet",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1315145_8stepscrearthyperflux_v40hyperdevfp8unet_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "8Steps_Creart_Hyper_Flux_v40Hyper_Dev_Fp8Unet",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "987485_acornisspinningflux_aisfluxdedistilled_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Acorn_Is_Spinning_FLUX_ais_Flux_De_Distilled",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1374658_acornisspinningflux_aisfluxv15_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Acorn_Is_Spinning_FLUX_ais_Flux_V15",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1450688_acornisspinningflux_aisfdedistilledv15_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Acorn_Is_Spinning_FLUX_aisf_De_Distilled_V15",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1298942_acornisspinningflux_aisfhyper8stepv15_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Acorn_Is_Spinning_FLUX_aisf_Hyper8Step_V15",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1656743_acornisspinningflux_aisfv169_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Acorn_Is_Spinning_FLUX_aisf_V169",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1052470_acornisspinningflux_aisf11h8stpchinfx_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Acorn_Is_Spinning_FLUX_aisf11H8stp_Chinfx",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1095910_agfluxfillnsfwfp8_agfluxfillnsfwv17fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "inpainting",
        name: "Agflux_Fill_NSFWFp8_agflux_Fill_NSFWV17Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "884843_agflux_schnellv10fp8_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Agflux_Schnell_V10Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "864441_agflux_v10fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Agflux_V10Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1055211_agflux_v21fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Agflux_V21Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1244250_agflux_v3fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Agflux_V3Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "agga_s_utopia__illustrious_sdxl_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        text_encoder: "agga_s_utopia__illustrious_sdxl_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16,
        name: "AGGAs-Utopia-_illustrious-SDXL",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        modifier: "none",
        clip_encoder: "agga_s_utopia__illustrious_sdxl_clip_vit_l14_f16.ckpt"
      },
      {
        file: "amanatsu_illustrious_f16.ckpt",
        clip_encoder: "amanatsu_illustrious_clip_vit_l14_f16.ckpt",
        text_encoder: "amanatsu_illustrious_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        modifier: "none",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        name: "Amanatsu-Illustrious",
        default_scale: 16
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        modifier: "none",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        text_encoder: "anillustrious_open_clip_vit_bigg14_f16.ckpt",
        name: "Anillustrious",
        file: "anillustrious_f16.ckpt",
        clip_encoder: "anillustrious_clip_vit_l14_f16.ckpt"
      },
      {
        modifier: "none",
        text_encoder: "animij_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16,
        file: "animij_f16.ckpt",
        prefix: "",
        name: "Animij",
        clip_encoder: "animij_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false
      },
      {
        text_encoder: "artofura_furry_mix_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        file: "artofura_furry_mix_f16.ckpt",
        modifier: "none",
        clip_encoder: "artofura_furry_mix_clip_vit_l14_f16.ckpt",
        prefix: "",
        name: "Artofura-Furry-mix",
        default_scale: 16,
        version: "sdxl_base_v0.9",
        upcast_attention: false
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "974825_artsydream_v1fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v1FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "974932_artsydream_v1fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v1FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1004320_artsydream_v2fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v2FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1004235_artsydream_v2fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v2FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1023964_artsydream_v3fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v3FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1023471_artsydream_v3fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v3FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1071391_artsydream_v4fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v4FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1070930_artsydream_v4fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v4FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1136806_artsydream_v5fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v5FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1136364_artsydream_v5fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v5FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1213649_artsydream_v6fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v6FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1213097_artsydream_v6fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Dream_v6FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1308807_artsyvibe_v1fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Vibe_v1FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1308180_artsyvibe_v1fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Vibe_v1FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1842885_artsyvibe_v2fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Vibe_v2FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1840540_artsyvibe_v2fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Artsy_Vibe_v2FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "asian_realism_by_stable_yogi_pony_f16.ckpt",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        text_encoder: "asian_realism_by_stable_yogi_pony_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "asian_realism_by_stable_yogi_pony_clip_vit_l14_f16.ckpt",
        prefix: "",
        name: "Asian-Realism-By-Stable-Yogi-PONY",
        version: "sdxl_base_v0.9",
        upcast_attention: false
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "980131_atomixfluxunet_v10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Atomix_FLUXUnet_v10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "aungir_aungir_t6a4_1405004_f16.ckpt",
        prefix: "",
        name: "Aungir_Aungir_T6A4_1405004",
        modifier: "none",
        clip_encoder: "aungir_aungir_t6a4_1405004_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        text_encoder: "aungir_aungir_t6a4_1405004_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        upcast_attention: false,
        prefix: "",
        file: "aungir_aungir_t6ao4.5_1723632_f16.ckpt",
        clip_encoder: "aungir_aungir_t6ao4.5_1723632_clip_vit_l14_f16.ckpt",
        text_encoder: "aungir_aungir_t6ao4.5_1723632_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Aungir_Aungir_T6AO4.5_1723632",
        modifier: "none",
        version: "sdxl_base_v0.9"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        text_encoder: "big_love_open_clip_vit_bigg14_f16.ckpt",
        upcast_attention: false,
        modifier: "none",
        prefix: "",
        version: "sdxl_base_v0.9",
        name: "Big-Love",
        clip_encoder: "big_love_clip_vit_l14_f16.ckpt",
        file: "big_love_f16.ckpt"
      },
      {
        name: "Bismuth-Illustrious-Mix",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        clip_encoder: "bismuth_illustrious_mix_clip_vit_l14_f16.ckpt",
        prefix: "",
        file: "bismuth_illustrious_mix_f16.ckpt",
        text_encoder: "bismuth_illustrious_mix_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        modifier: "none"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        clip_encoder: "blendermix_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        file: "blendermix_f16.ckpt",
        modifier: "none",
        text_encoder: "blendermix_open_clip_vit_bigg14_f16.ckpt",
        name: "BlenderMix",
        upcast_attention: false
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "808159_bluepencilflux1_v010_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Blue_Pencil_Flux1_v010",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "867256_bluepencilflux1_v021_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Blue_Pencil_Flux1_v021",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        default_scale: 16,
        prefix: "",
        name: "boleromixillustrious",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "boleromixillustrious_clip_vit_l14_f16.ckpt",
        text_encoder: "boleromixillustrious_open_clip_vit_bigg14_f16.ckpt",
        file: "boleromixillustrious_f16.ckpt",
        upcast_attention: false,
        modifier: "none"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "978066_c4pacitor_av2alpha_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "C4pacitor_a_V2Alpha",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1035832_c4pacitor_av2beta_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "C4pacitor_a_V2Beta",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "845592_c4pacitor_dv1_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "C4pacitor_d_V1",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "949363_c4pacitor_dv11_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "C4pacitor_d_V11",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1123235_c4pacitor_dv2_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "C4pacitor_d_V2",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1700674_c4pacitor_dv3alpha_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "C4pacitor_d_V3Alpha",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "954181_c4pacitor_sv11_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "C4pacitor_s_V11",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1086868_c4pacitor_sv2alpha_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "C4pacitor_s_V2Alpha",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        version: "sdxl_base_v0.9",
        default_scale: 16,
        modifier: "none",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        name: "Candied-Anime-IllustriousXL",
        upcast_attention: false,
        clip_encoder: "candied_anime_illustriousxl_clip_vit_l14_f16.ckpt",
        file: "candied_anime_illustriousxl_f16.ckpt",
        text_encoder: "candied_anime_illustriousxl_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1178183_centerfoldflux_v35fp8e54steps_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Centerfold_Flux_v35FP8E54Steps",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1845222_centerfoldflux_v40fp8e5m2_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Centerfold_Flux_v40Fp8E5m2",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        name: "Chroma v38 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v38_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v38 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v38_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v39 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v39_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v39 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v39_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v40 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v40_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v40 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v40_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v41 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v41_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v41 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v41_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v42 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v42_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v42 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v42_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v43 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v43_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v43 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v43_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v44 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v44_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v44 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v44_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v45 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v45_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v45 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v45_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v46 Detail Calibrated",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v46_detail_calibrated_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma v46 Detail Calibrated (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_v46_detail_calibrated_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma](https://huggingface.co/lodestones/Chroma)."
      },
      {
        name: "Chroma1 HD Annealed",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_1_hd_annealed_q8p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma1 HD](https://huggingface.co/lodestones/Chroma1-HD)."
      },
      {
        name: "Chroma1 HD Annealed (5-bit)",
        version: "flux1",
        autoencoder: "flux_1_vae_f16.ckpt",
        prefix: "",
        default_scale: 16,
        hires_fix_scale: 24,
        file: "chroma_1_hd_annealed_q5p.ckpt",
        upcast_attention: false,
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        high_precision_autoencoder: true,
        padded_text_encoding_length: 256,
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        mmdit: {
          dual_attention_layers: [],
          distilled_guidance_layers: 5,
          qk_norm: true
        },
        note: "See more about [Chroma1 HD](https://huggingface.co/lodestones/Chroma1-HD)."
      },
      {
        default_scale: 16,
        prefix: "",
        upcast_attention: false,
        version: "sdxl_base_v0.9",
        file: "circusmix_f16.ckpt",
        text_encoder: "circusmix_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "circusmix_clip_vit_l14_f16.ckpt",
        name: "CircusMix",
        modifier: "none"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "765642_colorfulasiangirlflux_beta_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colorfulasiangirl_Flux_beta",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "996001_colossusprojectflux_21dedistilledaioexp_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_21De_Distilled_AIOExp",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1846322_colossusprojectflux_v10aiofp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v10AIOFP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "931988_colossusprojectflux_v10allinonefp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v10All_In_One_Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1860608_colossusprojectflux_v10bfp8aiobobfp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v10b_FP8AIOBOBFP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1851709_colossusprojectflux_v10behemothaiofp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v10Behemoth_AIOFP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "940696_colossusprojectflux_v10fp16unetonly_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v10FP16UNETONLY",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1855312_colossusprojectflux_v10unetonlyfp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v10UNETOnly_FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1848909_colossusprojectflux_v10unetonlyfp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v10UNETOnly_FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "971579_colossusprojectflux_v20allinoneexp_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v20All_In_One_Exp",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1159932_colossusprojectflux_v42aio_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v42AIO",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1495910_colossusprojectflux_v44aio_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v44AIO",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1443922_colossusprojectflux_v50aio_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v50AIO",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1507835_colossusprojectflux_v50aiobehemoth_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v50AIOBehemoth",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1462430_colossusprojectflux_v50fp8unet_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v50FP8UNET",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1703060_colossusprojectflux_v90aio_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Colossus_Project_Flux_v90AIO",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1045901_copaxtimeless_fluxrealfast_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_fluxreal_Fast",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "894590_copaxtimeless_stylemix1fluxdevfp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_stylemix1Flux_Dev_FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "897535_copaxtimeless_stylemix1fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_stylemix1Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "975743_copaxtimeless_stylemix2_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_stylemix2",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1338565_copaxtimeless_xpluscartoon_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus_Cartoon",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "954640_copaxtimeless_xplusmix1_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus_MIX1",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "962412_copaxtimeless_xplusmix1fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus_MIX1FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "982160_copaxtimeless_xplusmix2_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus_MIX2",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1134093_copaxtimeless_xplusmix3_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus_MIX3",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1148473_copaxtimeless_xplusmix3dark_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus_MIX3Dark",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1217501_copaxtimeless_xplusmix4_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus_MIX4",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "801556_copaxtimeless_xplusposes_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus_Poses",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "783956_copaxtimeless_xplusunrealfast_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus_Unreal_Fast",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "778112_copaxtimeless_xplus1_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus1",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "907183_copaxtimeless_xplus2_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus2",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1085190_copaxtimeless_xplus2basetrain_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Copax_Timeless_xplus2Base_Train",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "copax_pony_xl_f16.ckpt",
        name: "Copax-Pony-XL",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "copax_pony_xl_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        modifier: "none",
        default_scale: 16,
        prefix: "",
        upcast_attention: false,
        text_encoder: "copax_pony_xl_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        text_encoder: "crow___pony_qp_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "crow___pony_qp_clip_vit_l14_f16.ckpt",
        modifier: "none",
        name: "Crow-Pony-qp",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        default_scale: 16,
        file: "crow___pony_qp_f16.ckpt"
      },
      {
        prefix: "",
        text_encoder: "cyberillustrious_cyberrealistic_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9",
        modifier: "none",
        clip_encoder: "cyberillustrious_cyberrealistic_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        name: "CyberIllustrious-CyberRealistic",
        file: "cyberillustrious_cyberrealistic_f16.ckpt",
        default_scale: 16
      },
      {
        default_scale: 8,
        upcast_attention: false,
        prefix: "",
        name: "CyberRealistic",
        text_encoder: "cyberrealistic_clip_vit_l14_f16.ckpt",
        version: "v1",
        file: "cyberrealistic_f16.ckpt",
        modifier: "none"
      },
      {
        name: "CyberRealistic_Pony_v8_1346181",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "cyberrealistic_pony_v8_1346181_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        file: "cyberrealistic_pony_v8_1346181_f16.ckpt",
        prefix: "",
        clip_encoder: "cyberrealistic_pony_v8_1346181_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        default_scale: 16
      },
      {
        file: "cyberrealistic_pony_v8.5_1478064_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        version: "sdxl_base_v0.9",
        text_encoder: "cyberrealistic_pony_v8.5_1478064_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        default_scale: 16,
        clip_encoder: "cyberrealistic_pony_v8.5_1478064_clip_vit_l14_f16.ckpt",
        name: "CyberRealistic_Pony_v8.5_1478064"
      },
      {
        prefix: "",
        modifier: "none",
        version: "sdxl_base_v0.9",
        text_encoder: "cyberrealistic_pony_v9.0_alt_1_1691220_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "cyberrealistic_pony_v9.0_alt_1_1691220_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        default_scale: 16,
        name: "CyberRealistic_Pony_v9.0_Alt_1_1691220",
        file: "cyberrealistic_pony_v9.0_alt_1_1691220_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        default_scale: 16,
        version: "sdxl_base_v0.9",
        name: "CyberRealistic-Pony-Catalyst",
        file: "cyberrealistic_pony_catalyst_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "cyberrealistic_pony_catalyst_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        upcast_attention: false,
        clip_encoder: "cyberrealistic_pony_catalyst_clip_vit_l14_f16.ckpt",
        prefix: ""
      },
      {
        prefix: "",
        version: "sdxl_base_v0.9",
        text_encoder: "cyberrealistic_pony_semi_realistic_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        clip_encoder: "cyberrealistic_pony_semi_realistic_clip_vit_l14_f16.ckpt",
        name: "CyberRealistic-Pony-Semi-Realistic",
        file: "cyberrealistic_pony_semi_realistic_f16.ckpt",
        default_scale: 16,
        upcast_attention: false
      },
      {
        file: "cyberrealistic_xl_f16.ckpt",
        name: "CyberRealistic-XL",
        upcast_attention: false,
        text_encoder: "cyberrealistic_xl_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        clip_encoder: "cyberrealistic_xl_clip_vit_l14_f16.ckpt",
        prefix: "",
        default_scale: 16,
        version: "sdxl_base_v0.9"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1048219_demoncoresfwnsfw_fluxv13_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Demon_CORESFWNSFW_flux_V13",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1357212_demoncoresfwnsfw_v25helheimprojectaio_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Demon_CORESFWNSFW_v25Helheim_Project_AIO",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        prefix: "",
        name: "DHXL-v1.0",
        upcast_attention: false,
        version: "sdxl_base_v0.9",
        modifier: "none",
        default_scale: 16,
        text_encoder: "dhxl_v1.0_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "dhxl_v1.0_clip_vit_l14_f16.ckpt",
        file: "dhxl_v1.0_f16.ckpt"
      },
      {
        upcast_attention: false,
        prefix: "",
        text_encoder: "dixar_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "dixar_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        version: "sdxl_base_v0.9",
        name: "Dixar",
        modifier: "none",
        file: "dixar_f16.ckpt"
      },
      {
        upcast_attention: false,
        modifier: "none",
        file: "dreamisoa_remix_f16.ckpt",
        name: "Dreamisoa-remix",
        default_scale: 16,
        text_encoder: "dreamisoa_remix_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        version: "sdxl_base_v0.9",
        clip_encoder: "dreamisoa_remix_clip_vit_l14_f16.ckpt"
      },
      {
        name: "DucHaiten_Pony_XL_no_score_v5.2_706363",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        modifier: "none",
        version: "sdxl_base_v0.9",
        prefix: "",
        file: "duchaiten_pony_xl_no_score_v5.2_706363_f16.ckpt",
        clip_encoder: "duchaiten_pony_xl_no_score_v5.2_706363_clip_vit_l14_f16.ckpt",
        text_encoder: "duchaiten_pony_xl_no_score_v5.2_706363_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        upcast_attention: false,
        text_encoder: "duchaiten_pony_xl_no_score_v6.0_817261_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        modifier: "none",
        clip_encoder: "duchaiten_pony_xl_no_score_v6.0_817261_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "duchaiten_pony_xl_no_score_v6.0_817261_f16.ckpt",
        name: "DucHaiten_Pony_XL_no_score_v6.0_817261",
        version: "sdxl_base_v0.9"
      },
      {
        version: "sdxl_base_v0.9",
        default_scale: 16,
        file: "duchaiten_cool_age_f16.ckpt",
        prefix: "",
        clip_encoder: "duchaiten_cool_age_clip_vit_l14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "duchaiten_cool_age_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        upcast_attention: false,
        name: "DucHaiten-Cool-Age"
      },
      {
        upcast_attention: false,
        prefix: "",
        modifier: "none",
        file: "duchaiten_noobai_f16.ckpt",
        name: "DucHaiten-NoobAI",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "duchaiten_noobai_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "duchaiten_noobai_clip_vit_l14_f16.ckpt"
      },
      {
        prefix: "",
        modifier: "none",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        file: "duchaiten_noobai_cinematic_f16.ckpt",
        upcast_attention: false,
        version: "sdxl_base_v0.9",
        name: "DucHaiten-NoobAI-Cinematic",
        clip_encoder: "duchaiten_noobai_cinematic_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        text_encoder: "duchaiten_noobai_cinematic_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        file: "duchaiten_pony_real_f16.ckpt",
        text_encoder: "duchaiten_pony_real_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16,
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9",
        name: "DucHaiten-Pony-Real",
        prefix: "",
        modifier: "none",
        clip_encoder: "duchaiten_pony_real_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1677057_edgeofreality_32beyondreality_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Edge_Of_Reality_32Beyond_Reality",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1224657_edgeofreality_v30_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Edge_Of_Reality_v30",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "editijon_k_pop_f16.ckpt",
        version: "sdxl_base_v0.9",
        clip_encoder: "editijon_k_pop_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        text_encoder: "editijon_k_pop_open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        name: "Editijon-K-POP",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none"
      },
      {
        prefix: "",
        text_encoder: "epicrealism_xl_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "epicrealism_xl_clip_vit_l14_f16.ckpt",
        file: "epicrealism_xl_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "epiCRealism-XL",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        default_scale: 16,
        modifier: "none"
      },
      {
        name: "Eri-LumenVeil-V1-Illustrious-NAI",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "eri_lumenveil_v1_illustrious_nai_clip_vit_l14_f16.ckpt",
        text_encoder: "eri_lumenveil_v1_illustrious_nai_open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        default_scale: 16,
        upcast_attention: false,
        file: "eri_lumenveil_v1_illustrious_nai_f16.ckpt",
        version: "sdxl_base_v0.9",
        modifier: "none"
      },
      {
        name: "Fantasm-Pony-XL",
        version: "sdxl_base_v0.9",
        clip_encoder: "fantasm_pony_xl_clip_vit_l14_f16.ckpt",
        modifier: "none",
        default_scale: 16,
        file: "fantasm_pony_xl_f16.ckpt",
        prefix: "",
        text_encoder: "fantasm_pony_xl_open_clip_vit_bigg14_f16.ckpt",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "795206_fenrisxlflux_fenrisfluxv1fp8_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fenrisxl_Flux_fenris_Flux_V1FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        modifier: "none",
        clip_encoder: "five_stars_illustrious_1.0_1398525_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "five_stars_illustrious_1.0_1398525_f16.ckpt",
        name: "Five_Stars_Illustrious_1.0_1398525",
        upcast_attention: false,
        version: "sdxl_base_v0.9",
        prefix: "",
        text_encoder: "five_stars_illustrious_1.0_1398525_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        version: "sdxl_base_v0.9",
        modifier: "none",
        file: "five_stars_illustrious_4.0_1657020_f16.ckpt",
        upcast_attention: false,
        name: "Five_Stars_Illustrious_4.0_1657020",
        default_scale: 16,
        prefix: "",
        clip_encoder: "five_stars_illustrious_4.0_1657020_clip_vit_l14_f16.ckpt",
        text_encoder: "five_stars_illustrious_4.0_1657020_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "959302_fluxrealistic_fluxrealisticsamayv2_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Flux_Realistic_flux_Realistic_Samay_V2",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1054490_flux1_v10fp8_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Flux1_v10Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1103485_flux1_v10fp8schnell_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Flux1_v10Fp8Schnell",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1219311_flux1_v20fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Flux1_v20Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1319871_flux1_v30fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Flux1_v30Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1442202_flux1_v30papfp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Flux1_v30PAPFp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "752959_flux1devasian_v10fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Flux1Dev_Asian_v10FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1519790_flux1eastfp8_canny_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "depth",
        name: "Flux1east_Fp8_canny",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1519801_flux1eastfp8_depth_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "depth",
        name: "Flux1east_Fp8_depth",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1519030_flux1eastfp8_dev_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Flux1east_Fp8_dev",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1519446_flux1eastfp8_fill_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "inpainting",
        name: "Flux1east_Fp8_fill",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "947686_fluxedupfluxnsfw_10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxed_Up_Flux_NSFW_10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1126942_fluxedupfluxnsfw_21_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxed_Up_Flux_NSFW_21",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1182699_fluxedupfluxnsfw_22_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxed_Up_Flux_NSFW_22",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1305680_fluxedupfluxnsfw_24_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxed_Up_Flux_NSFW_24",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1466679_fluxedupfluxnsfw_25_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxed_Up_Flux_NSFW_25",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1700814_fluxedupfluxnsfw_40devfp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxed_Up_Flux_NSFW_40Dev_Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1823302_fluxedupfluxnsfw_41_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxed_Up_Flux_NSFW_41",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1050076_fluxmania_i_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxmania_i",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1463804_fluxmania_iv_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxmania_iv",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1769925_fluxmania_legacy_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxmania_legacy",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1539776_fluxmania_v_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Fluxmania_v",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        upcast_attention: false,
        default_scale: 16,
        file: "furrytoonmix_f16.ckpt",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "furrytoonmix_clip_vit_l14_f16.ckpt",
        modifier: "none",
        name: "FurryToonMix",
        text_encoder: "furrytoonmix_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1329004_genovaapex_1618experiment_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Genova_APEX_1618Experiment",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1831456_genovaapex_genovav2_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Genova_APEX_genova_V2",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1209969_genovaapex_plus_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Genova_APEX_plus",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1111281_genovaapex_real_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Genova_APEX_real",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1068773_genovaapex_s_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Genova_APEX_s",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1868950_gonzalomoxlfluxpony_v03fluxityfp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Gonzalomo_XLFlux_Pony_v03Fluxity_Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1883195_gonzalomoxlfluxpony_v10fluxityfp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Gonzalomo_XLFlux_Pony_v10Fluxity_Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "homosimile_xl_pony__illustrious__noobai_f16.ckpt",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        text_encoder: "homosimile_xl_pony__illustrious__noobai_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        clip_encoder: "homosimile_xl_pony__illustrious__noobai_clip_vit_l14_f16.ckpt",
        name: "HomoSimile-XL-Pony_-Illustrious_-NoobAI"
      },
      {
        default_scale: 16,
        upcast_attention: false,
        file: "hoseki_lustrousmix_illustriousxl_f16.ckpt",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        clip_encoder: "hoseki_lustrousmix_illustriousxl_clip_vit_l14_f16.ckpt",
        name: "Hoseki-LustrousMix-IllustriousXL",
        prefix: "",
        text_encoder: "hoseki_lustrousmix_illustriousxl_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        version: "sdxl_base_v0.9",
        file: "hoseki_lustrousmix_pony_xl_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        upcast_attention: false,
        clip_encoder: "hoseki_lustrousmix_pony_xl_clip_vit_l14_f16.ckpt",
        text_encoder: "hoseki_lustrousmix_pony_xl_open_clip_vit_bigg14_f16.ckpt",
        name: "Hoseki-LustrousMix-Pony-XL",
        default_scale: 16,
        prefix: ""
      },
      {
        version: "sdxl_base_v0.9",
        prefix: "",
        clip_encoder: "hs_ultrahd_cg_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        name: "Hs-UltraHD-CG",
        upcast_attention: false,
        file: "hs_ultrahd_cg_f16.ckpt",
        modifier: "none",
        text_encoder: "hs_ultrahd_cg_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1254943_hyperfluxdedistilled_hyper16stepsfp8_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Hyper_Flux_Dedistilled_hyper16Steps_FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1255083_hyperfluxdedistilled_hyper8stepsfp8_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Hyper_Flux_Dedistilled_hyper8Steps_FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        upcast_attention: false,
        version: "sdxl_base_v0.9",
        name: "IcedCoffeeIL",
        default_scale: 16,
        text_encoder: "icedcoffeeil_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        clip_encoder: "icedcoffeeil_clip_vit_l14_f16.ckpt",
        file: "icedcoffeeil_f16.ckpt",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        modifier: "none",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        prefix: "",
        default_scale: 16,
        clip_encoder: "iffymix_xl_clip_vit_l14_f16.ckpt",
        file: "iffymix_xl_f16.ckpt",
        name: "IffyMix-XL",
        text_encoder: "iffymix_xl_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        version: "sdxl_base_v0.9",
        file: "illumiyume_xl_illustrious_f16.ckpt",
        clip_encoder: "illumiyume_xl_illustrious_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        modifier: "none",
        upcast_attention: false,
        text_encoder: "illumiyume_xl_illustrious_open_clip_vit_bigg14_f16.ckpt",
        name: "IllumiYume-XL-Illustrious"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1108227_illustrationjuanerghibli_v10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Illustration_Juaner_Ghibli_v10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1215918_illustrationjuanerghibli_v20_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Illustration_Juaner_Ghibli_v20",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        version: "sdxl_base_v0.9",
        file: "illustrij_f16.ckpt",
        upcast_attention: false,
        default_scale: 16,
        modifier: "none",
        text_encoder: "illustrij_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "illustrij_clip_vit_l14_f16.ckpt",
        name: "Illustrij",
        prefix: ""
      },
      {
        prefix: "",
        name: "Illustrious-Black-Magic-Illustrious-Noob-More",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        file: "illustrious_black_magic_illustrious_noob_more_f16.ckpt",
        clip_encoder: "illustrious_black_magic_illustrious_noob_more_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        modifier: "none",
        text_encoder: "illustrious_black_magic_illustrious_noob_more_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        default_scale: 16,
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "illustrious_gehenna_illustrious_checkpoint_clip_vit_l14_f16.ckpt",
        modifier: "none",
        prefix: "",
        name: "Illustrious-Gehenna-Illustrious-Checkpoint",
        text_encoder: "illustrious_gehenna_illustrious_checkpoint_open_clip_vit_bigg14_f16.ckpt",
        file: "illustrious_gehenna_illustrious_checkpoint_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        default_scale: 16,
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9",
        prefix: "",
        name: "Illustrious-Realism-by-klaabu",
        modifier: "none",
        clip_encoder: "illustrious_realism_by_klaabu_clip_vit_l14_f16.ckpt",
        file: "illustrious_realism_by_klaabu_f16.ckpt",
        text_encoder: "illustrious_realism_by_klaabu_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        prefix: "",
        modifier: "none",
        name: "Illustrious-XL",
        clip_encoder: "illustrious_xl_clip_vit_l14_f16.ckpt",
        text_encoder: "illustrious_xl_open_clip_vit_bigg14_f16.ckpt",
        file: "illustrious_xl_f16.ckpt",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9",
        default_scale: 16
      },
      {
        prefix: "",
        name: "Illustrious-XL-personal-merge-noob-v-pred0.5-test-merge-updated",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "illustrious_xl_personal_merge_noob_v_pred0.5_test_merge_updated_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16,
        modifier: "none",
        upcast_attention: false,
        file: "illustrious_xl_personal_merge_noob_v_pred0.5_test_merge_updated_f16.ckpt",
        clip_encoder: "illustrious_xl_personal_merge_noob_v_pred0.5_test_merge_updated_clip_vit_l14_f16.ckpt"
      },
      {
        prefix: "",
        text_encoder: "indigo_void_furry_fused_xl_furry_noobai_noobai_v1.7_1569147_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "indigo_void_furry_fused_xl_furry_noobai_noobai_v1.7_1569147_clip_vit_l14_f16.ckpt",
        modifier: "none",
        file: "indigo_void_furry_fused_xl_furry_noobai_noobai_v1.7_1569147_f16.ckpt",
        name: "Indigo_Void_Furry_Fused_XL_Furry_NoobAI_NoobAI_v1.7_1569147",
        upcast_attention: false,
        default_scale: 16,
        version: "sdxl_base_v0.9"
      },
      {
        text_encoder: "indigo_void_furry_fused_xl_furry_noobai_noobai_v1.8_1731573_open_clip_vit_bigg14_f16.ckpt",
        upcast_attention: false,
        name: "Indigo_Void_Furry_Fused_XL_Furry_NoobAI_NoobAI_v1.8_1731573",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        default_scale: 16,
        file: "indigo_void_furry_fused_xl_furry_noobai_noobai_v1.8_1731573_f16.ckpt",
        clip_encoder: "indigo_void_furry_fused_xl_furry_noobai_noobai_v1.8_1731573_clip_vit_l14_f16.ckpt",
        prefix: "",
        version: "sdxl_base_v0.9"
      },
      {
        file: "indigo_furry_mix_xl_f16.ckpt",
        modifier: "none",
        text_encoder: "indigo_furry_mix_xl_open_clip_vit_bigg14_f16.ckpt",
        name: "Indigo-Furry-Mix-XL",
        version: "sdxl_base_v0.9",
        prefix: "",
        clip_encoder: "indigo_furry_mix_xl_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false
      },
      {
        upcast_attention: false,
        prefix: "",
        version: "sdxl_base_v0.9",
        modifier: "none",
        file: "indigo_void_furry_vpred_furry_noobai_v_pred_f16.ckpt",
        name: "Indigo-Void-Furry-Vpred-Furry-NoobAI-V-pred",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "indigo_void_furry_vpred_furry_noobai_v_pred_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        text_encoder: "indigo_void_furry_vpred_furry_noobai_v_pred_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1006775_iniversemixsfwnsfw_f1drealguofengfp8v20_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Iniverse_Mix_SFWNSFW_f1d_Real_Guofeng_Fp8V20",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1031531_iniversemixsfwnsfw_f1drealnsfwguofengv2_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Iniverse_Mix_SFWNSFW_f1d_Realnsfw_Guofeng_V2",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "973626_iniversemixsfwnsfw_flux1dnsfwfp16v12_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Iniverse_Mix_SFWNSFW_flux1DNsfw_Fp16V12",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "966095_iniversemixsfwnsfw_flux1dnsfwfp8v10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Iniverse_Mix_SFWNSFW_flux1DNsfw_Fp8V10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "ionsyx_f16.ckpt",
        version: "sdxl_base_v0.9",
        prefix: "",
        name: "Ionsyx",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        upcast_attention: false,
        clip_encoder: "ionsyx_clip_vit_l14_f16.ckpt",
        text_encoder: "ionsyx_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "886474_isenganmixflux_vb_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Isenganmix_Flux_v_B",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "796103_jibmixflux_fp16v1_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Jib_Mix_Flux_fp16V1",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "918242_jibmixflux_fp8v2electric_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Jib_Mix_Flux_fp8V2Electric",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1001176_jibmixflux_fp8v4canvasgalore_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Jib_Mix_Flux_fp8V4Canvas_Galore",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1249737_jibmixflux_v72pixelheaven_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Jib_Mix_Flux_v72Pixel_Heaven",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1355240_jibmixflux_v78cleartextfocus_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Jib_Mix_Flux_v78Clear_Text_Focus",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1193229_jibmixflux_v7pixelheavenbeta_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Jib_Mix_Flux_v7Pixel_Heaven_Beta",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1755367_jibmixflux_v85consisteight_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Jib_Mix_Flux_v85Consisteight",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1389019_jibmixflux_v8accentueightnow_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Jib_Mix_Flux_v8Accentueight_Now",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        clip_encoder: "jib_mix_pony_realistic_clip_vit_l14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Jib-Mix-Pony-Realistic",
        modifier: "none",
        file: "jib_mix_pony_realistic_f16.ckpt",
        text_encoder: "jib_mix_pony_realistic_open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        default_scale: 16,
        version: "sdxl_base_v0.9",
        upcast_attention: false
      },
      {
        name: "Jib-Mix-Realistic-XL",
        clip_encoder: "jib_mix_realistic_xl_clip_vit_l14_f16.ckpt",
        text_encoder: "jib_mix_realistic_xl_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        file: "jib_mix_realistic_xl_f16.ckpt",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        prefix: ""
      },
      {
        file: "jujumix_f16.ckpt",
        text_encoder: "jujumix_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "jujumix_clip_vit_l14_f16.ckpt",
        name: "JujuMix",
        prefix: "",
        default_scale: 16,
        version: "sdxl_base_v0.9"
      },
      {
        name: "Kageillustrious-Illustrious-XL",
        prefix: "",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        text_encoder: "kageillustrious_illustrious_xl_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        clip_encoder: "kageillustrious_illustrious_xl_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "kageillustrious_illustrious_xl_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        text_encoder: "kantanmix_xlillustrious_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        file: "kantanmix_xlillustrious_f16.ckpt",
        default_scale: 16,
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        clip_encoder: "kantanmix_xlillustrious_clip_vit_l14_f16.ckpt",
        name: "KantanMIX-XLIllustrious",
        version: "sdxl_base_v0.9"
      },
      {
        name: "KFT-Requiem-Fur-a-Dream-Illustrious-Semi-Real-Checkpoint",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        file: "kft_requiem_fur_a_dream_illustrious_semi_real_checkpoint_f16.ckpt",
        text_encoder: "kft_requiem_fur_a_dream_illustrious_semi_real_checkpoint_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        default_scale: 16,
        clip_encoder: "kft_requiem_fur_a_dream_illustrious_semi_real_checkpoint_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "KonanMix-NoobAI-XL-IllustriousXL",
        version: "sdxl_base_v0.9",
        clip_encoder: "konanmix_noobai_xl_illustriousxl_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        text_encoder: "konanmix_noobai_xl_illustriousxl_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        file: "konanmix_noobai_xl_illustriousxl_f16.ckpt",
        upcast_attention: false,
        prefix: ""
      },
      {
        modifier: "none",
        clip_encoder: "koronemix_illustrious_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        file: "koronemix_illustrious_f16.ckpt",
        prefix: "",
        name: "koronemix-illustrious",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        text_encoder: "koronemix_illustrious_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "872820_lahmysteriousflux_fluxalpha_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Lah_Mysterious_Flux_flux_Alpha",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        default_scale: 16,
        upcast_attention: false,
        prefix: "",
        modifier: "none",
        clip_encoder: "like_reality_pony_by_ethanar_clip_vit_l14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9",
        text_encoder: "like_reality_pony_by_ethanar_open_clip_vit_bigg14_f16.ckpt",
        name: "Like-Reality-Pony-by-Ethanar",
        file: "like_reality_pony_by_ethanar_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Lox_s-Souls-Mix-Prisma-",
        version: "sdxl_base_v0.9",
        text_encoder: "lox_s_souls_mix_prisma__open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "lox_s_souls_mix_prisma__clip_vit_l14_f16.ckpt",
        prefix: "",
        default_scale: 16,
        modifier: "none",
        file: "lox_s_souls_mix_prisma__f16.ckpt",
        upcast_attention: false
      },
      {
        clip_encoder: "lunargrapemix_illustrious_clip_vit_l14_f16.ckpt",
        file: "lunargrapemix_illustrious_f16.ckpt",
        version: "sdxl_base_v0.9",
        modifier: "none",
        text_encoder: "lunargrapemix_illustrious_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "LunarGrapeMix-Illustrious",
        prefix: "",
        upcast_attention: false
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "835744_lyhanimeflux_delete_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Lyh_Anime_Flux_delete",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        clip_encoder: "madly_mix_ver_nightnoob_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        modifier: "none",
        prefix: "",
        text_encoder: "madly_mix_ver_nightnoob_open_clip_vit_bigg14_f16.ckpt",
        file: "madly_mix_ver_nightnoob_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Madly-Mix-ver-NightNoob"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1247362_majicflus_v10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Majicflus_v10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "meichidarkmix_reload_f16.ckpt",
        modifier: "none",
        version: "sdxl_base_v0.9",
        text_encoder: "meichidarkmix_reload_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        name: "MeichiDarkMix-Reload",
        default_scale: 16,
        prefix: "",
        clip_encoder: "meichidarkmix_reload_clip_vit_l14_f16.ckpt"
      },
      {
        name: "miruku",
        prefix: "",
        clip_encoder: "miruku_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        text_encoder: "miruku_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        file: "miruku_f16.ckpt",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "mistoon_anime_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        text_encoder: "mistoon_anime_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16,
        prefix: "",
        file: "mistoon_anime_f16.ckpt",
        name: "Mistoon-Anime",
        modifier: "none",
        upcast_attention: false
      },
      {
        upcast_attention: false,
        default_scale: 16,
        modifier: "none",
        file: "mol_keun_mix_f16.ckpt",
        name: "Mol-Keun-Mix",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        clip_encoder: "mol_keun_mix_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        text_encoder: "mol_keun_mix_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        prefix: "",
        file: "molcajetemix_noobil_f16.ckpt",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "MolcajeteMix-NoobIL",
        upcast_attention: false,
        text_encoder: "molcajetemix_noobil_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "molcajetemix_noobil_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        modifier: "none"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "905329_moxieflux1ds_flux1d8step_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Flux1DS_flux1D8Step",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "905879_moxieflux1ds_flux1s8step_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Flux1DS_flux1S8Step",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "883958_moxieflux1ds_v138step_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Flux1DS_v138Step",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "986682_moxieflux1ds_v14_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Flux1DS_v14",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1453489_moxieflux1ds_v16d_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Flux1DS_v16D",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1802008_moxieflux1ds_v17s_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Flux1DS_v17S",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1718411_moxiefusionflux_17d_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_17D",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "876813_moxiefusionflux_v1318step_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v1318step",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "874291_moxiefusionflux_v132_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v132",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "873546_moxiefusionflux_v1328step_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v1328step",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "913024_moxiefusionflux_v1338step_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v1338step",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "943051_moxiefusionflux_v134_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v134",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "932231_moxiefusionflux_v1348step_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v1348step",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "985269_moxiefusionflux_v135_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v135",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1255371_moxiefusionflux_v141d_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v141D",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1249359_moxiefusionflux_v141s_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v141S",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1292596_moxiefusionflux_v15s_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v15S",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1473409_moxiefusionflux_v16s_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v16S",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1742386_moxiefusionflux_v17s_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Moxie_Fusion_Flux_v17S",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1505959_msfluxsfwnsfwv3_v3_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ms_Flux_SFWNSFWV3_v3",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "866874_myhumanflux_12train_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Myhuman_Flux_12Train",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "885693_myhumanflux_myh11_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Myhuman_Flux_myh11",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "989443_myhumanflux_myh13_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Myhuman_Flux_myh13",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "991687_myhumanflux_myh13fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Myhuman_Flux_myh13Fp8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1288366_nepotism_xdit_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Nepotism_x_Dit",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1326315_nepotism_xidit_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Nepotism_xi_Dit",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        text_encoder: "nevolution_sdxl_v2_anim_1733673_open_clip_vit_bigg14_f16.ckpt",
        file: "nevolution_sdxl_v2_anim_1733673_f16.ckpt",
        name: "Nevolution_SDXL_v2_anim_1733673",
        default_scale: 16,
        modifier: "none",
        prefix: "",
        upcast_attention: false,
        clip_encoder: "nevolution_sdxl_v2_anim_1733673_clip_vit_l14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        prefix: "",
        text_encoder: "nevolution_sdxl_v2_base_1645671_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Nevolution_SDXL_v2_base_1645671",
        file: "nevolution_sdxl_v2_base_1645671_f16.ckpt",
        default_scale: 16,
        modifier: "none",
        version: "sdxl_base_v0.9",
        clip_encoder: "nevolution_sdxl_v2_base_1645671_clip_vit_l14_f16.ckpt",
        upcast_attention: false
      },
      {
        default_scale: 16,
        text_encoder: "noobai_xl_nai_xl_open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "noobai_xl_nai_xl_clip_vit_l14_f16.ckpt",
        name: "NoobAI-XL-NAI-XL",
        modifier: "none",
        upcast_attention: false,
        file: "noobai_xl_nai_xl_f16.ckpt"
      },
      {
        modifier: "none",
        name: "NostraMix",
        clip_encoder: "nostramix_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        text_encoder: "nostramix_open_clip_vit_bigg14_f16.ckpt",
        file: "nostramix_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        upcast_attention: false,
        text_encoder: "nova_animal_xl_illustrious_v3.0_1634769_open_clip_vit_bigg14_f16.ckpt",
        name: "Nova_Animal_XL_Illustrious_v3.0_1634769",
        clip_encoder: "nova_animal_xl_illustrious_v3.0_1634769_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        file: "nova_animal_xl_illustrious_v3.0_1634769_f16.ckpt",
        prefix: ""
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        name: "Nova_Animal_XL_v4.0_1028888",
        default_scale: 16,
        prefix: "",
        text_encoder: "nova_animal_xl_v4.0_1028888_open_clip_vit_bigg14_f16.ckpt",
        file: "nova_animal_xl_v4.0_1028888_f16.ckpt",
        modifier: "none",
        clip_encoder: "nova_animal_xl_v4.0_1028888_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        text_encoder: "nova_furry_xl_illustrious_v6a_1625975_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        clip_encoder: "nova_furry_xl_illustrious_v6a_1625975_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        default_scale: 16,
        name: "Nova_Furry_XL_Illustrious_v6A_1625975",
        prefix: "",
        version: "sdxl_base_v0.9",
        file: "nova_furry_xl_illustrious_v6a_1625975_f16.ckpt"
      },
      {
        modifier: "none",
        clip_encoder: "nova_furry_xl_illustrious_v6b_1626156_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        name: "Nova_Furry_XL_Illustrious_v6B_1626156",
        prefix: "",
        version: "sdxl_base_v0.9",
        file: "nova_furry_xl_illustrious_v6b_1626156_f16.ckpt",
        text_encoder: "nova_furry_xl_illustrious_v6b_1626156_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false
      },
      {
        file: "nova_furry_xl_illustrious_v7a_1759909_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "nova_furry_xl_illustrious_v7a_1759909_open_clip_vit_bigg14_f16.ckpt",
        name: "Nova_Furry_XL_Illustrious_v7A_1759909",
        modifier: "none",
        version: "sdxl_base_v0.9",
        clip_encoder: "nova_furry_xl_illustrious_v7a_1759909_clip_vit_l14_f16.ckpt",
        default_scale: 16
      },
      {
        clip_encoder: "nova_furry_xl_illustrious_v7b_1760102_clip_vit_l14_f16.ckpt",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        modifier: "none",
        file: "nova_furry_xl_illustrious_v7b_1760102_f16.ckpt",
        name: "Nova_Furry_XL_Illustrious_v7B_1760102",
        default_scale: 16,
        version: "sdxl_base_v0.9",
        text_encoder: "nova_furry_xl_illustrious_v7b_1760102_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        modifier: "none",
        file: "nova_orange_xl_v7.0_1525944_f16.ckpt",
        clip_encoder: "nova_orange_xl_v7.0_1525944_clip_vit_l14_f16.ckpt",
        name: "Nova_Orange_XL_v7.0_1525944",
        default_scale: 16,
        prefix: "",
        upcast_attention: false,
        version: "sdxl_base_v0.9",
        text_encoder: "nova_orange_xl_v7.0_1525944_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        modifier: "none",
        version: "sdxl_base_v0.9",
        text_encoder: "nova_orange_xl_v9.0_1701002_open_clip_vit_bigg14_f16.ckpt",
        name: "Nova_Orange_XL_v9.0_1701002",
        clip_encoder: "nova_orange_xl_v9.0_1701002_clip_vit_l14_f16.ckpt",
        file: "nova_orange_xl_v9.0_1701002_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        default_scale: 16
      },
      {
        version: "sdxl_base_v0.9",
        default_scale: 16,
        name: "Nova-3DCG-XL",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        upcast_attention: false,
        file: "nova_3dcg_xl_f16.ckpt",
        text_encoder: "nova_3dcg_xl_open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        clip_encoder: "nova_3dcg_xl_clip_vit_l14_f16.ckpt"
      },
      {
        upcast_attention: false,
        clip_encoder: "nova_anime_xl_clip_vit_l14_f16.ckpt",
        text_encoder: "nova_anime_xl_open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        modifier: "none",
        version: "sdxl_base_v0.9",
        name: "Nova-Anime-XL",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        file: "nova_anime_xl_f16.ckpt"
      },
      {
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "nova_anime3d_xl_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        default_scale: 16,
        name: "Nova-Anime3D-XL",
        file: "nova_anime3d_xl_f16.ckpt",
        version: "sdxl_base_v0.9",
        modifier: "none",
        text_encoder: "nova_anime3d_xl_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        file: "nova_asian_xl_f16.ckpt",
        name: "Nova-Asian-XL",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        clip_encoder: "nova_asian_xl_clip_vit_l14_f16.ckpt",
        text_encoder: "nova_asian_xl_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: ""
      },
      {
        default_scale: 16,
        upcast_attention: false,
        file: "nova_cross_xl_f16.ckpt",
        version: "sdxl_base_v0.9",
        name: "Nova-Cross-XL",
        text_encoder: "nova_cross_xl_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        clip_encoder: "nova_cross_xl_clip_vit_l14_f16.ckpt",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        prefix: "",
        modifier: "none",
        default_scale: 16,
        file: "nova_flat_xl_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Nova-Flat-XL",
        text_encoder: "nova_flat_xl_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "nova_flat_xl_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        default_scale: 16,
        file: "nova_reality_xl_f16.ckpt",
        name: "Nova-Reality-XL",
        upcast_attention: false,
        prefix: "",
        version: "sdxl_base_v0.9",
        clip_encoder: "nova_reality_xl_clip_vit_l14_f16.ckpt",
        text_encoder: "nova_reality_xl_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        upcast_attention: false,
        prefix: "",
        modifier: "none",
        file: "nova_unreal_xl_f16.ckpt",
        name: "Nova-Unreal-XL",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        text_encoder: "nova_unreal_xl_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "nova_unreal_xl_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "ONE-FOR-ALL-Pony-Fantasy-DPOVAE",
        upcast_attention: false,
        prefix: "",
        version: "sdxl_base_v0.9",
        text_encoder: "one_for_all_pony_fantasy_dpovae_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16,
        modifier: "none",
        file: "one_for_all_pony_fantasy_dpovae_f16.ckpt",
        clip_encoder: "one_for_all_pony_fantasy_dpovae_clip_vit_l14_f16.ckpt"
      },
      {
        modifier: "none",
        file: "oops_all_toons_illustrious_v1.0_f16.ckpt",
        name: "Oops-All-Toons-Illustrious-v1.0",
        upcast_attention: false,
        text_encoder: "oops_all_toons_illustrious_v1.0_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        clip_encoder: "oops_all_toons_illustrious_v1.0_clip_vit_l14_f16.ckpt"
      },
      {
        prefix: "",
        name: "Oops-All-vpred-NoobAI-Western-2D-furry-toon",
        upcast_attention: false,
        text_encoder: "oops_all_vpred_noobai_western_2d_furry_toon_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "oops_all_vpred_noobai_western_2d_furry_toon_clip_vit_l14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        file: "oops_all_vpred_noobai_western_2d_furry_toon_f16.ckpt",
        modifier: "none",
        version: "sdxl_base_v0.9"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1308101_originbyn0utis_fluxfp8v1_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Origin_By_N0utis_flux_FP8V1",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        name: "Photonic-Fusion-SDXL",
        file: "photonic_fusion_sdxl_f16.ckpt",
        version: "sdxl_base_v0.9",
        prefix: "",
        text_encoder: "photonic_fusion_sdxl_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        upcast_attention: false,
        modifier: "none",
        clip_encoder: "photonic_fusion_sdxl_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "826571_pixelwave_flux1dev02_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Pixelwave_flux1Dev02",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "992642_pixelwave_flux1dev03_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Pixelwave_flux1Dev03",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1002647_pixelwave_flux1schnell03_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Pixelwave_flux1Schnell03",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "plant_milk_model_suite_flax_1331188_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        text_encoder: "plant_milk_model_suite_flax_1331188_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        clip_encoder: "plant_milk_model_suite_flax_1331188_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        default_scale: 16,
        name: "Plant_Milk_Model_Suite_Flax_1331188",
        version: "sdxl_base_v0.9"
      },
      {
        file: "plant_milk_model_suite_hemp_ii_1714314_f16.ckpt",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "plant_milk_model_suite_hemp_ii_1714314_open_clip_vit_bigg14_f16.ckpt",
        upcast_attention: false,
        name: "Plant_Milk_Model_Suite_Hemp_II_1714314",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        modifier: "none",
        clip_encoder: "plant_milk_model_suite_hemp_ii_1714314_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        clip_encoder: "pony_realism_v2.1_534642_clip_vit_l14_f16.ckpt",
        prefix: "",
        name: "Pony_Realism_v2.1_534642",
        file: "pony_realism_v2.1_534642_f16.ckpt",
        version: "sdxl_base_v0.9",
        upcast_attention: false,
        modifier: "none",
        default_scale: 16,
        text_encoder: "pony_realism_v2.1_534642_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Pony_Realism_v2.2_914390",
        prefix: "",
        default_scale: 16,
        file: "pony_realism_v2.2_914390_f16.ckpt",
        clip_encoder: "pony_realism_v2.2_914390_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        modifier: "none",
        text_encoder: "pony_realism_v2.2_914390_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        default_scale: 16,
        version: "sdxl_base_v0.9",
        file: "praeclarus_illustriousxl_f16.ckpt",
        text_encoder: "praeclarus_illustriousxl_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Praeclarus-IllustriousXL",
        modifier: "none",
        prefix: "",
        clip_encoder: "praeclarus_illustriousxl_clip_vit_l14_f16.ckpt",
        upcast_attention: false
      },
      {
        text_encoder: "prefect_illustrious_xl_v1.0_1379960_open_clip_vit_bigg14_f16.ckpt",
        file: "prefect_illustrious_xl_v1.0_1379960_f16.ckpt",
        clip_encoder: "prefect_illustrious_xl_v1.0_1379960_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        name: "Prefect_illustrious_XL_v1.0_1379960",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        prefix: "",
        modifier: "none",
        version: "sdxl_base_v0.9"
      },
      {
        modifier: "none",
        name: "Prefect_illustrious_XL_v1.5_1731647",
        text_encoder: "prefect_illustrious_xl_v1.5_1731647_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "prefect_illustrious_xl_v1.5_1731647_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        prefix: "",
        default_scale: 16,
        file: "prefect_illustrious_xl_v1.5_1731647_f16.ckpt",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        version: "sdxl_base_v0.9",
        name: "Prefect-Pony-XL",
        upcast_attention: false,
        text_encoder: "prefect_pony_xl_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        clip_encoder: "prefect_pony_xl_clip_vit_l14_f16.ckpt",
        file: "prefect_pony_xl_f16.ckpt",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "806846_projectgaiaflux1d_v10unet_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project_Gaia_Flux1D_v10UNET",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1451754_project0_real1smfp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project0_real1sm_FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1591370_project0_real1smv2fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project0_real1sm_V2FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1596255_project0_real1smv2fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project0_real1sm_V2FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1875661_project0_real1smv3fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project0_real1sm_V3FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1878051_project0_real1smv3fp8aio_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project0_real1sm_V3FP8AIO",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1181877_project0_v10fp8unetonly_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project0_v10FP8Unet_Only",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1249092_project0_v20fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project0_v20FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1249496_project0_v20fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project0_v20FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1320268_project0_v30artfp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Project0_v30Art_FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "793143_ratatoskranimalcreature_v29_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ratatoskr_Animal_Creature_v29",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "835047_ratatoskranimalcreature_v40fp8_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ratatoskr_Animal_Creature_v40FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "873136_ratatoskranimalcreature_v41_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ratatoskr_Animal_Creature_v41",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1024165_ratatoskranimalcreature_v594fp8dev1hybrid_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ratatoskr_Animal_Creature_v594FP8Dev1Hybrid",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1637227_ratatoskranimalcreature_v667fp16_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ratatoskr_Animal_Creature_v667FP16",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1637484_ratatoskranimalcreature_v667fp8_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ratatoskr_Animal_Creature_v667FP8",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "ratatoskr_animal__creature_and_furry__f16.ckpt",
        prefix: "",
        modifier: "none",
        upcast_attention: false,
        clip_encoder: "ratatoskr_animal__creature_and_furry__clip_vit_l14_f16.ckpt",
        name: "Ratatoskr-Animal_-Creature-and-Furry-",
        text_encoder: "ratatoskr_animal__creature_and_furry__open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1186008_rayflux_v10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Rayflux_v10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1785042_rayflux_v30aio_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Rayflux_v30AIO",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1703341_realdream_flux1v1_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Real_Dream_flux1V1",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        default_scale: 16,
        clip_encoder: "realcartoon_xl_clip_vit_l14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        file: "realcartoon_xl_f16.ckpt",
        name: "RealCartoon-XL",
        prefix: "",
        text_encoder: "realcartoon_xl_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        upcast_attention: false,
        version: "sdxl_base_v0.9"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "881836_realflux10b_10bcompactschnell_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Realflux10b_10b_Compact_Schnell",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "882554_realflux10b_10btransformer_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Realflux10b_10b_Transformer",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "915279_realflux10b_10btransformerdev_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Realflux10b_10b_Transformer_Dev",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        clip_encoder: "realism_by_stable_yogi_pony_v3_vae_992946_clip_vit_l14_f16.ckpt",
        name: "Realism_By_Stable_Yogi_Pony_V3_VAE_992946",
        upcast_attention: false,
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        file: "realism_by_stable_yogi_pony_v3_vae_992946_f16.ckpt",
        prefix: "",
        text_encoder: "realism_by_stable_yogi_pony_v3_vae_992946_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none"
      },
      {
        name: "Realism_By_Stable_Yogi_v4.0_FP16_1422871",
        prefix: "",
        modifier: "none",
        file: "realism_by_stable_yogi_v4.0_fp16_1422871_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9",
        clip_encoder: "realism_by_stable_yogi_v4.0_fp16_1422871_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        text_encoder: "realism_by_stable_yogi_v4.0_fp16_1422871_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16
      },
      {
        name: "Realism-SDXL-By-Stable-Yogi",
        text_encoder: "realism_sdxl_by_stable_yogi_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        file: "realism_sdxl_by_stable_yogi_f16.ckpt",
        default_scale: 16,
        clip_encoder: "realism_sdxl_by_stable_yogi_clip_vit_l14_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        clip_encoder: "realistic_blend_xl_clip_vit_l14_f16.ckpt",
        file: "realistic_blend_xl_f16.ckpt",
        upcast_attention: false,
        prefix: "",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Realistic-Blend-XL",
        modifier: "none",
        text_encoder: "realistic_blend_xl_open_clip_vit_bigg14_f16.ckpt",
        default_scale: 16
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1138590_redbluefantasy_fluxv10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Red_Blue_Fantasy_fluxv10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1445047_redcraftcadsupdatedjun1_f1fillnsfw_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "inpainting",
        name: "Redcraft_CADSUpdated_JUN1_f1Fill_NSFW",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1315432_redcraftcadsupdatedjun1_newreveal_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_new_REVEAL",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1093373_redcraftcadsupdatedjun1_rasch1forge_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_rasch1Forge",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1115605_redcraftcadsupdatedjun1_rasch2_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_rasch2",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1344905_redcraftcadsupdatedjun1_rasch3rushreveal_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_rasch3RUSHReveal",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1550408_redcraftcadsupdatedjun1_realreveal5_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_realreveal5",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1745151_redcraftcadsupdatedjun1_redediticedit11_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "inpainting",
        name: "Redcraft_CADSUpdated_JUN1_red_Edit_Icedit11",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1849802_redcraftcadsupdatedjun1_redomniflux1dreamo_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_red_OMNIFlux1Dreamo",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1087807_redcraftcadsupdatedjun1_revealnsfw_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_reveal_NSFW",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1171942_redcraftcadsupdatedjun1_revealultrav35_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_reveal_ULTRAV35",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1576605_redcraftcadsupdatedjun1_reveal5sfwultra_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_reveal5SFWULTRA",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1201074_redcraftcadsupdatedjun1_turborevealhotfix21_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Redcraft_CADSUpdated_JUN1_turbo_Reveal_Hotfix21",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        name: "RedCraft-CADS-UPdated-May4-Commercial-_-Advertising-Design-System",
        upcast_attention: false,
        clip_encoder: "redcraft___cads_updated_may4_commercial___advertising_design_system_clip_vit_l14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        text_encoder: "redcraft___cads_updated_may4_commercial___advertising_design_system_open_clip_vit_bigg14_f16.ckpt",
        file: "redcraft___cads_updated_may4_commercial___advertising_design_system_f16.ckpt",
        prefix: "",
        version: "sdxl_base_v0.9",
        default_scale: 16
      },
      {
        file: "richyrichmixixl_f16.ckpt",
        name: "richyrichMixIXL",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        text_encoder: "richyrichmixixl_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        clip_encoder: "richyrichmixixl_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        upcast_attention: false,
        version: "sdxl_base_v0.9"
      },
      {
        name: "Rillusm-Realistic-IL",
        modifier: "none",
        clip_encoder: "rillusm___realistic_il_clip_vit_l14_f16.ckpt",
        prefix: "",
        text_encoder: "rillusm___realistic_il_open_clip_vit_bigg14_f16.ckpt",
        upcast_attention: false,
        file: "rillusm___realistic_il_f16.ckpt",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "878315_sdvn11ghibliflux_fp8hyper_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Sdvn11Ghibli_Flux_fp8Hyper",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        prefix: "",
        default_scale: 16,
        file: "silvermoonmix_illustrious_evolved_f16.ckpt",
        text_encoder: "silvermoonmix_illustrious_evolved_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        clip_encoder: "silvermoonmix_illustrious_evolved_clip_vit_l14_f16.ckpt",
        upcast_attention: false,
        name: "SilvermoonMix-Illustrious-Evolved"
      },
      {
        text_encoder: "singlo_illustrious_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        clip_encoder: "singlo_illustrious_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        name: "SinGlo-illustrious",
        file: "singlo_illustrious_f16.ckpt",
        upcast_attention: false,
        default_scale: 16,
        modifier: "none"
      },
      {
        clip_encoder: "skibidimix_clip_vit_l14_f16.ckpt",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "SkibidiMix",
        file: "skibidimix_f16.ckpt",
        modifier: "none",
        default_scale: 16,
        version: "sdxl_base_v0.9",
        text_encoder: "skibidimix_open_clip_vit_bigg14_f16.ckpt",
        upcast_attention: false
      },
      {
        prefix: "",
        file: "smooth_mix_noobai_illustrious_pony_illustrious_v.2_1401686_f16.ckpt",
        name: "Smooth_Mix_NoobAI_Illustrious_Pony_Illustrious_v.2_1401686",
        upcast_attention: false,
        default_scale: 16,
        text_encoder: "smooth_mix_noobai_illustrious_pony_illustrious_v.2_1401686_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        clip_encoder: "smooth_mix_noobai_illustrious_pony_illustrious_v.2_1401686_clip_vit_l14_f16.ckpt"
      },
      {
        modifier: "none",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        default_scale: 16,
        upcast_attention: false,
        text_encoder: "smooth_mix_noobai_illustrious_pony_illustrious_v.3_1470541_open_clip_vit_bigg14_f16.ckpt",
        name: "Smooth_Mix_NoobAI_Illustrious_Pony_Illustrious_v.3_1470541",
        file: "smooth_mix_noobai_illustrious_pony_illustrious_v.3_1470541_f16.ckpt",
        clip_encoder: "smooth_mix_noobai_illustrious_pony_illustrious_v.3_1470541_clip_vit_l14_f16.ckpt"
      },
      {
        name: "Smooth_Mix_NoobAI_Illustrious_Pony_NoobAI_v2.0_1629718",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "smooth_mix_noobai_illustrious_pony_noobai_v2.0_1629718_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        file: "smooth_mix_noobai_illustrious_pony_noobai_v2.0_1629718_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        clip_encoder: "smooth_mix_noobai_illustrious_pony_noobai_v2.0_1629718_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        upcast_attention: false,
        name: "Smooth_Mix_NoobAI_Illustrious_Pony_Pony_v.3_997031",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        default_scale: 16,
        text_encoder: "smooth_mix_noobai_illustrious_pony_pony_v.3_997031_open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        file: "smooth_mix_noobai_illustrious_pony_pony_v.3_997031_f16.ckpt",
        clip_encoder: "smooth_mix_noobai_illustrious_pony_pony_v.3_997031_clip_vit_l14_f16.ckpt"
      },
      {
        name: "Smooth_Mix_NoobAI_Illustrious_Pony_Realism_1675843",
        prefix: "",
        modifier: "none",
        text_encoder: "smooth_mix_noobai_illustrious_pony_realism_1675843_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "smooth_mix_noobai_illustrious_pony_realism_1675843_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        file: "smooth_mix_noobai_illustrious_pony_realism_1675843_f16.ckpt",
        upcast_attention: false,
        default_scale: 16
      },
      {
        version: "sdxl_base_v0.9",
        prefix: "",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "snowpony_open_clip_vit_bigg14_f16.ckpt",
        name: "SnowPony",
        modifier: "none",
        file: "snowpony_f16.ckpt",
        clip_encoder: "snowpony_clip_vit_l14_f16.ckpt",
        default_scale: 16
      },
      {
        default_scale: 16,
        modifier: "none",
        file: "steinillustrious_f16.ckpt",
        text_encoder: "steinillustrious_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        clip_encoder: "steinillustrious_clip_vit_l14_f16.ckpt",
        name: "SteinIllustrious"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "869391_stoiqonewrealityfluxsd35_f1dalpha_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Stoiqo_Newreality_FLUXSD35_F1DAlpha",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "979329_stoiqonewrealityfluxsd35_f1dalphatwo_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Stoiqo_Newreality_FLUXSD35_f1DAlpha_Two",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "897489_stoiqoafroditefluxxl_f1dalpha_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "STOIQOAfrodite_FLUXXL_F1DAlpha",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "742904_thearamintaexperiment_flux1a1_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "The_Araminta_Experiment_flux1A1",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        file: "throwing_pasta_mix_spaghetti_f16.ckpt",
        clip_encoder: "throwing_pasta_mix_spaghetti_clip_vit_l14_f16.ckpt",
        modifier: "none",
        name: "Throwing-Pasta-MIX-Spaghetti",
        text_encoder: "throwing_pasta_mix_spaghetti_open_clip_vit_bigg14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        default_scale: 16,
        upcast_attention: false,
        version: "sdxl_base_v0.9"
      },
      {
        text_encoder: "toonify_toonify_illustrious_1495132_open_clip_vit_bigg14_f16.ckpt",
        prefix: "",
        name: "Toonify_Toonify_Illustrious_1495132",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        modifier: "none",
        clip_encoder: "toonify_toonify_illustrious_1495132_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "toonify_toonify_illustrious_1495132_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        modifier: "none",
        file: "toonify_toonify_ponydiffusionxl_410539_f16.ckpt",
        default_scale: 16,
        upcast_attention: false,
        clip_encoder: "toonify_toonify_ponydiffusionxl_410539_clip_vit_l14_f16.ckpt",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        version: "sdxl_base_v0.9",
        name: "Toonify_Toonify_PonyDiffusionXL_410539",
        text_encoder: "toonify_toonify_ponydiffusionxl_410539_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        default_scale: 8,
        upcast_attention: false,
        file: "tt_animerge_f16.ckpt",
        text_encoder: "tt_animerge_clip_vit_l14_f16.ckpt",
        name: "tt-animerge",
        version: "v1",
        modifier: "none",
        prefix: ""
      },
      {
        name: "Ultra-Realistic-By-Stable-Yogi-Pony",
        prefix: "",
        file: "ultra_realistic_by_stable_yogi_pony_f16.ckpt",
        upcast_attention: false,
        default_scale: 16,
        text_encoder: "ultra_realistic_by_stable_yogi_pony_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        version: "sdxl_base_v0.9",
        clip_encoder: "ultra_realistic_by_stable_yogi_pony_clip_vit_l14_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1454015_ultrarealfinetune_v1_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ultrareal_Fine_Tune_v1",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1095703_ultrarealfinetune_v10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ultrareal_Fine_Tune_v10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1164498_ultrarealfinetune_v20_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ultrareal_Fine_Tune_v20",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "1413133_ultrarealfinetune_v4_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Ultrareal_Fine_Tune_v4",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        upcast_attention: false,
        clip_encoder: "umbroxponyxl_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        modifier: "none",
        name: "UmbroxPonyXL",
        prefix: "",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16,
        file: "umbroxponyxl_f16.ckpt",
        text_encoder: "umbroxponyxl_open_clip_vit_bigg14_f16.ckpt"
      },
      {
        modifier: "none",
        clip_encoder: "uncanny_valley_clip_vit_l14_f16.ckpt",
        prefix: "",
        text_encoder: "uncanny_valley_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        name: "Uncanny-valley",
        default_scale: 16,
        upcast_attention: false,
        file: "uncanny_valley_f16.ckpt"
      },
      {
        modifier: "none",
        version: "sdxl_base_v0.9",
        default_scale: 16,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        file: "untitled_pony_f16.ckpt",
        text_encoder: "untitled_pony_open_clip_vit_bigg14_f16.ckpt",
        upcast_attention: false,
        name: "untitled-pony",
        clip_encoder: "untitled_pony_clip_vit_l14_f16.ckpt"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "988886_verusvision10b_10btransformer_q8p.ckpt",
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Verus_Vision10b_10b_Transformer",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        clip_encoder: "virtual_diffusion_pony_xl_2025_clip_vit_l14_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        text_encoder: "virtual_diffusion_pony_xl_2025_open_clip_vit_bigg14_f16.ckpt",
        version: "sdxl_base_v0.9",
        modifier: "none",
        name: "Virtual-Diffusion-Pony-XL-2025",
        file: "virtual_diffusion_pony_xl_2025_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        default_scale: 16
      },
      {
        name: "Vixon_s-Dream-Weave",
        upcast_attention: false,
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        text_encoder: "vixon_s_dream_weave_open_clip_vit_bigg14_f16.ckpt",
        clip_encoder: "vixon_s_dream_weave_clip_vit_l14_f16.ckpt",
        version: "sdxl_base_v0.9",
        file: "vixons_dream_weave_f16.ckpt",
        modifier: "none",
        default_scale: 16,
        prefix: ""
      },
      {
        modifier: "none",
        clip_encoder: "wai_shuffle_noob_clip_vit_l14_f16.ckpt",
        text_encoder: "wai_shuffle_noob_open_clip_vit_bigg14_f16.ckpt",
        name: "WAI-SHUFFLE-NOOB",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        default_scale: 16,
        file: "wai_shuffle_noob_f16.ckpt",
        prefix: "",
        version: "sdxl_base_v0.9"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "862533_whiteflux1_v10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Whiteflux1_v10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "791130_xehentaianimeflux_03_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Xe_Hentai_Anime_FLUX_03",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "807911_xehentaianimeflux_04_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Xe_Hentai_Anime_FLUX_04",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        autoencoder: "flux_1_vae_f16.ckpt",
        clip_encoder: "clip_vit_l14_f16.ckpt",
        default_scale: 16,
        file: "951641_xueronecyantencolor_fluxv10_q8p.ckpt",
        guidance_embed: true,
        high_precision_autoencoder: true,
        hires_fix_scale: 24,
        modifier: "none",
        name: "Xuer_One_Cyan_Ten_Color_flux_V10",
        noise_discretization: {
          rf: {
            _0: {
              condition_scale: 1e3,
              sigma_max: 1,
              sigma_min: 0
            }
          }
        },
        objective: {
          u: {
            condition_scale: 1e3
          }
        },
        prefix: "",
        text_encoder: "t5_xxl_encoder_q6p.ckpt",
        upcast_attention: false,
        version: "flux1"
      },
      {
        text_encoder: "zavychromaxl_open_clip_vit_bigg14_f16.ckpt",
        modifier: "none",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        upcast_attention: false,
        version: "sdxl_base_v0.9",
        prefix: "",
        clip_encoder: "zavychromaxl_clip_vit_l14_f16.ckpt",
        default_scale: 16,
        name: "ZavyChromaXL",
        file: "zavychromaxl_f16.ckpt"
      },
      {
        modifier: "none",
        default_scale: 16,
        clip_encoder: "zep9_clip_vit_l14_f16.ckpt",
        file: "zep9_f16.ckpt",
        autoencoder: "sdxl_vae_v1.0_f16.ckpt",
        prefix: "",
        upcast_attention: false,
        text_encoder: "zep9_open_clip_vit_bigg14_f16.ckpt",
        name: "ZEP9",
        version: "sdxl_base_v0.9"
      }
    ];
  }
});

// src-web/models/controlnets.json
var controlnets_exports = {};
__export(controlnets_exports, {
  default: () => controlnets_default
});
var controlnets_default;
var init_controlnets = __esm({
  "src-web/models/controlnets.json"() {
    controlnets_default = [
      {
        version: "flux1",
        file: "controlnet_alimama_inpaint_flux_1_dev_beta_q8p.ckpt",
        name: "Alimam Inpaint Beta (FLUX.1 [dev], ControlNet)",
        global_average_pooling: false,
        transformer_blocks: [
          6,
          0
        ],
        type: "controlnet",
        modifier: "inpaint"
      },
      {
        version: "flux1",
        file: "controlnet_alimama_inpaint_flux_1_dev_beta_q6p.ckpt",
        name: "Alimam Inpaint Beta (FLUX.1 [dev], ControlNet) (6-bit)",
        global_average_pooling: false,
        transformer_blocks: [
          6,
          0
        ],
        type: "controlnet",
        modifier: "inpaint"
      },
      {
        version: "sdxl_base_v0.9",
        file: "controlnet_canny_kwai_kolors_1.0_f16.ckpt",
        modifier: "canny",
        name: "Canny Edge Map (Kwai Kolors 1.0)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "controlnet"
      },
      {
        version: "sdxl_base_v0.9",
        file: "controlnet_canny_kwai_kolors_1.0_q6p_q8p.ckpt",
        modifier: "canny",
        name: "Canny Edge Map (Kwai Kolors 1.0) (8-bit)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "controlnet"
      },
      {
        name: "Canny Edge Map (SD v1.x, ControlNet 1.0)",
        file: "controlnet_canny_1.x_f16.ckpt",
        version: "v1",
        modifier: "canny",
        official: true
      },
      {
        name: "Canny Edge Map (SD v1.x, ControlNet 1.1)",
        file: "controlnet_canny_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "canny",
        official: true
      },
      {
        name: "Canny Edge Map (SD v1.x, T2I Adapter)",
        file: "t2iadapter_canny_1.x_f16.ckpt",
        version: "v1",
        modifier: "canny",
        official: true
      },
      {
        name: "Canny Edge Map (SD v2.x, ControlNet)",
        file: "controlnet_canny_2.x_f16.ckpt",
        version: "v2",
        modifier: "canny",
        official: true
      },
      {
        name: "Canny Edge Map (SDXL, ControlNet, Diffusers 1.0 Mid)",
        file: "controlnet_canny_sdxl_v1.0_mid_f16.ckpt",
        version: "sdxlBase",
        modifier: "canny",
        official: true
      },
      {
        name: "Color Palette (SD v1.x, T2I Adapter)",
        file: "t2iadapter_color_1.x_f16.ckpt",
        version: "v1",
        modifier: "color",
        official: true
      },
      {
        version: "sdxl_base_v0.9",
        file: "controlnet_depth_kwai_kolors_1.0_f16.ckpt",
        modifier: "depth",
        name: "Depth Map (Kwai Kolors 1.0)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "controlnet"
      },
      {
        version: "sdxl_base_v0.9",
        file: "controlnet_depth_kwai_kolors_1.0_q6p_q8p.ckpt",
        modifier: "depth",
        name: "Depth Map (Kwai Kolors 1.0) (8-bit)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "controlnet"
      },
      {
        name: "Depth Map (SD v1.x, ControlNet 1.0)",
        file: "controlnet_depth_1.x_f16.ckpt",
        version: "v1",
        modifier: "depth",
        official: true
      },
      {
        name: "Depth Map (SD v1.x, ControlNet 1.1)",
        file: "controlnet_depth_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "depth",
        official: true
      },
      {
        name: "Depth Map (SD v1.x, T2I Adapter)",
        file: "t2iadapter_depth_1.x_f16.ckpt",
        version: "v1",
        modifier: "depth",
        official: true
      },
      {
        name: "Depth Map (SD v2.x, ControlNet)",
        file: "controlnet_depth_2.x_f16.ckpt",
        version: "v2",
        modifier: "depth",
        official: true
      },
      {
        name: "Depth Map (SDXL, ControlNet, Diffusers 1.0 Mid)",
        file: "controlnet_depth_sdxl_v1.0_mid_f16.ckpt",
        version: "sdxlBase",
        modifier: "depth",
        official: true
      },
      {
        version: "flux1",
        file: "flex_1_redux_siglip2_512_f16.ckpt",
        modifier: "shuffle",
        name: "FLEX.1 Redux SigLIP2 512 (FLUX.1)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "redux",
        image_encoder: "siglip2_so400m_512_f16.ckpt",
        image_encoder_version: "siglip2_l27_512"
      },
      {
        version: "flux1",
        file: "flux_1_redux_f16.ckpt",
        modifier: "shuffle",
        name: "FLUX.1 Redux (FLUX.1)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "redux",
        image_encoder: "siglip_so400m_384_f16.ckpt",
        image_encoder_version: "siglip_l27_384"
      },
      {
        version: "v1",
        file: "ootd_garm_full_body_1.0_f16.ckpt",
        modifier: "shuffle",
        name: "Garment UNet (Full-Body, Outfitting Fusion)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "inject_kv",
        image_encoder: "clip_vit_l14_vision_model_f16.ckpt",
        autoencoder: "vae_ft_mse_840000_f16.ckpt"
      },
      {
        version: "v1",
        file: "ootd_garm_upper_body_1.0_f16.ckpt",
        modifier: "shuffle",
        name: "Garment UNet (Upper-Body, Outfitting Fusion)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "inject_kv",
        image_encoder: "clip_vit_l14_vision_model_f16.ckpt",
        autoencoder: "vae_ft_mse_840000_f16.ckpt"
      },
      {
        name: "Inpainting (SD v1.x, ControlNet 1.1)",
        file: "controlnet_inpaint_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "inpaint",
        official: true
      },
      {
        name: "Instruct Pix2Pix (SD v1.x, ControlNet 1.1)",
        file: "controlnet_ip2p_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "ip2p",
        official: true
      },
      {
        version: "sdxl_base_v0.9",
        file: "ip_adapter_faceid_plus_kwai_kolors_1.0_clip_l14_336_f16.ckpt",
        modifier: "shuffle",
        name: "IP Adapter FaceID Plus (Kwai Kolors 1.0)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "ipadapterfaceidplus",
        image_encoder: "clip_vit_l14_336_vision_model_f16.ckpt",
        image_encoder_version: "clip_l14_336",
        preprocessor: "arcface_f16.ckpt",
        ip_adapter_config: {
          input_dim: 4096,
          query_dim: 4096,
          output_dim: 4096,
          head_dim: 64,
          num_heads: 64,
          grid: 24
        }
      },
      {
        version: "sdxl_base_v0.9",
        file: "ip_adapter_faceid_plus_kwai_kolors_1.0_clip_l14_336_q8p.ckpt",
        modifier: "shuffle",
        name: "IP Adapter FaceID Plus (Kwai Kolors 1.0) (8-bit)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "ipadapterfaceidplus",
        image_encoder: "clip_vit_l14_336_vision_model_f16.ckpt",
        image_encoder_version: "clip_l14_336",
        preprocessor: "arcface_f16.ckpt",
        ip_adapter_config: {
          input_dim: 4096,
          query_dim: 4096,
          output_dim: 4096,
          head_dim: 64,
          num_heads: 64,
          grid: 24
        }
      },
      {
        name: "IP Adapter Full Face (SD v1.x)",
        file: "ip_adapter_full_face_sd_v1.x_open_clip_h14_f16.ckpt",
        version: "v1",
        modifier: "shuffle",
        official: true
      },
      {
        version: "sdxl_base_v0.9",
        file: "ip_adapter_plus_kwai_kolors_1.0_clip_l14_336_f16.ckpt",
        modifier: "shuffle",
        name: "IP Adapter Plus (Kwai Kolors 1.0)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "ipadapterplus",
        image_encoder: "clip_vit_l14_336_vision_model_f16.ckpt",
        image_encoder_version: "clip_l14_336",
        ip_adapter_config: {
          input_dim: 2048,
          query_dim: 2048,
          output_dim: 2048,
          head_dim: 64,
          num_heads: 12,
          grid: 24
        }
      },
      {
        name: "IP Adapter Plus (SD v1.x)",
        file: "ip_adapter_plus_sd_v1.x_open_clip_h14_f16.ckpt",
        version: "v1",
        modifier: "shuffle",
        official: true
      },
      {
        name: "IP Adapter Plus (SDXL Base)",
        file: "ip_adapter_plus_xl_base_open_clip_h14_f16.ckpt",
        version: "sdxlBase",
        modifier: "shuffle",
        official: true
      },
      {
        name: "IP Adapter Plus Face (SD v1.x)",
        file: "ip_adapter_plus_face_sd_v1.x_open_clip_h14_f16.ckpt",
        version: "v1",
        modifier: "shuffle",
        official: true
      },
      {
        name: "IP Adapter Plus Face (SDXL Base)",
        file: "ip_adapter_plus_face_xl_base_open_clip_h14_f16.ckpt",
        version: "sdxlBase",
        modifier: "shuffle",
        official: true
      },
      {
        version: "flux1",
        file: "controlnet_jasper_ai_upscaler_flux_1_dev_1.0_f16.ckpt",
        name: "Jasper AI Upscaler (FLUX.1 [dev], ControlNet)",
        global_average_pooling: false,
        transformer_blocks: [
          5,
          0
        ],
        type: "controlnet",
        modifier: "tile"
      },
      {
        name: "LineArt (SD v1.x, ControlNet 1.1)",
        file: "controlnet_lineart_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "lineart",
        official: true
      },
      {
        name: "LineArt Anime (SD v1.x, ControlNet 1.1)",
        file: "controlnet_lineart_anime_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "lineart",
        official: true
      },
      {
        version: "hunyuan_video",
        file: "llava_llama_3_8b_v1.1_multi_modal_projector_f16.ckpt",
        modifier: "shuffle",
        name: "LLaVA Image Prompt (Hunyuan Video)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "llava",
        image_encoder: "clip_vit_l14_336_vision_model_f16.ckpt",
        image_encoder_version: "clip_l14_336"
      },
      {
        name: "MLSD Hough Map (SD v1.x, ControlNet 1.1)",
        file: "controlnet_mlsd_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "mlsd",
        official: true
      },
      {
        name: "Normal Map (SD v1.x, ControlNet 1.1)",
        file: "controlnet_normalbae_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "normalbae",
        official: true
      },
      {
        version: "sdxl_base_v0.9",
        file: "controlnet_pose_kwai_kolors_1.0_f16.ckpt",
        modifier: "pose",
        name: "Pose (Kwai Kolors 1.0)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "controlnet"
      },
      {
        version: "sdxl_base_v0.9",
        file: "controlnet_pose_kwai_kolors_1.0_q6p_q8p.ckpt",
        modifier: "pose",
        name: "Pose (Kwai Kolors 1.0) (8-bit)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "controlnet"
      },
      {
        name: "Pose (SD v1.x, ControlNet 1.0)",
        file: "controlnet_openpose_1.x_f16.ckpt",
        version: "v1",
        modifier: "pose",
        official: true
      },
      {
        name: "Pose (SD v1.x, ControlNet 1.1)",
        file: "controlnet_openpose_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "pose",
        official: true
      },
      {
        name: "Pose (SD v1.x, T2I Adapter)",
        file: "t2iadapter_openpose_1.x_f16.ckpt",
        version: "v1",
        modifier: "pose",
        official: true
      },
      {
        name: "Pose (SD v2.x, ControlNet)",
        file: "controlnet_openpose_2.x_f16.ckpt",
        version: "v2",
        modifier: "pose",
        official: true
      },
      {
        version: "flux1",
        file: "pulid_0.9.1_eva02_clip_l14_336_f16.ckpt",
        modifier: "shuffle",
        name: "PuLID 0.9.1 (FLUX.1 [dev])",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "pulid",
        image_encoder: "eva02_clip_l14_336_f16.ckpt",
        image_encoder_version: "eva02_l14_336",
        preprocessor: "arcface_f16.ckpt",
        ip_adapter_config: {
          input_dim: 1024,
          query_dim: 1024,
          output_dim: 2048,
          head_dim: 64,
          num_heads: 16,
          grid: 24
        }
      },
      {
        name: "QR Code (SD v1.x, ControlNet Monster 2.0)",
        file: "controlnet_qr_code_monster_1.x_v2.0_f16.ckpt",
        version: "v1",
        modifier: "scribble",
        official: true
      },
      {
        name: "Scribble (SD v1.x, ControlNet 1.0)",
        file: "controlnet_scribble_1.x_f16.ckpt",
        version: "v1",
        modifier: "scribble",
        official: true
      },
      {
        name: "Scribble (SD v1.x, ControlNet 1.1)",
        file: "controlnet_scribble_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "scribble",
        official: true
      },
      {
        name: "Scribble (SD v1.x, T2I Adapter)",
        file: "t2iadapter_sketch_1.x_f16.ckpt",
        version: "v1",
        modifier: "scribble",
        official: true
      },
      {
        name: "Scribble (SD v2.x, ControlNet)",
        file: "controlnet_scribble_2.x_f16.ckpt",
        version: "v2",
        modifier: "scribble",
        official: true
      },
      {
        name: "Segmentation (SD v1.x, ControlNet 1.1)",
        file: "controlnet_seg_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "seg",
        official: true
      },
      {
        name: "Shuffle (SD v1.x, ControlNet 1.1)",
        file: "controlnet_shuffle_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "shuffle",
        official: true
      },
      {
        name: "Soft Edge (SD v1.x, ControlNet 1.1)",
        file: "controlnet_softedge_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "softedge",
        official: true
      },
      {
        name: "Tile (SD v1.x, ControlNet 1.1)",
        file: "controlnet_tile_1.x_v1.1_f16.ckpt",
        version: "v1",
        modifier: "tile",
        official: true
      },
      {
        version: "flux1",
        file: "controlnet_union_pro_flux_1_dev_1.0_q8p.ckpt",
        name: "Union Pro (FLUX.1 [dev], ControlNet)",
        global_average_pooling: false,
        transformer_blocks: [
          5,
          10
        ],
        type: "controlnetunion"
      },
      {
        version: "flux1",
        file: "controlnet_union_pro_flux_1_dev_1.0_q5p.ckpt",
        name: "Union Pro (FLUX.1 [dev], ControlNet) (5-bit)",
        global_average_pooling: false,
        transformer_blocks: [
          5,
          10
        ],
        type: "controlnetunion"
      },
      {
        version: "flux1",
        file: "controlnet_union_pro_flux_1_dev_2.0_q8p.ckpt",
        name: "Union Pro 2.0 (FLUX.1 [dev], ControlNet)",
        global_average_pooling: false,
        transformer_blocks: [
          6,
          0
        ],
        type: "controlnet"
      },
      {
        version: "flux1",
        file: "controlnet_union_pro_flux_1_dev_2.0_q5p.ckpt",
        name: "Union Pro 2.0 (FLUX.1 [dev], ControlNet) (5-bit)",
        global_average_pooling: false,
        transformer_blocks: [
          6,
          0
        ],
        type: "controlnet"
      },
      {
        name: "VACE (Wan 2.1, 1.3B)",
        file: "wan_v2.1_1.3b_vace_480p_f16.ckpt",
        version: "wan21_1_3b",
        modifier: "shuffle",
        official: true
      },
      {
        name: "VACE (Wan 2.1, 1.3B) (8-bit)",
        file: "wan_v2.1_1.3b_vace_480p_q8p.ckpt",
        version: "wan21_1_3b",
        modifier: "shuffle",
        official: true
      },
      {
        name: "VACE (Wan 2.1, 14B)",
        file: "wan_v2.1_14b_vace_720p_f16.ckpt",
        version: "wan21_14b",
        modifier: "shuffle",
        official: true
      },
      {
        name: "VACE (Wan 2.1, 14B) (8-bit)",
        file: "wan_v2.1_14b_vace_720p_q8p.ckpt",
        version: "wan21_14b",
        modifier: "shuffle",
        official: true
      },
      {
        version: "sdxl_base_v0.9",
        file: "controlnet_xinsir_union_promax_sdxl_1.0_f16.ckpt",
        name: "Xinsir Union ProMax (SDXL, ControlNet)",
        global_average_pooling: false,
        transformer_blocks: [],
        type: "controlnetunion"
      }
    ];
  }
});

// src-web/models/loras.json
var loras_exports = {};
__export(loras_exports, {
  default: () => loras_default
});
var loras_default;
var init_loras = __esm({
  "src-web/models/loras.json"() {
    loras_default = [
      {
        name: "360 Degree [dev]",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "360_degree__dev__lora_f16.ckpt"
      },
      {
        name: "ACE++: Local Editing",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "ace____local_editing_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        },
        note: "[ACE++](https://huggingface.co/ali-vilab/ACE_Plus) is an effective transfer method that fine-tunes FLUX.1 Fill [dev] model. This LoRA enables sketch-to-image for the masked area."
      },
      {
        name: "ACE++: Portrait",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "ace____portrait_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        },
        note: "[ACE++](https://huggingface.co/ali-vilab/ACE_Plus) is an effective transfer method that fine-tunes FLUX.1 Fill [dev] model. The reference image is placed on the left, while the right side is either the image to edit or left blank. The model uses the left-side reference image during generation. This LoRA enables the transfer of a person's identity to a new image."
      },
      {
        name: "ACE++: Subject",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "ace____subject_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        },
        note: "[ACE++](https://huggingface.co/ali-vilab/ACE_Plus) is an effective transfer method that fine-tunes FLUX.1 Fill [dev] model. The reference image is placed on the left, while the right side is either the image to edit or left blank. The model uses the left-side reference image during generation. This LoRA enables the transfer of a subject (such as a logo) to a new image."
      },
      {
        name: "Adam's Artwork Style v.1",
        file: "adams_artwork_style_v0.1_lora_f16.ckpt",
        prefix: "ajaws ",
        version: "v1"
      },
      {
        version: "v1",
        name: "Add More Details (Detail Enhancer / Tweaker)",
        prefix: "",
        is_lo_ha: false,
        file: "add_more_details__detail_enhancer___tweaker__lora_f16.ckpt"
      },
      {
        name: "Age Slider",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        file: "age_slider_lora_f16.ckpt"
      },
      {
        name: "Amateur Photography v3.5 [dev]",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "amateur_photography_v3.5__dev__lora_f16.ckpt"
      },
      {
        name: "Analog Diffusion v1.0",
        file: "analog_diffusion_v1_lora_f16.ckpt",
        prefix: "analog ",
        version: "v1"
      },
      {
        name: "Anime LineArt Style v2.0",
        file: "anime_lineart_style_v2.0_lora_f16.ckpt",
        prefix: "",
        version: "v1"
      },
      {
        name: "AntiBlur v1.0 [dev]",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "antiblur_v1.0__dev__lora_f16.ckpt"
      },
      {
        version: "v1",
        file: "arcane_style_lora_f16.ckpt",
        prefix: "arcane style ",
        name: "Arcane Style"
      },
      {
        name: "Boring Reality v2 [dev]",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "boring_reality_v2_lora_f16.ckpt"
      },
      {
        name: "CCXL-Mucha Art Style",
        file: "ccxl_mucha_art_style_lora_f16.ckpt",
        prefix: "ccxl-mucha ",
        is_lo_ha: false,
        version: "sdxl_base_v0.9"
      },
      {
        version: "v1",
        file: "crazy_expressions_lora_f16.ckpt",
        prefix: "crazy face ",
        name: "Crazy Expressions"
      },
      {
        name: "Cyberpunk 2077 Nightcity v1.15",
        file: "cyberpunk_2007_concept_art_nightcity_v1.15_lora_f16.ckpt",
        prefix: "",
        version: "v1"
      },
      {
        name: "DMD2 SDXL 4-Step",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        file: "dmd2_sdxl_4_step_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Epi Noise Offset v2",
        file: "epi_noiseoffset_v2_lora_f16.ckpt",
        prefix: "",
        version: "v1"
      },
      {
        name: "Fix Hands Slider",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        file: "fix_hands_slider_lora_f16.ckpt"
      },
      {
        name: "FLUX.1 [dev] to [schnell] 4-Step",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "flux.1__dev__to__schnell__4_step_lora_f16.ckpt"
      },
      {
        name: "FLUX.1 Canny [dev]",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "flux_1_canny_dev_lora_f16.ckpt",
        modifier: "canny",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "FLUX.1 Depth [dev]",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "flux_1_depth_dev_lora_f16.ckpt",
        modifier: "depth",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "FLUX.1 Turbo Alpha",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "flux.1_turbo_alpha_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Fooocus Inpaint v2.6",
        file: "fooocus_inpaint_v2.6_lora_f16.ckpt",
        version: "sdxlBase",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Fooocus Inpaint v2.6 (8-bit)",
        file: "fooocus_inpaint_v2.6_lora_q8p.ckpt",
        version: "sdxlBase",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Foreground to Blending",
        file: "layer_xl_fg2ble_v1.0_lora_f16.ckpt",
        version: "sdxlBase",
        modifier: "inpainting",
        official: true
      },
      {
        name: "Ghibli Cartoon Art",
        prefix: "Ghibli Art",
        is_lo_ha: false,
        version: "flux1",
        file: "ghibli_cartoon_art_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        version: "v1",
        file: "haute_couture_or_gowns_v1.0_lora_f16.ckpt",
        prefix: "hc_gown ",
        name: "Haute Couture or Gowns v1.0"
      },
      {
        name: "HiDream E1",
        prefix: "",
        is_lo_ha: false,
        version: "hidream_i1",
        modifier: "editing",
        file: "hidream_e1_full_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        version: "v1",
        file: "hipoly_3d_model_lora_f16.ckpt",
        prefix: "hiqcgbody ",
        name: "Hipoly 3D Model"
      },
      {
        name: "Hyper FLUX.1 [dev] 16-Step",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "hyper_flux.1__dev__16_step_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Hyper FLUX.1 [dev] 8-Step",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "hyper_flux.1__dev__8_step_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Hyper SD v1.x 4-Step",
        prefix: "",
        is_lo_ha: false,
        version: "v1",
        is_consistency_model: true,
        file: "hyper_sd_v1.x_4_step_lora_f16.ckpt"
      },
      {
        name: "Hyper SD v1.x 8-Step",
        prefix: "",
        is_lo_ha: false,
        version: "v1",
        is_consistency_model: true,
        file: "hyper_sd_v1.x_8_step_lora_f16.ckpt"
      },
      {
        name: "Hyper SD3 16-Step CFG",
        prefix: "",
        is_lo_ha: false,
        version: "sd3",
        file: "hyper_sd3_16_step_cfg_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Hyper SD3 4-Step CFG",
        prefix: "",
        is_lo_ha: false,
        version: "sd3",
        file: "hyper_sd3_4_step_cfg_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Hyper SD3 8-Step CFG",
        prefix: "",
        is_lo_ha: false,
        version: "sd3",
        file: "hyper_sd3_8_step_cfg_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Hyper SDXL 4-Step",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        is_consistency_model: true,
        file: "hyper_sdxl_4_step_lora_f16.ckpt"
      },
      {
        name: "Hyper SDXL 8-Step",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        is_consistency_model: true,
        file: "hyper_sdxl_8_step_lora_f16.ckpt"
      },
      {
        name: "ICEdit Normal",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "icedit_normal_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        },
        note: "[ICEdit](https://huggingface.co/RiverZ/normal-lora) is an efficient and effective method for instruction-based image editing. With only 1% trainable parameters (200M) and 0.1% training data (50k) compared to previous methods, ICEdit demonstrates strong generalization capabilities and is capable of handling diverse editing tasks. The model uses the left-side reference image during generation."
      },
      {
        name: "In-Context: Couple Profile",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "in_context__couple_profile_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "In-Context: Film Storyboard",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "in_context__film_storyboard_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "In-Context: Font Design",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "in_context__font_design_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "In-Context: Home Decoration",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "in_context__home_decoration_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "In-Context: Portrait Illustration",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "in_context__portrait_illustration_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "In-Context: Portrait Photography",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "in_context__portrait_photography_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "In-Context: PPT Templates",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "in_context__ppt_templates_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "In-Context: Visual Identity Design",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "in_context__visual_identity_design_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "LCM SDXL Base (1.0)",
        file: "lcm_sd_xl_base_1.0_lora_f16.ckpt",
        version: "sdxlBase",
        official: true
      },
      {
        name: "LCM SDXL Refiner (1.0)",
        file: "lcm_sd_xl_refiner_1.0_lora_f16.ckpt",
        version: "sdxlRefiner",
        official: true
      },
      {
        version: "ssd_1b",
        file: "lcm_ssd_1b_lora_f16.ckpt",
        prefix: "",
        name: "LCM SSD 1B (Segmind)"
      },
      {
        name: "LCM Stable Diffusion v1.5",
        file: "lcm_sd_v1.5_lora_f16.ckpt",
        version: "v1",
        official: true
      },
      {
        name: "Long Hair Slider",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        file: "long_hair_slider_lora_f16.ckpt"
      },
      {
        name: "Mascular Slider",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        file: "mascular_slider_lora_f16.ckpt"
      },
      {
        version: "v1",
        name: "Moxin Shukezouma v1.1",
        prefix: "shukezouma ",
        file: "moxin_shukezouma_v1.1_lora_f16.ckpt"
      },
      {
        version: "v1",
        file: "moxin_v1.0_lora_f16.ckpt",
        name: "Moxin v1.0",
        prefix: "shuimobysim "
      },
      {
        name: "Object Removal for FLUX.1 Fill v2",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "object_removal_for_flux.1_fill_v2_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        },
        note: "This is an Object Removal LoRA fine-tuned from Flux Fill Dev model by [lrzjason](https://huggingface.co/lrzjason). The lora is designed to remove objects from specified masked areas, making it useful for image editing tasks where unwanted objects need to be erased seamlessly."
      },
      {
        name: "Openjourney v1.0",
        file: "openjourney_v1_lora_f16.ckpt",
        prefix: "mdjrny-v4 ",
        version: "v1"
      },
      {
        name: "Papercut SDXL",
        prefix: "papercut ",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        file: "papercut_sdxl_lora_f16.ckpt"
      },
      {
        name: "PCM SD3 4-Step",
        prefix: "",
        is_lo_ha: false,
        version: "sd3",
        file: "pcm_sd3_4_step_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Pixel Art XL v1.1",
        prefix: "",
        is_lo_ha: false,
        file: "pixel_art_xl_v1.1_lora_f16.ckpt",
        version: "sdxl_base_v0.9"
      },
      {
        name: "Qwen Image 1.0 Lightning 4-Step v1.0",
        prefix: "",
        is_lo_ha: false,
        version: "qwen_image",
        file: "qwen_image_1.0_lightning_4_step_v1.0_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Qwen Image 1.0 Lightning 4-Step v2.0",
        prefix: "",
        is_lo_ha: false,
        version: "qwen_image",
        file: "qwen_image_1.0_lightning_4_step_v2.0_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Qwen Image 1.0 Lightning 8-Step v1.1",
        prefix: "",
        is_lo_ha: false,
        version: "qwen_image",
        file: "qwen_image_1.0_lightning_8_step_v1.1_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Qwen Image 1.0 Lightning 8-Step v2.0",
        prefix: "",
        is_lo_ha: false,
        version: "qwen_image",
        file: "qwen_image_1.0_lightning_8_step_v2.0_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Qwen Image Edit 1.0 Lightning 4-Step v1.0",
        prefix: "",
        is_lo_ha: false,
        version: "qwen_image",
        file: "qwen_image_edit_1.0_lightning_4_step_v1.0_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Qwen Image Edit 1.0 Lightning 8-Step v1.0",
        prefix: "",
        is_lo_ha: false,
        version: "qwen_image",
        file: "qwen_image_edit_1.0_lightning_8_step_v1.0_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Qwen Image Edit 2509 Lightning 4-Step v1.0",
        prefix: "",
        is_lo_ha: false,
        version: "qwen_image",
        file: "qwen_image_edit_2509_lightning_4_step_v1.0_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Qwen Image Edit 2509 Lightning 8-Step v1.0",
        prefix: "",
        is_lo_ha: false,
        version: "qwen_image",
        file: "qwen_image_edit_2509_lightning_8_step_v1.0_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "SD3 Medium 3.5 Turbo 4-Step",
        prefix: "",
        is_lo_ha: false,
        version: "sd3",
        file: "sd3_medium_3.5_turbo_4_step_lora_f16.ckpt"
      },
      {
        name: "SD3 Medium 3.5 Turbo 8-Step",
        prefix: "",
        is_lo_ha: false,
        version: "sd3",
        file: "sd3_medium_3.5_turbo_8_step_lora_f16.ckpt"
      },
      {
        name: "SDXL Lightning 4-Step",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        is_consistency_model: true,
        file: "sdxl_lightning_4_step_lora_f16.ckpt"
      },
      {
        name: "SDXL Lightning 8-Step",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        is_consistency_model: true,
        file: "sdxl_lightning_8_step_lora_f16.ckpt"
      },
      {
        name: "SDXL Offset (1.0)",
        file: "sdxl_offset_v1.0_lora_f16.ckpt",
        version: "sdxlBase",
        official: true
      },
      {
        version: "v1",
        name: "SDXL Render v2.0",
        prefix: "",
        is_lo_ha: false,
        file: "sdxl_render_v2.0_lora_f16.ckpt"
      },
      {
        name: "Smiling Slider",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        file: "smiling_slider_lora_f16.ckpt"
      },
      {
        name: "Surprised Look Slider",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        file: "surprised_look_slider_lora_f16.ckpt"
      },
      {
        name: "TCD SDXL Base (1.0)",
        file: "tcd_sd_xl_base_1.0_lora_f16.ckpt",
        version: "sdxlBase",
        official: true
      },
      {
        name: "TCD Stable Diffusion v1.5",
        file: "tcd_sd_v1.5_lora_f16.ckpt",
        version: "v1",
        official: true
      },
      {
        version: "v1",
        file: "theovercomer8s_contrast_fix_lora_f16.ckpt",
        prefix: "to8contrast style ",
        name: "Theovercomer8's Contrast Fix"
      },
      {
        version: "v2",
        file: "theovercomer8s_contrast_fix_sd_v2.x_lora_f16.ckpt",
        prefix: "to8contrast style ",
        name: "Theovercomer8's Contrast Fix"
      },
      {
        version: "v1",
        file: "to8s_high_key_lora_f16.ckpt",
        prefix: "to8highkey ",
        name: "TO8's High Key"
      },
      {
        version: "v2",
        file: "to8s_high_key_sd_v2.x_lora_f16.ckpt",
        prefix: "to8highkey ",
        name: "TO8's High Key"
      },
      {
        name: "Transparent Image",
        file: "layer_flux_1_transparent_lora_f16.ckpt",
        version: "flux1",
        official: true
      },
      {
        name: "Transparent Image (Attention Injection)",
        file: "layer_xl_transparent_attn_v1.0_lora_f16.ckpt",
        version: "sdxlBase",
        official: true
      },
      {
        name: "Transparent Image FLUX.1 [dev]",
        prefix: "",
        is_lo_ha: false,
        version: "flux1",
        file: "layer_flux_1_transparent_lora_f16.ckpt",
        alternative_decoder: "flux_1_transparent_vae_decoder_f16.ckpt",
        alternative_decoder_version: "transparent",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.1 1.3B CausVid T2V",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_1.3b",
        file: "wan_2.1_1.3b_causvid_t2v_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.1 1.3B CFG Distill",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_1.3b",
        is_consistency_model: true,
        file: "wan_2.1_1.3b_cfg_distill_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.1 14B 480p Self-Forcing I2V",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_14b",
        file: "wan_2.1_14b_480p_self_forcing_i2v_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.1 14B CausVid T2V",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_14b",
        file: "wan_2.1_14b_causvid_t2v_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.1 14B Self-Forcing T2V",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_14b",
        file: "wan_2.1_14b_self_forcing_t2v_v2_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.2 A14B Lightning High Noise Expert I2V v1.0",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_14b",
        file: "wan_v2.2_a14b_hne_i2v_lightning_v1.0_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.2 A14B Lightning High Noise Expert T2V v1.1",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_14b",
        file: "wan_v2.2_a14b_hne_t2v_lightning_v1.1_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.2 A14B Lightning Low Noise Expert I2V v1.0",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_14b",
        file: "wan_v2.2_a14b_lne_i2v_lightning_v1.0_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.2 A14B Lightning Low Noise Expert T2V 250928",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_14b",
        file: "wan_v2.2_a14b_lne_t2v_lightning_250928_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Wan 2.2 A14B Lightning Low Noise Expert T2V v1.1",
        prefix: "",
        is_lo_ha: false,
        version: "wan_v2.1_14b",
        file: "wan_v2.2_a14b_lne_t2v_lightning_v1.1_lora_f16.ckpt",
        weight: {
          value: 1,
          lower_bound: -1.5,
          upper_bound: 2.5
        }
      },
      {
        name: "Weight Slider",
        prefix: "",
        is_lo_ha: false,
        version: "sdxl_base_v0.9",
        file: "weight_slider_lora_f16.ckpt"
      }
    ];
  }
});

// src-web/models/embeddings.json
var embeddings_exports = {};
__export(embeddings_exports, {
  default: () => embeddings_default
});
var embeddings_default;
var init_embeddings = __esm({
  "src-web/models/embeddings.json"() {
    embeddings_default = [
      {
        keyword: "actionhelper",
        version: "v2",
        name: "Action Helper",
        file: "actionhelper_ti_f16.ckpt",
        length: 6
      },
      {
        file: "animescreencap_ti_f16.ckpt",
        name: "Anime ScreenCap",
        length: 6,
        keyword: "animescreencap",
        version: "v2"
      },
      {
        file: "bad_prompt_v2_ti_f16.ckpt",
        keyword: "bad_prompt",
        version: "v1",
        name: "Bad Prompt (v2)",
        length: 8
      },
      {
        version: "v1",
        length: 1,
        keyword: "birb_style",
        file: "birb_style_ti_f16.ckpt",
        name: "Birb Style"
      },
      {
        version: "v2",
        length: 4,
        keyword: "carhelper",
        file: "carhelper_ti_f16.ckpt",
        name: "Car Helper"
      },
      {
        keyword: "charturnerv2",
        version: "v1",
        name: "Character Turner v2",
        file: "charturner_v2_ti_f16.ckpt",
        length: 15
      },
      {
        version: "v2",
        name: "Cinema Helper",
        file: "cinemahelper_ti_f16.ckpt",
        keyword: "cinemahelper",
        length: 10
      },
      {
        version: "v2",
        name: "Classipeint",
        file: "classipeint_ti_f16.ckpt",
        keyword: "classipeint",
        length: 15
      },
      {
        version: "v1",
        length: 4,
        keyword: "cloudport",
        file: "cloudport_v1.0_ti_f16.ckpt",
        name: "Cloudport v1.0"
      },
      {
        file: "drd_point_e_768_v_ti_f16.ckpt",
        keyword: "drd_pnte768",
        name: `Doctor Diffusion's "Point E" Negative Embedding`,
        length: 8,
        version: "v2"
      },
      {
        version: "v2",
        name: "Double Exposure",
        file: "double_exposure_ti_f16.ckpt",
        keyword: "double_exposure",
        length: 8
      },
      {
        keyword: "easynegative",
        version: "v1",
        name: "EasyNegative",
        length: 8,
        file: "easynegative_ti_f16.ckpt"
      },
      {
        keyword: "fastnegativev2",
        version: "v1",
        name: "Fast Negative",
        file: "fast_negative_ti_f16.ckpt",
        length: 67
      },
      {
        version: "v2",
        file: "knollingcase_v4_kc16_5000_ti_f16.ckpt",
        keyword: "kc16_5000",
        length: 16,
        name: "Knollingcase (v4)"
      },
      {
        name: "Laxpeint (v2)",
        file: "laxpeint_v2_ti_f16.ckpt",
        keyword: "laxpeintv2",
        length: 9,
        version: "v2"
      },
      {
        keyword: "negativexl_d",
        name: "NegativeXL",
        version: "sdxl_base_v0.9",
        file: "negativexl_ti_f16.ckpt",
        length: 16
      },
      {
        file: "parchart_ti_f16.ckpt",
        keyword: "parchart",
        version: "v2",
        length: 10,
        name: "ParchArt"
      },
      {
        file: "photohelper_ti_f16.ckpt",
        keyword: "photohelper",
        version: "v2",
        length: 8,
        name: "Photo Helper"
      },
      {
        file: "pure_eros_ti_f16.ckpt",
        keyword: "pure_eros",
        version: "v1",
        length: 1,
        name: "Pure Eros Face"
      },
      {
        name: "SD2 Papercut",
        keyword: "sd2_papercut",
        file: "sd2_papercut_ti_f16.ckpt",
        length: 8,
        version: "v2"
      },
      {
        keyword: "unaestheticxl_alb2",
        name: "UnaestheticXL Alb2",
        version: "sdxl_base_v0.9",
        file: "unaestheticxl_alb2_ti_f16.ckpt",
        length: 12
      },
      {
        name: "V2 Dreamink",
        keyword: "v2_dreamink",
        file: "v2_dreamink_ti_f16.ckpt",
        length: 4,
        version: "v2"
      },
      {
        name: "Vintage Helper",
        keyword: "vintagehelper",
        file: "vintagehelper_ti_f16.ckpt",
        length: 8,
        version: "v2"
      }
    ];
  }
});

// src-web/models/upscalers.json
var upscalers_exports = {};
__export(upscalers_exports, {
  default: () => upscalers_default
});
var upscalers_default;
var init_upscalers = __esm({
  "src-web/models/upscalers.json"() {
    upscalers_default = [
      {
        name: "Real-ESRGAN X2+",
        scale_factor: 2,
        file: "realesrgan_x2plus_f16.ckpt",
        blocks: 23,
        official: true
      },
      {
        name: "Real-ESRGAN X4+",
        scale_factor: 4,
        file: "realesrgan_x4plus_f16.ckpt",
        blocks: 23,
        official: true
      },
      {
        name: "Real-ESRGAN X4+ Anime",
        scale_factor: 4,
        file: "realesrgan_x4plus_anime_6b_f16.ckpt",
        blocks: 6,
        official: true
      },
      {
        name: "UniversalUpscaler V2 Sharp",
        scale_factor: 4,
        file: "esrgan_4x_universal_upscaler_v2_sharp_f16.ckpt",
        blocks: 23,
        official: true
      },
      {
        name: "Remacri",
        scale_factor: 4,
        file: "remacri_4x_f16.ckpt",
        blocks: 23,
        official: true
      },
      {
        name: "4x UltraSharp",
        scale_factor: 4,
        file: "4x_ultrasharp_f16.ckpt",
        blocks: 23,
        official: true
      }
    ];
  }
});

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
  const dtModelNodes = app2.rootGraph.nodes.filter((n) => n.isDtServerNode !== void 0);
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
var combinedIncludes = [null, null];
var combinedBridgeModels = null;
async function getBridgeModels() {
  const includeCommunity = app2.extensionManager.setting.get("drawthings.bridge_mode.community");
  const includeUncurated = app2.extensionManager.setting.get("drawthings.bridge_mode.uncurated");
  if (combinedBridgeModels && combinedIncludes[0] === includeCommunity && combinedIncludes[1] === includeUncurated) return combinedBridgeModels;
  const api = window.comfyAPI.api.api;
  const filesResponse = await api.fetchApi("/dt_grpc/bridge_models");
  const files = await filesResponse.json();
  const filterFn = includeCommunity ? ((m) => files.includes(m.file)) : ((m) => files.includes(m.file) && m.official);
  const { default: models } = await Promise.resolve().then(() => (init_models(), models_exports));
  if (includeUncurated) {
    const { default: uncurated } = await Promise.resolve().then(() => (init_uncurated_models(), uncurated_models_exports));
    models.push(...uncurated);
  }
  const { default: controlNets } = await Promise.resolve().then(() => (init_controlnets(), controlnets_exports));
  const { default: loras } = await Promise.resolve().then(() => (init_loras(), loras_exports));
  const { default: textualInversions } = await Promise.resolve().then(() => (init_embeddings(), embeddings_exports));
  const { default: upscalers } = await Promise.resolve().then(() => (init_upscalers(), upscalers_exports));
  combinedBridgeModels = {
    models: models.filter(filterFn),
    controlNets: controlNets.filter(filterFn),
    loras: loras.filter(filterFn),
    textualInversions: textualInversions.filter(filterFn),
    upscalers: upscalers.filter(filterFn)
  };
  combinedIncludes = [includeCommunity, includeUncurated];
  return combinedBridgeModels;
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
  if (app2.extensionManager.setting.get("drawthings.bridge_mode.enabled")) return getBridgeModels();
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
  },
  {
    veresion: "1.8.0",
    title: "DrawThings-gRPC 1.8.0",
    detail: `- Bridge Mode support: For DT+ subscribers interested in using Bridge Mode, you can now list all official, community, and uncurated models available in Cloud Compute. Right click the sampler node, or go to the Draw Things tab in Settings, to enable. Make sure to enable Bridge Mode in the API settings of your Draw Things app (only available for DT+ subscribers). (User uploaded loras are currently unsupported.)
- Note: We have no way of knowing if bridge mode is enabled from ComfyUI. Enabling bridge mode in Comfy simply changes the list of models that are shown - it's up to your DT app or CLI how to handle the request.
- Draw Things config import has been improved. Configs that use additional nodes (LoRA, ControlNet, Upscaler, or Refiner) will apply their values to existing, connected nodes. If the node isn't available, a message will be displayed listing the missing nodes.`
  }
];

// src-web/ComfyUI-DrawThings-gRPC.ts
var nodePackVersion = "1.8.0";
var previewMethod = void 0;
var ComfyUI_DrawThings_gRPC_default = {
  name: "core",
  getCustomWidgets() {
    return {
      DT_MODEL: DtModelTypeHandler,
      DT_BUTTONS: DtButtonsTypeHandler
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
      if (app8.rootGraph?.nodes.some((n) => n.type === "DrawThingsSampler")) {
        await app8.api.fetchApi(`/dt_grpc/interrupt`, {
          method: "POST"
        });
      }
    });
  }
};
var samplerProto = {
  async onNodeCreated() {
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
  onMouseDown(_e, _pos, _canvas) {
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
    const bridgeMode = app.extensionManager.setting.get(
      "drawthings.bridge_mode.enabled"
    );
    const bridgeCommunity = app.extensionManager.setting.get(
      "drawthings.bridge_mode.community"
    );
    const bridgeUncurated = app.extensionManager.setting.get(
      "drawthings.bridge_mode.uncurated"
    );
    options.push(null);
    options.push({
      content: "Paste Draw Things config",
      callback: () => importConfig(this)
    });
    options.push({
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
    });
    options.push({
      content: (keepNodeShrunk ? "\u2713 " : "") + "Keep node shrunk when widgets change",
      callback: () => {
        app.extensionManager.setting.set(
          "drawthings.node.keep_shrunk",
          !keepNodeShrunk
        );
      }
    });
    options.push({
      content: (bridgeMode ? "\u2713 " : "") + "Use bridge mode",
      callback: () => {
        app.extensionManager.setting.set(
          "drawthings.bridge_mode.enabled",
          !bridgeMode
        );
      }
    });
    if (bridgeMode) {
      options.push({
        content: (bridgeCommunity ? "\u2713 " : "") + "Show community models",
        callback: () => {
          app.extensionManager.setting.set(
            "drawthings.bridge_mode.community",
            !bridgeCommunity
          );
        }
      });
      options.push({
        content: (bridgeUncurated ? "\u2713 " : "") + "Show uncurated models",
        callback: () => {
          app.extensionManager.setting.set(
            "drawthings.bridge_mode.uncurated",
            !bridgeUncurated
          );
        }
      });
    }
    options.push(null);
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
  },
  settings: [
    {
      id: "drawthings.bridge_mode.enabled",
      type: "boolean",
      name: "Enable bridge mode",
      default: true,
      category: ["DrawThings", "Bridge mode", "Bridge mode"],
      sortOrder: 2,
      tooltip: "With bridge mode enabled, your local models will be hidden and the official models available to DT+ will be listed. Be sure to enable Bridge Mode in your Draw Things API settings (DT+ only)",
      onChange: (value) => {
        modelService.updateNodes();
      }
    },
    {
      id: "drawthings.bridge_mode.community",
      type: "boolean",
      name: "Show community models",
      default: true,
      category: ["DrawThings", "Bridge mode", "Community"],
      sortOrder: 1,
      tooltip: "When bridge mode is enabled, also list community models",
      onChange: (value) => {
        modelService.updateNodes();
      }
    },
    {
      id: "drawthings.bridge_mode.uncurated",
      type: "boolean",
      name: "Show uncurated models",
      default: false,
      category: ["DrawThings", "Bridge mode", "Uncurated"],
      sortOrder: 0,
      tooltip: "When bridge mode is enabled, also list uncurated models",
      onChange: (value) => {
        modelService.updateNodes();
      }
    }
  ]
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