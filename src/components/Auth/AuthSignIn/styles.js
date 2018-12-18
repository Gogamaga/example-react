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
        marginBottom: 10,
        ...commonStyles.authHeading1
    },
    heading2:{
        marginBottom: 30,
        ...commonStyles.authHeading2
    },
    emailInput:{
        marginBottom: 10
    },
    passwordInput:{
        marginBottom: 15
    }
}