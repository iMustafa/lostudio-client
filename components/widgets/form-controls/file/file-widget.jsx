import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'

const useStyles = makeStyles(theme => ({

}))

const FileWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState({ properties: { acceptedFileFormats: [] } })
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
    <input
      type='file'
      id={widget.properties.id}
      name={widget.properties.name}
      className={widget.properties.className}
      accept={widget.properties.acceptedFileFormats.join(',')}
    />
  )
}

export default FileWidget