import React from 'react';
import { Filter, X } from 'lucide-react';

interface SearchFiltersProps {
  filters: {
    difficulty: string;
    category: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    difficulty: string;
    category: string;
  }>>;
  categories: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, setFilters, categories }) => {
  const resetFilters = () => {
    setFilters({
      difficulty: 'all',
      category: 'all',
    });
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white flex items-center mb-4 md:mb-0">
          <Filter size={20} className="mr-2 text-green-400" />
          Filters
        </h2>
        
        {(filters.difficulty !== 'all' || filters.category !== 'all') && (
          <button
            onClick={resetFilters}
            className="text-green-400 hover:text-green-300 text-sm flex items-center transition-colors duration-200"
          >
            <X size={16} className="mr-1" />
            Reset filters
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {/* Difficulty Filter */}
        <div className="flex items-center space-x-2 bg-gray-800/50 p-1 rounded-lg border border-gray-700">
          <button
            onClick={() => setFilters(prev => ({ ...prev, difficulty: 'all' }))}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
              filters.difficulty === 'all' 
                ? 'bg-green-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700/70'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilters(prev => ({ ...prev, difficulty: 'Easy' }))}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
              filters.difficulty === 'Easy' 
                ? 'bg-green-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700/70'
            }`}
          >
            Easy
          </button>
          <button
            onClick={() => setFilters(prev => ({ ...prev, difficulty: 'Medium' }))}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
              filters.difficulty === 'Medium' 
                ? 'bg-green-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700/70'
            }`}
          >
            Medium
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
                  ? 'bg-green-600 text-white border-green-500' 
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