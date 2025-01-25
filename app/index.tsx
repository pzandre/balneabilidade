import { MapProvider } from "@/components/contexts/MapContext";
import { WeatherProvider } from "@/components/contexts/WeatherContext";
import { LastUpdateDisplay } from "@/components/LastUpdateDisplay";
import { MapComponent } from "@/components/MapComponent";
import { MenuButton } from "@/components/MenuButton";
import { AppStyles } from "@/components/styles/stylesheets";
import { WeatherBox } from "@/components/WeatherBox";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

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

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      style={AppStyles.container}
      onLayout={onLayoutRootView}
    >
      <WeatherProvider>
        <MapProvider>
          <PaperProvider>
            <MapComponent />
            <WeatherBox />
            <MenuButton />
            <LastUpdateDisplay />
          </PaperProvider>
        </MapProvider>
      </WeatherProvider>
    </SafeAreaView>
  );
}
