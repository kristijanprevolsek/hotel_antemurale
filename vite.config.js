import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" omogućuje objavu u bilo kojem direktoriju (npr. GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: "./"
});
