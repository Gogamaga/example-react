import React from 'react'
import { View, Text } from 'react-native'

import { styles } from "./styles";

export function BadgesBottomTabInvite(
    {
        count = 0,
        style = {}
    }){
    return (
        <View style={{ ...styles.container, ...style }}>
            <Text style={styles.text}>{count}</Text>
        </View>
    )
}