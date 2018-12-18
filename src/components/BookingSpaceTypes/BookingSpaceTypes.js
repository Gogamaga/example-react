import React, { Component } from 'react';
import { View, ScrollView } from 'react-native'
import { BookingSpaceTypesHeader } from "./BookingSpaceTypesHeader/BookingSpaceTypesHeader";

import {styles} from "./styles";
import { BookingSpaceTypesTypeCard } from "./BookingSpaceTypesTypeCard/BookingSpaceTypesTypeCard";

export class BookingSpaceTypes extends Component {
    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.locationContainer}>
                    <BookingSpaceTypesHeader style={{paddingBottom: 15}}/>
                    <View style={styles.cardContainer}>
                        <BookingSpaceTypesTypeCard onPress={() => this.props.navigation.navigate('BookingScreenSeats')} style={styles.cardContainer.card}/>
                        <BookingSpaceTypesTypeCard onPress={() => this.props.navigation.navigate('BookingScreenSeats')} style={styles.cardContainer.card}/>
                        <BookingSpaceTypesTypeCard onPress={() => this.props.navigation.navigate('BookingScreenSeats')} style={styles.cardContainer.card}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
