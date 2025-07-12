"use client";

import { useLocale } from "next-intl";
import { useState } from "react";

import { filterOffers } from "@/lib/filters";
import { FiltersOffers, Offer, Provider } from "@/types";
import Filters from "../Filters/Filters";
import Offers from "../Offers/Offers";
import { initFilters } from "@/constants";
import NoResults from "../NoResults/NoResults";

type Props = {
  offers: Offer[];
  providers: Provider[];
};

export default function OffersWrapper({ offers, providers }: Props) {
  const locale = useLocale();
  const [offersFiltred, setOffersFiltred] = useState(offers);
  const [filters, setFilters] = useState<FiltersOffers>(initFilters);

  const onChangeFilter = (filtersChoosen: FiltersOffers) => {
    setFilters(filtersChoosen);
    setOffersFiltred(filterOffers(offers, filtersChoosen, locale));
  };

  return (
    <div className="container max-w-5xl mx-auto py-16 px-4">
      <Filters
        offers={offers}
        providers={providers}
        onChangeFilter={onChangeFilter}
        value={filters}
      />
      {offersFiltred.length === 0 ? (
        <NoResults />
      ) : (
        <Offers offers={offersFiltred} providers={providers} />
      )}
    </div>
  );
}
