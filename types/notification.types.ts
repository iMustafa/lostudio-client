import User from './users.types'

export default interface Datasource {
  _id?: string;
  message: string;
  seen: boolean;
  userId?: string;
  user?: User;
}