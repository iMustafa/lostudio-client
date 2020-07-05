exports.ids = [0];
exports.modules = {

/***/ "./actions/dashboard.actions.ts":
/*!**************************************!*\
  !*** ./actions/dashboard.actions.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardActions; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



const {
  API_URL
} = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig;
class DashboardActions {
  static async createDashboard({
    Authorization,
    dashboard
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/Dashboards`, dashboard, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getDashboards({
    Authorization,
    query
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      },
      params: {
        filter: {
          where: {
            or: [{
              isSub: false
            }, {
              type: "dashboard"
            }]
          }
        }
      }
    }).then(res => res.data).catch(err => err);
  }

  static async getWebpages({
    Authorization
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      },
      params: {
        filter: {
          where: {
            type: "webpage"
          }
        }
      }
    }).then(res => res.data).catch(err => err);
  }

  static async linkSubDashboard({
    id,
    subDashboardId
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/Dashboards/${id}/subDashboards`, {
      dashboardId: id,
      subDashboardId
    }, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err);
  }

  static async unLinkSubDashboard({
    id,
    subDashboardId
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${API_URL}/Dashboards/${id}/subDashboards/${subDashboardId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err);
  }

  static async getSubDashboards({
    Authorization,
    id
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/${id}/subDashboards`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      },
      params: {
        filter: {
          include: "subDashboard"
        }
      }
    }).then(res => res.data).catch(err => err);
  }

  static async getDashboardById(id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/${id}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async updateDashboard(id, data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${API_URL}/Dashboards/${id}`, data).then(res => res.data).catch(err => err.response);
  }

  static async deleteDashboard(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("", {}).then(res => res.data).catch(err => err.response);
  }

  static async getWidgetSettings({
    Authorization,
    id
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/${id}/widgetSettings`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getCollaborators({
    Authorization,
    id
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/${id}/collaborators`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getCollaboratorations({
    Authorization
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/collaborations`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async addCollaborator({
    Authorization,
    email,
    id,
    editor,
    viewer
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/Dashboards/${id}/dashboardRoleMappings`, {
      email,
      editor,
      viewer
    }, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async addWidgetToDashboard(id, fk) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${API_URL}/Dashboards/${id}/widgetSettings/rel/${fk}`, {
      dashboardId: id,
      widgetSettingsId: fk
    }, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async createWidgetInDashboard(id, widgetData) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/Dashboards/${id}/widgetSettings`, widgetData, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("id")
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async removeWidgetFromDashboard(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("", {}).then(res => res.data).catch(err => err.response);
  }

}

/***/ }),

/***/ "./actions/datasource.actions.ts":
/*!***************************************!*\
  !*** ./actions/datasource.actions.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatasourceActions; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  API_URL
} = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig;
class DatasourceActions {
  static async createDatasource(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/DataSources`, data, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err);
  }

  static async updateDatasource(id, data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${API_URL}/DataSources/${id}`, data, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getDatasources({
    Authorization,
    query
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/DataSources`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err);
  }

  static async getUserDatasources(id, query) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/users/${id}/dataSrouces`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      },
      params: _objectSpread({}, query)
    }).then(res => res.data).catch(err => err.response);
  }

  static async getDatasourceById(id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/DataSources/${id}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async removeDatasource(id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${API_URL}/DataSources/${id}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getDocList(id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/DataSources/${id}/doc-list`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getFieldList(id, docId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/DataSources/${id}/field-list`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      },
      params: {
        docId
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async queryDatasource(query) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('', {}).then(res => res.data).catch(err => err.response);
  }

}

/***/ }),

/***/ "./actions/widgetSettings.actions.ts":
/*!*******************************************!*\
  !*** ./actions/widgetSettings.actions.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WidgetSettingsActions; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



const {
  API_URL
} = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig;
class WidgetSettingsActions {
  static async addWidgetSettingsDocument(widgetSettingsId, data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/WidgetSettings/${widgetSettingsId}/add-document`, data, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async editWidgetSettingsDocument(widgetSettingsId, data, keyId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/WidgetSettings/${widgetSettingsId}/edit-document`, data, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      },
      params: {
        keyId
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async deleteWidgetSettingsDocument(widgetSettingsId, keyId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${API_URL}/WidgetSettings/${widgetSettingsId}/delete-document`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      },
      params: {
        keyId
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async createWidgetSettings(widgetSettings) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/WidgetSettings`, widgetSettings, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getSubWidgets(widgetSettingsId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/WidgetSettings/${widgetSettingsId}/subWidgetSettings`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      },
      params: {
        filter: {
          include: 'subWidgetSettings'
        }
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async exportWidgetData(widgetSettingsId, format, method, selectedFields) {
    if (format == 'email') {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/WidgetSettings/${widgetSettingsId}/export-data`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
        },
        params: {
          format,
          selectedFields,
          method
        }
      }).then(res => res.data).catch(err => err.response);
    } else {
      window.open(`${API_URL}/WidgetSettings/${widgetSettingsId}/export-data?format=${format}&method=${method}&selectedFields=${selectedFields}`);
    }
  }

  static async createSubWidget(widgetSettingsId, subWidgetSettingsId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/WidgetSettings/${widgetSettingsId}/subWidgetSettings`, {
      subWidgetSettingsId
    }, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getWidgetSettingsMeasureConditions(widgetSettingsId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/WidgetSettings/${widgetSettingsId}/measureConditions`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async createWidgetSettingsMeasureConditions(widgetSettingsId, measureCondition) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/WidgetSettings/${widgetSettingsId}/measureConditions`, measureCondition, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async deleteWidgetSettingsMeasureConditions(widgetSettingsId, measureConditionId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${API_URL}/WidgetSettings/${widgetSettingsId}/measureConditions/${measureConditionId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async deleteSubWidget(widgetSettingsId, subWidgetSettingsId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${API_URL}/WidgetSettings/${widgetSettingsId}/subWidgetSettings/${subWidgetSettingsId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getFormGroupWidgets() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/WidgetSettings`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      },
      params: {
        filter: {
          where: {
            type: "Form Group"
          }
        }
      }
    }).then(res => res.data).catch(err => err.response);
  } // TODO


  static async getWidgetSettings() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('', {}).then(res => res.data).catch(err => err.response);
  } // TODO


  static async getWidgetSettingsById(id, Authorization) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/WidgetSettings/${id}`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  } // TODO


  static async updateWidgetSettings(id, widgetSettings) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${API_URL}/WidgetSettings/${id}`, widgetSettings, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  } // TODO


  static async deleteWidgetSettings(id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('', {}).then(res => res.data).catch(err => err.response);
  }

  static async executeWidgetQuery(id, Authorization) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/WidgetSettings/${id}/execute-query`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

}

/***/ }),

/***/ "./components/grapes/chart-widgets/line-chart/Chart.js":
/*!*************************************************************!*\
  !*** ./components/grapes/chart-widgets/line-chart/Chart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! victory */ "victory");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(victory__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/grapes/chart-widgets/line-chart/Chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Chart = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryChart"], {
    theme: victory__WEBPACK_IMPORTED_MODULE_1__["VictoryTheme"].material,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryLine"], {
    interpolation: "natural",
    style: {
      data: {
        stroke: "#c43a31"
      },
      parent: {
        border: "1px solid #ccc"
      }
    },
    data: [{
      x: 1,
      y: 2
    }, {
      x: 2,
      y: 3
    }, {
      x: 3,
      y: 5
    }, {
      x: 4,
      y: 4
    }, {
      x: 5,
      y: 7
    }],
    labels: ({
      datum
    }) => `x: ${datum.x} | y: ${datum.y}`,
    animate: {
      duration: 2000,
      onLoad: {
        duration: 1000
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./components/grapes/chart-widgets/line-chart/ParserHtmlCaseSensitive.js":
/*!*******************************************************************************!*\
  !*** ./components/grapes/chart-widgets/line-chart/ParserHtmlCaseSensitive.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-html-parser */ "node-html-parser");
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xregexp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xregexp */ "xregexp");
/* harmony import */ var xregexp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xregexp__WEBPACK_IMPORTED_MODULE_2__);



