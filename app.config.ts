module.exports = {
  "owner": "andrepz",
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
    "plugins": [
      "expo-font",
      "expo-router"
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