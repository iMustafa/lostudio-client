import { useState, useEffect } from 'react'
import DatasourceActions from '../../actions/datasource.actions'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import DashboardActions from '../../actions/dashboard.actions'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '25px'
  },
  cardBody: {
    padding: '10px'
  },
  cardTitle: {
    fontSize: '12px',
    backgroundColor: '#3F51B5',
    padding: '3px 3px 3px 6px',
    color: '#FFF',
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const getSteps = () => ['Dashboard Settings', 'Datasource Settings', 'Add Collaborators', 'Confirmation']

const CreateDashboard = ({ setRefresh, refresh }) => {
  const classes = useStyles()
  const [state, setState] = useState({
    title: '',
    description: '',
    datasourceId: '',
    isSub: false,
    collaborators: []
  })
  const [activeStep, setActiveStep] = useState(0)
  const [datasources, setDatasources] = useState([])
  const [skipped, setSkipped] = useState(new Set())
  const steps = getSteps()

  useEffect(() => {
    const getDataSources = async () => {
      try {
        const data = await DatasourceActions.getDatasources({})
        setDatasources(data)
      } catch (e) {
        console.log(e)
      }
    }
    getDataSources()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FormGroup row style={{ marginBottom: 15 }}>
            <TextField onChange={handleChange} fullWidth label="Title" type='text' name='title' />
            <TextField onChange={handleChange} fullWidth label="Description" multiline={true} type='text' name='description' />
          </FormGroup>
        );
      case 1:
        return (
          <FormGroup row style={{ marginBottom: 15 }}>
            <InputLabel id='datasource-label'>Default DataSource</InputLabel>
            <Select value={state.datasourceId} onChange={handleChange} name='datasourceId' fullWidth labelId='datasource-label'>
              {datasources.map(datasource => (
                <MenuItem value={datasource.id}>{datasource.title}</MenuItem>
              ))}
            </Select>
          </FormGroup>
        );
      case 2:
        return 'Allow people to help you build your dashboard!';
      case 3:
        return (
          <div>
            <p>Name: {state.title}</p>
            <p>Description: {state.description}</p>
            <p>Datasource: {state.datasourceId}</p>
          </div>
        );
      default:
        return 'Unknown step';
    }
  }

  const isStepOptional = step => step === 2
  const isStepSkipped = step => skipped.has(step)
  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1) }
  const handleReset = () => { setActiveStep(0) }

  const submitData = async () => {
    try {
      const dashboard = await DashboardActions.createDashboard({ dashboard: state })
      setRefresh(refresh + 1)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Card className={classes.root}>
      <div className={classes.cardTitle}>Create new dashboard</div>
      <div className={classes.cardBody}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption">Optional</Typography>;
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            {
              activeStep === steps.length ?
                (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <div className={classes.actionButtons}>
                      <Button onClick={handleReset} className={classes.button}>
                        Reset
                     </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <div className={classes.actionButtons}>
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                      {
                        activeStep === steps.length - 1 ?
                          (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={submitData}
                              className={classes.button}
                            >
                              Finish
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                              className={classes.button}
                            >
                              Next
                            </Button>
                          )
                      }
                    </div>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CreateDashboard