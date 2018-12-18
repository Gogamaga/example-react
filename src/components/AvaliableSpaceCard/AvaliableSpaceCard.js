import React, {Component} from 'react'
import {View, Text, Animated, TouchableOpacity} from 'react-native'
import Image from 'react-native-remote-svg'

import {Label} from "../Label/Label";

import {styles} from "./styles";
import {icons} from "../../resources/icons/icons";

export class AvaliableSpaceCard extends  Component {

    state = {

    }
    imageOpacity= new Animated.Value(0)

    _onLoadEnd = () => {
        Animated.timing(this.imageOpacity,{
            toValue: 1,
            duration: 300,

        }).start()
    }

    render(){
        const {style, onPress}  = this.props
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...style }}>
                {/*IMAGE*/}
                <View style={styles.imageContainer}>
                    <Animated.Image
                        onLoadEnd={() => this._onLoadEnd()}
                        style={{...styles.image, ...{opacity: this.imageOpacity}}}
                         source={require('../../resources/images/build.jpg')}/>
                </View>
                {/*INFO*/}
                <View style={styles.infoContainer}>
                    <View style={styles.locationIconContainer}>
                        <Image style={styles.locationLogo} source={{ uri: icons.locationBlack }}/>
                    </View>
                    <View>
                        <Text style={styles.infoSpaceName}>McGrath Mosman</Text>
                        <Text style={styles.infoSpaceAdress}>Shop 3/803 Military Road Mosman, NSW 2088</Text>
                        <View style={styles.labelContainer}>
                            <Label name={'Focus'} count={24} style={{ backgroundColor: '#eee5d6', marginRight: 5 }}/>
                            <Label name={'Collab'} count={8} style={{ backgroundColor: '#eed6dd', marginRight: 5 }}/>
                            <Label name={'Boardroom'} count={1} style={{ backgroundColor: '#d6e8ee' }}/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}