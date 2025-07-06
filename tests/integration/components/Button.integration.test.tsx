import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../src/components/Button/Button";
import { describe, it, expect, vi } from "vitest";

describe("Button component", () => {
  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
