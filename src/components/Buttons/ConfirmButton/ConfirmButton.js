import React, {Fragment} from 'react'
import { Text, View } from 'react-native'
import { Badge } from 'react-native-elements'

import { styles } from "./styles";

export function ConfirmButton({
    title = '', handlerPress = function(){

    }, style = {},
    isLoading = false,
    textStyle = {}
}){
    return (
        <Fragment>
            {!isLoading?
                <Badge wrapperStyle={{ width: '100%' }} containerStyle={{ ...styles.button, ...style }} onPress={handlerPress}>
                    <Text style={{...styles.text, ...textStyle}}>{title}</Text>
                </Badge>:
                <Badge wrapperStyle={{ width: '100%' }} containerStyle={{ ...styles.loadingButton, ...style }} >
                    <Text style={styles.text}>... loading</Text>
                </Badge>
            }


        </Fragment>

    )
}