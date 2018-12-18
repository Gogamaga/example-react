import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'

import { AuthButton } from "../AuthButton/AuthButton";
import { InputAuth } from "../../Inputs/InputAuth/InputAuth";
import authWrapper from "../AuthWrapper"

import { signIn } from "../../../networking/auth"
import { userToken } from "../../../networking/api"
import { setItem } from "../../../storage"
import { USER_TOKEN } from "../../../storage/constants"
import { validate } from "../../../helpers/validate"

import { styles } from "./styles"

class AuthSignIn extends Component {

    state = {
        credential: {
            email: '',
            password: ''
        }
    }

    _onChangeText = (text, name) => {
        this.setState(prevState => {
            return { ...prevState, credential: { ...prevState.credential, [ name ]: text } }
        })
    }

    _onPress = () => {
        const { navigation, fetchingStart, fetchingFinished } = this.props
        const { credential } = this.state
        if (credential.email && credential.password) {
            fetchingStart()
            signIn(credential.email.trim(), credential.password.trim())
                .then(response => {
                    if (response.status === 200) {
                        userToken.userToken = response.data.data.token
                        setItem(USER_TOKEN, response.data.data.token)
                            .then(res => {
                                fetchingFinished()
                                navigation.navigate('AuthChangePassword')
                            })
                    }
                })
                .catch(error => {
                    fetchingFinished()
                    if (error.response.status) {
                        Alert.alert(
                            'Error',
                            "Wrong email or password",
                            { cancelable: false }
                        )
                    }
                })
        } else {
            fetchingFinished()
            Alert.alert(
                'Error',
                "Wrong email or password",
                { cancelable: false }
            )
        }
    }

    render(){
        const { credential } = this.state
        console.log(this.props.userToken, 'token')
        const isValid = validate.isEmailAddress(credential.email.trim()) && validate.isPassword(credential.password.trim()) ? true : false
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Welcome Back</Text>
                    <Text style={styles.heading2}>Sign in to continue</Text>
                    <InputAuth
                        onChange={(text) => this._onChangeText(text, 'email')}
                        value={credential.email}
                        placeholder={'you@example.com'}
                        style={styles.emailInput}
                    />
                    <InputAuth
                        onChange={(text) => this._onChangeText(text, 'password')}
                        value={credential.password}
                        placeholder={'password'}
                        style={styles.passwordInput}
                    />
                    <AuthButton
                        disabled={!isValid}
                        loading={this.props.isFetching}
                        text={'Continue'}
                        onPress={() => this._onPress()}
                    />
                </View>
            </View>
        )
    }
}

export default authWrapper(AuthSignIn)