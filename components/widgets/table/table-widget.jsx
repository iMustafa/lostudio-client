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
import { measureConditionResult } from '../../../helpers/measure-conditions'

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
  const [measureConditions, setMeasureConditions] = useState([])
  const [measureConditionsFields, setMeasureConditionsFields] = useState([])

  useEffect(() => {
    const getMeasureConditions = async () => {
      try {
        const $measureConditions = await WidgetSettingsActions.getWidgetSettingsMeasureConditions(widgetId)
        setMeasureConditions($measureConditions)
        setMeasureConditionsFields($measureConditions.map(condition => condition.field))
      } catch (e) {
        console.log(e)
      }
    }
    getMeasureConditions()
  }, [])

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

  const onRowAdd = async newData => {
    try {
      const $data = await WidgetSettingsActions.addWidgetSettingsDocument(widgetId, newData)
      getWidgetData()
      return $data
    } catch (e) {
      console.log(e)
    }
  }

  const onRowUpdate = async (newData, oldData) => {
    try {
      const keyId = oldData[widget.config.primaryKey]
      const $data = await WidgetSettingsActions.editWidgetSettingsDocument(widgetId, newData, keyId)
      getWidgetData()
      return $data
    } catch (e) {
      console.log(e)
    }
  }

  const onRowDelete = async oldData => {
    try {
      const keyId = oldData[widget.config.primaryKey]
      const $data = await WidgetSettingsActions.deleteWidgetSettingsDocument(widgetId, keyId)
      getWidgetData()
      return $data
    } catch (e) {
      console.log(e)
    }
  }

  const editable = () => {
    const { isEditable, isDeletable, isAddable } = widget.config
    const obj = {}
    if (isEditable) obj.onRowUpdate = onRowUpdate
    if (isDeletable) obj.onRowDelete = onRowDelete
    if (isAddable) obj.onRowAdd = onRowAdd
    return obj
  }

  const renderTable = () => {
    return isLoadingData || !widget ? (<CircularProgress />) : (
      <MaterialTable
        columns={
          widget.config.fields.map(field => ({
            field,
            title: field,
            render: rowData => {
              const doesHaveCondition = measureConditionsFields.includes(field)
              if (doesHaveCondition) {
                const condition = measureConditions.filter(c => c.field == field)[0]
                const isConditionMet = measureConditionResult(condition, rowData[field])
                return isConditionMet ? (
                  <Typography style={{ backgroundColor: condition.color }}>{rowData[field]}</Typography>
                ) : <Typography>{rowData[field]}</Typography>
              } else {
                return <Typography>{rowData[field]}</Typography>
              }
            }
          }))
        }
        data={data}
        title={widget.title || ''}
        editable={editable()}
      />
    )
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
          <Typography style={{ color: "#FFF" }}>{widget && widget.title ? widget.title : 'Widget Title'}</Typography>
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