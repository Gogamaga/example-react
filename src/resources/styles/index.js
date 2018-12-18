import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const styles = {
    shadowCard: {
        shadowColor: 'rgba(219, 219, 219)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
    },
    authHeading1: {
        color: '#ffffff',
        fontFamily: 'yantramanav',
        fontSize: windowWidth < 330 ? 22 : 26,
        fontWeight: '700',
        textAlign: 'center'
    },
    authHeading2: {
        color: '#787878',
        fontFamily: 'yantramanav',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center'
    },
    ///////
    header: {
        backgroundColor: "rgba(248, 248, 248, 0.82)",
        height: 90,
        search: {
            backgroundColor: "rgba(142, 142, 147, 0.24)",
            height: 36,
            borderRadius: 10
        }
    },
    // BOTTOM NAVIGATION
    bottomNavigation: {
        backgroundColor: "#ffffff",
        height: 55,
        boxShadow: "0 -5px 10px rgba(219, 219, 219, 0.5)"
    },
    // BOOKING BUTTON FIXED
    bookingFixedButton: {
        width: 105,
        height: 48,
        borderRadius: 4,
        backgroundColor: "#1c1c1c"
    },
    //   INVIRE FIXED BUTTON
    inviteFixedButton: {
        width: 105,
        height: 48,
        borderRadius: 4,
        backgroundColor: "#242424"
    }
};
