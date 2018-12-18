import {connect} from 'react-redux'

import AuthSignIn from './AuthSignIn'

import {auth_actions} from "../../../store/actions/auth"

function mapStateToProps(store){
    return {
        userToken: store.auth.userToken
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignIn)