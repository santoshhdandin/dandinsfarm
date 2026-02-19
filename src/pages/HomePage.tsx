import { MapPin, Leaf, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [showRoots, setShowRoots] = useState(false);

  useEffect(() => {
    setShowRoots(true);
    const timer = setTimeout(() => {
      setShowRoots(false);
    }, 4500);

    const interval = setInterval(() => {
      setShowRoots(true);
      setTimeout(() => {
        setShowRoots(false);
      }, 4500);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-2 inline-block">
          <div className="w-48 h-48 mx-auto mb-0">
            <img src="/images/Final.png" alt="Dandin's Farm Logo" className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
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

          {/* Animated Root Growth SVG */}
          <svg
            className={`absolute left-1/2 top-full -translate-x-1/2 pointer-events-none transition-opacity duration-1500 ${
              showRoots ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              width: '800px',
              height: '600px',
              marginTop: '10px',
              filter: 'drop-shadow(0 0 8px #00ff88) drop-shadow(0 0 12px #00ff88)',
            }}
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`
                  @keyframes growRoot {
                    from {
                      stroke-dashoffset: 1000;
                    }
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  .root-path {
                    stroke: #00ff88;
                    stroke-width: 2;
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                  }
                  .root-path.animate {
                    animation: growRoot 3s ease-out forwards;
                  }
                  .root-path-thin {
                    stroke-width: 1.5;
                  }
                  .root-path-thinner {
                    stroke-width: 1;
                  }
                `}
              </style>
            </defs>

            {/* Main central root */}
            <path
              className={`root-path ${showRoots ? 'animate' : ''}`}
              d="M 400 0 Q 400 80, 400 150"
              style={{ animationDelay: '0s' }}
            />

            {/* Left main branch */}
            <path
              className={`root-path ${showRoots ? 'animate' : ''}`}
              d="M 400 150 Q 350 200, 320 280"
              style={{ animationDelay: '0.3s' }}
            />

            {/* Left sub-branches */}
            <path
              className={`root-path root-path-thin ${showRoots ? 'animate' : ''}`}
              d="M 320 280 Q 280 320, 250 380"
              style={{ animationDelay: '0.6s' }}
            />
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 250 380 Q 220 420, 200 470"
              style={{ animationDelay: '0.9s' }}
            />
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 320 280 Q 300 340, 280 400"
              style={{ animationDelay: '0.8s' }}
            />

            {/* Right main branch */}
            <path
              className={`root-path ${showRoots ? 'animate' : ''}`}
              d="M 400 150 Q 450 200, 480 280"
              style={{ animationDelay: '0.3s' }}
            />

            {/* Right sub-branches */}
            <path
              className={`root-path root-path-thin ${showRoots ? 'animate' : ''}`}
              d="M 480 280 Q 520 320, 550 380"
              style={{ animationDelay: '0.6s' }}
            />
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 550 380 Q 580 420, 600 470"
              style={{ animationDelay: '0.9s' }}
            />
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 480 280 Q 500 340, 520 400"
              style={{ animationDelay: '0.8s' }}
            />

            {/* Center deep root */}
            <path
              className={`root-path ${showRoots ? 'animate' : ''}`}
              d="M 400 150 Q 400 250, 400 350"
              style={{ animationDelay: '0.4s' }}
            />
            <path
              className={`root-path root-path-thin ${showRoots ? 'animate' : ''}`}
              d="M 400 350 Q 395 420, 390 480"
              style={{ animationDelay: '0.7s' }}
            />

            {/* Additional branching roots */}
            <path
              className={`root-path root-path-thin ${showRoots ? 'animate' : ''}`}
              d="M 350 200 Q 320 240, 300 300"
              style={{ animationDelay: '0.5s' }}
            />
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 300 300 Q 270 350, 240 420"
              style={{ animationDelay: '0.85s' }}
            />

            <path
              className={`root-path root-path-thin ${showRoots ? 'animate' : ''}`}
              d="M 450 200 Q 480 240, 500 300"
              style={{ animationDelay: '0.5s' }}
            />
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 500 300 Q 530 350, 560 420"
              style={{ animationDelay: '0.85s' }}
            />

            {/* Far left spreading roots */}
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 250 380 Q 200 400, 160 440"
              style={{ animationDelay: '1s' }}
            />
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 200 470 Q 170 500, 140 540"
              style={{ animationDelay: '1.1s' }}
            />

            {/* Far right spreading roots */}
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 550 380 Q 600 400, 640 440"
              style={{ animationDelay: '1s' }}
            />
            <path
              className={`root-path root-path-thinner ${showRoots ? 'animate' : ''}`}
              d="M 600 470 Q 630 500, 660 540"
              style={{ animationDelay: '1.1s' }}
            />
          </svg>
        </div>


        <div className="flex items-center justify-center space-x-2 text-zinc-500 mb-2">
          <MapPin size={20} />
          <span>Haveri, Karnataka, India</span>
        </div>
		
        <div className="max-w-9xl mx-auto mb-4">
          <p className="text-lg text-zinc-150 leading-relaxed mb-4">
            Welcome to our organic paradise, we grow premium fruits and crops using 100% organic, chemical-free methods. Blending traditional wisdom with modern sustainable practices, we nurture the soil, respect nature & deliver fresh. Every fruit and crop from our farm is grown with care, ensuring the highest quality and nutritional value.
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
            <Link
              key={stat.label}
              to="/our-farm-produce"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-green-600 hover:bg-zinc-800/50 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="text-2xl font-bold text-green-400 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col items-center justify-center space-y-2">
            <a href='https://free-hit-counters.net/' className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Visitor Counter</a>
            <div dangerouslySetInnerHTML={{
              __html: `
                <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=d4d02367f23258575d4cfc7fd517bafa7a6b7eda'></script>
                <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/1496940/t/9"></script>
              `
            }} />
          </div>
        </div>

      </div>
    </div>
  );
}
