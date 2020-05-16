import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/Cancel'
import CircularProgress from '@material-ui/core/CircularProgress'
import Colors from '../../../../helpers/css-colors'
import Autocomplete from '@material-ui/lab/Autocomplete'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import { conditionCases } from '../../../../helpers/measure-conditions'

const AddMeasureCondition = ({ widget, setIsAddingMeasureCondition, setRefresh, refresh }) => {
  const [measureConditionsFields, updateMeasureConditionsFields] = useState({})
  const [fields, setFields] = useState(widget.config.fields)
  const [showSpinner, setShowSpinner] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    updateMeasureConditionsFields({ ...measureConditionsFields, [name]: value })
  }

  const addMeasureCondition = async () => {
    try {
      setShowSpinner(true)
      const measureCondition = await WidgetSettingsActions.createWidgetSettingsMeasureConditions(widget.id, measureConditionsFields)
      setShowSpinner(false)
      setIsAddingMeasureCondition(false)
      setRefresh(refresh + 1)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Card style={{ padding: 15, marginBottom: 15 }}>
      <Grid container spacing={0}>
        <Grid item xs={4} style={{ paddingLeft: 5, paddingRight: 5 }}>
          <FormControl fullWidth>
            <InputLabel id="field-select-label">Field</InputLabel>
            <Select
              fullWidth
              labelId="field-select-label"
              value={measureConditionsFields.field}
              onChange={handleChange}
              name="field"
            >
              {fields.map(field => <MenuItem key={field} value={field}>{field}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} style={{ paddingLeft: 5, paddingRight: 5 }}>
          <FormControl fullWidth>
            <InputLabel id="expression-select-label">Expression</InputLabel>
            <Select
              fullWidth
              labelId="expression-select-label"
              value={measureConditionsFields.expression}
              onChange={handleChange}
              name="expression"
            >
              {conditionCases.map(conditionCase => <MenuItem key={conditionCase.title} value={conditionCase.title}>{conditionCase.friendlyName}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} style={{ paddingLeft: 5, paddingRight: 5 }}>
          <Autocomplete
            fullWidth
            options={Colors}
            renderInput={params => (
              <TextField fullWidth name="color" {...params} label="Color" onChange={handleChange} />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{ marginTop: 15 }}>
        <Grid item xs={6} style={{ paddingLeft: 5, paddingRight: 5 }}>
          <TextField
            fullWidth
            type="number"
            label="Minimum Value"
            onChange={handleChange}
            name="minValue"
            value={measureConditionsFields.minValue}
          />
        </Grid>
        <Grid item xs={6} style={{ paddingLeft: 5, paddingRight: 5 }}>
          <TextField
            fullWidth
            type="number"
            name="maxValue"
            onChange={handleChange}
            label="Maximum Value"
            value={measureConditionsFields.maxValue}
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{ marginTop: 15 }}>
        <Grid item xs={6}>
          <Button fullWidth onClick={() => { setIsAddingMeasureCondition(false) }}>
            <CancelIcon style={{ color: '#F00' }} />
            <Typography style={{ marginLeft: 10 }}>Cancel</Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          {
            showSpinner ?
              (
                <CircularProgress />
              ) : (
                <Button fullWidth onClick={addMeasureCondition}>
                  <SaveIcon style={{ color: '#3F51B5' }} />
                  <Typography style={{ marginLeft: 10 }}>Save</Typography>
                </Button>
              )
          }
        </Grid>
      </Grid>
    </Card >
  )
}

export default AddMeasureCondition