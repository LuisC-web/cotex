import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { dirname, resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(dirname(new URL(import.meta.url).pathname), "./src"),
    },
  },
});
