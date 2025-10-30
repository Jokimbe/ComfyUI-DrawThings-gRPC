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
        "AcjmXAGw510B9OZRAXTyfQV88lwFPPZsEbyTbXnsknnx9Zt9gftxewH4eF4BeHheAXj5XgF4+HwB9PxsBTzZfAEoWX4Bkll+AaBsfgXIZn4FQOZ+AUDndANsxwRFbMdkhW8Hbe3oM0nvzDNL9TBzD9nig0e5wuAK+ZHMTOeRzgw="
    );
});

test("test output: sd1_b", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "sd1_b",
        "APy/EwD+/yUA/v+rAP7/XQD8/7uA8P9vQPT/zyDg/ecg4PzxQOT99EH0ef6GeVH/Bv7w/wP+9P8C/vTfAP712wDusZsE/BA8cOIixZZ4OX8ATA0eAc8d1gDYmf8A8pz/BPO8/wDt8P+A6ZH/gPmZ/wAcG/8A8gb/APCM/wB4Ov4=",
        "AQDw/wAA8P8AAOD/AQDw/xAA8O1AAfDjBAbQ5wSEyeMI/M77ABjfbwBIexcA8IabALrivgDMMF8AZsQS4JMoAm6EECAHAAAAAOAi/wAgq/8EwPD/BtA0+wbYPPkG4Lj/BnD59QZw+ewG8PCOBtDwKQdw8BwD83ANAPjxb4B0dd4="
    );
});

test("test output: unipc", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "unipc",
        "xtinMYLwpH2QdOYdIHSyOSw1uDnMNb15GA2yeVjFsnmAZbg5ZKcRE+CTj1dy2d0GkGmcTsRkvOF0JLJk5CS3bPQBJ1jWky+4ZLgftOS8TzhMM+NMh2/xZJM986CEPdP5gj+TgQIflhnPj4aJzIz2DMGHDUIz3c0KeNlMKOJ3bMc=",
        "xtinMYTwpH2QdOQ9MHSycSQ1tDnEJbV5MA2ZecDEmXnE5Zt5AIcZk8BZj1fgWN0H4GiUTuxgtGl0ZLZkdCSwbOQwGVjEMxe8ZLkdPmSwTTxMsuNMwzbxJDM+9ZDMLvfoBD8+AqN/HgDf7IQB+D8BB+HnhwcPzJ0JeNh+LOBDzMo="
    );
});

test("test output: sdxl_a", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "sdxl_a",
        "AAD+9wCA/PcMwPD3AGDg/wBg5v8AcM7/ADDG/wDg9P8AYPL/AODQ/4xm+P9Mx8z/OJMM/yGTPP+as377mDM++8hjPu/EYz73pOMc9sLRFO3CkR2thOE+2QEzNtlFHx/YR0s+2ssNH9zMH4PMjEvG2ZjJxNi46yXYmIcqqZANF+c=",
        "ABz//wAO+P8A0/D/ANvi/4Cljf/AosP/wJLh/wCc+f8AaMn/ADis/wA42f8Ad5T/gFEu/sA5TPrgPF76YDAu/8AgGvfIcB72yDge9shYHv/I2Q7twDAX7cRxH+2k4Q38pNEc/KTZH97yEQ/c0gGG+dCVI/nIxUnx2MEb9MDlmu4="
    );
});

test("test output: sdxl_b", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "sdxl_b",
        "AAkToqBmDkQQcRiggBk4QIBceAFAXugQQD/AhEA6wJBALtCSADsJSaBJTFGQTSxRgDkySQRjGYSAZk0pAFZFogA+QZIQXCNSBxoDCRgaE+ZefGCEj9bEDqbczA4WvoCLiZ6AH+O8YCwJj4BrCY+ETwaOBE8ApwMuikEbbqagEzA=",
        "pAoHs8QiR0soidxKmvSwE6IwprPGTMmSNQyfEiXMVEUjzhzlqYYc65kHH1dlDY2SIpyMsxsaL4uJWqt9CdYBMQFzIxZGOMYmg4yeZZCGPY2UFi61pQy+Z6YMnm4aLJYoCW2btiIvRmoZHw6SBVccTEVTaSZMEyougJU+bpGJEBI="
    );
});

