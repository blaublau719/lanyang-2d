import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",  // 固定/ for Workers
  plugins: [react()],
});
