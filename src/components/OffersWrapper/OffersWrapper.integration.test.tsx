import React from "react";
import { describe, it, expect } from "vitest";
import { NextIntlClientProvider } from "next-intl";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { offersMock, providersMock, translationMock } from "../../mock/mock";
import OffersWrapper from "./OffersWrapper";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe("OffersWrapper", () => {
  it("Displays exactly three offer cards when rendered", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <OffersWrapper offers={offersMock} providers={providersMock} />
      </NextIntlClientProvider>
    );

    expect(screen.getAllByTestId("offer-card")).toHaveLength(3);
  });

  it("Apply a provider filter <fr_001> to the list of offers to display only one result", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <OffersWrapper offers={offersMock} providers={providersMock} />
      </NextIntlClientProvider>
    );

    const user = userEvent.setup();

    const selectbox = screen.getByText("Fournisseur");
    await user.click(selectbox);

    const option = screen.getByTestId("option-fr_001");
    await user.click(option);

    expect(screen.getAllByTestId("offer-card")).toHaveLength(1);
  });

  it("Apply a contract duration filter <24 mois> to the list of offers to display only one result", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <OffersWrapper offers={offersMock} providers={providersMock} />
      </NextIntlClientProvider>
    );

    const user = userEvent.setup();

    const selectbox = screen.getByText("Durée de contrat");
    await user.click(selectbox);

    const option = screen.getByTestId("option-24 mois");
    await user.click(option);

    expect(screen.getAllByTestId("offer-card")).toHaveLength(1);
  });

  it("Apply an energy type filter <mixte> to the list of offers to display two results", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <OffersWrapper offers={offersMock} providers={providersMock} />
      </NextIntlClientProvider>
    );

    const user = userEvent.setup();

    const selectbox = screen.getAllByText("Type d'énergie")[0];
    await user.click(selectbox);

    const option = screen.getByTestId("option-mixte");
    await user.click(option);

    expect(screen.getAllByTestId("offer-card")).toHaveLength(2);
  });

  it("Apply a price guarantee filter <fixe> to the list of offers to display two results", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <OffersWrapper offers={offersMock} providers={providersMock} />
      </NextIntlClientProvider>
    );

    const user = userEvent.setup();

    const selectbox = screen.getAllByText("Garantie du prix")[0];
    await user.click(selectbox);

    const option = screen.getByTestId("option-fixe");
    await user.click(option);

    expect(screen.getAllByTestId("offer-card")).toHaveLength(2);
  });

  it("Apply a sort filter and render the offers sorted by asc price", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <OffersWrapper offers={offersMock} providers={providersMock} />
      </NextIntlClientProvider>
    );

    const allCard = screen.getAllByTestId("price");
    expect(allCard[0]).toHaveTextContent("73.8");
    expect(allCard[1]).toHaveTextContent("79");
    expect(allCard[2]).toHaveTextContent("68.8");

    const user = userEvent.setup();

    const selectbox = screen.getByText("Trier par prix");
    await user.click(selectbox);

    const option = screen.getByTestId("option-asc");
    await user.click(option);

    const allCardSorted = screen.getAllByTestId("price");
    expect(allCardSorted[0]).toHaveTextContent("68.8");
    expect(allCardSorted[1]).toHaveTextContent("73.8");
    expect(allCardSorted[2]).toHaveTextContent("79");
  });
});