test("test output: flux_a", async ({ page, comfy }) => {
    test.setTimeout(300000);
    await compareOutput(
        page,
        comfy,
        "flux_a",
        "AAD8vwAA7P4AgO/7AED68wAw+bcAmOG3ApDh+yBwmf0g4OH9AOjp7wBgTLYA8Gy0AJw83ACybTwA2fiwAJx62QAPT9kAD0/LoJ0/cgCTd3JAkz/ywBo58oiaPfIIGD7iBFg+4GCYPeCAqDigkFh45ACYfaQQKXzkyGx85MBseKQ=",
        "AID87wCg/OsAgPf7AMD2ewBgwfcAmFE/AJCZ/Qhwqe0A8KHtAGgp/wBkSN4AoOzMBNi8zASweNwA8fjYEFmO2ZDPDtsIFxvKGAN3UkgHt9OEtj/CgJI9whCRveIEGD7ABFo+YACZOeASfTzkEFg55BCZeeQAe3zkQDp4pEA8eMQ="
    );
});

test("test output: img2img_crop_ti", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "img2img_crop_ti",
        "aIi4Oeig3zlYxi452AyOOdgmjjy4Np48q7LenJw5p5xQO5OcIhbHnA8T84yPifnMncD+zB7G+MwuzL5cZ1yzTNP42c3seJTHbtzO5x9xz+O1MefTY4P753GH/0V8jj8OfA4fH/Eujj/5w4Q/PwDgHzsC+R97ossPObHvD/FUPgc=",
        "aJi6OWih3jlUzo052AyzONI28zy0uZY8p6rOnAw555wQGc+cAhbPnAYT84wPibmMHcb9jB7I+MwOzJvMZly/TFP4x83o+PfH7/jv5w9x/6Olcf/zI4P/4XmG/0V8Bj8OfQ4fH/AOji/5gsQfPwDwHzqC+R9pw+sPO6HvD7FU/gc="
    );
});

test("test output: inpaint_cnet", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "inpaint_cnet",
        "D5MPRT4sXEbw2dhInMGYQfjEIGXB9khhKRpIK2FfULRhbSQkv5/NJP/LkKbzsTQLudkkC57DpQ2uwbMUrgPLBo5jDovuZwyDfqfYxP5n2IT+8vwK/jHygG5DacBuZryAboa2ke7GsYje5zAK/GswDPE3MF7gH+Be4EcMlvYjx5g=",
        "D5MPRT4sXEbw2dhInMGYQfjEIGXB9khhKRpIK2FfULRhbSQkv5/NJP/LkKbzsTQLudkkC57DpQ2uwbEUrgPLBs5jDotu5wyDfqeUxP6nmIT+8twK/jHSgG4DacBuJryAbke2ke7GsYje4zAK/FswDPE3MF7gH+Be4EcMlvYjx5g="
    );
});

test("test output: inpaint_sdxl", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "inpaint_sdxl",
        "eMhwU2fDdyY+06gUcOmQBbQ9mU3NTTAJ2DZksZx2TLHFjxsz5+wYM9z2ZChsmIxYZ81MTGvBSWJpwUm3ZQFTO2UBhjklAw5MAYZ5TA+WuTcfmh8TP5iZE7sYXEvfGI4D3TDRA13D2BKdjmwDn4Zmx7/Hc2R74WFo33Dg1P4O4NI=",
        "eMhwU2fDdyY+06gUcOmQBbQ9mU3NTTAJ2DZksZx2TLHFjxsz5+wYM9z2ZChsmIxYZ81MTGvBSWJpwUm3ZQFTO2UBhjlhJA5MYYYZTO87czY/MXMTfxkcE7s4nkvfGI4D3RHRA10x2BKdDGwDn8Rmxz/Bc2R78WFo33Dg1P4O4NI="
    );
});

test("test output: refiner_lora_a", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "refiner_lora_a",
        "AMDs/wDA6P8AkPP/AJD3/wBA0/8AiNf/AID3/wCYy/8ARDP/AOPj/oD4w/1AdPP7QHDi+wBw8v0AcHj9AHI8/SBmv/cgDz/7IIM++yBTPv+QEzf+kJM39pCTN/eQ0zb3kFM39pB5X/aQ8Sf2kKcz9pAuC/aAdxn2kAcH84A3KfM=",
        "AIDl/gDg4fsAIBb/ABC2/gBQD/8AiKzvAIms/wAANv4ATMb5AGOc/4Bwev5AYMP+IGCj/SBAs/2ghrP5kIay+wAGHtsQBjz7kAc89pAnPPYAKzz2ACs49hAnefaQDXr2sA3ctpA9DvYgZxDWIC8c9iBHnP5g/oL8QOLh/ICGYfc="
    );
});

