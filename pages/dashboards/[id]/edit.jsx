import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles'
import GridLayout from 'react-grid-layout'
import Cookies from 'next-cookies'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
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

const useStyles = makeStyles({
  list: {
    width: 500
  },
  fullList: {
    width: 'auto'
  }
})

const EditDashboard = (WidgetSettings) => {
  const classes = useStyles()
  const router = useRouter()
  const { id } = router.query
  const [menuState, setMenuState] = useState({ right: false, addWidget: false, settings: false })
  const [layout, setLayout] = useState(Object.values(WidgetSettings))
  const [addType, setAddType] = useState(null)

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
        const saveWidget = await WidgetSettingsActions.createWidgetSettings(layoutItem)
        const linkWidget = await WidgetSettingsActions.createSubWidget(widgetSettingsId, saveWidget.id)
        console.log(linkWidget)
      } else {
        const saveWidget = await WidgetSettingsActions.createWidgetSettings(layoutItem)
        const linkWidget = await DashboardActions.addWidgetToDashboard(id, saveWidget.id)
        layoutItem.id = saveWidget.id
        setLayout([...layout, layoutItem])
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
      <Drawer anchor="right" open={menuState.right} onClose={toggleDrawer('right', false)}>
        {sideList()}
      </Drawer>

      <Drawer anchor="right" open={menuState.addWidget} onClose={toggleDrawer('addWidget', false)}>
        {decideWidgetSettings(addType, onWidgetAdd)}
      </Drawer>

      <Drawer anchor="right" open={menuState.settings} onClose={toggleDrawer('settings', false)}>
        <DashboardSettings id={id} />
      </Drawer>

      <Card style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ justifySelf: 'flex-start', display: 'flex', flex: 1 }}>
          <IconButton aria-label="back" size="medium" style={{ outline: 'none' }}>
            <ArrowLeft fontSize="default" />
          </IconButton>
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

EditDashboard.getInitialProps = async (req) => {
  const Authorization = Cookies(req).id
  const { id } = req.query
  const WidgetSettings = await DashboardActions.getWidgetSettings({ Authorization, id })
  return WidgetSettings
}

export default EditDashboard;