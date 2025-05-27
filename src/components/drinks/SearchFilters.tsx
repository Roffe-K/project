import React from 'react';
import { Filter, X } from 'lucide-react';

interface SearchFiltersProps {
  filters: {
    alcoholic: boolean | null;
    category: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    alcoholic: boolean | null;
    category: string;
  }>>;
  categories: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, setFilters, categories }) => {
  const resetFilters = () => {
    setFilters({
      alcoholic: null,
      category: 'all',
    });
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white flex items-center mb-4 md:mb-0">
          <Filter size={20} className="mr-2 text-purple-400" />
          Filters
        </h2>
        
        {(filters.alcoholic !== null || filters.category !== 'all') && (
          <button
            onClick={resetFilters}
            className="text-purple-400 hover:text-purple-300 text-sm flex items-center transition-colors duration-200"
          >
            <X size={16} className="mr-1" />
            Reset filters
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {/* Alcohol Filter */}
        <div className="flex items-center space-x-2 bg-gray-800/50 p-1 rounded-lg border border-gray-700">
          <button
            onClick={() => setFilters(prev => ({ ...prev, alcoholic: null }))}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
              filters.alcoholic === null 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700/70'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilters(prev => ({ ...prev, alcoholic: true }))}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
              filters.alcoholic === true 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700/70'
            }`}
          >
            Alcoholic
          </button>
          <button
            onClick={() => setFilters(prev => ({ ...prev, alcoholic: false }))}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
              filters.alcoholic === false 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700/70'
            }`}
          >
            Non-alcoholic
          </button>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilters(prev => ({ ...prev, category }))}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 border ${
                filters.category === category 
                  ? 'bg-purple-600 text-white border-purple-500' 
                  : 'text-gray-300 border-gray-700 hover:bg-gray-700/70'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;