import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({

}))

const NumberWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState({ properties: {} })
  const [menuState, setMenuState] = useState({ right: false })

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
        setWidget($widget)
        return $widget
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <TextField
      fullWidth
      type="number"
      label={widget.properties.label}
      id={widget.properties.id}
      placeholder={widget.properties.placeholder}
      className={widget.properties.className}
      value={widget.properties.value}
    />
  )
}

export default NumberWidget