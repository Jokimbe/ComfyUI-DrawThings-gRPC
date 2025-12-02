import { defineConfig } from "tsup";

export default defineConfig({
    
    entry: ["src-web/extension.ts", "src-web/models/index.ts"],
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
        "./models/index.esm.js", // Keep dynamic import external
    ],
    treeshake: true,
    publicDir: "src-web/public",
});
