import "dotenv/config";
import { expect } from "@playwright/test";
import { ComfyPage, test } from "./fixtures";

// import fse from "fs-extra";
// import { join } from "node:path";

const localOnlyModels = [
    "animyo (SD)",
    "LoRA-001 (2000) (SD)",
    "control-lora-openposeXL2-rank256 (SDXL)",
    "LoRA-001 (2000) (v1)",
    // "Real-ESRGAN X2+",
    "animyo (SD)",
] as const;

const officialModels = [
    "HiDream E1-1 (hiDreamI1)",
    "Foreground to Blending (sdxlBase)",
    "QR Code (SD v1.x, ControlNet Monster 2.0) (SD)",
    "NONE OFFICIAL",
    // "4x UltraSharp",
    "Kandinsky v2.1 (kandinsky21)",
] as const;

const communityModels = [
    "Chroma1 HD (F1)",
    "Arcane Style (SD)",
    "Depth Map (Kwai Kolors 1.0) (SDXL)",
    "Action Helper (v2)",
    "RayFLUX v3.0 (F1)",
] as const;

const [menuBridge, menuCommunity, menuUncurated] = [
    "Use bridge mode",
    "Show community models",
    "Show uncurated models",
].map((o) => ({ true: `✓ ${o}`, false: o }));

test.beforeEach(async ({ comfy, page }) => {
    // make sure default settings are enabled
    await comfy.goto();
    await page.locator('.comfy-menu-button-wrapper').click();
    await page.locator("a").filter({ hasText: "Settings" }).click();
    await page.getByRole("option", { name: "DrawThings" }).click();
    await page.getByRole("switch", { name: "Enable bridge mode " }).uncheck();
    await page.getByRole("switch", { name: "Show community models " }).check();
    await page
        .getByRole("switch", { name: "Show uncurated models " })
        .uncheck();
    await page.getByRole("button", { name: "Close" }).click();
});

test("When bridge mode is enabled, local models are hidden and official models are listed", async ({
    comfy,
}) => {
    await comfy.openWorkflow("all_nodes");

    const sampler = await comfy.getNodeRef("DrawThingsSampler");
    const checkAllNodesModels = await getCheckAllNodesModels(comfy);

    // make sure bridge mode is off
    let menuOptions = await sampler?.getContextMenuOptions();
    expect(menuOptions?.includes(menuBridge.false)).toBeTruthy();

    // assert local models are listed
    let result = await checkAllNodesModels(...localOnlyModels);
    expect(result).toMatchObject([true, true, true, true, true]);

    // enable bridge mode through context menu
    sampler?.selectContextMenuOption(menuBridge.false);
    await comfy.page.waitForTimeout(1000);

    // assert local models are gone, and official models are listed
    result = await checkAllNodesModels(...localOnlyModels);
    expect(result).toMatchObject([false, false, false, false, false]);
    result = await checkAllNodesModels(...officialModels);
    expect(result).toMatchObject([true, true, true, false, true]);

    // disable bridge mode through context menu
    sampler?.selectContextMenuOption(menuBridge.true);
    await comfy.page.waitForTimeout(800);

    // assert local models are back, an official models are gone
    result = await checkAllNodesModels(...officialModels);
    expect(result).toMatchObject([false, false, false, false, false]);
    result = await checkAllNodesModels(...localOnlyModels);
    expect(result).toMatchObject([true, true, true, true, true]);
});

test('When "show community" is enabled, official and community models are listed', async ({
    comfy,
}) => {
    await comfy.openWorkflow("all_nodes");

    const sampler = await comfy.getNodeRef("DrawThingsSampler");
    const checkAllNodesModels = await getCheckAllNodesModels(comfy);

    // turn bridge mode on
    sampler?.selectContextMenuOption(menuBridge.false);
    await comfy.page.waitForTimeout(1000);

    // make sure community is on
    let menuOptions = await sampler?.getContextMenuOptions();
    expect(menuOptions?.includes(menuCommunity.true)).toBeTruthy();

    // assert official models are listed
    let result = await checkAllNodesModels(...officialModels);
    expect(result).toMatchObject([true, true, true, false, true]);

    // assert community models are listed
    result = await checkAllNodesModels(...communityModels);
    expect(result).toMatchObject([true, true, true, true, true]);

    // disable community
    sampler?.selectContextMenuOption(menuCommunity.true);
    await comfy.page.waitForTimeout(1000);

    // assert community is not listed
    result = await checkAllNodesModels(...communityModels);
    expect(result).toMatchObject([false, false, false, false, false]);

    // enable community
    sampler?.selectContextMenuOption(menuCommunity.false);
    await comfy.page.waitForTimeout(1000);

    // assert community is listed
    result = await checkAllNodesModels(...communityModels);
    expect(result).toMatchObject([true, true, true, true, true]);
});

