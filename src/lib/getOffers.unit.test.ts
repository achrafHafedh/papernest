import { describe, it, expect, vi, afterEach } from "vitest";

import { getOffers } from "./getOffers";
import { offersMock } from "../mock/mock";

describe("getOffers", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch offers successfully", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(offersMock),
    } as Response);

    global.fetch = mockFetch;

    const result = await getOffers("fr");

    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API}/offers/fr`,
      { cache: "force-cache" }
    );
    expect(result).toEqual(offersMock);
  });

  it("should throw an error if fetch fails", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
    } as Response);

    global.fetch = mockFetch;

    await expect(() => getOffers("fr")).rejects.toThrow("Failed to fetch data");
  });
});
