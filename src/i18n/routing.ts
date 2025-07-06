/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "es", "it"],
  defaultLocale: "fr",
});
