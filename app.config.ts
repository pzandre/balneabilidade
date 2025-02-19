import { ExpoConfig } from 'expo/config';
import 'ts-node/register';

const config: ExpoConfig = {
  name: "Balneabilidade Guarapari",
  description: "App para consultar a balneabilidade das praias de Guarapari",
  slug: "balneabilidade",
  version: "1.1.0",
  orientation: "portrait",
  owner: "andrepz",
  platforms: [
    "android"
  ],
  githubUrl: "https://github.com/pzandre/balneabilidade",
  userInterfaceStyle: "light",
  icon: "./assets/images/icon.png",
  scheme: "balneabilidadeguarapari",
  extra: {
    eas: {
      projectId: "fe727cc8-c224-4c77-8a6e-dc455bc1d861",
    }
  },
  plugins: [
    "expo-font",
    "expo-router",
    [
      "expo-splash-screen",
      {
        "backgroundColor": "#ecfbfc",
        "image": "./assets/images/splash-icon.png",
        "imageWidth": 200
      }
    ]  ],
  newArchEnabled: true,
  android: {
    package: "com.balneabilidade.balneabilidade",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ecfbfc"
    },
    splash: {
      backgroundColor: "#ecfbfc",
      image: "./assets/images/splash-icon.png",
    },
    config: {
      googleMaps: {
        apiKey: process.env.GOOGLE_MAPS_API_KEY
      }
    }
  },
  experiments: {
    typedRoutes: true
  }
};

export default config;
