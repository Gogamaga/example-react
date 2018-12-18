import React from 'react'
import { Text } from 'react-native'
import { Badge } from 'react-native-elements'

import {styles} from "./styles";

export const SmallButton = (
    {
        style = {},
        text = '',
        onPress = function(){
        }
    }
) => {
    return (
        <Badge onPress={onPress} containerStyle={{ ...styles.container, ...style }}>
            <Text style={styles.text}>{text}</Text>
        </Badge>
    )
}