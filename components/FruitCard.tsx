
import React from 'react';
import { FruitData } from '../types';

interface FruitCardProps {
  fruit: FruitData;
  onClick: (fruit: FruitData) => void;
}

const FruitCard: React.FC<FruitCardProps> = ({ fruit, onClick }) => {
  return (
    <div 
      onClick={() => onClick(fruit)}
      className="group relative bg-white rounded-[2rem] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border-4 border-transparent hover:border-pink-300"
    >
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-50 rounded-full blur-2xl group-hover:bg-pink-100 transition-colors"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {fruit.cartoonUrl}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{fruit.name}</h3>
        <p className="text-sm text-pink-500 font-medium italic mb-3">{fruit.scientificName}</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full">
            {fruit.climate}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full">
            {fruit.sugarLevel} Sugar
          </span>
        </div>
        
        <div className="w-full flex justify-between items-center text-xs text-gray-500 mt-auto pt-4 border-t border-dashed border-gray-100">
          <span>{fruit.continents[0]}</span>
          <span className="font-bold text-pink-400 group-hover:translate-x-1 transition-transform">Explore →</span>
        </div>
      </div>
    </div>
  );
};

export default FruitCard;
