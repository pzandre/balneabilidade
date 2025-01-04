import { MapProvider, useMap } from '@/components/contexts/MapContext';
import { WeatherProvider } from '@/components/contexts/WeatherContext';
import { MapComponent } from '@/components/MapComponent';
import { AppStyles } from '@/components/styles/stylesheets';
import { WeatherBox } from '@/components/WeatherBox';
import { PaperProvider, Portal } from 'react-native-paper';

import { useNavigation } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const mapRef = useRef<any>();

  const AppContent = () => {
    const { fetchLocationData } = useMap();
    const navigation = useNavigation();

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        fetchLocationData();
      });
  
      return unsubscribe;
    }, [navigation, fetchLocationData]);

    return (
      <PaperProvider>
          <View style={AppStyles.container}>
        <Portal>
            <MapComponent onMapRef={(ref) => (mapRef.current = ref)} />
            <WeatherBox />
        </Portal>
          </View>
      </PaperProvider>
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
