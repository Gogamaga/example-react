import React from 'react'
import { Text } from 'react-native'
import { Badge } from 'react-native-elements'

import { styles } from "./styles"

export const ConfirmButton = (
    {
        text = '',
        onPress = () => {
        },
        style = {}
    }
) => {
    return (
        <Badge containerStyle={{ ...styles.container, ...style }} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Badge>
    )
}