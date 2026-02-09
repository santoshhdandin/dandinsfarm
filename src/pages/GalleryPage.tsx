import { Camera, Leaf, Apple, Mountain, X, Sprout } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  id: number;
  alt: string;
  url: string;
}

interface Category {
  title: string;
  icon: typeof Mountain;
  description: string;
  images: GalleryImage[];
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories: Category[] = [
    {
      title: 'Farm Views',
      icon: Mountain,
      description: 'Scenic views of our organic farm',
      images: [
        { id: 1, alt: 'OurFarm-1', url: '/images/gallery/farm_views/1.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 2, alt: 'OurFarm-2', url: '/images/gallery/farm_views/2.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 3, alt: 'OurFarm-3', url: '/images/gallery/farm_views/3.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 4, alt: 'OurFarm-4', url: '/images/gallery/farm_views/4.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 5, alt: 'OurFarm-5', url: '/images/gallery/farm_views/5.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 6, alt: 'OurFarm-6', url: '/images/gallery/farm_views/6.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 7, alt: 'OurFarm-7', url: '/images/gallery/farm_views/7.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 8, alt: 'OurFarm-8', url: '/images/gallery/farm_views/8.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 9, alt: 'OurFarm-9', url: '/images/gallery/farm_views/9.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 10, alt: 'OurFarm-10', url: '/images/gallery/farm_views/10.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 11, alt: 'OurFarm-11', url: '/images/gallery/farm_views/11.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 12, alt: 'OurFarm-12', url: '/images/gallery/farm_views/12.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 13, alt: 'OurFarm-13', url: '/images/gallery/farm_views/13.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 14, alt: 'OurFarm-14', url: '/images/gallery/farm_views/14.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 15, alt: 'OurFarm-15', url: '/images/gallery/farm_views/15.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 16, alt: 'OurFarm-16', url: '/images/gallery/farm_views/16.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 17, alt: 'OurFarm-17', url: '/images/gallery/farm_views/17.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 18, alt: 'OurFarm-18', url: '/images/gallery/farm_views/18.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 19, alt: 'OurFarm-19', url: '/images/gallery/farm_views/19.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 20, alt: 'OurFarm-20', url: '/images/gallery/farm_views/20.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 21, alt: 'OurFarm-21', url: '/images/gallery/farm_views/21.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 22, alt: 'OurFarm-22', url: '/images/gallery/farm_views/22.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 23, alt: 'OurFarm-23', url: '/images/gallery/farm_views/23.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 24, alt: 'OurFarm-24', url: '/images/gallery/farm_views/24.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 25, alt: 'OurFarm-25', url: '/images/gallery/farm_views/25.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 26, alt: 'OurFarm-26', url: '/images/gallery/farm_views/26.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 27, alt: 'OurFarm-27', url: '/images/gallery/farm_views/27.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 28, alt: 'OurFarm-28', url: '/images/gallery/farm_views/28.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 29, alt: 'OurFarm-29', url: '/images/gallery/farm_views/29.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 30, alt: 'OurFarm-30', url: '/images/gallery/farm_views/30.jpg?auto=compress&cs=tinysrgb&w=800' },
      ],
    },
    {
      title: 'Our Crops',
      icon: Leaf,
      description: 'Fresh organic produce from our fields',
      images: [
        { id: 1, alt: 'FarmCrops-1', url: '/images/gallery/farm_crops/1.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 2, alt: 'FarmCrops-2', url: '/images/gallery/farm_crops/2.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 3, alt: 'FarmCrops-3', url: '/images/gallery/farm_crops/3.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 4, alt: 'FarmCrops-4', url: '/images/gallery/farm_crops/4.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 5, alt: 'FarmCrops-5', url: '/images/gallery/farm_crops/5.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 6, alt: 'FarmCrops-6', url: '/images/gallery/farm_crops/6.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 7, alt: 'FarmCrops-7', url: '/images/gallery/farm_crops/7.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 8, alt: 'FarmCrops-8', url: '/images/gallery/farm_crops/8.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 9, alt: 'FarmCrops-9', url: '/images/gallery/farm_crops/9.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 10, alt: 'FarmCrops-10', url: '/images/gallery/farm_crops/10.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 11, alt: 'FarmCrops-11', url: '/images/gallery/farm_crops/11.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 12, alt: 'FarmCrops-12', url: '/images/gallery/farm_crops/12.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 13, alt: 'FarmCrops-13', url: '/images/gallery/farm_crops/13.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 14, alt: 'FarmCrops-14', url: '/images/gallery/farm_crops/14.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 15, alt: 'FarmCrops-15', url: '/images/gallery/farm_crops/15.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 16, alt: 'FarmCrops-16', url: '/images/gallery/farm_crops/16.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 17, alt: 'FarmCrops-17', url: '/images/gallery/farm_crops/17.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 18, alt: 'FarmCrops-18', url: '/images/gallery/farm_crops/18.jpeg?auto=compress&cs=tinysrgb&w=800' },		
        { id: 19, alt: 'FarmCrops-19', url: '/images/gallery/farm_crops/19.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 20, alt: 'FarmCrops-20', url: '/images/gallery/farm_crops/20.png?auto=compress&cs=tinysrgb&w=800' },	
 ],
    },
    {
      title: 'Farm Animals',
      icon: Apple,
      description: 'Our friendly farm companions',
      images: [
        { id: 1, alt: 'TippuDog', url: '/images/gallery/farm_animals/1.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 2, alt: 'Gaurdian', url: '/images/gallery/farm_animals/2.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 3, alt: 'OnDuty', url: '/images/gallery/farm_animals/3.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 4, alt: 'Ducks in pond', url: '/images/gallery/farm_animals/4.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 5, alt: 'Ducks in pond', url: '/images/gallery/farm_animals/5.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 6, alt: 'Cows', url: '/images/gallery/farm_animals/6.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 7, alt: 'Cow', url: '/images/gallery/farm_animals/7.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 8, alt: 'Cat', url: '/images/gallery/farm_animals/8.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 9, alt: 'Baby', url: '/images/gallery/farm_animals/9.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 10, alt: 'Duck', url: '/images/gallery/farm_animals/10.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 11, alt: 'Tippu Dog', url: '/images/gallery/farm_animals/11.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 12, alt: 'Gaurdian', url: '/images/gallery/farm_animals/12.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 13, alt: 'On duty', url: '/images/gallery/farm_animals/13.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 14, alt: 'Ducks in pond', url: '/images/gallery/farm_animals/14.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 15, alt: 'Ducks in pond', url: '/images/gallery/farm_animals/15.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 16, alt: 'Cows', url: '/images/gallery/farm_animals/16.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 17, alt: 'OurFarmAnimal-17', url: '/images/gallery/farm_animals/17.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 18, alt: 'OurFarmAnimal-18', url: '/images/gallery/farm_animals/18.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 19, alt: 'OurFarmAnimal-19', url: '/images/gallery/farm_animals/19.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 20, alt: 'OurFarmAnimal-20', url: '/images/gallery/farm_animals/20.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 21, alt: 'OurFarmAnimal-21', url: '/images/gallery/farm_animals/21.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 22, alt: 'OurFarmAnimal-22', url: '/images/gallery/farm_animals/22.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 23, alt: 'OurFarmAnimal-23', url: '/images/gallery/farm_animals/23.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 24, alt: 'OurFarmAnimal-24', url: '/images/gallery/farm_animals/24.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 25, alt: 'OurFarmAnimal-25', url: '/images/gallery/farm_animals/25.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 26, alt: 'OurFarmAnimal-26', url: '/images/gallery/farm_animals/26.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 27, alt: 'OurFarmAnimal-27', url: '/images/gallery/farm_animals/27.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 28, alt: 'OurFarmAnimal-28', url: '/images/gallery/farm_animals/28.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 29, alt: 'OurFarmAnimal-29', url: '/images/gallery/farm_animals/29.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 30, alt: 'OurFarmAnimal-30', url: '/images/gallery/farm_animals/30.jpeg?auto=compress&cs=tinysrgb&w=800' },
      ],
    },
    {
      title: 'Products',
      icon: Camera,
      description: 'Ready-to-harvest organic produce',
      images: [
        { id: 1, alt: 'Products-1', url: '/images/gallery/products/1.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 2, alt: 'Products-2', url: '/images/gallery/products/2.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 3, alt: 'Products-3', url: '/images/gallery/products/3.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 4, alt: 'Products-4', url: '/images/gallery/products/4.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 5, alt: 'Products-5', url: '/images/gallery/products/5.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 6, alt: 'Products-6', url: '/images/gallery/products/6.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 7, alt: 'Products-7', url: '/images/gallery/products/7.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 8, alt: 'Products-8', url: '/images/gallery/products/8.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 9, alt: 'Products-9', url: '/images/gallery/products/9.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 10, alt: 'Products-10', url: '/images/gallery/products/10.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 11, alt: 'Products-11', url: '/images/gallery/products/11.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 12, alt: 'Products-12', url: '/images/gallery/products/12.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 13, alt: 'Products-13', url: '/images/gallery/products/13.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 14, alt: 'Products-14', url: '/images/gallery/products/14.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 15, alt: 'Products-15', url: '/images/gallery/products/15.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 16, alt: 'Products-16', url: '/images/gallery/products/16.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 17, alt: 'Products-17', url: '/images/gallery/products/17.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 18, alt: 'Products-18', url: '/images/gallery/products/18.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 19, alt: 'Products-19', url: '/images/gallery/products/19.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 20, alt: 'Products-20', url: '/images/gallery/products/20.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 21, alt: 'Products-21', url: '/images/gallery/products/21.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 22, alt: 'Products-22', url: '/images/gallery/products/22.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 23, alt: 'Products-23', url: '/images/gallery/products/23.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 24, alt: 'Products-24', url: '/images/gallery/products/24.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 25, alt: 'Products-25', url: '/images/gallery/products/25.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 26, alt: 'Products-26', url: '/images/gallery/products/26.png?auto=compress&cs=tinysrgb&w=800' },
      ],
    },
    {
      title: 'Practices We Follow',
      icon: Sprout,
      description: 'Traditional and natural farming methods',
      images: [
        { id: 1, alt: 'Vermicompost', url: '/images/gallery/practices/1.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 2, alt: 'Agri Pond', url: '/images/gallery/practices/2.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 3, alt: 'GoberGas', url: '/images/gallery/practices/3.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 4, alt: 'GoberGas', url: '/images/gallery/practices/4.jpg?auto=compress&cs=tinysrgb&w=800' },
        { id: 5, alt: 'SoilTest', url: '/images/gallery/practices/5.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { id: 6, alt: 'Practices-6', url: '/images/gallery/practices/6.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 7, alt: 'Practices-7', url: '/images/gallery/practices/7.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 8, alt: 'Practices-8', url: '/images/gallery/practices/8.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 9, alt: 'Practices-9', url: '/images/gallery/practices/9.png?auto=compress&cs=tinysrgb&w=800' },
        { id: 10, alt: 'Practices-10', url: '/images/gallery/practices/10.png?auto=compress&cs=tinysrgb&w=800' },
      ],
    },
  ];

  if (selectedImage) {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
        >
          <X size={32} />
        </button>
        <img
          src={selectedImage.url}
          alt={selectedImage.alt}
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white text-lg">{selectedImage.alt}</p>
        </div>
      </div>
    );
  }

  if (selectedCategory) {
    return (
      <div className="min-h-screen px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center space-x-2 text-zinc-400 hover:text-green-400 transition-colors mb-8"
          >
            <X size={20} />
            <span>Back to all categories</span>
          </button>

          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-green-900/30 p-3 rounded-lg">
              <selectedCategory.icon className="text-green-400" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{selectedCategory.title}</h1>
              <p className="text-zinc-400">{selectedCategory.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedCategory.images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          A visual journey through Dandin's Farm
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category)}
              className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all hover:transform hover:scale-105"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={category.images[0].url}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-green-900/50 p-2 rounded-lg">
                      <category.icon className="text-green-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-zinc-400 text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 text-sm">{category.images.length} photos</span>
                  <span className="text-green-400 group-hover:translate-x-1 transition-transform">
                    View gallery →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-800/50 text-center">
          <Camera size={48} className="mx-auto mb-4 text-green-400" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Visit Our Farm
          </h3>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-6">
            Experience the beauty of organic farming firsthand. Schedule a farm visit to see our crops,
            meet our animals, and learn about sustainable agriculture practices.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
          >
            Contact Us to Schedule a Visit
          </Link>
        </div>

        <div className="mt-8 text-center text-zinc-500 text-sm">
          <p>
            Note: Actual farm photos will be added soon. These placeholders represent the types of
            images that will showcase our beautiful organic farm.
          </p>
        </div>
      </div>
    </div>
  );
}
