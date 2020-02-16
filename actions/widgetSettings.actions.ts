import axios from 'axios'
import config from 'next/config'
import Cookie from 'js-cookie'
import User from '../types/users.types'
import Dashboard from '../types/dashboard.types'
import Datasource from '../types/datasource.types'
import Widget from '../types/widget.types'
import WidgetSettings from '../types/widgetSettings.type'

const { API_URL } = config().publicRuntimeConfig

export default class WidgetSettingsActions {

  // TODO
  public static async createWidgetSettings(widgetSettings: WidgetSettings): Promise<WidgetSettings> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  // TODO
  public static async getWidgetSettings(): Promise<Array<WidgetSettings>> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  // TODO
  public static async getWidgetSettingsById(): Promise<WidgetSettings> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  // TODO
  public static async updateWidgetSettings(widgetSettings: WidgetSettings): Promise<WidgetSettings> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  // TODO
  public static async deleteWidgetSettings(id: string): Promise<WidgetSettings> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }
}