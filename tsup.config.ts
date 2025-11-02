import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src-web/extension.js", "src-web/models/index.ts"],
    splitting: false,
    sourcemap: true,
    minify: true,
    clean: true,
    outDir: "web",
    format: "esm",
    platform: "browser",
    outExtension({ format }) {
        return {
            js: `.${format}.js`,
        };
    },
    external: [
        "../../scripts/app.js",
    ],
    esbuildOptions(options, context) {
        options.loader = {
            // ".json": "copy",
        }
    },
    publicDir: "src-web/public",
});
