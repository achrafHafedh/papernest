import OffersWrapper from "@/components/OffersWrapper/OffersWrapper";
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

  return <OffersWrapper offers={offers} providers={providers} />;
}
