import { NextPage } from 'next'
import { makeStyles } from '@material-ui/core/styles'
import Cookies from 'next-cookies'
import DashboardActions from '../../actions/dashboard.actions'
import Dashboard from '../../types/dashboard.types'
import CreateDashboard from '../../components/dashboards/create-dashboard'
import ListDashboards from '../../components/dashboards/list-dashboards'
import Grid from '@material-ui/core/Grid'
import SideMenu from '../../components/SideMenu'

const Dashboards: NextPage<{ Collaborations, Dashboards }> = ({ Collaborations, Dashboards }) => {
  const dashboards: Array<Dashboard> = Object.values(Dashboards)
  const collaborations: Array<Dashboard> = Object.values(Collaborations)

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} style={{ position: 'relative' }}>
        <SideMenu />
      </Grid>
      <Grid item xs={10}>
        <div className="container" style={{ margin: "25px auto 25px auto" }}>
          <CreateDashboard />
          <ListDashboards dashboards={dashboards} title="My Dashboards" type="personal"></ListDashboards>
          <ListDashboards dashboards={collaborations} title="My Collaborations" type="collaborations"></ListDashboards>
        </div>
      </Grid>
    </Grid>
  )
}

Dashboards.getInitialProps = async (req): Promise<{ Collaborations: Array<Dashboard>, Dashboards: Array<Dashboard> }> => {
  try {
    const Authorization = Cookies(req).id
    const Dashboards = await DashboardActions.getDashboards({ Authorization })
    const Collaborations = await DashboardActions.getCollaboratorations({ Authorization })
    return { Collaborations, Dashboards }
  } catch (e) {
    return { Collaborations: [], Dashboards: [] }
  }
}

export default Dashboards