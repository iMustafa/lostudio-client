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

  public static async createDashboard({ Authorization, dashboard }: { dashboard: Dashboard, Authorization: string }): Promise<Dashboard> {
    return axios
      .post(`${API_URL}/Dashboards`, dashboard, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getDashboards({ Authorization, query }: { Authorization?: string, query?: any }): Promise<Array<Dashboard>> {
    console.log(Authorization)
    return axios
      .get(`${API_URL}/Dashboards`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err)
  }

  public static async getDashboardById(data: Datasource): Promise<Dashboard> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async updateDashboard(id: string, data): Promise<Dashboard> {
    return axios
      .patch(`${API_URL}/Dashboards/${id}`, data)
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async deleteDashboard(data: Datasource): Promise<Dashboard> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getWidgetSettings({ Authorization, id }: { Authorization?: string, id: string }): Promise<Array<WidgetSettings>> {
    return axios
      .get(`${API_URL}/Dashboards/${id}/widgetSettings`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getCollaborators({ Authorization, id }: { Authorization?: string, id: string }): Promise<Array<User>> {
    return axios
      .get(`${API_URL}/Dashboards/${id}/collaborators`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getCollaboratorations({ Authorization }: { Authorization?: string }): Promise<Array<Dashboard>> {
    return axios
      .get(`${API_URL}/Dashboards/collaborations`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async addCollaborator(
    { Authorization, email, id, editor, viewer }: { Authorization?: string, email: string, id: string, editor: boolean, viewer: boolean }
  ): Promise<any> {
    return axios
      .post(
        `${API_URL}/Dashboards/${id}/dashboardRoleMappings`,
        { email, editor, viewer },
        { headers: { Authorization: Authorization || Cookie.get('id') } }
      )
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async addWidgetToDashboard(id: string, fk: string): Promise<Dashboard> {
    return axios
      .put(`${API_URL}/Dashboards/${id}/widgetSettings/rel/${fk}`, { dashboardId: id, widgetSettingsId: fk }, { headers: { Authorization: Cookie.get('id') } })
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

