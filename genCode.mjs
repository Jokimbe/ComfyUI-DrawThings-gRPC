import cp from "child_process"
import fse from "fs-extra"
import { compileOfficialModels } from "./specParser.mjs"

async function updateConfig() {
    console.log('Fetching latest config.fbs')
    const res = await fetch(
        "https://api.github.com/repos/drawthingsai/draw-things-community/contents/Libraries/DataModels/Sources/config.fbs"
    )
    const decoded = Buffer.from((await res.json()).content, "base64").toString(
        "utf-8"
    )

    // remove user defined attributes (indexed) and (primary)
    console.log("removing custom attributes")
    const fbs = decoded
        .replace(/ \(indexed\)/g, "")
        .replace(/ \(primary\)/g, "")

    await fse.ensureDir("resources")
    await fse.writeFile("resources/config.fbs", fbs)

    cp.exec('flatc --python --gen-object-api --gen-onefile --python-typing --grpc -o ./src/generated ./resources/config.fbs', { stdio: "inherit" })
}

async function updateClient() {
    console.log('Fetching latest imageService.proto')
    const res = await fetch(
        "https://api.github.com/repos/drawthingsai/draw-things-community/contents/Libraries/GRPC/Models/Sources/imageService/imageService.proto"
    )
    const decoded = Buffer.from((await res.json()).content, "base64").toString(
        "utf-8"
    )

    await fse.ensureDir("resources")
    await fse.writeFile("resources/imageService.proto", decoded)

    console.log("running protoc")
    cp.execSync(
        [
            "python -m grpc_tools.protoc",
            "--proto_path=./resources",
            "--pyi_out=./src/generated",
            "--python_out=./src/generated",
            "--grpc_python_out=./src/generated",
            "./resources/imageService.proto",
        ].join(" ")
    )
}

async function updateModels() {
    await cloneCommunityModels()
    await compileModelData()
}

if (import.meta.filename === process.argv[1]) {
    updateAll()
        .then(() => process.exit(0))
        .catch(console.error)
}

async function updateAll() {
    console.log("removing old generated files")
    fse.emptyDirSync("src/generated")

    await updateConfig()
    await updateClient()
    await fixImports()
    await updateModels()
}

async function fixImports() {
    console.log("fixing imports")
    const files = fse
        .readdirSync("src/generated")
        .filter((f) => f.endsWith(".py") || f.endsWith(".pyi"))

    const names = new Set(files.map((f) => f.replace(".pyi", "").replace(".py", "")))

    for (const file of files) {
        const content = fse.readFileSync(`src/generated/${file}`, "utf-8")
        const fixed = content.replaceAll(
            /from ([\w]+) import ([^ ]+)/g,
            (m, p1, p2) => {
                if (names.has(p1)) {
                    console.log(`changed ${p1} to .${p1} in ${file}`)
                    return `from .${p1} import ${p2}`
                }
                return m
            }
        ).replaceAll(
            /import ([^ ]+) as ([^ ]+)/g,
            (m, p1, p2) => {
                if (names.has(p1)) {
                    console.log(`changed ${p1} to .${p1} in ${file}`)
                    return `from . import ${p1} as ${p2}`
                }
                return m
            }
        )
        fse.writeFileSync(`src/generated/${file}`, fixed)
    }
}

async function cloneCommunityModels() {
    console.log("removing old generated files")
    fse.emptyDirSync("./models")
    console.log("cloning draw things community models")
    cp.execSync("git clone https://github.com/drawthingsai/community-models.git", { cwd: "./models", stdio: "inherit" })
}

async function compileModelData() {
    console.log("compiling model data")

    await compileModelType("models", 'Model')
    await compileModelType("uncurated_models")
    await compileModelType("controlnets", 'ControlNet')
    await compileModelType("loras", 'LoRA')
    await compileModelType("embeddings", 'TextualInversion')
}

async function compileModelType(type, official) {
    try {
        cp.execSync(`python utils/${type}_json.py`, { cwd: "./models/community-models", stdio: "inherit" })
        const models = await fse.readJSON(`./models/community-models/${type}.json`)

        if (official) {
            const officialModels = await compileOfficialModels(official)
            models.push(...officialModels)
        }

        models.sort((a, b) => a.name.localeCompare(b.name))

        models.forEach(m => { m.version = versionMap(m.version) })

        await fse.writeJSON(`./src-web/models/${type}.json`, models, { spaces: 2 })
    } catch (e) {
        console.error("couldn't compile", type)
        console.error(e)
    }
}


