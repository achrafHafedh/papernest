import { use } from "react";
import { Offer } from "../../types";

export default function Offers({ offers }: { offers: Promise<Offer[]> }) {
  const allOffers = use(offers);
  console.log({ allOffers });
  return (
    <div>
      <h1>Liste des offres</h1>
    </div>
  );
}
