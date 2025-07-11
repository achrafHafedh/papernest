import { getOffers } from "@/lib/getOffers";
import { getProviders } from "@/lib/getProviders";
import OfferCard from "@/components/Offer/Offer";
import { Offer, Provider } from "@/types";

type Props = {
  params: Promise<{ country: string }>;
};

export default async function Page({ params }: Props) {
  const { country } = await params;

  const offers: Offer[] = await getOffers(country);
  const providers: Provider[] = await getProviders(country);

  const findProvider = (offer: Offer): Provider =>
    providers.find((provider) => offer.provider_id === provider.id)!;

  return (
    <div>
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
