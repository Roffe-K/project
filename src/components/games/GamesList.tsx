import React from 'react';
import { motion } from 'framer-motion';
import GameCard from '../ui/GameCard';
import { Game } from '../../types/games';

interface GamesListProps {
  games: Game[];
}

const GamesList: React.FC<GamesListProps> = ({ games }) => {
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
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </motion.div>
  );
};

export default GamesList;