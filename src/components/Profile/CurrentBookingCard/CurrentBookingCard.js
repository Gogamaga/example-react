import React from 'react'
import {View, Text, Image as Img} from 'react-native'
import Image from 'react-native-remote-svg'

import {styles} from "./styles"
import {icons} from "../../../resources/icons/icons";
import { TimeRange } from "../../TimeRange/TimeRange";

const building = 'https://s3.amazonaws.com/vu-news/files/20170828122852/Engineering_Science_Building_ESB.jpg'

export const CurrentBookingCard = (
    {
        style ={}
    }
) => {
    return (
        <View style={{...styles.container, ...style}}>
            <View style={styles.imageContainer}>
                <Img style={styles.imageContainer.image} source={{uri: building}}/>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoContainer.iconContainer}>
                    <Image style={styles.infoContainer.iconContainer.icon} source={{uri: icons.locationBlack}} />
                </View>
                <View>
                    <Text style={styles.infoContainer.name}>McGrath Mosman</Text>
                    <Text style={styles.infoContainer.address}>Shop 3/803 Military Road Mosman, NSW 2088</Text>
                    <TimeRange startTime={'15:10'} endTime={'16:15'}/>
                </View>
            </View>
        </View>
    )
}