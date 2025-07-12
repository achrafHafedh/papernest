export type SelectOption = {
  value: string;
  label: string;
  src?: string;
};

export type SelectBoxProps = {
  options: SelectOption[];
  value: SelectOption | null;
  onChange: (value: SelectOption | null) => void;
  placeholder?: string;
  clearable?: boolean;
};

export type EnergyOffer = {
  id: string;
  slug: string;
  name: string;
  description: string;
  provider_id: string;
  consumption_pricing: number;
  subscription_cost: number;
  metadata: {
    energy_type: string;
    contract_duration: string;
    price_guarantee: string;
  };
};

export type Provider = {
  id: string;
  slug: string;
  display_name: string;
  country: string;
};

export type Offer = {
  id: string;
  slug: string;
  name: string;
  description: {
    [key: string]: string;
  };
  provider_id: string;
  consumption_pricing: number;
  subscription_cost: number;
  metadata: {
    energy_type: Record<string, string>;
    contract_duration: Record<string, string>;
    price_guarantee: Record<string, string>;
  };
  estimation: {
    year: number;
    month: number;
  };
};

export type FilterMetaData = {
  energy_type: SelectOption[];
  contract_duration: SelectOption[];
  price_guarantee: SelectOption[];
};

export type FiltersOffers = {
  contract_duration: SelectOption | null;
  energy_type: SelectOption | null;
  price_guarantee: SelectOption | null;
  provider: SelectOption | null;
  sort: SelectOption | null;
};