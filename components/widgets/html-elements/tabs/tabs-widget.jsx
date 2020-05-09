import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

}))

const TabsWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState(null)
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
    <div></div>
  )
}

export default TabsWidget