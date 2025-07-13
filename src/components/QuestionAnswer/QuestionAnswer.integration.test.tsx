/* eslint-disable @next/next/no-img-element */ // for Image next
import React, { ImgHTMLAttributes } from "react";
import { render, screen } from "@testing-library/react";
import QuestionAnswer from "./QuestionAnswer";
import { describe, it, expect, vi } from "vitest";
import { languages } from "../../constants";

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    const { src = "", alt = "", ...rest } = props;
    return <img src={src} alt={alt} {...rest} />;
  },
}));

describe("QuestionAnswer Component", () => {
  const question = "Sélectionnez votre pays de résidence";

  it("Display Question and answer correctly", () => {
    render(<QuestionAnswer question={question} answer={languages} />);

    expect(screen.getByText(question)).toBeInTheDocument();

    languages.forEach(({ label, value, src }) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", `/offers/${value}`);

      const img = screen.getByAltText(label);
      expect(img).toHaveAttribute("src", src);
    });
  });
});
