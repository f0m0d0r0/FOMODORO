import React, { useState, useEffect, useRef } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import * as Location from "expo-location";
import Spots from "./Spots";

export default function MapComponent() {
  const [camView, setCamView] = useState({
    center: {
      longitude: -118.286144,
      latitude: 34.020359,
    },
    pitch: 60,
    heading: 0,
    altitude: 0,
    zoom: 19
  });

  useEffect(() => { // updates user location
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
        let location = await Location.watchPositionAsync({
          accuracy: 4,
          distanceInterval: 3
        }, (loc) => {
          // setCamView({
          //   center: {
          //     latitude: loc.coords.latitude,
          //     longitude: loc.coords.longitude
          //   },
          //   pitch: camView.pitch,
          //   heading: camView.heading,
          //   altitude: camView.altitude,
          //   zoom: camView.zoom
          // })
          // mapRef.current.animateCamera({
          //   center: {
          //     latitude: loc.coords.latitude,
          //     longitude: loc.coords.longitude
          //   },
          //   zoom: 19,
          //   pitch: 60,
          //   heading: camView.heading
          // })
          setCamView({
            center: {
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude
            },
            pitch: camView.pitch,
            heading: camView.heading,
            altitude: camView.altitude,
            heading: camView.heading,
            zoom:19
          })
        })
    }
    })();
  }, []);

  const mapRef = useRef(null);
  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      showsUserLocation={false}
      followsUserLocation={true}
      showBuildings={true}
      provider={PROVIDER_GOOGLE}
      zoomEnabled={false}
      zoomTapEnabled={false}
      zoomControlEnabled={false}
      rotateEnabled={false}
      scrollEnabled={false}
      scrollDuringRotateOrZoomEnabled={false}
      pitchEnabled={false}
      toolbarEnabled={false}
      camera={camView}
    >
      <Marker
        coordinate={{
        latitude: camView.center.latitude,
        longitude: camView.center.longitude,
        }}
        description={"This is a marker in React Native"}
      >
        <Image source={require('../assets/spot.png')} style={{height: 35, width:35 }} />

      </Marker>
      <Spots />
  </MapView>
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
