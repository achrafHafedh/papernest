"use client";


import { useCallback, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { FiltersOffers, Offer, Provider, SelectOption } from "@/types";
import { extractFiltersByCountry, mapProvidersToOptions } from "@/lib/filters";
import { sortOptions } from "@/constants";
import SelectBox from "../SelectBox/SelectBox";
import FilterDisplay from "../FilterDisplay/FilterDisplay";

type Props = {
  offers: Offer[];
  providers: Provider[];
  onChangeFilter: (value: FiltersOffers) => void;
  value: FiltersOffers;
};

export default function Filters({ offers, providers, onChangeFilter, value }: Props) {
  const t = useTranslations();
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

  const changeFilterHandle = useCallback(
    (value: SelectOption | null, key: string) => {
      const newFilters = {
        ...filters,
        [key]: value,
      };
      setFilter(newFilters);
      onChangeFilter(newFilters);
    },
    [filters, onChangeFilter]
  );

  return (
    <div>
      <div className="grid grid-cols-5 gap-3">
        <SelectBox
          onChange={(value) => changeFilterHandle(value, "provider")}
          options={providersOptions}
          value={filters.provider}
          placeholder={t("offersPage.filters.provider")}
        />
        <SelectBox
          onChange={(value) => changeFilterHandle(value, "contract_duration")}
          options={contract_duration}
          value={filters.contract_duration}
          placeholder={t("offersPage.filters.contractDuration")}
        />
        <SelectBox
          onChange={(value) => changeFilterHandle(value, "energy_type")}
          options={energy_type}
          value={filters.energy_type}
          placeholder={t("offersPage.filters.energyType")}
        />
        <SelectBox
          onChange={(value) => changeFilterHandle(value, "price_guarantee")}
          options={price_guarantee}
          value={filters.price_guarantee}
          placeholder={t("offersPage.filters.priceGuarantee")}
        />
        <SelectBox
          onChange={(value) => changeFilterHandle(value, "sort")}
          options={sortOptions(
            t("offersPage.filters.asc"),
            t("offersPage.filters.desc")
          )}
          value={filters.sort}
          placeholder={t("offersPage.filters.sort")}
        />
      </div>
      <FilterDisplay filters={filters} onChangeFilter={changeFilterHandle} />
    </div>
  );
}
