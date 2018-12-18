import { styles as commonStyles } from "../../../resources/styles"

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
        ...commonStyles.authHeading1,
    },
    newPasswordInput:{
        marginBottom: 10
    },
    confirmPassword:{
        marginBottom:15
    }
}