import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'
import { InvitedCoWokerItem } from "./InvitedCoWokerItem/InvitedCoWokerItem";

import {styles} from "./styles"

export class BookingInviteCoWokerConfirmModal extends Component{

    _removeFromInviting = (id) => {
        this.props.removeSelectedInviteUser(id)
    }

    render(){
        const {inviteUsers} = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    data={inviteUsers}
                    renderItem={({item})=><InvitedCoWokerItem onPress={this._removeFromInviting} {...item}/>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}