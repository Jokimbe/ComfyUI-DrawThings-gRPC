import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src-web/extension.js"],
    splitting: false,
    sourcemap: true,
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
        "../../scripts/app.js", // <- tell tsup/esbuild to leave this import alone
    ],
    publicDir: "src-web/public"
});
