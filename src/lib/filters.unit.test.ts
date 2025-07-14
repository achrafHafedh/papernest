import { describe, it, expect } from "vitest";
import {
  extractFiltersByCountry,
  mapProvidersToOptions,
  filterOffers,
} from "../lib/filters";
import {
  offersMock,
  providersMock,
  filtersMock,
  filterSortMock,
} from "../mock/mock";

describe("extractFiltersByCountry", () => {
  it("should extract unique filter values based on locale", () => {
    const result = extractFiltersByCountry(offersMock, "fr");

    expect(result.energy_type).toEqual([
      { label: "mixte", value: "mixte" },
      { label: "verte", value: "verte" },
    ]);

    expect(result.contract_duration).toEqual([
      { label: "24 mois", value: "24 mois" },
      { label: "36 mois", value: "36 mois" },
      { label: "sans engagement", value: "sans engagement" },
    ]);

    expect(result.price_guarantee).toEqual([
      { label: "fixe", value: "fixe" },
      { label: "indexée", value: "indexée" },
    ]);
  });
});

describe("mapProvidersToOptions", () => {
  it("should map providers to select options", () => {
    const result = mapProvidersToOptions(providersMock);

    expect(result).toEqual([
      { label: "Voltaire Énergie", value: "fr_001" },
      { label: "Lumière Verte", value: "fr_002" },
      { label: "Énergie Bleue", value: "fr_003" },
    ]);
  });
});

describe("filterOffers", () => {
  it("should filter by meta data and provider and return offer_fr_001_01", () => {
    const result = filterOffers(offersMock, filtersMock, "fr");
    expect(result).toHaveLength(1);
    expect(result[0].metadata.energy_type.fr).toBe("mixte");
    expect(result[0].metadata.contract_duration.fr).toBe("24 mois");
    expect(result[0].metadata.price_guarantee.fr).toBe("fixe");
    expect(result[0].provider_id).toBe("fr_001");
    expect(result[0].estimation.year).toBe(73.8);
  });

  it("Should sort offers in ascending order by price", () => {
    const result = filterOffers(offersMock, filterSortMock, "fr");
    expect(result).toHaveLength(3);
    expect(result[0].estimation.year).toBe(68.8);
    expect(result[1].estimation.year).toBe(73.8);
    expect(result[2].estimation.year).toBe(79.0);
  });
});
