import React from 'react';
import { GlassWater, ChevronRight } from 'lucide-react';
import DrinkCard from './ui/DrinkCard';

const drinks = [
  {
    id: 1,
    title: 'Dyngnacke',
    description: 'Namnet säger allt. Du är så trött på hela skiten nu. Den här veckan har varit kass och nu får det fan räcka. Du tänker inte lyssna på några jävla råd. I kväll är det en all out, så jävla enkelt är det. 70% valfri vodka. 30% sprite. ',
    ingredients: ['7 delar valfri vodka', '3 delar sprite'],
    preparationTime: '5 min',
    alcoholic: true,
    image: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg'
  },
  {
    id: 2,
    title: 'Lidingö Ice Tea',
    description: 'A delicious non-alcoholic blend of mixed berries and citrus.',
    ingredients: ['Mixed berries', 'Lemon juice', 'Soda water', 'Sugar syrup', 'Mint'],
    preparationTime: '5 min',
    alcoholic: false,
    image: 'https://images.pexels.com/photos/5947182/pexels-photo-5947182.jpeg'
  },
  {
    id: 3,
    title: 'Klitoribbean',
    description: 'The timeless Cuban highball with rum, mint, and lime.',
    ingredients: ['White rum', 'Mint leaves', 'Lime juice', 'Sugar', 'Soda water'],
    preparationTime: '8 min',
    alcoholic: true,
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg'
  }
];

const DrinksSection = () => {
  return (
    <section id="drinks" className="py-16 px-4 bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Delicious <span className="text-purple-400">Drinks</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover easy-to-make drinks that will impress your guests, from classic cocktails to creative mocktails.
          </p>
        </div>
        
        <div className="space-y-6">
          {drinks.map(drink => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="group bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center mx-auto">
            Browse All Drinks
            <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DrinksSection;