function extractSpecifications(text) {
    const specs = []
    let i = 0
    while (true) {
        const start = text.indexOf("Specification(", i)
        if (start === -1) break

        let depth = 0
        let inQuote = false
        let escaped = false
        let j = text.indexOf("(", start)
        j++ // skip first '('

        const startIdx = j
        for (; j < text.length; j++) {
            const ch = text[j]

            if (inQuote) {
                if (escaped) escaped = false
                else if (ch === "\\") escaped = true
                else if (ch === '"') inQuote = false
            } else {
                if (ch === '"') inQuote = true
                else if (ch === "(") depth++
                else if (ch === ")") {
                    if (depth === 0) break
                    depth--
                }
            }
        }

        const block = text.slice(startIdx, j)
        specs.push(block.trim())
        i = j + 1
    }
    return specs
}

/**
 * Specification(
      name: "Qwen Image 1.0", file: "qwen_image_1.0_q8p.ckpt", prefix: "",
      version: .qwenImage, defaultScale: 16, textEncoder: "qwen_2.5_vl_7b_q8p.ckpt",
      autoencoder: "qwen_image_vae_f16.ckpt", objective: .u(conditionScale: 1000),
      hiresFixScale: 24,
      note:
        "[Qwen Image](https://huggingface.co/Qwen/Qwen-Image) is a state-of-the-art open-source image generation model known for its exceptional text layout and prompt adherence across a wide range of styles, including photorealistic, cartoon, and artistic. It is Apache 2.0-licensed and commercially friendly. The model is trained at multiple resolutions using a Flow Matching objective; trailing samplers yield the best results, with 30–50 sampling steps recommended."
    )
        also
        modifier: .qwenimageEditPlus,
 */

/** @param spec string */
function extractData(spec) {
    const data = {
        name: extractValue(spec, "name"),
        file: extractValue(spec, "file"),
        version: versionMap(extractDotValue(spec, "version")),
        modifier: extractDotValue(spec, "modifier") ?? undefined
    }
    if (data.name && data.file && data.version) return data
    console.error("couldn't extract data from", spec)
    return undefined
}

/** @param spec {string} */
function extractValue(spec, key) {
    if (key === "name")
        return spec.match(/\bname:\s+?"([^"]+)"/)?.[1]
    if (key === "file")
        return spec.match(/\bfile:\s+?"([^"]+)"/)?.[1]
}

/** @param spec {string} */
function extractDotValue(spec, key) {
    if (key === "version")
        return spec.match(/\bversion:\s+?\.(\w+)/)?.[1]
    if (key === "modifier")
        return spec.match(/\bmodifier:\s+?\.(\w+)/)?.[1]
}

function versionMap(version) {
    switch (version) {
        case "v1":
            return "v1"
        case "v2":
            return "v2"
        case "kandinsky21":
            return "kandinsky2.1"
        case "sdxlBase":
            return "sdxl_base_v0.9"
        case "sdxlRefiner":
            return "sdxl_refiner_v0.9"
        case "ssd1b":
            return "ssd_1b"
        case "svdI2v":
            return "svd_i2v"
        case "wurstchenStageC":
            return "wurstchen_v3.0_stage_c"
        case "wurstchenStageB":
            return "wurstchen_v3.0_stage_b"
        case "sd3":
            return "sd3"
        case "pixart":
            return "pixart"
        case "auraflow":
            return "auraflow"
        case "flux1":
            return "flux1"
        case "sd3Large":
            return "sd3_large"
        case "hunyuanVideo":
            return "hunyuan_video"
        case "wan21_1_3b":
            return "wan_v2.1_1.3b"
        case "wan21_14b":
            return "wan_v2.1_14b"
        case "hiDreamI1":
            return "hidream_i1"
        case "qwenImage":
            return "qwen_image"
        case "wan22_5b":
            return "wan_v2.2_5b"
        default:
            return version
    }
}
