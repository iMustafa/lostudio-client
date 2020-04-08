import axios from 'axios'
import config from 'next/config'
import Cookie from 'js-cookie'
import Datasource from '../types/datasource.types'

const { API_URL } = config().publicRuntimeConfig

export default class DatasourceActions {

  public static async createDatasource(data: Datasource): Promise<Datasource> {
    return axios
      .post(`${API_URL}/DataSources`, data, { headers: { Authorization: Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err)
  }

  public static async updateDatasource(id: string, data: Datasource): Promise<Datasource> {
    return axios
      .patch(`${API_URL}/DataSources/${id}`, data, { headers: { Authorization: Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getDatasources({ Authorization, query }: { Authorization?: string, query?: any }): Promise<Array<Datasource>> {
    return axios
      .get(`${API_URL}/DataSources`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err)
  }

  public static async getUserDatasources(id: string, query: any): Promise<Array<Datasource>> {
    return axios
      .get(`${API_URL}/users/${id}/dataSrouces`, { headers: { Authorization: Cookie.get('id') }, params: { ...query } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getDatasourceById(id: string): Promise<Datasource> {
    return axios
      .get(`${API_URL}/DataSources/${id}`, { headers: { Authorization: Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async removeDatasource(id: string): Promise<Datasource> {
    return axios
      .delete(`${API_URL}/DataSources/${id}`, { headers: { Authorization: Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getDocList(id: string): Promise<any> {
    return axios
      .get(`${API_URL}/DataSources/${id}/doc-list`, { headers: { Authorization: Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async getFieldList(id: string, docId: string): Promise<any> {
    return axios
      .get(`${API_URL}/DataSources/${id}/field-list`, { headers: { Authorization: Cookie.get('id') }, params: { docId } })
      .then(res => res.data)
      .catch(err => err.response)
  }

  public static async queryDatasource(query: string): Promise<any> {
    return axios
      .post('', {})
      .then(res => res.data)
      .catch(err => err.response)
  }

}

