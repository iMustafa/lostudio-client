import Datasource from './datasource.types'
import User from './users.types'
import Widget from './widget.types'

export default interface WidgetSettings {
  id?: string;
  title?: string;
  description?: string;
  config?: any;
  widgetId?: string;
  userId?: string;
  datasourceId?: string;
  datasource?: Datasource;
  widget?: Widget;
  user?: User;
}