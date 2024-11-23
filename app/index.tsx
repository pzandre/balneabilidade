import { MapProvider, useMap } from '@/components/contexts/MapContext';
import { WeatherProvider } from '@/components/contexts/WeatherContext';
import { MapComponent } from '@/components/MapComponent';
import { MapControls } from '@/components/MapControls';
import { AppStyles } from '@/components/styles/stylesheets';
import { WeatherBox } from '@/components/WeatherBox';

import { SplashScreen, useNavigation } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const mapRef = useRef<any>();

  const AppContent = () => {
    const { fetchLocationData } = useMap();
    const navigation = useNavigation();

    const handleLayoutComplete = useCallback(() => {
      if (appIsReady) {
        SplashScreen.hide();
      }
    }, [appIsReady]);

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        fetchLocationData();
      });
  
      return unsubscribe;
    }, [navigation, fetchLocationData]);

    return (
      <View style={AppStyles.container}>
        <MapComponent onMapRef={(ref) => (mapRef.current = ref)} />
        <MapControls 
          mapRef={mapRef}
          onLayoutComplete={handleLayoutComplete}
        />
        <WeatherBox />
      </View>
    );
  };

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <WeatherProvider>
      <MapProvider>
        <AppContent />
      </MapProvider>
    </WeatherProvider>
  );
}
