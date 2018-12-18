import React from 'react'
import { View, Text } from 'react-native'
import Image from 'react-native-remote-svg'

import { TimeRange } from "../TimeRange/TimeRange";
import { Label } from "../Label/Label";

import { styles } from "./styles";
import { icons } from "../../resources/icons/icons";
import { LabelDate } from "../LabelDate/LabelDate";
import { SmallButton } from "../Buttons/SmallButton/SmallButton";

export const PastBookingCard = (
    {
        style = {},
        name = '',
        startTime = '',
        endTime = '',
        opacity = 1
    }
) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            <View style={styles.dashedLine}/>
            <LabelDate date={'12/10/18'} style={{ marginBottom: 10, opacity }}/>
            <View style={{ ...styles.cardContainer, ...{ opacity } }}>
                <View style={styles.locationIconContainer}>
                    <Image source={{ uri: icons.locationBlack }} style={styles.locationIconContainer.locationLogo}/>
                </View>
                <View style={styles.deckriptionContainer}>
                    <Text style={styles.deckriptionContainer.infoSpaceName}>McGrath Mosman</Text>
                    <Text style={styles.deckriptionContainer.infoSpaceAdress}>Shop 3/803 Military Road
                        Mosman, NSW
                        2088</Text>
                    <View style={styles.deckriptionContainer.labelContainer}>
                        <View style={styles.deckriptionContainer.labelContainer.infoLabel}>
                            <Label
                                style={{ ...styles.deckriptionContainer.labelContainer.categoryLabel, ...{ backgroundColor: '#eee5d6' } }}
                                name={name}/>
                            <TimeRange startTime={startTime} endTime={endTime}/>
                        </View>

                    </View>
                </View>
            </View>
            <SmallButton text={'Re-Book'} style={{ position: 'absolute', bottom:11, right:5}}/>
        </View>
    )
}