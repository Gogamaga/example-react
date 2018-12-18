import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native'
import Image from 'react-native-remote-svg'

import { LabelTimeRange } from "../LabelTimeRange/LabelTimeRange";
import { SeatPlanButton } from "../Buttons/SeatPlanButton/SeatPlanButton";

import { styles } from "./styles";
import { icons } from "../../resources/icons/icons";
import { BookingSpaceCardDiscriptionItem } from "./BookingSpaceCardDiscriptionItem/BookingSpaceCardDiscriptionItem";
import { TimeRange } from "../TimeRange/TimeRange";

export class BookingSpaceCard extends Component {


    _onLoadEnd = () => {
        console.log('loadEnd')
    }

    render(){
        const { style } = this.props
        return (
            <View style={{ ...styles.container, ...style }}>

                {/*Main INFO*/}
                <View style={styles.mainInfoContainer}>
                    {/*Image*/}
                    <View style={styles.mainInfoContainer.imageContainer}>
                        <Animated.Image
                            onLoadEnd={this._onLoadEnd}
                            style={styles.mainInfoContainer.image}
                            source={require('../../resources/images/build.jpg')}
                        />

                    </View>
                    {/*INFO*/}
                    <View style={styles.mainInfoContainer.infoContainer}>
                        <SeatPlanButton style={{ position: 'absolute', top: -17.5, right: 20, zIndex: 1 }}/>
                        <View style={styles.mainInfoContainer.locationIconContainer}>
                            <Image style={styles.mainInfoContainer.locationLogo} source={{ uri: icons.locationBlack }}/>
                        </View>
                        <View>
                            <Text style={styles.mainInfoContainer.infoSpaceName}>McGrath Mosman</Text>
                            <Text style={styles.mainInfoContainer.infoSpaceAdress}>Shop 3/803 Military Road Mosman, NSW
                                2088</Text>
                            <View style={styles.mainInfoContainer.labelContainer}>
                                <TimeRange startTime={'10:30'} endTime={'12:30'}/>
                            </View>
                        </View>
                    </View>
                </View>
                {/*DISCRIPTIONS*/}
                <View style={styles.discriptionsContainer}>
                    <View style={{ ...styles.halfRoud, ...styles.halfRoudLeft }}/>
                    <BookingSpaceCardDiscriptionItem name={'Start Booking'} value={'Mon, 3 Sept'}
                                                     icon={icons.arrowRightBlack}
                                                     style={{ width: '50%', marginBottom: 15 }}/>
                    <BookingSpaceCardDiscriptionItem name={'Space Category'} value={'Quiet'} icon={icons.labelBlack}
                                                     style={{ width: '50%', marginBottom: 15 }}/>
                    <BookingSpaceCardDiscriptionItem name={'End Booking'} value={'Mon, 3 Sept'}
                                                     icon={icons.arrowLeftBlack}
                                                     style={{ width: '50%', marginBottom: 15 }}/>
                    <BookingSpaceCardDiscriptionItem name={'Seat Assigned'} value={'55D'} icon={icons.flagBlack}
                                                     style={{ width: '50%', marginBottom: 15 }}/>
                    <BookingSpaceCardDiscriptionItem name={'McGrath Building'} value={'A2'} icon={icons.houseBlack}
                                                     style={{ width: '50%', marginBottom: 15 }}/>
                    <BookingSpaceCardDiscriptionItem name={'Seat Type'} value={'Single '} icon={icons.diamondBlack}
                                                     style={{ width: '50%', marginBottom: 15 }}/>
                    <BookingSpaceCardDiscriptionItem name={'Building Level'} value={'8'} icon={icons.burgerBlack}
                                                     style={{ width: '50%', marginBottom: 15 }}/>
                    <View style={{ ...styles.halfRoud, ...styles.halfRoudRight }}/>
                </View>
            </View>
        );
    }
}
