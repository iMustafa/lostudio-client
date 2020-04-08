import { useEffect, useState } from 'react'
import NotificationsActions from '../../actions/notifications.actions'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import NotificationItem from './NotificationsItem'

const NotificationMenu = ({ anchorEl, style, open, onClose }) => {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    const $getNotifications = async () => {
      try {
        const $notifications = await NotificationsActions.getMyNotifications({})
        setNotifications([...$notifications])
      } catch (e) {
        console.log(e)
      }
    }
    $getNotifications()
  }, [])

  const renderNotificationItem = (notification) => (
    <MenuItem key={notification.id} style={{ padding: 0, marginBottom: 10 }}>
      <NotificationItem notification={notification} />
    </MenuItem>
  )

  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      style={style}
      open={open}
      onClose={onClose}
    >
      {notifications.map(notification => renderNotificationItem(notification))}
    </Menu>
  )
}

export default NotificationMenu