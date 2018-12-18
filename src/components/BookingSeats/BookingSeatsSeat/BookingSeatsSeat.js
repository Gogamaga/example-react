import React, { Fragment } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { styles } from "./styles";

export const BookingSeatsSeat = (
    {
        style = {},
        avatar = '',
        seatNumber = '',
        onPress= () => {}
    }

) => {
    return (
        <Fragment>
            {avatar?
                <View style={{ ...styles.container, ...style }}>
                    <View style={styles.seatsContainer}>
                        <Image style={styles.seatsContainer.image} source={{ uri: avatar }}/>
                        <Text style={styles.seatsContainer.text}>{seatNumber}</Text>
                    </View>
                </View>
                :
                <View style={{...styles.container, ...style}}>
                    <TouchableOpacity onPress={onPress} style={styles.seatsContainer}>
                        <View  style={styles.seatsContainer.circle}/>
                        <Text style={{...styles.seatsContainer.text, ...styles.seatsContainer.unavaliableText}}>{seatNumber}</Text>
                    </TouchableOpacity>
                </View>
            }

        </Fragment>
    )
}