import { Game } from '../types/games';
import { Beer, Users, Music, Brain, Award, Zap } from 'lucide-react';
import React from 'react';

export const allGames: Game[] = [
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
    icon: <Beer className="h-5 w-5 text-yellow-400" />,
    rating: 4.8,
    reviews: 156,
    equipment: ['Drinks']
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
    icon: <Users className="h-5 w-5 text-green-400" />,
    rating: 4.6,
    reviews: 98,
    equipment: ['Plastic cups', 'Table', 'Drinks']
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
    icon: <Music className="h-5 w-5 text-purple-400" />,
    rating: 4.5,
    reviews: 72,
    equipment: ['Music player', 'Drinks', 'Paper and pens']
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
    icon: <Brain className="h-5 w-5 text-blue-400" />,
    rating: 4.3,
    reviews: 84,
    equipment: ['Drinks']
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
    icon: <Award className="h-5 w-5 text-red-400" />,
    rating: 4.9,
    reviews: 203,
    equipment: ['Deck of cards', 'Large cup', 'Drinks']
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
    icon: <Zap className="h-5 w-5 text-pink-400" />,
    rating: 4.7,
    reviews: 167,
    equipment: ['Music player', 'Drinks', 'Space to dance']
  }
];