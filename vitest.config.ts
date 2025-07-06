// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./.storybook/vitest.setup.ts"],
    exclude: [
      "node_modules",
      "__tests__/e2e/**",
      "playwright.config.ts",
      "e2e/**",
    ],
  },
});
