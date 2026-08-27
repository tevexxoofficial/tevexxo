import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    allowedHosts: ["tevexxo-1.onrender.com"],
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
