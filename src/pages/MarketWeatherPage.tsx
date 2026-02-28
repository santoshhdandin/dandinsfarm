import { TrendingUp, TrendingDown, Minus, Cloud, CloudRain, Sun, Wind, ThermometerSun } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MarketPrice {
  crop: string;
  cropKannada: string;
  bangalore: string;
  tumkur: string;
  mysore: string;
  hubli: string;
  dharwad: string;
  belgaum: string;
  davangere: string;
  shimoga: string;
  trend: 'up' | 'down' | 'stable';
}

interface WeatherDistrict {
  district: string;
  districtKannada: string;
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  minTemp: number;
  maxTemp: number;
  forecast: string;
  icon: typeof Sun;
}

export default function MarketWeatherPage() {
  const { t, i18n } = useTranslation();
  const isKn = i18n.language === 'kn';

  const [marketData] = useState<MarketPrice[]>([
    { crop: 'Tomato', cropKannada: 'ಟೊಮೇಟೋ', bangalore: '45', tumkur: '42', mysore: '48', hubli: '40', dharwad: '43', belgaum: '46', davangere: '44', shimoga: '41', trend: 'up' },
    { crop: 'Banana', cropKannada: 'ಬಾಳೆಹಣ್ಣು', bangalore: '35', tumkur: '33', mysore: '36', hubli: '34', dharwad: '35', belgaum: '37', davangere: '35', shimoga: '34', trend: 'stable' },
    { crop: 'Arecanut', cropKannada: 'ಅಡಿಕೆ', bangalore: '32000', tumkur: '31500', mysore: '32200', hubli: '31800', dharwad: '32100', belgaum: '31900', davangere: '32000', shimoga: '32500', trend: 'down' },
    { crop: 'Coconut', cropKannada: 'ತೆಂಗಿನಕಾಯಿ', bangalore: '25', tumkur: '24', mysore: '26', hubli: '23', dharwad: '25', belgaum: '24', davangere: '25', shimoga: '26', trend: 'up' },
    { crop: 'Turmeric', cropKannada: 'ಅರಿಶಿನ', bangalore: '140', tumkur: '138', mysore: '142', hubli: '137', dharwad: '140', belgaum: '139', davangere: '141', shimoga: '143', trend: 'stable' },
    { crop: 'Lemon', cropKannada: 'ನಿಂಬೆ', bangalore: '80', tumkur: '78', mysore: '82', hubli: '75', dharwad: '79', belgaum: '81', davangere: '80', shimoga: '83', trend: 'up' },
    { crop: 'Guava', cropKannada: 'ಪೇರಲೆ', bangalore: '55', tumkur: '52', mysore: '56', hubli: '53', dharwad: '54', belgaum: '55', davangere: '54', shimoga: '57', trend: 'stable' },
    { crop: 'Jamun', cropKannada: 'ಜಾಮೂನು', bangalore: '65', tumkur: '63', mysore: '67', hubli: '62', dharwad: '64', belgaum: '66', davangere: '65', shimoga: '68', trend: 'down' },
    { crop: 'Papaya', cropKannada: 'ಪಪ್ಪಾಯಿ', bangalore: '30', tumkur: '28', mysore: '31', hubli: '29', dharwad: '30', belgaum: '30', davangere: '29', shimoga: '32', trend: 'stable' },
    { crop: 'Mango', cropKannada: 'ಮಾವು', bangalore: '120', tumkur: '115', mysore: '125', hubli: '118', dharwad: '120', belgaum: '122', davangere: '119', shimoga: '128', trend: 'up' },
    { crop: 'Drumstick', cropKannada: 'ನುಗ್ಗೆಕಾಯಿ', bangalore: '70', tumkur: '68', mysore: '72', hubli: '67', dharwad: '69', belgaum: '71', davangere: '70', shimoga: '73', trend: 'up' },
  ]);

  const [weatherData] = useState<WeatherDistrict[]>([
    {
      district: 'Haveri',
      districtKannada: 'ಹಾವೇರಿ',
      temp: 28,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      minTemp: 22,
      maxTemp: 32,
      forecast: 'Slight chance of rain',
      icon: Cloud
    },
    {
      district: 'Hubli',
      districtKannada: 'ಹುಬ್ಬಳ್ಳಿ',
      temp: 30,
      condition: 'Sunny',
      humidity: 55,
      windSpeed: 15,
      minTemp: 24,
      maxTemp: 34,
      forecast: 'Clear skies expected',
      icon: Sun
    },
    {
      district: 'Bangalore',
      districtKannada: 'ಬೆಂಗಳೂರು',
      temp: 26,
      condition: 'Light Rain',
      humidity: 75,
      windSpeed: 10,
      minTemp: 20,
      maxTemp: 29,
      forecast: 'Rain likely today',
      icon: CloudRain
    },
  ]);

  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [lastUpdated] = useState(new Date().toLocaleString());

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-red-400" />;
      case 'down':
        return <TrendingDown size={16} className="text-green-400" />;
      default:
        return <Minus size={16} className="text-zinc-500" />;
    }
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedMarketData = [...marketData].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key as keyof MarketPrice];
    const bValue = b[sortConfig.key as keyof MarketPrice];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortConfig.direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          {t('marketWeather.title')}
        </h1>
        <p className="text-lg text-zinc-400 mb-8">{t('marketWeather.subtitle')}</p>

        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">{t('marketWeather.market.title')}</h2>
              <p className="text-sm text-zinc-400">{t('marketWeather.market.subtitle')}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-zinc-500">{t('marketWeather.market.lastUpdated')}</p>
              <p className="text-sm text-zinc-400">{lastUpdated}</p>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-800/50">
                  <tr>
                    <th
                      onClick={() => handleSort('crop')}
                      className="px-4 py-3 text-left text-sm font-semibold text-zinc-300 cursor-pointer hover:bg-zinc-700/50 transition-colors sticky left-0 bg-zinc-800/50 backdrop-blur-sm"
                    >
                      {t('marketWeather.market.headers.cropName')}
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">{t('marketWeather.market.headers.bangalore')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">{t('marketWeather.market.headers.tumkur')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">{t('marketWeather.market.headers.mysore')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">{t('marketWeather.market.headers.hubli')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">{t('marketWeather.market.headers.dharwad')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">{t('marketWeather.market.headers.belgaum')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">{t('marketWeather.market.headers.davangere')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">{t('marketWeather.market.headers.shimoga')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">{t('marketWeather.market.headers.trend')}</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedMarketData.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-t border-zinc-800 hover:bg-zinc-800/30 transition-colors ${index % 2 === 0 ? 'bg-zinc-900/20' : 'bg-transparent'
                        }`}
                    >
                      <td className="px-4 py-3 sticky left-0 bg-zinc-900/80 backdrop-blur-sm">
                        <div className="font-medium text-white">{isKn ? item.cropKannada : item.crop}</div>
                      </td>
                      <td className="px-4 py-3 text-center text-zinc-300">₹{item.bangalore}</td>
                      <td className="px-4 py-3 text-center text-zinc-300">₹{item.tumkur}</td>
                      <td className="px-4 py-3 text-center text-zinc-300">₹{item.mysore}</td>
                      <td className="px-4 py-3 text-center text-zinc-300">₹{item.hubli}</td>
                      <td className="px-4 py-3 text-center text-zinc-300">₹{item.dharwad}</td>
                      <td className="px-4 py-3 text-center text-zinc-300">₹{item.belgaum}</td>
                      <td className="px-4 py-3 text-center text-zinc-300">₹{item.davangere}</td>
                      <td className="px-4 py-3 text-center text-zinc-300">₹{item.shimoga}</td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center">
                          {getTrendIcon(item.trend)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-3 bg-zinc-900/30 rounded-lg p-3 border border-zinc-800">
            <p className="text-xs text-zinc-400 text-center">
              {t('marketWeather.market.note')}
            </p>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-white mb-1">{t('marketWeather.weather.title')}</h2>
            <p className="text-sm text-zinc-400">{t('marketWeather.weather.subtitle')}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-800/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-900/30">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-300">
                      {t('marketWeather.weather.headers.district')}
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">
                      {t('marketWeather.weather.headers.temp')}
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">
                      {t('marketWeather.weather.headers.condition')}
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">
                      {t('marketWeather.weather.headers.humidity')}
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">
                      {t('marketWeather.weather.headers.windSpeed')}
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-zinc-300">
                      {t('marketWeather.weather.headers.minMax')}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-300">
                      {t('marketWeather.weather.headers.forecast')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {weatherData.map((district, index) => (
                    <tr
                      key={index}
                      className={`border-t border-blue-800/20 hover:bg-blue-900/20 transition-colors ${index % 2 === 0 ? 'bg-blue-900/10' : 'bg-transparent'
                        }`}
                    >
                      <td className="px-4 py-4">
                        <div className="font-semibold text-white">{isKn ? district.districtKannada : district.district}</div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <ThermometerSun className="text-orange-400" size={16} />
                          <span className="text-xl font-bold text-white">{district.temp}°C</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center space-x-2">
                          <district.icon className="text-blue-400" size={20} />
                          <span className="text-zinc-300 text-sm">
                            {t(`marketWeather.weather.conditions.${district.condition}`)}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center text-zinc-300">{district.humidity}%</td>
                      <td className="px-4 py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Wind className="text-cyan-400" size={14} />
                          <span className="text-zinc-300">{district.windSpeed} km/h</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <div className="text-blue-300">{district.minTemp}°</div>
                        <div className="text-orange-300">{district.maxTemp}°</div>
                      </td>
                      <td className="px-4 py-4 text-zinc-300 text-sm">
                        {t(`marketWeather.weather.forecasts.${district.forecast}`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-3 bg-zinc-900/30 rounded-lg p-3 border border-zinc-800">
            <p className="text-xs text-zinc-400 text-center">
              {t('marketWeather.weather.note')}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
