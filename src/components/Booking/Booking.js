import React, { Component } from 'react';
import  {View,Text} from 'react-native'
import { Header } from "../Header/Header";


export class Booking extends Component {
    static navigationOptions = {
        header: <Header/>
    }

    render(){
        return (
            <View>
                <Text>Booking Sreen</Text>
            </View>
        );
    }
}
