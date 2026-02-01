import { useState } from 'react';
import { ArrowLeft, MapPin, Image } from 'lucide-react';

interface Crop {
  id: string;
  name: string;
  variety: string;
  plants: number;
  count: number;
  description: string;
  benefits: string[];
  harvestSeason: string;
  icon: string;
  images: string[];
}

const crops: Crop[] = [
  {
    id: 'guava',
    name: 'Guava (ಪೇರಲೆ )',
    variety: 'Allahabad Safeda, Taiwan Red and Lucknow 49',
    plants: 673,
    description: 'Our guava orchards feature premium Allahabad Safeda, Taiwan Red, Lucknow 49 and Other varieties, known for their exceptional sweetness and rich vitamin C content. These trees are carefully nurtured using organic methods, producing fruits with superior taste and nutritional value.',
    benefits: ['Rich in Vitamin C', 'High in Fiber', 'Boosts Immunity', 'Improves Digestion'],
    harvestSeason: 'Year-round with peak season December-March',
    icon: '🍈',
    images: [
      '/dandinsfarm/images/gallery/Guava/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Guava/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Guava/3.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Guava/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Guava/5.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'coconut',
    name: 'Coconut (ತೆಂಗಿನಕಾಯಿ) ',
    variety: 'Tall & Hybrid varieties',
    plants: 110,
    description: 'Coconut palms are the backbone of our farm, providing shade, organic matter, and of course, nutritious coconuts. We grow both traditional tall varieties and modern hybrid varieties that produce throughout the year.',
    benefits: ['Natural electrolyte drink', 'Healthy fats', 'Versatile uses', 'Sustainable crop'],
    harvestSeason: 'Year-round',
    icon: '🥥',
    images: [
      '/dandinsfarm/images/gallery/Coconut/1.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Coconut/2.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Coconut/3.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Coconut/4.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Coconut/5.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'duck',
    name: 'Duck (ಬಾತುಕೋಳಿ) ',
    variety: 'Khaki Campbell',
    count: 6,
    description: 'Our ducks are raised in a natural pond environment. They provide nutritious eggs and meat, and help control pests naturally around the farm.',
    benefits: ['Rich eggs', 'Flavorful meat', 'Natural pest control', 'Low maintenance'],
    harvestSeason: 'Year-round',
    icon: '🦆',
    images: [
      '/dandinsfarm/images/gallery/Duck/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Duck/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Duck/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Duck/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Duck/5.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'Egg',
    name: 'Egg (ನಾಟಿ ಮೊಟ್ಟೆ )',
    variety: 'Free-range organic',
    count: 30,
    description: 'Fresh organic eggs from our free-range chickens. These eggs have richer yolks and better flavor compared to commercial eggs, thanks to our natural feeding practices.',
    benefits: ['Rich in omega-3', 'Natural diet hens', 'Better nutrition', 'Fresh daily'],
    harvestSeason: 'Year-round',
    icon: '🥚',
    images: [
      '/dandinsfarm/images/gallery/Egg/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Egg/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Egg/3.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Egg/4.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Egg/5.png?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'banana',
    name: 'Banana (ಬಾಳೆಹಣ್ಣು) ',
    variety: 'Robusta & Nendran',
    plants: 135,
    description: 'Our banana plantation features multiple varieties perfect for fresh consumption and cooking. Grown using natural farming methods, our bananas are sweet, nutritious, and chemical-free.',
    benefits: ['Rich in potassium', 'Energy boosting', 'Good for digestion', 'Heart healthy'],
    harvestSeason: 'Year-round',
    icon: '🍌',
    images: [
      '/dandinsfarm/images/gallery/Banana/1.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Banana/2.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Banana/3.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Banana/4.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Banana/5.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'arecanut',
    name: 'Arecanut (ಅಡಿಕೆ)',
    variety: 'Mangala & Local varieties',
    plants: 1007,
    description: 'Arecanut palms thrive in our organic environment, benefiting from the natural shade and rich organic soil. These palms are intercropped with other species, creating a multi-layered farming system that maximizes land use and biodiversity.',
    benefits: ['Traditional crop', 'High market value', 'Drought resistant', 'Intercropping friendly'],
    harvestSeason: 'November-February',
    icon: '🌴',
    images: [
      '/dandinsfarm/images/gallery/Arecanut/1.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Arecanut/2.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Arecanut/3.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Arecanut/4.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Arecanut/5.png?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'papaya',
    name: 'Papaya (ಪಪ್ಪಾಯಿ)',
    variety: 'Red Lady & Taiwan varieties',
    plants: 100,
    description: 'Our papaya plants produce large, sweet fruits rich in papain enzyme and vitamins. These fast-growing plants are perfect for organic farming, responding beautifully to natural fertilizers and providing quick returns.',
    benefits: ['Rich in Papain enzyme', 'Excellent for digestion', 'High in Vitamin A', 'Anti-inflammatory properties'],
    harvestSeason: 'Year-round',
    icon: '🥭',
    images: [
      '/dandinsfarm/images/gallery/Papaya/1.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Papaya/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Papaya/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Papaya/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Papaya/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'jackfruit',
    name: 'Jackfruit (ಹಲಸು)',
    variety: 'Varikka & Koozha',
    plants: 22,
    description: 'Our jackfruit trees produce large, nutritious fruits perfect for both ripe consumption and as a vegetable when unripe. A versatile and sustainable crop rich in nutrients.',
    benefits: ['High in fiber', 'Rich in antioxidants', 'Good for immunity', 'Meat alternative'],
    harvestSeason: 'March-August',
    icon: '🍈',
    images: [
      '/dandinsfarm/images/gallery/Jackfruit/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Jackfruit/2.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Jackfruit/3.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Jackfruit/4.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Jackfruit/5.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'chicken',
    name: 'Chicken (ನಾಟಿ ಕೋಳಿ)',
    variety: 'Free-range organic',
    count: 50,
    description: 'Our free-range chickens roam freely across the farm, feeding on natural grains and insects. Raised without antibiotics or growth hormones, they provide healthy meat and fresh eggs for our community.',
    benefits: ['High-quality protein', 'Omega-3 rich', 'Antibiotic-free', 'Naturally raised'],
    harvestSeason: 'Year-round',
    icon: '🐔',
    images: [
      '/dandinsfarm/images/gallery/Chicken/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Chicken/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Chicken/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Chicken/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Chicken/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'cow',
    name: 'Cow (ಹಸು)',
    variety: 'Indigenous breeds',
    count: 8,
    description: 'Our indigenous cows are treated with care and respect. They graze naturally and provide us with organic milk and natural fertilizer that enriches our soil.',
    benefits: ['Organic milk source', 'Natural fertilizer', 'Traditional breeds', 'Sustainable farming'],
    harvestSeason: 'Year-round',
    icon: '🐄',
    images: [
      '/dandinsfarm/images/gallery/Cow/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Cow/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Cow/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Cow/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Cow/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'milk',
    name: 'Milk (ಹಾಲು) ',
    variety: 'Fresh organic dairy',
    iltre: 10,
    description: 'Fresh organic milk from our happy, grass-fed cows. Rich in nutrients and completely free from synthetic hormones and antibiotics. Delivered fresh daily from our farm.',
    benefits: ['Rich in calcium', 'Hormone-free', 'Fresh daily', 'Complete nutrition'],
    harvestSeason: 'Year-round',
    icon: '🥛',
    images: [
      '/dandinsfarm/images/gallery/Milk/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Milk/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Milk/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Milk/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Milk/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'goat',
    name: 'Goat (ಆಡು) ',
    variety: 'Local & Malabari',
    count: 10,
    description: 'Our goats are raised naturally in a free-range environment. They provide both meat and milk, and their manure is excellent for organic composting.',
    benefits: ['Lean meat', 'Digestible milk', 'Natural grazing', 'Eco-friendly'],
    harvestSeason: 'Year-round',
    icon: '🐐',
    images: [
      '/dandinsfarm/images/gallery/Goat/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Goat/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Goat/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Goat/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Goat/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'lamb',
    name: 'Lamb (ಕುರಿ)',
    variety: 'Organic raised',
    count: 20,
    description: 'Our lambs are raised with natural feeding practices and plenty of space to roam. They produce high-quality, tender meat that is rich in nutrients.',
    benefits: ['High protein', 'Rich in B vitamins', 'Natural raising', 'Quality meat'],
    harvestSeason: 'Year-round',
    icon: '🐑',
    images: [
      '/dandinsfarm/images/gallery/Lamb/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Lamb/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Lamb/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Lamb/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Lamb/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'Jamun',
    name: 'Jamun (ನೇರಳೆ ) ',
    variety: 'Indigenous variety',
    plants: 82,
    description: 'Nerale, also known as Amla or Indian Gooseberry, is a superfood grown on our farm. These trees are perfect for organic farming, requiring minimal intervention while producing fruits packed with antioxidants and medicinal properties.',
    benefits: ['Extremely rich in Vitamin C', 'Powerful antioxidant', 'Supports hair health', 'Aids in diabetes management'],
    harvestSeason: 'November-February',
    icon: '🫐',
    images: [
      '/dandinsfarm/images/gallery/Jamun/1.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Jamun/2.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Jamun/3.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Jamun/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Jamun/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'turkey',
    name: 'Turkey (ಟರ್ಕಿ ಕೋಳಿ) ',
    variety: 'Broad Breasted',
    count: 2,
    description: 'Our turkeys are raised naturally with plenty of outdoor space. They provide lean, nutritious meat and are raised without antibiotics or growth hormones.',
    benefits: ['Lean protein', 'Low fat content', 'Rich in nutrients', 'Free-range raised'],
    harvestSeason: 'Year-round',
    icon: '🦃',
    images: [
      '/dandinsfarm/images/gallery/Turkey/1.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Turkey/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Turkey/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Turkey/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Turkey/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'lemon',
    name: 'Lemon (ನಿಂಬೆಹಣ್ಣು) ',
    variety: 'Kagzi & Eureka',
    plants: 30,
    description: 'Our lemon trees produce juicy, aromatic lemons perfect for culinary and medicinal uses. Grown organically, they are packed with vitamin C and natural oils.',
    benefits: ['High vitamin C', 'Natural detoxifier', 'Immune booster', 'Versatile uses'],
    harvestSeason: 'Year-round',
    icon: '🍋',
    images: [
      '/dandinsfarm/images/gallery/Lemon/1.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Lemon/2.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Lemon/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Lemon/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Lemon/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'turmeric',
    name: 'Turmeric (ಅರಿಶಿನ)',
    variety: 'Salem & Local varieties',
    plants: 120,
    description: 'Our turmeric is grown in rich organic soil, resulting in rhizomes with high curcumin content. Known for its medicinal properties, our turmeric is pesticide-free and naturally processed.',
    benefits: ['Anti-inflammatory', 'Powerful antioxidant', 'Boosts immunity', 'Natural medicine'],
    harvestSeason: 'January-March',
    icon: '🟡',
    images: [
      '/dandinsfarm/images/gallery/Turmeric/1.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Turmeric/2.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Turmeric/3.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Turmeric/4.png?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Turmeric/5.png?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'hebbevu',
    name: 'Hebbevu (ಹೆಬ್ಬೇವು)',
    variety: 'Indian Jujube',
    plants: 154,
    description: 'Hebbevu, also known as Indian Jujube or Ber, is a traditional fruit that thrives in our climate. These drought-resistant trees produce sweet, crunchy fruits rich in vitamin C.',
    benefits: ['Vitamin C rich', 'Aids digestion', 'Strengthens bones', 'Improves sleep'],
    harvestSeason: 'February-April',
    icon: '🌳',
    images: [
      '/dandinsfarm/images/gallery/Hebbevu/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Hebbevu/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Hebbevu/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Hebbevu/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Hebbevu/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'curry-leaves',
    name: 'Curry Leaves (ಕರಿಬೇವು)',
    variety: 'Murraya koenigii',
    plants: 40,
    description: 'Fresh aromatic curry leaves from our farm, essential for South Indian cooking. These plants are grown organically and harvested fresh, providing maximum flavor and medicinal benefits.',
    benefits: ['Aids digestion', 'Controls diabetes', 'Rich in antioxidants', 'Hair health'],
    harvestSeason: 'Year-round',
    icon: '🌿',
    images: [
      '/dandinsfarm/images/gallery/Curry-leaves/1.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Curry-leaves/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Curry-leaves/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Curry-leaves/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Curry-leaves/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'drumstick',
    name: 'Drumstick (ನುಗ್ಗೆಕಾಯಿ)',
    variety: 'Moringa oleifera',
    plants: 35,
    description: 'Our drumstick trees, also known as Moringa, are a superfood powerhouse. Both the pods and leaves are highly nutritious and used in traditional cooking and medicine.',
    benefits: ['Nutrient dense', 'Anti-inflammatory', 'Lowers blood sugar', 'Rich in vitamins'],
    harvestSeason: 'Year-round',
    icon: '🌱',
    images: [
      '/dandinsfarm/images/gallery/Drumstick/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Drumstick/2.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Drumstick/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Drumstick/4.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Drumstick/5.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'vegetables',
    name: 'Vegetables (ತರಕಾರಿಗಳು)',
    variety: 'Seasonal varieties',
    plants: 100,
    description: 'We grow a wide variety of seasonal vegetables using organic methods. From leafy greens to root vegetables, our produce is fresh, nutritious, and free from harmful chemicals.',
    benefits: ['Rich in nutrients', 'Fresh daily', 'Chemical-free', 'Seasonal varieties'],
    harvestSeason: 'Year-round',
    icon: '🥬',
    images: [
      '/dandinsfarm/images/gallery/Vegetables/1.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Vegetables/2.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Vegetables/3.jpg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Vegetables/4.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/dandinsfarm/images/gallery/Vegetables/5.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
];

interface CropsPageProps {
  setCurrentPage: (page: string) => void;
}

export default function CropsPage({ setCurrentPage }: CropsPageProps) {
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

  if (selectedCrop) {
    return (
      <div className="min-h-screen px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedCrop(null)}
            className="flex items-center space-x-2 text-zinc-400 hover:text-green-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to all crops</span>
          </button>

          <div className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800">
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-12 text-center">
              <div className="text-8xl mb-4">{selectedCrop.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {selectedCrop.name}
              </h1>
              <p className="text-xl text-green-400">{selectedCrop.variety}</p>
            </div>

            <div className="p-8 space-y-8">
              <div className="flex items-center justify-center space-x-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">{selectedCrop.plants}</div>
                  <div className="text-sm text-zinc-500">Plants</div>
                </div>
                <div className="h-12 w-px bg-zinc-800" />
                <div className="text-left max-w-xs">
                  <div className="text-sm text-zinc-500 mb-1">Harvest Season</div>
                  <div className="text-white">{selectedCrop.harvestSeason}</div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">About This Crop</h2>
                <p className="text-zinc-300 leading-relaxed">{selectedCrop.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {selectedCrop.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden border border-zinc-800 hover:border-green-600 transition-all group"
                    >
                      <img
                        src={image}
                        alt={`${selectedCrop.name} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Health Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCrop.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-black/30 rounded-lg p-4"
                    >
                      <div className="text-green-400 mt-1">✓</div>
                      <span className="text-zinc-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-800/50">
                <h3 className="text-lg font-bold text-white mb-2">
                  Interested in bulk orders?
                </h3>
                <p className="text-zinc-300 mb-4">
                  Contact us for fresh, organic {selectedCrop.name.toLowerCase()} directly from our farm.
                </p>
                <button
                  onClick={() => {
                    setSelectedCrop(null);
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          What We Grow
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          Discover our organic produce, grown with care and dedication
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {crops.map((crop) => (
            <button
              key={crop.id}
              onClick={() => setSelectedCrop(crop)}
              className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all hover:transform hover:scale-105 group"
            >
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-12 text-center group-hover:from-green-900/50 group-hover:to-emerald-900/50 transition-all">
                <div className="text-6xl mb-4">{crop.icon}</div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {crop.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{crop.variety}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-zinc-500">
                    <MapPin size={16} />
                    <span>{crop.plants} plants</span>
                  </div>
                  <span className="text-green-400 group-hover:translate-x-1 transition-transform">
                    More →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-4">100% Organic Certified</h2>
          <p className="text-zinc-300 leading-relaxed">
            All our crops are grown using complete organic methods. We use only natural fertilizers,
            traditional pest control methods, and sustainable water management practices. Every fruit
            from our farm is chemical-free, ensuring the highest quality and nutritional value for
            our customers.
          </p>
        </div>
      </div>
    </div>
  );
}
