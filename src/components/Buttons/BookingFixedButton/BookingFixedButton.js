import React from "react";
import { Text, View } from "react-native";
import { Badge } from "react-native-elements";
import Image from 'react-native-remote-svg'

import { styles } from "./styles.js";
import { icons } from "../../../resources/icons/icons";

export function BookingFixedButton(
    {
        handlerPress = function(){
        },
        style = {}
    }){
    return (
        <View style={style}>
            <Badge onPress={handlerPress} containerStyle={styles.button}>
                <Image
                    style={styles.image}
                    source={{ uri: icons.chairWhite }}
                />
                <Text style={styles.text}>Book</Text>
            </Badge>
        </View>
    );
}
