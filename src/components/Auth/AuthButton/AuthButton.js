import React, { Fragment } from 'react'
import { Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'

import { styles } from "./styles"

const spinner = require('../../../resources/images/Spinner.gif')

export const AuthButton = (
    {
        text = '',
        onPress = () => {
        },
        style = {},
        disabled = false,
        loading = false
    }
) => {
    return (
        <Fragment>
            {disabled
                ?
                <Badge containerStyle={{ ...styles.container, ...styles.disabled, ...style }}>
                    <Text style={styles.text}>{text}</Text>
                </Badge>
                : loading
                    ?
                    <Badge containerStyle={{ ...styles.container, ...style }}>
                        <Image source={spinner} style={styles.spinner}/>
                    </Badge>
                    :
                    <Badge onPress={onPress} containerStyle={{ ...styles.container, ...style }}>
                        <Text style={styles.text}>{text}</Text>
                    </Badge>
            }
        </Fragment>

    )
}