export type SelectOption = {
  value: string;
  label: string;
  src?: string;
};

export type SelectBoxProps = {
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
  label?: string;
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
