import { makeStyles } from '@material-ui/core/styles'
import DashboardActions from '../../../actions/dashboard.actions'
import Grid from '@material-ui/core/Grid'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  name: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  collaboratorActionButtons: {
    display: 'flex'
  }
}))

const CollaboratorCard = ({ collaborator }) => {
  const classes = useStyles()
  const { id, email, firstName, lastName, sent } = collaborator
  const { viewer, editor } = collaborator.permissions

  return (
    <Card style={{ marginBottom: 15 }}>
      <Grid spacing={2} container style={{ margin: 0, width: '100%' }}>
        <Grid item xs={7} className={classes.name}>
          <Typography>{email}</Typography>
          {
            sent ?
              (<Typography>{firstName} {lastName}</Typography>) :
              (<Typography style={{ fontSize: 11 }}>User is not registered yet. They'll recieve the collaboration invitation once they register for an account</Typography>)
          }
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            style={{ margin: 0 }}
            control={<Checkbox name="viewer" checked={editor} onChange={() => { console.log() }} />}
            label="Editor"
          />
          <FormControlLabel
            style={{ margin: 0 }}
            control={<Checkbox name="editor" checked={viewer} onChange={() => { console.log() }} />}
            label="Viewer"
          />
        </Grid>
        <Grid item xs={2} className={classes.collaboratorActionButtons}>
          <IconButton aria-label="delete" style={{ outline: 'none' }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CollaboratorCard