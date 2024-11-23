import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
  container: {
      flex: 1,
  }
});

const MapControlsStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  button: {
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
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

const LastUpdateDisplayStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 1000,
  },
  badge: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  text: {
    color: 'white',
    fontSize: 12,
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
    minHeight: 50,
    minWidth: 80,
    justifyContent: 'center',
  },
  weatherContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  temperatureText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export { AppStyles, LastUpdateDisplayStyles, MapComponentStyles, MapControlsStyles, WeatherBoxStyles };

