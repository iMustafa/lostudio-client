import axios from 'axios'
import config from 'next/config'
import Cookie from 'js-cookie'
import User from '../types/users.types'
import Dashboard from '../types/dashboard.types'
import Datasource from '../types/datasource.types'
import Widget from '../types/widget.types'
import WidgetSettings from '../types/widgetSettings.type'
import { promises } from 'dns'

const { API_URL } = config().publicRuntimeConfig

export default class WidgetSettingsActions {

  // TODO
  public static async createWidgetSettings(widgetSettings: WidgetSettings): Promise<WidgetSettings> {
    return axios
      .post(`${API_URL}/WidgetSettings`, widgetSettings, { headers: { Authorization: Cookie.get('id') } })
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
  public static async getWidgetSettingsById(id: string, Authorization?: string): Promise<WidgetSettings> {
    return axios
      .get(`${API_URL}/WidgetSettings/${id}`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  // TODO
  public static async updateWidgetSettings(id: string, widgetSettings: WidgetSettings): Promise<WidgetSettings> {
    return axios
      .patch(`${API_URL}/WidgetSettings/${id}`, widgetSettings, { headers: { Authorization: Cookie.get('id') } })
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

  public static async executeWidgetQuery(id: string, Authorization: string): Promise<any> {
    return axios
      .get(`${API_URL}/WidgetSettings/${id}/execute-query`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }
}