import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Switcher } from "../Switcher/Switcher";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'

import { getArrayTime } from "../../helpers/date";
import { styles } from "./styles"
import { ConfirmButton } from "../Buttons/ConfirmButton/ConfirmButton";

export class BookingStartTime extends Component {

    state = {
        isActiveSwitcher: false,
        isDateTimePickerVisible: false,
        selectedTime: new Date()
    }

    _onChangeSwitcher = () => {
        const { isActiveSwitcher } = this.state
        this.setState({ isActiveSwitcher: !isActiveSwitcher })
    }

    _handleConfirm = () => {
        const {isActiveSwitcher, selectedTime} = this.state
        this.props.navigation.navigate('BookingScreenEndTime', {isToday:isActiveSwitcher, selectedStartTime: selectedTime})
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({ selectedTime: date })
        this._hideDateTimePicker();
    };

    render(){
        const { style } = this.props
        const { isActiveSwitcher, selectedTime } = this.state
        return (
            <View style={{ ...styles.container, style }}>
                <View style={styles.switcherContainer}>
                    <Text
                        style={!isActiveSwitcher ? { ...styles.switcherContainer.text, ...styles.switcherContainer.activeText } : styles.switcherContainer.text}>Today</Text>
                    <Switcher isActive={isActiveSwitcher} onChange={this._onChangeSwitcher}
                              style={styles.switcherContainer.switcher}/>
                    <Text
                        style={isActiveSwitcher ? { ...styles.switcherContainer.text, ...styles.switcherContainer.activeText } : styles.switcherContainer.text}>Tomorrow</Text>
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
                    minimumDate={new Date()}
                />
            </View>
        )
    }
}
