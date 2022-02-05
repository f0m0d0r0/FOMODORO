import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from "expo-location";

export default function App() {
  const [mapRegion, setmapRegion] = useState({
    longitude: -118.286152,
    latitude: 34.020355,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.0021,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      } else {
        console.log('Access granted!!')
        // start listening for location
        // attach a listener. get location every x seconds
        let location = await Location.watchPositionAsync({}, (loc) => {
          // console.log(loc.coords);
          setmapRegion({...loc.coords,
            longitudeDelta: mapRegion.longitudeDelta,
            latitudeDelta: mapRegion.latitudeDelta});
        })
    }
    })();
  }, []);

  useEffect(() => {
    // trigger when location changes
    // update mapRegion
    console.log(mapRegion);
  }, [mapRegion])

  // const watch_location = async () => {
  //   if (status === 'granted') {

  //    )}}

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        // followsUserLocation={true}
        showBuildings={true}
        provider={PROVIDER_GOOGLE}
        region={mapRegion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
