import React from "react";
import { describe, it, expect } from "vitest";
import { NextIntlClientProvider } from "next-intl";
import { render, screen } from "@testing-library/react";

import { translationMock } from "../../mock/mock";
import NoResults from "./NoResults";

describe("NoResults", () => {
  it("Display no results component", async () => {
    render(
      <NextIntlClientProvider locale="fr" messages={translationMock}>
        <NoResults />
      </NextIntlClientProvider>
    );

    expect(screen.getByText("Aucun résultat trouvé")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Nous n'avons trouvé aucun résultat correspondant à vos filtres. Essayez d'élargir votre recherche ou de réinitialiser les filtres."
      )
    ).toBeInTheDocument();
  });
});
