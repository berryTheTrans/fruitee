
import { FruityViceData, FruitData } from '../types';

const CORS_PROXY = "https://corsproxy.io/?";
const API_URL = "https://www.fruityvice.com/api/fruit/all";

export async function fetchAllFruits(): Promise<FruitData[]> {
  try {
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(API_URL)}`);
    if (!response.ok) throw new Error("Failed to fetch fruits");
    const data: FruityViceData[] = await response.json();

    return data.map(item => ({
      id: String(item.id),
      name: item.name,
      scientificName: `${item.genus} ${item.name.toLowerCase()}`,
      alternativeNames: [item.family, item.order],
      description: `A delicious fruit from the ${item.family} family, genus ${item.genus}.`,
      color: 'Mixed', // Default, to be refined if needed
      sugarLevel: item.nutritions.sugar > 15 ? 'High' : item.nutritions.sugar > 7 ? 'Medium' : 'Low',
      climate: 'Tropical', // Default
      continents: ['Global'],
      benefits: [
        { title: 'Nutritional Balance', description: `Provides ${item.nutritions.calories} calories per serving.`, icon: '🍎' }
      ],
      nutrients: [
        { label: 'Sugar', value: String(item.nutritions.sugar), unit: 'g' },
        { label: 'Protein', value: String(item.nutritions.protein), unit: 'g' },
        { label: 'Fat', value: String(item.nutritions.fat), unit: 'g' },
        { label: 'Carbs', value: String(item.nutritions.carbohydrates), unit: 'g' }
      ],
      stats: {
        consumption: [
          { country: 'Global', amount: item.nutritions.calories }
        ],
        trade: {
          exporters: [{ country: 'Variety', value: 100 }],
          importers: [{ country: 'Global', value: 100 }]
        }
      },
      funFacts: [`Part of the ${item.order} order.`],
      imageUrl: `https://loremflickr.com/800/600/${item.name},fruit`,
      cartoonUrl: '🍎', // Default fallback
      apiData: item
    }));
  } catch (error) {
    console.error("Fruityvice fetch error:", error);
    return [];
  }
}
