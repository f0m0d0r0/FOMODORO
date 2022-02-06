import React from 'react';
import { Marker } from 'react-native-maps';
import { Image } from 'react-native';

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

export default class Spots extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            dummyData.map(spot => {
                return (
                    <Marker
                        coordinate={{
                            latitude: spot.latitude,
                            longitude: spot.longitude
                        }}
                        onPress={() => this.props.onClickStation(spot)}>
                        <Image source={require('../assets/spot_red.png')} style={{height: 35, width:35 }} />
                    </Marker>
                )
            })
        )
    }
}
