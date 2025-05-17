import React, { useState } from 'react';
import { X } from 'lucide-react';
import ReactConfetti from 'react-confetti';

interface GameModalProps {
  game: {
    title: string;
    instructions: string[];
    category: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, isOpen, onClose }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < game.instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setGameStarted(false);
        onClose();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {showConfetti && <ReactConfetti />}
      <div className="bg-gray-800 rounded-xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-4">{game.title}</h2>

        {!gameStarted ? (
          <div className="text-center">
            <p className="text-gray-300 mb-6">Ready to start the game?</p>
            <button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Start Game
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-2 bg-green-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / game.instructions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <p className="text-gray-300 mb-6">{game.instructions[currentStep]}</p>

            <button
              onClick={nextStep}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300"
            >
              {currentStep < game.instructions.length - 1 ? 'Next Step' : 'Finish Game'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameModal;