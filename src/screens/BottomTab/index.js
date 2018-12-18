import {connect} from 'react-redux'

import {BottomTab} from "./BottomTab";

import {common_actions} from "../../store/actions/common";

function mapStateToProps(store){
    return {
        isVisibleUserProfile: store.common.isVisibleUserProfile
    }
}

function mapDispatchToProps(dispatch){
    return {
        showUserProfile(){
            return dispatch(common_actions.showUserProfile())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomTab)