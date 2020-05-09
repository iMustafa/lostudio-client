import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({

}))

const TextFieldWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState(null)
  const [menuState, setMenuState] = useState({ right: false })

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

  return (
    <TextField
    // label={widget.config.label || ''}
    // id={widget.config.id || ''}
    // placeholder={widget.config.placeholder || ''}
    // className={widget.config.className || ''}
    // styles={widget.config.styles || {}}
    // name={widget.config.name || ''}
    // value={widget.config.value || ''}
    // type={widget.config.type || 'text'}
    />
  )
}

export default TextFieldWidget