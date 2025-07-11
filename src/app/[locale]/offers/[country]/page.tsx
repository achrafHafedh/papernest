import { Suspense } from "react";
import { getOffers } from "../../../../lib/getOffers";
import { getProviders } from "../../../../lib/getProviders";
import Offers from "../../../../components/Offers/Offers";
import Providers from "../../../../components/Providers/Providers";

type Props = {
  params: Promise<{ country: string }>;
};

export default async function Page({ params }: Props) {
  const { country } = await params;
  const offers = getOffers(country);
  const providers = getProviders(country);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Offers offers={offers} />
        <Providers providers={providers} />
      </Suspense>
    </>
  );
}
