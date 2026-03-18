import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// DEPLOY_TARGET=cloudflare → base "/" (Workers)
// default → base "/lanyang-2d/" (GitHub Pages)
export default defineConfig({
  base: process.env.DEPLOY_TARGET === "cloudflare" ? "/" : "/lanyang-2d/",
  plugins: [react()],
});
