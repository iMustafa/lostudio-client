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
import CircularProgress from '@material-ui/core/CircularProgress';

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

const AddMongoDBDataSource = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ showPassword: false, useAuth: 0, isLoading: false })
  const [attempts, setAttempts] = useState(0)
  const [state, setState] = useState({
    title: '',
    type: 'mongodb',
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

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
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

  const handleSubmitData = async () => {
    try {
      setValues({ ...values, isLoading: true })
      const res: any = await DatasourceActions.createDatasource(state)
      setValues({ ...values, isLoading: false })
    } catch (e) {
      if (e.error.message == 'Connection Failed') {
        setState({ ...state, force: true })
        setAttempts(1)
      }
    }
  }

  const renderAuth = () => {
    return values.useAuth ? (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth onChange={handleAuthChange.bind(this)} required value={state.config.user} name="user" label="Username" />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              required
              name="password"
              type={values.showPassword ? 'text' : 'password'}
              onChange={handleAuthChange.bind(this)}
              value={state.config.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    ) : <Grid container spacing={2}></Grid>
  }

  return (
    <Card>
      <div className={classes.cardTitle}>
        Add a New Data Source - MongoDB
      </div>
      <Card className={classes.root}>

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Properties</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={handleInputChange.bind(this)} fullWidth required value={state.title} name="title" label="Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={handleInputChange.bind(this)} fullWidth id="description" value={state.description} name="description" label="Description" />
            </Grid>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Database Properties</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField fullWidth onChange={handleAuthChange.bind(this)} required value={state.config.server} name="server" label="Server" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth onChange={handleAuthChange.bind(this)} required value={state.config.port} name="port" label="Port" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth onChange={handleAuthChange.bind(this)} required value={state.config.db} name="db" label="Database" />
            </Grid>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Authentication</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="mechanism">Mechanism</InputLabel>
                <Select
                  labelId="mechanism"
                  onChange={(e) => { setValues({ ...values, useAuth: e.target.value as number }) }}
                  value={values.useAuth}
                >
                  <MenuItem value={0}>No Authentication</MenuItem>
                  <MenuItem value={1}>Username and Password</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {renderAuth()}
          </Grid>
        </Card>

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Miscellaneous</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth id="timeout" name="timeout" label="Query Timeout" />
            </Grid>
          </Grid>
        </Card>

        {renderSubmitButtons()}

      </Card>
    </Card>
  )
};


export default AddMongoDBDataSource;