window.nodeHtmlParser = node_html_parser__WEBPACK_IMPORTED_MODULE_1__["parse"];
/**
 * Parses an HTML string into its HTML and CSS component representation keeping case of tags and attributes. This
 * is necessary in case you want React compatible JSX tags in the template, in which case the react components must start
 * wih uppercase and also the camel casing of attributes is importane (ie. className vs classname)
 *
 * This function is based on src/parser/model/ParserHtml.js. For parsing we are using node-html-parser instead of
 * the browser's DOM to keep the case of tags and attributes. The code is mostly the same  as in ParserHtml.js
 * by maing the objects created by  node-html-parser compatible with the DOM representation.
 *
 * @param config usual grapesjs config
 * @returns parser function
 */

/* harmony default export */ __webpack_exports__["default"] = (config => {
  var TEXT_NODE = 'span';
  var c = config;
  var modelAttrStart = 'data-gjs-';
  return {
    compTypes: '',
    modelAttrStart,

    /**
     * Extract component props from an attribute object
     * @param {Object} attr
     * @returns {Object} An object containing props and attributes without them
     */
    splitPropsFromAttr(attr = {}) {
      const props = {};
      const attrs = {};
      Object(underscore__WEBPACK_IMPORTED_MODULE_0__["each"])(attr, (value, key) => {
        if (key.indexOf(this.modelAttrStart) === 0) {
          const modelAttr = key.replace(modelAttrStart, '');
          const valueLen = value.length;
          const valStr = value && Object(underscore__WEBPACK_IMPORTED_MODULE_0__["isString"])(value);
          const firstChar = valStr && value.substr(0, 1);
          const lastChar = valStr && value.substr(valueLen - 1);
          value = value === 'true' ? true : value;
          value = value === 'false' ? false : value; // Try to parse JSON where it's possible
          // I can get false positive here (eg. a selector '[data-attr]')
          // so put it under try/catch and let fail silently

          try {
            value = firstChar == '{' && lastChar == '}' || firstChar == '[' && lastChar == ']' ? JSON.parse(value) : value;
          } catch (e) {}

          props[modelAttr] = value;
        } else {
          attrs[key] = value;
        }
      });
      return {
        props,
        attrs
      };
    },

    /**
     * Given a string with html (jsx). Attributes having JSX expressions will be quoted to look like
     * actual HTML attributes
     * @param {*} html
     * @return html with quoted JSX attributes
     *
     * https://stackoverflow.com/questions/546433/regular-expression-to-match-balanced-parentheses
     */
    quoteJsxExpresionsInAttributes(html) {
      let found = xregexp__WEBPACK_IMPORTED_MODULE_2___default.a.matchRecursive(html, "{", "}", "g");

      for (let i = 0; i < found.length; i++) {
        // (value) => \`\${(value) => < 10 ? \`0\${value}\` : value)}\`
        // --> {(value) => \`\${(value) => < 10 ? \`0\${value}\` : value)}\`}
        let pattern = "{" + found[i] + "}";
        let lastStartPos = 0; // Find pattern until we reach and of html

        while (true) {
          let needsQuote = false; // get next match position

          let matchPos = html.indexOf(pattern, lastStartPos);

          if (matchPos === -1) {
            break;
          } // We will look back 1 and 2 characters


          let oneCharBeforePos = matchPos - 1;
          let twoCharBeforePos = matchPos - 2;

          if (twoCharBeforePos > 0 && oneCharBeforePos > 0) {
            // Need to quote if have sg like this:
            //   formatValue={(value) => \`\${(value) => < 10 ? \`0\${value}\` : value)}\`}
            // (ie: if patterns comes atfre and equals sime, but not =")
            // But no need to quote if:
            //    formatValue="{(value) => \`\${(value) => < 10 ? \`0\${value}\` : value)}\`}"
            //    <Timer.Days/>{this.model.attributes.displayLabels ? " "+this.model.attributes.labels.labelDays+" " : ', '}
            needsQuote = html.substring(twoCharBeforePos, twoCharBeforePos + 2) !== '="' && html.substring(oneCharBeforePos, oneCharBeforePos + 1) === "=";
          } // If need to quote: replace patterns with quoted version also escaping some HTML entities


          if (needsQuote) {
            let replacement = '"{' + found[i].replace("<", "&lt;").replace(">", "&gt;").replace("&", "&amp;") + '}"';
            html = html.replace(pattern, replacement);
            lastStartPos = matchPos + replacement.length;
          } else {
            lastStartPos = matchPos + pattern.length;
          } // No lastStartPos placed after the processed string

        }
      }

      return html;
    },

    /**
     * Unquote attributes containg JSX previously quoted using quoteJsxExpresionsInAttributes
     * @param html
     */
    unquoteJsxExpresionsInAttributes(html) {
      let found = html.match(/=["']{.*}["']/g);

      if (!found) {
        return html;
      }

      for (let i = 0; i < found.length; i++) {
        let pattern = found[i];
        let replacement = pattern.startsWith('="{') ? pattern.replace('"{', "{").replace('}"', "}") : pattern.replace("{'", "{").replace("}'", "}");
        replacement = replacement.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&");
        html = html.replace(pattern, replacement);
      }

      return html;
    },

    /**
     * Parse style string to object
     * @param {string} str
     * @return {Object}
     * @example
     * var stl = ParserHtml.parseStyle('color:black; width:100px; test:value;');
     * console.log(stl);
     * // {color: 'black', width: '100px', test: 'value'}
     */
    parseStyle(str) {
      var result = {};
      var decls = str.split(';');

      for (var i = 0, len = decls.length; i < len; i++) {
        var decl = decls[i].trim();
        if (!decl) continue;
        var prop = decl.split(':');
        result[prop[0].trim()] = prop.slice(1).join(':').trim();
      }

      return result;
    },

    /**
     * Parse class string to array
     * @param {string} str
     * @return {Array<string>}
     * @example
     * var res = ParserHtml.parseClass('test1 test2 test3');
     * console.log(res);
     * // ['test1', 'test2', 'test3']
     */
    parseClass(str) {
      const result = [];
      const cls = str.split(' ');

      for (let i = 0, len = cls.length; i < len; i++) {
        const cl = cls[i].trim();
        if (!cl) continue;
        result.push(cl);
      }

      return result;
    },

    toAttrArray(obj) {
      var attrArr = [];
      Object.keys(obj).map(key => {
        attrArr.push({
          'nodeName': key,
          'nodeValue': obj[key]
        });
      });
      return attrArr;
    },

    /**
     * Get data from the node element
     * @param  {HTMLElement} el DOM element to traverse
     * @return {Array<Object>}
     */
    parseNode(el) {
      const result = [];
      const nodes = el.childNodes;

      for (var i = 0, len = nodes.length; i < len; i++) {
        const node = nodes[i]; // DOM copmatibility

        node.nodeValue = node.rawText;
        node.content = node.rawText; // Make attrs compatible with DOM representation

        let attrs = [];
        attrs = (typeof node.attributes == 'object' ? this.toAttrArray(node.attributes) : node.attributes) || [];
        const attrsLen = attrs.length;
        const nodePrev = result[result.length - 1];
        const nodeChild = node.childNodes.length;
        const ct = this.compTypes;
        let model = {};

        if (ct) {
          let obj = '';
          let type = node.getAttribute && node.getAttribute(`${modelAttrStart}type`);

          if (!type) {
            type = node.attributes && node.attributes[`${modelAttrStart}type`];
          }

          if (type) {
            model = {
              type
            };
          } else {
            for (let it = 0; it < ct.length; it++) {
              const compType = ct[it];
              obj = compType.model.isComponent(node);

              if (obj) {
                if (typeof obj !== 'object') {
                  obj = {
                    type: compType.id
                  };
                }

                break;
              }
            }

            model = obj;
          }
        }

        model.tagName = node.tagName;

        if (attrsLen) {
          model.attributes = {};
        }

        for (let j = 0; j < attrsLen; j++) {
          const nodeName = attrs[j].nodeName;
          let nodeValue = attrs[j].nodeValue; // if (nodeName == "formatValue") {
          //     debugger;
          // }
          // Isolate attributes

          if (nodeName == 'style') {
            model.style = this.parseStyle(nodeValue);
          } else if (nodeName == 'class') {
            model.classes = this.parseClass(nodeValue);
          } else if (nodeName == 'contenteditable') {
            continue;
          } else if (nodeName.indexOf(modelAttrStart) === 0) {
            const modelAttr = nodeName.replace(modelAttrStart, '');
            const valueLen = nodeValue.length;
            const firstChar = nodeValue && nodeValue.substr(0, 1);
            const lastChar = nodeValue && nodeValue.substr(valueLen - 1);
            nodeValue = nodeValue === 'true' ? true : nodeValue;
            nodeValue = nodeValue === 'false' ? false : nodeValue;

            try {
              nodeValue = firstChar == '{' && lastChar == '}' || firstChar == '[' && lastChar == ']' ? JSON.parse(nodeValue) : nodeValue;
            } catch (e) {}

            model[modelAttr] = nodeValue;
          } else {
            model.attributes[nodeName] = nodeValue;
          }
        }

        if (nodeChild && !model.components) {
          const firstChild = node.childNodes[0];
          firstChild.nodeValue = firstChild.rawText;

          if (nodeChild === 1 && firstChild.nodeType === 3) {
            !model.type && (model.type = 'text');
            model.content = firstChild.nodeValue;
          } else {
            model.components = this.parseNode(node);
          }
        }

        if (model.type == 'textnode') {
          model.content = node.nodeValue;

          if (nodePrev && nodePrev.type == 'textnode') {
            nodePrev.content += model.content;
            continue;
          }

          if (!config.keepEmptyTextNodes) {
            const content = node.nodeValue;

            if (content != ' ' && !content.trim()) {
              continue;
            }
          }
        }

        const comps = model.components;

        if (!model.type && comps) {
          let allTxt = 1;
          let foundTextNode = 0;

          for (let ci = 0; ci < comps.length; ci++) {
            const comp = comps[ci];
            const cType = comp.type;

            if (['text', 'textnode'].indexOf(cType) < 0 && c.textTags.indexOf(comp.tagName) < 0) {
              allTxt = 0;
              break;
            }

            if (cType == 'textnode') {
              foundTextNode = 1;
            }
          }

          if (allTxt && foundTextNode) {
            model.type = 'text';
          }
        }

        if (!model.tagName && model.type != 'textnode') {
          continue;
        }

        result.push(model);
      }

      return result;
    },

    /**
     * Parse HTML string to a desired model object
     * @param  {string} str HTML string
     * @param  {ParserCss} parserCss In case there is style tags inside HTML
     * @return {Object}
     *
     */
    parse(str, parserCss) {
      console.log("html", str, parserCss);
      var config = c.em && c.em.get('Config') || {};
      var res = {
        html: '',
        css: ''
      };
      var quoted = this.quoteJsxExpresionsInAttributes(str);
      let wrappedInDiv = false;

      if (!quoted.startsWith('<')) {
        quoted = '<div>' + quoted + '</div>';
        wrappedInDiv = true;
      }

      const dom = Object(node_html_parser__WEBPACK_IMPORTED_MODULE_1__["parse"])(quoted);
      var result = this.parseNode(dom);

      if (result.length == 1) {
        result = result[0];
      }

      if (wrappedInDiv) {
        if (result.components) {
          result = result.components;
        } else {
          delete result.tagName;
          result.type = "textnode";
        }
      }

      res.html = result;

      if (parserCss) {
        var el = document.createElement('div');
        el.innerHTML = str;
        var styleStr = '';
        var styles = el.querySelectorAll('style');
        var j = styles.length;

        while (j--) {
          styleStr = styles[j].innerHTML + styleStr;
          styles[j].parentNode.removeChild(styles[j]);
        }

        if (styleStr) res.css = parserCss.parse(styleStr);
      }

      return res;
    }

  };
});

/***/ }),

