import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles'
import GridLayout from 'react-grid-layout'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import ArrowLeft from '@material-ui/icons/ArrowLeft'
import SaveIcon from '@material-ui/icons/Save'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings'
import Drawer from '@material-ui/core/Drawer'
import DashboardActions from '../../../actions/dashboard.actions'
import WidgetSettingsActions from '../../../actions/widgetSettings.actions'
import WidgetSidemenu from '../../../components/dashboards/widgets-menu'
import DashboardSettings from '../../../components/dashboards/settings/dashboard-settings'
import { useRouter } from 'next/router'
import { decideWidgetSettings, decideWidget } from '../../../helpers/decide-widgets'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 500
  },
  fullList: {
    width: 'auto'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}))

const EditDashboard = () => {
  const classes = useStyles()
  const router = useRouter()
  const [id, setId] = useState(router.query.id)
  const [menuState, setMenuState] = useState({ right: false, addWidget: false, settings: false })
  const [layout, setLayout] = useState([])
  const [addType, setAddType] = useState(null)
  const [WidgetSettings, setWidgetSettings] = useState([])
  const [SubDashboards, setSubDashboards] = useState([])
  const [refresh, setRefresh] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getProps = async () => {
      try {
        setIsLoading(true)
        const dashboard = await DashboardActions.getDashboardById(id)
        if (!dashboard.isSub) {
          const $SubDashboards = await DashboardActions.getSubDashboards({ id })
          setSubDashboards($SubDashboards)
        }
        const $WidgetSettings = await DashboardActions.getWidgetSettings({ id })
        setLayout($WidgetSettings)
        setWidgetSettings($WidgetSettings)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    getProps()
  }, [id, refresh])

  const onLayoutChange = async ($event) => {
    try {
      const layouts = layout.map(item => {
        const $eventItem = $event.filter($item => $item.i == item.layout.i)[0]
        return { ...item, layout: $eventItem }
      })
      await Promise.all(layouts.map(item => WidgetSettingsActions.updateWidgetSettings(item.id, item)))
    } catch (err) {
      console.log(err)
    }
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
      return

    setMenuState({ ...menuState, [side]: open })
  }

  const addPredefinedWidget = async (widget, _) => {
    try {
      const $widget = { ...widget }
      delete $widget.id; delete $widget.icon
      $widget.layout.i = uuidv4()
      const saveWidget = await WidgetSettingsActions.createWidgetSettings($widget)
      await DashboardActions.addWidgetToDashboard(id, saveWidget.id)
      setLayout([...layout, { layout: $widget.layout, type: $widget.type }])
    } catch (e) {
      console.log(e)
    }
  }

  const onWidgetAdd = async (config, isFormControl = false, widgetSettingsId = null) => {
    try {
      const layoutItem = {
        layout: { i: uuidv4(), x: 0, y: 0, w: 6, h: 11, maxW: 16, isDraggable: true, isResizable: true },
        ...config
      }
      if (widgetSettingsId) {
        delete layoutItem.layout
        setIsLoading(true)
        const saveWidget = await WidgetSettingsActions.createWidgetSettings(layoutItem)
        const linkWidget = await WidgetSettingsActions.createSubWidget(widgetSettingsId, saveWidget.id)
        setIsLoading(false)
      } else {
        setIsLoading(true)
        const saveWidget = await WidgetSettingsActions.createWidgetSettings(layoutItem)
        const linkWidget = await DashboardActions.addWidgetToDashboard(id, saveWidget.id)
        layoutItem.id = saveWidget.id
        setLayout([...layout, layoutItem])
        setIsLoading(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const addWidget = async (type, _) => {
    setAddType(type)
    setMenuState({ ...menuState, addWidget: true, right: false })
  }

  const sideList = () => (
    <div className={classes.list} role="presentation">
      <WidgetSidemenu onWidgetClick={addWidget} addPredefinedWidget={addPredefinedWidget} widgetSettings={Object.values(WidgetSettings)} />
    </div>
  )

  const renderWidgets = () => layout.map((item, i) => (
    <div key={item.layout.i}>
      {decideWidget(item)}
    </div>
  ))

  return (
    <div>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Drawer anchor="right" open={menuState.right} onClose={toggleDrawer('right', false)}>
        {sideList()}
      </Drawer>

      <Drawer anchor="right" open={menuState.addWidget} onClose={toggleDrawer('addWidget', false)}>
        {decideWidgetSettings(addType, onWidgetAdd)}
      </Drawer>

      <Drawer anchor="right" open={menuState.settings} onClose={toggleDrawer('settings', false)}>
        <DashboardSettings id={id} refresh={refresh} setRefresh={setRefresh} />
      </Drawer>

      <Card style={{ display: 'flex', flexDirection: 'row' }}>
        <IconButton onClick={() => { router.back() }} aria-label="back" size="medium" style={{ outline: 'none' }}>
          <ArrowLeft fontSize="default" />
        </IconButton>
        <div style={{ display: 'flex', flex: 1, overflowX: 'scroll', alignItems: 'center' }}>
          <Button onClick={() => { setId(router.query.id) }} style={{ marginLeft: 10 }}>Main</Button>
          {
            SubDashboards.map(subDashboard => (
              <div key={subDashboard.subDashboardId}>
                <Button
                  onClick={() => {
                    setId(subDashboard.subDashboardId)
                  }}
                  style={{ marginLeft: 10 }}>
                  <Typography noWrap style={{ fontWeight: 500, fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>
                    {subDashboard.subDashboard.title}
                  </Typography>
                </Button>
              </div>
            ))
          }
        </div>
        <div style={{ justifySelf: 'flex-end', display: 'flex', flex: 1, justifyContent: 'flex-end', paddingRight: '10px' }}>
          <Button style={{ outline: 'none' }} size="small" startIcon={<SaveIcon />}>
            Save
          </Button>
          <Button style={{ marginLeft: '10px', outline: 'none' }} size="small" onClick={toggleDrawer('right', true)} startIcon={<DashboardIcon />}>
            Widgets
          </Button>
          <Button style={{ marginLeft: '10px', outline: 'none' }} size="small" onClick={toggleDrawer('settings', true)} startIcon={<SettingsIcon />}>
            Settings
          </Button>
        </div>
      </Card>

      <div style={{ paddingBottom: '15px' }}>
        <GridLayout className="layout" cols={16} rowHeight={30} width={1920} layout={layout.map(item => item.layout)} onLayoutChange={onLayoutChange}>
          {renderWidgets()}
        </GridLayout>
      </div>
    </div>
  )
};

// EditDashboard.getInitialProps = async (req) => {
//   const Authorization = Cookies(req).id
//   const { id } = req.query
//   const WidgetSettings = await DashboardActions.getWidgetSettings({ Authorization, id })
//   const SubDashboards = await DashboardActions.getSubDashboards({ Authorization, id })
//   return { WidgetSettings, SubDashboards }
// }

export default EditDashboard;