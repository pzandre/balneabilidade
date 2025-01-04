import { useMap } from '@/components/contexts/MapContext';
import { LastUpdateDisplayStyles } from '@/components/styles/stylesheets';
import { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';

export const LastUpdateDisplay: FC = () => {
  const { lastUpdateTime } = useMap();

  if (!lastUpdateTime) return null;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <SafeAreaView style={LastUpdateDisplayStyles.container}>
      <Text style={LastUpdateDisplayStyles.text}>
        Atualizado às: {formatTime(lastUpdateTime)}
      </Text>
    </SafeAreaView>
  );
};
