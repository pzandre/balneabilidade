import { Stack } from "expo-router";
import { Platform } from "react-native";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
          ...Platform.select({
            android: {
              elevation: 4,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(0, 0, 0, 0.1)',
            },
          }),
        },
        headerTitleStyle: {
          fontSize: 18,
          color: '#1a1a1a',
        },
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: '#f8f9fa',
        },
        headerTintColor: '#007AFF',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        presentation: 'card',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Balneabilidade',
        }}
      />
    </Stack>
  );
};

export default Layout;