import React from 'react';
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import StorageIcon from '@material-ui/icons/Storage'
import AssessmentIcon from '@material-ui/icons/Assessment'
import PagesIcon from '@material-ui/icons/Pages'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles({
  list: {
    position: 'absolute',
    width: '100%',
    height: 'calc(100vh - 82px)',
    borderRadius: 'none'
  }
});

export default function SideMenu() {
  const classes = useStyles();
  const routes = [
    { key: 'dashboards', text: 'Projects', route: '/dashboards', icon: () => (<DashboardIcon />) },
    { key: 'webpages', text: 'Web Pages', route: '/webpages', icon: () => (<PagesIcon />) },
    { key: 'datasources', text: 'Data Sources', route: '/datasources', icon: () => (<StorageIcon />) },
    { key: 'widgets', text: 'Widgets', route: '/widgets', icon: () => (<AssessmentIcon />) },
  ]

  return (
    <Card className={classes.list}>
      <List>
        {routes.map((item, index) => (
          <ListItem button key={item.key} onClick={() => { Router.push(item.route) }}>
            <ListItemIcon>{item.icon()}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Card>
  )
}