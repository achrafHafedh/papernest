"use client";

import OfferCard from "@/components/Offer/Offer";
import { filterOffers } from "@/lib/filters";
import { FiltersOffers, Offer, Provider } from "@/types";
import { useLocale } from "next-intl";
import { useState } from "react";
import Filters from "../Filters/Filters";

type Props = {
  offers: Offer[];
  providers: Provider[];
};

export default function Offers({ offers, providers }: Props) {
  const locale = useLocale();
  const [offersFiltred, setOffersFiltred] = useState(offers);
  const [filters, setFilters] = useState<FiltersOffers>({
    contract_duration: null,
    energy_type: null,
    price_guarantee: null,
    provider: null,
    sort: null,
  });

  const findProvider = (offer: Offer): Provider =>
    providers.find((provider: Provider) => offer.provider_id === provider.id)!;

  const onChangerFilter = (filtersChoosen: FiltersOffers) => {
    setFilters(filtersChoosen);
    setOffersFiltred(filterOffers(offers, filtersChoosen, locale));
  };

  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <Filters
        offers={offers}
        providers={providers}
        onChangerFilter={onChangerFilter}
        value={filters}
      />
      <div className="mt-10">
        {offersFiltred.map((offer: Offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            provider={findProvider(offer)}
          />
        ))}
      </div>
    </div>
  );
}
