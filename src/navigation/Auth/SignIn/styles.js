import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        flex:              1,
    },
    error: {
        color:             'orange',
        textAlign:         'center',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },
    inputField: {
        paddingHorizontal: 25,
        paddingVertical:   15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
        paddingBottom:     20,
        marginBottom:      10,
        color:             '#FFF',
    },
    formWrapper: {
        marginTop: 80,
    },
    button: {
        padding:         20,
        marginTop:       30,
        backgroundColor: '#84dea6',
        alignItems:      'center',
    },
    buttonText: {
        color: '#FFF',
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth:     0,
    },
    checkboxText: {
        color: '#CECECE',
    },
});
