export interface Game {
  id: number;
  title: string;
  description: string;
  players: string;
  duration: string;
  difficulty: string;
  instructions: string[];
  category: string;
  icon: React.ReactNode;
  rating?: number;
  reviews?: number;
  minAge?: number;
  equipment?: string[];
}