test('When "show uncurated" is enabled, official and uncurated models are listed', async ({
    comfy,
}) => {
    await comfy.openWorkflow("all_nodes");

    const sampler = await comfy.getNodeRef("DrawThingsSampler");

    // turn bridge mode on
    sampler?.selectContextMenuOption(menuBridge.false);
    await comfy.page.waitForTimeout(1000);

    // make sure uncurated is off
    let menuOptions = await sampler?.getContextMenuOptions();
    expect(menuOptions?.includes(menuUncurated.true)).toBeFalsy();

    // assert uncurated model not listed
    let result = await sampler?.widgetHasOption(
        "model",
        "Photonic-Fusion-SDXL (SDXL)"
    );
    expect(result).toBeFalsy();

    // turn uncurated models on
    sampler?.selectContextMenuOption(menuUncurated.false);
    await comfy.page.waitForTimeout(1000);

    // assert uncurated model is listed
    result = await sampler?.widgetHasOption(
        "model",
        "Photonic-Fusion-SDXL (SDXL)"
    );
    expect(result).toBeTruthy();

    // turn uncurated models off
    sampler?.selectContextMenuOption(menuBridge.true);
    await comfy.page.waitForTimeout(1000);

    // assert uncurated model is not listed
    result = await sampler?.widgetHasOption(
        "model",
        "Photonic-Fusion-SDXL (SDXL)"
    );
    expect(result).toBeFalsy();
});

test('When "show community" and "show uncurated" are enabled, all three categories are listed', async ({
    comfy,
}) => {
    await comfy.openWorkflow("all_nodes");

    const sampler = await comfy.getNodeRef("DrawThingsSampler");
    const checkAllNodesModels = await getCheckAllNodesModels(comfy);

    // turn bridge mode on
    sampler?.selectContextMenuOption(menuBridge.false);
    await comfy.page.waitForTimeout(1000);

    // ensure community is enabled
    let menuOptions = await sampler?.getContextMenuOptions();
    if (menuOptions && menuOptions.includes(menuCommunity.false)) {
        sampler?.selectContextMenuOption(menuCommunity.false);
        await comfy.page.waitForTimeout(800);
    }

    // ensure uncurated is enabled
    menuOptions = await sampler?.getContextMenuOptions();
    if (menuOptions && menuOptions.includes(menuUncurated.false)) {
        sampler?.selectContextMenuOption(menuUncurated.false);
        await comfy.page.waitForTimeout(800);
    }

    // official models should be listed
    let result = await checkAllNodesModels(...officialModels);
    expect(result).toMatchObject([true, true, true, false, true]);

    // community models should be listed
    result = await checkAllNodesModels(...communityModels);
    expect(result).toMatchObject([true, true, true, true, true]);

    // an uncurated model should be listed (example used in other tests)
    let result2 = await sampler?.widgetHasOption(
        "model",
        "Photonic-Fusion-SDXL (SDXL)"
    );
    expect(result).toBeTruthy();

    // local-only models should still be hidden while bridge mode is on
    result = await checkAllNodesModels(...localOnlyModels);
    expect(result).toMatchObject([false, false, false, false, false]);
});

test('"Show community" and "Show uncurated" context menu options are only displayed if bridge mode is enabled', async ({
    comfy,
}) => {
    await comfy.openWorkflow("all_nodes");

    const sampler = await comfy.getNodeRef("DrawThingsSampler");

    // with bridge mode OFF the community/uncurated options should not be present
    let menuOptions = await sampler?.getContextMenuOptions();
    expect(menuOptions).toBeDefined();
    expect(
        !(menuOptions?.includes(menuCommunity.true) || menuOptions?.includes(menuCommunity.false))
    ).toBeTruthy();
    expect(
        !(menuOptions?.includes(menuUncurated.true) || menuOptions?.includes(menuUncurated.false))
    ).toBeTruthy();

    // enable bridge mode
    sampler?.selectContextMenuOption(menuBridge.false);
    await comfy.page.waitForTimeout(800);

    // now the community and uncurated options should appear (either checked or unchecked)
    menuOptions = await sampler?.getContextMenuOptions();
    expect(menuOptions).toBeDefined();
    expect(
        (menuOptions?.includes(menuCommunity.true) || menuOptions?.includes(menuCommunity.false))
    ).toBeTruthy();
    expect(
        (menuOptions?.includes(menuUncurated.true) || menuOptions?.includes(menuUncurated.false))
    ).toBeTruthy();

    // disable bridge mode again
    sampler?.selectContextMenuOption(menuBridge.true);
    await comfy.page.waitForTimeout(800);

    // community/uncurated should no longer be present
    menuOptions = await sampler?.getContextMenuOptions();
    expect(
        !(menuOptions?.includes(menuCommunity.true) || menuOptions?.includes(menuCommunity.false))
    ).toBeTruthy();
    expect(
        !(menuOptions?.includes(menuUncurated.true) || menuOptions?.includes(menuUncurated.false))
    ).toBeTruthy();
});

async function getCheckAllNodesModels(comfy: ComfyPage) {
    const sampler = await comfy.getNodeRef("DrawThingsSampler");
    const lora = await comfy.getNodeRef("DrawThingsLoRA");
    const cnet = await comfy.getNodeRef("DrawThingsControlNet");
    const prompt = await comfy.getNodeRef("DrawThingsPrompt");
    // const upscaler = await comfy.getNodeRef("DrawThingsUpscaler");
    const refiner = await comfy.getNodeRef("DrawThingsRefiner");

    async function hasModel(
        samplerModel,
        loraModel,
        cnetModel,
        promptModel,
        // upscalerModel,
        refinerModel
    ): Promise<(boolean | undefined)[]> {
        return [
            await sampler?.widgetHasOption("model", samplerModel),
            await lora?.widgetHasOption("lora", loraModel),
            await cnet?.widgetHasOption("control_name", cnetModel),
            await prompt?.widgetHasOption(
                "insert_textual_inversion",
                promptModel
            ),
            // await upscaler?.widgetHasOption("upscaler_model", upscalerModel),
            await refiner?.widgetHasOption("refiner_model", refinerModel),
        ];
    }

    return hasModel;
}
