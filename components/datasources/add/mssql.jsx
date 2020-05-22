import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { Button } from '@material-ui/core'
import DatasourceActions from '../../../actions/datasource.actions'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px 15px 15px 15px',
  },
  cardBody: {
    padding: '10px'
  },
  cardTitle: {
    fontSize: '12px',
    backgroundColor: '#3F51B5',
    padding: '3px 3px 3px 6px',
    color: '#FFF',
    fontFamily: "Roboto"
  },
  gridStyles: {
    margin: '10px 0 5px 0',
    width: '100%'
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    margin: '10px 0 20px',
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  card: {
    padding: '10px 15px 20px 15px',
    marginBottom: '20px'
  }
}))

const AddMsSQLDataSource = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ showPassword: false, useAuth: 0, isLoading: false })
  const [attempts, setAttempts] = useState(0)
  const [state, setState] = useState({
    title: '',
    type: 'mssql',
    force: false,
    description: '',
    config: {
      port: 27017,
      server: '',
      db: '',
      user: '',
      password: ''
    }
  })

  const handleSubmitData = async () => {
    try {
      setValues({ ...values, isLoading: true })
      const res = await DatasourceActions.createDatasource(state)
      setValues({ ...values, isLoading: false })
    } catch (e) {
      if (e.error.message == 'Connection Failed') {
        setState({ ...state, force: true })
        setAttempts(1)
      }
    }
  }

  const handleInputChange = (event) => {
    const { value, name } = event.target
    setState({ ...state, [name]: value })
    setAttempts(0)
  }

  const handleAuthChange = (event) => {
    const { value, name } = event.target
    setState({ ...state, config: { ...state.config, [name]: value } })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const renderSubmitButtons = () => {
    return values.isLoading ? (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </div>
    ) : attempts >= 1 ? (
      <div>
        <div className="alert alert-info" style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'Roboto', margin: '0' }}>Connection failed to this database, would you like to save it anyway?</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button>Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>
    ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button>Cancel</Button>
            <Button onClick={handleSubmitData}>Save</Button>
          </div>
        )
  }

  return (
    <Card>
      <div className={classes.cardTitle}>
        Add a New Data Source - Microsoft SQL Server
      </div>
      <Card className={classes.root}>

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Basic</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={handleInputChange.bind(this)} fullWidth id="name" name="title" label="Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={handleInputChange.bind(this)} fullWidth id="description" name="description" label="Description" />
            </Grid>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Database Properties</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField onChange={handleAuthChange.bind(this)} fullWidth id="server" name="server" label="Server" />
            </Grid>
            <Grid item xs={4}>
              <TextField onChange={handleAuthChange.bind(this)} fullWidth id="port" name="port" label="Port" />
            </Grid>
            <Grid item xs={4}>
              <TextField onChange={handleAuthChange.bind(this)} fullWidth id="database" name="database" label="Database" />
            </Grid>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Authentication</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField onChange={handleAuthChange.bind(this)} fullWidth id="username" name="user" label="Username" />
            </Grid>
            <Grid item xs={6}>
              <TextField onChange={handleAuthChange.bind(this)} fullWidth id="password" name="password" label="Password" />
            </Grid>
          </Grid>
        </Card>

        {renderSubmitButtons()}

      </Card>
    </Card>
  )
};


export default AddMsSQLDataSource;