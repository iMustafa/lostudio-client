import { makeStyles } from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings'
import AssessmentIcon from '@material-ui/icons/Assessment'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TableWidgetSettingsPanel from './table-widget-settings-panel'
import { ListMeasureCondition } from '../helpers'
import Swal from 'sweetalert2'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  panel: {
    backgroundColor: "#FFF",
    color: "#000"
  }
}))

const TableWidgetSettings = ({ widget, handleSettingsClose, isAdding, onWidgetAdd }) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.list} role="presentation">

      <AppBar position="static" className={classes.panel}>
        <Tabs value={value} onChange={handleChange}>
          <Tab icon={<SettingsIcon />} label="Widget Settings" {...a11yProps(0)} />
          <Tab icon={<AssessmentIcon />} label="Measure Conditions" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <TableWidgetSettingsPanel widget={widget} handleSettingsClose={handleSettingsClose} isAdding={isAdding} onWidgetAdd={onWidgetAdd} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ListMeasureCondition widget={widget} handleSettingsClose={handleSettingsClose} isAdding={isAdding} onWidgetAdd={onWidgetAdd} />
      </TabPanel>

    </div>
  )
}

export default TableWidgetSettings