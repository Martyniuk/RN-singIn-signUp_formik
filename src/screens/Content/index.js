import React, { Component } from 'react';
import { Button, ImageBackground, View, StyleSheet } from 'react-native';

import { Images } from 'utils/images';

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

class ContentScreen extends Component {
    render () {
        return (
            <ImageBackground
                source = { Images.rick5 }
                style = { styles.containerWithImage }>
                <View style = { styles.formWrapper }>
                    <Button
                        title = "Log out"
                        onPress = { () => console.log('button pressed') }
                    />
                </View>
            </ImageBackground>
        );
    }
}

export { ContentScreen };
