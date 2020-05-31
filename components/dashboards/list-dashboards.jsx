import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import DashbordItem from './dashboard-item'
import DashboardIcon from '@material-ui/icons/Dashboard'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '25px'
  },
  cardBody: {
    padding: '10px'
  },
  cardTitle: {
    fontSize: '12px',
    backgroundColor: '#3F51B5',
    padding: '3px 3px 3px 6px',
    color: '#FFF',
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
  },
  emptyCardBody: {
    padding: 10,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
}))

const ListDashboards = ({ dashboards, title, type }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.cardTitle}>{title}</div>
      {
        dashboards.length ? (
          <div className={classes.cardBody}>
            <Grid container spacing={2}>
              
              {dashboards.map((dashboard, index) => {
                const { title, description, id, permissions } = dashboard
                return (
                  <Grid item xs={3} key={index}>
                    <DashbordItem title={title} description={description} id={id} permissions={permissions} />
                  </Grid>
                )
              })}
            </Grid>
          </div>
        ) : (
            <div className={classes.emptyCardBody}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
              }}>
                <DashboardIcon style={{ color: "#DDD", fontSize: 128 }} />
                <Typography style={{ color: "#DDD", fontSize: 32 }}>No dashboards found.</Typography>
              </div>
              <Typography style={{ color: "#DDD", fontSize: 18 }}>
                {type == "personal" ? "Create a new dashboard to be displayed here." : "When a corporation adds you to collaborate on their dashboards, they will appear here."}
              </Typography>
            </div>
          )
      }
    </Card >
  )
}

export default ListDashboards