import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DashboardActions from '../../../actions/dashboard.actions'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Swal from 'sweetalert2'

const useStyles = makeStyles(() => ({

}))

const AddCollaboratorCard = ({ id, cancel }) => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [permissions, setPermissions] = useState({ viewer: false, editor: false })

  const handleEmailChange = e => { setEmail(e.target.value) }

  const handlePermissionsChange = (event) => {
    setPermissions({
      ...permissions,
      [event.target.name]: event.target.checked
    })
  }

  const addCollaborator = async () => {
    const { editor, viewer } = permissions
    try {
      const collaboration = await DashboardActions.addCollaborator({ email, editor, viewer, id })
      if (collaboration.status == 500) {
        Swal.fire('Error', collaboration.data.error.message, 'error')
      } else {
        if (collaboration.sent)
          Swal.fire('Success', `${email} is now a collaborator on this board. `, 'success')
        else
          Swal.fire('Success', `${email} is not a member yet, but they'll be assigned as a collaborator as soon as they sign up. `, 'success')

        setEmail('')
        setPermissions({ editor: false, viewer: false })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Card style={{ marginBottom: 10 }}>
      <Grid spacing={2} container style={{ margin: 0, width: '100%' }}>
        <Grid item xs={6} className={classes.name}>
          <TextField type="email" onChange={handleEmailChange} label="Email" placeholder="example@domain.com" fullWidth />
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', alignItems: 'flex-end' }}>
          <FormControlLabel
            style={{ margin: 0 }}
            control={<Checkbox checked={permissions.viewer} onChange={handlePermissionsChange} name="viewer" />}
            label="Editor"
          />
          <FormControlLabel
            style={{ margin: 0 }}
            control={<Checkbox checked={permissions.editor} onChange={handlePermissionsChange} name="editor" />}
            label="Viewer"
          />
        </Grid>
      </Grid>
      <Grid spacing={2} container style={{ margin: 0, width: '100%', marginTop: 10 }}>
        <Grid item xs={6}>
          <Button fullWidth onClick={cancel}>Cancel</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth onClick={addCollaborator}>Add</Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default AddCollaboratorCard