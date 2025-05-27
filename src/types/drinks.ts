export interface Drink {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  alcoholic: boolean;
  image: string;
  category?: string;
  rating?: number;
  reviews?: number;
  prepTime?: string;
  instructions?: string[];
}