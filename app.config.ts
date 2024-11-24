module.exports = {
  "expo": {
    "name": "Balneabilidade Guarapari",
    "slug": "balneabilidade",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
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
      "bundleIdentifier": "com.balneabilidade.balneabilidade",
      "config": {
        "googleMapsApiKey": process.env.GOOGLE_MAPS_API_KEY
      }
    },
    "android": {
      "package": "com.balneabilidade.balneabilidade",
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/icon_adaptive_fore.png",
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
      "favicon": "./assets/images/00FF00pin_64.png"
    },
    "plugins": [
      "expo-font",
      "expo-router",
      "expo-splash-screen"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "eas": {
        "projectId": "fe727cc8-c224-4c77-8a6e-dc455bc1d861",
      }
    }
  }
}