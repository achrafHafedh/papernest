"use client";


import { useCallback, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { FiltersOffers, Offer, Provider, SelectOption } from "@/types";
import { extractFiltersByCountry, mapProvidersToOptions } from "@/lib/filters";
import { sortOptions } from "@/constants";
import SelectBox from "../SelectBox/SelectBox";

type Props = {
  offers: Offer[];
  providers: Provider[];
  onChangerFilter: (value: FiltersOffers) => void;
  value: FiltersOffers;
};

export default function Filters({
  offers,
  providers,
  onChangerFilter,
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

  const changeFilterHandler = useCallback(
    (value: SelectOption | null, key: string) => {
      const newFilters = {
        ...filters,
        [key]: value,
      };
      setFilter(newFilters);
      onChangerFilter(newFilters);
    },
    [filters, onChangerFilter]
  );

  return (
    <div className="">
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "provider")}
        options={providersOptions}
        value={filters.provider}
        placeholder={t("offersPage.filters.provider")}
        clearable={true}
      />
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "contract_duration")}
        options={contract_duration}
        value={filters.contract_duration}
        placeholder={t("offersPage.filters.contractDuration")}
        clearable={true}
      />
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "energy_type")}
        options={energy_type}
        value={filters.energy_type}
        placeholder={t("offersPage.filters.energyType")}
        clearable={true}
      />
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "price_guarantee")}
        options={price_guarantee}
        value={filters.price_guarantee}
        placeholder={t("offersPage.filters.priceGuarantee")}
        clearable={true}
      />
      <SelectBox
        onChange={(value) => changeFilterHandler(value, "sort")}
        options={sortOptions(
          t("offersPage.filters.asc"),
          t("offersPage.filters.desc")
        )}
        value={filters.sort}
        placeholder={t("offersPage.filters.sort")}
        clearable={true}
      />
    </div>
  );
}
