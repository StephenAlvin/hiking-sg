import { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, CloudLightning, Wind, Droplets, Calendar } from 'lucide-react';
import { WeatherInfo } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Mock weather data - in a real app, this would come from an API
const mockWeatherData: WeatherInfo[] = [
  {
    date: new Date().toISOString().split('T')[0],
    temperature: 29,
    condition: 'Partly Cloudy',
    precipitation: 20,
    humidity: 80,
    windSpeed: 12,
    icon: 'cloud'
  },
  {
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    temperature: 30,
    condition: 'Sunny',
    precipitation: 10,
    humidity: 75,
    windSpeed: 10,
    icon: 'sun'
  },
  {
    date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
    temperature: 28,
    condition: 'Rain Showers',
    precipitation: 60,
    humidity: 85,
    windSpeed: 15,
    icon: 'cloud-rain'
  }
];

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState<WeatherInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('today');

  useEffect(() => {
    // Simulate API fetch with a delay
    const timer = setTimeout(() => {
      setWeatherData(mockWeatherData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getWeatherIcon = (icon: string, className?: string) => {
    switch (icon) {
      case 'sun':
        return <Sun className={cn("text-amber-500", className)} />;
      case 'cloud':
        return <Cloud className={cn("text-gray-500", className)} />;
      case 'cloud-rain':
        return <CloudRain className={cn("text-blue-500", className)} />;
      case 'cloud-lightning':
        return <CloudLightning className={cn("text-purple-500", className)} />;
      default:
        return <Sun className={cn("text-amber-500", className)} />;
    }
  };

  const getDateLabel = (dateStr: string, index: number) => {
    if (index === 0) return 'Today';
    if (index === 1) return 'Tomorrow';
    
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const renderWeatherContent = (weather: WeatherInfo, index: number) => (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{getDateLabel(weather.date, index)}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(weather.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </p>
        </div>
        <div className="flex items-center">
          {getWeatherIcon(weather.icon, "h-10 w-10")}
        </div>
      </div>
      
      <div className="mb-4">
        <span className="text-3xl font-bold">{weather.temperature}°C</span>
        <p className="text-sm text-gray-600 dark:text-gray-400">{weather.condition}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center">
          <CloudRain className="h-4 w-4 mr-2 text-blue-500" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {weather.precipitation}% chance
          </span>
        </div>
        <div className="flex items-center">
          <Droplets className="h-4 w-4 mr-2 text-blue-500" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {weather.humidity}% humidity
          </span>
        </div>
        <div className="flex items-center">
          <Wind className="h-4 w-4 mr-2 text-blue-500" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {weather.windSpeed} km/h
          </span>
        </div>
      </div>

      {index === 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-emerald-700 dark:text-emerald-500 font-medium flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Good hiking conditions
          </p>
        </div>
      )}
    </div>
  );

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          Singapore Trail Weather
        </CardTitle>
        <CardDescription>
          Current and forecasted trail conditions
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex flex-col items-center justify-center h-40">
            <div className="h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-sm text-gray-500">Loading weather data...</p>
          </div>
        ) : (
          <Tabs defaultValue="today" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
              <TabsTrigger value="day-after">Day After</TabsTrigger>
            </TabsList>
            
            {weatherData.map((weather, index) => (
              <TabsContent key={weather.date} value={index === 0 ? 'today' : index === 1 ? 'tomorrow' : 'day-after'}>
                {renderWeatherContent(weather, index)}
              </TabsContent>
            ))}
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;