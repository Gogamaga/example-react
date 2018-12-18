import {
    SET_USER_TOKEN,
    CLEAR_USER_TOKEN
} from "../../constants/auth";


const initialState = {
    userToken : ''
}

export default function(state = initialState, action){
    switch (action.type) {
        default:
            return state
    }
}