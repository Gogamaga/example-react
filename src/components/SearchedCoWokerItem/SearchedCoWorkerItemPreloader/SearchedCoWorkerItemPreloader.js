import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

export const SearchedCoWorkerItemPreloader = (
    {
        style = {}
    }
) => {
    return (
        <View style={{...styles.wrapper, ...style}}>
            <View style={{ ...styles.container }}/>
        </View>
    )
}