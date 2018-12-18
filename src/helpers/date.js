import moment from 'moment'

/**
 *
 * @param {Date} firsDate
 * @param {Date} secondDate
 * @returns {boolean}
 */
export function equalDate(firsDate, secondDate){
    return !moment(firsDate).diff(secondDate, 'd')
}


/**
 *
 * @param {Date} date
 * @returns {Array} example ['HH','mm']
 */
export function getArrayTime(date){
    return moment(date).format('HH:mm').split(':')
}