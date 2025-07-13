"use client";

import React from "react";
import { useLocale } from "next-intl";
import { useState } from "react";

import { filterOffers } from "../../lib/filters";
import { FiltersOffers, Offer, Provider } from "@/types";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import Filters from "../Filters/Filters";
import Offers from "../Offers/Offers";
import { initFilters } from "../../constants";
import NoResults from "../NoResults/NoResults";

type Props = {
  offers: Offer[];
  providers: Provider[];
};

export default function OffersWrapper({ offers, providers }: Props) {
  const locale = useLocale();
  const [offersFiltred, setOffersFiltred] = useState(offers);
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersOffers>(initFilters);

  const onChangeFilter = (filtersChoosen: FiltersOffers) => {
    setFilters(filtersChoosen);
    setOffersFiltred(filterOffers(offers, filtersChoosen, locale));
  };

  return (
    <div className="container max-w-5xl mx-auto py-8 px-4">
      <div className="flex justify-end lg:hidden mb-4">
        <AdjustmentsHorizontalIcon
          aria-hidden="true"
          className="size-6 text-black cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={`
          ${open ? "opacity-100" : "max-h-0 opacity-0"} 
          mb-5 lg:opacity-100 lg:max-h-full
        `}
      >
        <Filters
          offers={offers}
          providers={providers}
          onChangeFilter={onChangeFilter}
          value={filters}
        />
      </div>
      {offersFiltred.length === 0 ? (
        <NoResults />
      ) : (
        <Offers offers={offersFiltred} providers={providers} />
      )}
    </div>
  );
}
