import React from "react";
import { vi } from "vitest";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./Header";
import { usePathname } from "../../i18n/navigation";

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual<typeof import("next/navigation")>(
    "next/navigation"
  );
  return {
    ...actual,
    useRouter: vi.fn(),
  };
});

vi.mock("next-intl", async () => {
  const actual = await vi.importActual<typeof import("next-intl")>("next-intl");
  return {
    ...actual,
    useLocale: vi.fn(),
  };
});

vi.mock("../../i18n/navigation", () => {
  return {
    usePathname: vi.fn(),
    Link: ({ href, children }: React.PropsWithChildren<{ href: string }>) => (
      <a href={href}>{children}</a>
    ),
  };
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe("Header component", () => {
  const pushMock = vi.fn();

  beforeEach(() => {
    vi.mocked(useRouter).mockReturnValue({
      push: pushMock,
    } as unknown as ReturnType<typeof useRouter>);
    vi.mocked(useLocale).mockReturnValue("fr");
    vi.mocked(usePathname).mockReturnValue("fr");
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the logo and the language select box", () => {
    render(<Header />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(
      screen.getByTestId("container-selectbox-languages")
    ).toBeInTheDocument();
  });

  test("calls router.push when language is changed", async () => {
    render(<Header />);
    const user = userEvent.setup();

    const selectbox = screen.getByTestId("selectbox-languages");
    await user.click(selectbox);

    const italianOption = screen.getByText("Italiano");
    await user.click(italianOption);

    expect(pushMock).toHaveBeenCalledWith("/it/fr");
  });
});
