import { describe, it, expect, vi, afterEach } from "vitest";

import { getProviders } from "./getProviders";
import { providersMock } from "../mock/mock";

describe("getProviders", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch providers successfully", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(providersMock),
    } as Response);

    global.fetch = mockFetch;

    const result = await getProviders("fr");

    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API}/providers/fr`,
      { cache: "force-cache" }
    );
    expect(result).toEqual(providersMock);
  });

  it("should throw an error if fetch fails", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
    } as Response);

    global.fetch = mockFetch;

    await expect(() => getProviders("fr")).rejects.toThrow(
      "Failed to fetch data"
    );
  });
});
