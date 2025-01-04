import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const MapControlsStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    top: 20,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 60,
    minWidth: 60,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  }
});

const LastUpdateDisplayStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 16,
    zIndex: 1000,
    opacity: 0.6,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 16,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

const MapComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

const WeatherBoxStyles = StyleSheet.create({
  weatherContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 60,
    minWidth: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,

  },
  temperatureText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

const WebViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});


export { AppStyles, LastUpdateDisplayStyles, MapComponentStyles, MapControlsStyles, WeatherBoxStyles, WebViewStyles };

