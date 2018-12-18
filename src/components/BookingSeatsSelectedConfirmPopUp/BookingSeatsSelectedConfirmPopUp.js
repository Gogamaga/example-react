import React from 'react'
import {View, Text, Image} from 'react-native'
import { ConfirmButton } from "./ConfirmButton/ConfirmButton";

import {styles} from "./styles"

const image = require('../../resources/images/shutterstock.png')

export const BookingSeatsSelectedConfirmPopUp = (
    {
        style={},
        onPress = () => {}
    }
) => {
    return (
        <View style={{...styles.container, ...style}}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageContainer.image} source={image}/>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoContainer.text}>Lvl 4 Seat 421-C</Text>
                <ConfirmButton onPress={onPress} text={'Confirm'} style={styles.infoContainer.button} />
            </View>
        </View>
    )
}
