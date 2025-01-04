import { useWeather } from '@/components/contexts/WeatherContext';
import { WeatherBoxStyles } from '@/components/styles/stylesheets';
import WeatherCondition from '@/constants/WeatherConditions';
import { FC } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: number;
}

const WeatherIcon: FC<WeatherIconProps> = ({ condition, size = 24 }) => {
  switch (condition) {
    case 'sunny':
      return <MaterialCommunityIcons name="weather-sunny" size={24} color="#FFD700" />;
    case 'cloudy':
      return <MaterialCommunityIcons name="weather-cloudy" size={24} color="#808080" />;
    case 'rainy':
      return <MaterialCommunityIcons name="weather-pouring" size={size} color="#4682B4" />;
    case 'snowy':
      return <MaterialCommunityIcons name="weather-snowy-heavy" size={size} color="#B0E0E6" />;
    case 'foggy':
      return <MaterialCommunityIcons name="weather-fog" size={24} color="#778899" />
    default:
      return <MaterialCommunityIcons name="weather-cloudy-clock" size={24} color="#FFD700" />;
  }
};

export const WeatherBox: FC = () => {
  const { weather, isLoading } = useWeather();

  if (isLoading && !weather) {
    return (
      <SafeAreaView style={WeatherBoxStyles.weatherContainer}>
        <ActivityIndicator size="small" />
      </SafeAreaView>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <SafeAreaView style={WeatherBoxStyles.weatherContainer}>
      <WeatherIcon condition={weather.condition} />
      <Text style={WeatherBoxStyles.temperatureText}>
        {weather.temperature}°C
      </Text>
    </SafeAreaView>
  );
};
