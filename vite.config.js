import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/myportfolioreact/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
