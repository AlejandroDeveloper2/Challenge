import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@components", replacement: "/src/components" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@store", replacement: "/src/store" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@config", replacement: "/src/config" },
      { find: "@interfaces", replacement: "/src/types" },
      { find: "@api", replacement: "/src/api" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@styles", replacement: "/src/styles" },
    ],
  },
});
