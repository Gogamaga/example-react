import { combineReducers } from "redux";

import auth from './auth'
import common from './common'
import users from './users'
import bookingScreen from './bookingScreen'

export default combineReducers({
    auth,
    common,
    users,
    bookingScreen
})