import React, { useState } from 'react';
import { Search, Filter, ArrowUp } from 'lucide-react';
import DrinksList from '../components/drinks/DrinksList.tsx';
import SearchFilters from '../components/drinks/SearchFilters.tsx/index.ts';
import { allDrinks } from '../data/drinks';

const DrinksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    alcoholic: null as boolean | null,
    category: 'all',
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter drinks based on search term and filters
  const filteredDrinks = allDrinks.filter(drink => {
    const matchesSearch = drink.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          drink.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          drink.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesAlcoholic = filters.alcoholic === null || drink.alcoholic === filters.alcoholic;
    const matchesCategory = filters.category === 'all' || drink.category === filters.category;
    
    return matchesSearch && matchesAlcoholic && matchesCategory;
  });

  // Get all unique categories for filter options
  const categories = ['all', ...new Set(allDrinks.map(drink => drink.category || 'uncategorized'))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Drink <span className="text-purple-300">Recipes</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover our collection of delicious drink recipes, from classic cocktails to creative concoctions.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search drinks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md text-white border border-purple-500/30 rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300" size={20} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <SearchFilters 
          filters={filters} 
          setFilters={setFilters}
          categories={categories}
        />

        {/* Results count */}
        <div className="mb-8 text-gray-300">
          <p className="text-lg">
            {filteredDrinks.length} {filteredDrinks.length === 1 ? 'recipe' : 'recipes'} found
          </p>
        </div>

        {/* Drinks list */}
        <DrinksList drinks={filteredDrinks} />

        {/* Empty state */}
        {filteredDrinks.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">No drinks found</h3>
            <p className="text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}

        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop} 
          className={`fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
};

export default DrinksPage;