import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const styles = {
    container: {
        // flexDirection: 'row',
        paddingTop: 15
    },
    iconContainer: {
        // width:'25%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingBottom: 25,
        icon: {
            width: 18,
            height: 14,
            marginRight: 5
        },
        text: {
            color: '#000000',
            fontFamily: 'yantramanavMedium',
            fontSize: 18,
            fontWeight: '500',
            lineHeight: 18
        }
    },
    seatsContainer: {
        flex: 3,
        // width:'75%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        seat: {
            width: windowWidth <= 330 ? '30%' : '25%',
            marginLeft: windowWidth <= 330 ? 5 : null
        }
    },
    topLine: {
        height: 0,
        width: '100%',
        borderWidth: 0.5,
        borderStyle: 'dashed',
        borderColor: '#9f9f9f'
    }
}