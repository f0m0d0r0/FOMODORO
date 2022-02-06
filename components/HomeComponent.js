import React from 'react';
import {StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import LoginComponent from "./LoginComponent";
import OverlayComponent from "./OverlayComponent";
import SignUpComponent from "./SignUpComponent";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebaseConfig";

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: null,
                coins: null,
            },
            pageStatus: "start",
            error: "",
        }
    }

    openLogin = () => {
        console.log("Login opened");
        this.setState({pageStatus: "logIn"});
    }

    openSignUp = () => {
        console.log("Sign Up opened");
        this.setState({pageStatus: "signUp"});
    }

    setUser = (user) => {
        console.log(JSON.stringify(user));
        this.setState({user: {email: user.email}});
        this.setState({pageStatus: "loggedIn"});
    }

    changePage = (pageStatus) => {
        this.setState({pageStatus: pageStatus});
    }

    signIn = (email, password) => {
        signInWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                this.setUser(user);
                this.changePage('loggedIn');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });

    }

    signUp = (email, password) => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                this.setUser(user);
                this.changePage('loggedIn');
            })
            .catch(error => {
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        Alert.alert('Email already in use')
                        break;
                    case 'auth/invalid-email':
                        Alert.alert('Invalid email')
                        break;
                    case 'auth/invalid-password':
                        Alert.alert('Password must be at least 6 characters long')
                        break;
                    default:
                        Alert.alert('Unable to sign up')
                }
            });
    }

    render () {
        return (
            <View>
                { this.state.pageStatus == "start"
                    && <View style={styles.homeView} onTouchStart={this.openLogin}>
                        <Text style={styles.title}>Welcome to FOMODORO</Text>
                        <Text style={styles.text}>Tap anywhere on screen to login</Text>
                    </View>}
                { this.state.pageStatus == "logIn" && <LoginComponent signIn={this.signIn} changePage={this.changePage}/> }
                { this.state.pageStatus == "signUp" && <SignUpComponent changePage={this.changePage} signUp={this.signUp}/> }
                { this.state.pageStatus == "loggedIn" && <OverlayComponent changePage={this.changePage} user={this.state.user}/>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        fontWeight: "bold"
    },
    text: {
        color: 'black',
        textAlign: 'center',
        fontWeight: "bold"
    }
});
