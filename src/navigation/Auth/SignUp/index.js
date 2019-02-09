import React, { Component } from 'react';
import {
    ActivityIndicator,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
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
        .min(2, 'Seems too short...')
        .max(10, 'Seems to long...')
        .required(),
    confirmPassword: yup
        .string()
        .label('Confirm Password')
        .required()
        .test('passwords-match', 'Passwords must match ya fool', function (
            value
        ) {
            return this.parent.password === value;
        }),
    agreeToTerms: yup
        .boolean()
        .label('agreeToTerms')
        .test(
            'is-true',
            'Must agree to terms to continue',
            value => value === true
        ),
});

class SignUp extends Component {
    constructor (props) {
        super(props);

        this.state = {
            signUp: {
                email:           '',
                password:        '',
                confirmPassword: '',
                agreeToTerms:    false,
            },
        };
    }

    signUp = ({ email }) => {
        console.log('email', email);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'Alo@a.com') {
                    resolve(true);
                } else {
                    reject(new Error('Rejected'));
                }
            }, 1000);
        });
    };

    onSubmitHandler = (values, actions) => {
        setTimeout(() => {
            this.signUp({ email: values.email })
                .then(() => alert(JSON.stringify(values)))
                .catch(err => actions.setFieldError('general', err.message))
                .finally(() => actions.setSubmitting(false));
        }, 1000);
    };

    drawFrom = props => {
        console.log('asdfasdf', props);

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
                    {props.touched.password && props.errors.password}
                </Text>
                <TextInput
                    secureTextEntry
                    placeholder = "Confirm Password"
                    placeholderTextColor = "#CECECE"
                    style = { styles.inputField }
                    value = { props.values.confirmPassword }
                    onBlur = { props.handleBlur('confirmPassword') }
                    onChangeText = { props.handleChange('confirmPassword') }
                />
                <Text style = { styles.error }>
                    {props.touched.confirmPassword &&
                        props.errors.confirmPassword}
                </Text>
                <CheckBox
                    title = "I Agree to terms and conditions"
                    checkedColor = "#CECECE"
                    checked = { props.values.agreeToTerms }
                    containerStyle = { styles.checkbox }
                    textStyle = { styles.checkboxText }
                    onPress = { () =>
                        props.setFieldValue(
                            'agreeToTerms',
                            !props.values.agreeToTerms
                        )
                    }
                />
                <Text style = { styles.error }>
                    {props.touched.agreeToTerms && props.errors.agreeToTerms}
                </Text>
                {props.isSubmitting ? (
                    <ActivityIndicator />
                ) : (
                    <>
                        <TouchableOpacity
                            style = { styles.button }
                            onPress = { props.handleSubmit }>
                            <Text style = { styles.buttonText }>{'SIGN UP'}</Text>
                        </TouchableOpacity>
                        <Text style = { styles.error }>{props.errors.general}</Text>
                    </>
                )}
            </View>
        );
    };
    render () {
        const { signUp } = this.state;

        return (
            <View style = { styles.container }>
                <Formik
                    initialValues = { signUp }
                    render = { this.drawFrom }
                    validationSchema = { validationSchema }
                    onSubmit = { this.onSubmitHandler }
                />
            </View>
        );
    }
}

export { SignUp };
