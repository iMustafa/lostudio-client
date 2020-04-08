import axios from 'axios'
import config from 'next/config'
import Cookie from 'js-cookie'
import Notification from '../types/notification.types'

const { API_URL } = config().publicRuntimeConfig

export default class NotificationsActions {

  public static async getMyNotificationsCount({ Authorization, userId }: { Authorization?: string, userId?: string }): Promise<{ count: Number }> {
    return axios
      .get(
        `${API_URL}/users/${userId || Cookie.get('userId')}/notifications/count`,
        {
          headers: { Authorization: Authorization || Cookie.get('id') },
          params: { filter: { where: { seen: false } } }
        })
      .then(res => res.data)
      .catch(err => err)
  }

  public static async getMyNotifications({ Authorization, userId }: { Authorization?: string, userId?: string }): Promise<Array<Notification>> {
    return axios
      .get(`${API_URL}/users/${userId || Cookie.get('userId')}/notifications`, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err)
  }

  public static async markAsSeen({ Authorization, id }: { Authorization?: string, id: string }): Promise<Notification> {
    return axios
      .patch(`${API_URL}/Notifications/${id}`, { seen: true }, { headers: { Authorization: Authorization || Cookie.get('id') } })
      .then(res => res.data)
      .catch(err => err)
  }

}