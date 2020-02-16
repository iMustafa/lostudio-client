import axios from 'axios'
import config from 'next/config'
import Cookie from 'js-cookie'
import User from '../types/users.types'
import Dashboard from '../types/dashboard.types'
import Datasource from '../types/datasource.types'
import Widget from '../types/widget.types'
import WidgetSettings from '../types/widgetSettings.type'

const { API_URL } = config().publicRuntimeConfig

export const getLoggedInUser = (): Promise<User> => new Promise((resolve, reject) => {
  axios
    .get(`${API_URL}/users/${localStorage.getItem('userId')}`, {
      headers: { Authorization: Cookie.get('id') }
    })
    .then(res => resolve(res.data))
    .catch(err => reject(err))
})

export const getUserById = (id: string): Promise<User> => new Promise((resolve, reject) => {
  axios
    .get(`${API_URL}/users/${id}`, {
      headers: { Authorization: Cookie.get('id') }
    })
    .then(res => resolve(res.data))
    .catch(err => reject(err))
})