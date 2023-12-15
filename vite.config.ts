import { defineConfig } from "vite";
import path from "path";

import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
const toPath = (filePath) => path.join(process.cwd(), filePath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), WindiCSS()],
  resolve: {
    alias: {
      "@": toPath("src"),
      "@components": toPath("src/components"),
    },
  },
  optimizeDeps: {
    include: ["@fawmi/vue-google-maps", "fast-deep-equal"],
  },
});
