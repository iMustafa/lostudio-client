import { NextPage } from 'next'
import { makeStyles } from '@material-ui/core/styles'
import Cookies from 'next-cookies'
import DashboardActions from '../../actions/dashboard.actions'
import Dashboard from '../../types/dashboard.types'

const Dashboards: NextPage<Array<Dashboard>> = (Dashboard: Array<Dashboard>) => {
  console.log(Dashboard)
  return (
    <div></div>
  )
}

Dashboards.getInitialProps = async (req): Promise<Array<Dashboard>> => {
  try {
    const Authorization = Cookies(req).id
    const Dashboards = await DashboardActions.getDashboards({ Authorization })
    return Dashboards
  } catch (e) {
    return []
  }
}

export default Dashboards