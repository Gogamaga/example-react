import React from 'react'
import {View} from 'react-native'
import {ImageContainer} from "../ImageContainer/ImageContainer"

import {styles} from "./styles"

export const SmallUserAvatar = (
    {
        source='',
        style={}
    }
) => {
    return (
        <View style={{...styles.container, ...style}}>
            <ImageContainer source={source} imageStyle={styles.image}/>
        </View>
    )
}