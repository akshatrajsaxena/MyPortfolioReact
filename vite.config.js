import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-portfolio/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
