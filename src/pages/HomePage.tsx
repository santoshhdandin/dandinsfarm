import { MapPin, Leaf, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();
  useEffect(() => {
    const leafSVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="falling-leaf-svg">
      <path d="M50 10 Q30 30 25 50 Q20 70 35 85 Q50 95 50 85 Q50 70 55 50 Q60 30 50 10" fill="currentColor" />
      <path d="M50 30 Q45 45 50 60" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6" />
    </svg>`;

    const leafContainer = document.getElementById('falling-leaves-container');
    if (!leafContainer) return;

    // Clear existing leaves if React re-runs the effect during development
    leafContainer.innerHTML = '';

    // A beautiful organic green color palette
    const colors = ['#4CAF50', '#2E7D32', '#81C784', '#A5D6A7', '#66BB6A'];

    for (let i = 0; i < 18; i++) {
      const leaf = document.createElement('div');
      leaf.className = 'falling-leaf';
      leaf.innerHTML = leafSVG;

      // Increased base size for better visibility and hover interaction
      const size = Math.random() * 60 + 35;
      const leftPosition = Math.random() * 100;
      const duration = Math.random() * 7 + 8;
      const delay = Math.random() * 3;
      const swayAmount = Math.random() * 100 + 50;

      // Select a random green and calculate a random blur for depth
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const blurAmount = Math.random() > 0.7 ? (Math.random() * 2 + 1) : 0;

      leaf.style.setProperty('--size', `${size}px`);
      leaf.style.setProperty('--left', `${leftPosition}%`);
      leaf.style.setProperty('--duration', `${duration}s`);
      leaf.style.setProperty('--delay', `${delay}s`);
      leaf.style.setProperty('--sway', `${swayAmount}px`);
      leaf.style.setProperty('--blur', `${blurAmount}px`);
      leaf.style.color = randomColor;

      leafContainer.appendChild(leaf);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <style>{`
        @keyframes fallingLeaves {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg) rotateX(0deg) rotateY(0deg);
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            /* 3D tumbling: rotateX and rotateY */
            transform: translateY(100vh) translateX(var(--sway)) rotate(720deg) rotateX(360deg) rotateY(720deg);
            opacity: 0;
          }
        }

        #falling-leaves-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          pointer-events: none; /* Keeps the container from blocking clicks */
          z-index: 5;
        }

        .falling-leaf {
          position: absolute;
          left: var(--left);
          top: 0;
          width: var(--size);
          height: var(--size);
          opacity: 0.7;
          filter: blur(var(--blur)); /* Depth of field */
          animation: fallingLeaves var(--duration) linear var(--delay) infinite;
          
          /* Hover interaction enablers */
          pointer-events: auto; 
          cursor: pointer; 
        }

        .falling-leaf-svg {
          width: 100%;
          height: 100%;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s ease;
        }

        /* Hover Zoom & Drop Shadow Effect */
        .falling-leaf:hover .falling-leaf-svg {
          transform: scale(1.6) rotate(15deg);
          filter: drop-shadow(0px 10px 8px rgba(0,0,0,0.4));
        }
      `}</style>

      <div id="falling-leaves-container"></div>

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
        </div>

        <div className="flex items-center justify-center space-x-2 text-zinc-500 mb-2">
          <MapPin size={20} />
          <span>{t('home.location')}</span>
        </div>

        <div className="max-w-9xl mx-auto mb-4">
          <p className="text-lg text-zinc-150 leading-relaxed mb-4">
            {t('home.description')}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          <div className="flex items-center space-x-2 text-green-400">
            <Sprout size={24} />
            <span className="text-xl font-semibold">{t('home.organic')}</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400">
            <Leaf size={24} />
            <span className="text-xl font-semibold">{t('home.sustainable')}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
          {[
            { label: t('home.stats.acres'), value: '6+' },
            { label: t('home.stats.plants'), value: '2775+' },
            { label: t('home.stats.crops'), value: '30+' },
            { label: t('home.stats.experience'), value: '10+' },
            { label: t('home.stats.customers'), value: '100+' },
          ].map((stat) => (
            <Link
              key={stat.label}
              to="/our-farm-produce"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-green-600 hover:bg-zinc-800/50 transition-all hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="text-2xl font-bold text-green-400 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}