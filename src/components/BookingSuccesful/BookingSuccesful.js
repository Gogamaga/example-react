import React from 'react'
import { View, Text } from 'react-native'
import Image from 'react-native-remote-svg'

import { icons } from "../../resources/icons/icons"
import { styles } from "./styles"

export const BookingSuccesful = (
    props
) => {
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <View style={styles.imageContainer}>
                    <View style={styles.imageContainer.circle}/>
                    <Image source={{ uri: icons.chairBlack }} style={styles.imageContainer.icon}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textContainer.text}>You are all booked-in!
                        An email has been sent with your
                        booking details and a calendar invite.</Text>
                </View>
            </View>
        </View>
    )
}