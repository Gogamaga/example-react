import React, { Component, Fragment } from 'react'
import { ScrollView, View, Text, Dimensions } from 'react-native'
import { BookingSeatsLevel } from "./BookingSeatsLevel/BookingSeatsLevel";
import { BookingSeatsHeader } from "./BookingSeatsHeader/BookingSeatsHeader";


import { styles } from "./styles";
import { spaces } from "../../helpers/spaces";
import  ButtonForChangeViewPlain  from "../Buttons/ButtonForChangeViewPlain"

const windowWidth = Dimensions.get('window').width

export class BookingSeats extends Component {

    render(){
        return (
            <Fragment>
                <ScrollView style={styles.scrollContainer}>
                    <BookingSeatsHeader/>
                    <View style={styles.container}>
                        <BookingSeatsLevel spaces={spaces} navigation={this.props.navigation}/>
                    </View>
                </ScrollView>
                <ButtonForChangeViewPlain
                    style={{ position: 'absolute', width: 200, bottom: 10, left: windowWidth / 2 - 100, zIndex: 20 }}
                />
            </Fragment>
        );
    }
}
