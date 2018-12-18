import axios from 'axios'

import { CHECK_SUBDOMAIN, SIGN_IN, CHANGE_PASSWORD } from "./constants"
import { DOMAIN } from "../config"
import { subDomain } from "./api"


/**
 *
 * @param {String} subDomain
 * @returns {AxiosPromise<any>}
 */
export function checkSubDomain(subDomain){
    return axios.get(`${subDomain}.${CHECK_SUBDOMAIN}`)
}

/**
 *
 * @param {String} email
 * @param {String} password
 * @returns {AxiosPromise<any>}
 */
export function signIn(email, password){
    return axios.post(`${DOMAIN(subDomain.domainName) + SIGN_IN}`, { email, password })
}

/**
 *
 * @param {Object} {old_password, password}
 * @returns {AxiosPromise<any>}
 */
export function changePassword({ old_password, password }){
    console.log(`${DOMAIN(subDomain.domainName) + CHANGE_PASSWORD}`, { old_password, password })
    return axios.put(`${DOMAIN(subDomain.domainName) + CHANGE_PASSWORD}`, { old_password, password })
}
