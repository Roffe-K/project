// src/components/DrinksSection.tsx
import React from 'react';
import { GlassWater, ChevronRight } from 'lucide-react';
import DrinkCard from './ui/DrinkCard';
import { useNavigate } from 'react-router-dom';

const drinks = [
  {
    id: 1,
    title: 'Dyngnacke',
    description: 'Namnet säger allt. Du är så trött på hela skiten nu. Den här veckan har varit kass och nu får det fan räcka. Du tänker inte lyssna på några jävla råd. I kväll är det en all out, så jävla enkelt är det. 70% valfri vodka. 30% sprite. ',
    ingredients: ['7 delar valfri vodka', '3 delar sprite'],
    alcoholic: true,
    image: 'https://cdn.discordapp.com/attachments/458008375536517120/1373361716729090178/IMG_3244.jpg?ex=682a2245&is=6828d0c5&hm=b1bf2952f448ce9adbd69a7f5fa52879af5e8f1678318776b6af4186e44c63b3&',
  },
  {
    id: 2,
    title: 'Lidingö Ice Tea',
    description: 'Ett måste för alla som gillar iste. Häll ihop allting över en näve is. Börja med fun lighten, lägg på en citronskiva och servera.',
    ingredients: ['2 delar Ljusrom', '1 del Fun Light Lemonade', '1 del Iste', '1 del Schweppes Lemon', '1 skiva Citron'],
    alcoholic: true,
    image: 'https://images.pexels.com/photos/5947182/pexels-photo-5947182.jpeg',
  },
  {
    id: 3,
    title: 'Klitoribbean',
    description: 'En riktigt exotisk stänkare, rör försiktigt med is. Sätt ananasskivan på kanten utav glaset och njut. ',
    ingredients: ['1 del Captain Morgan', '1 del Nocco Caribbean', '3 delar Ananasjuice', '1 Ananasskiva'],
    alcoholic: true,
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg',
  },
];

const DrinksSection = () => {
  const navigate = useNavigate();

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {drinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/drinks')}
            className="group bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center mx-auto"
          >
            Browse All Drinks
            <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DrinksSection;
