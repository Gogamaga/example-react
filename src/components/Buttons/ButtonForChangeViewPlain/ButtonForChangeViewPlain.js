import React from 'react'
import { Text } from 'react-native'
import { Badge } from 'react-native-elements'

import { styles } from "./styles";

export const ButtonForChangeViewPlain = (
    {
        activeViewPlain,
        style = {},
        navigation,
        changeViewPlain
    }
) => {
    function onPress(plain){
        changeViewPlain(plain)
            .then(plain => (
                plain === "List"
                    ?
                    navigation.navigate('BookingScreenSeats')
                    : navigation.navigate('BookingScreenSeatsDrawing')))
    }

    return (
        <Badge containerStyle={{ ...styles.container, ...style }}>

            <Text onPress={() => onPress('List')}
                  style={'List' === activeViewPlain ? { ...styles.text, ...styles.activeText } : styles.text}>
                List
            </Text>
            <Text onPress={() => onPress('Drawing')}
                  style={"Drawing" === activeViewPlain ? { ...styles.text, ...styles.activeText } : styles.text}>
                Drawing
            </Text>
        </Badge>
    )
}