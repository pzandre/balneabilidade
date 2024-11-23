import { useMap } from '@/components/contexts/MapContext';
import { LastUpdateDisplayStyles } from '@/components/styles/stylesheets';
import React from 'react';
import { Text, View } from 'react-native';

export const LastUpdateDisplay: React.FC = () => {
  const { lastUpdateTime } = useMap();

  if (!lastUpdateTime) return null;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <View style={LastUpdateDisplayStyles.container}>
      <View style={LastUpdateDisplayStyles.badge}>
        <Text style={LastUpdateDisplayStyles.text}>
          Atualizado às: {formatTime(lastUpdateTime)}
        </Text>
      </View>
    </View>
  );
};
