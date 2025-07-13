import React from "react";
import { describe, it, expect } from "vitest";
import { NextIntlClientProvider } from "next-intl";

import { render, screen } from "@testing-library/react";
import { offerMock, providerMock, translationMock } from "../../mock/mock";
import Offer from "./Offer";

describe("Offer", () => {
  it("Display Offer card", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <Offer offer={offerMock} provider={providerMock} />
      </NextIntlClientProvider>
    );

    expect(screen.getByTestId("offer-card")).toBeInTheDocument();
    expect(screen.getByText("Voltaire Énergie")).toBeInTheDocument();
    expect(screen.getByText("Voltaire Classique")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Offre d'électricité standard avec prix fixe pendant 2 ans"
      )
    ).toBeInTheDocument();
  });
});
