import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'

import authWrapper from "../AuthWrapper"
import { InputAuth } from "../../Inputs/InputAuth/InputAuth";
import { AuthButton } from "../AuthButton/AuthButton";

import { setItem, getItem } from "../../../storage"
import { subDomain } from "../../../networking/api"

import { styles } from "./styles"

class AuthDomain extends Component {

    state = {
        domain: '',
    }

    _onChangeDomain = (text) => {
        this.setState({ domain: text })
    }

    _onPress = () => {
        const { navigation, fetchingStart, fetchingFinished } = this.props
        const { domain } = this.state
        if (domain === 'crm') {
            fetchingStart()
            setItem('subDomain', domain).then(async() => {
                const value = await getItem('subDomain')
                subDomain.domainName = value
                fetchingFinished()
                navigation.navigate('AuthSignIn')
            })
        } else {
            fetchingFinished()
            Alert.alert(
                'Bad Domain',
                "Wrong Sub domain",
                { cancelable: false }
            )
        }
    }

    render(){
        const { domain } = this.state
        const { isFetching } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Sign in to your account</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputContainer.input}>
                            <InputAuth
                                value={domain}
                                placeholder={'your-domain'}
                                textAlign={'right'}
                                onChange={this._onChangeDomain}
                            />
                        </View>
                        <Text style={styles.inputContainer.text}> .spacemanager.com</Text>
                    </View>
                    <AuthButton disabled={!domain} loading={isFetching} text={'Continue'}
                                onPress={() => this._onPress()}/>
                </View>
            </View>
        )
    }

}

export default authWrapper(AuthDomain)
