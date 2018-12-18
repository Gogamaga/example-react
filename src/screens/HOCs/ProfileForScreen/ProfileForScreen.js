import React, {Fragment, Component} from 'react'
import {View} from 'react-native'

import Profile from "../../../components/Profile";
import Header from "../../../components/Header";

export const ProfileForScreen = (Screen) => {
    return class Container extends Component {
        static navigationOptions = (nav) => {
            return {
                header: (<Header {...nav}/>),
            }

        }

        render(){
            return (
                <View>
                    {/*<Profile {...this.props}/>*/}
                    <Screen {...this.props}/>
                </View>
            )
        }
    }
}