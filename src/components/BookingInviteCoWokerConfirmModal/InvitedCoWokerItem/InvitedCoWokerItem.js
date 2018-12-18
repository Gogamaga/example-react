import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Image from 'react-native-remote-svg'

import { ImageContainer } from "../../ImageContainer/ImageContainer"
import { styles } from "./styles"
import { icons } from "../../../resources/icons/icons";
import { users } from "../../../helpers/users";

export const InvitedCoWokerItem = (
    {
        id='',
        avatar = '',
        firstName = '',
        lastName = '',
        onPress=() => {}
    }) => {

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <ImageContainer source={avatar} imageStyle={styles.image}/>
                <View>
                    <Text style={styles.fullName}>{firstName} {lastName}</Text>
                    <Text style={styles.teamName}>Team Name</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>onPress(id)}>
                <Image source={{ uri: icons.cancelBlack }} style={styles.cancelButton}/>
            </TouchableOpacity>
        </View>
    )
}