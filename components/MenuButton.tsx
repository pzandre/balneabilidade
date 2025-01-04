import { useRouter } from "expo-router";
import { FC, useCallback, useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Button, Menu } from "react-native-paper";
import { useMap } from "./contexts/MapContext";
import { MapControlsStyles } from "./styles/stylesheets";

export const MenuButton: FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();
  const { centerRegion, defaultZoom, mapRef } = useMap();

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

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
  }, [centerRegion, defaultZoom, mapRef]);

  return (
    <SafeAreaView style={MapControlsStyles.container}>
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
    </SafeAreaView>
  )
}