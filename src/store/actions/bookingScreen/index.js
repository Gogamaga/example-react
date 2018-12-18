import {CHANGE_BOOKING_SCREEN_VIEW_PLAIN} from "../../constants/bookingScreen"

export const bookingScreen_actions = {
    changeViewPlain(plain){
        return function(dispatch){
            return new Promise((resolve, reject) => {
                dispatch({type: CHANGE_BOOKING_SCREEN_VIEW_PLAIN, plain})
                resolve(plain)
            })
        }
    }
}