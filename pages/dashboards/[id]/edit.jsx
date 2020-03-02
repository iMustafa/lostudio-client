import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridLayout from 'react-grid-layout'
import MaterialTable from 'material-table'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import ArrowLeft from '@material-ui/icons/ArrowLeft'
import SaveIcon from '@material-ui/icons/Save'
import DashboardIcon from '@material-ui/icons/Dashboard'
import Drawer from '@material-ui/core/Drawer'
import WidgetSidemenu from '../../../components/dashboards/widgets-menu'
import {
  TableWidget,
  LineChartWidget,
  PieChartWidget,
  DonutChartWidget,
  BarChartWidget,
  AreaChartWidget
} from '../../../components/widgets'

const useStyles = makeStyles({
  list: {
    width: 500
  },
  fullList: {
    width: 'auto'
  }
})

const EditDashboard = () => {
  const classes = useStyles()
  const [menuState, setMenuState] = useState({ right: false })
  const [layout, setLayout] = useState([
    
  ])

  const onLayoutChange = (e) => {
    console.log(e)
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
      return

    setMenuState({ ...menuState, [side]: open })
  }

  const decideWidget = (title) => {
    switch (title) {
      case 'Table':
        return <TableWidget />
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

  const addWidget = (title, _) => {
    const index = layout.length
    const layoutItem = { i: JSON.stringify({ title, i: index.toString() }), x: 0, y: 0, w: 6, h: 11, maxW: 16 }
    setLayout([...layout, layoutItem])
  }

  const sideList = () => (
    <div className={classes.list} role="presentation">
      <WidgetSidemenu onWidgetClick={addWidget} />
    </div>
  )

  const renderWidgets = () => layout.map((layout, i) => (
    <div key={layout.i}>
      {decideWidget(JSON.parse(layout.i).title)}
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

      <GridLayout onLayoutChange={onLayoutChange} className="layout" layout={layout} cols={16} rowHeight={30} width={1920}>
        {renderWidgets()}
      </GridLayout>
    </div>
  )
};

export default EditDashboard;