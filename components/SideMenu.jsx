import { useEffect, useState, Fragment } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WebIcon from "@material-ui/icons/Web";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StorageIcon from "@material-ui/icons/Storage";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DashboardActions from "../actions/dashboard.actions";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import BookIcon from "@material-ui/icons/Book";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const SideMenu = () => {
  const classes = useStyles();
  const [dashboards, setDashboards] = useState([]);
  const [webPages, setWebPages] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [routes, setRoutes] = useState([
    {
      key: "dashboards",
      text: "Dashboards",
      route: "/dashboards",
      icon: () => <DashboardIcon />,
      list: dashboards,
      open: false,
    },
    {
      key: "webpages",
      text: "Web Pages",
      route: "/webpages",
      icon: () => <WebIcon />,
      list: webPages,
      open: false,
    },
    {
      key: "datasources",
      text: "Data Sources",
      route: "/datasources",
      icon: () => <StorageIcon />,
    },
  ]);

  useEffect(() => {
    const udpateView = async () => {
      try {
        const GetDashboards = await DashboardActions.getDashboards({});
        const GetWebPages = await DashboardActions.getWebpages({});
        const $routes = [...routes];
        $routes[0].list = GetDashboards || [];
        $routes[1].list = GetWebPages || [];
        setRoutes([...$routes]);
      } catch (e) {
        console.log(e);
      }
    };
    if (Cookie.get("id")) udpateView();
  }, [refresh]);

  const handleChange = (index) => {
    const $routes = [...routes];
    $routes[index].open = !$routes[index].open;
    setRoutes([...$routes]);
  };

  return (
    <div className={classes.list} role="presentation">
      <List>
        {routes.map((item, index) =>
          item.list ? (
            <Fragment>
              <ListItem
                key={item.key}
                button
                onClick={() => {
                  handleChange(index);
                }}
              >
                <ListItemIcon>{item.icon()}</ListItemIcon>
                <ListItemText
                  onClick={() => {
                    Router.push(item.route);
                  }}
                  primary={item.text}
                />
                {item.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={item.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.list.map((e, i) => {
                    return (
                      <ListItem
                        key={e.title + i}
                        button
                        onClick={() => {
                          Router.push(`${item.route}/${e.id}/edit`);
                        }}
                        className={classes.nested}
                      >
                        <ListItemIcon>
                          <BookIcon />
                        </ListItemIcon>
                        <ListItemText primary={e.title} />
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </Fragment>
          ) : (
            <ListItem
              button
              key={item.key}
              onClick={() => {
                Router.push(item.route);
              }}
            >
              <ListItemIcon>{item.icon()}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );
};

export default SideMenu;
