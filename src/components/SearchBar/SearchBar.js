import React, { Component } from 'react'
import { Animated, TextInput } from 'react-native'
import Image from 'react-native-remote-svg'

import { styles } from "./styles";
import { icons } from "../../resources/icons/icons";

export class SearchBar extends Component {

    opacity = new Animated.Value(0)

    _onFocus = () => {
        this.animated(0.2, 200)
    }

    _onBlur = () => {
        this.animated(0, 200)
    }

    animated = (toValue, duration) => {
        Animated.timing(this.opacity,
            {
                toValue,
                duration
            }).start()
    }

    render(){
        const { style, value, onChange, autoFocus=false } = this.props
        return (
            <Animated.View style={{ ...styles.container, ...style, shadowOpacity: this.opacity }}>
                <Image source={{ uri: icons.searchGrey }} style={styles.icon}/>
                <TextInput
                    autoFocus={autoFocus}
                    value={value}
                    onChange={onChange}
                    style={styles.input}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                    returnKeyType={'go'}
                    autoCapitalize={'none'}
                    onSubmitEditing={() => console.log('unfocus')}
                />
            </Animated.View>
        )
    }

}