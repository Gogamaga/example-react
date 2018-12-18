import React, { Component, Fragment } from 'react'
import { View, Text, Animated, TouchableOpacity, TouchableNativeFeedback } from 'react-native'

import { styles } from "./styles"
import { SmallUserAvatar } from "../../SmallUserAvatar/SmallUserAvatar";

export class InvitedCoWokerShortList extends Component {

    positionRight = new Animated.Value(15)

    componentWillReceiveProps(prevProps){
        const { inviteUsers } = this.props
        if (inviteUsers !== prevProps.inviteUsers) {

            Animated.timing(this.positionRight, {
                duration: 400,
                toValue: (inviteUsers.length) * 10 + 15
            }).start(() => this.positionRight = new Animated.Value(15))
        }
    }

    _openInvitingList = () => {
        this.props.navigation.navigate("ModalConfirmInviting")
    }

    render(){
        const { style, inviteUsers } = this.props
        return (
            <View style={{ ...styles.container, ...style }}>
                {inviteUsers.map((user, index, array) => (
                    <Fragment key={user.id}>
                        {array.length - 1 === index && index < 4
                            ?

                            <Animated.View
                                style={{ width: 35, height: 35, position: 'absolute', right: this.positionRight }}>
                                <TouchableOpacity onPress={() => this._openInvitingList()}>
                                    <View style={{ width: 35, height: 35 }}>
                                        <SmallUserAvatar source={user.avatar}
                                                         style={styles.image}/>
                                    </View>
                                </TouchableOpacity>
                            </Animated.View>

                            : array.length - 1 !== index && index < 4
                                ?

                                <Animated.View
                                    style={{ position: 'absolute', right: index * 10 + 15 }}>

                                    <TouchableOpacity onPress={() => this._openInvitingList()}>
                                        <View style={{ width: 35, height: 35 }}>
                                            <SmallUserAvatar source={user.avatar}
                                                             style={styles.image}/>
                                        </View>
                                    </TouchableOpacity>
                                </Animated.View>

                                :
                                <TouchableOpacity onPress={() => this._openInvitingList()}>
                                    <View
                                        style={{ ...styles.restCircle, ...{ position: 'absolute', right: 4 * 10 + 15 } }}>
                                        <Text style={styles.text}>{'+' + (array.length - 4)}</Text>
                                    </View>
                                </TouchableOpacity>

                        }
                    </Fragment>

                ))}
            </View>
        )
    }
}