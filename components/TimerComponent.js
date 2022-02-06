import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class TimerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            timerPaused: true
        };
    }

    componentDidMount() {
        this.setState({timerPaused: false});
    }

    render() {
        return (
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

});
