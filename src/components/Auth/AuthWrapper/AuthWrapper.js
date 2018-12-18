import React, { Component } from 'react'
import { View, Text, ImageBackground, ScrollView, Keyboard, Image as Img, Dimensions } from 'react-native'
import Image from 'react-native-remote-svg'
import AuthHeader from "../AuthHeader";

import { icons } from "../../../resources/icons/icons"
import { styles } from "./styles"

const backgroundImage = require('../../../resources/images/background.png')
const backgroundBottom = require('../../../resources/images/1212.png')

export const authWrapper = (Screen) => {
    return class Container extends Component {

        state = {
            scrollEnabled: false,
            keyboardHeight: 0,
        }

        componentDidMount(){
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
            this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
        }

        componentWillUnmount(){
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
        }

        _keyboardDidShow = (e) => {
            this.setState({ scrollEnabled: true, keyboardHeight: e.endCoordinates.height })
        }

        _keyboardWillHide = () => {
            this.setState({ keyboardHeight: 0 })
        }

        render(){
            const { scrollEnabled, keyboardHeight } = this.state
            return (
                <View style={styles.container}>
                    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                        <AuthHeader/>
                        <ScrollView
                            ref={scrollView => this._scrollView = scrollView}
                            style={{ marginBottom: keyboardHeight }}
                            scrollEnabled={scrollEnabled}
                        >
                            <View style={styles.logoContainer}>
                                <Image style={styles.logoContainer.icon} source={{ uri: icons.logoWhite }}/>
                                <Text style={styles.logoContainer.text}>Space Manager</Text>
                            </View>
                            <Screen {...this.props}/>
                        </ScrollView>
                    </ImageBackground>
                    <Img source={backgroundBottom} style={styles.backgroudImageBottom}/>
                </View>
            )

        }
    }
}