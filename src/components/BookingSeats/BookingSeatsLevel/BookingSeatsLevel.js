import React, { Component, Fragment } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Image from 'react-native-remote-svg'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

import { styles } from "./styles"
import { icons } from "../../../resources/icons/icons";
import { BookingSeatsSeat } from "../BookingSeatsSeat/BookingSeatsSeat";

export class BookingSeatsLevel extends Component {

    state = {
        activeSectionsId: 0,
    };

    _onToggle = (id) => {
        this.setState({ activeSectionsId: id })
    }

    render(){
        const { style, level = 1, spaces } = this.props
        const { activeSectionsId } = this.state
        return (
            <Fragment>
                <View style={{ ...styles.container, ...style }}>
                    {spaces.map((level, index) => {
                        return (
                            <Fragment key={index}>
                                <View style={styles.topLine}/>
                                <Collapse
                                    onToggle={() => this._onToggle(index)}
                                    isCollapsed={index === activeSectionsId}
                                    style={
                                        {
                                            flexDirection: 'row',
                                            width: '100%',
                                            paddingTop: 25,
                                        }}
                                >
                                    <CollapseHeader
                                        style={{ flexDirection: 'row', alignItems: 'flex-start', marginRight: 10 }}>
                                        <View style={styles.iconContainer}>
                                            <Image style={styles.iconContainer.icon}
                                                   source={{ uri: icons.burgerBlack }}/>
                                            <Text style={styles.iconContainer.text}>Lvl {level.level}</Text>
                                        </View>
                                    </CollapseHeader>
                                    <CollapseBody
                                        style={styles.seatsContainer}
                                    >
                                        {level.spaces.map((space, index) => {
                                            return (
                                                <BookingSeatsSeat
                                                    key={index}
                                                    onPress={() => this.props.navigation.navigate('BookingScreenSeatsConfirmModal')}
                                                    style={{ ...{ marginBottom: 25 }, ...styles.seatsContainer.seat }}
                                                    {...space}
                                                />
                                            )
                                        })}
                                    </CollapseBody>
                                </Collapse>
                            </Fragment>
                        )
                    })}
                </View>
            </Fragment>
        );
    }
}
