import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassWater, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Drink } from '../../types/drinks';

interface DrinkCardProps {
  drink: Drink;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={item}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-purple-900/20 h-full flex flex-col">
        <div className="relative h-60 overflow-hidden">
          <img 
            src={drink.image} 
            alt={drink.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/60" />
          
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-purple-700/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
            {drink.alcoholic ? (
              <>
                <GlassWater className="mr-1\" size={14} />
                <span>Alcoholic</span>
              </>
            ) : (
              <>
                <GlassWater className="mr-1" size={14} />
                <span>Non-alcoholic</span>
              </>
            )}
          </div>

          {/* Category tag */}
          {drink.category && (
            <div className="absolute top-4 right-4 bg-gray-800/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {drink.category}
            </div>
          )}
          
          {/* Favorite button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className={`absolute bottom-4 right-4 p-2 rounded-full transition-all duration-300 ${isFavorite ? 'bg-pink-600 text-white' : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700/70'}`}
          >
            <Heart size={18} fill={isFavorite ? "white" : "none"} />
          </button>
        </div>

        <div className="p-5 flex-grow flex flex-col">
          {/* Rating */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < drink.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}
              />
            ))}
            <span className="text-gray-400 text-sm ml-1">({drink.reviews || 0})</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {drink.title}
          </h3>
          
          <p className="text-gray-400 mb-4 text-sm line-clamp-3">
            {drink.description}
          </p>
          
          <div className="mt-auto">
            <Link
              to={`/drinks/${drink.id}`}
              className="inline-block bg-purple-600/80 hover:bg-purple-600 text-white font-medium rounded-lg py-2 px-4 text-sm transition-colors duration-300 w-full text-center"
            >
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DrinkCard;