/***/ "./components/grapes/chart-widgets/line-chart/actions.js":
/*!***************************************************************!*\
  !*** ./components/grapes/chart-widgets/line-chart/actions.js ***!
  \***************************************************************/
/*! exports provided: addWidget, updatedash, updateWidget, getWidgets, getWidgetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWidget", function() { return addWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatedash", function() { return updatedash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWidget", function() { return updateWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidgets", function() { return getWidgets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidgetData", function() { return getWidgetData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers = {
  Authorization: 'B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ'
};
const APP_URL = 'http://173.249.14.149:3001/api'; //http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb?access_Token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ
//http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/widgetSettings?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ

const addWidget = async (widgetData, dashboardId = '5ef370de14213070188a41eb') => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${APP_URL}/Dashboards/${dashboardId}/widgetSettings`, widgetData);
};
const updatedash = async (dashboardId, widgetData) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${APP_URL}/Dashboards/${dashboardId}`, {
    grapes: widgetData
  });
}; //http://173.249.14.149:3001/api/widgetsettings/5ef7454a14213070188a46f9?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ

const updateWidget = async (widgetId, widgetData) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${APP_URL}/WidgetSettings/${widgetId}`, widgetData);
};
const getWidgets = async (dashboardId = '5ef370de14213070188a41eb') => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${APP_URL}/Dashboards/${dashboardId}/widgetSettings`);
};
const getWidgetData = async widgetId => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${APP_URL}/WidgetSettings/${widgetId}/execute-query`);
};

/***/ }),

/***/ "./components/grapes/chart-widgets/line-chart/blocks.js":
/*!**************************************************************!*\
  !*** ./components/grapes/chart-widgets/line-chart/blocks.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./components/grapes/chart-widgets/line-chart/consts.js");

/* harmony default export */ __webpack_exports__["default"] = (function (editor, opt = {}) {
  const c = opt;
  const bm = editor.BlockManager;
  bm.remove(_consts__WEBPACK_IMPORTED_MODULE_0__["ChartRef"]);
  bm.add(_consts__WEBPACK_IMPORTED_MODULE_0__["ChartRef"], {
    label: 'Chart',
    category: c.blockLabel,
    attributes: {
      class: 'fa fa-line-chart'
    },
    content: `
        <div style="width: 30vw;" data-gjs-type="${_consts__WEBPACK_IMPORTED_MODULE_0__["ChartRef"]}"></div>
      `
  });
});

/***/ }),

/***/ "./components/grapes/chart-widgets/line-chart/commands.js":
/*!****************************************************************!*\
  !*** ./components/grapes/chart-widgets/line-chart/commands.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./components/grapes/chart-widgets/line-chart/actions.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "./components/grapes/chart-widgets/line-chart/consts.js");
/**
 * Adds loadHtmltemplate command
 */



/* harmony default export */ __webpack_exports__["default"] = ((editor, config) => {
  const cm = editor.Commands;
  cm.add(_consts__WEBPACK_IMPORTED_MODULE_2__["loadHtmltemplate"], e => {
    const pHtml = e.getModel().get('Parser').parserHtml; // JSX expression in attributes are quoted, so unquote them before passing on

    let html = pHtml.unquoteJsxExpresionsInAttributes(e.getHtml());
    config.setHtmlString(html);
    config.setCssString(e.getCss());
  });
  cm.add('save-db', {
    run: function (editor, sender) {
      sender && sender.set('active');
      editor.store();
    }
  });
});

/***/ }),

