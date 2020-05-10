import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'

const useStyles = makeStyles(theme => ({

}))

const ButtonWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState({ properties: {} })
  const [menuState, setMenuState] = useState({ right: false })

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
        console.log($widget.properties.code)
        Function($widget.properties.code)()
        setWidget($widget)
        return $widget
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <Button className={widget.properties.className} id={widget.properties.id} onClick={Function(widget.properties.code)()}>
      {widget.properties.label}
    </Button>
  )
}

export default ButtonWidget