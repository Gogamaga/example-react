import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const styles = {
    container: {
        backgroundColor: '#1c1c1c',
        height: '100%'
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    backgroudImageBottom:{
        position: 'absolute',
        bottom:0,
        minWidth: windowWidth
    },
    logoContainer: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50,
        icon: {
            width: 26,
            height: 26
        },
        text: {
            color: '#ffffff',
            fontFamily: 'yantramanavMedium',
            fontSize: 30,
            fontWeight: '700',
            marginLeft: 10
        }
    }
}