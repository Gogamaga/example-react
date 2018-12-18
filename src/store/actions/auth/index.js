import {
    SET_USER_TOKEN,
    CLEAR_USER_TOKEN
} from "../../constants/auth";

import {setItem} from "../../../storage"
import {USER_TOKEN} from "../../../storage/constants"

export const auth_actions = {
    setUserToken(token){
        return function(dispatch){
            setItem(USER_TOKEN, token).then(res => console.log(res, 'actions'))
        }
    }
}