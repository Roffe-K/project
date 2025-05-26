import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/ui/GameCard';

const dummyGames = [
  {
    id: 1,
    title: 'Sanning eller Konsekvens',
    description: 'Ett klassiskt partyspel för att lära känna varandra.',
    players: '2+',
    duration: '15–30 min',
    difficulty: 'Lätt',
    instructions: ['Välj mellan sanning eller konsekvens.', 'Utför uppdraget.'],
    category: 'Klassiker',
    icon: <span className="text-yellow-400 text-lg">🎯</span>,
  },
  {
    id: 2,
    title: 'Flip the Cup',
    description: 'Snabbt dryckesspel med plastmuggar.',
    players: '4+',
    duration: '10–20 min',
    difficulty: 'Medel',
    instructions: ['Dela upp i lag.', 'Drick, ställ ner, och flippa muggen!'],
    category: 'Dryckesspel',
    icon: <span className="text-blue-400 text-lg">🥤</span>,
  },
];

const Games: React.FC = () => {
  useEffect(() => {
    document.title = 'Spel - PartyPrep';
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Alla spel</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Games;
