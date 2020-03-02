import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

  return (
    <Card>
      <div className={classes.cardTitle}>
        Add a New Data Source - Microsoft SQL Server
      </div>
      <Card className={classes.root}>

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Database Properties</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField fullWidth id="server" name="server" label="Server" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth id="port" name="port" label="Port" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth id="database" name="database" label="Database" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={<Checkbox color="primary" />}
                label="Encrypt"
                labelPlacement="end"
              />
            </Grid>
            <div>
              <Grid item xs={12}>
                <TextField fullWidth id="ca_certificate" name="ca_certificate" label="CA Certificate" />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="Trust Server Certificate"
                  labelPlacement="end"
                />
              </Grid>
            </div>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Authentication</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth id="username" name="username" label="Username" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth id="password" name="password" label="Password" />
            </Grid>
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

        <Card className={classes.card}>
          <h2 className={classes.h2}>
            <span className={classes.span}>Advanced</span>
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth id="name" name="name" label="Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="description" name="description" label="Description" />
            </Grid>
          </Grid>
        </Card>

      </Card>
    </Card>
  )
};


export default AddMsSQLDataSource;