import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SystemWidgets from './system-widgets'
import MyWidgets from './my-widgets'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  }
}

const useStyles = makeStyles(() => ({

}))

const WidgetSidemenu = ({ onWidgetClick, widgetSettings, addPredefinedWidget }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="System Widgets" {...a11yProps(0)} />
          <Tab label="My Widgets" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <div
        index={value}
      >
        <TabPanel value={value} index={0}>
          <SystemWidgets onWidgetClick={onWidgetClick} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MyWidgets addPredefinedWidget={addPredefinedWidget} widgetSettings={widgetSettings} />
        </TabPanel>
      </div>
    </div>
  )
}

export default WidgetSidemenu