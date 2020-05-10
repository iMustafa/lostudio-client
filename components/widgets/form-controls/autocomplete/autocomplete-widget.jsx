import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'

const useStyles = makeStyles(theme => ({

}))

const AutoCompleteWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState({ properties: {}, config: { fields: [] } })
  const [data, setData] = useState([])
  const [menuState, setMenuState] = useState({ right: false })

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
        const $data = await WidgetSettingsActions.executeWidgetQuery(widgetId)
        setWidget($widget)
        setData($data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <Autocomplete
      id={widget.properties.id}
      placeholder={widget.properties.placeholder}
      className={widget.properties.className}
      value={widget.properties.value}
      options={data}
      getOptionLabel={(option) => option[widget.config.fields[0]]}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField fullWidth name={widget.properties.name} {...params} label={widget.properties.label} />
      )}
    />
  )
}

export default AutoCompleteWidget