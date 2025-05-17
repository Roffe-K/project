import React, { useState } from 'react';
import { Award, Users, Timer, Zap, Beer, Dice1 as Dice, Music, Brain, ChevronRight } from 'lucide-react';
import GameCard from './ui/GameCard';

const games = [
  {
    id: 1,
    title: 'Never Have I Ever',
    description: 'The ultimate party game that reveals your friends\' wildest stories! Take turns making statements and find out who\'s done what.',
    players: '4-20',
    duration: '30-60 min',
    difficulty: 'Easy',
    instructions: [
      'Players sit in a circle',
      'Each player starts with 10 fingers up',
      'Take turns saying "Never have I ever..." followed by something you haven\'t done',
      'Players who have done it must put a finger down',
      'Last player with fingers up wins!'
    ],
    category: 'Drinking',
    icon: <Beer className="h-5 w-5 text-yellow-400" />
  },
  {
    id: 2,
    title: 'Flip Cup Tournament',
    description: 'Fast-paced team drinking game that tests your speed and coordination. Perfect for large groups!',
    players: '6-20',
    duration: '20-40 min',
    difficulty: 'Medium',
    instructions: [
      'Form two equal teams',
      'Line up on opposite sides of a table',
      'When the game starts, first players drink',
      'After drinking, place cup at edge and flip it',
      'Next player goes once cup is flipped',
      'First team to flip all cups wins!'
    ],
    category: 'Team',
    icon: <Users className="h-5 w-5 text-green-400" />
  },
  {
    id: 3,
    title: 'Music Roulette',
    description: 'Test your music knowledge! Players take turns playing song snippets while others guess the artist and title.',
    players: '3-15',
    duration: '30-45 min',
    difficulty: 'Medium',
    instructions: [
      'Create a shared playlist',
      'Each round, one player is the DJ',
      'Play 5-10 seconds of a random song',
      'Other players write down guesses',
      'Points: 2 for artist + song, 1 for either',
      'Highest score after all rounds wins!'
    ],
    category: 'Music',
    icon: <Music className="h-5 w-5 text-purple-400" />
  },
  {
    id: 4,
    title: 'Categories',
    description: 'Think fast! Name items in categories while the pressure builds. Miss or repeat an answer? Take a drink!',
    players: '4-12',
    duration: '20-30 min',
    difficulty: 'Easy',
    instructions: [
      'Sit in a circle',
      'First player names a category',
      'Go around naming items in that category',
      'No repeats or hesitation allowed',
      'Fail = drink and pick new category',
      'Keep going until everyone\'s tipsy!'
    ],
    category: 'Word',
    icon: <Brain className="h-5 w-5 text-blue-400" />
  },
  {
    id: 5,
    title: 'Kings Cup',
    description: 'The classic card drinking game with rules for each card. Draw cards and follow the commands!',
    players: '4-15',
    duration: '30-60 min',
    difficulty: 'Medium',
    instructions: [
      'Place empty cup in center',
      'Spread cards in circle around cup',
      'Take turns drawing cards',
      'Follow the rule for each card',
      'Kings add drink to center cup',
      'Last king drinks the center cup!'
    ],
    category: 'Cards',
    icon: <Award className="h-5 w-5 text-red-400" />
  },
  {
    id: 6,
    title: 'Dance Off',
    description: 'Show off your best moves in this elimination dance competition. Losers drink, winners rule!',
    players: '6-20',
    duration: '30-45 min',
    difficulty: 'Medium',
    instructions: [
      'Create dance floor space',
      'Pick upbeat playlist',
      'Two dancers face off each round',
      'Crowd votes on winner',
      'Loser drinks, winner continues',
      'Last dancer standing wins!'
    ],
    category: 'Active',
    icon: <Zap className="h-5 w-5 text-pink-400" />
  }
];

const GamesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Drinking', 'Team', 'Music', 'Word', 'Cards', 'Active'];

  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  return (
    <section id="games" className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Epic Party <span className="text-green-400">Games</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            From pre-gaming to full-on parties, these games will get everyone involved 
            and create unforgettable moments.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game, index) => (
            <div
              key={game.id}
              className="opacity-0 animate-fade-in"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
              }}
            >
              <GameCard game={game} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="group bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300 border border-gray-700 flex items-center justify-center mx-auto">
            Browse All Games
            <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;