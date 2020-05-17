import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DashboardActions from '../../../actions/dashboard.actions'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

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

const GeneralSettings = ({ id, refresh, setRefresh }) => {
  const classes = useStyles()
  const [state, setState] = useState({ title: '', description: '' })
  const [isSub, setIsSub] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [dashboard, setDashboard] = useState({})

  useEffect(() => {
    const getInitialProps = async () => {
      try {
        const $dashboard = await DashboardActions.getDashboardById(id)
        setDashboard($dashboard)
        setState({ ...state, title: $dashboard.title, description: dashboard.description })
        setIsSub($dashboard.isSub ? true : false)
      } catch (e) {
        console.log(e)
      }
    }
    getInitialProps()
  }, [])

  return (
    <div>
      <h2 className={classes.h2}>
        <span className={classes.span}>Dashboard Details</span>
      </h2>
      <div>
        <TextField label="Title" value={state.title} placeholder="Dashboard Title" fullWidth />

        <TextField
          style={{ marginTop: 10 }}
          fullWidth
          value={state.description}
          label="Description"
          placeholder="Dashboard Description"
          multiline
          rows={2}
          rowsMax={4}
        />

        <Button fullWidth style={{ marginTop: 10 }}>Save Changes</Button>
      </div>

      <h2 className={classes.h2}>
        <span className={classes.span}>Delete Project</span>
      </h2>
      {
        showDelete ? (
          <Card style={{ marginTop: 10, padding: 15 }}>
            {
              !isSub ? (
                <div>
                  <Typography style={{ fontSize: 12 }}>
                    Confirm your delete action by typing in the dashboard title below.
                  </Typography>
                  <Typography style={{ fontSize: 8, color: '#c0392b' }}>
                    *Deleting this project will result in deleting all of its included pages
                  </Typography>
                </div>
              ) : (
                  <Typography>
                    Confirm your delete action by typing in the dashboard title below.
                  </Typography>
                )
            }
            <TextField fullWidth label="Title" placeholder={dashboard.title} />
            <Grid container spacing={2} style={{ marginTop: 10 }}>
              <Grid item xs={6}>
                <Button fullWidth onClick={() => { setShowDelete(false) }}>Cancel</Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth style={{ backgroundColor: '#c0392b', color: '#FFF' }}>Confirm Delete</Button>
              </Grid>
            </Grid>
          </Card>
        ) : (
            <Button fullWidth onClick={() => { setShowDelete(true) }} style={{ marginTop: 10, backgroundColor: '#c0392b', color: "#FFF" }}>Delete Project</Button>
          )
      }

    </div>
  )
}

export default GeneralSettings