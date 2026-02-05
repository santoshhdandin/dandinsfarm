import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import MarketWeatherPage from './pages/MarketWeatherPage';
import CropsPage from './pages/CropsPage';
import GalleryPage from './pages/GalleryPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'story':
        return <StoryPage />;
      case 'market-weather':
        return <MarketWeatherPage />;
      case 'crops':
        return <CropsPage setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <GalleryPage setCurrentPage={setCurrentPage} />;
      case 'education':
        return <EducationPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-950/50 via-black to-zinc-900/30 pointer-events-none" />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
