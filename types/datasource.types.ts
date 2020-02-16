import User from './users.types'

export default interface Datasource {
  _id: string;
  type: string;
  description: string;
  config: any;
  userId: string;
  user: User;
}