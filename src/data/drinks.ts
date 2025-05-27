import { Drink } from '../types/drinks';

export const allDrinks: Drink[] = [
  {
    id: 1,
    title: 'Dyngnacke',
    description: 'Namnet säger allt. Du är så trött på hela skiten nu. Den här veckan har varit kass och nu får det fan räcka. Du tänker inte lyssna på några jävla råd. I kväll är det en all out, så jävla enkelt är det. 70% valfri vodka. 30% sprite.',
    ingredients: ['7 delar valfri vodka', '3 delar sprite'],
    alcoholic: true,
    category: 'vodka',
    image: 'https://cdn.discordapp.com/attachments/458008375536517120/1373361716729090178/IMG_3244.jpg?ex=682a2245&is=6828d0c5&hm=b1bf2952f448ce9adbd69a7f5fa52879af5e8f1678318776b6af4186e44c63b3&',
    rating: 4,
    reviews: 28,
    prepTime: '2 mins',
    instructions: [
      'Pour vodka into a glass filled with ice.',
      'Add sprite and stir gently.',
      'Serve immediately and enjoy responsibly.'
    ]
  },
  {
    id: 2,
    title: 'Lidingö Ice Tea',
    description: 'Ett måste för alla som gillar iste. Häll ihop allting över en näve is. Börja med fun lighten, lägg på en citronskiva och servera.',
    ingredients: ['2 delar Ljusrom', '1 del Fun Light Lemonade', '1 del Iste', '1 del Schweppes Lemon', '1 skiva Citron'],
    alcoholic: true,
    category: 'rum',
    image: 'https://images.pexels.com/photos/5947182/pexels-photo-5947182.jpeg',
    rating: 5,
    reviews: 42,
    prepTime: '3 mins',
    instructions: [
      'Fill a glass with ice.',
      'Start with Fun Light Lemonade.',
      'Add light rum and stir.',
      'Pour in iced tea and Schweppes Lemon.',
      'Garnish with a slice of lemon and serve.'
    ]
  },
  {
    id: 3,
    title: 'Klitoribbean',
    description: 'En riktigt exotisk stänkare, rör försiktigt med is. Sätt ananasskivan på kanten utav glaset och njut.',
    ingredients: ['1 del Captain Morgan', '1 del Nocco Caribbean', '3 delar Ananasjuice', '1 Ananasskiva'],
    alcoholic: true,
    category: 'rum',
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg',
    rating: 4,
    reviews: 36,
    prepTime: '4 mins',
    instructions: [
      'Fill a glass with ice.',
      'Pour in Captain Morgan rum.',
      'Add Nocco Caribbean and pineapple juice.',
      'Stir gently to combine all ingredients.',
      'Garnish with a pineapple slice on the rim of the glass.',
      'Serve and enjoy.'
    ]
  },
  {
    id: 4,
    title: 'Tropical Sunrise',
    description: 'A refreshing non-alcoholic tropical drink perfect for summer days. The layered effect creates a beautiful sunrise appearance.',
    ingredients: ['4 oz Orange Juice', '2 oz Pineapple Juice', '1 oz Grenadine', 'Ice Cubes', 'Orange Slice for garnish'],
    alcoholic: false,
    category: 'mocktails',
    image: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg',
    rating: 5,
    reviews: 51,
    prepTime: '5 mins',
    instructions: [
      'Fill a tall glass with ice cubes.',
      'Pour in orange juice and pineapple juice.',
      'Slowly pour grenadine down the inside of the glass to create a layered effect.',
      'Garnish with an orange slice and serve immediately.'
    ]
  },
  {
    id: 5,
    title: 'Classic Mojito',
    description: 'A traditional Cuban highball that combines white rum, sugar, lime juice, soda water, and mint. Refreshing and perfect for hot days.',
    ingredients: ['2 oz White Rum', '1 oz Fresh Lime Juice', '2 tsp Sugar', '6-8 Fresh Mint Leaves', 'Soda Water', 'Ice Cubes'],
    alcoholic: true,
    category: 'rum',
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg',
    rating: 5,
    reviews: 128,
    prepTime: '5 mins',
    instructions: [
      'In a highball glass, muddle mint leaves with sugar and lime juice.',
      'Add ice cubes to the glass.',
      'Pour rum over ice and fill with soda water.',
      'Stir gently and garnish with mint leaves and a lime wedge.',
      'Serve with a straw.'
    ]
  },
  {
    id: 6,
    title: 'Espresso Martini',
    description: 'A sophisticated, coffee-flavored cocktail made with vodka, coffee liqueur, and espresso. Perfect for coffee lovers who enjoy an alcoholic twist.',
    ingredients: ['2 oz Vodka', '1 oz Coffee Liqueur', '1 oz Freshly Brewed Espresso (cooled)', '1/2 oz Simple Syrup', 'Coffee Beans for garnish'],
    alcoholic: true,
    category: 'vodka',
    image: 'https://images.pexels.com/photos/7513565/pexels-photo-7513565.jpeg',
    rating: 4,
    reviews: 89,
    prepTime: '5 mins',
    instructions: [
      'Add vodka, coffee liqueur, espresso, and simple syrup to a cocktail shaker filled with ice.',
      'Shake vigorously until well-chilled (about 30 seconds).',
      'Strain into a chilled martini glass.',
      'Garnish with three coffee beans and serve immediately.'
    ]
  },
  {
    id: 7,
    title: 'Berry Smoothie',
    description: 'A delicious and healthy non-alcoholic berry smoothie packed with antioxidants. Perfect for breakfast or a refreshing snack.',
    ingredients: ['1 cup Mixed Berries (strawberries, blueberries, raspberries)', '1 Banana', '1/2 cup Greek Yogurt', '1/4 cup Almond Milk', '1 tbsp Honey', 'Ice Cubes'],
    alcoholic: false,
    category: 'smoothies',
    image: 'https://images.pexels.com/photos/4753650/pexels-photo-4753650.jpeg',
    rating: 5,
    reviews: 64,
    prepTime: '3 mins',
    instructions: [
      'Add all ingredients to a blender.',
      'Blend until smooth and creamy.',
      'Pour into a glass and garnish with a few berries on top.',
      'Serve immediately and enjoy.'
    ]
  },
  {
    id: 8,
    title: 'Old Fashioned',
    description: 'A classic cocktail made by muddling sugar with bitters, adding whiskey, and garnishing with orange peel. One of the oldest known cocktails.',
    ingredients: ['2 oz Bourbon or Rye Whiskey', '1 Sugar Cube', '2-3 dashes Angostura Bitters', 'Orange Peel', 'Ice (preferably a large cube)'],
    alcoholic: true,
    category: 'whiskey',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg',
    rating: 5,
    reviews: 112,
    prepTime: '5 mins',
    instructions: [
      'Place sugar cube in an old-fashioned glass.',
      'Add bitters and a splash of water, then muddle until dissolved.',
      'Add ice (preferably one large cube) to the glass.',
      'Pour whiskey over the ice.',
      'Garnish with an orange peel, expressing the oils over the drink before placing it in the glass.',
      'Stir gently and serve.'
    ]
  },
  {
    id: 9,
    title: 'Cucumber Mint Refresher',
    description: 'A light, refreshing non-alcoholic drink featuring the cooling combination of cucumber and mint. Perfect for hot summer days.',
    ingredients: ['1/2 Cucumber (sliced)', '10 Fresh Mint Leaves', '1 tbsp Sugar', '2 tbsp Fresh Lime Juice', 'Soda Water', 'Ice Cubes'],
    alcoholic: false,
    category: 'mocktails',
    image: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg',
    rating: 4,
    reviews: 48,
    prepTime: '5 mins',
    instructions: [
      'In a glass, muddle cucumber slices, mint leaves, sugar, and lime juice.',
      'Fill the glass with ice cubes.',
      'Top with soda water and stir gently.',
      'Garnish with additional cucumber slices and mint leaves.',
      'Serve immediately.'
    ]
  }
];