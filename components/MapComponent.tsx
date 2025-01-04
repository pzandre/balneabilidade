import { useMap } from "@/components/contexts/MapContext";
import { MapComponentStyles } from "@/components/styles/stylesheets";
import { FC } from "react";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";

export const MapComponent: FC = () => {
  const { locationData, centerRegion, defaultZoom, mapRef } = useMap();

  const goodBeachIcon = "@/assets/images/00FF00pin_128.png";
  const badBeachIcon = "@/assets/images/FF0000pin_128.png";

  return (
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
          icon={data.is_good ? require(goodBeachIcon) : require(badBeachIcon)}
          title={data.title}
          description={data.description}
        />
      ))}
    </MapView>
  );
};
