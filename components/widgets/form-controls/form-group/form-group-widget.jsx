import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import { decideWidget } from '../../../../helpers/decide-widgets'
import Swal from 'sweetalert2'

const useStyles = makeStyles(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  formControl: {
    marginTop: "15px"
  }
}))

const FormGroupWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [widget, setWidget] = useState({ properties: {} })
  const [subWidgets, setSubWidgets] = useState([])
  const [menuState, setMenuState] = useState({ right: false })

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
        const $subWidgets = await WidgetSettingsActions.getSubWidgets(widgetId)
        setWidget($widget)
        setSubWidgets($subWidgets)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <FormGroup>
      {
        subWidgets.map(subWidget => (
          <div key={subWidget.id}>
            {decideWidget(subWidget.subWidgetSettings)}
          </div>
        ))
      }
    </FormGroup>
  )
}

export default FormGroupWidget