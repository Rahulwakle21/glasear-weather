import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchBar from './component/SearchBar';
import WeatherDetails from './component/WeatherDetails';
import { useWeather } from './customHook/useWeather';
const queryClient = new QueryClient();

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const [recentCities, setRecentCities] = useState<string[]>([]);

  const { data: weatherData } = useWeather(city); 
  const handleSearch = (newCity: string) => {
    setCity(newCity);
    if (!recentCities.includes(newCity)) {
      setRecentCities((prev) => [newCity, ...prev.slice(0, 4)]);
    }
  };

  return (

    <QueryClientProvider client={queryClient}>
      <div className="app">
        <SearchBar onSearch={handleSearch} />
        {weatherData && <WeatherDetails weatherData={weatherData} />}
      </div>
    </QueryClientProvider>
  );
};

export default App;
