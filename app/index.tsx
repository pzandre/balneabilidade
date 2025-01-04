import { MapProvider, useMap } from '@/components/contexts/MapContext';
import { WeatherProvider } from '@/components/contexts/WeatherContext';
import { MapComponent } from '@/components/MapComponent';
import { AppStyles } from '@/components/styles/stylesheets';
import { WeatherBox } from '@/components/WeatherBox';
import { PaperProvider, Portal } from 'react-native-paper';

import { useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const mapRef = useRef<any>();

  const AppContent = () => {
    const { fetchLocationData } = useMap();
    const navigation = useNavigation();

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        fetchLocationData();
        SplashScreen.hideAsync()
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

  return (
    <WeatherProvider>
      <MapProvider>
        <AppContent />
      </MapProvider>
    </WeatherProvider>
  );
}
