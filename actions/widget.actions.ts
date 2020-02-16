import axios from 'axios'
import config from 'next/config'
import Cookie from 'js-cookie'
import User from '../types/users.types'
import Dashboard from '../types/dashboard.types'
import Datasource from '../types/datasource.types'
import Widget from '../types/widget.types'
import WidgetSettings from '../types/widgetSettings.type'

const { API_URL } = config().publicRuntimeConfig

export default class WidgetActions {

  // TODO
  public static async getWidgets(): Promise<Array<Widget>> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  // TODO
  public static async getWidgetById(): Promise<Widget> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }
}