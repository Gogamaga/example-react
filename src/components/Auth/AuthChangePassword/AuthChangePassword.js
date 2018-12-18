import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'

import { AuthButton } from "../AuthButton/AuthButton";
import { InputAuth } from "../../Inputs/InputAuth/InputAuth";
import authWrapper from "../AuthWrapper"

import { changePassword } from "../../../networking/auth"

import { styles } from "./styles"

import { validate } from "../../../helpers/validate"

class AuthChangePassword extends Component {

    state = {
        credential: {
            old_password: '',
            password: '',
            confirmPassword: ''
        }
    }
    _onChangeText = (text, name) => {
        this.setState(prevState => {
            return { ...prevState, credential: { ...prevState.credential, [ name ]: text } }
        })
    }

    _onPress = () => {
        const { navigation, fetchingStart, fetchingFinished } = this.props
        const { credential: { old_password, password, confirmPassword } } = this.state

        if (password === confirmPassword) {
            fetchingStart()
            changePassword({ old_password: old_password.trim(), password: password.trim() })
                .then(res => {
                    fetchingFinished()
                    if (res.data.success)
                        navigation.navigate('BottomNavigator')
                })
                .catch(err => {
                    fetchingFinished()
                    if (err.response.status === 403) {
                        Alert.alert(
                            'Error',
                            "Wrong password",
                            { cancelable: false }
                        )
                    }
                })
        } else {
            fetchingFinished()
            Alert.alert(
                'Error',
                "Password is not equal",
                { cancelable: false }
            )
        }

    }

    _isValid = () => {
        const { credential: { password, old_password, confirmPassword } } = this.state
        return validate.isPassword(old_password) && validate.isPassword(password) && password === confirmPassword
    }

    render(){
        const { credential } = this.state
        const { isFetching } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Enter your new password below</Text>
                    <InputAuth
                        onChange={(text) => this._onChangeText(text, 'old_password')}
                        value={credential.old_password}
                        style={styles.newPasswordInput}
                        placeholder={'old password'}
                    />
                    <InputAuth
                        onChange={(text) => this._onChangeText(text, 'password')}
                        value={credential.password}
                        style={styles.newPasswordInput}
                        placeholder={'new password'}
                    />
                    <InputAuth
                        onChange={(text) => this._onChangeText(text, 'confirmPassword')}
                        value={credential.confirmPassword}
                        style={styles.confirmPassword}
                        placeholder={'confirm password'}
                    />
                    <AuthButton
                        disabled={!this._isValid()}
                        loading={isFetching}
                        text={'Update Password'}
                        onPress={() => this._onPress()}
                    />
                </View>
            </View>
        )
    }
}

export default authWrapper(AuthChangePassword)

