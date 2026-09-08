import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "server-only": path.resolve(__dirname, "src/test/server-only.ts"), "@": path.resolve(__dirname, "src") } },
  test: {
    alias: { "server-only": path.resolve(__dirname, "src/test/server-only.ts") },
    server: { deps: { inline: [/@lab334\/contracts/, /server-only/] } },
  },
});
