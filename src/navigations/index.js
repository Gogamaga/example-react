import React from "react";
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

import { Auth } from "./auth";
import { BottomNavigator } from "./bottomTab";

import { Profile } from "../components/Profile/Profile";
import { SearchScreen } from "../components/SearchScreen/SearchScreen"


// const Switch = createSwitchNavigator(
//     {
//         Auth,
//         BottomNavigator: createStackNavigator({
//                 Bottom: {
//                     screen: BottomNavigator
//                 },
//                 UserProfile: {
//                     screen: (props) => <Profile {...props}/>
//                 },
//                 Search: {
//                     screen: (props) => <SearchScreen {...props} />
//                 }
//             },
//             {
//                 initialRouteName: 'Bottom',
//                 mode: 'modal',
//                 headerMode: 'none'
//             })
//     },
//     {
//         initialRouteName: userToken.userToken ? 'BottomNavigator' : "Auth",
//     },
// );

function MainNavigator(props){
    console.log(props)
    const Switch = createSwitchNavigator(
        {
            Auth,
            BottomNavigator: createStackNavigator({
                    Bottom: {
                        screen: BottomNavigator
                    },
                    UserProfile: {
                        screen: (props) => <Profile {...props}/>
                    },
                    Search: {
                        screen: (props) => <SearchScreen {...props} />
                    }
                },
                {
                    initialRouteName: 'Bottom',
                    mode: 'modal',
                    headerMode: 'none'
                })
        },
        {
            initialRouteName: !props ? 'BottomNavigator' : "Auth",
        },
    );
    return createAppContainer(Switch)
}

export default MainNavigator
