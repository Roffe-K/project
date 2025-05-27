import React from 'react';
import { Link } from 'react-router-dom';
import { GlassWater, ChevronLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <GlassWater size={80} className="text-purple-400" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-300 mb-8">
          The drink you're looking for seems to have spilled. Let's go back and find another one.
        </p>
        
        <Link 
          to="/drinks" 
          className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-5 py-3 transition-colors duration-300"
        >
          <ChevronLeft size={20} className="mr-2" />
          Back to Drinks
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;