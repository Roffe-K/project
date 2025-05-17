import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, GlassWater, Wine } from 'lucide-react';

interface DrinkProps {
  drink: {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
    preparationTime: string;
    alcoholic: boolean;
    image: string;
  };
}

const DrinkCard: React.FC<DrinkProps> = ({ drink }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 group h-full">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-1/3 h-64 lg:h-auto relative">
          <img 
            src={drink.image} 
            alt={drink.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-gray-900 px-2 py-1 rounded-full text-xs font-medium">
            {drink.alcoholic ? (
              <div className="flex items-center text-red-400">
                <Wine className="h-3 w-3 mr-1" />
                <span>Alcoholic</span>
              </div>
            ) : (
              <div className="flex items-center text-blue-400">
                <GlassWater className="h-3 w-3 mr-1" />
                <span>Non-alcoholic</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-6 w-full lg:w-2/3 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{drink.title}</h3>
            <p className="text-gray-300 mb-4">{drink.description}</p>

            <div className="flex items-center text-sm text-gray-400 mb-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>{drink.preparationTime} preparation</span>
            </div>
          </div>

          <div className={`transition-all duration-300 overflow-hidden ${expanded ? 'max-h-48' : 'max-h-0'}`}>
            <div className="mt-4 mb-4">
              <p className="text-sm font-medium text-gray-300 mb-2">Ingredients:</p>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {drink.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>

          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300 mt-2"
          >
            {expanded ? (
              <>
                <span>Hide ingredients</span>
                <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                <span>Show ingredients</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
