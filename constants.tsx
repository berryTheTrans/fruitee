
import { FruitData } from './types';

export const FRUITS: FruitData[] = [
  {
    id: 'apple',
    name: 'Apple',
    scientificName: 'Malus domestica',
    alternativeNames: ['Pomme', 'Apfel', 'Manzana'],
    description: 'A sweet, crunchy fruit grown globally in temperate climates.',
    color: 'Red',
    sugarLevel: 'Medium',
    climate: 'Temperate',
    continents: ['North America', 'Europe', 'Asia'],
    benefits: [
      { title: 'Heart Health', description: 'Rich in soluble fiber which helps lower cholesterol.', icon: '❤️' },
      { title: 'Digestion', description: 'High fiber content promotes healthy gut movement.', icon: '🍎' }
    ],
    nutrients: [
      { label: 'Vitamin C', value: '14', unit: '%' },
      { label: 'Fiber', value: '4.5', unit: 'g' }
    ],
    stats: {
      consumption: [
        { country: 'China', amount: 45 },
        { country: 'USA', amount: 15 },
        { country: 'Turkey', amount: 5 }
      ],
      trade: {
        exporters: [{ country: 'China', value: 1200 }, { country: 'USA', value: 900 }],
        importers: [{ country: 'Germany', value: 500 }, { country: 'UK', value: 400 }]
      }
    },
    funFacts: ['Apples float in water because they are 25% air.', 'There are over 7,500 varieties of apples.'],
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🍎'
  },
  {
    id: 'banana',
    name: 'Banana',
    scientificName: 'Musa acuminata',
    alternativeNames: ['Plátano', 'Banane'],
    description: 'Technically a berry, bananas are the world\'s most exported fruit.',
    color: 'Yellow',
    sugarLevel: 'High',
    climate: 'Tropical',
    continents: ['South America', 'Africa', 'Asia'],
    benefits: [
      { title: 'Energy Boost', description: 'High in potassium and carbohydrates for immediate energy.', icon: '⚡' },
      { title: 'Muscle Health', description: 'Helps prevent cramps and supports muscle function.', icon: '💪' }
    ],
    nutrients: [
      { label: 'Potassium', value: '422', unit: 'mg' },
      { label: 'Vitamin B6', value: '33', unit: '%' }
    ],
    stats: {
      consumption: [
        { country: 'India', amount: 30 },
        { country: 'China', amount: 12 },
        { country: 'Philippines', amount: 6 }
      ],
      trade: {
        exporters: [{ country: 'Ecuador', value: 3500 }, { country: 'Philippines', value: 2000 }],
        importers: [{ country: 'USA', value: 2500 }, { country: 'Belgium', value: 1000 }]
      }
    },
    funFacts: ['Bananas are naturally radioactive due to potassium-40.', 'The banana plant is actually a giant herb.'],
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ad9902d7364a?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🍌'
  },
  {
    id: 'durian',
    name: 'Durian',
    scientificName: 'Durio zibethinus',
    alternativeNames: ['King of Fruits'],
    description: 'Known for its formidable thorn-covered husk and distinctive, potent aroma.',
    color: 'Green',
    sugarLevel: 'High',
    climate: 'Tropical',
    continents: ['Asia'],
    benefits: [
      { title: 'Blood Pressure', description: 'High potassium helps regulate blood pressure.', icon: '🩸' },
      { title: 'Digestion', description: 'Rich in dietary fiber for gut health.', icon: '🦴' }
    ],
    nutrients: [
      { label: 'Potassium', value: '436', unit: 'mg' },
      { label: 'Vitamin C', value: '33', unit: '%' }
    ],
    stats: {
      consumption: [
        { country: 'Thailand', amount: 25 },
        { country: 'Malaysia', amount: 20 },
        { country: 'China', amount: 10 }
      ],
      trade: {
        exporters: [{ country: 'Thailand', value: 2100 }, { country: 'Vietnam', value: 500 }],
        importers: [{ country: 'China', value: 2300 }, { country: 'Singapore', value: 150 }]
      }
    },
    funFacts: ['Durian is banned on many public transport systems in SE Asia.', 'There are about 30 recognized species of Durio.'],
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🍈'
  },
  {
    id: 'rambutan',
    name: 'Rambutan',
    scientificName: 'Nephelium lappaceum',
    alternativeNames: ['Hairy Cherry'],
    description: 'A tropical fruit native to Southeast Asia, famous for its hairy exterior.',
    color: 'Red',
    sugarLevel: 'Medium',
    climate: 'Tropical',
    continents: ['Asia', 'Africa'],
    benefits: [
      { title: 'Skin Care', description: 'The high water content and antioxidants keep skin glowing.', icon: '✨' },
      { title: 'Weight Management', description: 'Fiber-rich and low calorie for satiety.', icon: '⚖️' }
    ],
    nutrients: [
      { label: 'Vitamin C', value: '40', unit: '%' },
      { label: 'Copper', value: '11', unit: '%' }
    ],
    stats: {
      consumption: [
        { country: 'Indonesia', amount: 5 },
        { country: 'Thailand', amount: 4 },
        { country: 'Vietnam', amount: 3 }
      ],
      trade: {
        exporters: [{ country: 'Thailand', value: 120 }, { country: 'Indonesia', value: 90 }],
        importers: [{ country: 'China', value: 80 }, { country: 'USA', value: 30 }]
      }
    },
    funFacts: ['The name comes from the Malay word "rambut", which means hair.', 'The seeds are bitter and narcotic if eaten raw.'],
    imageUrl: 'https://images.unsplash.com/photo-1541432901912-a392e2e60074?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🏮'
  },
  {
    id: 'mangosteen',
    name: 'Mangosteen',
    scientificName: 'Garcinia mangostana',
    alternativeNames: ['Queen of Fruits'],
    description: 'A tropical evergreen tree with sweet, tangy, and juicy fibrous fruit.',
    color: 'Purple',
    sugarLevel: 'Medium',
    climate: 'Tropical',
    continents: ['Asia'],
    benefits: [
      { title: 'Anti-Inflammatory', description: 'Rich in xanthones, which have powerful anti-inflammatory effects.', icon: '🛡️' },
      { title: 'Heart Health', description: 'Helps maintain healthy blood flow and cholesterol.', icon: '❤️' }
    ],
    nutrients: [
      { label: 'Fiber', value: '5', unit: 'g' },
      { label: 'Manganese', value: '5', unit: '%' }
    ],
    stats: {
      consumption: [
        { country: 'Thailand', amount: 12 },
        { country: 'Vietnam', amount: 8 },
        { country: 'Indonesia', amount: 7 }
      ],
      trade: {
        exporters: [{ country: 'Thailand', value: 450 }, { country: 'Indonesia', value: 200 }],
        importers: [{ country: 'China', value: 500 }, { country: 'Vietnam', value: 100 }]
      }
    },
    funFacts: ['Legend says Queen Victoria offered a reward to anyone who could bring her a fresh mangosteen.', 'The fruit section inside usually mirrors the number of petals on the bottom.'],
    imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🟣'
  },
  {
    id: 'dragonfruit',
    name: 'Dragon Fruit',
    scientificName: 'Selenicereus undatus',
    alternativeNames: ['Pitaya'],
    description: 'A vibrant fruit from climbing cacti, known for its speckled white or red flesh.',
    color: 'Pink',
    sugarLevel: 'Low',
    climate: 'Tropical',
    continents: ['South America', 'Asia'],
    benefits: [
      { title: 'Iron Level', description: 'One of the few fruits containing significant iron.', icon: '🩸' },
      { title: 'Magnesium', description: 'Supports bone health and enzyme function.', icon: '🦴' }
    ],
    nutrients: [
      { label: 'Iron', value: '8', unit: '%' },
      { label: 'Fiber', value: '7', unit: 'g' }
    ],
    stats: {
      consumption: [
        { country: 'Vietnam', amount: 15 },
        { country: 'China', amount: 10 },
        { country: 'Thailand', amount: 5 }
      ],
      trade: {
        exporters: [{ country: 'Vietnam', value: 1200 }, { country: 'Ecuador', value: 300 }],
        importers: [{ country: 'China', value: 800 }, { country: 'USA', value: 150 }]
      }
    },
    funFacts: ['Dragon fruit plants are actually a type of cactus.', 'The flowers bloom only for one night and are pollinated by bats or moths.'],
    imageUrl: 'https://images.unsplash.com/photo-1527325672228-79505ce63906?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🌵'
  },
  {
    id: 'lychee',
    name: 'Lychee',
    scientificName: 'Litchi chinensis',
    alternativeNames: ['Litchi'],
    description: 'A sweet, floral fruit with a rough pink-red skin and translucent white flesh.',
    color: 'Red',
    sugarLevel: 'High',
    climate: 'Subtropical',
    continents: ['Asia'],
    benefits: [
      { title: 'Liver Health', description: 'Research suggests it may help protect liver cells.', icon: '🛡️' },
      { title: 'Vitamin C', description: 'Supports immune system and skin radiance.', icon: '✨' }
    ],
    nutrients: [
      { label: 'Vitamin C', value: '119', unit: '%' },
      { label: 'Copper', value: '10', unit: '%' }
    ],
    stats: {
      consumption: [
        { country: 'China', amount: 25 },
        { country: 'India', amount: 8 },
        { country: 'Vietnam', amount: 5 }
      ],
      trade: {
        exporters: [{ country: 'China', value: 800 }, { country: 'Vietnam', value: 300 }],
        importers: [{ country: 'USA', value: 150 }, { country: 'France', value: 90 }]
      }
    },
    funFacts: ['Lychees have been cultivated in China for over 2,000 years.', 'They represent love and romance in Chinese culture.'],
    imageUrl: 'https://images.unsplash.com/photo-1601050638917-3f943b7931bd?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🍒'
  },
  {
    id: 'jackfruit',
    name: 'Jackfruit',
    scientificName: 'Artocarpus heterophyllus',
    alternativeNames: ['Nangka'],
    description: 'The largest fruit to grow on a tree, famous for its meat-like texture when unripe.',
    color: 'Green',
    sugarLevel: 'Medium',
    climate: 'Tropical',
    continents: ['Asia', 'Africa', 'South America'],
    benefits: [
      { title: 'Muscle Strength', description: 'Contains significant amounts of plant-based protein.', icon: '💪' },
      { title: 'Energy Storage', description: 'Provides complex carbs for sustained energy.', icon: '🔋' }
    ],
    nutrients: [
      { label: 'Protein', value: '3', unit: 'g' },
      { label: 'Vitamin B6', value: '16', unit: '%' }
    ],
    stats: {
      consumption: [
        { country: 'India', amount: 35 },
        { country: 'Bangladesh', amount: 25 },
        { country: 'Vietnam', amount: 15 }
      ],
      trade: {
        exporters: [{ country: 'Vietnam', value: 150 }, { country: 'Thailand', value: 100 }],
        importers: [{ country: 'USA', value: 60 }, { country: 'UK', value: 40 }]
      }
    },
    funFacts: ['A single jackfruit can weigh up to 120 pounds (55 kg).', 'The seeds are also edible and taste like chestnuts when boiled.'],
    imageUrl: 'https://images.unsplash.com/photo-1596701062351-be5f8a4bf073?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🌳'
  },
  {
    id: 'passionfruit',
    name: 'Passion Fruit',
    scientificName: 'Passiflora edulis',
    alternativeNames: ['Maracuya'],
    description: 'A round, purple or yellow fruit with a tart, highly aromatic pulpy center.',
    color: 'Purple',
    sugarLevel: 'Medium',
    climate: 'Tropical',
    continents: ['South America', 'Oceania', 'Africa'],
    benefits: [
      { title: 'Sleep Aid', description: 'Harmala alkaloids may help reduce insomnia.', icon: '🌙' },
      { title: 'Anxiety Relief', description: 'Natural compounds help soothe the nervous system.', icon: '🧘' }
    ],
    nutrients: [
      { label: 'Fiber', value: '25', unit: 'g' },
      { label: 'Vitamin A', value: '25', unit: '%' }
    ],
    stats: {
      consumption: [
        { country: 'Brazil', amount: 10 },
        { country: 'Colombia', amount: 6 },
        { country: 'Peru', amount: 5 }
      ],
      trade: {
        exporters: [{ country: 'Vietnam', value: 180 }, { country: 'Ecuador', value: 120 }],
        importers: [{ country: 'EU', value: 200 }, { country: 'USA', value: 80 }]
      }
    },
    funFacts: ['The "Passion" name comes from missionaries who saw religious symbolism in the flower.', 'The skin wrinkles as the fruit gets sweeter.'],
    imageUrl: 'https://images.unsplash.com/photo-1534347514332-9014352f785b?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🟣'
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate',
    scientificName: 'Punica granatum',
    alternativeNames: ['Granada'],
    description: 'A fruit filled with hundreds of juicy ruby-like seeds called arils.',
    color: 'Red',
    sugarLevel: 'High',
    climate: 'Subtropical',
    continents: ['Asia', 'Africa', 'Europe'],
    benefits: [
      { title: 'Anti-Aging', description: 'Rich in punicalagins that protect skin cells.', icon: '⏳' },
      { title: 'Heart Power', description: 'Helps prevent plaque buildup in arteries.', icon: '❤️' }
    ],
    nutrients: [
      { label: 'Fiber', value: '7', unit: 'g' },
      { label: 'Vitamin K', value: '36', unit: '%' }
    ],
    stats: {
      consumption: [
        { country: 'Iran', amount: 15 },
        { country: 'India', amount: 12 },
        { country: 'Turkey', amount: 8 }
      ],
      trade: {
        exporters: [{ country: 'India', value: 400 }, { country: 'Turkey', value: 300 }],
        importers: [{ country: 'Russia', value: 150 }, { country: 'Germany', value: 120 }]
      }
    },
    funFacts: ['The pomegranate is often associated with fertility and eternal life.', 'A single pomegranate can contain between 200 and 1,400 seeds.'],
    imageUrl: 'https://images.unsplash.com/photo-1615485240384-58bc3412493d?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🏮'
  },
  {
    id: 'kiwi',
    name: 'Kiwi',
    scientificName: 'Actinidia deliciosa',
    alternativeNames: ['Chinese Gooseberry'],
    description: 'A fuzzy brown fruit with vibrant green flesh and tiny black seeds.',
    color: 'Brown',
    sugarLevel: 'Medium',
    climate: 'Temperate',
    continents: ['Oceania', 'Asia', 'Europe'],
    benefits: [
      { title: 'Sleep Quality', description: 'Serotonin in kiwi helps improve sleep duration.', icon: '💤' },
      { title: 'Digestive Comfort', description: 'Actinidin enzyme aids in protein digestion.', icon: '🥝' }
    ],
    nutrients: [
      { label: 'Vitamin C', value: '112', unit: '%' },
      { label: 'Fiber', value: '2.1', unit: 'g' }
    ],
    stats: {
      consumption: [
        { country: 'New Zealand', amount: 8 },
        { country: 'Italy', amount: 5 },
        { country: 'Chile', amount: 3 }
      ],
      trade: {
        exporters: [{ country: 'New Zealand', value: 2000 }, { country: 'Italy', value: 600 }],
        importers: [{ country: 'China', value: 500 }, { country: 'USA', value: 400 }]
      }
    },
    funFacts: ['Kiwis were renamed after New Zealand\'s national bird because they look alike.', 'The skin is perfectly edible and contains high fiber.'],
    imageUrl: 'https://images.unsplash.com/photo-1585059895317-5750fc684f2c?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🥝'
  },
  {
    id: 'avocado',
    name: 'Avocado',
    scientificName: 'Persea americana',
    alternativeNames: ['Aguacate', 'Alligator Pear'],
    description: 'A creamy, high-fat fruit beloved for its smooth texture and health benefits.',
    color: 'Green',
    sugarLevel: 'Low',
    climate: 'Subtropical',
    continents: ['North America', 'South America'],
    benefits: [
      { title: 'Healthy Fats', description: 'High in monounsaturated fats for brain health.', icon: '🧠' },
      { title: 'Nutrient Booster', description: 'Helps absorb fat-soluble vitamins from other foods.', icon: '🔋' }
    ],
    nutrients: [
      { label: 'Fiber', value: '10', unit: 'g' },
      { label: 'Potassium', value: '485', unit: 'mg' }
    ],
    stats: {
      consumption: [
        { country: 'Mexico', amount: 10 },
        { country: 'USA', amount: 4 },
        { country: 'Chile', amount: 3 }
      ],
      trade: {
        exporters: [{ country: 'Mexico', value: 2800 }, { country: 'Peru', value: 900 }],
        importers: [{ country: 'USA', value: 2400 }, { country: 'Netherlands', value: 500 }]
      }
    },
    funFacts: ['Avocados ripen faster when stored with a banana or apple.', 'They are technically a berry with a single giant seed.'],
    imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🥑'
  },
  {
    id: 'persimmon',
    name: 'Persimmon',
    scientificName: 'Diospyros kaki',
    alternativeNames: ['Kaki'],
    description: 'An orange, tomato-like fruit that is honey-sweet when fully ripe.',
    color: 'Orange',
    sugarLevel: 'High',
    climate: 'Temperate',
    continents: ['Asia', 'Europe', 'North America'],
    benefits: [
      { title: 'Vision', description: 'Extremely high in Vitamin A for retina health.', icon: '👁️' },
      { title: 'Metabolism', description: 'B-complex vitamins support metabolic functions.', icon: '⚙️' }
    ],
    nutrients: [
      { label: 'Vitamin A', value: '55', unit: '%' },
      { label: 'Vitamin C', value: '21', unit: '%' }
    ],
    stats: {
      consumption: [
        { country: 'China', amount: 15 },
        { country: 'Japan', amount: 10 },
        { country: 'Korea', amount: 8 }
      ],
      trade: {
        exporters: [{ country: 'China', value: 400 }, { country: 'Spain', value: 300 }],
        importers: [{ country: 'Russia', value: 200 }, { country: 'Germany', value: 80 }]
      }
    },
    funFacts: ['Unripe persimmons are extremely astringent and "furry" on the tongue.', 'In Japan, they are often dried to make Hoshigaki.'],
    imageUrl: 'https://images.unsplash.com/photo-1604169720461-9426f4977458?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🟠'
  },
  {
    id: 'guava',
    name: 'Guava',
    scientificName: 'Psidium guajava',
    alternativeNames: ['Guayaba'],
    description: 'A tropical fruit with a unique, sweet-musky flavor and pink or white flesh.',
    color: 'Green',
    sugarLevel: 'Medium',
    climate: 'Tropical',
    continents: ['Asia', 'South America', 'Africa'],
    benefits: [
      { title: 'Super Immunity', description: 'Contains 4x more Vitamin C than an orange.', icon: '🛡️' },
      { title: 'Blood Sugar', description: 'Low glycemic index helps manage glucose.', icon: '🩸' }
    ],
    nutrients: [
      { label: 'Vitamin C', value: '377', unit: '%' },
      { label: 'Lycopene', value: '5204', unit: 'mcg' }
    ],
    stats: {
      consumption: [
        { country: 'India', amount: 20 },
        { country: 'Mexico', amount: 12 },
        { country: 'Brazil', amount: 10 }
      ],
      trade: {
        exporters: [{ country: 'India', value: 200 }, { country: 'Mexico', value: 180 }],
        importers: [{ country: 'USA', value: 120 }, { country: 'UAE', value: 50 }]
      }
    },
    funFacts: ['Guava leaves are used as a traditional tea for digestion.', 'The entire fruit, seeds and all, is edible.'],
    imageUrl: 'https://images.unsplash.com/photo-1536592282740-ad1eb44d7023?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '🍏'
  },
  {
    id: 'starfruit',
    name: 'Star Fruit',
    scientificName: 'Averrhoa carambola',
    alternativeNames: ['Carambola'],
    description: 'A five-ridged fruit that looks like a perfect star when sliced horizontally.',
    color: 'Yellow',
    sugarLevel: 'Low',
    climate: 'Tropical',
    continents: ['Asia', 'South America'],
    benefits: [
      { title: 'Anti-Bacterial', description: 'Compounds in the fruit help fight infections.', icon: '🦠' },
      { title: 'Fiber Power', description: 'Supports smooth digestion and weight loss.', icon: '📉' }
    ],
    nutrients: [
      { label: 'Vitamin C', value: '52', unit: '%' },
      { label: 'Fiber', value: '2.8', unit: 'g' }
    ],
    stats: {
      consumption: [
        { country: 'Malaysia', amount: 4 },
        { country: 'Taiwan', amount: 3 },
        { country: 'Brazil', amount: 2 }
      ],
      trade: {
        exporters: [{ country: 'Malaysia', value: 80 }, { country: 'Taiwan', value: 60 }],
        importers: [{ country: 'USA', value: 40 }, { country: 'EU', value: 30 }]
      }
    },
    funFacts: ['Starfruit contains oxalic acid and should be avoided by those with kidney issues.', 'The skin is thin, waxy, and entirely edible.'],
    imageUrl: 'https://images.unsplash.com/photo-1610413000969-586737f1e6f6?auto=format&fit=crop&q=80&w=800',
    cartoonUrl: '⭐'
  }
];

export const CONTINENTS = ['All', 'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];
export const CLIMATES = ['All', 'Tropical', 'Temperate', 'Subtropical', 'Arid'];
export const SUGAR_LEVELS = ['All', 'Low', 'Medium', 'High'];
export const COLORS = ['All', 'Red', 'Yellow', 'Orange', 'Blue', 'Pink', 'Green', 'Purple', 'Brown'];
