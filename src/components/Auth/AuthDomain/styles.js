import {styles as commonStyles} from '../../../resources/styles'


export const styles = {
    container: {
        alignItems: 'center',
        marginTop: 50
    },
    content: {
        width: '90%'
    },
    heading: {
        marginBottom: 30,
        ...commonStyles.authHeading1
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        input: {
            flexGrow: 1
        },
        text: {
            color: '#ffffff',
            fontFamily: 'yantramanav',
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 30,
        }
    }
}