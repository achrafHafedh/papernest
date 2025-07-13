import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import SelectBox from "./SelectBox";
import { languages } from "../../constants";
import { SelectOption } from "@/types";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe("SelectBox", () => {
  it("Switch language to Italian", async () => {
    const SelectBoxWrapper = () => {
      const [selected, setSelected] = useState<SelectOption | null>(
        languages[0]
      );
      return (
        <SelectBox
          value={selected}
          onChange={setSelected}
          options={languages}
        />
      );
    };

    render(<SelectBoxWrapper />);

    const user = userEvent.setup();

    expect(screen.getByTestId("selectbox-languages")).toHaveTextContent(
      "Français"
    );

    await user.click(screen.getByTestId("selectbox-languages"));

    await user.click(screen.getByTestId("option-it"));

    expect(screen.getByTestId("selectbox-languages")).toHaveTextContent(
      "Italiano"
    );
  });
});
