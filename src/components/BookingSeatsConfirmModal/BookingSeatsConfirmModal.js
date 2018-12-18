import React from 'react'
import {View} from 'react-native'
import { BookingSeatsSelectedConfirmPopUp } from "../BookingSeatsSelectedConfirmPopUp/BookingSeatsSelectedConfirmPopUp";

import {styles} from "./styles"

export const BookingSeatsConfirmModal = ({navigation}) => {
    return (
        <View style={styles.container}>
            <BookingSeatsSelectedConfirmPopUp onPress={() => navigation.navigate('BookingScreenInviteCoWoker')} />
        </View>
    )
}
