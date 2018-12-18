import {connect} from 'react-redux'
import {withNavigation} from 'react-navigation'

import {InvitedCoWokerShortList} from "./InvitedCoWokerShortList"

function mapStateToProps(store){
    return {
        inviteUsers: store.users.inviteUsers
    }
}

export default connect(mapStateToProps)(withNavigation(InvitedCoWokerShortList))