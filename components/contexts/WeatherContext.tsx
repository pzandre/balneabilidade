import React, { createContext, useContext, useEffect, useState } from 'react';

interface WeatherData {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'foggy';
}

interface WeatherContextType {
  weather: WeatherData | null;
  setWeather: (weather: WeatherData | null) => void;
  fetchWeather: () => Promise<void>;
  isLoading: boolean;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('your-weather-api-endpoint');
      if (!response.ok) {
        throw new Error('Weather data fetch failed');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
      if (!weather) {
        setWeather({
          temperature: 25,
          condition: 'sunny'
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    
    const interval = setInterval(fetchWeather, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, setWeather, fetchWeather, isLoading }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
