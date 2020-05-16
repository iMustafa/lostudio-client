import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'

const useStyles = makeStyles({
  measureConditionFieldTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  }
})

const MeasureConditionItem = ({ widget, measureCondition, key, setRefresh, refresh }) => {
  const classes = useStyles()
  const [showSpinner, setShowSpinner] = useState(false)

  const removeMeasureCondition = async () => {
    try {
      setShowSpinner(true)
      const $measureCondition = await WidgetSettingsActions.deleteWidgetSettingsMeasureConditions(widget.id, measureCondition.id)
      setShowSpinner(false)
      setRefresh(refresh + 1)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Card style={{ padding: 15, marginBottom: 15 }} key={key}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Typography className={classes.measureConditionFieldTitle}>Field</Typography>
          <Typography>{measureCondition.field}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.measureConditionFieldTitle}>Expression</Typography>
          <Typography>{measureCondition.expression}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.measureConditionFieldTitle}>Color</Typography>
          <Typography>{measureCondition.color}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{ marginTop: 15 }}>
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <ArrowUpwardIcon />
          <Typography>{measureCondition.minValue}</Typography>
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <ArrowDownwardIcon />
          <Typography>{measureCondition.maxValue}</Typography>
        </Grid>
      </Grid>
      {
        showSpinner ?
          (
            <CircularProgress />
          ) : (
            <Grid container spacing={0} style={{ marginTop: 15 }}>
              <Grid item xs={6}>
                <Button fullWidth onClick={removeMeasureCondition}>
                  <DeleteIcon style={{ color: '#F00' }} />
                  <Typography style={{ marginLeft: 10 }}>Delete</Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth>
                  <EditIcon style={{ color: '#3F51B5' }} />
                  <Typography style={{ marginLeft: 10 }}>Edit</Typography>
                </Button>
              </Grid>
            </Grid>
          )
      }
    </Card >
  )
}

export default MeasureConditionItem