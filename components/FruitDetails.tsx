
import React, { useState, useEffect } from 'react';
import { FruitData } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { getEnrichedFruitData } from '../services/geminiService';

interface FruitDetailsProps {
  fruit: FruitData;
  onClose: () => void;
}

const FruitDetails: React.FC<FruitDetailsProps> = ({ fruit, onClose }) => {
  const [enrichment, setEnrichment] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getEnrichedFruitData(fruit.name, fruit.apiData?.family || '').then(data => {
      setEnrichment(data);
      setLoading(false);
    });
  }, [fruit.name]);

  const CHART_COLORS = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F473B9'];

  const nutritionData = fruit.apiData ? [
    { name: 'Sugar', value: fruit.apiData.nutritions.sugar },
    { name: 'Protein', value: fruit.apiData.nutritions.protein },
    { name: 'Fat', value: fruit.apiData.nutritions.fat },
    { name: 'Carbs', value: fruit.apiData.nutritions.carbohydrates }
  ] : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Left Section: Image and Basic Info */}
        <div className="md:w-2/5 bg-fruit-gradient p-8 text-white flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-6xl drop-shadow-lg">{enrichment?.emoji || fruit.cartoonUrl}</div>
            <div>
              <h2 className="text-4xl font-extrabold">{fruit.name}</h2>
              <p className="italic opacity-90">{enrichment?.climate || fruit.apiData?.family || 'Fruit'}</p>
            </div>
          </div>
          
          <div className="relative group">
            <img src={fruit.imageUrl} alt={fruit.name} className="w-full h-56 object-cover rounded-3xl shadow-xl mb-6 border-4 border-white/20" />
            {loading && (
               <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
               </div>
            )}
          </div>
          
          <div className="space-y-4 overflow-y-auto custom-scrollbar flex-1 pr-2">
            <h4 className="text-xl font-bold flex items-center gap-2">
              <span>🌟</span> Health Benefits
            </h4>
            {(enrichment?.benefits || fruit.benefits).map((b: any, idx: number) => (
              <div key={idx} className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                <p className="font-bold flex items-center gap-2 mb-1">{b.icon} {b.title}</p>
                <p className="text-sm opacity-90">{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Stats and Data */}
        <div className="md:w-3/5 p-8 overflow-y-auto custom-scrollbar bg-gray-50">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-sm font-bold text-gray-400 uppercase mb-2 tracking-widest">Energy</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-black text-orange-500">
                  {fruit.apiData?.nutritions.calories || '0'}
                </span>
                <span className="text-sm text-gray-400 pb-1">kcal</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-sm font-bold text-gray-400 uppercase mb-2 tracking-widest">Continent</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-black text-blue-500 truncate">
                  {enrichment?.continents?.[0] || 'Global'}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              📊 Nutritional Profile (per 100g)
            </h4>
            <div className="h-64 bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={nutritionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}} 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {nutritionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {enrichment && (
            <div className="mb-8">
               <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                💡 AI Insights (Gemini)
              </h4>
              <div className="bg-pink-50 p-6 rounded-3xl border-2 border-pink-100 text-gray-700 whitespace-pre-wrap leading-relaxed italic">
                {enrichment.trivia}
              </div>
            </div>
          )}

          <div>
             <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📜 Botanical Info
            </h4>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Genus</p>
                  <p className="font-bold text-gray-800">{fruit.apiData?.genus}</p>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Order</p>
                  <p className="font-bold text-gray-800">{fruit.apiData?.order}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitDetails;
