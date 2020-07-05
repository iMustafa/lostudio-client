import { useState } from "react";
import { NextPage } from "next";
import Cookies from "next-cookies";
import DashboardActions from "../../actions/dashboard.actions";
import Dashboard from "../../types/dashboard.types";
import ListDashboards from "../../components/dashboards/list-dashboards";
import Grid from "@material-ui/core/Grid";
import SideMenu from "../../components/SideMenu";

const Dashboards: NextPage<{ Collaborations; Dashboards }> = ({
  Collaborations,
  Dashboards,
}) => {
  const [dashboards, setDashboards] = useState(Object.values(Dashboards));
  const collaborations: Array<Dashboard> = Object.values(Collaborations);
  const [refresh, setRefresh] = useState(0);

  const reloadChanges = async () => {
    try {
      const getDashboards = await DashboardActions.getDashboards({});
      setDashboards(Object.values(getDashboards));
      console.log(">> DASHBOARD RELOAD");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="container" style={{ margin: "25px auto 25px auto" }}>
          <ListDashboards
            dashboardType="dashboard"
            dashboards={dashboards}
            title="My Dashboards"
            type="personal"
            reloadChanges={reloadChanges}
          ></ListDashboards>
          <ListDashboards
            dashboardType="dashboard"
            dashboards={collaborations}
            title="My Collaborations"
            type="collaborations"
            reloadChanges={() => {}}
          ></ListDashboards>
        </div>
      </Grid>
    </Grid>
  );
};

Dashboards.getInitialProps = async (
  req
): Promise<{
  Collaborations: Array<Dashboard>;
  Dashboards: Array<Dashboard>;
}> => {
  try {
    const Authorization = Cookies(req).id;
    const Dashboards = await DashboardActions.getDashboards({ Authorization });
    const Collaborations = await DashboardActions.getCollaboratorations({
      Authorization,
    });
    return { Collaborations, Dashboards };
  } catch (e) {
    return { Collaborations: [], Dashboards: [] };
  }
};

export default Dashboards;
