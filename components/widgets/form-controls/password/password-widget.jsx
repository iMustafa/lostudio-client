import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles(theme => ({

}))

const PasswordWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState({ properties: {} })
  const [menuState, setMenuState] = useState({ right: false })
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setValue(value)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
        setWidget($widget)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <TextField
      name={widget.properties.name}
      label={widget.properties.label}
      id={widget.properties.id}
      fullWidth
      onChange={handleChange}
      className={widget.properties.className}
      value={value}
      type={'password'}
    />
  )
}

export default PasswordWidget