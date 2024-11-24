import { useWeather } from '@/components/contexts/WeatherContext';
import { WeatherBoxStyles } from '@/components/styles/stylesheets';
import WeatherCondition from '@/constants/WeatherConditions';
import { Cloud, CloudFog, CloudRain, CloudSnow, Sun } from 'lucide-react-native';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, size = 24 }) => {
  switch (condition) {
    case 'sunny':
      return <Sun size={size} color="#FFD700" />;
    case 'cloudy':
      return <Cloud size={size} color="#808080" />;
    case 'rainy':
      return <CloudRain size={size} color="#4682B4" />;
    case 'snowy':
      return <CloudSnow size={size} color="#B0E0E6" />;
    case 'foggy':
      return <CloudFog size={size} color="#778899" />;
    default:
      return <Sun size={size} color="#FFD700" />;
  }
};

export const WeatherBox: React.FC = () => {
  const { weather, isLoading } = useWeather();

  if (isLoading && !weather) {
    return (
      <View style={WeatherBoxStyles.weatherContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <View style={WeatherBoxStyles.weatherContainer}>
      <View style={WeatherBoxStyles.weatherContent}>
        <WeatherIcon condition={weather.condition} />
        <Text style={WeatherBoxStyles.temperatureText}>
          {weather.temperature}°C
        </Text>
      </View>
    </View>
  );
};
