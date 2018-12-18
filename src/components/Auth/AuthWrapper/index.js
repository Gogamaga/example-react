import {connect} from 'react-redux'

import {authWrapper} from "./AuthWrapper"

import {common_actions} from "../../../store/actions/common"

function mapStateToProps(store){
    return {
        isFetching: store.common.isFetching
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchingStart(){
            return dispatch(common_actions.fetchingStart())
        },
        fetchingFinished(){
            return dispatch(common_actions.fetchingFinished())
        }
    }
}

export default function(screen) {
    return connect(mapStateToProps, mapDispatchToProps)(authWrapper(screen))
}