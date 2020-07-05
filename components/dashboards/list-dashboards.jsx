import { useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import DashbordItem from "./dashboard-item";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Typography from "@material-ui/core/Typography";
import AddDashboardCard from "./add-dashboard-card";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "25px",
  },
  cardBody: {
    padding: "10px",
  },
  cardTitle: {
    fontSize: "12px",
    backgroundColor: "#3F51B5",
    padding: "3px 3px 3px 6px",
    color: "#FFF",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  },
  emptyCardBody: {
    padding: 10,
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
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
    borderBottom: "1px solid #DEDEDE",
    marginTop: 10,
    marginBottom: 15,
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
}));

const ListDashboards = ({ dashboards, title, type, dashboardType, reloadChanges }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState(null);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.cardTitle}>{title}</div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          fullWidth
          placeholder="Search…"
          onChange={handleChange}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      {dashboards.length ? (
        <div className={classes.cardBody}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <AddDashboardCard type={dashboardType} reloadChanges={reloadChanges} />
            </Grid>
            {dashboards
              .filter((dashboard) => {
                const regex = new RegExp(searchValue, "g");
                return searchValue ? regex.test(dashboard.title) : true
              })
              .map((dashboard, index) => {
                const { title, description, id, permissions } = dashboard;
                const $type = dashboard.type;
                return (
                  <Grid item xs={3} key={index}>
                    <DashbordItem
                      type={$type}
                      title={title}
                      description={description}
                      id={id}
                      permissions={permissions}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      ) : (
        <div className={classes.emptyCardBody}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <DashboardIcon style={{ color: "#DDD", fontSize: 128 }} />
            <Typography style={{ color: "#DDD", fontSize: 32 }}>
              No dashboards found.
            </Typography>
          </div>
          <Typography style={{ color: "#DDD", fontSize: 18 }}>
            {type == "personal"
              ? "Create a new dashboard to be displayed here."
              : "When a corporation adds you to collaborate on their dashboards, they will appear here."}
          </Typography>
        </div>
      )}
    </Card>
  );
};

export default ListDashboards;
