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
import Drawer from '@material-ui/core/Drawer'
import DashboardActions from '../../../actions/dashboard.actions'
import WidgetSettingsActions from '../../../actions/widgetSettings.actions'
import WidgetSidemenu from '../../../components/dashboards/widgets-menu'
import {
  TableWidget,
  LineChartWidget,
  PieChartWidget,
  DonutChartWidget,
  BarChartWidget,
  AreaChartWidget
} from '../../../components/widgets'
import { useRouter } from 'next/router'


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
  const [menuState, setMenuState] = useState({ right: false })
  const [layout, setLayout] = useState(Object.values(WidgetSettings))

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

  const decideWidget = (widget) => {
    switch (widget.type) {
      case 'Table':
        return <TableWidget widgetId={widget.id} />
      case 'Line Chart':
        return <LineChartWidget />
      case 'Bar Chart':
        return <BarChartWidget />
      case 'Pie Chart':
        return <PieChartWidget />
      case 'Donut Chart':
        return <DonutChartWidget />
      case 'Area Chart':
        return <AreaChartWidget />
    }
  }

  const addWidget = async (title, _) => {
    try {
      const layoutItem = {
        layout: { i: uuidv4(), x: 0, y: 0, w: 6, h: 11, maxW: 16, isDraggable: true, isResizable: true },
        type: title
      }
      const saveWidget = await WidgetSettingsActions.createWidgetSettings(layoutItem)
      await DashboardActions.addWidgetToDashboard(id, saveWidget.id)
      layoutItem.id = saveWidget.id
      setLayout([...layout, layoutItem])
    } catch (e) {
      console.log(e)
    }
  }

  const sideList = () => (
    <div className={classes.list} role="presentation">
      <WidgetSidemenu onWidgetClick={addWidget} widgetSettings={Object.values(WidgetSettings)} />
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
        {sideList('right')}
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
        </div>
      </Card>

      <GridLayout className="layout" cols={16} rowHeight={30} width={1920} layout={layout.map(item => item.layout)} onLayoutChange={onLayoutChange}>
        {renderWidgets()}
      </GridLayout>
    </div>
  )
};

EditDashboard.getInitialProps = async (req) => {
  const Authorization = Cookies(req).id
  const WidgetSettings = await DashboardActions.getWidgetSettings({ Authorization, id: "5e413f33f6af6d17b44df269" })
  return WidgetSettings
}

export default EditDashboard;