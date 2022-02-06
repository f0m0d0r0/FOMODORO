import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import * as Location from "expo-location";
import Map from "./components/Map"
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuProvider>
        <Map />
      </MenuProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
