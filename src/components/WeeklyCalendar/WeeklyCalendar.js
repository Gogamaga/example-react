import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'
import moment from 'moment'
import { DayComponentForCalendar } from "../DayComponentForCalendar/DayComponentForCalendar";

const todayDate = moment().format('YYYY-MM-DD')

export class WeeklyCalendar extends Component {

    state = {}

    _onDayPress = (date) => {
        console.log('press', date)
        this.setState({ selectedDay: date.date.dateString })
    }


    render(){
        const startOfWeek = moment().startOf('isoWeek').format('YYYY-MM-DD')
        var endOfWeek = moment().endOf('isoWeek').add(1, "day").format('YYYY-MM-DD')
        const { selectedDay } = this.state
        return (
            <View>
                <Calendar
                    style={{ backgroundColor: 'transparent' }}
                    markedDates={{ [ selectedDay ]: { selected: true } }}
                    minDate={todayDate}
                    maxDate={endOfWeek}
                    hideArrows={true}
                    firstDay={1}
                    monthFormat={'MMM yyyy'}
                    dayComponent={(date) => {
                        return (
                            moment(date.date.dateString).diff(startOfWeek, "d") >= 0 && date.date && moment(date.date.dateString).diff(endOfWeek, "d") < 0 ?
                                <DayComponentForCalendar onPress={this._onDayPress}
                                                         date={date}/> : null
                        )
                    }}
                    theme={{
                        'stylesheet.calendar.main': {
                            week: {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingBottom: 0,
                            },
                            monthView: {
                                backgroundColor: 'transparent'
                            }
                        },
                        'stylesheet.calendar.header': {
                            dayHeader: {
                                color: '#898989',
                                fontFamily: 'yantramanavMedium',
                                fontSize: 13,
                                fontWeight: '500',
                                letterSpacing: 2.17,
                                paddingBottom: 5,
                                textTransform: 'uppercase'
                            },
                            monthText: {
                                padding: 15,
                                color: '#1c1c1c',
                                fontFamily: 'yantramanavMedium',
                                fontSize: 18,
                                fontWeight: '500',
                            }
                        },
                    }}
                />
            </View>
        )
    }
}