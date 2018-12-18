import React, { Component, Fragment } from 'react'
import { View, ScrollView, TouchableWithoutFeedback, Keyboard, Text, Animated } from 'react-native'
import { SearchBar } from "../SearchBar/SearchBar"
import { Tab } from "./Tab/Tab"
import { SearchedCoWokerItem } from "../SearchedCoWokerItem/SearchedCoWokerItem";
import { SearchedCoWorkerItemPreloader } from "../SearchedCoWokerItem/SearchedCoWorkerItemPreloader/SearchedCoWorkerItemPreloader";
import InvitedCoWokerShortList from "./InvitedCoWokerShortList";

import { styles } from "./styles"

export class BookingInviteCoWoker extends Component {

    state = {
        activeTab: 'all',
        isFocused: false,
    }

    _onPressTab = (activeTab) => {
        this.setState({ activeTab })
    }

    componentWillMount(){
        this.props.navigation.addListener('didFocus', () => {
            this.setState({ isFocused: true })
        })
    }

    render(){
        const { activeTab, isFocused } = this.state
        const { users, selectUserToInvite } = this.props
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Fragment>
                    <InvitedCoWokerShortList style={{ position: 'absolute',zIndex:25, bottom: 10, right: 15, width:150, height:40 }}/>
                    <ScrollView
                        scrollEventThrottle={0}
                        style={styles.container}>

                        <View>
                            <SearchBar/>
                            <View style={styles.tabsContainer}>
                                <Tab onPress={() => this._onPressTab('all')} text={'All'} isActive={activeTab === 'all'}
                                     style={styles.tabsContainer.tab}/>
                                <Tab onPress={() => this._onPressTab('team')} text={'Team'}
                                     isActive={activeTab === 'team'} style={styles.tabsContainer.tab}/>
                            </View>
                        </View>
                        <View style={styles.contentContainer}>
                            {isFocused ?
                                <Fragment>
                                    {users.map(user => (
                                        <SearchedCoWokerItem key={user.id} {...user}
                                                             onPress={() => selectUserToInvite(user.id)}
                                                             style={styles.contentContainer.item}/>
                                    ))}
                                </Fragment>
                                :
                                <Fragment>
                                    <SearchedCoWorkerItemPreloader style={styles.contentContainer.item}/>
                                    <SearchedCoWorkerItemPreloader style={styles.contentContainer.item}/>
                                    <SearchedCoWorkerItemPreloader style={styles.contentContainer.item}/>
                                    <SearchedCoWorkerItemPreloader style={styles.contentContainer.item}/>
                                    <SearchedCoWorkerItemPreloader style={styles.contentContainer.item}/>
                                    <SearchedCoWorkerItemPreloader style={styles.contentContainer.item}/>
                                </Fragment>
                            }
                        </View>
                    </ScrollView>

                </Fragment>
            </TouchableWithoutFeedback>
        );
    }
}
