import React from 'react'
import {View, Text, Image as Img} from 'react-native'
import Image from 'react-native-remote-svg'
import { LabelTeam } from "../../LabelTeam/LabelTeam";

import {styles} from "./styles";
import {icons} from "../../../resources/icons/icons";


export const ProfileUserCard = (
    {
        style={}
    }
) => {
    return (
        <View style={{...styles.container, ...style}}>
            <View style={styles.photoContainer}>
                <Img style={styles.photoContainer.photo} source={{uri:'https://ca.slack-edge.com/T03QHLR8Z-U5TGWM13R-914ce7ebb794-512'}} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoContainer.mainInfo}>
                    <View style={styles.infoContainer.mainInfo.iconContainer}>
                        <Image style={styles.infoContainer.mainInfo.iconContainer.icon} source={{uri: icons.userBlack}}/>
                    </View>
                    <View>
                        <Text style={styles.infoContainer.mainInfo.name}>Landon Jimenez</Text>
                        <LabelTeam name={'Team name'}/>
                    </View>
                </View>
                <View style={styles.infoContainer.contactInfo}>
                    <View style={styles.infoContainer.contactInfo.contact}>
                        <Image style={styles.infoContainer.contactInfo.contact.icon} source={{uri: icons.phoneBlack}} />
                        <Text style={styles.infoContainer.contactInfo.contact.text}>+61(0) 4 123 123 12</Text>
                    </View>
                    <View style={styles.infoContainer.contactInfo.contact}>
                        <Image style={styles.infoContainer.contactInfo.contact.icon} source={{uri: icons.letterBlack}} />
                        <Text style={styles.infoContainer.contactInfo.contact.text}>Landon.Jimenez@mcgrath.com.au</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}