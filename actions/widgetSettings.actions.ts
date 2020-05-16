import axios from 'axios'
import config from 'next/config'
import Cookie from 'js-cookie'
import User from '../types/users.types'
import Dashboard from '../types/dashboard.types'
import Datasource from '../types/datasource.types'
import Widget from '../types/widget.types'
import MeasureCondition from '../types/measureCondition.types'
import WidgetSettings from '../types/widgetSettings.type'
import { promises } from 'dns'

const { API_URL } = config().publicRuntimeConfig

export default class WidgetSettingsActions {

  public static async addWidgetSettingsDocument(widgetSettingsId: string, data): Promise<any> {
    return axios
      .post(`${API_URL}/WidgetSettings/${widgetSettingsId}/add-document`, data, { headers: { Authorization: Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async editWidgetSettingsDocument(widgetSettingsId: string, data, keyId: string): Promise<any> {
    return axios
      .post(`${API_URL}/WidgetSettings/${widgetSettingsId}/edit-document`, data, { headers: { Authorization: Cookie.get('id') }, params: { keyId } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async deleteWidgetSettingsDocument(widgetSettingsId: string, keyId: string): Promise<any> {
    return axios
      .delete(`${API_URL}/WidgetSettings/${widgetSettingsId}/delete-document`, { headers: { Authorization: Cookie.get('id') }, params: { keyId } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async createWidgetSettings(widgetSettings: WidgetSettings): Promise<WidgetSettings> {
    return axios
      .post(`${API_URL}/WidgetSettings`, widgetSettings, { headers: { Authorization: Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getSubWidgets(widgetSettingsId: string): Promise<Array<WidgetSettings>> {
    return axios
      .get(
        `${API_URL}/WidgetSettings/${widgetSettingsId}/subWidgetSettings`,
        {
          headers: {
            Authorization: Cookie.get('id')
          },
          params: {
            filter: { include: 'subWidgetSettings' }
          }
        }
      )
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async exportWidgetData(widgetSettingsId: string, format: string, method: string, selectedFields: Array<any>): Promise<any> {
    if (format == 'email') {
      return axios
        .get(
          `${API_URL}/WidgetSettings/${widgetSettingsId}/export-data`,
          {
            headers: { Authorization: Cookie.get('id') },
            params: { format, selectedFields, method }
          }
        )
        .then(res => res.data)
        .catch(err => err.response)
    } else {
      window.open(`${API_URL}/WidgetSettings/${widgetSettingsId}/export-data?format=${format}&method=${method}&selectedFields=${selectedFields}`)
    }
  }

  public static async createSubWidget(widgetSettingsId: string, subWidgetSettingsId: string): Promise<any> {
    return axios
      .post(
        `${API_URL}/WidgetSettings/${widgetSettingsId}/subWidgetSettings`,
        { subWidgetSettingsId },
        { headers: { Authorization: Cookie.get('id') } }
      )
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getWidgetSettingsMeasureConditions(widgetSettingsId: string): Promise<Array<MeasureCondition>> {
    return axios
      .get(`${API_URL}/WidgetSettings/${widgetSettingsId}/measureConditions`, { headers: { Authorization: Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async createWidgetSettingsMeasureConditions(widgetSettingsId: string, measureCondition: MeasureCondition): Promise<MeasureCondition> {
    return axios
      .post(
        `${API_URL}/WidgetSettings/${widgetSettingsId}/measureConditions`,
        measureCondition,
        { headers: { Authorization: Cookie.get('id') } }
      )
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async deleteWidgetSettingsMeasureConditions(widgetSettingsId: string, measureConditionId: string): Promise<any> {
    return axios
      .delete(
        `${API_URL}/WidgetSettings/${widgetSettingsId}/measureConditions/${measureConditionId}`,
        { headers: { Authorization: Cookie.get('id') } }
      )
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async deleteSubWidget(widgetSettingsId: string, subWidgetSettingsId: string): Promise<any> {
    return axios
      .delete(
        `${API_URL}/WidgetSettings/${widgetSettingsId}/subWidgetSettings/${subWidgetSettingsId}`,
        { headers: { Authorization: Cookie.get('id') } }
      )
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getFormGroupWidgets(): Promise<Array<WidgetSettings>> {
    return axios
      .get(
        `${API_URL}/WidgetSettings`,
        {
          headers: {
            Authorization: Cookie.get('id')
          },
          params: {
            filter: { where: { type: "Form Group" } }
          }
        }
      )
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

  public static async executeWidgetQuery(id: string, Authorization?: string): Promise<any> {
    return axios
      .get(`${API_URL}/WidgetSettings/${id}/execute-query`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }
}