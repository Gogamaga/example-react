import {CHANGE_BOOKING_SCREEN_VIEW_PLAIN} from "../../constants/bookingScreen"

const initialState = {
    activeViewPlain : 'List'
}

export default function(state = initialState, action){
    switch (action.type) {
        case CHANGE_BOOKING_SCREEN_VIEW_PLAIN:
            return {...state, activeViewPlain: action.plain}
        default:
            return state
    }
}