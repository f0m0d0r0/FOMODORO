import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Back,</Text>
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
});
