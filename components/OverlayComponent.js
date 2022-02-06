import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MapComponent from "./MapComponent";
import ProfileComponent from "./ProfileComponent";

export default class OverlayComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    onOpenMenu = () => {
        this.setState({open: !this.state.open})
    }

    onPress = () => {
        this.props.changePage("start");
    }

    render() {
        return (
            <View>
                <MapComponent />
                {!this.state.open
                    && <TouchableOpacity style={styles.menuIcon} onPress={this.onOpenMenu}>
                    <AntDesign name="bars" size={48} color="black" />
                </TouchableOpacity>}
                {this.state.open
                    && <View style={styles.menu}>
                        <TouchableOpacity style={styles.menuIcon} onPress={this.onOpenMenu}>
                            <AntDesign name="bars" size={48} color="white" />
                        </TouchableOpacity>
                        <ProfileComponent style={styles.profile}/>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}>
                            <Text> Log Out </Text>
                        </TouchableOpacity>
                    </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        position: 'absolute',
        top: '5%',
        left: '5%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#CCCCCC',
        padding: 10,
        width: '50%',
        position: 'absolute',
        top: '90%',
        left: '25%'
    },
    profile: {
        position: 'relative',
        top: '20%',
        left: '20%'
    },
    menu: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
});
