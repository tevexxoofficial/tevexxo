import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 8080,
    strictPort: false,
    allowedHosts: [
      "tevexxo-1.onrender.com",
      "tevexxo.onrender.com",
    ],
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  nitro: true,
});
