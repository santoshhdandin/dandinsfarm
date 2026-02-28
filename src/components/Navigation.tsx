import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { path: '/', label: t('nav.links.home') },
    { path: '/ourstory', label: t('nav.links.story') },
    { path: '/our-farm-produce', label: t('nav.links.crops') },
    { path: '/gallery', label: t('nav.links.gallery') },
    { path: '/learn-farming', label: t('nav.links.education') },
    { path: '/karnataka-market', label: t('nav.links.marketWeather') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'kn' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ========================================== */}
          {/* LOGO & BRAND NAME SECTION                    */}
          {/* ========================================== */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 group"
          >
            <img
              src="/images/Final.png" /* Change to .jpg if your file is a JPEG */
              alt="Dandin's Farm Logo"
              className="w-10 h-10 object-contain rounded-full border border-zinc-800 group-hover:border-green-400 transition-colors bg-white"
            />
            <span className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
              Dandin's Farm
            </span>
          </Link>

          {/* ========================================== */}
          {/* DESKTOP NAVIGATION                           */}
          {/* ========================================== */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`text-sm font-medium transition-colors ${location.pathname === item.path
                  ? 'text-green-400'
                  : 'text-zinc-400 hover:text-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium transition-colors bg-zinc-900/50 hover:bg-zinc-800 rounded-full px-3 py-1.5 border border-zinc-700/50"
            >
              <span className={i18n.language === 'en' ? 'text-green-400' : 'text-zinc-400'}>EN</span>
              <span className="text-zinc-600 mx-2">|</span>
              <span className={i18n.language === 'kn' ? 'text-green-400' : 'text-zinc-400'}>ಕನ್ನಡ</span>
            </button>

            <SocialLinks />
          </div>

          {/* ========================================== */}
          {/* MOBILE MENU BUTTON                           */}
          {/* ========================================== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* MOBILE NAVIGATION DROPDOWN                   */}
      {/* ========================================== */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-zinc-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${location.pathname === item.path
                  ? 'bg-green-900/30 text-green-400'
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="pt-2 pb-2">
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center text-sm font-medium transition-colors bg-zinc-900/50 hover:bg-zinc-800 rounded-lg px-4 py-3 border border-zinc-700/50"
              >
                <span className={i18n.language === 'en' ? 'text-green-400 font-bold' : 'text-zinc-400'}>English</span>
                <span className="text-zinc-600 mx-4">|</span>
                <span className={i18n.language === 'kn' ? 'text-green-400 font-bold' : 'text-zinc-400'}>ಕನ್ನಡ</span>
              </button>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}