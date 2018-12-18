import React from 'react'
import { View } from 'react-native'
import { Badge } from 'react-native-elements'
import Image from 'react-native-remote-svg'

import { styles } from "./styles";
import { icons } from "../../../resources/icons/icons";

export function SeatPlanButton(
    {
        handlerPress = function(){
        },
        style = {}
    }){
    return (
        <View style={{ ...styles.container, ...style }}>
            <Badge onPress={handlerPress} containerStyle={styles.button}>
                <Image style={styles.icon} source={{ uri: icons.seatsPlanWhite }}/>
            </Badge>
        </View>
    )
}