import { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsActions from "../actions/notifications.actions";
import NotificationsMenu from "./notifications/NotificationsMenu";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { deleteCookie } from "../actions/auth.actions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const router = useRouter();
  const [notificationsCount, setNotificationsCount] = useState(0);
  const [notificationsMenuState, setNotificationsMenuState] = React.useState(
    null
  );
  const openNotificationsMenu = (event) => {
    setNotificationsMenuState(event.currentTarget);
  };
  const closeNotificationsMenu = () => {
    setNotificationsMenuState(null);
  };
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookie.get("id"));

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const logout = () => {
    deleteCookie();
    handleMenuClose();
    location.reload();
  };

  useEffect(() => {
    const getNotificationsCount = async () => {
      try {
        const $notificationsCount = await NotificationsActions.getMyNotificationsCount(
          {}
        );
        setNotificationsCount($notificationsCount.count);
      } catch (e) {
        console.log(e);
      }
    };
    getNotificationsCount();
  }, []);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            LoStudio
          </Typography>
          {isAuthenticated && (
            <div className={classes.grow}>
              <Button
                style={{ color: "#FFF" }}
                onClick={() => {
                  router.push("/dashboards");
                }}
              >
                Dashboards
              </Button>
              <Button
                style={{ color: "#FFF" }}
                onClick={() => {
                  router.push("/webpages");
                }}
              >
                Web Pages
              </Button>
              <Button
                style={{ color: "#FFF" }}
                onClick={() => {
                  router.push("/datasources");
                }}
              >
                Data Sources
              </Button>
              <Button
                style={{ color: "#FFF" }}
                onClick={() => {
                  router.push("/widgets");
                }}
              >
                Widgets
              </Button>
            </div>
          )}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" onClick={openNotificationsMenu}>
              {notificationsCount ? (
                <Badge badgeContent={notificationsCount} color="secondary">
                  <NotificationsIcon />
                </Badge>
              ) : (
                <NotificationsIcon />
              )}
            </IconButton>
            <NotificationsMenu
              anchorEl={notificationsMenuState}
              keepMounted
              style={{ top: 50 }}
              open={Boolean(notificationsMenuState)}
              onClose={closeNotificationsMenu}
            />

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
