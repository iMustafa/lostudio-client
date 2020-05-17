import { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import DashboardActions from '../../../actions/dashboard.actions'

const SubDashboardSettings = ({ id, refresh, setRefresh }) => {
  const [subDashboards, setSubDashboards] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [update, setUpdate] = useState(0)
  const [isShowingAddFields, setIsShowingAddFields] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [state, setState] = useState({ title: '', description: '', isSub: true })

  useEffect(() => {
    const getSubDashboards = async () => {
      try {
        const $subDashBoards = await DashboardActions.getSubDashboards({ id })
        setSubDashboards($subDashBoards)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    getSubDashboards()
  }, [update])

  const addNewDashboard = async () => {
    try {
      setIsAdding(true)
      const subDashboard = await DashboardActions.createDashboard({ dashboard: state })
      const linkDashboard = await DashboardActions.linkSubDashboard({ subDashboardId: subDashboard.id, id })
      setUpdate(update + 1)
      setIsShowingAddFields(false)
      setIsAdding(false)
      setRefresh(refresh + 1)
    } catch (e) {
      console.log(e)
    }
  }

  const deleteSubDashboard = async (subDashboardId) => {
    try {
      const subDashboard = await DashboardActions.unLinkSubDashboard({ id, subDashboardId })
      setUpdate(update + 1)
      setRefresh(refresh + 1)
    } catch (e) {
      console.log(e)
    }
  }


  const renderSubDashboardCard = subDashboard => (
    <Card variant="outlined" key={subDashboard.id} style={{ marginTop: 15 }}>
      <CardHeader
        title={subDashboard.subDashboard.title}
        subheader={subDashboard.subDashboard.createdAt}
      />
      <CardContent>
        <Typography>{subDashboard.subDashboard.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => { deleteSubDashboard(subDashboard.id) }}>Delete</Button>
      </CardActions>
    </Card>
  )

  return (
    <div>
      {
        isShowingAddFields ? (
          <Card variant="outlined">

            <CardContent>
              <TextField label="Title" fullWidth
                onChange={event => { setState({ ...state, title: event.target.value }) }}
              />

              <TextField
                style={{ marginTop: 10 }}
                fullWidth
                label="Description"
                multiline
                rows={2}
                rowsMax={4}
                onChange={event => { setState({ ...state, description: event.target.value }) }}
              />
            </CardContent>

            {
              isAdding ? (
                <CardActions>
                  <CircularProgress />
                </CardActions>
              ) : (
                  <CardActions>
                    <Button onClick={addNewDashboard}>Add</Button>
                    <Button onClick={() => { setIsShowingAddFields(false) }}>Cancel</Button>
                  </CardActions>
                )
            }

          </Card >
        ) : (<Button fullWidth onClick={() => { setIsShowingAddFields(true) }}>Add New Page</Button>)
      }
      {
        isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
            <CircularProgress />
          </div>) : subDashboards.map(subDashboard => (renderSubDashboardCard(subDashboard)))
      }
    </div >
  )
}

export default SubDashboardSettings