import React from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";

import BottomTab from "../../screens/BottomTab";
import { BadgesBottomTabInvite } from "../../components/Badges/BadgesBottomTabInvite/BadgesBottomTabInvite";
import { BookingStartTime } from "../../components/BookingStartTime/BookingStartTime";
import { BookingEndTime } from "../../components/BookingEndTime/BookingEndTime";
import { BookingLocation } from "../../components/BookingLocation/BookingLocation";
import { BookingSpaceTypes } from "../../components/BookingSpaceTypes/BookingSpaceTypes";
import { BookingSeats } from "../../components/BookingSeats/BookingSeats";
import BookingInviteCoWoker from "../../components/BookingInviteCoWoker";
import { BookingSuccesful } from "../../components/BookingSuccesful/BookingSuccesful";
import { HeaderBookingScreen } from "../../components/HeaderBookingScreen/HeaderBookingScreen";
import BookingInviteCoWokerConfirmModal from "../../components/BookingInviteCoWokerConfirmModal";
import { BookingInviteCoWokerConfirmModalHeader } from "../../components/BookingInviteCoWokerConfirmModal/BookingInviteCoWokerConfirmModalHeader/BookingInviteCoWokerConfirmModalHeader";
import { BookingSeatsDrawing } from "../../components/BookingSeats/BookingSeatsDrawing/BookingSeatsDrawing";
import { BookingSeatsConfirmModal } from "../../components/BookingSeatsConfirmModal/BookingSeatsConfirmModal";
import { Header } from "../../components/Header/Header";
import CalendarScreen from "../../screens/CalendarScreen";
import InvitesScreen from "../../screens/InvitesScreen/InvitesScreen";
import IndexPage from "../../components/IndexPage";

import { icons } from "../../resources/icons/icons";

const DashBoard = createStackNavigator(
    {
        IndexPage
    },
    {
        cardStyle: {
            backgroundColor: '#f0f1f0'
        },
        defaultNavigationOptions: (nav) => {

            return {
                header: <Header {...nav}/>
            }
        }

    }
);

const Booking = createStackNavigator(
    {
        BookingScreen: createStackNavigator({
            BookingScreenStartTime: {
                screen: (props) => <BookingStartTime {...props} />,
                params: { stage: 'Select start time' },
            },
            BookingScreenEndTime: {
                screen: (props) => <BookingEndTime {...props}/>,
                cardStyle: {
                    backgroundColor: '#f0f1f0'
                },
                params: {
                    stage: 'Select end time'
                }
            },
            BookingScreenLocation: {
                screen: (props) => <BookingLocation {...props}/>,
                cardStyle: {
                    backgroundColor: '#f0f1f0'
                },
                params: {
                    stage: 'Select a location'
                }
            },
            BookingScreenSpaceTypes: {
                screen: (props) => <BookingSpaceTypes {...props}/>,
                cardStyle: {
                    backgroundColor: '#f0f1f0'
                },
                params: {
                    stage: 'Find your space'
                }
            },
            BookingScreenSeats: {
                screen: (props) => <BookingSeats {...props}/>,
                cardStyle: {
                    backgroundColor: '#f0f1f0'
                },
                params: {
                    stage: 'Choose your space'
                }
            },
            BookingScreenInviteCoWoker: {
                screen: (props) => <BookingInviteCoWoker {...props}/>,
                cardStyle: {
                    backgroundColor: '#f0f1f0'
                },
                params: {
                    stage: 'Invite co-woker'
                }
            },
            BookingScreenSuccessful: {
                screen: (props) => <BookingSuccesful {...props}/>,
                cardStyle: {
                    backgroundColor: '#f0f1f0'
                },
                params: {
                    stage: 'Booking successful!'
                }
            },

        }, {
            initialRouteName: 'BookingScreenSeats',
            defaultNavigationOptions: (nav) => {
                return {
                    header: <HeaderBookingScreen {...nav}/>
                }
            },
            cardShadowEnabled: false
        }),
        ModalConfirmInviting: {
            screen: (props) => <BookingInviteCoWokerConfirmModal {...props}/>,

            navigationOptions: (nav) => {
                return {
                    header: <BookingInviteCoWokerConfirmModalHeader {...nav}/>
                }

            }
        },
        BookingScreenSeatsDrawing: {
            screen: () => <BookingSeatsDrawing/>,
            navigationOptions: (nav) => {
                return {
                    header: null
                }

            }
        },
        BookingScreenSeatsConfirmModal: {
            screen: (props) => <BookingSeatsConfirmModal {...props}/>,
            navigationOptions: (nav) => {
                return {
                    header: null
                }

            }
        }

    }, {
        initialRouteName: 'BookingScreen',
        mode: 'modal',
        defaultNavigationOptions: (nav) => {

            return {
                header: <Header {...nav}/>
            }
        }
    }
);
const Calendar = createStackNavigator(
    {
        CalendarScreen
    },
    {
        cardStyle: {
            backgroundColor: '#f0f1f0'
        },
    }
);
const Invite = createStackNavigator(
    {
        InvitesScreen
    },
    {
        cardStyle: {
            backgroundColor: '#f0f1f0'
        },
    }
);

export const BottomNavigator = createBottomTabNavigator(
    {
        IndexPage: {
            screen: DashBoard,
            navigationOptions: (nav) => ({
                tabBarIcon: (e) => <BottomTab {...nav} name={'Dashboard'} icon={{ uri: icons.logoBlack }}/>,
                tabBarOptions: {
                    showLabel: false,
                    style: { height: 55 },
                },
            }),
        },
        Booking: {
            screen: Booking,
            navigationOptions: (nav) => ({
                tabBarIcon: ({ tintColor }) => <BottomTab {...nav} name={'Book'} icon={{ uri: icons.chairBlack }}/>,
                tabBarOptions: {
                    showLabel: false,
                    style: { height: 55 },
                },
            }),
        },
        Calendar: {
            screen: Calendar,
            navigationOptions: (nav) => ({
                tabBarIcon: ({ tintColor }) => <BottomTab {...nav} name={'Calendar'}
                                                          icon={{ uri: icons.calendarBlack }}/>,
                tabBarOptions: {
                    showLabel: false,
                    style: { height: 55 },
                },
            }),
        },
        InvitesScreen: {
            screen: Invite,
            navigationOptions: (nav) => ({
                tabBarIcon: ({ tintColor }) => <BottomTab {...nav} name={'Invites'} icon={{ uri: icons.letterBlack }}>
                    <BadgesBottomTabInvite count={22} style={{ position: 'absolute', top: -4, right: -5 }}/>
                </BottomTab>,
                tabBarOptions: {
                    showLabel: false,
                    style: { height: 55 },

                },
            }),
        }
    },
    {
        initialRouteName: 'IndexPage',

        tabBarOptions: {
            activeTintColor: '#5bc0de',
            labelStyle: { fontsize: 55 },
            style: {
                backgroundColor: '#000'
            }
        },
    },
)