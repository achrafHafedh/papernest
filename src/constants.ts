import { FiltersOffers, SelectOption } from "./types";

export const languages: SelectOption[] = [
  { label: "Français", value: "fr", src: "/images/fr.webp" },
  { label: "Italiano", value: "it", src: "/images/it.webp" },
  { label: "Español", value: "es", src: "/images/es.webp" },
];

export const initFilters: FiltersOffers = {
  contract_duration: null,
  energy_type: null,
  price_guarantee: null,
  provider: null,
  sort: null,
};

export const sortOptions = (
  ascLabel: string,
  descLabel: string
): SelectOption[] => [
  {
    label: ascLabel,
    value: "asc",
  },
  {
    label: descLabel,
    value: "desc",
  },
];
