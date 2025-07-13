export const offerMock = {
  id: "offer_fr_001_01",
  slug: "voltaire-energie-classique",
  name: "Voltaire Classique",
  description: {
    fr: "Offre d'électricité standard avec prix fixe pendant 2 ans",
    it: "Offerta elettrica standard con prezzo fisso per 2 anni",
    es: "Oferta de electricidad estándar con precio fijo durante 2 años",
  },
  provider_id: "fr_001",
  consumption_pricing: 0.1845,
  subscription_cost: 120.0,
  metadata: {
    energy_type: {
      fr: "mixte",
      it: "mista",
      es: "mixta",
    },
    contract_duration: {
      fr: "24 mois",
      it: "24 mesi",
      es: "24 meses",
    },
    price_guarantee: {
      fr: "fixe",
      it: "fissa",
      es: "fija",
    },
  },
  estimation: {
    year: 73.8,
    month: 6.15,
  },
};

export const providerMock = {
  id: "fr_001",
  slug: "voltaire-energie",
  display_name: "Voltaire Énergie",
  country: "france",
};

export const filtersMock = {
  provider: {
    label: "Voltaire Énergie",
    value: "fr_001",
  },
  contract_duration: {
    label: "24 mois",
    value: "24 mois",
  },
  energy_type: {
    label: "mixte",
    value: "mixte",
  },
  price_guarantee: {
    label: "fixe",
    value: "fixe",
  },
  sort: {
    label: "Croissant",
    value: "asc",
  },
};

export const offersMock = [
  {
    id: "offer_fr_001_01",
    slug: "voltaire-energie-classique",
    name: "Voltaire Classique",
    description: {
      fr: "Offre d'électricité standard avec prix fixe pendant 2 ans",
      it: "Offerta elettrica standard con prezzo fisso per 2 anni",
      es: "Oferta de electricidad estándar con precio fijo durante 2 años",
    },
    provider_id: "fr_001",
    consumption_pricing: 0.1845,
    subscription_cost: 120.0,
    metadata: {
      energy_type: {
        fr: "mixte",
        it: "mista",
        es: "mixta",
      },
      contract_duration: {
        fr: "24 mois",
        it: "24 mesi",
        es: "24 meses",
      },
      price_guarantee: {
        fr: "fixe",
        it: "fissa",
        es: "fija",
      },
    },
    estimation: {
      year: 73.8,
      month: 6.15,
    },
  },
  {
    id: "offer_fr_001_02",
    slug: "voltaire-energie-verte",
    name: "Voltaire Vert",
    description: {
      fr: "Électricité 100% verte d'origine renouvelable",
      it: "Elettricità 100% verde da fonti rinnovabili",
      es: "Electricidad 100% verde de origen renovable",
    },
    provider_id: "fr_002",
    consumption_pricing: 0.1975,
    subscription_cost: 135.0,
    metadata: {
      energy_type: {
        fr: "verte",
        it: "verde",
        es: "verde",
      },
      contract_duration: {
        fr: "36 mois",
        it: "36 mesi",
        es: "36 meses",
      },
      price_guarantee: {
        fr: "fixe",
        it: "fissa",
        es: "fija",
      },
    },
    estimation: {
      year: 79.0,
      month: 6.58,
    },
  },
  {
    id: "offer_fr_001_03",
    slug: "voltaire-energie-flexible",
    name: "Voltaire Flexible",
    description: {
      fr: "Tarif indexé sur le marché, sans engagement",
      it: "Tariffa indicizzata al mercato, senza impegno",
      es: "Tarifa indexada al mercado, sin compromiso",
    },
    provider_id: "fr_003",
    consumption_pricing: 0.172,
    subscription_cost: 95.0,
    metadata: {
      energy_type: {
        fr: "mixte",
        it: "mista",
        es: "mixta",
      },
      contract_duration: {
        fr: "sans engagement",
        it: "nessun impegno",
        es: "sin compromiso",
      },
      price_guarantee: {
        fr: "indexée",
        it: "indicizzata",
        es: "indexada",
      },
    },
    estimation: {
      year: 68.8,
      month: 5.73,
    },
  },
];

export const providersMock = [
  {
    id: "fr_001",
    slug: "voltaire-energie",
    display_name: "Voltaire Énergie",
    country: "france",
  },
  {
    id: "fr_002",
    slug: "lumiere-verte",
    display_name: "Lumière Verte",
    country: "france",
  },
  {
    id: "fr_003",
    slug: "energie-bleue",
    display_name: "Énergie Bleue",
    country: "france",
  },
];
