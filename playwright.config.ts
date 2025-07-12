import dotenv from "dotenv";

import { defineConfig } from "@playwright/test";

dotenv.config();

export default defineConfig({
  testDir: "./e2e",
  testMatch: /.*\.spec\.ts(x)?$/,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  use: {
    baseURL: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
    browserName: "chromium",
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});
