import React from 'react';
import { GlassWater, PartyPopper as Party, ChevronRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="py-16 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex mb-6">
            <div className="p-3 bg-gray-800 rounded-full">
              <div className="bg-gradient-to-r from-green-400 to-purple-500 rounded-full p-3">
                <Party className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to host the perfect party?
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of party hosts who use PartyPrep to create unforgettable experiences. 
            Get started for free today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              Get Started
              <ChevronRight className="ml-1 h-5 w-5" />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300 border border-gray-700">
              Learn More
            </button>
          </div>
          
          <div className="mt-10 pt-10 border-t border-gray-700 flex flex-col sm:flex-row justify-center text-gray-400 gap-8">
            <div className="flex items-center">
              <Party className="h-5 w-5 text-green-400 mr-2" />
              <span>100+ Party Games</span>
            </div>
            <div className="flex items-center">
              <GlassWater className="h-5 w-5 text-purple-400 mr-2" />
              <span>50+ Drink Recipes</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Trusted by 10,000+ Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;