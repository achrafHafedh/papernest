"use client";

import React from "react";
import { useCallback, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { FiltersOffers, Offer, Provider, SelectOption } from "@/types";
import {
  extractFiltersByCountry,
  mapProvidersToOptions,
} from "../../lib/filters";
import { sortOptions } from "../../constants";
import SelectBox from "../SelectBox/SelectBox";
import FilterDisplay from "../FilterDisplay/FilterDisplay";

type Props = {
  offers: Offer[];
  providers: Provider[];
  onChangeFilter: (value: FiltersOffers) => void;
  value: FiltersOffers;
};

export default function Filters({
  offers,
  providers,
  onChangeFilter,
  value,
}: Props) {
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

  const filterConfigs = [
    {
      key: "provider",
      options: providersOptions,
      placeholder: t("offersPage.filters.provider"),
      value: filters.provider,
    },
    {
      key: "contract_duration",
      options: contract_duration,
      placeholder: t("offersPage.filters.contractDuration"),
      value: filters.contract_duration,
    },
    {
      key: "energy_type",
      options: energy_type,
      placeholder: t("offersPage.filters.energyType"),
      value: filters.energy_type,
    },
    {
      key: "price_guarantee",
      options: price_guarantee,
      placeholder: t("offersPage.filters.priceGuarantee"),
      value: filters.price_guarantee,
    },
    {
      key: "sort",
      options: sortOptions(
        t("offersPage.filters.asc"),
        t("offersPage.filters.desc")
      ),
      placeholder: t("offersPage.filters.sort"),
      value: filters.sort,
    },
  ];

  return (
    <div>
      <ul className="grid lg:grid-cols-5 lg:gap-3">
        {filterConfigs.map(({ key, options, placeholder, value }) => (
          <li key={key}>
            <SelectBox
              onChange={(value) => changeFilterHandle(value, key)}
              options={options}
              value={value}
              placeholder={placeholder}
            />
          </li>
        ))}
      </ul>
      <FilterDisplay filters={filters} onChangeFilter={changeFilterHandle} />
    </div>
  );
}
