import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'

const useStyles = makeStyles(theme => ({

}))

const ImageWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState({})
  const [menuState, setMenuState] = useState({ right: false })

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
        setWidget($widget)
        console.log($widget)
        return $widget
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <div style={{ backgroundImage: widget.config ? `url('${widget.config.url}')` : '', width: '100%', height: '100%' }}>
    </div>
  )
}

export default ImageWidget