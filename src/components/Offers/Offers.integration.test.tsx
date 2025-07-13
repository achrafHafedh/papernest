import React from "react";
import { describe, it, expect } from "vitest";
import { NextIntlClientProvider } from "next-intl";

import { render, screen } from "@testing-library/react";
import { offersMock, providersMock, translationMock } from "../../mock/mock";
import Offers from "./Offers";

describe("Offers", () => {
  it("Displays exactly three offer cards when rendered", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <Offers offers={offersMock} providers={providersMock} />
      </NextIntlClientProvider>
    );

    expect(screen.getAllByTestId("offer-card")).toHaveLength(3);
  });
});
