
import React, { useState, useMemo, useEffect } from 'react';
import { CONTINENTS, CLIMATES, SUGAR_LEVELS, COLORS } from './constants';
import { FruitData, FilterState } from './types';
import FruitCard from './components/FruitCard';
import FruitDetails from './components/FruitDetails';
import { getDailyFruitChallenge } from './services/geminiService';
import { fetchAllFruits } from './services/fruityviceService';

const App: React.FC = () => {
  const [allFruits, setAllFruits] = useState<FruitData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    continent: 'All',
    benefit: 'All',
    color: 'All',
    sugarLevel: 'All',
    climate: 'All'
  });
  const [selectedFruit, setSelectedFruit] = useState<FruitData | null>(null);
  const [dailyChallenge, setDailyChallenge] = useState<{ fruitName: string; funFact: string; mission: string } | null>(null);
  const [isChallengeVisible, setIsChallengeVisible] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [fruits, challenge] = await Promise.all([
        fetchAllFruits(),
        getDailyFruitChallenge()
      ]);
      setAllFruits(fruits);
      setDailyChallenge(challenge);
      setLoading(false);
    }
    loadData();
  }, []);

  const filteredFruits = useMemo(() => {
    return allFruits.filter(fruit => {
      const matchesSearch = fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (fruit.apiData?.family.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            fruit.benefits.some(b => b.title.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesSugar = filters.sugarLevel === 'All' || fruit.sugarLevel === filters.sugarLevel;

      return matchesSearch && matchesSugar;
    });
  }, [allFruits, searchQuery, filters]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff9f0]">
      {/* Header & Hero Section */}
      <header className="bg-fruit-gradient pt-12 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-8xl animate-bounce">🍎</div>
          <div className="absolute bottom-10 right-10 text-8xl animate-pulse">🍌</div>
          <div className="absolute top-1/2 left-1/4 text-7xl rotate-12">🍍</div>
          <div className="absolute top-1/3 right-1/4 text-7xl -rotate-12">🍇</div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-md">
                Frutipeda
              </h1>
              <p className="text-white/90 text-xl font-medium max-w-lg leading-relaxed">
                The world's most interactive encyclopedia of nature's candy. Explore <span className="bg-white/20 px-2 rounded-lg">all fruits</span> in real-time.
              </p>
            </div>

            {isChallengeVisible && dailyChallenge && (
              <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 shadow-2xl max-w-sm relative animate-in slide-in-from-right duration-500">
                <button 
                  onClick={() => setIsChallengeVisible(false)}
                  className="absolute -top-2 -right-2 bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold"
                >
                  ×
                </button>
                <h3 className="text-pink-600 font-black text-xl mb-1">Daily Challenge! 🏆</h3>
                <p className="text-gray-800 font-bold mb-2">Today: {dailyChallenge.fruitName}</p>
                <p className="text-gray-600 text-sm italic mb-3">"{dailyChallenge.funFact}"</p>
                <div className="bg-pink-100 p-3 rounded-2xl text-pink-700 text-xs font-bold uppercase tracking-wider">
                  Mission: {dailyChallenge.mission}
                </div>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="mt-12 max-w-3xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search by name, family, or nutrient..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-8 py-6 rounded-[2rem] text-xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all text-gray-700 placeholder-gray-300"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-pink-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Bar */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-pink-100 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6 whitespace-nowrap">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Global Filter</span>
          </div>
          
          <select 
            value={filters.sugarLevel}
            onChange={(e) => handleFilterChange('sugarLevel', e.target.value)}
            className="bg-gray-50 border-none rounded-full px-4 py-2 text-sm font-bold text-gray-600 focus:ring-2 focus:ring-pink-200 outline-none hover:bg-pink-50 transition-colors"
          >
            {SUGAR_LEVELS.map(c => <option key={c} value={c}>🍬 {c === 'All' ? 'Sugar Level' : c + ' Sugar'}</option>)}
          </select>

          <div className="h-6 w-[1px] bg-gray-200"></div>

          <p className="text-sm font-bold text-pink-400">
            {filteredFruits.length} {filteredFruits.length === 1 ? 'Fruit' : 'Fruits'} Found
          </p>

          <button 
            onClick={() => {
              setFilters({ continent: 'All', benefit: 'All', color: 'All', sugarLevel: 'All', climate: 'All' });
              setSearchQuery('');
            }}
            className="text-gray-400 hover:text-pink-500 font-bold text-sm transition-colors"
          >
            Clear Search
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-500 border-t-transparent mb-4"></div>
            <p className="text-pink-500 font-bold animate-pulse text-xl">Loading the orchard...</p>
          </div>
        ) : filteredFruits.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFruits.map(fruit => (
              <FruitCard key={fruit.id} fruit={fruit} onClick={setSelectedFruit} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-8xl mb-6 grayscale">🥑</div>
            <h2 className="text-3xl font-black text-gray-800 mb-2">No Fruits in Sight!</h2>
            <p className="text-gray-500 max-w-md mx-auto">Try clearing your search or filters to see more delicious options.</p>
          </div>
        )}
      </main>

      {/* Selected Fruit Details Modal */}
      {selectedFruit && (
        <FruitDetails 
          fruit={selectedFruit} 
          onClose={() => setSelectedFruit(null)} 
        />
      )}
    </div>
  );
};

export default App;
