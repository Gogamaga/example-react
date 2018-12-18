import {
    SHOW_MINIMIZE_HEADER,
    HIDE_MINIMIZE_HEADER,
    SHOW_USER_PROFILE,
    HIDE_USER_PROFILE,
    FETCHING_START,
    FETCHING_FINISHED
} from '../../constants/common'

export const common_actions = {
    showMinimizeHeader(){
        return {
            type: SHOW_MINIMIZE_HEADER
        }
    },
    hideMinimizeHeader(){
        return {
            type: HIDE_MINIMIZE_HEADER
        }
    },
    showUserProfile(){
        return {
            type: SHOW_USER_PROFILE
        }
    },
    hideUserProfile(){
        return {
            type: HIDE_USER_PROFILE
        }
    },
    fetchingStart(){
        return {
            type: FETCHING_START
        }
    },
    fetchingFinished(){
        return {
            type: FETCHING_FINISHED
        }
    }
}