import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Clock, Heart, Star, Share2, Printer, Bookmark } from 'lucide-react';
import { allDrinks } from '../data/drinks';
import { Drink } from '../types/drinks';
import NotFoundPage from './NotFoundPage.tsx';

const DrinkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [drink, setDrink] = useState<Drink | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    setTimeout(() => {
      const foundDrink = allDrinks.find(d => d.id.toString() === id);
      setDrink(foundDrink || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-purple-600/30 mb-4"></div>
          <div className="text-purple-400">Loading...</div>
        </div>
      </div>
    );
  }

  if (!drink) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={drink.image} 
            alt={drink.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link to="/drinks" className="inline-flex items-center text-white hover:text-purple-300 transition-colors duration-200 mb-6">
            <ChevronLeft size={20} className="mr-1" />
            Back to all drinks
          </Link>
          
          <div className="flex items-center space-x-3 mb-3">
            {drink.alcoholic ? (
              <span className="bg-purple-700/80 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                Alcoholic
              </span>
            ) : (
              <span className="bg-green-700/80 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                Non-alcoholic
              </span>
            )}
            
            {drink.category && (
              <span className="bg-gray-700/80 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                {drink.category}
              </span>
            )}
            
            <span className="bg-gray-700/80 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
              <Clock size={14} className="mr-1" />
              {drink.prepTime || '5 mins'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {drink.title}
          </h1>
          
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={i < (drink.rating || 4) ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}
                />
              ))}
            </div>
            <span className="text-gray-300 ml-2">{drink.reviews || 42} reviews</span>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-2/3">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 border border-purple-900/20">
              <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">
                {drink.description}
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 border border-purple-900/20">
              <h2 className="text-2xl font-bold text-white mb-6">Instructions</h2>
              <ol className="space-y-6">
                {drink.instructions ? (
                  drink.instructions.map((step, index) => (
                    <li key={index} className="flex">
                      <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">
                        {index + 1}
                      </span>
                      <p className="text-gray-300 mt-1">{step}</p>
                    </li>
                  ))
                ) : (
                  // Default instructions if none provided
                  <>
                    <li className="flex">
                      <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">
                        1
                      </span>
                      <p className="text-gray-300 mt-1">
                        Gather all ingredients and necessary tools.
                      </p>
                    </li>
                    <li className="flex">
                      <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">
                        2
                      </span>
                      <p className="text-gray-300 mt-1">
                        Mix all ingredients in the order listed.
                      </p>
                    </li>
                    <li className="flex">
                      <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">
                        3
                      </span>
                      <p className="text-gray-300 mt-1">
                        Stir gently and serve over ice in a suitable glass.
                      </p>
                    </li>
                  </>
                )}
              </ol>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isFavorite 
                      ? 'bg-pink-600 text-white' 
                      : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Heart size={18} className="mr-2" fill={isFavorite ? "white" : "none"} />
                  {isFavorite ? 'Favorited' : 'Favorite'}
                </button>
                
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isBookmarked 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Bookmark size={18} className="mr-2" fill={isBookmarked ? "white" : "none"} />
                  {isBookmarked ? 'Saved' : 'Save'}
                </button>
                
                <button className="flex items-center px-4 py-2 rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-700 transition-colors duration-300">
                  <Share2 size={18} className="mr-2" />
                  Share
                </button>
                
                <button className="flex items-center px-4 py-2 rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-700 transition-colors duration-300">
                  <Printer size={18} className="mr-2" />
                  Print
                </button>
              </div>
              
              {/* Ingredients */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 border border-purple-900/20">
                <h2 className="text-2xl font-bold text-white mb-6">Ingredients</h2>
                <ul className="space-y-3">
                  {drink.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                      <span className="text-gray-300">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Similar Drinks */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-900/20">
                <h2 className="text-xl font-bold text-white mb-4">You might also like</h2>
                <div className="space-y-4">
                  {allDrinks
                    .filter(d => d.id !== drink.id)
                    .slice(0, 3)
                    .map((similar) => (
                      <Link 
                        key={similar.id} 
                        to={`/drinks/${similar.id}`}
                        className="flex items-center p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        <img 
                          src={similar.image} 
                          alt={similar.title} 
                          className="w-16 h-16 rounded-lg object-cover mr-3" 
                        />
                        <div>
                          <h3 className="text-white font-medium">{similar.title}</h3>
                          <p className="text-gray-400 text-sm">
                            {similar.alcoholic ? 'Alcoholic' : 'Non-alcoholic'}
                          </p>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetailPage;