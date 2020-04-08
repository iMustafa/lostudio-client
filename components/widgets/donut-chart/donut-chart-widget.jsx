import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui'
import { Animation } from '@devexpress/dx-react-chart'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '@material-ui/icons/Refresh'
import SettingsIcon from '@material-ui/icons/Settings'
import Drawer from '@material-ui/core/Drawer'
import WidgetSettingsActions from '../../../actions/widgetSettings.actions'
import DonutChartWidgetSettings from './donut-chart-widget-settings'

const useStyles = makeStyles(theme => ({
  list: {
    width: 500
  },
  widgetActions: {
    display: 'flex',
    backgroundColor: "#3F51B5",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
  },
  widgetTitle: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: "10px"
  },
  actionButtons: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))

const DonutChartWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState(null)
  const [data, setData] = useState([])
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [refresh, setRefresh] = useState(0)
  const [menuState, setMenuState] = useState({ right: false })

  const getWidgetData = async () => {
    try {
      const $data = await WidgetSettingsActions.executeWidgetQuery(widgetId)
      console.log($data, $data)
      setData($data)
      return $data
    } catch (e) {
      console.log(e)
    }
  }

  const getWidget = async () => {
    try {
      const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
      console.log('$widget', $widget)
      setWidget($widget)
      return $widget
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getWidget()
    getWidgetData()
  }, [refresh])

  const refreshData = async () => {
    setIsLoadingData(true)
    getWidget()
    getWidgetData()
    setIsLoadingData(false)
  }

  const handleSettingsClose = () => {
    setRefresh(refresh + 1)
    toggleDrawer('right', false)
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
      return
    setMenuState({ ...menuState, [side]: open })
  }

  const renderChart = () => {
    return isLoadingData || !widget ? (<CircularProgress />) : (
      <Paper>
        <Chart data={data}>
          <PieSeries
            valueField="total"
            argumentField="month"
            innerRadius={0.6}
          />
          <Title
            text="The Population of Continents and Regions"
          />
          <Animation />
        </Chart>
      </Paper>
    )
  }

  return (
    <div>
      <div className={classes.widgetActions}>
        <div className={classes.widgetTitle}>
          <Typography style={{ color: "#FFF" }}>Widget Title</Typography>
        </div>
        <div className={classes.actionButtons}>
          <IconButton onClick={toggleDrawer('right', true)}>
            <SettingsIcon style={{ color: "#FFF" }} fontSize="small" />
          </IconButton>
          <IconButton onClick={refreshData}>
            <RefreshIcon style={{ color: "#FFF" }} fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div>
        {renderChart()}
      </div>
      <Drawer anchor="right" open={menuState.right} onClose={toggleDrawer('right', false)}>
        <DonutChartWidgetSettings widget={widget} handleSettingsClose={handleSettingsClose} />
      </Drawer>
    </div>
  )
}

export default DonutChartWidget