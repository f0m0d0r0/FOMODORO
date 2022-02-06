import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import LoginComponent from "./LoginComponent";
import OverlayComponent from "./OverlayComponent";
import SignUpComponent from "./SignUpComponent";
import app from '../firebaseConfig';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: null,
                coins: null,
            },
            pageStatus: "start"
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

    signIn = (user) => {
        console.log("Logged In as " + user);
        // this.setState({user: email});
        this.setState({pageStatus: "loggedIn"});
    }

    changePage = (pageStatus) => {
        this.setState({pageStatus: pageStatus});
    }

    signUp = (email, password) => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                this.signIn(user);
                this.changePage('loggedIn');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
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
                { this.state.pageStatus == "loggedIn" && <OverlayComponent changePage={this.changePage}/> }
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
