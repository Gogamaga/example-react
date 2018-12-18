import React, { Component } from 'react'
import { View, Text, Animated, Dimensions, TouchableHighlight, ScrollView } from 'react-native'
import Image from 'react-native-remote-svg'
import GestureRecognizer from 'react-native-swipe-gestures'

import { styles } from "./styles";
import { icons } from "../../resources/icons/icons";
import { ProfileUserCard } from "./ProfileUserCard/ProfileUserCard";
import { CurrentBookingCard } from "./CurrentBookingCard/CurrentBookingCard";

const windowWidth = Dimensions.get('window').width

export class Profile extends Component {

    position = new Animated.Value(0)

    /**
     *
     * @param {Boolean} isVisibleUserProfile
     * @private
     */
    _animating = (isVisibleUserProfile) => {
        if (isVisibleUserProfile) {
            Animated.timing(this.position, {
                toValue: 0,
                duration: 150
            }).start()
        } else {
            Animated.timing(this.position, {
                toValue: windowWidth,
                duration: 150
            }).start()
        }
    }

    componentDidMount(){
        // const {navigation, hideUserProfile} = this.props
        // this.navigationListener = navigation.addListener('willBlur', (nav) => {
        //     nav.action.routeName !==nav.state.routeName && hideUserProfile()
        // })
    }

    componentWillUnmount(){
        // this.navigationListener.remove()
    }

    componentWillReceiveProps({ isVisibleUserProfile }){
        // isVisibleUserProfile !== this.props.isVisibleUserProfile && this._animating(isVisibleUserProfile)
    }

    render(){
        const { style, showUserProfile, isVisibleUserProfile } = this.props
        return (
            <Animated.View style={{ ...styles.animatedContainer, ...{ left: this.position } }}>
                <ScrollView>
                    <GestureRecognizer onSwipeRight={showUserProfile}>
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <TouchableHighlight activeOpacity={0} underlayColor={'transparent'}
                                                    onPress={() => this.props.navigation.goBack()}>
                                    <Image style={styles.header.icon} source={{ uri: icons.cancelBlack }}/>
                                </TouchableHighlight>
                            </View>
                            <ProfileUserCard/>
                            <Text style={styles.currentBookingHeader}>Current Booking</Text>
                            <CurrentBookingCard/>
                        </View>
                    </GestureRecognizer>
                </ScrollView>
            </Animated.View>

        )
    }
}