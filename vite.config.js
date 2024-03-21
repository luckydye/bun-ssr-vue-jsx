import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "./vue-jsx/index.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), vue()],
});
