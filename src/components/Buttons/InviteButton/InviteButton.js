import React from "react";
import { Text } from "react-native";
import { Badge } from "react-native-elements";
import Image from 'react-native-remote-svg'

import { styles } from "./styles";
import {icons} from "../../../resources/icons/icons";

export function InviteButton({
    handlerPress = function(){
    }
}){
    return (
        <Badge onPress={handlerPress} containerStyle={styles.button}>
            <Image
                style={styles.image}
                source={icons.letterWhite}
            />
            <Text style={styles.text}>Invite</Text>
        </Badge>
    );
}