/***/ "./components/grapes/chart-widgets/line-chart/components.jsx":
/*!*******************************************************************!*\
  !*** ./components/grapes/chart-widgets/line-chart/components.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consts */ "./components/grapes/chart-widgets/line-chart/consts.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chart */ "./components/grapes/chart-widgets/line-chart/Chart.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./components/grapes/chart-widgets/line-chart/actions.js");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/grapes/chart-widgets/line-chart/components.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = (function (editor, opt = {}) {
  let updateTrait = [];
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  function displayOptions(displayDevice) {
    let newObj = [];

    for (var key in displayDevice) {
      if (displayDevice[key] === true) newObj.push(key);
    }

    return newObj;
  }

  domc.addType(_consts__WEBPACK_IMPORTED_MODULE_3__["ChartRef"], {
    model: defaultModel.extend({
      defaults: _objectSpread({}, defaultModel.prototype.defaults, {
        droppable: true,
        defaultData: [[{
          "Name": "Henery",
          "Location": "Usa",
          "id": "5c24dc26dc10670017e40921",
          "last Seen": "2020-06-10T19:51:40.452Z",
          "notes": ""
        }]],
        prevData: [],
        dbId: [],
        traits: [{
          name: 'modify',
          type: 'button',
          text: `Modify`,
          full: true,
          command: editor => axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://173.249.14.149:3001/api/DataSources?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ').then(res => {
            let component = editor.getSelected();
            component.addTrait({
              name: "dataSource",
              type: "select",
              changeProp: 1,
              options: res.data.map(op => {
                return {
                  id: op.id,
                  name: op.title
                };
              })
            });
            component.removeTrait('modify');
          })
        }],
        toHTML: function () {
          return "";
        }
      }),

      init() {
        this.listenTo(this, this.handlePropChange);

        if (this.attributes.prevData.length >= 1) {
          this.getTrait('modify').set('text', "Edit");
          this.addTrait({
            name: 'Prev',
            type: 'pre',
            text: `
						Data Source : <span style="font-weight: bold;">${this.attributes.prevData[0].dataSourceId === '5ec035f7bb377b08ebc8938a' ? "MongoDB" : this.attributes.prevData[0].dataSourceId}</span><br/>
						 Table : <span style="font-weight: bold;">${this.attributes.prevData[0].config.docId}</span><br/>
						Fields : <span style="font-weight: bold;">${this.attributes.prevData[0].config.fields.toString().replace(/,/g, ' | ')}</span><br/>
						Primary key : <span style="font-weight: bold;"> ${this.attributes.prevData[0].config.primaryKey}</span><br/>
					`
          }, {
            at: 0
          });
        }

        if (this.attributes.dataSource) {
          this.attributes.dataSource = '';
          this.attributes.Table = '';
          this.attributes.collections = '';
        } else {
          return null;
        }
      }

    }),
    view: defaultView.extend({
      init() {
        this.listenTo(this.model, `change:modify change:dataSource change:Table change:console change:${updateTrait.toString()}`, this.handleChanges);
      },

      handleChanges() {
        if (this.model.attributes.dataSource && (this.model.attributes.Table == undefined || this.model.attributes.Table == "")) {
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`http://173.249.14.149:3001/api/DataSources/${this.model.attributes.dataSource}/doc-list?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ`).then(response => {
            const component = editor.getSelected();

            if (this.model.attributes.Table) {}

            component.addTrait({
              name: "Table",
              type: 'select',
              options: response.data.map(t => {
                return {
                  id: t,
                  name: t
                };
              }),
              changeProp: 1
            });
          });
        }

        if (this.model.attributes.Table) {
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`http://173.249.14.149:3001/api/DataSources/${this.model.attributes.dataSource}/field-list?docId=${this.model.attributes.Table}&access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ`).then(response => {
            const component = editor.getSelected();

            if (updateTrait.length > 1) {
              this.model.get('traits').each(function (trait) {
                component.removeTrait(updateTrait.map(t => t.toString()));
                component.removeTrait("collections");
                component.removeTrait("console");
              });
            }

            response.data.map(t => {
              let res = [{
                label: t,
                name: t,
                type: "checkbox",
                changeProp: 1
              }];
              updateTrait.push(t);
              component.addTrait(res);
            });
            component.addTrait({
              label: "Primary key",
              name: "collections",
              type: "select",
              options: response.data.map(t => t),
              changeProp: 1
            }, {
              at: 40
            });
            component.addTrait({
              type: 'button',
              name: "console",
              changeProp: 1,
              label: "log button",
              text: 'Click me',
              full: true,
              command: editor => {
                const selected = editor.getSelected();
                let postData = {};
                let postDataArray = [];
                selected.attributes.traits.models.forEach(element => {
                  postData[element.attributes.name] = element.attributes.value;
                });
                postDataArray.push(postData);
                let arr = null;
                arr = postDataArray.map(js => {
                  return {
                    "dataSourceId": js.dataSource,
                    "config": {
                      "fields": displayOptions(js),
                      "primaryKey": js.collections,
                      "docId": js.Table,
                      "type": "simple",
                      "func": "find",
                      "query": {}
                    },
                    "type": "Chart"
                  };
                })[0];
                Object(_actions__WEBPACK_IMPORTED_MODULE_5__["addWidget"])(arr).then(res => {
                  console.log(res.data);
                  let customId = res.data.id;
                  this.model.attributes.prevData = [];
                  this.model.attributes.prevData.push(res.data);

                  if (this.model.attributes.prevData.length >= 1) {
                    component.removeTrait('Prev');
                  }

                  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`http://173.249.14.149:3001/api/WidgetSettings/${customId}/execute-query?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ`).then(reso => {
                    console.log(reso.data);

                    if (this.model.attributes.defaultData.length < 1) {
                      this.model.attributes.defaultData.push(reso.data);
                    } else {
                      this.model.attributes.defaultData = [];
                      this.model.attributes.defaultData.push(reso.data);
                    }
                  }).then(() => {
                    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(this.el);
                    this.render();
                  });
                });
              }
            });
          });
        }
      },

      onRender({
        el
      }) {
        const comps = this.model.get('components');
        comps.reset();
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 7
          }
        }, __jsx(_Chart__WEBPACK_IMPORTED_MODULE_4__["default"], {
          data: this.model.attributes.defaultData[0],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 8
          }
        }))), el);
      }

    })
  });
});

/***/ }),

/***/ "./components/grapes/chart-widgets/line-chart/consts.js":
/*!**************************************************************!*\
  !*** ./components/grapes/chart-widgets/line-chart/consts.js ***!
  \**************************************************************/
/*! exports provided: ChartRef, ChartPluginRef, loadHtmltemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartRef", function() { return ChartRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPluginRef", function() { return ChartPluginRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHtmltemplate", function() { return loadHtmltemplate; });
const ChartRef = 'Chart';
const ChartPluginRef = 'Chart-Plugin';
const loadHtmltemplate = 'load-html-template';

/***/ }),

/***/ "./components/grapes/chart-widgets/line-chart/index.js":
/*!*************************************************************!*\
  !*** ./components/grapes/chart-widgets/line-chart/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addChartPlugin; });
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./components/grapes/chart-widgets/line-chart/components.jsx");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks */ "./components/grapes/chart-widgets/line-chart/blocks.js");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands */ "./components/grapes/chart-widgets/line-chart/commands.js");
/* harmony import */ var _panels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panels */ "./components/grapes/chart-widgets/line-chart/panels.js");
/* harmony import */ var _ParserHtmlCaseSensitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ParserHtmlCaseSensitive */ "./components/grapes/chart-widgets/line-chart/ParserHtmlCaseSensitive.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consts */ "./components/grapes/chart-widgets/line-chart/consts.js");







function addChartPlugin() {
  grapesjs__WEBPACK_IMPORTED_MODULE_0___default.a.plugins.add(_consts__WEBPACK_IMPORTED_MODULE_6__["ChartPluginRef"], (editor, opts = {}) => {
    editor.TraitManager.addType('pre', {
      noLabel: true,

      getInputEl() {
        const {
          model
        } = this;
        const {
          text
        } = model.props();
        const label = text;
        const input = `<div type="text" style="font-size: 1rem; line-height:30px; margin:10px; word-wrap: break-word; width: 180px;">${label}</div>`;
        return input;
      }

    });
    let c = opts;
    let defaults = {
      blocks: [_consts__WEBPACK_IMPORTED_MODULE_6__["ChartPluginRef"]],
      blockLabel: 'Charts',
      blockCategory: 'Extra',
      defaultStyle: true
    };
    console.log(defaults);

    for (let name in defaults) {
      if (!(name in c)) c[name] = defaults[name];
    }

    Object(_components__WEBPACK_IMPORTED_MODULE_1__["default"])(editor, c);
    Object(_blocks__WEBPACK_IMPORTED_MODULE_2__["default"])(editor, c);
    Object(_commands__WEBPACK_IMPORTED_MODULE_3__["default"])(editor, c);
    Object(_panels__WEBPACK_IMPORTED_MODULE_4__["default"])(editor, c);
    const em = editor.getModel();
    const emConf = em.get('Config');
    emConf.textTags = ['br', 'b', 'i', 'u', 'a', 'ul', 'ol'];
    em.get('Parser').parserHtml = Object(_ParserHtmlCaseSensitive__WEBPACK_IMPORTED_MODULE_5__["default"])(emConf);

    em.get('Parser').parseHtml = str => {
      const pHtml = em.get('Parser').parserHtml;
      pHtml.compTypes = em.get('DomComponents').getTypes();
      let res = pHtml.parse(str, em.get('Parser').parserCss);
      return res;
    };

    editor.on("load", () => {
      const openBl = editor.Panels.getButton('views', 'open-blocks');
      openBl && openBl.set('active', 1);
    });
  });
}

/***/ }),

/***/ "./components/grapes/chart-widgets/line-chart/panels.js":
/*!**************************************************************!*\
  !*** ./components/grapes/chart-widgets/line-chart/panels.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((editor, config) => {
  const pn = editor.Panels;
  console.log(pn.getPanels());
});

/***/ }),

/***/ "./components/grapes/no-ssr.jsx":
/*!**************************************!*\
  !*** ./components/grapes/no-ssr.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grapesjs-preset-webpage */ "grapesjs-preset-webpage");
/* harmony import */ var grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grapesjs_custom_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grapesjs-custom-code */ "grapesjs-custom-code");
/* harmony import */ var grapesjs_custom_code__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grapesjs_custom_code__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grapesjs_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grapesjs-tabs */ "grapesjs-tabs");
/* harmony import */ var grapesjs_tabs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grapesjs_tabs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _table_widgets_html_table_widget_consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-widgets/html-table-widget/consts */ "./components/grapes/table-widgets/html-table-widget/consts.js");
/* harmony import */ var _table_widgets_html_table_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-widgets/html-table-widget */ "./components/grapes/table-widgets/html-table-widget/index.js");
/* harmony import */ var _chart_widgets_line_chart_consts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart-widgets/line-chart/consts */ "./components/grapes/chart-widgets/line-chart/consts.js");
/* harmony import */ var _chart_widgets_line_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart-widgets/line-chart */ "./components/grapes/chart-widgets/line-chart/index.js");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/grapes/no-ssr.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const {
  API_URL
} = next_config__WEBPACK_IMPORTED_MODULE_3___default()().publicRuntimeConfig;

const Page = () => {
  const [pluginLoaded, setPluginLoaded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [editor, setEditor] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(router.query.id);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!pluginLoaded) {
      Object(_table_widgets_html_table_widget__WEBPACK_IMPORTED_MODULE_9__["default"])(id);
      Object(_chart_widgets_line_chart__WEBPACK_IMPORTED_MODULE_11__["default"])();
      setPluginLoaded(true);
    } else if (!editor) {
      const e = grapesjs__WEBPACK_IMPORTED_MODULE_4___default.a.init({
        color: "white",
        height: "100vh",
        width: "auto",
        container: "#g",
        fromElement: true,
        plugins: [grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_5___default.a, grapesjs_custom_code__WEBPACK_IMPORTED_MODULE_6___default.a, grapesjs_tabs__WEBPACK_IMPORTED_MODULE_7___default.a, _table_widgets_html_table_widget_consts__WEBPACK_IMPORTED_MODULE_8__["TablePluginRef"], _chart_widgets_line_chart_consts__WEBPACK_IMPORTED_MODULE_10__["ChartPluginRef"]],
        storageManager: {
          type: "remote",
          urlStore: `${API_URL}/Dashboards/${id}/grapes?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("id")}`,
          urlLoad: `${API_URL}/Dashboards/${id}/grapes?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("id")}`,
          autosave: false,
          autoload: true,
          contentTypeJson: true,
          storeComponents: true,
          allowScripts: 1,
          storeStyles: true,
          storeHtml: true,
          storeCss: true
        }
      });
    }
  });
  return __jsx("div", {
    id: "g",
    className: "h",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/grapes/table-widgets/html-table-widget/Material.js":
/*!***********************************************************************!*\
  !*** ./components/grapes/table-widgets/html-table-widget/Material.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/grapes/table-widgets/html-table-widget/Material.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Material extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    console.log(this.props.data); // const keys = [...new Set([].concat.apply([], this.props.data.map(obj => Object.keys(obj))))]
    // console.log(keys)

    let f = "";

    for (let i = 0, j = 0; i < this.props.data.length && j < 10; i++, j++) {
      const kee = Object.keys(this.props.data[i]);
      f = kee;
    }

    return __jsx("table", {
      cellspacing: "0",
      cellpadding: "0",
      style: {
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        tableLayout: "fixed",
        whiteSpace: "normal",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 0px 40px 0px rgba(0, 0, 0, 0.15)",
        fontSize: "15px",
        color: "#808080"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, __jsx("tr", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#6c7ae0",
        boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.1)",
        color: "white"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, f.map(k => {
      console.log(f.length);
      return __jsx("th", {
        style: {
          width: `${100 / f.length}%`,
          padding: "15px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, k);
    }))), __jsx("tbody", {
      class: "Tbody",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, this.props.data.map(d => {
      const values = [];
      f.forEach(key => {
        if (typeof d[key] === "object" || typeof d[key] === "undefined") {
          d[key] = "----------";
        } else if (d[key] === true) {
          d[key] = "true";
        } else if (d[key] === false) {
          d[key] = "false";
        } else if (d[key].length < 1) {
          d[key] = "----------";
        }

        values.push(d[key]);
      });
      console.log(values); // values.map(str => {
      //     if (typeof str === "object") {
      //         let st = JSON.stringify(str)
      //         values[1] = st;
      //     } else if (typeof str === Boolean) {
      //         return str.toString()
      //     }
      //})

      return __jsx("tr", {
        class: "Tr-body",
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }
      }, values.map(di => {
        return __jsx("td", {
          style: {
            width: `${100 / f.length}%`,
            wordWrap: "break-word",
            padding: "10px 0"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }
        }, di);
      }));
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Material);

/***/ }),

/***/ "./components/grapes/table-widgets/html-table-widget/ParserHtmlCaseSensitive.js":
/*!**************************************************************************************!*\
  !*** ./components/grapes/table-widgets/html-table-widget/ParserHtmlCaseSensitive.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-html-parser */ "node-html-parser");
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xregexp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xregexp */ "xregexp");
/* harmony import */ var xregexp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xregexp__WEBPACK_IMPORTED_MODULE_2__);



window.nodeHtmlParser = node_html_parser__WEBPACK_IMPORTED_MODULE_1__["parse"];
/**
 * Parses an HTML string into its HTML and CSS component representation keeping case of tags and attributes. This
 * is necessary in case you want React compatible JSX tags in the template, in which case the react components must start
 * wih uppercase and also the camel casing of attributes is importane (ie. className vs classname)
 *
 * This function is based on src/parser/model/ParserHtml.js. For parsing we are using node-html-parser instead of
 * the browser's DOM to keep the case of tags and attributes. The code is mostly the same  as in ParserHtml.js
 * by maing the objects created by  node-html-parser compatible with the DOM representation.
 *
 * @param config usual grapesjs config
 * @returns parser function
 */

/* harmony default export */ __webpack_exports__["default"] = (config => {
  var TEXT_NODE = 'span';
  var c = config;
  var modelAttrStart = 'data-gjs-';
  return {
    compTypes: '',
    modelAttrStart,

    /**
     * Extract component props from an attribute object
     * @param {Object} attr
     * @returns {Object} An object containing props and attributes without them
     */
    splitPropsFromAttr(attr = {}) {
      const props = {};
      const attrs = {};
      Object(underscore__WEBPACK_IMPORTED_MODULE_0__["each"])(attr, (value, key) => {
        if (key.indexOf(this.modelAttrStart) === 0) {
          const modelAttr = key.replace(modelAttrStart, '');
          const valueLen = value.length;
          const valStr = value && Object(underscore__WEBPACK_IMPORTED_MODULE_0__["isString"])(value);
          const firstChar = valStr && value.substr(0, 1);
          const lastChar = valStr && value.substr(valueLen - 1);
          value = value === 'true' ? true : value;
          value = value === 'false' ? false : value; // Try to parse JSON where it's possible
          // I can get false positive here (eg. a selector '[data-attr]')
          // so put it under try/catch and let fail silently

          try {
            value = firstChar == '{' && lastChar == '}' || firstChar == '[' && lastChar == ']' ? JSON.parse(value) : value;
          } catch (e) {}

          props[modelAttr] = value;
        } else {
          attrs[key] = value;
        }
      });
      return {
        props,
        attrs
      };
    },

    /**
     * Given a string with html (jsx). Attributes having JSX expressions will be quoted to look like
     * actual HTML attributes
     * @param {*} html
     * @return html with quoted JSX attributes
     *
     * https://stackoverflow.com/questions/546433/regular-expression-to-match-balanced-parentheses
     */
    quoteJsxExpresionsInAttributes(html) {
      let found = xregexp__WEBPACK_IMPORTED_MODULE_2___default.a.matchRecursive(html, "{", "}", "g");

      for (let i = 0; i < found.length; i++) {
        // (value) => \`\${(value) => < 10 ? \`0\${value}\` : value)}\`
        // --> {(value) => \`\${(value) => < 10 ? \`0\${value}\` : value)}\`}
        let pattern = "{" + found[i] + "}";
        let lastStartPos = 0; // Find pattern until we reach and of html

        while (true) {
          let needsQuote = false; // get next match position

          let matchPos = html.indexOf(pattern, lastStartPos);

          if (matchPos === -1) {
            break;
          } // We will look back 1 and 2 characters


          let oneCharBeforePos = matchPos - 1;
          let twoCharBeforePos = matchPos - 2;

          if (twoCharBeforePos > 0 && oneCharBeforePos > 0) {
            // Need to quote if have sg like this:
            //   formatValue={(value) => \`\${(value) => < 10 ? \`0\${value}\` : value)}\`}
            // (ie: if patterns comes atfre and equals sime, but not =")
            // But no need to quote if:
            //    formatValue="{(value) => \`\${(value) => < 10 ? \`0\${value}\` : value)}\`}"
            //    <Timer.Days/>{this.model.attributes.displayLabels ? " "+this.model.attributes.labels.labelDays+" " : ', '}
            needsQuote = html.substring(twoCharBeforePos, twoCharBeforePos + 2) !== '="' && html.substring(oneCharBeforePos, oneCharBeforePos + 1) === "=";
          } // If need to quote: replace patterns with quoted version also escaping some HTML entities


          if (needsQuote) {
            let replacement = '"{' + found[i].replace("<", "&lt;").replace(">", "&gt;").replace("&", "&amp;") + '}"';
            html = html.replace(pattern, replacement);
            lastStartPos = matchPos + replacement.length;
          } else {
            lastStartPos = matchPos + pattern.length;
          } // No lastStartPos placed after the processed string

        }
      }

      return html;
    },

    /**
     * Unquote attributes containg JSX previously quoted using quoteJsxExpresionsInAttributes
     * @param html
     */
    unquoteJsxExpresionsInAttributes(html) {
      let found = html.match(/=["']{.*}["']/g);

      if (!found) {
        return html;
      }

      for (let i = 0; i < found.length; i++) {
        let pattern = found[i];
        let replacement = pattern.startsWith('="{') ? pattern.replace('"{', "{").replace('}"', "}") : pattern.replace("{'", "{").replace("}'", "}");
        replacement = replacement.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&");
        html = html.replace(pattern, replacement);
      }

      return html;
    },

    /**
     * Parse style string to object
     * @param {string} str
     * @return {Object}
     * @example
     * var stl = ParserHtml.parseStyle('color:black; width:100px; test:value;');
     * console.log(stl);
     * // {color: 'black', width: '100px', test: 'value'}
     */
    parseStyle(str) {
      var result = {};
      var decls = str.split(';');

      for (var i = 0, len = decls.length; i < len; i++) {
        var decl = decls[i].trim();
        if (!decl) continue;
        var prop = decl.split(':');
        result[prop[0].trim()] = prop.slice(1).join(':').trim();
      }

      return result;
    },

    /**
     * Parse class string to array
     * @param {string} str
     * @return {Array<string>}
     * @example
     * var res = ParserHtml.parseClass('test1 test2 test3');
     * console.log(res);
     * // ['test1', 'test2', 'test3']
     */
    parseClass(str) {
      const result = [];
      const cls = str.split(' ');

      for (let i = 0, len = cls.length; i < len; i++) {
        const cl = cls[i].trim();
        if (!cl) continue;
        result.push(cl);
      }

      return result;
    },

    toAttrArray(obj) {
      var attrArr = [];
      Object.keys(obj).map(key => {
        attrArr.push({
          'nodeName': key,
          'nodeValue': obj[key]
        });
      });
      return attrArr;
    },

    /**
     * Get data from the node element
     * @param  {HTMLElement} el DOM element to traverse
     * @return {Array<Object>}
     */
    parseNode(el) {
      const result = [];
      const nodes = el.childNodes;

      for (var i = 0, len = nodes.length; i < len; i++) {
        const node = nodes[i]; // DOM copmatibility

        node.nodeValue = node.rawText;
        node.content = node.rawText; // Make attrs compatible with DOM representation

        let attrs = [];
        attrs = (typeof node.attributes == 'object' ? this.toAttrArray(node.attributes) : node.attributes) || [];
        const attrsLen = attrs.length;
        const nodePrev = result[result.length - 1];
        const nodeChild = node.childNodes.length;
        const ct = this.compTypes;
        let model = {};

        if (ct) {
          let obj = '';
          let type = node.getAttribute && node.getAttribute(`${modelAttrStart}type`);

          if (!type) {
            type = node.attributes && node.attributes[`${modelAttrStart}type`];
          }

          if (type) {
            model = {
              type
            };
          } else {
            for (let it = 0; it < ct.length; it++) {
              const compType = ct[it];
              obj = compType.model.isComponent(node);

              if (obj) {
                if (typeof obj !== 'object') {
                  obj = {
                    type: compType.id
                  };
                }

                break;
              }
            }

            model = obj;
          }
        }

        model.tagName = node.tagName;

        if (attrsLen) {
          model.attributes = {};
        }

        for (let j = 0; j < attrsLen; j++) {
          const nodeName = attrs[j].nodeName;
          let nodeValue = attrs[j].nodeValue; // if (nodeName == "formatValue") {
          //     debugger;
          // }
          // Isolate attributes

          if (nodeName == 'style') {
            model.style = this.parseStyle(nodeValue);
          } else if (nodeName == 'class') {
            model.classes = this.parseClass(nodeValue);
          } else if (nodeName == 'contenteditable') {
            continue;
          } else if (nodeName.indexOf(modelAttrStart) === 0) {
            const modelAttr = nodeName.replace(modelAttrStart, '');
            const valueLen = nodeValue.length;
            const firstChar = nodeValue && nodeValue.substr(0, 1);
            const lastChar = nodeValue && nodeValue.substr(valueLen - 1);
            nodeValue = nodeValue === 'true' ? true : nodeValue;
            nodeValue = nodeValue === 'false' ? false : nodeValue;

            try {
              nodeValue = firstChar == '{' && lastChar == '}' || firstChar == '[' && lastChar == ']' ? JSON.parse(nodeValue) : nodeValue;
            } catch (e) {}

            model[modelAttr] = nodeValue;
          } else {
            model.attributes[nodeName] = nodeValue;
          }
        }

        if (nodeChild && !model.components) {
          const firstChild = node.childNodes[0];
          firstChild.nodeValue = firstChild.rawText;

          if (nodeChild === 1 && firstChild.nodeType === 3) {
            !model.type && (model.type = 'text');
            model.content = firstChild.nodeValue;
          } else {
            model.components = this.parseNode(node);
          }
        }

        if (model.type == 'textnode') {
          model.content = node.nodeValue;

          if (nodePrev && nodePrev.type == 'textnode') {
            nodePrev.content += model.content;
            continue;
          }

          if (!config.keepEmptyTextNodes) {
            const content = node.nodeValue;

            if (content != ' ' && !content.trim()) {
              continue;
            }
          }
        }

        const comps = model.components;

        if (!model.type && comps) {
          let allTxt = 1;
          let foundTextNode = 0;

          for (let ci = 0; ci < comps.length; ci++) {
            const comp = comps[ci];
            const cType = comp.type;

            if (['text', 'textnode'].indexOf(cType) < 0 && c.textTags.indexOf(comp.tagName) < 0) {
              allTxt = 0;
              break;
            }

            if (cType == 'textnode') {
              foundTextNode = 1;
            }
          }

          if (allTxt && foundTextNode) {
            model.type = 'text';
          }
        }

        if (!model.tagName && model.type != 'textnode') {
          continue;
        }

        result.push(model);
      }

      return result;
    },

    /**
     * Parse HTML string to a desired model object
     * @param  {string} str HTML string
     * @param  {ParserCss} parserCss In case there is style tags inside HTML
     * @return {Object}
     *
     */
    parse(str, parserCss) {
      console.log("html", str, parserCss);
      var config = c.em && c.em.get('Config') || {};
      var res = {
        html: '',
        css: ''
      };
      var quoted = this.quoteJsxExpresionsInAttributes(str);
      let wrappedInDiv = false;

      if (!quoted.startsWith('<')) {
        quoted = '<div>' + quoted + '</div>';
        wrappedInDiv = true;
      }

      const dom = Object(node_html_parser__WEBPACK_IMPORTED_MODULE_1__["parse"])(quoted);
      var result = this.parseNode(dom);

      if (result.length == 1) {
        result = result[0];
      }

      if (wrappedInDiv) {
        if (result.components) {
          result = result.components;
        } else {
          delete result.tagName;
          result.type = "textnode";
        }
      }

      res.html = result;

      if (parserCss) {
        var el = document.createElement('div');
        el.innerHTML = str;
        var styleStr = '';
        var styles = el.querySelectorAll('style');
        var j = styles.length;

        while (j--) {
          styleStr = styles[j].innerHTML + styleStr;
          styles[j].parentNode.removeChild(styles[j]);
        }

        if (styleStr) res.css = parserCss.parse(styleStr);
      }

      return res;
    }

  };
});

/***/ }),

/***/ "./components/grapes/table-widgets/html-table-widget/blocks.js":
/*!*********************************************************************!*\
  !*** ./components/grapes/table-widgets/html-table-widget/blocks.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./components/grapes/table-widgets/html-table-widget/consts.js");

/* harmony default export */ __webpack_exports__["default"] = (function (editor, opt = {}) {
  const c = opt;
  const bm = editor.BlockManager;
  bm.remove(_consts__WEBPACK_IMPORTED_MODULE_0__["TableRef"]);
  bm.add(_consts__WEBPACK_IMPORTED_MODULE_0__["TableRef"], {
    label: "Tabel",
    category: c.blockLabel,
    attributes: {
      class: "fa fa-table"
    },
    content: `
      <div class="T" data-gjs-type="${_consts__WEBPACK_IMPORTED_MODULE_0__["TableRef"]}"></div>
      <style>
      .T {
            float: left;
      }
      .Tbody {
        max-height: 585px;
        overflow: auto;
      }
      .Tbody tr:nth-child(even) {
      background-color: #f8f6ff;
    }
      </style>
    `
  });
});

/***/ }),

/***/ "./components/grapes/table-widgets/html-table-widget/commands.js":
/*!***********************************************************************!*\
  !*** ./components/grapes/table-widgets/html-table-widget/commands.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./components/grapes/table-widgets/html-table-widget/consts.js");
/**
 * Adds loadHtmltemplate command
 */

/* harmony default export */ __webpack_exports__["default"] = ((editor, config) => {
  const cm = editor.Commands;
  cm.add(_consts__WEBPACK_IMPORTED_MODULE_0__["loadHtmltemplate"], e => {
    const pHtml = e.getModel().get('Parser').parserHtml; // JSX expression in attributes are quoted, so unquote them before passing on

    let html = pHtml.unquoteJsxExpresionsInAttributes(e.getHtml());
    config.setHtmlString(html);
    config.setCssString(e.getCss());
  });
  cm.add('save-db', {
    run: function (editor, sender) {
      sender && sender.set('active');
      editor.store();
    }
  });
});

/***/ }),

