import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
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
}))

const GeneralSettings = ({ id }) => {
  const classes = useStyles()
  const [state, setState] = useState({})

  useEffect(() => {
    const getInitialProps = async () => {
      try {

      } catch (e) {
        console.log(e)
      }
    }
  }, [])

  return (
    <div>
      <h2 className={classes.h2}>
        <span className={classes.span}>Dashboard Details</span>
      </h2>
      <div>
        <TextField label="Title" placeholder="Dashboard Title" fullWidth />

        <TextField
          style={{ marginTop: 10 }}
          fullWidth
          label="Description"
          placeholder="Dashboard Description"
          multiline
          rows={2}
          rowsMax={4}
        />

        <Button fullWidth style={{ marginTop: 10 }}>Save Changes</Button>
      </div>
    </div>
  )
}

export default GeneralSettings