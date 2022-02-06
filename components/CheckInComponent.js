import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';

export default class CheckInComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.checkInStation.description}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}>
                    <Text> Check In </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: '10%',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        alignSelf: 'center',
        color: 'white',
        margin: 30
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#CCCCCC',
        padding: 10,
        width: '50%',
    },
});
