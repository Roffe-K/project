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
    <div
      className="bg-white text-gray-900 rounded-lg shadow p-4 mb-4"
      data-aos="fade-up"
    >
      <img
        src={drink.image}
        alt={drink.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <div className="flex items-center justify-between mb-2">
        {drink.alcoholic ? (
          <span className="flex items-center text-red-500 text-sm font-medium">
            <Wine className="w-4 h-4 mr-1" />
            Alcoholic
          </span>
        ) : (
          <span className="flex items-center text-blue-500 text-sm font-medium">
            <GlassWater className="w-4 h-4 mr-1" />
            Non-alcoholic
          </span>
        )}
        <span className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          {drink.preparationTime}
        </span>
      </div>

      <h3 className="text-lg font-bold mb-1">{drink.title}</h3>
      <p className="text-sm text-gray-700">{drink.description}</p>

      {expanded && (
        <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
          {drink.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300 mt-2"
      >
        {expanded ? (
          <>
            <ChevronUp className="w-4 h-4 mr-1" />
            Hide ingredients
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4 mr-1" />
            Show ingredients
          </>
        )}
      </button>
    </div>
  );
};

export default DrinkCard;
