import { AsyncStorage } from 'react-native'


/**
 *
 * @param {String} key
 * @returns {Promise<void>}
 */
export const getItem = async(key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch (e) {
        console.log(e)
    }

}

/**
 *
 * @param {String} key
 * @param {String} value
 * @returns {Promise<void>}
 */
export const setItem = async(key, value) => {
    try {
        return await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
    }
}