import { Dimensions } from 'react-native'
import { styles as style } from "../../resources/styles";

const windowWidth = Dimensions.get('window').width

const infoContainerSmallScreen = {
    height: '100%',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    text: {
        color: '#ffffff',
        fontFamily: 'yantramanav',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        textAlign: 'center'
    },
    button: {
        width: 125
    }
}

const infoContainerOtherScreen = {
    height: '100%',
    flexGrow: 1,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'space-evenly',
    text: {
        color: '#ffffff',
        fontFamily: 'yantramanav',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 18,
        textAlign: 'center'
    },
    button: {}
}

export const styles = {
    container: {
        height: 146,
        backgroundColor: '#000000',
        flexDirection: 'row',
        shadowColor: 'rgba(219, 219, 219)',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
    },
    imageContainer: {
        image: {}
    },
    infoContainer: windowWidth < 330 ? infoContainerSmallScreen : infoContainerOtherScreen
}