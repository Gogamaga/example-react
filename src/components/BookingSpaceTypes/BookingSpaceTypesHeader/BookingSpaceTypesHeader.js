import React from 'react'
import { View, Text } from 'react-native'
import Image from 'react-native-remote-svg'

import { styles } from "./styles"
import { icons } from "../../../resources/icons/icons"

export const BookingSpaceTypesHeader = (
    {
        style = {},
        name = '',
        address = ''
    }
) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            <View style={styles.iconContainer}>
                <Image style={styles.iconContainer.icon} source={{ uri: icons.locationBlack }}/>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionContainer.name}>McGrath Mosman</Text>
                <Text style={styles.descriptionContainer.address}>Shop 3/803 Military Road Mosman, NSW 2088</Text>
            </View>
        </View>
    )
}