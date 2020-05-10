import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({

}))

const DateTimeWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState({ properties: {} })
  const [menuState, setMenuState] = useState({ right: false })
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
        console.log($widget)
        setWidget($widget)
        return $widget
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        fullWidth
        name={widget.properties.name}
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id={widget.properties.id}
        label={widget.properties.label}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DateTimeWidget