import Offers from "@/components/Offers/Offers";
import { getOffers } from "@/lib/getOffers";
import { getProviders } from "@/lib/getProviders";
import { Offer, Provider } from "@/types";

type Props = {
  params: Promise<{ country: string }>;
};

export default async function OffersPage({ params }: Props) {
  const { country } = await params;
  const offers: Offer[] = await getOffers(country);
  const providers: Provider[] = await getProviders(country);

  return <Offers offers={offers} providers={providers} />;
}
