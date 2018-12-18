import React from 'react'
import {View, Text,TouchableOpacity, ImageBackground} from 'react-native'
import Image from 'react-native-remote-svg'

import {ImageContainer} from "../ImageContainer/ImageContainer";

import {styles} from "./styles"
import {icons} from "../../resources/icons/icons"
const background = require('../../resources/images/Oval_2.png')

export const SearchedCoWokerItem = (
    {
        style = {},
        onPress=()=>{},
        avatar='',
        firstName='',
        lastName='',
        selected= false,
    }
) => {
    return (
        <View style={{...styles.container, ...style}}>
            <View style={styles.imageContainer}>
                <ImageContainer imageStyle={styles.imageContainer.image} source={avatar}/>
                {selected?
                    <ImageBackground source={background} style={styles.imageContainer.button}>
                        <Image source={{uri: icons.checkedWhite}} style={styles.imageContainer.button.icon}/>
                    </ImageBackground>
                    :
                    <TouchableOpacity onPress={onPress} style={styles.imageContainer.button}>
                        <Image style={styles.imageContainer.button.icon} source={{uri: icons.addBlack}}/>
                    </TouchableOpacity>
                }

            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoContainer.name}>{firstName} {lastName}</Text>
                <View style={styles.infoContainer.teamNameContainer}>
                    <Image style={styles.infoContainer.teamNameContainer.icon} source={{uri: icons.teamBlack}}/>
                    <Text style={styles.infoContainer.teamNameContainer.name}>Team Name</Text>
                </View>
            </View>
        </View>
    )
}

