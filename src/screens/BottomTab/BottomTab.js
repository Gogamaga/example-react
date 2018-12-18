import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Image from 'react-native-remote-svg'

import { styles } from './styles'

export const BottomTab = ({ icon, navigation, name, children, isVisibleUserProfile, showUserProfile }) => {
    return (
        <View style={styles.container}>
            <Image style={{ width: 28, height: 28 }} source={icon}/>
            {children}
            <View style={styles.titleContainer}>
                <View style={navigation.isFocused() ? styles.indicatorActive : styles.indicator}/>
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    )
}

