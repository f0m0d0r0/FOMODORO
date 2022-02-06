import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            isSigninInProgress: false,
        };
    }

    onChangeEmail = (email) => {
        this.setState({email: email});
    }

    onChangePassword = (password) => {
        this.setState({password: password});
    }

    onLogIn = () => {
        if (this.state.email != null && this.state.password != null) {
            this.setState({isSigninInProgress: true});
            this.props.signIn(this.state.email, this.state.password);
            this.setState({isSigninInProgress: false});
        }
        else {
            Alert.alert(
                "Invalid Login",
                "Empty Password Or Email",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    }

    onSignUp = () => {
        this.props.changePage("signUp")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={this.onChangeEmail}
                    value={this.state.email}
                    placeholder="Email"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={this.onChangePassword}
                    value={this.state.password}
                    placeholder="Password"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onLogIn}
                    disabled={this.state.isSigninInProgress}>
                    <Text> Log In </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSignUp}>
                    <Text> Sign Up </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        margin: 5,
        borderWidth: 1,
        padding: 5,
        height: 30
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        alignSelf: 'center',
        paddingBottom: 24
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#AAAAAA',
        padding: 10,
        width: '100%',
        marginTop: 20
    }
});
