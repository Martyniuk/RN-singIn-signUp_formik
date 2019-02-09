import React, { Component, Fragment } from 'react';
import {
    Button,
    ImageBackground,
    Text,
    TextInput,
    View,
    StyleSheet,
    StatusBar
} from 'react-native';

import { Images } from 'utils/images';
import { AuthTopNavigator } from 'navigation/Auth';

const styles = StyleSheet.create({
    containerWithImage: {
        flex:           1,
        width:          '100%',
        height:         '100%',
        justifyContent: 'center',
        alignItems:     'center',
    },
    error: {
        color: 'red',
    },
    inputField: {
        paddingHorizontal: 20,
    },
    formWrapper: {
        backgroundColor: 'rgba(43, 42, 42, 0.6)',
        width:           '80%',
        height:          '80%',
    },
});

class AuthScreen extends Component {
    static router = AuthTopNavigator.router;

    render () {
        const { navigation } = this.props;

        return (
            <ImageBackground
                source = { Images.rick5 }
                style = { styles.containerWithImage }>
                <StatusBar barStyle = "light-content" />
                <View style = { styles.formWrapper }>
                    <AuthTopNavigator navigation = { navigation } />
                </View>
            </ImageBackground>
        );
    }
}

export { AuthScreen };
