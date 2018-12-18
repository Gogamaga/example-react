import {connect} from 'react-redux'

import {ProfileForScreen} from "./ProfileForScreen"

import {common_actions} from "../../../store/actions/common"

function mapStateToProps(store){
    return {
        isVisibleUserProfile: store.common.isVisibleUserProfile
    }
}

export default connect(mapStateToProps)(ProfileForScreen)