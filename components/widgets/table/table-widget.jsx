import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialTable from 'material-table'
import Drawer from '@material-ui/core/Drawer'
import WidgetSettingsActions from '../../../actions/widgetSettings.actions'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '@material-ui/icons/Refresh'
import SettingsIcon from '@material-ui/icons/Settings'
import ShareIcon from '@material-ui/icons/Share'
import TableWidgetSettings from './table-widget-settings'
import ExportTableData from './export-table-data'

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

const TableWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState(null)
  const [data, setData] = useState([])
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [refresh, setRefresh] = useState(0)
  const [menuState, setMenuState] = useState({ right: false, export: false })

  const getWidgetData = async () => {
    try {
      const $data = await WidgetSettingsActions.executeWidgetQuery(widgetId)
      setData($data)
      return $data
    } catch (e) {
      console.log(e)
    }
  }

  const getWidget = async () => {
    try {
      const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
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

  const renderTable = () => {
    return isLoadingData || !widget ? (<CircularProgress />) : (<MaterialTable
      columns={widget.config.fields.map(field => ({ field, title: field }))}
      data={data}
      title=""
    />)
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
      return
    setMenuState({ ...menuState, [side]: open })
  }

  return (
    <div>
      <div className={classes.widgetActions}>
        <div className={classes.widgetTitle}>
          <Typography style={{ color: "#FFF" }}>Widget Title</Typography>
        </div>
        <div className={classes.actionButtons}>
          <IconButton onClick={toggleDrawer('export', true)}>
            <ShareIcon style={{ color: "#FFF" }} fontSize="small" />
          </IconButton>
          <IconButton onClick={toggleDrawer('right', true)}>
            <SettingsIcon style={{ color: "#FFF" }} fontSize="small" />
          </IconButton>
          <IconButton onClick={refreshData}>
            <RefreshIcon style={{ color: "#FFF" }} fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div>
        {renderTable()}
      </div>
      <Drawer anchor="right" open={menuState.right} onClose={toggleDrawer('right', false)}>
        <TableWidgetSettings widget={widget} handleSettingsClose={handleSettingsClose} />
      </Drawer>
      <Drawer anchor="right" open={menuState.export} onClose={toggleDrawer('export', false)}>
        <ExportTableData widget={widget} data={data} />
      </Drawer>
    </div>
  )
}

export default TableWidget