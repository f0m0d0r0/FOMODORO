import React from 'react';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion }  from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions, Button, TouchableOpacity} from 'react-native';

export default class MapComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    state = {
        region: null
    }

    render() {
        return (
            <View>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    followUserLocation={true}
                    showsUserLocation={true}>
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
