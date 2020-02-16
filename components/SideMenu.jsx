import React from 'react';
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideMenu() {
  const classes = useStyles();
  const routes = [
    { key: 'dashboards', text: 'Dashboards', route: '/dashboards', icon: () => (<DashboardIcon />) },
    { key: 'datasources', text: 'Datasources', route: '/datasources', icon: () => (<StorageIcon />) },
    { key: 'widgets', text: 'Widgets', route: '/widgets', icon: () => (<AssessmentIcon />) },
  ]

  return (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        {routes.map((item, index) => (
          <ListItem button key={item.key} onClick={() => { Router.push(item.route) }}>
            <ListItemIcon>{item.icon()}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}