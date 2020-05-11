import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import WidgetIcon from '../widgets/widget-icon'
import { v4 as uuidv4 } from 'uuid'
import TableChartIcon from '@material-ui/icons/TableChart'
import TimelineIcon from '@material-ui/icons/Timeline'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import PieChartIcon from '@material-ui/icons/PieChart'
import BarChartIcon from '@material-ui/icons/BarChart'
import ListAltIcon from '@material-ui/icons/ListAlt'
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import DateRangeIcon from '@material-ui/icons/DateRange'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import DialpadIcon from '@material-ui/icons/Dialpad'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import SelectAllIcon from '@material-ui/icons/SelectAll'
import TextFormatIcon from '@material-ui/icons/TextFormat'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import GridOnIcon from '@material-ui/icons/GridOn'
import ReceiptIcon from '@material-ui/icons/Receipt'
import ImageIcon from '@material-ui/icons/Image'
import ListIcon from '@material-ui/icons/List'
import SubjectIcon from '@material-ui/icons/Subject'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import TitleIcon from '@material-ui/icons/Title'
import ViewListIcon from '@material-ui/icons/ViewList'
import ReorderIcon from '@material-ui/icons/Reorder'

const useStyles = makeStyles(() => ({

}))

const SystemWidgets = (props) => {
  const classes = useStyles()

  const TableWidgets = [
    { title: 'Table', icon: <TableChartIcon /> }
  ]
  const ChartWidgets = [
    { title: 'Line Chart', icon: <TimelineIcon /> },
    { title: 'Bar Chart', icon: <BarChartIcon /> },
    { title: 'Bubble Chart', icon: <BubbleChartIcon /> },
    { title: 'Pie Chart', icon: <PieChartIcon /> },
    { title: 'Donut Chart', icon: <DonutLargeIcon /> },
    { title: 'Gantt Chart', icon: <ListAltIcon /> }
  ]
  const FormControlsWidgets = [
    { title: 'Form Group', icon: <ReorderIcon /> },
    { title: 'Auto Complete', icon: <TextRotationNoneIcon /> },
    { title: 'Button', icon: <TouchAppIcon /> },
    { title: 'Checkbox', icon: <CheckBoxIcon /> },
    { title: 'Date Time', icon: <DateRangeIcon /> },
    { title: 'File', icon: <FileCopyIcon /> },
    { title: 'Number', icon: <DialpadIcon /> },
    { title: 'Password', icon: <VisibilityOffIcon /> },
    { title: 'Radio', icon: <RadioButtonCheckedIcon /> },
    { title: 'Select', icon: <SelectAllIcon /> },
    { title: 'Text Area', icon: <TextFormatIcon /> },
    { title: 'Text Field', icon: <TextFieldsIcon /> }
  ]
  const HtmlElementWidgets = [
    { title: 'Accordion', icon: <ExpandMoreIcon /> },
    { title: 'Data Grid', icon: <GridOnIcon /> },
    { title: 'Div', icon: <ReceiptIcon /> },
    { title: 'Image', icon: <ImageIcon /> },
    { title: 'List', icon: <ListIcon /> },
    { title: 'Paragraph', icon: <SubjectIcon /> },
    { title: 'Progress Bar', icon: <AutorenewIcon /> },
    { title: 'Span', icon: <TitleIcon /> },
    { title: 'Tabs', icon: <ViewListIcon /> }
  ]

  return (
    <div className={classes.root}>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Tables</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
            {TableWidgets.map(chart => (
              <Grid item xs={4} key={uuidv4()}>
                <WidgetIcon onWidgetClick={props.onWidgetClick} icon={chart.icon} title={chart.title} />
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Charts</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
            {ChartWidgets.map(chart => (
              <Grid item xs={4} key={uuidv4()}>
                <WidgetIcon onWidgetClick={props.onWidgetClick} icon={chart.icon} title={chart.title} />
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>HTML Elements</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
            {HtmlElementWidgets.map(element => (
              <Grid item xs={4} key={uuidv4()}>
                <WidgetIcon onWidgetClick={props.onWidgetClick} icon={element.icon} title={element.title} />
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Form Controls</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
            {FormControlsWidgets.map(control => (
              <Grid item xs={4} key={uuidv4()}>
                <WidgetIcon onWidgetClick={props.onWidgetClick} icon={control.icon} title={control.title} />
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  )
}

export default SystemWidgets