import { SELECT_USER_USER_TO_INVITE, REMOVE_SELECTED_INVITE_USER } from "../../constants/users"

export const users_actions = {
    selectUserToInvite(id){
        return {
            type: SELECT_USER_USER_TO_INVITE,
            id
        }
    },
    removeSelectedInviteUser(id){
        return {
            type: REMOVE_SELECTED_INVITE_USER,
            id
        }
    }
}