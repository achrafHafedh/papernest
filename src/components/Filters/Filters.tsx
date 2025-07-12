"use client";

import { useLocale } from "next-intl";
import { FiltersOffers, Offer, Provider, SelectOption } from "@/types";
import { extractFiltersByCountry, mapProvidersToOptions } from "@/lib/filters";
import SelectBox from "../SelectBox/SelectBox";
import { useMemo, useState } from "react";

type Props = {
  offers: Offer[];
  providers: Provider[];
  onChangerFilter: (value: FiltersOffers) => void;
  value: FiltersOffers;
};

const sort = [
  {
    label: "Croissant",
    value: "asc",
  },
  {
    label: "Décroissant",
    value: "desc",
  },
];

export default function Filters({
  offers,
  providers,
  onChangerFilter,
  value,
}: Props) {
  const locale = useLocale();
  const [filters, setFilter] = useState(value);

  const { contract_duration, energy_type, price_guarantee } = useMemo(
    () => extractFiltersByCountry(offers, locale),
    [offers, locale]
  );

  const providersOptions: SelectOption[] = useMemo(
    () => mapProvidersToOptions(providers),
    [providers]
  );

  const changeFilterHandler = (value: SelectOption | null, key: string) => {
    const newFilters = {
      ...filters,
      [key]: value,
    };
    setFilter(newFilters);
    onChangerFilter(newFilters);
  };

  return (
    <div className="">
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "provider")}
        options={providersOptions}
        value={filters.provider}
        placeholder="Provider"
        clearable={true}
      />
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "contract_duration")}
        options={contract_duration}
        value={filters.contract_duration}
        placeholder="Durée de contrat"
        clearable={true}
      />
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "energy_type")}
        options={energy_type}
        value={filters.energy_type}
        placeholder="Energie"
        clearable={true}
      />
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "price_guarantee")}
        options={price_guarantee}
        value={filters.price_guarantee}
        placeholder="Prix"
        clearable={true}
      />
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "sort")}
        options={sort}
        value={filters.sort}
        placeholder="Trier par prix"
        clearable={true}
      />
    </div>
  );
}
