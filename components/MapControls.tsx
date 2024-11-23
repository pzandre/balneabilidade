import { useMap } from '@/components/contexts/MapContext';
import { MapControlsStyles } from '@/components/styles/stylesheets';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


interface MapControlsProps {
  mapRef: React.MutableRefObject<any>;
  onLayoutComplete?: () => void;
}

export const MapControls: React.FC<MapControlsProps> = ({ 
  mapRef, 
  onLayoutComplete 
}) => {
  const { centerRegion, defaultZoom } = useMap();

  const focusMap = useCallback(() => {
    mapRef.current?.animateCamera(
      { 
        center: {
          latitude: centerRegion.latitude,
          longitude: centerRegion.longitude
        },
        zoom: defaultZoom 
      },
      { duration: 1000 }
    );
  }, [centerRegion, defaultZoom]);

  React.useEffect(() => {
    onLayoutComplete?.();
  }, [onLayoutComplete]);

  return (
    <View style={MapControlsStyles.container}>
      <TouchableOpacity onPress={focusMap} style={MapControlsStyles.button}>
        <Text style={MapControlsStyles.buttonText}>Centralizar mapa</Text>
      </TouchableOpacity>
    </View>
  );
};
