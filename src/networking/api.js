import axios from 'axios'

export const subDomain = {
    name: '',
    get domainName(){
        return this.name
    },
    set domainName(subDomain){
        this.name = subDomain
    },
}

export const userToken = {
    token: '',
    get userToken(){
        return this.token
    },
    set userToken(token){
        this.token = token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    clearToken(){
        this.token = ''

    }
}

