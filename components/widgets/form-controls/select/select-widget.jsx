import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles(theme => ({

}))

const SelectWidget = ({ widgetId }) => {
  const classes = useStyles()
  const labelId = uuidv4()
  const [widget, setWidget] = useState({ config: {}, properties: {} })
  const [data, setData] = useState([])
  const [menuState, setMenuState] = useState({ right: false })
  const [value, setValue] = useState()

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
        const $data = await WidgetSettingsActions.executeWidgetQuery(widgetId)
        setWidget($widget)
        setData($data)
        return $widget
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel id={labelId}>{widget.properties.label}</InputLabel>
      <Select
        fullWidth
        labelId={labelId}
        id={widget.properties.id}
        name={widget.properties.name}
        value={value}
        onChange={handleChange}
        className={widget.properties.className}
      >
        {
          data.map(option => (
            <MenuItem value={option[widget.config.fields[0]]}>{option[widget.config.fields[0]]}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default SelectWidget