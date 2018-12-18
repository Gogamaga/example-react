import { Dimensions } from 'react-native'

import {styles as style} from '../../../resources/styles'

const windowWidth = Dimensions.get('window').width

export const styles = {
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 4,
        overflow: 'hidden',
        ...style.shadowCard
    },
    imageContainer: {
        width: '100%',
        height: windowWidth / 2.3,
        image: {
            width: '100%',
            height: '100%'
        }
    },
    infoContainer: {
        flexDirection: 'row',
        padding: 20,
        iconContainer: {
            marginRight: 13,
            icon: {
                width: 11,
                height: 14
            }
        },
        name: {
            color: '#1c1c1c',
            fontFamily: 'yantramanavMedium',
            fontSize: 18,
            fontWeight: '500',
            lineHeight: 18
        },
        address: {
            color: '#9f9f9f',
            fontFamily: 'yantramanav',
            fontSize: 12,
            fontWeight: '400',
            lineHeight: 12,
            marginBottom: 10
        }
    }
}