import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class SignUpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            confirmPassword: null,
            isSigninInProgress: false,
        };
    }

    onChangeEmail = (email) => {
        this.setState({email: email});
    }

    onChangePassword = (password) => {
        this.setState({password: password});
    }

    onChangeConfirmPassword = (password) => {
        this.setState({confirmPassword: password});
    }

    onSignUp = () => {
        if (this.state.email != null && this.state.password != null && this.state.confirmPassword != null) {
            if (this.state.password != this.state.confirmPassword) {
                Alert.alert("Password is not the same")
            }
            else {
                this.setState({isSigninInProgress: true});
                this.props.signUp(this.state.email, this.state.password);
                this.setState({isSigninInProgress: false});
            }
            this.setState({
                password: null,
                confirmPassword: null})
        }
        else {
            Alert.alert(
                "Invalid Sign Up",
                "Empty Email or Password",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    }

    onLogIn = () => {
        this.props.changePage("logIn")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
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
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={this.onChangeConfirmPassword}
                    value={this.state.confirmPassword}
                    placeholder="Confirm Password"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSignUp}
                    disabled={this.state.isSigninInProgress}>
                    <Text> Sign Up </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onLogIn}>
                    <Text> Log In </Text>
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
