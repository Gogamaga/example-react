export const validate = {
    /**
     *
     * @param {String} email
     * @returns {boolean}
     */
    isEmailAddress(email){
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(email)
    },

    /**
     *
     * @param {String} password
     * @returns {boolean}
     */
    isPassword(password){
        return password.length >= 6
    }
}