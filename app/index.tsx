import { MapProvider } from "@/components/contexts/MapContext";
import { WeatherProvider } from "@/components/contexts/WeatherContext";
import { LastUpdateDisplay } from "@/components/LastUpdateDisplay";
import { MapComponent } from "@/components/MapComponent";
import { MenuButton } from "@/components/MenuButton";
import { AppStyles } from "@/components/styles/stylesheets";
import { WeatherBox } from "@/components/WeatherBox";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";

preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const AppContent = () => {
    return (
      <SafeAreaView style={AppStyles.container}>
        <MapComponent />
        <WeatherBox />
        <MenuButton />
        <LastUpdateDisplay />
      </SafeAreaView>
    );
  };

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await hideAsync();
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
        <PaperProvider>
          <AppContent />
        </PaperProvider>
      </MapProvider>
    </WeatherProvider>
  );
}
