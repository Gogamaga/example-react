import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from "./styles"

export const BookingInviteCoWokerConfirmModalHeader = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('BookingScreenSuccessful')}>
                <Text style={styles.confirmButton}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> props.navigation.goBack()}>
                <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}