
export interface FruitNutritions {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

export interface FruityViceData {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: FruitNutritions;
}

export interface FruitData {
  id: string;
  name: string;
  scientificName: string;
  alternativeNames: string[];
  description: string;
  color: string;
  sugarLevel: 'Low' | 'Medium' | 'High';
  climate: 'Tropical' | 'Temperate' | 'Subtropical' | 'Arid';
  continents: string[];
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  nutrients: {
    label: string;
    value: string;
    unit: string;
  }[];
  stats: {
    consumption: { country: string; amount: number }[];
    trade: {
      exporters: { country: string; value: number }[];
      importers: { country: string; value: number }[];
    };
  };
  funFacts: string[];
  imageUrl: string;
  cartoonUrl: string;
  apiData?: FruityViceData;
}

export type FilterState = {
  continent: string;
  benefit: string;
  color: string;
  sugarLevel: string;
  climate: string;
};

export enum ModalType {
  NONE = 'none',
  DETAILS = 'details',
  CHALLENGE = 'challenge',
  SEARCH = 'search'
}
