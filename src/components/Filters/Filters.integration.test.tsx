import React from "react";
import { vi, describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { NextIntlClientProvider } from "next-intl";

import { render, screen } from "@testing-library/react";
import { initFilters } from "../../constants";
import { offersMock, providersMock, translationMock } from "../../mock/mock";
import Filters from "./Filters";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe("Filters", () => {
  it("Choose the first available provider from the filter", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <Filters
          offers={offersMock}
          providers={providersMock}
          value={initFilters}
          onChangeFilter={vi.fn()}
        />
      </NextIntlClientProvider>
    );

    const user = userEvent.setup();

    const selectbox = screen.getByText("Fournisseur");
    await user.click(selectbox);

    const option = screen.getByTestId("option-fr_001");
    await user.click(option);

    expect(screen.getByTestId("label-fr_001")).toBeDefined();
  });

  it("Choose the first available contact duration from the filter", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <Filters
          offers={offersMock}
          providers={providersMock}
          value={initFilters}
          onChangeFilter={vi.fn()}
        />
      </NextIntlClientProvider>
    );

    const user = userEvent.setup();

    const selectbox = screen.getByText("Durée de contrat");
    await user.click(selectbox);

    const option = screen.getByTestId("option-24 mois");
    await user.click(option);

    expect(screen.getByTestId("label-24 mois")).toBeDefined();
  });

  it("Choose the first available energy type from the filter", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <Filters
          offers={offersMock}
          providers={providersMock}
          value={initFilters}
          onChangeFilter={vi.fn()}
        />
      </NextIntlClientProvider>
    );

    const user = userEvent.setup();

    const selectbox = screen.getByText("Type d'énergie");
    await user.click(selectbox);

    const option = screen.getByTestId("option-mixte");
    await user.click(option);

    expect(screen.getByTestId("label-mixte")).toBeDefined();
  });

  it("Choose the first available energy type from the filter", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <Filters
          offers={offersMock}
          providers={providersMock}
          value={initFilters}
          onChangeFilter={vi.fn()}
        />
      </NextIntlClientProvider>
    );

    const user = userEvent.setup();

    const selectbox = screen.getByText("Garantie du prix");
    await user.click(selectbox);

    const option = screen.getByTestId("option-fixe");
    await user.click(option);

    expect(screen.getByTestId("label-fixe")).toBeDefined();
  });

  it("Choose the first available direction from the filter", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <Filters
          offers={offersMock}
          providers={providersMock}
          value={initFilters}
          onChangeFilter={vi.fn()}
        />
      </NextIntlClientProvider>
    );

    const user = userEvent.setup();

    const selectbox = screen.getByText("Trier par prix");
    await user.click(selectbox);

    const option = screen.getByTestId("option-asc");
    await user.click(option);

    expect(screen.getByTestId("label-asc")).toBeDefined();
  });
});
