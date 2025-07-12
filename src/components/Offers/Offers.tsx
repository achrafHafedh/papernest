"use client";

import OfferCard from "@/components/Offer/Offer";
import { Offer, Provider } from "@/types";

type Props = {
  offers: Offer[];
  providers: Provider[];
};

export default function Offers({ offers, providers }: Props) {
  const findProvider = (offer: Offer): Provider =>
    providers.find((provider: Provider) => offer.provider_id === provider.id)!;

  return (
    <div className="mt-10">
      {offers.map((offer: Offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          provider={findProvider(offer)}
        />
      ))}
    </div>
  );
}
