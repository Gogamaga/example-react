import React from 'react'
import { View, Text } from 'react-native'
import Image from 'react-native-remote-svg'

import { Label } from "../../Label/Label";

import { styles } from "./styles";
import { icons } from "../../../resources/icons/icons";

export const BookingSeatsHeader = (
    {
        style = {},
        name = ''

    }
) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            <View style={{ ...styles.cardContainer }}>
                <View style={styles.locationIconContainer}>
                    <Image source={{ uri: icons.locationBlack }} style={styles.locationIconContainer.locationLogo}/>
                </View>
                <View style={styles.deskriptionContainer}>
                    <Text style={styles.deskriptionContainer.infoSpaceName}>McGrath Mosman</Text>
                    <Text style={styles.deskriptionContainer.infoSpaceAdress}>Shop 3/803 Military Road
                        Mosman, NSW
                        2088</Text>
                    <View style={styles.deskriptionContainer.labelContainer}>
                        <View style={styles.deskriptionContainer.labelContainer.infoLabel}>
                            <Label
                                style={{ ...styles.deskriptionContainer.labelContainer.categoryLabel, ...{ backgroundColor: '#eee5d6' } }}
                                name={'Focus'} count={24}/>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}