import { useEffect, useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import NotificationsActions from '../../actions/notifications.actions'
import Typography from '@material-ui/core/Typography'
import DashboardIcon from '@material-ui/icons/Dashboard'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

const useStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  message: {
    alignSelf: 'flex-start',
    justifySelf: 'flex-start',
    fontSize: 14
  },
  date: {
    alignSelf: 'flex-start',
    fontSize: 12,
    color: "#555"
  }
}))

const NotificationItem = ({ notification }) => {
  const classes = useStyles()
  const [isSeen, setIsSeen] = useState(notification.seen)

  const decideNotificationIcon = () => {
    switch (notification.type) {
      case "Dashboard Collaboration":
        return (<DashboardIcon />)
    }
  }

  const markSeen = async () => {
    if (!notification.seen) {
      try {
        await NotificationsActions.markAsSeen({ id: notification.id })
        setIsSeen(true)
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <Card onClick={markSeen}>
      <Grid spacing={0} container>
        <Grid item xs={2} className={classes.gridItem}>
          {decideNotificationIcon()}
        </Grid>
        <Grid item xs={8} className={classes.gridItem}>
          <Typography className={classes.message}>{notification.message}</Typography>
          <Typography className={classes.date}>{moment(notification.createdAt).format('YYYY/MM/DD HH:mm')}</Typography>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <IconButton style={{ outline: 'none' }}>
            <RadioButtonUncheckedIcon fontSize="small" style={{ color: "#3F51B5" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  )
}

export default NotificationItem