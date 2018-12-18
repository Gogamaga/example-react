import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { SearchBar } from "../SearchBar/SearchBar";

import { styles } from "./styles"
import { AvaliableSpaceCard } from "../AvaliableSpaceCard/AvaliableSpaceCard";

export class SearchScreen extends Component {


    render(){
        return (
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <SearchBar autoFocus={true}/>
                </View>
                <FlatList
                    data={[ 'asd', 'asdasf', 'wff' ]}
                    renderItem={() => {
                        return (
                            <AvaliableSpaceCard style={{ marginBottom: 15 }}/>
                        )
                    }}
                    keyExtractor={(item) => item}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: 25, paddingBottom: 30 }}
                />
            </View>
        )
    }
}