test("test output: refiner_lora_b", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "refiner_lora_b",
        "AMju/wBg+P8AkPP/AIDz/wBo+/8AAOP/AJD3/wCYyf8AZDn/AOPj/oD4wf1A9LH7ANDm/wDA/P8A4Xz/AOI8/SBmvPUgB5/3IIMe/yDDPveAwzb+kKMW7pCjMvaQozvukGN77pDjWe6Q8X3+kMEd9pANC/aQ9hD+kJcV+4CXKPs=",
        "AIAs/wDAEP8AIpb5ACDW9gBAnv8AAK7+AIBOvwBQVv0ATGb7IGMc+4Aw+OxAGMF1AACB/SCAsf2ghrn1kAab6xAGHvsQBj3rEA4584AHfdaAQTG2iEM09ghDMvaAk3j2gBlcdoAdTvYgbQL2IG8E1iBvlNZg/oL2YPThvADnKfs="
    );
});

test("test output: depth cnet with image input", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "depth_cnet",
        "AP1D8wB3htJCug/DfZgPg50BD4H1BB/E7DEnxtl5BvPZ5Ai7+eCTeVnCh3kymB34JZkt8GeBb3BuA88gQyOHE88jBwM8h2sAaY/hAWhP4ADwDPCBcJp3A2YY1QDUsp0g0LmPAdi8jkHoug9C9JtP6PgZn2h4Mxzh/DEY4Py1eMA=",
        "g/3D8wf/htJCPg+DfpgPw78BD4F1Bh/M7DAnxvlpBvPZ5Ai7+eCTeVjCh3lymB34NZkt8GWBb3BmY88gQyOHAc8zBwM8h2sAec/hAGlP6ALwjPiJcJrjEWY4xSLUts0A0LmPAdi9jgHosg/K/JsPqHgbnyh6Mx3hvHE44Py1cMA="
    );
});

test("test output: shuffle cnet with hints input", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "shuffle_cnet",
        "gQAg+MUDkLshBOqzETBx8B2weYMP0umLFzh5Gyd5aZtN8GzbTcJmO2ngw2FpwezAbfBMy0XWjBEH2IwRLdrABdme48GQneQREtvotBDX7JwSxu2eVsTvnjTk/ro9pDA6Oew4PjjgOD4wKDk+ECw4PBhMODlSSDycskjYnKKY3Mg=",
        "BQBA2OEDkfs7BOBjO5BywAsBfAMP4mKDH+Bim2/hYppP8WJbT9Jie2vS0mFr6NJga2lSw0tolrNHWJQJj9jQAxlN5pEwzOIRkM3imRJL4pwSWvC8EJb/vJHmjzyR9iM+WfQzPhkUOD4YJDs8mSA6PBhMOD4MST2aCQydiAiY3MA="
    );
});

test("test output: pose with hiresfix", async ({ page, comfy }) => {
    await compareOutput(
        page,
        comfy,
        "pose_hires",
        "ApFMWECUAUKJohBRAnkEMQA4lJKAuKgQgDzcEIA8vDCANX4jgDzmEkIs5jFBPs4RQTKOQxB2NksgR7ALmBu8E4QTpAPhJZgB8EPcBX7DzBSLweQUYcDkEPjv5BD8+eFMzkPnVBwkd5gMMD3PABCexwAgf3YHpi7zDjCf+W+A17A=",
        "DwAAIA8AAIAPEwCADzgAgA80AIAPOACAjzwegI88PAAPNDwAjzQ+AI8crABPPswARzrOAUZyHgEkZ7MBigeeAYaTtgHxAZ0B/ADeAHaAzwLXgOYC9oFmAPiAZwA4v3OAOc/9Pn/g8P8+jM/zmA+PfR0/Tt94D9vnAOzz8QCAe5g="
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

async function getDhash(imagePath: string, hashSize = 32): Promise<string> {
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
