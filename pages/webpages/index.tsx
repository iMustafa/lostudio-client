import { useState } from "react";
import { NextPage } from "next";
import { makeStyles } from "@material-ui/core/styles";
import Cookies from "next-cookies";
import DashboardActions from "../../actions/dashboard.actions";
import Dashboard from "../../types/dashboard.types";
import Grid from '@material-ui/core/Grid'
import ListDashboards from '../../components/dashboards/list-dashboards'

const WebPages: NextPage<{ WebPages }> = ({ WebPages }) => {
  const $WebPages: Array<Dashboard> = Object.values(WebPages);
  const [refresh, setRefresh] = useState(0);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="container" style={{ margin: "25px auto 25px auto" }}>
          <ListDashboards
            dashboards={$WebPages}
            title="My Webpages"
            type="personal"
          ></ListDashboards>
        </div>
      </Grid>
    </Grid>
  );
};

WebPages.getInitialProps = async (
  req
): Promise<{ WebPages: Array<Dashboard> }> => {
  try {
    const Authorization = Cookies(req).id;
    const WebPages = await DashboardActions.getWebpages({ Authorization });
    return { WebPages };
  } catch (e) {
    return { WebPages: [] };
  }
};

export default WebPages;
