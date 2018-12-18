import {connect} from 'react-redux'
import {Profile} from "./Profile";

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
        },
        hideUserProfile(){
            return dispatch(common_actions.hideUserProfile())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)