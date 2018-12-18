import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {ProfileForScreen} from "../HOCs/ProfileForScreen/ProfileForScreen";

import {styles} from "./styles";

class BookingScreen extends Component{

    render(){
        return (
            <View style={{...styles.container}}>
                <Text>Booking Screen</Text>
            </View>
        )
    }
}

export default ProfileForScreen(BookingScreen)