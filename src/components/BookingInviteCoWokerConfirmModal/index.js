import {connect} from 'react-redux'

import {BookingInviteCoWokerConfirmModal} from "./BookingInviteCoWokerConfirmModal"

import {users_actions} from "../../store/actions/users"

function mapStateToProps(store){
    return {
        inviteUsers: store.users.inviteUsers
    }
}

function mapDispatchToProps(dispatch){
    return {
        removeSelectedInviteUser(id){
            return dispatch(users_actions.removeSelectedInviteUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingInviteCoWokerConfirmModal)