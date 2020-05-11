import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import WidgetSettingsActions from '../../../actions/widgetSettings.actions'

const useStyles = makeStyles({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  formControl: {
    marginTop: "15px"
  }
})

const ExportTableData = ({ widget, data, selectedRows }) => {
  const classes = useStyles()
  const [state, setState] = useState({
    method: 'download', format: 'csv', fields: widget.config.fields
  })
  const [fields, setFields] = useState([])

  const handleDataChange = event => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const handleFieldChange = name => event => {
    const { checked } = event.target
    checked ? setFields([...fields, name]) : setFields(fields.filter(field => field != name))
  }

  const exportData = async () => {
    try {
      const { format, method } = state
      const file = await WidgetSettingsActions.exportWidgetData(widget.id, format, method, JSON.stringify(fields))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={classes.list} role="presentation">
      <h2 className={classes.h2}>
        <span className={classes.span}>Export Settings</span>
      </h2>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="export-format">Export Format</InputLabel>
        <Select
          name="format"
          labelId="export-format"
          value={state.format}
          onChange={handleDataChange}
        >
          <MenuItem value="csv">CSV</MenuItem>
          <MenuItem value="json">JSON</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="export-method">Export Method</InputLabel>
        <Select
          name="method"
          labelId="export-method"
          value={state.method}
          onChange={handleDataChange}
        >
          <MenuItem value="download">Download</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </FormControl>

      <h2 className={classes.h2}>
        <span className={classes.span}>Export Fields</span>
      </h2>
      <Typography>Select fields to export from the data set.</Typography>
      {
        state.fields.map(field => (
          <FormControlLabel
            key={field}
            control={
              <Checkbox checked={fields.includes(field)} onChange={handleFieldChange(field)} value={field} />
            }
            label={field}
          />)
        )
      }

      <Button onClick={exportData} className={classes.formControl} fullWidth>
        Export
      </Button>
    </div>
  )
}

export default ExportTableData