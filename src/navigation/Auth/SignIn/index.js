import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { CheckBox } from 'react-native-elements';

import { styles } from './styles';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .label('Email')
        .email()
        .required(),
    password: yup
        .string()
        .label('Password')
        .required()
        .min(2, 'Password to short...')
        .max(12, 'Password is too long'),
});

class SignIn extends Component {
    constructor (props) {
        super(props);

        this.state = {
            signIn: {
                email:    '',
                password: '',
            },
            checked: false,
        };
    }

    onSubmitHandler = args => {
        console.log('args in submit', args);
    };

    handlePressCheck = () => {
        this.setState(prevState => ({
            checked: !prevState.checked,
        }));
    };

    drawFrom = props => {
        return (
            <View style = { styles.formWrapper }>
                <TextInput
                    placeholder = "Email"
                    placeholderTextColor = "#CECECE"
                    style = { styles.inputField }
                    value = { props.values.email }
                    onBlur = { props.handleBlur('email') }
                    onChangeText = { props.handleChange('email') }
                />
                <Text style = { styles.error }>
                    {props.touched.email && props.errors.email}
                </Text>
                <TextInput
                    secureTextEntry
                    placeholder = "Password"
                    placeholderTextColor = "#CECECE"
                    style = { styles.inputField }
                    value = { props.values.password }
                    onBlur = { props.handleBlur('password') }
                    onChangeText = { props.handleChange('password') }
                />
                <Text style = { styles.error }>
                    {props.touched.confirmPassword &&
                        props.errors.confirmPassword}
                </Text>
                <CheckBox
                    center
                    checked = { this.state.checked }
                    checkedColor = "#CECECE"
                    containerStyle = { styles.checkbox }
                    textStyle = { styles.checkboxText }
                    title = "Keep me logged in"
                    onPress = { this.handlePressCheck }
                />
                <TouchableOpacity
                    style = { styles.button }
                    onPress = { props.handleSubmit }>
                    <Text style = { styles.buttonText }>{'LOH IN'}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    render () {
        const { signIn } = this.state;

        return (
            <View style = { styles.container }>
                <Formik
                    initialValues = { signIn }
                    render = { this.drawFrom }
                    validationSchema = { validationSchema }
                    onSubmit = { this.onSubmitHandler }
                />
            </View>
        );
    }
}

export { SignIn };
