import { Dimensions } from "react-native";

const widthWindow = Dimensions.get('window').width

export const styles = {
    container: {
        width: 344,
        shadowColor: 'rgba(219, 219, 219)',
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        borderRadius: 4,
        backgroundColor: '#ffffff',

    },
    imageContainer: {
        height: widthWindow / 2.3,
        backgroundColor: 'transparent',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        overflow: 'hidden',
    },
    infoContainer: {
        height:95,
        paddingTop: 18,
        flexDirection: 'row'
    },
    locationIconContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5
    },
    locationLogo: {
        width: 11,
        height: 14

    },
    infoSpaceName: {
        color: '#1c1c1c',
        fontFamily: 'yantramanav',
        fontSize: 18,
        fontWeight: '500',
        padding: 0

    },
    infoSpaceAdress: {
        color: '#9f9f9f',
        fontFamily: 'yantramanav',
        fontSize: 12,
        fontWeight: '400',
    },
    labelContainer:{
        flexDirection: 'row',
        marginTop: 10
    },

    image: {
        width: '100%',
        height: '100%',

    }
}