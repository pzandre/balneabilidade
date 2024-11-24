import WeatherCondition from '@/constants/WeatherConditions';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface WeatherData {
  temperature: number;
  condition: WeatherCondition;
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
  const backendUrl = process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:8000/api/";
  const backendApiKey = process.env.EXPO_PUBLIC_BACKEND_API_KEY;

  const fetchWeather = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        backendUrl + 'weather/',
        {
          headers: {
            Authorization: `Api-Key ${backendApiKey}`,
          }
        }
      );
      if (!response.ok) {
        throw new Error('Weather data fetch failed ' + JSON.stringify(response.json()));
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
      if (!weather) {
        setWeather({
          temperature: 25,
          condition: WeatherCondition.Sunny,
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
