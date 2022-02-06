import React from 'react';
import { Marker } from 'react-native-maps';
import { Image } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';

const dummyData = [
  {
    latitude: 34.020365200258375,
    owner: null,
    longitude: -118.28611382578427,
    description: "Tutor Campus Center"
  },
  {
    latitude: 34.01970743245265,
    owner: null,
    longitude: -118.28873568507092,
    description: "Science Library"
  },
  {
    latitude: 34.01873156061809,
    owner: null,
    longitude: -118.28240800987504,
    description: "Fertitta Hall"
  }
]

export default function Spots() {

  onRef = r => {
    this.menu = r;
  }

  onOptionSelect = (value) => {
    console.log(value);
  }

  const openMenu = (description) => {
    this.menu.open("everyMenu");
  }

  return (
    dummyData.map(spot => {
      return (<>
        <Marker
          coordinate={{
          latitude: spot.latitude,
          longitude: spot.longitude
        }}
        onPress={e => openMenu()}
        description={spot.description}>
          <Image source={require('../assets/spot_red.png')} style={{height: 35, width:35 }} />
        </Marker>
        <Menu ref={this.onRef} name="everyMenu" onSelect={value => this.onOptionSelect(value)}>
        <MenuTrigger />
        <MenuOptions>
          <MenuOption value={1} text={spot.description} />
        </MenuOptions>
        </Menu>
        </>)
    }
  ))
}