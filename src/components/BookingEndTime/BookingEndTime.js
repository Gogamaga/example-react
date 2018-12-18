import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { ConfirmButton } from "../Buttons/ConfirmButton/ConfirmButton";

import { getArrayTime } from "../../helpers/date";
import { styles } from "../BookingStartTime/styles";

export class BookingEndTime extends Component {

    state = {
        selectedTime: new Date(),
        isDateTimePickerVisible: false
    }

    _handleConfirm = () => {
        this.props.navigation.navigate('BookingScreenLocation')
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({ selectedTime: date })
        this._hideDateTimePicker();
    };

    componentDidMount(){
        const { selectedStartTime } = this.props.navigation.state.params
        this.setState({ selectedTime: selectedStartTime })
    }

    render(){
        const { selectedTime, style } = this.state
        const { selectedStartTime, isToday } = this.props.navigation.state.params
        return (
            <View style={{ ...styles.container, style }}>
                <View style={styles.switcherContainer}>
                    <Text
                        style={{ ...styles.switcherContainer.text, ...styles.switcherContainer.activeText }}
                    >
                        {!isToday ? 'Today' : 'Tomorrow'}
                    </Text>

                </View>
                <TouchableOpacity onPress={this._showDateTimePicker} style={styles.timeContainer}>
                    <Text style={styles.timeContainer.time}>{getArrayTime(selectedTime)[ 0 ]}</Text>
                    <Text style={{ ...styles.timeContainer.time, ...styles.timeContainer.separator }}>:</Text>
                    <Text style={styles.timeContainer.time}>{getArrayTime(selectedTime)[ 1 ]}</Text>
                </TouchableOpacity>
                <ConfirmButton title={'Confirm'} handlerPress={this._handleConfirm}/>
                <DateTimePicker
                    date={selectedTime}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode={'time'}
                    minimumDate={selectedStartTime}
                />
            </View>
        );
    }
}
