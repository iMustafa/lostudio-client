import { NextPage } from 'next'
import Cookies from 'next-cookies'
import dynamic from 'next/dynamic'
import WidgetSettingsActions from '../../actions/widgetSettings.actions'

const Gantt = dynamic(() => import('../../components/widgets/charts/gantt-chart'), {
  ssr: false
})

const Widgets: NextPage<{ WidgetSettings: any, Result: any }> = ({ WidgetSettings, Result }) => {
  return (
    <div>
      <div className="gantt-container">
        <Gantt />
      </div>
    </div>
  )
}

Widgets.getInitialProps = async (req) => {
  const Authorization = Cookies(req).id
  const WidgetSettings = await WidgetSettingsActions.getWidgetSettingsById("5e78a808f2c42d5a58cc2cdc", Authorization)
  const Result = await WidgetSettingsActions.executeWidgetQuery("5e78a808f2c42d5a58cc2cdc", Authorization)
  return { WidgetSettings, Result }
}

export default Widgets