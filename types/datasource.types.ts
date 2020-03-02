import User from './users.types'

export default interface Datasource {
  _id?: string;
  type: string;
  description: string;
  config: {
    user?: string
    password?: string
    port: number
    db: string
    server: string
  };
  userId?: string;
  user?: User;
}