import { users } from "../../../helpers/users";
import { SELECT_USER_USER_TO_INVITE, REMOVE_SELECTED_INVITE_USER } from "../../constants/users";

const initialState = {
    users: users,
    inviteUsers: []
}

export default function(state = initialState, action){
    switch (action.type) {
        case SELECT_USER_USER_TO_INVITE:
            return {
                ...state,
                inviteUsers: [ ...state.inviteUsers, ...state.users.filter(user => user.id === action.id) ],
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        user.selected = true
                    }
                    return user
                })
            }
        case REMOVE_SELECTED_INVITE_USER:
            return {
                ...state,
                inviteUsers: state.inviteUsers.filter(user => user.id !== action.id),
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        user.selected = false
                    }
                    return user
                })
            }
        default:
            return state
    }
}