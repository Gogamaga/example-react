import React, { Component } from 'react'
import { View, Image, Animated } from 'react-native'
import { Badge } from 'react-native-elements'

import { styles } from "./styles";

const circle = require('../../resources/images/Oval_2.png')

export class Switcher extends Component {

    position = new Animated.Value(6)

    componentDidUpdate(){
        const { isActive } = this.props

        isActive ?
            Animated.timing(this.position, {
                toValue: 37,
                duration: 200
            }).start()
            :
            Animated.timing(this.position, {
                toValue: 6,
                duration: 200
            }).start()
    }

    render(){
        const { style, onChange } = this.props
        return (
            <View style={{ ...styles.container, ...style }}>
                <Animated.View style={{ ...styles.circleContainer, ...{ left: this.position } }}>
                    <Badge onPress={onChange} containerStyle={styles.circleContainer.imageContainer}>
                        <Image source={circle}/>
                    </Badge>
                </Animated.View>
            </View>
        )
    }
}