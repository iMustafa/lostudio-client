import axios from "axios";
import config from "next/config";
import Cookie from "js-cookie";
import User from "../types/users.types";
import Dashboard from "../types/dashboard.types";
import Datasource from "../types/datasource.types";
import Widget from "../types/widget.types";
import WidgetSettings from "../types/widgetSettings.type";

const { API_URL } = config().publicRuntimeConfig;

export default class DashboardActions {
  public static async createDashboard({
    Authorization,
    dashboard,
  }: {
    dashboard: Dashboard;
    Authorization?: string;
  }): Promise<Dashboard> {
    return axios
      .post(`${API_URL}/Dashboards`, dashboard, {
        headers: { Authorization: Authorization || Cookie.get("id") },
      })
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async getDashboards({
    Authorization,
    query,
  }: {
    Authorization?: string;
    query?: any;
  }): Promise<Array<Dashboard>> {
    return axios
      .get(`${API_URL}/Dashboards`, {
        headers: { Authorization: Authorization || Cookie.get("id") },
        params: {
          filter: { where: { or: [{ isSub: false }, { type: "dashboard" }] } },
        },
      })
      .then((res) => res.data)
      .catch((err) => err);
  }

  public static async getWebpages({
    Authorization,
  }: {
    Authorization?: string;
  }): Promise<Array<Dashboard>> {
    return axios
      .get(`${API_URL}/Dashboards`, {
        headers: { Authorization: Authorization || Cookie.get("id") },
        params: { filter: { where: { type: "webpage" } } },
      })
      .then((res) => res.data)
      .catch((err) => err);
  }

  public static async linkSubDashboard({
    id,
    subDashboardId,
  }: {
    id: string;
    subDashboardId: string;
  }): Promise<any> {
    return axios
      .post(
        `${API_URL}/Dashboards/${id}/subDashboards`,
        { dashboardId: id, subDashboardId },
        { headers: { Authorization: Cookie.get("id") } }
      )
      .then((res) => res.data)
      .catch((err) => err);
  }

  public static async unLinkSubDashboard({
    id,
    subDashboardId,
  }: {
    id: string;
    subDashboardId: string;
  }): Promise<any> {
    return axios
      .delete(`${API_URL}/Dashboards/${id}/subDashboards/${subDashboardId}`, {
        headers: { Authorization: Cookie.get("id") },
      })
      .then((res) => res.data)
      .catch((err) => err);
  }

  public static async getSubDashboards({
    Authorization,
    id,
  }: {
    Authorization?: string;
    id: string;
  }): Promise<any> {
    return axios
      .get(`${API_URL}/Dashboards/${id}/subDashboards`, {
        headers: { Authorization: Authorization || Cookie.get("id") },
        params: { filter: { include: "subDashboard" } },
      })
      .then((res) => res.data)
      .catch((err) => err);
  }

  public static async getDashboardById(id: string): Promise<Dashboard> {
    return axios
      .get(`${API_URL}/Dashboards/${id}`, {
        headers: { Authorization: Cookie.get("id") },
      })
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async updateDashboard(id: string, data): Promise<Dashboard> {
    return axios
      .patch(`${API_URL}/Dashboards/${id}`, data)
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async deleteDashboard(data: Datasource): Promise<Dashboard> {
    return axios
      .post("", {})
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async getWidgetSettings({
    Authorization,
    id,
  }: {
    Authorization?: string;
    id: string;
  }): Promise<Array<WidgetSettings>> {
    return axios
      .get(`${API_URL}/Dashboards/${id}/widgetSettings`, {
        headers: { Authorization: Authorization || Cookie.get("id") },
      })
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async getCollaborators({
    Authorization,
    id,
  }: {
    Authorization?: string;
    id: string;
  }): Promise<Array<User>> {
    return axios
      .get(`${API_URL}/Dashboards/${id}/collaborators`, {
        headers: { Authorization: Authorization || Cookie.get("id") },
      })
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async getCollaboratorations({
    Authorization,
  }: {
    Authorization?: string;
  }): Promise<Array<Dashboard>> {
    return axios
      .get(`${API_URL}/Dashboards/collaborations`, {
        headers: { Authorization: Authorization || Cookie.get("id") },
      })
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async addCollaborator({
    Authorization,
    email,
    id,
    editor,
    viewer,
  }: {
    Authorization?: string;
    email: string;
    id: string;
    editor: boolean;
    viewer: boolean;
  }): Promise<any> {
    return axios
      .post(
        `${API_URL}/Dashboards/${id}/dashboardRoleMappings`,
        { email, editor, viewer },
        { headers: { Authorization: Authorization || Cookie.get("id") } }
      )
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async addWidgetToDashboard(
    id: string,
    fk: string
  ): Promise<Dashboard> {
    return axios
      .put(
        `${API_URL}/Dashboards/${id}/widgetSettings/rel/${fk}`,
        { dashboardId: id, widgetSettingsId: fk },
        { headers: { Authorization: Cookie.get("id") } }
      )
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async createWidgetInDashboard(
    id: string,
    widgetData: any
  ): Promise<Dashboard> {
    return axios
      .post(`${API_URL}/Dashboards/${id}/widgetSettings`, widgetData, {
        headers: { Authorization: Cookie.get("id") },
      })
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  public static async removeWidgetFromDashboard(
    data: Datasource
  ): Promise<Dashboard> {
    return axios
      .post("", {})
      .then((res) => res.data)
      .catch((err) => err.response);
  }
}
