import { useState, useEffect } from 'react'
import Gantt from './gantt-chart-widget'
import Toolbar from './gantt-chart-widget-toolbar'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import CircularProgress from '@material-ui/core/CircularProgress'

const GanttChartWidget = () => {
  const [widget, setWidget] = useState({})
  const [tasks, setTasks] = useState({ data: [], links: [] })
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [zoom, setZoom] = useState('Days')

  const handleZoomChange = (zoom) => {
    setZoom(zoom)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const Widget = await WidgetSettingsActions.getWidgetSettingsById("5e78a808f2c42d5a58cc2cdc")
        const Result = await WidgetSettingsActions.executeWidgetQuery("5e78a808f2c42d5a58cc2cdc")
        setTasks({ data: Result[0].data, links: Result[0].links })
        setWidget({ ...Widget })
        setIsLoadingData(false)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  const renderGunttChart = () => isLoadingData || !widget ? (<CircularProgress />) : (
    <div>
      <div className="zoom-bar">
        <Toolbar
          zoom={zoom}
          onZoomChange={handleZoomChange}
        />
      </div>
      <div className="gantt-container">
        <Gantt tasks={tasks} zoom={zoom} />
      </div>
    </div>
  )

  return (
    renderGunttChart()
  )
}

export default GanttChartWidget