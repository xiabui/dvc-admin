import { defineConfig } from "vite";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { fileURLToPath, URL } from 'node:url'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vue from "@vitejs/plugin-vue";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue", "vue-router", "vuex", "vue-cookie-next"],
          vuetify: [
            "vuetify",
            "vuetify/components",
            "vuetify/directives",
            "vuetify/labs/components",
            "vee-validate",
            "@vee-validate/rules",
          ],
        },
      },
    },
  },
  plugins: [
    vue({ template: transformAssetUrls }),
    vuetify({
      autoImport: true,
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
      svgoOptions: {
        full: true,
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: "fill",
            },
          },
        ],
      },
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
});
