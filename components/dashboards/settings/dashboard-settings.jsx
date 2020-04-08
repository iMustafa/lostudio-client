import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import LockIcon from '@material-ui/icons/Lock'
import SettingsIcon from '@material-ui/icons/Settings'
import PrivacySettings from './privacy-settings'
import GeneralSettings from './general-settings'

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
  root: {
    width: 500
  }
}))

const DashboardSettings = ({ id }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="General Settings" icon={<SettingsIcon />} {...a11yProps(0)} />
          <Tab label="Privacy Settings" icon={<LockIcon />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <div
        index={value}
      >
        <TabPanel value={value} index={0}>
          <GeneralSettings id={id} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PrivacySettings id={id} />
        </TabPanel>
      </div>
    </div>
  )
}

export default DashboardSettings