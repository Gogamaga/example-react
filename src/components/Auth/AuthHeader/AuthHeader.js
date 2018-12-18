import React, { Fragment } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Image from 'react-native-remote-svg'

import { styles } from "./styles"
import { icons } from "../../../resources/icons/icons"

export const AuthHeader = (
    {
        navigation,
        onLayout = () => {

        }
    }
) => {
    return (
        <Fragment>
            {navigation.state.routeName !== 'AuthDomain'
                ?
                <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
                    <Image source={{ uri: icons.arrowLeftForNavigationWhite }} style={styles.icon}/>
                    <Text style={styles.text}>Back</Text>
                </TouchableOpacity>
                :
                <View style={styles.container} onLayout={onLayout}/>
            }
        </Fragment>

    )
}