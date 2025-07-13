import React from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";

import { translation } from "./mock";

import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="fr" messages={translation}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
