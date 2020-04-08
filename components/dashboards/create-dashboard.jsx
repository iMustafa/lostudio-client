import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Dashboard Settings';
    case 1:
      return 'Datasource Settings';
    case 2:
      return 'Allow people to help you build your dashboard!';
    case 3:
      return 'Confirm your data';
    default:
      return 'Unknown step';
  }
}

const CreateDashboard = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set())
  const steps = getSteps()

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

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
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