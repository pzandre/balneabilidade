import { useMap } from "@/components/contexts/MapContext";
import { LastUpdateDisplay } from "@/components/LastUpdateDisplay";
import {
  MapComponentStyles,
  MapControlsStyles,
} from "@/components/styles/stylesheets";
import { useRouter } from "expo-router";
import React, { useCallback, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { Button, Menu, Portal } from "react-native-paper";

interface MapComponentProps {
  onMapRef?: (ref: any) => void;
}

export const MapComponent: React.FC<MapComponentProps> = ({ onMapRef }) => {
  const { locationData, centerRegion, defaultZoom } = useMap();
  const mapRef = useRef<any>();
  const [menuVisible, setMenuVisible] = React.useState(false);
  const router = useRouter();

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const goodBeachIcon = "@/assets/images/00FF00pin_128.png";
  const badBeachIcon = "@/assets/images/FF0000pin_128.png";

  React.useEffect(() => {
    if (onMapRef && mapRef.current) {
      onMapRef(mapRef.current);
    }
  }, [onMapRef]);

  const focusMap = useCallback(() => {
    closeMenu();
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: centerRegion.latitude,
          longitude: centerRegion.longitude,
        },
        zoom: defaultZoom,
      },
      { duration: 1000 }
    );
  }, [centerRegion, defaultZoom]);

  return (
    <View>
      <View style={MapControlsStyles.container}>
        <TouchableOpacity>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <Button labelStyle={MapControlsStyles.label} onPress={openMenu}>MENU</Button>
            }
          >
            <Menu.Item onPress={focusMap} title="Centralizar mapa" />
            <Menu.Item
              onPress={() => {
                closeMenu();
                router.push("/report");
              }}
              title="Relatório de Balneabilidade"
            />
            <Menu.Item
              onPress={() => {
                closeMenu();
              }}
              title="Sobre nós"
            />
            <Menu.Item
              onPress={() => {
                closeMenu();
              }}
              title="Política de Privacidade"
            />
            <Menu.Item
              onPress={() => {
                closeMenu();
              }}
              title="Termos de Uso"
            />
          </Menu>
        </TouchableOpacity>
      </View>
      <MapView
        provider={PROVIDER_DEFAULT}
        googleMapId={process.env.EXPO_PUBLIC_MAP_ID}
        style={MapComponentStyles.map}
        region={centerRegion}
        initialCamera={{
          center: {
            latitude: centerRegion.latitude,
            longitude: centerRegion.longitude,
          },
          heading: 0,
          pitch: 0,
          zoom: defaultZoom,
        }}
        ref={mapRef}
      >
        <Portal>
          {locationData.map((data) => (
            <Marker
              key={data.id}
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }}
              image={
                data.is_good ? require(goodBeachIcon) : require(badBeachIcon)
              }
              icon={
                data.is_good ? require(goodBeachIcon) : require(badBeachIcon)
              }
              title={data.title}
              description={data.description}
            />
          ))}
        </Portal>
      </MapView>
      <LastUpdateDisplay />
    </View>
  );
};
