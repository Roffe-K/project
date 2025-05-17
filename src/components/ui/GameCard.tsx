import React, { useState } from 'react';
import { Users, Clock, ChevronDown, ChevronUp, Play } from 'lucide-react';
import GameModal from './GameModal';

interface GameProps {
  game: {
    id: number;
    title: string;
    description: string;
    players: string;
    duration: string;
    difficulty: string;
    instructions: string[];
    category: string;
    icon: React.ReactNode;
  };
}

const GameCard: React.FC<GameProps> = ({ game }) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 group">
        <div className="flex items-start mb-4">
          <div className="bg-gray-700 p-3 rounded-lg group-hover:bg-gray-900 transition-colors duration-300">
            {game.icon}
          </div>
          <div className="ml-4 flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{game.title}</h3>
                <span className="text-sm px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                  {game.category}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300"
                title="Play Game"
              >
                <Play className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{game.description}</p>
        
        <div className="flex items-center text-sm text-gray-400 space-x-4 mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{game.players} players</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{game.duration}</span>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${
          showInstructions ? 'max-h-[400px]' : 'max-h-0'
        }`}>
          <div className="border-t border-gray-700 pt-4 mb-4">
            <h4 className="text-white font-semibold mb-2">How to Play:</h4>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              {game.instructions.map((instruction, index) => (
                <li key={index} className="text-sm">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-300"
        >
          {showInstructions ? (
            <>
              <span>Hide instructions</span>
              <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              <span>Show instructions</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      </div>

      <GameModal
        game={game}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default GameCard;