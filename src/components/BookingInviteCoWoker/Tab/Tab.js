import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from "./styles"

export const Tab = (
    {
        style = {},
        text = '',
        isActive = true,
        onPress = ()=>{}
    }
) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={isActive ? { ...styles.container, ...style, ...styles.activeContainer } : { ...styles.container, ...style }}
        >
            <Text style={isActive ? { ...styles.text, ...styles.activeText } : styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}