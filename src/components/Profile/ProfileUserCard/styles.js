import {Dimensions} from 'react-native'
import { styles as style } from '../../../resources/styles'
const windowWidth = Dimensions.get('window').width

export const styles = {
    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius:4,
        overflow: 'hidden',
        ...style.shadowCard
    },
    photoContainer: {
        width: '100%',
        height: windowWidth/2.5,
        photo: {
            width: '100%',
            height: '100%'
        }
    },
    infoContainer: {
        padding: 20,
        mainInfo: {
            flexDirection: 'row',
            iconContainer: {
                marginRight: 13,
                icon: {
                    width: 14,
                    height: 14
                }
            },
            name: {
                color: '#1c1c1c',
                fontFamily: 'yantramanav',
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 18
            }
        },
        contactInfo: {
            marginTop: 15,
            contact: {
                flexDirection: 'row',
                alignItems: 'center',
                icon: {
                    width: 14,
                    height: 14,
                    marginRight: 13,
                },
                text: {
                    color: '#1c1c1c',
                    fontFamily: 'yantramanav',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 20,
                }
            }
        }
    }
}