import axios from 'axios'
import config from 'next/config'
import Cookie from 'js-cookie'
import {
  LoginCredentials,
  RegistrationData,
  LoginResponse
} from '../types/auth.types'

const { API_URL } = config().publicRuntimeConfig

export const login = (data: LoginCredentials): Promise<LoginResponse> => new Promise((resolve, reject) => {
  axios.post(`${API_URL}/users/login`, data)
    .then(res => resolve(res.data))
    .catch(err => reject(err.response))
})

export const register = (data: RegistrationData) => new Promise((resolve, reject) => {
  axios.post(`${API_URL}/users`, data)
    .then(res => resolve(res.data))
    .catch(err => reject(err.response))
})

export const logout = () => new Promise((resolve, reject) => {
  axios.post(`${API_URL}/users/logout`, {}, {
    headers: { Authorization: Cookie.get('id') }
  })
    .then(res => resolve(res.data))
    .catch(err => reject(err))
})

export const deleteCookie = () => {
  Cookie.remove('id')
  Cookie.remove('ttl')
  Cookie.remove('userId')
  Cookie.remove('created')
}

export const saveLoginData = (data: LoginResponse) => {
  Object.keys(data)
    .forEach(key => {
      Cookie.set(key, data[key])
    })
}
