import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ChatWidget from './components/ChatWidget';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import MarketWeatherPage from './pages/MarketWeatherPage';
import CropsPage from './pages/CropsPage';
import GalleryPage from './pages/GalleryPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-950/50 via-black to-zinc-900/30 pointer-events-none" />
      <Navigation />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ourstory" element={<StoryPage />} />
          <Route path="/karnataka-market" element={<MarketWeatherPage />} />
          <Route path="/our-farm-produce" element={<CropsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/learn-farming" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;
