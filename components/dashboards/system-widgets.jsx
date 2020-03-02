import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import WidgetIcon from '../widgets/widget-icon'

import TableChartIcon from '@material-ui/icons/TableChart'
import TimelineIcon from '@material-ui/icons/Timeline'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import PieChartIcon from '@material-ui/icons/PieChart'
import BarChartIcon from '@material-ui/icons/BarChart'

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
    { title: 'Donut Chart', icon: <DonutLargeIcon /> }
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
              <Grid item xs={4}>
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
              <Grid item xs={4}>
                <WidgetIcon onWidgetClick={props.onWidgetClick} icon={chart.icon} title={chart.title} />
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default SystemWidgets