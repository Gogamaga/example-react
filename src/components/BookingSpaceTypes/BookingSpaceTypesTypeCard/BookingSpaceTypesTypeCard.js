import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from "./styles";

export const BookingSpaceTypesTypeCard = (
    {
        style = {},
        type = '',
        count = '',
        onPress = () => {
        }
    }
) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...style }}>
            <Text style={styles.typeText}>Focus</Text>
            <Text style={styles.countText}>22 spaces avaliable </Text>
        </TouchableOpacity>
    )
}