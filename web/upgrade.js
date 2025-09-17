import * as App from "../../scripts/app.js"

/** @type {import("@comfyorg/comfyui-frontend-types").ComfyApp} */
const app = App.app

const dataPath = "./drawthings-grpc/data.json"

export async function checkVersion() {
    // instead of doing it like this, we're going to...
    // - only consider the latest version
    // - record the version numbers that have been announced
    // - if the latest announcement isn't in the lsit of versions, show it and record
    const announced = await getAnnounced()
    const latestAnnouncement = announcements[announcements.length - 1]
    if (!announced.includes(latestAnnouncement.version)) {
        await saveAnnounced(latestAnnouncement.version)

        app.extensionManager.toast.add({
            summary: latestAnnouncement.title,
            detail: latestAnnouncement.detail,
            severity: 'success',
            life: 0
        })
    }
}

async function getAnnounced() {
    const data = await getUserData()
    return data?.announced ?? []
}

async function saveAnnounced(version) {
    const data = await getUserData()
    if (!data?.announced || !Array.isArray(data?.announced))
        data.announced = []
    data.announced.push(version)
    await app.api.storeUserData(dataPath, data)
}

async function getUserData() {
    try {
        const response = await app.api.getUserData(dataPath)
        if (response.status === 200) {
            const data = await response.json()
            return data
        }
    }
    catch (error) {
        console.error(`Error getting user data: ${error}`)
    }

    const data = {
        lastUsedVersion: null,
        announced: []
    }
    await app.api.storeUserData(dataPath, data)
    return data
}

const announcements = [
    {
        version: "1.6.0",
        title: "DrawThings-gRPC 1.6.0",
        detail: [`The Draw Things Sampler has a new input and corresponding node: Hints!`,
            `Hints are Draw Thing's control images, used by ControlNets, Flux Kontext,`,
            `Hi-Dream E1 and a handful of LoRAs. Use this node to add references images,`,
            `like the "Moodboard" in the Draw Things App.`,
            `\n\nFor ControlNets, images can be added with either the ControlNet node,`,
            `or with the Hints node.  For LoRAs (like Flux Depth), use the Hints node with the`,
            `appropriate hint type. For Flux Kontext or Hi-Dream E1, use the Hints node with`,
            `"Shuffle (Moodboard)" as the hint type.`,
            `\n\nNote: Currently pose or scribble images are not working correctly, but depth or`,
            `moodboard images should work as expected.`].join(' ')
    },
    {
        version: "1.6.4",
        title: "DrawThings-gRPC 1.6.4",
        detail: [
            `- Response compression is now supported! It's no longer necessary to disable this option in Draw Things or the gRPC CLI.`,
            `- Added hi res fix support for hint images`,
            `- Add support for pose hint images`,
            `- Fix: Model widgets should no longer show[object Object] when loading a workflow while disconnected`,
            `- Fix: The Draw Things Sampler Node now shows the correct error when running a workflow while not connected.`,
            `- Fix: Hint images are provided in both sizes when HiResFix is enabled`,
            `- Fix: When loading a workflow while disconnected, the widgets for the last selected model version will be shown.`,
            `- Fix: Update notes messages should only appear once`,
        ].join('\n')
    }
]

/**
 * @param {string} versionA
 * @param {string} versionB
 */
function compareVersions(versionA, versionB) {
    const a = versionA.split('.')
    const b = versionB.split('.')

    if (a.length !== b.length || a.length !== 3)
        return 0

    for (let i = 0; i < a.length; i++) {
        if (Number.parseInt(a[i]) > Number.parseInt(b[i]))
            return 1
        else if (a[i] < b[i])
            return -1
    }
    return 0
}
