import {createStackNavigator} from 'react-navigation'

import AuthDomain from "../../components/Auth/AuthDomain/AuthDomain";
import AuthSignIn from "../../components/Auth/AuthSignIn";
import AuthChangePassword from "../../components/Auth/AuthChangePassword/AuthChangePassword";

export const Auth = createStackNavigator(
    {
        AuthDomain,
        AuthSignIn,
        AuthChangePassword,
    },
    {
        initialRouteName: "AuthDomain",
        defaultNavigationOptions: (nav) => {
            return {
                header: null
            }
        }
    },
)