import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Plan Your Perfect Party <br className="hidden sm:block" />
            <span className="text-green-400">In Minutes</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
            Discover awesome party games and delicious drink recipes
            to make your next gathering unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              Games
              <ChevronRight className="ml-1 h-5 w-5" />
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              Drinks
              <ChevronRight className="ml-1 h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-12 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-purple-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <img 
                src="https://images.pexels.com/photos/5935232/pexels-photo-5935232.jpeg" 
                alt="People enjoying a party" 
                className="w-full h-64 sm:h-80 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;