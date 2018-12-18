import { connect } from 'react-redux'

import { BookingInviteCoWoker } from "./BookingInviteCoWoker"
import { users_actions } from "../../store/actions/users";

function mapStateToProps(store){
    return {
        users: store.users.users
    }
}

function mapDispatchToProps(dispatch){
    return {
        selectUserToInvite(id){
            return dispatch(users_actions.selectUserToInvite(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookingInviteCoWoker)