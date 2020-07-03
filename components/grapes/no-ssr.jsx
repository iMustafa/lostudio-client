import React from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import config from "next/config";

import grapesjs from "grapesjs";
import gsWebpage from "grapesjs-preset-webpage";
import gsCustome from "grapesjs-custom-code";
import gsTap from "grapesjs-tabs";

import { TablePluginRef } from "./table-widgets/html-table-widget/consts";
import addTablePlugin from "./table-widgets/html-table-widget";

import { ChartPluginRef } from "./chart-widgets/line-chart/consts";
import addChartPlugin from "./chart-widgets/line-chart";

const { API_URL } = config().publicRuntimeConfig;

const Page = () => {
  const [pluginLoaded, setPluginLoaded] = React.useState(false);
  const [editor, setEditor] = React.useState(null);
  const router = useRouter();
  const [id, setId] = React.useState(router.query.id);

  React.useEffect(() => {
    if (!pluginLoaded) {
      addTablePlugin(id);
      addChartPlugin();
      setPluginLoaded(true);
    } else if (!editor) {
      const e = grapesjs.init({
        color: "white",
        height: "100vh",
        width: "auto",
        container: "#g",
        fromElement: true,
        plugins: [gsWebpage, gsCustome, gsTap, TablePluginRef, ChartPluginRef],
        storageManager: {
          type: "remote",
          urlStore: `${API_URL}/Dashboards/${id}/grapes?access_token=${Cookie.get(
            "id"
          )}`,
          urlLoad: `${API_URL}/Dashboards/${id}/grapes?access_token=${Cookie.get(
            "id"
          )}`,
          autosave: false,
          autoload: true,
          contentTypeJson: true,
          storeComponents: true,
          allowScripts: 1,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
        },
      });
    }
  });

  return <div id="g" className="h" />;
};

export default Page;
