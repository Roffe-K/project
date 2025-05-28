import React, { useState, useEffect } from 'react';
import { Search, ArrowUp } from 'lucide-react';
import GamesList from '../components/games/GamesList';
import SearchFilters from '../components/games/SearchFilters';
import { allGames } from '../data/games';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GamesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    difficulty: 'all',
    category: 'all',
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.title = 'Party Games - PartyPrep';
  }, []);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter games based on search term and filters
  const filteredGames = allGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDifficulty = filters.difficulty === 'all' || game.difficulty === filters.difficulty;
    const matchesCategory = filters.category === 'all' || game.category === filters.category;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  // Get all unique categories for filter options
  const categories = ['all', ...new Set(allGames.map(game => game.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <div className="py-16 px-4 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Party <span className="text-green-300">Games</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover our collection of entertaining party games, from classic drinking games to exciting group activities.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md text-white border border-green-500/30 rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300" size={20} />
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
            {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'} found
          </p>
        </div>

        {/* Games list */}
        <GamesList games={filteredGames} />

        {/* Empty state */}
        {filteredGames.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">No games found</h3>
            <p className="text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}

        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop} 
          className={`fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        >
          <ArrowUp size={24} />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default GamesPage;