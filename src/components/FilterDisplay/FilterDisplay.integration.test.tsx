import React from "react";
import { vi, describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import { filtersMock } from "../../mock/mock";
import FilterDisplay from "./FilterDisplay";

describe("FilterDisplay", () => {
  it("Display chosen filters", async () => {
    render(<FilterDisplay filters={filtersMock} onChangeFilter={vi.fn()} />);

    const container = screen.getByTestId("container-display-filter");

    expect(screen.getByTestId("container-display-filter")).toHaveTextContent(
      "Voltaire Énergie"
    );
    expect(container).toHaveTextContent("24 mois");
    expect(container).toHaveTextContent("mixte");
    expect(container).toHaveTextContent("fixe");
    expect(container).toHaveTextContent("Croissant");
  });
});
