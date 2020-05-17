import Datasource from './datasource.types'
import User from './users.types'

export default interface Dashboard {
  _id: string;
  title: string;
  description: string;
  userId: string;
  datasourceId: string;
  isSub: boolean;
  datasource?: Datasource;
  user?: User;
  permissions?: {
    editor: Boolean,
    viewer: Boolean
  }
}