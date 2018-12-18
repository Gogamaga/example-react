import { Dimensions } from "react-native";

const widthWindow = Dimensions.get('window').width

export const styles = {
    container:{
        width: 344,
        shadowColor: 'rgba(219, 219, 219)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        borderRadius: 4,
        backgroundColor: '#ffffff',
    },
    mainInfoContainer:{
        borderBottomColor: '#f0f1f0',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        imageContainer:{
            height: widthWindow / 2.3,
            backgroundColor: 'transparent',
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
            overflow: 'hidden',
        },
        image:{
            width: '100%',
            height: '100%',
        },
        infoContainer: {
            height:95,
            paddingTop: 18,
            flexDirection: 'row',

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
            marginTop: 10,
        }
    },
    discriptionsContainer:{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop:45,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
//    HALF
    halfRoud: {
        width: 25,
        height: 25,
        borderRadius:20,
        backgroundColor: '#f0f1f0',
        position: 'absolute',
    },
    halfRoudLeft :{
        left: -12.5,
        top: -12.5,

    },
    halfRoudRight:{
        right: -12.5,
        top: -12.5
    }
}