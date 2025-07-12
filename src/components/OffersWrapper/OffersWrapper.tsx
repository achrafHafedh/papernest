"use client";

import { useLocale } from "next-intl";
import { useState } from "react";

import { filterOffers } from "@/lib/filters";
import { FiltersOffers, Offer, Provider } from "@/types";
import Filters from "../Filters/Filters";
import Offers from "../Offers/Offers";

type Props = {
  offers: Offer[];
  providers: Provider[];
};

export default function OffersWrapper({ offers, providers }: Props) {
  const locale = useLocale();
  const [offersFiltred, setOffersFiltred] = useState(offers);
  const [filters, setFilters] = useState<FiltersOffers>({
    contract_duration: null,
    energy_type: null,
    price_guarantee: null,
    provider: null,
    sort: null,
  });

  const onChangerFilter = (filtersChoosen: FiltersOffers) => {
    setFilters(filtersChoosen);
    setOffersFiltred(filterOffers(offers, filtersChoosen, locale));
  };

  return (
    <div className="container max-w-5xl mx-auto py-16 px-4">
      <Filters
        offers={offers}
        providers={providers}
        onChangerFilter={onChangerFilter}
        value={filters}
      />
      <Offers offers={offersFiltred} providers={providers} />
    </div>
  );
}
