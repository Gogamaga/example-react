import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import Image from 'react-native-remote-svg'

import { styles } from "./styles";

export function BookingSpaceCardDiscriptionItem(
    {
        icon = '',
        name = '',
        value = '',
        style = {}
    }){
    return (
        <Fragment>
            <View style={{ ...styles.container, ...style }}>
                <View style={styles.iconContainer}>
                    <Image style={styles.iconContainer.icon} source={{ uri: icon }}/>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textContainer.name}>{name}</Text>
                    <Text style={styles.textContainer.value}>{value}</Text>
                </View>
            </View>
        </Fragment>
    )

}