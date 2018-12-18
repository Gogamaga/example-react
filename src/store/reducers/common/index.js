import {
    SHOW_MINIMIZE_HEADER,
    HIDE_MINIMIZE_HEADER,
    SHOW_USER_PROFILE,
    HIDE_USER_PROFILE,
    FETCHING_START,
    FETCHING_FINISHED
} from '../../constants/common'

const initialState = {
    isMinimizeHeader: false,
    isVisibleUserProfile: false,
    isFetching: false
}

export default function(state = initialState, action){
    switch (action.type) {
        case SHOW_MINIMIZE_HEADER:
            return { ...state, isMinimizeHeader: true }
        case HIDE_MINIMIZE_HEADER:
            return { ...state, isMinimizeHeader: false }
        case SHOW_USER_PROFILE:
            return { ...state, isVisibleUserProfile: !state.isVisibleUserProfile }
        case HIDE_USER_PROFILE:
            return { ...state, isVisibleUserProfile: false }
        case FETCHING_START:
            return { ...state, isFetching: true }
        case FETCHING_FINISHED:
            return { ...state, isFetching: false }
        default:
            return state
    }
}