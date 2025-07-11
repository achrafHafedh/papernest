import { use } from "react";
import { Provider } from "../../types";

export default function Providers({
  providers,
}: {
  providers: Promise<Provider[]>;
}) {
  const allProviders = use(providers);
  console.log({ allProviders });
  return (
    <div>
      <h1>Liste des providers</h1>
    </div>
  );
}
