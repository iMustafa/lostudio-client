import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import MeasureConditionItem from './measure-conditions-item'
import AddMeasureCondition from './add-measure-condition'

const useStyles = makeStyles({
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
  }
})

const ListMeasureConditions = ({ widget, handleSettingsClose, isAdding, onWidgetAdd }) => {
  const classes = useStyles()
  const [isAddingMeasureCondition, setIsAddingMeasureCondition] = useState(false)
  const [measureConditions, setMeasureConditions] = useState([])
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    const getMeasureConditions = async () => {
      try {
        const $measureConditions = await WidgetSettingsActions.getWidgetSettingsMeasureConditions(widget.id)
        setMeasureConditions($measureConditions)
      } catch (e) {
        console.log(e)
      }
    }
    getMeasureConditions()
  }, [refresh])

  return (
    <div>
      <h2 className={classes.h2}>
        <span className={classes.span}>Measure Conditions</span>
      </h2>
      {
        isAddingMeasureCondition ?
          <AddMeasureCondition
            setRefresh={setRefresh}
            refresh={refresh}
            widget={widget}
            setIsAddingMeasureCondition={setIsAddingMeasureCondition}
          /> :
          (
            <Button
              fullWidth
              style={{ marginBottom: 15 }}
              onClick={() => { setIsAddingMeasureCondition(true) }}>
              Add Measure Condition
            </Button>
          )
      }
      {
        measureConditions.map(measureCondition => (
          <MeasureConditionItem
            setRefresh={setRefresh}
            refresh={refresh}
            widget={widget}
            key={measureCondition.id}
            measureCondition={measureCondition}
          />
        ))
      }
    </div>
  )
}

export default ListMeasureConditions