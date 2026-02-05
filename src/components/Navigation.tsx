import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import SocialLinks from './SocialLinks';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'market-weather', label: 'ಕರ್ನಾಟಕ ಮಾರುಕಟ್ಟೆ & ಹವಾಮಾನ' },
    { id: 'crops', label: 'Our Farm Produce' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'education', label: 'Learn Farming' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold hover:text-green-400 transition-colors"
          >
            Dandin's Farm
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-green-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <SocialLinks />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-zinc-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-green-900/30 text-green-400'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-zinc-800">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
