import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { ButtonForChangeViewPlain } from "./ButtonForChangeViewPlain"

import { bookingScreen_actions } from "../../../store/actions/bookingScreen"

function mapStateToProps(store){
    return {
        activeViewPlain: store.bookingScreen.activeViewPlain
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeViewPlain(plain){
            return dispatch(bookingScreen_actions.changeViewPlain(plain))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ButtonForChangeViewPlain))