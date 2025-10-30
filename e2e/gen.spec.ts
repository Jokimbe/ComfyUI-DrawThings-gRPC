import "dotenv/config";
import { expect, Page } from "@playwright/test";
import sharp from "sharp";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { ComfyPage } from "./fixtures";
import { test } from "./fixtures";
import fse from "fs-extra";

const comfyUrl = process.env.PLAYWRIGHT_TEST_URL || "";
if (!comfyUrl) throw new Error("PLAYWRIGHT_TEST_URL is not set");

const workflowFolder = "./e2e/workflows";
const comfyFolder = process.env.TEST_COMFYUI_DIR || "";
if (!comfyFolder) throw new Error("TEST_COMFYUI_DIR is not set");

const outputFolder = join(comfyFolder, "output");
const inputFolder = join(comfyFolder, "input");

const bridgemode = true;

test.beforeEach(async () => {
    test.setTimeout(300000);
});

// note: it's entirely possibly that these tests will not work when run on a different system
// I tried to cover most features/settings with these, so if anything breaks, the generated output should be different
// (they could also break for a variety of other reasons)
// requires DT running at localhost:7859 with the following models
// Stable Diffusion 1.5
// Juggernaut Rebord (8-bit)
// Foooocus Inpaint SDXL v2.6
// FoxAI Pony Fantastic (for refiner test) (https://civitai.com/models/856827)
// Xi v2 (for refiner test) (https://civitai.com/models/259563)
// Flux dev (8bit)

// st_monsters embedding (https://civitai.com/models/332132)

// inpainting cnet sd1.5
// depth map sd1
// shuffle sd1

// DMD2 (for refiner lora test)
// Hyper SDXL 8-step (for refiner lora test)
// Weight slider (for refiner lora test)
// FLUX.1 Turbo Alpha

test("test output: sd1_a", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "sd1_a",
        "BPifOIFwZHkANGVDADTycgCwsmmELRxvECRbbnik22D4dfFpwPt4bQD4eHsAeHh2BHg5XgT4OGsEtOBgBDyzZAQ4OXIEsjlnBYxkfwbMRn5GQsZ8gGTPYABtzxQEbLM1QCxz54hpc5KdwOMI9CQzAeHDA2wxzWAKIJnMCGJQzM0=",
        "4ElgfGBkzFz4fOBs4IzgzIHkwWtBy9AJ6wmPScQZxUo="
    );
});

test("test output: sd1_b", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "sd1_b",
        "APy/EwD+/yUA/v+rAP7/XQD8/7uA8P9vQPT/zyDg/ecg4PzxQOT99EH0ef6GeVH/Bv7w/wP+9P8C/vTfAP712wDusZsE/BA8cOIixZZ4OX8ATA0eAc8d1gDYmf8A8pz/BPO8/wDt8P+A6ZH/gPmZ/wAcG/8A8gb/APCM/wB4Ov4=",
        "APwA/ACcIBzgHOAc8PzwPwMAAP6A/sD+wLzAHMA4wDg="
    );
});

test("test output: unipc", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "unipc",
        "xtinMYLwpH2QdOYdIHSyOSw1uDnMNb15GA2yeVjFsnmAZbg5ZKcRE+CTj1dy2d0GkGmcTsRkvOF0JLJk5CS3bPQBJ1jWky+4ZLgftOS8TzhMM+NMh2/xZJM986CEPdP5gj+TgQIflhnPj4aJzIz2DMGHDUIz3c0KeNlMKOJ3bMc=",
        "YExgViJWmFWYMyw6hqYMzNnDyWH5GHWPewb8FPALhGI="
    );
});

test("test output: sdxl_a", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "sdxl_a",
        "AAD+9wCA/PcMwPD3AGDg/wBg5v8AcM7/ADDG/wDg9P8AYPL/AODQ/4xm+P9Mx8z/OJMM/yGTPP+as377mDM++8hjPu/EYz73pOMc9sLRFO3CkR2thOE+2QEzNtlFHx/YR0s+2ssNH9zMH4PMjEvG2ZjJxNi46yXYmIcqqZANF+c=",
        "sPyY8Yjx4Pxg/FjmTOZM50jzSPNI48jjyOMc45zJnOI="
    );
});

test("test output: sdxl_b", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "sdxl_b",
        "AAkToqBmDkQQcRiggBk4QIBceAFAXugQQD/AhEA6wJBALtCSADsJSaBJTFGQTSxRgDkySQRjGYSAZk0pAFZFogA+QZIQXCNSBxoDCRgaE+ZefGCEj9bEDqbczA4WvoCLiZ6AH+O8YCwJj4BrCY+ETwaOBE8ApwMuikEbbqagEzA=",
        "CFvAFGEZJJK0ljATIXPQ4ODYJJM0lyKTeCNwothlWKc="
    );
});

test("test output: flux_a", async ({ page, comfy }) => {
    test.setTimeout(300000);
    await compareOutput(
        page,
        comfy,
        "flux_a",
        "AAD8vwAA7P4AgO/7AED68wAw+bcAmOG3ApDh+yBwmf0g4OH9AOjp7wBgTLYA8Gy0AJw83ACybTwA2fiwAJx62QAPT9kAD0/LoJ0/cgCTd3JAkz/ywBo58oiaPfIIGD7iBFg+4GCYPeCAqDigkFh45ACYfaQQKXzkyGx85MBseKQ=",
        "AP+A/aD8wPzA9ICuwM7A0jCTEI8QhyCHYIZgjmCPYI4="
    );
});

test("test output: img2img_crop_ti", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "img2img_crop_ti",
        "aIi4Oeig3zlYxi452AyOOdgmjjy4Np48q7LenJw5p5xQO5OcIhbHnA8T84yPifnMncD+zB7G+MwuzL5cZ1yzTNP42c3seJTHbtzO5x9xz+O1MefTY4P753GH/0V8jj8OfA4fH/Eujj/5w4Q/PwDgHzsC+R97ossPObHvD/FUPgc=",
        "jW49a3trXCN4KzMtoyfjL+iby5+dnzQXPjMeeAc9mT8="
    );
});

test("test output: inpaint_cnet", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "inpaint_cnet",
        "D5MPRT4sXEbw2dhInMGYQfjEIGXB9khhKRpIK2FfULRhbSQkv5/NJP/LkKbzsTQLudkkC57DpQ2uwbMUrgPLBo5jDovuZwyDfqfYxP5n2IT+8vwK/jHygG5DacBuZryAboa2ke7GsYje5zAK/GswDPE3MF7gH+Be4EcMlvYjx5g=",
        "ZraOlPyAdYC/oc0wnxgbO58S3x7PDh+On8WeZDzsHEk="
    );
});

test("test output: inpaint_sdxl", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "inpaint_sdxl",
        "eMhwU2fDdyY+06gUcOmQBbQ9mU3NTTAJ2DZksZx2TLHFjxsz5+wYM9z2ZChsmIxYZ81MTGvBSWJpwUm3ZQFTO2UBhjklAw5MAYZ5TA+WuTcfmh8TP5iZE7sYXEvfGI4D3TDRA13D2BKdjmwDn4Zmx7/Hc2R74WFo33Dg1P4O4NI=",
        "hzTXCHoAPkifUe9gj2CNWQ1jHyZPFk8aDx4nDY+Mz8w="
    );
});

test("test output: refiner_lora_a", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "refiner_lora_a",
        "AMDs/wDA6P8AkPP/AJD3/wBA0/8AiNf/AID3/wCYy/8ARDP/AOPj/oD4w/1AdPP7QHDi+wBw8v0AcHj9AHI8/SBmv/cgDz/7IIM++yBTPv+QEzf+kJM39pCTN/eQ0zb3kFM39pB5X/aQ8Sf2kKcz9pAuC/aAdxn2kAcH84A3KfM=",
        "QPsg+wD3EPPA7kTdgN0y9zK2ErYSpjKmMqKysvTwlMw="
    );
});

test("test output: refiner_lora_b", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "refiner_lora_b",
        "AMju/wBg+P8AkPP/AIDz/wBo+/8AAOP/AJD3/wCYyf8AZDn/AOPj/oD4wf1A9LH7ANDm/wDA/P8A4Xz/AOI8/SBmvPUgB5/3IIMe/yDDPveAwzb+kKMW7pCjMvaQozvukGN77pDjWe6Q8X3+kMEd9pANC/aQ9hD+kJcV+4CXKPs=",
        "QPIA+yD+MPJA7kTckN0y8zK2ELYSphKmeqJysvTwxMw="
    );
});

test("test output: depth cnet with image input", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "depth_cnet",
        "AP1D8wB3htJCug/DfZgPg50BD4H1BB/E7DEnxtl5BvPZ5Ai7+eCTeVnCh3kymB34JZkt8GeBb3BuA88gQyOHE88jBwM8h2sAaY/hAWhP4ADwDPCBcJp3A2YY1QDUsp0g0LmPAdi8jkHoug9C9JtP6PgZn2h4Mxzh/DEY4Py1eMA=",
        "4ZNngxuDTtCG04TDjE9ZE5cFvAxsDWwb7BNug07DzoY="
    );
});

test("test output: shuffle cnet with hints input", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "shuffle_cnet",
        "gQAg+MUDkLshBOqzETBx8B2weYMP0umLFzh5Gyd5aZtN8GzbTcJmO2ngw2FpwezAbfBMy0XWjBEH2IwRLdrABdme48GQneQREtvotBDX7JwSxu2eVsTvnjTk/ro9pDA6Oew4PjjgOD4wKDk+ECw4PBhMODlSSDycskjYnKKY3Mg=",
        "sPgFj8McwTzDTM/MxZvjGKZMsCwSb9YjhieGZqI3Ios="
    );
});

test("test output: pose with hiresfix", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "pose_hires",
        "ApFMWECUAUKJohBRAnkEMQA4lJKAuKgQgDzcEIA8vDCANX4jgDzmEkIs5jFBPs4RQTKOQxB2NksgR7ALmBu8E4QTpAPhJZgB8EPcBX7DzBSLweQUYcDkEPjv5BD8+eFMzkPnVBwkd5gMMD3PABCexwAgf3YHpi7zDjCf+W+A17A=",
        "A4BjgGcGZwZnDmUaURMRExgTDxsPCb4Nh/wz8zN6oN8="
    );
});

async function compareOutput(
    page: Page,
    comfy: ComfyPage,
    workflow: string,
    hash?: string,
    bridgeHash?: string
) {
    const wf = await fse.readJSON(join(workflowFolder, `${workflow}.json`));
    const loadImageNodes = wf.nodes.filter((n) => n.type === "LoadImage");
    const images = loadImageNodes.map((n) => n.widgets_values[0]);

    for (const image of images) {
        const src = join(workflowFolder, image);
        const dst = join(inputFolder, image);
        await fse.copy(src, dst, { overwrite: true });
    }

    await comfy.openWorkflow(join(workflowFolder, `${workflow}.json`));

    await page.waitForTimeout(1000);

    await page.locator("#graph-canvas").click({
        position: {
            x: 137,
            y: 246,
        },
    });

    await page.locator("#graph-canvas").press(".");

    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Queue (q)" }).click();
    await page
        .getByTestId("queue-button")
        .getByRole("button", { name: "Run" })
        .click();

    await page.waitForTimeout(1000);
    await expect(page.locator(".task-item").first()).not.toContainText(
        "Running",
        { timeout: 300000 }
    );

    await page.locator(".task-item").first().click();
    const filename = await page
        .locator(".p-galleria-item")
        .locator("img")
        .getAttribute("alt");
    const filepath = join(outputFolder, filename);

    // const fileHash = await sha256sum(filepath);
    // console.log(`hash for ${workflow}: ${fileHash}`);

    const dhash = await getDhash(filepath);
    console.log(`dhash for ${workflow}: ${dhash}`);

    fse.writeFileSync("dhashes.txt", `${workflow}:\n"${dhash}"\n`, {
        flag: "a",
    });

    // expect([hash, bridgeHash].includes(dhash)).toBeTruthy();
    const dif = compareDHash(bridgeHash!, dhash);
    console.log(`dif for ${workflow}: ${dif}`);

    if (bridgemode && bridgeHash) {
        expect(dif, {
            message: `Expected: ${bridgeHash}\nReceived: ${dhash}\n${dif} dif`,
        }).toBeLessThan(5);
    }

    // if (
    //     !(await sharp(filepath)
    //         .removeAlpha()
    //         .raw()
    //         .toBuffer({ resolveWithObject: true }))
    // ) {
    //     throw new Error("No output image");
    // }

    // await sharp(workflowFolder + workflow + ".png")
    //     .composite([{ input: filepath, blend: "difference" }])
    //     .toFile(workflowFolder + workflow + "_diff.png");

    // const outImg = await sharp(filepath)
    //     .removeAlpha()
    //     .raw()
    //     .toBuffer({ resolveWithObject: true });
    // const refImg = await sharp(join(workflowFolder, workflow + ".png"))
    //     .removeAlpha()
    //     .raw()
    //     .toBuffer({ resolveWithObject: true });

    // let totalDif = 0;
    // let maxDif = 0;

    // let pixels = 0;

    // for (let i = 0; i < outImg.data.length; i++) {
    //     pixels++;
    //     const dif = Math.abs(outImg.data[i] - refImg.data[i]);
    //     totalDif += dif;
    //     if (dif > maxDif) maxDif = dif;
    // }

    // console.log(totalDif / pixels, maxDif);

    // expect(totalDif / pixels).toBeLessThanOrEqual(6);
}

async function sha256sum(filepath: string): Promise<string> {
    const hash = createHash("sha256");
    const stream = createReadStream(filepath);
    await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("end", resolve);
        stream.pipe(hash);
    });
    return hash.digest("hex");
}

async function getDhash(imagePath: string, hashSize = 16): Promise<string> {
    const image = await sharp(imagePath)
        .resize(hashSize + 1, hashSize)
        .grayscale()
        // .toFile('temp.png')
        .raw()
        .toBuffer({ resolveWithObject: true });

    // const image = await sharp(imagePath).raw().toBuffer({ resolveWithObject: true })

    let hash = "";
    const hb = new Uint8Array((hashSize * hashSize) / 8);
    let p = 0;

    for (let y = 0; y < hashSize; y++) {
        for (let x = 0; x < hashSize; x++) {
            const index = (y * (hashSize + 1) + x) * image.info.channels;
            const left = image.data[index];
            const right = image.data[index + image.info.channels];
            const bit = left > right ? 1 : 0;
            hash += bit.toString();

            hb[Math.floor(p / 8)] += bit << p % 8;
            p++;
        }
    }

    return Buffer.from(hb).toString("base64");
}

function compareDHash(a: string, b: string) {
    let dif = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) dif++;
    }
    return dif;
}
