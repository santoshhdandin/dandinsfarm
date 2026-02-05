import { TrendingUp, TrendingDown, Minus, Cloud, Droplets, ThermometerSun } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MarketItem {
  name: string;
  nameKannada: string;
  price: string;
  market: string;
  trend: 'up' | 'down' | 'stable';
  unit: string;
}

interface WeatherData {
  temp: number;
  humidity: number;
  rainProb: number;
  description: string;
}

interface ForecastDay {
  date: string;
  temp: number;
  rainProb: number;
  description: string;
}

export default function MarketWeatherPage() {
  const [marketData, setMarketData] = useState<MarketItem[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMarketData();
    fetchWeatherData();
  }, []);

  const fetchMarketData = async () => {
    try {
      const mockData: MarketItem[] = [
        { name: 'Tomato', nameKannada: 'ಟೊಮೇಟೋ', price: '45', market: 'Bengaluru', trend: 'up', unit: 'kg' },
        { name: 'Banana', nameKannada: 'ಬಾಳೆಹಣ್ಣು', price: '35', market: 'Tumakuru', trend: 'stable', unit: 'dozen' },
        { name: 'Arecanut', nameKannada: 'ಅಡಿಕೆ', price: '32000', market: 'Shivamogga', trend: 'down', unit: 'quintal' },
        { name: 'Coconut', nameKannada: 'ತೆಂಗಿನಕಾಯಿ', price: '25', market: 'Mysuru', trend: 'up', unit: 'piece' },
        { name: 'Turmeric', nameKannada: 'ಅರಿಶಿನ', price: '140', market: 'Bengaluru', trend: 'stable', unit: 'kg' },
        { name: 'Lemon', nameKannada: 'ನಿಂಬೆ', price: '80', market: 'Tumakuru', trend: 'up', unit: 'kg' },
        { name: 'Guava', nameKannada: 'ಪೇರಲೆ', price: '55', market: 'Mysuru', trend: 'stable', unit: 'kg' },
        { name: 'Jamun', nameKannada: 'ಜಾಮೂನು', price: '65', market: 'Bengaluru', trend: 'down', unit: 'kg' },
        { name: 'Papaya', nameKannada: 'ಪಪ್ಪಾಯಿ', price: '30', market: 'Shivamogga', trend: 'stable', unit: 'kg' },
        { name: 'Mango', nameKannada: 'ಮಾವು', price: '120', market: 'Mysuru', trend: 'up', unit: 'kg' },
        { name: 'Drumstick', nameKannada: 'ನುಗ್ಗೆಕಾಯಿ', price: '70', market: 'Bengaluru', trend: 'up', unit: 'kg' },
        { name: 'Vegetables', nameKannada: 'ತರಕಾರಿಗಳು', price: '40', market: 'Tumakuru', trend: 'stable', unit: 'kg' },
      ];
      setMarketData(mockData);
    } catch (error) {
      console.error('Error fetching market data:', error);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const mockWeather: WeatherData = {
        temp: 28,
        humidity: 65,
        rainProb: 40,
        description: 'Partly cloudy',
      };

      const mockForecast: ForecastDay[] = [
        { date: 'Tomorrow', temp: 29, rainProb: 30, description: 'Sunny' },
        { date: 'Day 2', temp: 27, rainProb: 60, description: 'Light rain' },
        { date: 'Day 3', temp: 26, rainProb: 50, description: 'Cloudy' },
      ];

      setWeatherData(mockWeather);
      setForecast(mockForecast);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setLoading(false);
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={20} className="text-red-400" />;
      case 'down':
        return <TrendingDown size={20} className="text-green-400" />;
      default:
        return <Minus size={20} className="text-zinc-500" />;
    }
  };

  const getTrendSymbol = (trend: string) => {
    switch (trend) {
      case 'up':
        return '🔺';
      case 'down':
        return '🔻';
      default:
        return '➖';
    }
  };

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          ಕರ್ನಾಟಕ ಮಾರುಕಟ್ಟೆ & ಹವಾಮಾನ
        </h1>
        <p className="text-xl text-zinc-400 mb-12">Karnataka Market & Weather</p>

        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು</h2>
            <p className="text-lg text-zinc-400">Market Prices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {marketData.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 rounded-xl p-5 border border-zinc-800 hover:border-green-600 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.nameKannada}</h3>
                    <p className="text-sm text-zinc-500">{item.name}</p>
                  </div>
                  <span className="text-2xl">{getTrendSymbol(item.trend)}</span>
                </div>

                <div className="mb-3">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    ₹{item.price}
                  </div>
                  <p className="text-sm text-zinc-500">per {item.unit}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                  <span className="text-sm text-zinc-400">{item.market}</span>
                  {getTrendIcon(item.trend)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-zinc-900/30 rounded-lg p-4 border border-zinc-800">
            <p className="text-sm text-zinc-400 text-center">
              Market prices are indicative and updated daily. Actual prices may vary by location and quality.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">ಹವಾಮಾನ ಮಾಹಿತಿ</h2>
            <p className="text-lg text-zinc-400">Weather Information</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
              <p className="text-zinc-400 mt-4">Loading weather data...</p>
            </div>
          ) : weatherData ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 border border-blue-800/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Karnataka</h3>
                    <p className="text-zinc-300">{weatherData.description}</p>
                  </div>
                  <Cloud size={64} className="text-blue-400" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black/30 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <ThermometerSun className="text-orange-400" size={24} />
                      <span className="text-zinc-400">ತಾಪಮಾನ</span>
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">{weatherData.temp}°C</div>
                    <p className="text-sm text-zinc-500">Temperature</p>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Droplets className="text-blue-400" size={24} />
                      <span className="text-zinc-400">ಮಳೆ ಸಾಧ್ಯತೆ</span>
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">{weatherData.rainProb}%</div>
                    <p className="text-sm text-zinc-500">Rain Probability</p>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Droplets className="text-cyan-400" size={24} />
                      <span className="text-zinc-400">ಆರ್ಡ್ರತೆ</span>
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">{weatherData.humidity}%</div>
                    <p className="text-sm text-zinc-500">Humidity</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">3-Day Forecast</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {forecast.map((day, index) => (
                    <div
                      key={index}
                      className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800"
                    >
                      <h4 className="text-lg font-bold text-white mb-3">{day.date}</h4>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-3xl font-bold text-white">{day.temp}°C</div>
                          <p className="text-sm text-zinc-400 mt-1">{day.description}</p>
                        </div>
                        <Cloud className="text-zinc-500" size={40} />
                      </div>
                      <div className="pt-3 border-t border-zinc-800">
                        <div className="flex items-center space-x-2">
                          <Droplets className="text-blue-400" size={16} />
                          <span className="text-sm text-zinc-400">Rain: {day.rainProb}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-zinc-400">
              <p>Unable to load weather data. Please try again later.</p>
            </div>
          )}

          <div className="mt-6 bg-zinc-900/30 rounded-lg p-4 border border-zinc-800">
            <p className="text-sm text-zinc-400 text-center">
              Weather information is updated regularly. Data shown is for general reference.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
