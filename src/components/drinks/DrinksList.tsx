import React from 'react';
import { motion } from 'framer-motion';
import DrinkCard from './DrinkCard';
import { Drink } from '../../types/drinks';

interface DrinksListProps {
  drinks: Drink[];
}

const DrinksList: React.FC<DrinksListProps> = ({ drinks }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {drinks.map((drink) => (
        <DrinkCard key={drink.id} drink={drink} />
      ))}
    </motion.div>
  );
};

export default DrinksList;