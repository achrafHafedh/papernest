import {
  FilterMetaData,
  Offer,
  Provider,
  SelectOption,
  FiltersOffers,
} from "@/types";

export const extractFiltersByCountry = (
  offers: Offer[],
  locale: string
): FilterMetaData => {
  const energyMap = new Map<string, SelectOption>();
  const contractMap = new Map<string, SelectOption>();
  const priceMap = new Map<string, SelectOption>();

  for (const offer of offers) {
    const { energy_type, contract_duration, price_guarantee } = offer.metadata;

    const energyValue = energy_type[locale];
    const contractValue = contract_duration[locale];
    const priceValue = price_guarantee[locale];

    if (energyValue) {
      energyMap.set(energyValue, {
        label: energyValue,
        value: energyValue,
      });
    }

    if (contractValue) {
      contractMap.set(contractValue, {
        label: contractValue,
        value: contractValue,
      });
    }

    if (priceValue) {
      priceMap.set(priceValue, {
        label: priceValue,
        value: priceValue,
      });
    }
  }

  return {
    energy_type: Array.from(energyMap.values()),
    contract_duration: Array.from(contractMap.values()),
    price_guarantee: Array.from(priceMap.values()),
  };
};

export function mapProvidersToOptions(providers: Provider[]): SelectOption[] {
  return providers.map((provider) => ({
    label: provider.display_name,
    value: provider.id,
  }));
}

export const filterOffers = (
  offers: Offer[],
  filters: FiltersOffers,
  locale: string
): Offer[] => {
  return offers.filter((offer) => {
    const meta = offer.metadata;

    const matchEnergy =
      !filters.energy_type ||
      meta.energy_type?.[locale] === filters.energy_type.value;

    const matchContract =
      !filters.contract_duration ||
      meta.contract_duration?.[locale] === filters.contract_duration.value;

    const matchPrice =
      !filters.price_guarantee ||
      meta.price_guarantee?.[locale] === filters.price_guarantee.value;

    const matchProvider =
      !filters.provider || offer.provider_id === filters.provider.value;

    return matchEnergy && matchContract && matchPrice && matchProvider;
  });
};
