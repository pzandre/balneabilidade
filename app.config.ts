module.exports = {
  "expo": {
    "name": "balneabilidade",
    "slug": "balneabilidade",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/logo.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/images/logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff",
      "imageWidth": 100
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.aptechnology.Balneabilidade",
      "config": {
        "googleMapsApiKey": process.env.GOOGLE_MAPS_API_KEY
      }
    },
    "android": {
      "package": "com.aptechnology.Balneabilidade",
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/logo.png",
        "backgroundColor": "#ffffff"
      },
      "config": {
        "googleMaps": {
          "apiKey": process.env.GOOGLE_MAPS_API_KEY
        }
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/00FF00pin_128.png"
    },
    "plugins": [
      "expo-font",
      "expo-router",
      "expo-splash-screen",
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}