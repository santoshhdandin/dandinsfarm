import { MapPin, Leaf, Sprout } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center">
            <Leaf size={64} className="text-white" />
          </div>
        </div>

        {/* Stylish Title with Multiple Effects */}
        <div className="mb-6 relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 blur-3xl opacity-30">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Dandin's Farm
            </h1>
          </div>
          
          {/* Main title with enhanced gradient and shadow */}
          <h1 className="relative text-6xl md:text-8xl font-black mb-2 bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight hover:scale-105 transition-transform duration-300">
            Dandin's Farm
          </h1>
          
          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-green-500 to-green-400 rounded-full"></div>
            <Leaf size={20} className="text-green-400 animate-bounce" />
            <div className="h-1 w-12 bg-gradient-to-l from-transparent via-green-500 to-green-400 rounded-full"></div>
          </div>
        </div>


        <div className="flex items-center justify-center space-x-2 text-zinc-500 mb-6">
          <MapPin size={20} />
          <span>Haveri, Karnataka, India</span>
        </div>
		
        <div className="max-w-9xl mx-auto mb-6">
          <p className="text-lg text-zinc-150 leading-relaxed mb-4">
            We grow premium fruits and crops using 100% organic, chemical-free methods. Blending traditional wisdom with modern sustainable practices, we nurture the soil, respect nature, and deliver fresh. Every fruit and crop from our farm is grown with care, ensuring the highest quality and nutritional value for our community.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          <div className="flex items-center space-x-2 text-green-400">
            <Sprout size={24} />
            <span className="text-xl font-semibold">100% Organic</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400">
            <Leaf size={24} />
            <span className="text-xl font-semibold">Sustainable Farming</span>
          </div>
        </div>



        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
          {[
            { label: 'Acres', value: '6+' },
			{ label: 'Plants', value: '2775+' },
            { label: 'Crop Varieties', value: '30+' },
            { label: 'Years Experience', value: '10+' },
            { label: 'Happy Customers', value: '100+' },
          ].map((stat) => (
            <div key={stat.label} className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
              <div className="text-2xl font-bold text-green-400 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
		
      </div>
    </div>
  );
}
