import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';

export default class CheckInComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        this.props.checkIn(this.props.checkInStation.description)
    }

    onPressCheckout = () => {
        this.props.checkIn(null)
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.userInfo.checkedInStation != null
                    &&
                    <View>
                        <Text style={styles.title}>You are checked in to{this.props.checkInStation.description}</Text>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPressCheckout}>
                        <Text> Check Out </Text>
                        </TouchableOpacity>
                    </View>}
                {this.props.userInfo.checkedInStation == null
                    &&
                    <View>
                        <Text style={styles.title}>{this.props.checkInStation.description}</Text>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}>
                        <Text> Check In </Text>
                        </TouchableOpacity>
                    </View>}
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
