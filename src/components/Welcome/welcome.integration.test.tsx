import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Welcome from "./Welcome";

describe("<Welcome />", () => {
  it("renders the title and text correctly", () => {
    const title = "Bienvenue sur papernest !";
    const text =
      "Simplifiez votre quotidien. Dites adieu au stress administratif.";

    render(<Welcome title={title} text={text} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(title);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
