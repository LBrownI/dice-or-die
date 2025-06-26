// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  base: "/dice-or-die/",
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      // Cualquier llamada a /dice-or-die/api/* se redirige a http://localhost:3000
      "/dice-or-die/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // quitamos el rewrite para que el path vaya intacto:
        // rewrite: (path) => path,
      },
    },
  },
});
