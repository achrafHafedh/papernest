import OffersWrapper from "@/components/OffersWrapper/OffersWrapper";
import { getOffers } from "@/lib/getOffers";
import { getProviders } from "@/lib/getProviders";
import { Offer, Provider } from "@/types";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateStaticParams() {
  const locales = ["fr", "es", "it"];
  const countries = ["fr", "es", "it"];
  return locales.flatMap((locale) =>
    countries.map((country) => ({ locale, country }))
  );
}

export default async function OffersPage({ params }: Props) {
  const { country } = await params;
  const offers: Offer[] = await getOffers(country);
  const providers: Provider[] = await getProviders(country);

  return <OffersWrapper offers={offers} providers={providers} />;
}
