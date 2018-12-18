import React from 'react'
import { View } from 'react-native'

import { LabelTimeRange } from "../LabelTimeRange/LabelTimeRange";

import { styles } from "./styles";

export function TimeRange(
    {
        startTime = '',
        endTime = '',
        backgroundColorStart = '#d6eee9',
        backgroundColorEnd = '#d6eee9',
        style = {}
    }){
    return (
        <View style={{ ...styles.contatiner, style }}>
            <LabelTimeRange time={startTime} style={{ backgroundColor: backgroundColorStart }}/>
            <View style={styles.dot}/>
            <View style={{ ...styles.dot, ...styles.dotMidle }}/>
            <View style={styles.dot}/>
            <LabelTimeRange time={endTime} style={{ backgroundColor: backgroundColorEnd }}/>
        </View>
    )
}