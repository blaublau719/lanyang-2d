import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Actions sets GITHUB_ACTIONS=true automatically
// GitHub Pages → base "/lanyang-2d/", Cloudflare Workers → base "/"
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/lanyang-2d/" : "/",
  plugins: [react()],
});
