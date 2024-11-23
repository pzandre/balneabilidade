import React, { createContext, useCallback, useContext, useState } from 'react';
import { Alert } from 'react-native';
import { Region } from 'react-native-maps';

interface LocationData {
  id: string;
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
  is_good?: boolean;
}

interface MapContextType {
  locationData: LocationData[];
  centerRegion: Region;
  defaultZoom: number;
  fetchLocationData: () => Promise<void>;
  lastUpdateTime: Date | null;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locationData, setLocationData] = useState<LocationData[]>([]);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date | null>(null);
  const backendUrl = process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:8000/api/";
  
  const defaultZoom = 13;
  const centerRegion: Region = {
    latitude: -20.660144478724504,
    longitude: -40.49059869532745,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const fetchLocationData = useCallback(async () => {
    try {
      const response = await fetch(backendUrl + 'locations/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLocationData(data);
      setLastUpdateTime(new Date());
    } catch (error) {
      Alert.alert(
        'Error',
        'There was an error loading the map data. Please try again later.',
        [{ text: 'OK' }]
      );
      console.error('Error fetching location data:', error);
    }
  }, []);

  const value = {
    locationData,
    centerRegion,
    defaultZoom,
    fetchLocationData,
    lastUpdateTime,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export const useMap = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};