/***/ "./components/grapes/table-widgets/html-table-widget/components.jsx":
/*!**************************************************************************!*\
  !*** ./components/grapes/table-widgets/html-table-widget/components.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "./components/grapes/table-widgets/html-table-widget/consts.js");
/* harmony import */ var _Material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Material */ "./components/grapes/table-widgets/html-table-widget/Material.js");
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/grapes/table-widgets/html-table-widget/components.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = (function (editor, opt = {}) {
  const {
    id
  } = opt;
  let d = [[{
    Name: "Henery",
    Location: "Usa",
    id: "5c24dc26dc10670017e40921",
    "last Seen": "2020-06-10T19:51:40.452Z",
    notes: ""
  }]];
  let updateTrait = [];
  const domc = editor.DomComponents;
  const defaultType = domc.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  function displayOptions(displayDevice) {
    let newObj = [];

    for (var key in displayDevice) {
      if (displayDevice[key] === true) newObj.push(key);
    }

    return newObj;
  }

  domc.addType(_consts__WEBPACK_IMPORTED_MODULE_2__["TableRef"], {
    model: defaultModel.extend({
      defaults: _objectSpread({}, defaultModel.prototype.defaults, {
        droppable: true,
        defaultData: [[{
          Name: "Henery",
          Location: "Usa",
          id: "5c24dc26dc10670017e40921",
          "last Seen": "2020-06-10T19:51:40.452Z",
          notes: ""
        }]],
        prevData: [],
        dbId: [],
        keys: [["Name", "location", "id", "last Seen", "notes"]],
        traits: [{
          name: "modify",
          type: "button",
          text: `Modify`,
          full: true,
          command: async editor => {
            try {
              const datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_5__["default"].getDatasources({});
              let component = editor.getSelected();
              component.addTrait({
                name: "dataSource",
                type: "select",
                changeProp: 1,
                options: datasources.map(op => {
                  return {
                    id: op.id,
                    name: op.title
                  };
                })
              });
              component.removeTrait("modify");
            } catch (e) {
              console.log(e);
            }
          }
        }],
        toHTML: function () {
          return "";
        }
      }),

      init() {
        this.listenTo(this, this.handlePropChange);

        if (this.attributes.prevData.length >= 1) {
          this.getTrait("modify").set("text", "Edit");
          this.addTrait({
            name: "Prev",
            type: "pre",
            text: `
						Data Source : <span style="font-weight: bold;">${this.attributes.prevData[0].dataSourceId === "5ec035f7bb377b08ebc8938a" ? "MongoDB" : this.attributes.prevData[0].dataSourceId}</span><br/>
						 Table : <span style="font-weight: bold;">${this.attributes.prevData[0].config.docId}</span><br/>
						Fields : <span style="font-weight: bold;">${this.attributes.prevData[0].config.fields.toString().replace(/,/g, " | ")}</span><br/>
						Primary key : <span style="font-weight: bold;"> ${this.attributes.prevData[0].config.primaryKey}</span><br/>
					`
          }, {
            at: 0
          });
        }

        if (this.attributes.dataSource) {
          this.attributes.dataSource = "";
          this.attributes.Table = "";
          this.attributes.collections = "";
        } else {
          return null;
        }
      }

    }),
    view: defaultView.extend({
      init() {
        this.listenTo(this.model, `change:modify change:dataSource change:Table change:console change:${updateTrait.toString()}`, this.handleChanges);
      },

      async handleChanges() {
        try {
          if (this.model.attributes.dataSource && (this.model.attributes.Table == undefined || this.model.attributes.Table == "")) {
            const docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_5__["default"].getDocList(this.model.attributes.dataSource);
            const component = editor.getSelected();
            component.addTrait({
              name: "Table",
              type: "select",
              options: docList.map(t => {
                return {
                  id: t,
                  name: t
                };
              }),
              changeProp: 1
            });
          }

          if (this.model.attributes.Table) {
            const fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_5__["default"].getFieldList(this.model.attributes.dataSource, this.model.attributes.Table);
            const component = editor.getSelected();

            if (updateTrait.length > 1) {
              this.model.get("traits").each(function (trait) {
                component.removeTrait(updateTrait.map(t => t.toString()));
                component.removeTrait("collections");
                component.removeTrait("console");
              });
            }

            fieldList.map(t => {
              let res = [{
                label: t,
                name: t,
                type: "checkbox",
                changeProp: 1
              }];
              updateTrait.push(t);
              component.addTrait(res);
            });
            component.addTrait({
              label: "Primary key",
              name: "collections",
              type: "select",
              options: fieldList.map(t => t),
              changeProp: 1
            }, {
              at: 40
            });
            component.addTrait({
              type: "button",
              name: "console",
              changeProp: 1,
              label: "log button",
              text: "Click me",
              full: true,
              command: async editor => {
                try {
                  const selected = editor.getSelected();
                  let postData = {};
                  let postDataArray = [];
                  selected.attributes.traits.models.forEach(element => {
                    postData[element.attributes.name] = element.attributes.value;
                  });
                  postDataArray.push(postData);
                  let arr = null;
                  this.model.attributes.keys = [];
                  arr = postDataArray.map(js => {
                    this.model.attributes.keys.push(displayOptions(js));
                    return {
                      dataSourceId: js.dataSource,
                      config: {
                        fields: displayOptions(js),
                        primaryKey: js.collections,
                        docId: js.Table,
                        type: "simple",
                        func: "find",
                        query: {}
                      },
                      type: "Table"
                    };
                  })[0];
                  const widget = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_4__["default"].createWidgetInDashboard(id, arr);
                  let customId = widget.id;
                  this.model.attributes.prevData = [];
                  this.model.attributes.prevData.push(widget);

                  if (this.model.attributes.prevData.length >= 1) {
                    component.removeTrait("Prev");
                  }

                  const queryResult = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].executeWidgetQuery(customId);

                  if (this.model.attributes.defaultData.length < 1) {
                    this.model.attributes.defaultData.push(queryResult);
                  } else {
                    this.model.attributes.defaultData = [];
                    this.model.attributes.defaultData.push(queryResult);
                  }

                  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(this.el);
                  this.render();
                } catch (e) {
                  console.log(">> Error:", e);
                }
              }
            });
          }
        } catch (e) {
          console.log(e);
        }
      },

      onRender({
        el
      }) {
        const comps = this.model.get("components");
        comps.reset();
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }
        }, __jsx(_Material__WEBPACK_IMPORTED_MODULE_3__["default"], {
          keys: this.model.attributes.keys,
          data: this.model.attributes.defaultData[0],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 15
          }
        }))), el);
      }

    })
  });
});

/***/ }),

/***/ "./components/grapes/table-widgets/html-table-widget/consts.js":
/*!*********************************************************************!*\
  !*** ./components/grapes/table-widgets/html-table-widget/consts.js ***!
  \*********************************************************************/
/*! exports provided: TableRef, nwTableRef, TablePluginRef, loadHtmltemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRef", function() { return TableRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nwTableRef", function() { return nwTableRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePluginRef", function() { return TablePluginRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHtmltemplate", function() { return loadHtmltemplate; });
const TableRef = 'table';
const nwTableRef = 'ttable';
const TablePluginRef = 'Table-Plugin';
const loadHtmltemplate = 'load-html-template';

/***/ }),

/***/ "./components/grapes/table-widgets/html-table-widget/index.js":
/*!********************************************************************!*\
  !*** ./components/grapes/table-widgets/html-table-widget/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addTablePlugin; });
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./components/grapes/table-widgets/html-table-widget/components.jsx");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks */ "./components/grapes/table-widgets/html-table-widget/blocks.js");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands */ "./components/grapes/table-widgets/html-table-widget/commands.js");
/* harmony import */ var _panels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panels */ "./components/grapes/table-widgets/html-table-widget/panels.js");
/* harmony import */ var _ParserHtmlCaseSensitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ParserHtmlCaseSensitive */ "./components/grapes/table-widgets/html-table-widget/ParserHtmlCaseSensitive.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consts */ "./components/grapes/table-widgets/html-table-widget/consts.js");







function addTablePlugin(id) {
  grapesjs__WEBPACK_IMPORTED_MODULE_0___default.a.plugins.add(_consts__WEBPACK_IMPORTED_MODULE_6__["TablePluginRef"], (editor, opts = {}) => {
    editor.TraitManager.addType("pre", {
      noLabel: true,

      getInputEl() {
        const {
          model
        } = this;
        const {
          text
        } = model.props();
        const label = text;
        const input = `<div type="text" style="font-size: 1rem; line-height:30px; margin:10px; word-wrap: break-word; width: 180px;">${label}</div>`;
        return input;
      }

    });
    let c = opts;
    let defaults = {
      blocks: [_consts__WEBPACK_IMPORTED_MODULE_6__["TablePluginRef"]],
      blockLabel: "Table",
      blockCategory: "Extra",
      defaultStyle: true,
      id
    };

    for (let name in defaults) {
      if (!(name in c)) c[name] = defaults[name];
    }

    Object(_components__WEBPACK_IMPORTED_MODULE_1__["default"])(editor, c);
    Object(_blocks__WEBPACK_IMPORTED_MODULE_2__["default"])(editor, c);
    Object(_commands__WEBPACK_IMPORTED_MODULE_3__["default"])(editor, c);
    Object(_panels__WEBPACK_IMPORTED_MODULE_4__["default"])(editor, c);
    const em = editor.getModel();
    const emConf = em.get("Config");
    emConf.textTags = ["br", "b", "i", "u", "a", "ul", "ol"];
    em.get("Parser").parserHtml = Object(_ParserHtmlCaseSensitive__WEBPACK_IMPORTED_MODULE_5__["default"])(emConf);

    em.get("Parser").parseHtml = str => {
      const pHtml = em.get("Parser").parserHtml;
      pHtml.compTypes = em.get("DomComponents").getTypes();
      let res = pHtml.parse(str, em.get("Parser").parserCss);
      return res;
    };

    editor.on("load", () => {
      const openBl = editor.Panels.getButton("views", "open-blocks");
      openBl && openBl.set("active", 1);
    });
  });
}

/***/ }),

/***/ "./components/grapes/table-widgets/html-table-widget/panels.js":
/*!*********************************************************************!*\
  !*** ./components/grapes/table-widgets/html-table-widget/panels.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((editor, config) => {
  const pn = editor.Panels;
  console.log(pn.getPanels());
  pn.addButton('options', [{
    id: 'save-db',
    className: 'fa fa-floppy-o',
    command: 'save-db',
    attributes: {
      title: 'Save',
      style: "color:#00C6CF; margin-left: 50px; "
    }
  }]);
});

/***/ })

};;
//# sourceMappingURL=0.js.map