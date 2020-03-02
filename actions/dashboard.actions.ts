import axios from 'axios'
import config from 'next/config'
import Cookie from 'js-cookie'
import User from '../types/users.types'
import Dashboard from '../types/dashboard.types'
import Datasource from '../types/datasource.types'
import Widget from '../types/widget.types'
import WidgetSettings from '../types/widgetSettings.type'

const { API_URL } = config().publicRuntimeConfig

export default class DashboardActions {

  // TODO
  public static async createDashboard(dashborad: Dashboard): Promise<Dashboard> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  // TODO
  public static async getDashboards({ Authorization, query }: { Authorization?: string, query?: any }): Promise<Array<Dashboard>> {
    return axios
      .get(`${API_URL}/Dashboards`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err)
  }

  // TODO
  public static async getDashboardById(data: Datasource): Promise<Dashboard> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  // TODO
  public static async updateDashboard(data: Datasource): Promise<Dashboard> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  // TODO
  public static async deleteDashboard(data: Datasource): Promise<Dashboard> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getWidgetSettings(id: string): Promise<Array<WidgetSettings>> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async addWidgetToDashboard(data: Datasource): Promise<Dashboard> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async removeWidgetFromDashboard(data: Datasource): Promise<Dashboard> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

}

