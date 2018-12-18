import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import {AvaliableSpaceCard} from "../AvaliableSpaceCard/AvaliableSpaceCard";

import { styles } from "./styles"

export class BookingLocation extends Component {

    _handleSelectLocation = () => {
        this.props.navigation.navigate('BookingScreenSpaceTypes')
    }

    render(){
        return (
            <View style={{backgroundColor:'#f0f1f0'}}>
                <FlatList
                    data={['asdasd', 'gsg', 'w3sdg']}
                    renderItem={(item) => (
                        <View
                            style={{ width: '100%', paddingLeft: 15, paddingRight: 15 }}>
                            <AvaliableSpaceCard onPress={this._handleSelectLocation} style={{ marginBottom: 15, width: '100%' }}/>
                        </View>
                    )}
                    keyExtractor={(item, index) => item}
                />
            </View>
        )
    }

}