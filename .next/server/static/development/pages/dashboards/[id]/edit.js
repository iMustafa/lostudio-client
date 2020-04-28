module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

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
  static async createDashboard(dashborad) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('', {}).then(res => res.data).catch(err => err.response);
  }

  static async getDashboards({
    Authorization,
    query
  }) {
    console.log(Authorization);
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err);
  }

  static async getDashboardById(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('', {}).then(res => res.data).catch(err => err.response);
  }

  static async updateDashboard(id, data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${API_URL}/Dashboards/${id}`, data).then(res => res.data).catch(err => err.response);
  }

  static async deleteDashboard(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('', {}).then(res => res.data).catch(err => err.response);
  }

  static async getWidgetSettings({
    Authorization,
    id
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/${id}/widgetSettings`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getCollaborators({
    Authorization,
    id
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/${id}/collaborators`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getCollaboratorations({
    Authorization
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/collaborations`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
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
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async addWidgetToDashboard(id, fk) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${API_URL}/Dashboards/${id}/widgetSettings/rel/${fk}`, {
      dashboardId: id,
      widgetSettingsId: fk
    }, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async removeWidgetFromDashboard(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('', {}).then(res => res.data).catch(err => err.response);
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
  // TODO
  static async createWidgetSettings(widgetSettings) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/WidgetSettings`, widgetSettings, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
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

/***/ "./components/dashboards/my-widgets.jsx":
/*!**********************************************!*\
  !*** ./components/dashboards/my-widgets.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "@material-ui/core/ExpansionPanel");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "@material-ui/core/ExpansionPanelSummary");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "@material-ui/core/ExpansionPanelDetails");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/widget-icon */ "./components/widgets/widget-icon.jsx");
/* harmony import */ var _material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/TableChart */ "@material-ui/icons/TableChart");
/* harmony import */ var _material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Timeline */ "@material-ui/icons/Timeline");
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/BubbleChart */ "@material-ui/icons/BubbleChart");
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/DonutLarge */ "@material-ui/icons/DonutLarge");
/* harmony import */ var _material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/PieChart */ "@material-ui/icons/PieChart");
/* harmony import */ var _material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "@material-ui/icons/BarChart");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "@material-ui/icons/ListAlt");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\my-widgets.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({}));

const MyWidgets = ({
  addPredefinedWidget,
  widgetSettings
}) => {
  const classes = useStyles();
  const TableWidgets = [{
    title: 'Table',
    icon: __jsx(_material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    })
  }];
  const ChartWidgets = [{
    title: 'Line Chart',
    icon: __jsx(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    })
  }, {
    title: 'Bar Chart',
    icon: __jsx(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    })
  }, {
    title: 'Bubble Chart',
    icon: __jsx(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    })
  }, {
    title: 'Pie Chart',
    icon: __jsx(_material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    })
  }, {
    title: 'Donut Chart',
    icon: __jsx(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    })
  }, {
    title: 'Gantt Chart',
    icon: __jsx(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    })
  }];
  const MyTableWidgets = widgetSettings.filter(widget => widget.type.indexOf('Table') > -1).map(widget => _objectSpread({}, widget, {
    icon: TableWidgets.find($ => $.title == widget.type).icon
  }));
  const MyChartWidgets = widgetSettings.filter(widget => widget.type.indexOf('Chart') > -1).map(widget => _objectSpread({}, widget, {
    icon: ChartWidgets.find($ => $.title == widget.type).icon
  }));
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Tables")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, MyTableWidgets.map(widget => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: widget.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    widget: widget,
    addPredefinedWidget: addPredefinedWidget,
    icon: widget.icon,
    title: widget.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })))))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Charts")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, MyChartWidgets.map(widget => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: widget.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    widget: widget,
    addPredefinedWidget: addPredefinedWidget,
    icon: widget.icon,
    title: widget.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyWidgets);

/***/ }),

/***/ "./components/dashboards/settings/add-new-collaborator.jsx":
/*!*****************************************************************!*\
  !*** ./components/dashboards/settings/add-new-collaborator.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\settings\\add-new-collaborator.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({}));

const AddCollaboratorCard = ({
  id,
  cancel
}) => {
  const classes = useStyles();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: permissions,
    1: setPermissions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    viewer: false,
    editor: false
  });

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePermissionsChange = event => {
    setPermissions(_objectSpread({}, permissions, {
      [event.target.name]: event.target.checked
    }));
  };

  const addCollaborator = async () => {
    const {
      editor,
      viewer
    } = permissions;

    try {
      const collaboration = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["default"].addCollaborator({
        email,
        editor,
        viewer,
        id
      });

      if (collaboration.status == 500) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Error', collaboration.data.error.message, 'error');
      } else {
        if (collaboration.sent) sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Success', `${email} is now a collaborator on this board. `, 'success');else sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Success', `${email} is not a member yet, but they'll be assigned as a collaborator as soon as they sign up. `, 'success');
        setEmail('');
        setPermissions({
          editor: false,
          viewer: false
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    spacing: 2,
    container: true,
    style: {
      margin: 0,
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 6,
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
    type: "email",
    onChange: handleEmailChange,
    label: "Email",
    placeholder: "example@domain.com",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 6,
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      margin: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
      checked: permissions.viewer,
      onChange: handlePermissionsChange,
      name: "viewer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }),
    label: "Editor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      margin: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
      checked: permissions.editor,
      onChange: handlePermissionsChange,
      name: "editor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }),
    label: "Viewer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    spacing: 2,
    container: true,
    style: {
      margin: 0,
      width: '100%',
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    onClick: cancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Cancel")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    onClick: addCollaborator,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Add"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddCollaboratorCard);

/***/ }),

/***/ "./components/dashboards/settings/collaborator-card.jsx":
/*!**************************************************************!*\
  !*** ./components/dashboards/settings/collaborator-card.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\settings\\collaborator-card.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  name: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  collaboratorActionButtons: {
    display: 'flex'
  }
}));

const CollaboratorCard = ({
  collaborator
}) => {
  const classes = useStyles();
  const {
    id,
    email,
    firstName,
    lastName,
    sent
  } = collaborator;
  const {
    viewer,
    editor
  } = collaborator.permissions;
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      marginBottom: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    spacing: 2,
    container: true,
    style: {
      margin: 0,
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 7,
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, email), sent ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, firstName, " ", lastName) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      fontSize: 11
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "User is not registered yet. They'll recieve the collaboration invitation once they register for an account")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      margin: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      name: "viewer",
      checked: editor,
      onChange: () => {
        console.log();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }),
    label: "Editor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      margin: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      name: "editor",
      checked: viewer,
      onChange: () => {
        console.log();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }),
    label: "Viewer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 2,
    className: classes.collaboratorActionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "delete",
    style: {
      outline: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CollaboratorCard);

/***/ }),

/***/ "./components/dashboards/settings/dashboard-settings.jsx":
/*!***************************************************************!*\
  !*** ./components/dashboards/settings/dashboard-settings.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Lock */ "@material-ui/icons/Lock");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _privacy_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacy-settings */ "./components/dashboards/settings/privacy-settings.jsx");
/* harmony import */ var _general_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-settings */ "./components/dashboards/settings/general-settings.jsx");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\settings\\dashboard-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const TabPanel = props => {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: `full-width-tabpanel-${index}`,
    "aria-labelledby": `full-width-tab-${index}`
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, children));
};

const a11yProps = index => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
};

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  root: {
    width: 500
  }
}));

const DashboardSettings = ({
  id
}) => {
  const classes = useStyles();
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "fullWidth",
    "aria-label": "full width tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "General Settings",
    icon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    })
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "Privacy Settings",
    icon: __jsx(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    })
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })))), __jsx("div", {
    index: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(_general_settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_privacy_settings__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardSettings);

/***/ }),

/***/ "./components/dashboards/settings/general-settings.jsx":
/*!*************************************************************!*\
  !*** ./components/dashboards/settings/general-settings.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\settings\\general-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  }
}));

const GeneralSettings = ({
  id
}) => {
  const classes = useStyles();
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getInitialProps = async () => {
      try {} catch (e) {
        console.log(e);
      }
    };
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Dashboard Details")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    label: "Title",
    placeholder: "Dashboard Title",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: 10
    },
    fullWidth: true,
    label: "Description",
    placeholder: "Dashboard Description",
    multiline: true,
    rows: 2,
    rowsMax: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fullWidth: true,
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Save Changes")));
};

/* harmony default export */ __webpack_exports__["default"] = (GeneralSettings);

/***/ }),

/***/ "./components/dashboards/settings/privacy-settings.jsx":
/*!*************************************************************!*\
  !*** ./components/dashboards/settings/privacy-settings.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _collaborator_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collaborator-card */ "./components/dashboards/settings/collaborator-card.jsx");
/* harmony import */ var _add_new_collaborator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-new-collaborator */ "./components/dashboards/settings/add-new-collaborator.jsx");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\settings\\privacy-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  }
}));

const PrivacySettings = ({
  id
}) => {
  const classes = useStyles();
  const {
    0: collaborators,
    1: setCollaborators
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isAddingCollaborator,
    1: setIsAddingCollaborator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getInitialProps = async () => {
      try {
        const $collaborators = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getCollaborators({
          id
        });
        setCollaborators($collaborators);
      } catch (e) {
        console.log(e);
      }
    };

    getInitialProps();
  }, []);

  const renderButtonOrAdd = () => {
    return isAddingCollaborator ? __jsx(_add_new_collaborator__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: id,
      cancel: () => setIsAddingCollaborator(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      fullWidth: true,
      style: {
        marginBottom: 10,
        outline: 'none'
      },
      onClick: () => setIsAddingCollaborator(true),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, "Add New Collaborator");
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Collaborators")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, renderButtonOrAdd(), collaborators.map(collaborator => __jsx(_collaborator_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: collaborator.id,
    collaborator: collaborator,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivacySettings);

/***/ }),

/***/ "./components/dashboards/system-widgets.jsx":
/*!**************************************************!*\
  !*** ./components/dashboards/system-widgets.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "@material-ui/core/ExpansionPanel");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "@material-ui/core/ExpansionPanelSummary");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "@material-ui/core/ExpansionPanelDetails");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/widget-icon */ "./components/widgets/widget-icon.jsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/TableChart */ "@material-ui/icons/TableChart");
/* harmony import */ var _material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Timeline */ "@material-ui/icons/Timeline");
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/BubbleChart */ "@material-ui/icons/BubbleChart");
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/DonutLarge */ "@material-ui/icons/DonutLarge");
/* harmony import */ var _material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/PieChart */ "@material-ui/icons/PieChart");
/* harmony import */ var _material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "@material-ui/icons/BarChart");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "@material-ui/icons/ListAlt");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\system-widgets.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({}));

const SystemWidgets = props => {
  const classes = useStyles();
  const TableWidgets = [{
    title: 'Table',
    icon: __jsx(_material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    })
  }];
  const ChartWidgets = [{
    title: 'Line Chart',
    icon: __jsx(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    })
  }, {
    title: 'Bar Chart',
    icon: __jsx(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    })
  }, {
    title: 'Bubble Chart',
    icon: __jsx(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    })
  }, {
    title: 'Pie Chart',
    icon: __jsx(_material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    })
  }, {
    title: 'Donut Chart',
    icon: __jsx(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    })
  }, {
    title: 'Gantt Chart',
    icon: __jsx(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    })
  }];
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Tables")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, TableWidgets.map(chart => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onWidgetClick: props.onWidgetClick,
    icon: chart.icon,
    title: chart.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })))))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Charts")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, ChartWidgets.map(chart => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onWidgetClick: props.onWidgetClick,
    icon: chart.icon,
    title: chart.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SystemWidgets);

/***/ }),

/***/ "./components/dashboards/widgets-menu.jsx":
/*!************************************************!*\
  !*** ./components/dashboards/widgets-menu.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _system_widgets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system-widgets */ "./components/dashboards/system-widgets.jsx");
/* harmony import */ var _my_widgets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-widgets */ "./components/dashboards/my-widgets.jsx");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\widgets-menu.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const TabPanel = props => {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: `full-width-tabpanel-${index}`,
    "aria-labelledby": `full-width-tab-${index}`
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, children));
};

const a11yProps = index => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
};

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({}));

const WidgetSidemenu = ({
  onWidgetClick,
  widgetSettings,
  addPredefinedWidget
}) => {
  const classes = useStyles();
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "fullWidth",
    "aria-label": "full width tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "System Widgets"
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "My Widgets"
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })))), __jsx("div", {
    index: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_system_widgets__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onWidgetClick: onWidgetClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(_my_widgets__WEBPACK_IMPORTED_MODULE_8__["default"], {
    addPredefinedWidget: addPredefinedWidget,
    widgetSettings: widgetSettings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WidgetSidemenu);

/***/ }),

/***/ "./components/widgets/area-chart/area-chart-widget-settings.jsx":
/*!**********************************************************************!*\
  !*** ./components/widgets/area-chart/area-chart-widget-settings.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\area-chart\\area-chart-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  formControl: {
    marginTop: "15px"
  }
}));

const AreaChartWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: datasources,
    1: setDatasources
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: datasource,
    1: setDatasource
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.dataSourceId : '');
  const {
    0: docList,
    1: setDocList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: doc,
    1: setDoc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.docId : '');
  const {
    0: fieldList,
    1: setFieldList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.fields : []);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getDatasources = async () => {
    try {
      const $datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDatasources({});

      if (!isAdding) {
        const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(datasource);
        const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(datasource, doc);
        setDocList($docList);
        setFieldList($fieldList);
      }

      setDatasources($datasources);
      return $datasources;
    } catch (e) {
      console.log(e);
    }
  };

  const getDocList = async id => {
    try {
      setDatasource(id);
      const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(id);
      setDocList($docList);
      return $docList;
    } catch (e) {
      console.log(e);
    }
  };

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId);
      const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(id, docId);
      setFieldList($fieldList);
      return $fieldList;
    } catch (e) {
      console.log(e);
    }
  };

  const handleDatasourceChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getDocList(value);
  };

  const handleDocChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getFieldList(datasource, value);
  };

  const handleFieldChange = name => event => {
    const {
      checked
    } = event.target;
    checked ? setFields([...fields, name]) : setFields(fields.filter(field => field != name));
  };

  const renderFieldSettings = () => fieldList.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: undefined
    }),
    label: field,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  });

  const saveConfigSettings = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        config: {
          docId: doc,
          fields,
          type: 'simple',
          func: 'find',
          query: {}
        },
        type: 'Table'
      };

      if (isAdding) {
        onWidgetAdd(data);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDatasources();
  }, []);
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (AreaChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/area-chart/area-chart-widget.jsx":
/*!*************************************************************!*\
  !*** ./components/widgets/area-chart/area-chart-widget.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\area-chart\\area-chart-widget.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const data = [{
  year: '2010',
  android: 67225,
  ios: 46598
}, {
  year: '2011',
  android: 179873,
  ios: 90560
}, {
  year: '2012',
  android: 310088,
  ios: 118848
}, {
  year: '2015',
  android: 539318,
  ios: 189924
}];
const chartRootStyles = {
  chart: {
    paddingRight: '20px'
  }
};
const legendStyles = {
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row'
  }
};

const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1)
  }
});

const legendItemStyles = {
  item: {
    flexDirection: 'column'
  }
};

const ChartRootBase = (_ref) => {
  let {
    classes
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"].Root, _extends({}, restProps, {
    className: classes.chart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }));
};

const LegendRootBase = (_ref2) => {
  let {
    classes
  } = _ref2,
      restProps = _objectWithoutProperties(_ref2, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"].Root, _extends({}, restProps, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }));
};

const LegendLabelBase = (_ref3) => {
  let {
    classes
  } = _ref3,
      restProps = _objectWithoutProperties(_ref3, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"].Label, _extends({}, restProps, {
    className: classes.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }));
};

const LegendItemBase = (_ref4) => {
  let {
    classes
  } = _ref4,
      restProps = _objectWithoutProperties(_ref4, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"].Item, _extends({}, restProps, {
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }));
};

const ChartRoot = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(chartRootStyles, {
  name: 'ChartRoot'
})(ChartRootBase);
const LegendRoot = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(legendStyles, {
  name: 'LegendRoot'
})(LegendRootBase);
const LegendLabel = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(legendLabelStyles, {
  name: 'LegendLabel'
})(LegendLabelBase);
const LegendItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(legendItemStyles, {
  name: 'LegendItem'
})(LegendItemBase);
class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    const {
      data: chartData
    } = this.state;
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
      data: chartData,
      rootComponent: ChartRoot,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ArgumentScale"], {
      factory: d3_scale__WEBPACK_IMPORTED_MODULE_4__["scalePoint"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ArgumentAxis"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["AreaSeries"], {
      name: "Android",
      valueField: "android",
      argumentField: "year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["AreaSeries"], {
      name: "iOS",
      valueField: "ios",
      argumentField: "year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Animation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"], {
      position: "bottom",
      rootComponent: LegendRoot,
      itemComponent: LegendItem,
      labelComponent: LegendLabel,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      text: "Worldwide Sales to End Users by OS",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/widgets/area-chart/index.js":
/*!************************************************!*\
  !*** ./components/widgets/area-chart/index.js ***!
  \************************************************/
/*! exports provided: AreaChartWidget, AreaChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-chart-widget */ "./components/widgets/area-chart/area-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidget", function() { return _area_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _area_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-chart-widget-settings */ "./components/widgets/area-chart/area-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidgetSettings", function() { return _area_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/bar-chart/bar-chart-widget-settings.jsx":
/*!********************************************************************!*\
  !*** ./components/widgets/bar-chart/bar-chart-widget-settings.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\bar-chart\\bar-chart-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  formControl: {
    marginTop: "15px"
  }
}));

const BarChartWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: datasources,
    1: setDatasources
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: datasource,
    1: setDatasource
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.dataSourceId : '');
  const {
    0: docList,
    1: setDocList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: doc,
    1: setDoc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.docId : '');
  const {
    0: fieldList,
    1: setFieldList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.fields : []);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getDatasources = async () => {
    try {
      const $datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDatasources({});

      if (!isAdding) {
        const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(datasource);
        const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(datasource, doc);
        setDocList($docList);
        setFieldList($fieldList);
      }

      setDatasources($datasources);
      return $datasources;
    } catch (e) {
      console.log(e);
    }
  };

  const getDocList = async id => {
    try {
      setDatasource(id);
      const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(id);
      setDocList($docList);
      return $docList;
    } catch (e) {
      console.log(e);
    }
  };

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId);
      const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(id, docId);
      setFieldList($fieldList);
      return $fieldList;
    } catch (e) {
      console.log(e);
    }
  };

  const handleDatasourceChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getDocList(value);
  };

  const handleDocChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getFieldList(datasource, value);
  };

  const handleFieldChange = name => event => {
    const {
      checked
    } = event.target;
    checked ? setFields([...fields, name]) : setFields(fields.filter(field => field != name));
  };

  const renderFieldSettings = () => fieldList.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: undefined
    }),
    label: field,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  });

  const saveConfigSettings = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        config: {
          docId: doc,
          fields,
          type: 'simple',
          func: 'find',
          query: {}
        },
        type: 'Table'
      };

      if (isAdding) {
        onWidgetAdd(data);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDatasources();
  }, []);
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (BarChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/bar-chart/bar-chart-widget.jsx":
/*!***********************************************************!*\
  !*** ./components/widgets/bar-chart/bar-chart-widget.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "@material-ui/icons/Refresh");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _bar_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bar-chart-widget-settings */ "./components/widgets/bar-chart/bar-chart-widget-settings.jsx");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\bar-chart\\bar-chart-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500
  },
  widgetActions: {
    display: 'flex',
    backgroundColor: "#3F51B5",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px"
  },
  widgetTitle: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: "10px"
  },
  actionButtons: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const BarChartWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoadingData,
    1: setIsLoadingData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });

  const getWidgetData = async () => {
    try {
      const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].executeWidgetQuery(widgetId);
      console.log($data, $data);
      setData($data);
      return $data;
    } catch (e) {
      console.log(e);
    }
  };

  const getWidget = async () => {
    try {
      const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getWidgetSettingsById(widgetId);
      console.log('$widget', $widget);
      setWidget($widget);
      return $widget;
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getWidget();
    getWidgetData();
  }, [refresh]);

  const refreshData = async () => {
    setIsLoadingData(true);
    getWidget();
    getWidgetData();
    setIsLoadingData(false);
  };

  const handleSettingsClose = () => {
    setRefresh(refresh + 1);
    toggleDrawer('right', false);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMenuState(_objectSpread({}, menuState, {
      [side]: open
    }));
  };

  const renderChart = () => {
    return isLoadingData || !widget ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }) : __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ArgumentAxis"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"], {
      max: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["BarSeries"], {
      valueField: "total",
      argumentField: "month",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      text: "World population",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__["Animation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: undefined
    })));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetActions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Widget Title")), __jsx("div", {
    className: classes.actionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, renderChart()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(_bar_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BarChartWidget);

/***/ }),

/***/ "./components/widgets/bar-chart/index.js":
/*!***********************************************!*\
  !*** ./components/widgets/bar-chart/index.js ***!
  \***********************************************/
/*! exports provided: BarChartWidget, BarChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bar_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-chart-widget */ "./components/widgets/bar-chart/bar-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidget", function() { return _bar_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bar_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-chart-widget-settings */ "./components/widgets/bar-chart/bar-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidgetSettings", function() { return _bar_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/donut-chart/donut-chart-widget-settings.jsx":
/*!************************************************************************!*\
  !*** ./components/widgets/donut-chart/donut-chart-widget-settings.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\donut-chart\\donut-chart-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  formControl: {
    marginTop: "15px"
  }
}));

const DonutChartWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: datasources,
    1: setDatasources
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: datasource,
    1: setDatasource
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.dataSourceId : '');
  const {
    0: docList,
    1: setDocList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: doc,
    1: setDoc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.docId : '');
  const {
    0: fieldList,
    1: setFieldList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.fields : []);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getDatasources = async () => {
    try {
      const $datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDatasources({});

      if (!isAdding) {
        const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(datasource);
        const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(datasource, doc);
        setDocList($docList);
        setFieldList($fieldList);
      }

      setDatasources($datasources);
      return $datasources;
    } catch (e) {
      console.log(e);
    }
  };

  const getDocList = async id => {
    try {
      setDatasource(id);
      const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(id);
      setDocList($docList);
      return $docList;
    } catch (e) {
      console.log(e);
    }
  };

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId);
      const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(id, docId);
      setFieldList($fieldList);
      return $fieldList;
    } catch (e) {
      console.log(e);
    }
  };

  const handleDatasourceChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getDocList(value);
  };

  const handleDocChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getFieldList(datasource, value);
  };

  const handleFieldChange = name => event => {
    const {
      checked
    } = event.target;
    checked ? setFields([...fields, name]) : setFields(fields.filter(field => field != name));
  };

  const renderFieldSettings = () => fieldList.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: undefined
    }),
    label: field,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  });

  const saveConfigSettings = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        config: {
          docId: doc,
          fields,
          type: 'simple',
          func: 'find',
          query: {}
        },
        type: 'Table'
      };

      if (isAdding) {
        onWidgetAdd(data);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDatasources();
  }, []);
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (DonutChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/donut-chart/donut-chart-widget.jsx":
/*!***************************************************************!*\
  !*** ./components/widgets/donut-chart/donut-chart-widget.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "@material-ui/icons/Refresh");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _donut_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./donut-chart-widget-settings */ "./components/widgets/donut-chart/donut-chart-widget-settings.jsx");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\donut-chart\\donut-chart-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500
  },
  widgetActions: {
    display: 'flex',
    backgroundColor: "#3F51B5",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px"
  },
  widgetTitle: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: "10px"
  },
  actionButtons: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const DonutChartWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoadingData,
    1: setIsLoadingData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });

  const getWidgetData = async () => {
    try {
      const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].executeWidgetQuery(widgetId);
      console.log($data, $data);
      setData($data);
      return $data;
    } catch (e) {
      console.log(e);
    }
  };

  const getWidget = async () => {
    try {
      const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getWidgetSettingsById(widgetId);
      console.log('$widget', $widget);
      setWidget($widget);
      return $widget;
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getWidget();
    getWidgetData();
  }, [refresh]);

  const refreshData = async () => {
    setIsLoadingData(true);
    getWidget();
    getWidgetData();
    setIsLoadingData(false);
  };

  const handleSettingsClose = () => {
    setRefresh(refresh + 1);
    toggleDrawer('right', false);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMenuState(_objectSpread({}, menuState, {
      [side]: open
    }));
  };

  const renderChart = () => {
    return isLoadingData || !widget ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }) : __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["PieSeries"], {
      valueField: "total",
      argumentField: "month",
      innerRadius: 0.6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      text: "The Population of Continents and Regions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__["Animation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    })));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetActions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Widget Title")), __jsx("div", {
    className: classes.actionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, renderChart()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx(_donut_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DonutChartWidget);

/***/ }),

/***/ "./components/widgets/donut-chart/index.js":
/*!*************************************************!*\
  !*** ./components/widgets/donut-chart/index.js ***!
  \*************************************************/
/*! exports provided: DonutChartWidget, DonutChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _donut_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donut-chart-widget */ "./components/widgets/donut-chart/donut-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidget", function() { return _donut_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _donut_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donut-chart-widget-settings */ "./components/widgets/donut-chart/donut-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidgetSettings", function() { return _donut_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/index.js":
/*!*************************************!*\
  !*** ./components/widgets/index.js ***!
  \*************************************/
/*! exports provided: LineChartWidget, TableWidget, BarChartWidget, PieChartWidget, DonutChartWidget, AreaChartWidget, TableWidgetSettings, LineChartWidgetSettings, BarChartWidgetSettings, PieChartWidgetSettings, DonutChartWidgetSettings, AreaChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ "./components/widgets/table/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableWidget", function() { return _table__WEBPACK_IMPORTED_MODULE_0__["TableWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableWidgetSettings", function() { return _table__WEBPACK_IMPORTED_MODULE_0__["TableWidgetSettings"]; });

/* harmony import */ var _line_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart */ "./components/widgets/line-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidget", function() { return _line_chart__WEBPACK_IMPORTED_MODULE_1__["LineChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidgetSettings", function() { return _line_chart__WEBPACK_IMPORTED_MODULE_1__["LineChartWidgetSettings"]; });

/* harmony import */ var _bar_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar-chart */ "./components/widgets/bar-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidget", function() { return _bar_chart__WEBPACK_IMPORTED_MODULE_2__["BarChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidgetSettings", function() { return _bar_chart__WEBPACK_IMPORTED_MODULE_2__["BarChartWidgetSettings"]; });

/* harmony import */ var _pie_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie-chart */ "./components/widgets/pie-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidget", function() { return _pie_chart__WEBPACK_IMPORTED_MODULE_3__["PieChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidgetSettings", function() { return _pie_chart__WEBPACK_IMPORTED_MODULE_3__["PieChartWidgetSettings"]; });

/* harmony import */ var _donut_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donut-chart */ "./components/widgets/donut-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidget", function() { return _donut_chart__WEBPACK_IMPORTED_MODULE_4__["DonutChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidgetSettings", function() { return _donut_chart__WEBPACK_IMPORTED_MODULE_4__["DonutChartWidgetSettings"]; });

/* harmony import */ var _area_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./area-chart */ "./components/widgets/area-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidget", function() { return _area_chart__WEBPACK_IMPORTED_MODULE_5__["AreaChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidgetSettings", function() { return _area_chart__WEBPACK_IMPORTED_MODULE_5__["AreaChartWidgetSettings"]; });









/***/ }),

/***/ "./components/widgets/line-chart/index.js":
/*!************************************************!*\
  !*** ./components/widgets/line-chart/index.js ***!
  \************************************************/
/*! exports provided: LineChartWidget, LineChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-chart-widget */ "./components/widgets/line-chart/line-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidget", function() { return _line_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _line_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart-widget-settings */ "./components/widgets/line-chart/line-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidgetSettings", function() { return _line_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/line-chart/line-chart-widget-settings.jsx":
/*!**********************************************************************!*\
  !*** ./components/widgets/line-chart/line-chart-widget-settings.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\line-chart\\line-chart-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  formControl: {
    marginTop: "15px"
  }
}));

const LineChartWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: datasources,
    1: setDatasources
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: datasource,
    1: setDatasource
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.dataSourceId : '');
  const {
    0: docList,
    1: setDocList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: doc,
    1: setDoc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.docId : '');
  const {
    0: fieldList,
    1: setFieldList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.fields : []);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getDatasources = async () => {
    try {
      const $datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDatasources({});

      if (!isAdding) {
        const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(datasource);
        const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(datasource, doc);
        setDocList($docList);
        setFieldList($fieldList);
      }

      setDatasources($datasources);
      return $datasources;
    } catch (e) {
      console.log(e);
    }
  };

  const getDocList = async id => {
    try {
      setDatasource(id);
      const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(id);
      setDocList($docList);
      return $docList;
    } catch (e) {
      console.log(e);
    }
  };

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId);
      const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(id, docId);
      setFieldList($fieldList);
      return $fieldList;
    } catch (e) {
      console.log(e);
    }
  };

  const handleDatasourceChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getDocList(value);
  };

  const handleDocChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getFieldList(datasource, value);
  };

  const handleFieldChange = name => event => {
    const {
      checked
    } = event.target;
    checked ? setFields([...fields, name]) : setFields(fields.filter(field => field != name));
  };

  const renderFieldSettings = () => fieldList.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: undefined
    }),
    label: field,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  });

  const saveConfigSettings = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        config: {
          docId: doc,
          fields,
          type: 'simple',
          func: 'find',
          query: {}
        },
        type: 'Table'
      };

      if (isAdding) {
        onWidgetAdd(data);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDatasources();
  }, []);
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (LineChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/line-chart/line-chart-widget.jsx":
/*!*************************************************************!*\
  !*** ./components/widgets/line-chart/line-chart-widget.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "@material-ui/icons/Refresh");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _line_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./line-chart-widget-settings */ "./components/widgets/line-chart/line-chart-widget-settings.jsx");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\line-chart\\line-chart-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500
  },
  widgetActions: {
    display: 'flex',
    backgroundColor: "#3F51B5",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px"
  },
  widgetTitle: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: "10px"
  },
  actionButtons: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const LineChartWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoadingData,
    1: setIsLoadingData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });

  const getWidgetData = async () => {
    try {
      const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].executeWidgetQuery(widgetId);
      setData($data);
      return $data;
    } catch (e) {
      console.log(e);
    }
  };

  const getWidget = async () => {
    try {
      const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getWidgetSettingsById(widgetId);
      setWidget($widget);
      return $widget;
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getWidget();
    getWidgetData();
  }, [refresh]);

  const refreshData = async () => {
    setIsLoadingData(true);
    getWidget();
    getWidgetData();
    setIsLoadingData(false);
  };

  const handleSettingsClose = () => {
    setRefresh(refresh + 1);
    toggleDrawer('right', false);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMenuState(_objectSpread({}, menuState, {
      [side]: open
    }));
  };

  const renderTable = () => {
    return isLoadingData || !widget ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }) : __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__["ValueScale"], {
      name: "total",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ArgumentAxis"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"], {
      scaleName: "total",
      position: "left",
      showGrid: true,
      showLine: true,
      showTicks: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["LineSeries"], {
      name: "Total Transactions",
      valueField: "total",
      argumentField: "month",
      scaleName: "total",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Legend"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    })));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetActions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "Widget Title")), __jsx("div", {
    className: classes.actionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, renderTable()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(_line_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LineChartWidget);

/***/ }),

/***/ "./components/widgets/pie-chart/index.js":
/*!***********************************************!*\
  !*** ./components/widgets/pie-chart/index.js ***!
  \***********************************************/
/*! exports provided: PieChartWidget, PieChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pie_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie-chart-widget */ "./components/widgets/pie-chart/pie-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidget", function() { return _pie_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _pie_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie-chart-widget-settings */ "./components/widgets/pie-chart/pie-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidgetSettings", function() { return _pie_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/pie-chart/pie-chart-widget-settings.jsx":
/*!********************************************************************!*\
  !*** ./components/widgets/pie-chart/pie-chart-widget-settings.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\pie-chart\\pie-chart-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  formControl: {
    marginTop: "15px"
  }
}));

const PieChartWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: datasources,
    1: setDatasources
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: datasource,
    1: setDatasource
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.dataSourceId : '');
  const {
    0: docList,
    1: setDocList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: doc,
    1: setDoc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.docId : '');
  const {
    0: fieldList,
    1: setFieldList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.fields : []);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getDatasources = async () => {
    try {
      const $datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDatasources({});

      if (!isAdding) {
        const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(datasource);
        const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(datasource, doc);
        setDocList($docList);
        setFieldList($fieldList);
      }

      setDatasources($datasources);
      return $datasources;
    } catch (e) {
      console.log(e);
    }
  };

  const getDocList = async id => {
    try {
      setDatasource(id);
      const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(id);
      setDocList($docList);
      return $docList;
    } catch (e) {
      console.log(e);
    }
  };

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId);
      const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(id, docId);
      setFieldList($fieldList);
      return $fieldList;
    } catch (e) {
      console.log(e);
    }
  };

  const handleDatasourceChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getDocList(value);
  };

  const handleDocChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getFieldList(datasource, value);
  };

  const handleFieldChange = name => event => {
    const {
      checked
    } = event.target;
    checked ? setFields([...fields, name]) : setFields(fields.filter(field => field != name));
  };

  const renderFieldSettings = () => fieldList.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: undefined
    }),
    label: field,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  });

  const saveConfigSettings = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        config: {
          docId: doc,
          fields,
          type: 'simple',
          func: 'find',
          query: {}
        },
        type: 'Table'
      };

      if (isAdding) {
        onWidgetAdd(data);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDatasources();
  }, []);
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (PieChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/pie-chart/pie-chart-widget.jsx":
/*!***********************************************************!*\
  !*** ./components/widgets/pie-chart/pie-chart-widget.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "@material-ui/icons/Refresh");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _pie_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pie-chart-widget-settings */ "./components/widgets/pie-chart/pie-chart-widget-settings.jsx");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\pie-chart\\pie-chart-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500
  },
  widgetActions: {
    display: 'flex',
    backgroundColor: "#3F51B5",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px"
  },
  widgetTitle: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: "10px"
  },
  actionButtons: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const PieChartWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoadingData,
    1: setIsLoadingData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });

  const getWidgetData = async () => {
    try {
      const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].executeWidgetQuery(widgetId);
      console.log($data, $data);
      setData($data);
      return $data;
    } catch (e) {
      console.log(e);
    }
  };

  const getWidget = async () => {
    try {
      const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getWidgetSettingsById(widgetId);
      console.log('$widget', $widget);
      setWidget($widget);
      return $widget;
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getWidget();
    getWidgetData();
  }, [refresh]);

  const refreshData = async () => {
    setIsLoadingData(true);
    getWidget();
    getWidgetData();
    setIsLoadingData(false);
  };

  const handleSettingsClose = () => {
    setRefresh(refresh + 1);
    toggleDrawer('right', false);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMenuState(_objectSpread({}, menuState, {
      [side]: open
    }));
  };

  const renderChart = () => {
    return isLoadingData || !widget ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }) : __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["PieSeries"], {
      valueField: "total",
      argumentField: "month",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      text: "Area of Countries",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__["Animation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    })));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetActions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Widget Title")), __jsx("div", {
    className: classes.actionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, renderChart()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx(_pie_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PieChartWidget);

/***/ }),

/***/ "./components/widgets/table/index.js":
/*!*******************************************!*\
  !*** ./components/widgets/table/index.js ***!
  \*******************************************/
/*! exports provided: TableWidget, TableWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-widget */ "./components/widgets/table/table-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableWidget", function() { return _table_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _table_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-widget-settings */ "./components/widgets/table/table-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableWidgetSettings", function() { return _table_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/table/table-widget-settings.jsx":
/*!************************************************************!*\
  !*** ./components/widgets/table/table-widget-settings.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\table\\table-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  formControl: {
    marginTop: "15px"
  }
}));

const TableWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: datasources,
    1: setDatasources
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: datasource,
    1: setDatasource
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.dataSourceId : '');
  const {
    0: docList,
    1: setDocList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: doc,
    1: setDoc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.docId : '');
  const {
    0: fieldList,
    1: setFieldList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.fields : []);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getDatasources = async () => {
    try {
      const $datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDatasources({});

      if (!isAdding) {
        const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(datasource);
        const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(datasource, doc);
        setDocList($docList);
        setFieldList($fieldList);
      }

      setDatasources($datasources);
      return $datasources;
    } catch (e) {
      console.log(e);
    }
  };

  const getDocList = async id => {
    try {
      setDatasource(id);
      const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getDocList(id);
      setDocList($docList);
      return $docList;
    } catch (e) {
      console.log(e);
    }
  };

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId);
      const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFieldList(id, docId);
      setFieldList($fieldList);
      return $fieldList;
    } catch (e) {
      console.log(e);
    }
  };

  const handleDatasourceChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getDocList(value);
  };

  const handleDocChange = async event => {
    const {
      name,
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getFieldList(datasource, value);
  };

  const handleFieldChange = name => event => {
    const {
      checked
    } = event.target;
    checked ? setFields([...fields, name]) : setFields(fields.filter(field => field != name));
  };

  const renderFieldSettings = () => fieldList.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: undefined
    }),
    label: field,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  });

  const saveConfigSettings = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        config: {
          docId: doc,
          fields,
          type: 'simple',
          func: 'find',
          query: {}
        },
        type: 'Table'
      };

      if (isAdding) {
        onWidgetAdd(data);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDatasources();
  }, []);
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (TableWidgetSettings);

/***/ }),

/***/ "./components/widgets/table/table-widget.jsx":
/*!***************************************************!*\
  !*** ./components/widgets/table/table-widget.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-table */ "material-table");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "@material-ui/icons/Refresh");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _table_widget_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-widget-settings */ "./components/widgets/table/table-widget-settings.jsx");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\table\\table-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500
  },
  widgetActions: {
    display: 'flex',
    backgroundColor: "#3F51B5",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px"
  },
  widgetTitle: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: "10px"
  },
  actionButtons: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const TableWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoadingData,
    1: setIsLoadingData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });

  const getWidgetData = async () => {
    try {
      const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__["default"].executeWidgetQuery(widgetId);
      setData($data);
      return $data;
    } catch (e) {
      console.log(e);
    }
  };

  const getWidget = async () => {
    try {
      const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__["default"].getWidgetSettingsById(widgetId);
      setWidget($widget);
      return $widget;
    } catch (e) {
      console.log(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getWidget();
    getWidgetData();
  }, [refresh]);

  const refreshData = async () => {
    setIsLoadingData(true);
    getWidget();
    getWidgetData();
    setIsLoadingData(false);
  };

  const handleSettingsClose = () => {
    setRefresh(refresh + 1);
    toggleDrawer('right', false);
  };

  const renderTable = () => {
    return isLoadingData || !widget ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }) : __jsx(material_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
      columns: widget.config.fields.map(field => ({
        field,
        title: field
      })),
      data: data,
      title: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    });
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMenuState(_objectSpread({}, menuState, {
      [side]: open
    }));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetActions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.widgetTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Widget Title")), __jsx("div", {
    className: classes.actionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, renderTable()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(_table_widget_settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TableWidget);

/***/ }),

/***/ "./components/widgets/widget-icon.jsx":
/*!********************************************!*\
  !*** ./components/widgets/widget-icon.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\widget-icon.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    width: '100%',
    cursor: 'pointer',
    outline: 'none'
  },
  card: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15
  }
}));

const TableWidget = ({
  title,
  widget,
  icon,
  onWidgetClick,
  addPredefinedWidget
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.root,
    onClick: widget ? addPredefinedWidget.bind(undefined, widget) : onWidgetClick.bind(undefined, title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, icon, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (TableWidget);

/***/ }),

/***/ "./pages/dashboards/[id]/edit.jsx":
/*!****************************************!*\
  !*** ./pages/dashboards/[id]/edit.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-layout */ "react-grid-layout");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowLeft */ "@material-ui/icons/ArrowLeft");
/* harmony import */ var _material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Save */ "@material-ui/icons/Save");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _components_dashboards_widgets_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/dashboards/widgets-menu */ "./components/dashboards/widgets-menu.jsx");
/* harmony import */ var _components_dashboards_settings_dashboard_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/dashboards/settings/dashboard-settings */ "./components/dashboards/settings/dashboard-settings.jsx");
/* harmony import */ var _components_widgets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/widgets */ "./components/widgets/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\pages\\dashboards\\[id]\\edit.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  list: {
    width: 500
  },
  fullList: {
    width: 'auto'
  }
});

const EditDashboard = WidgetSettings => {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_18__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false,
    addWidget: false,
    settings: false
  });
  const {
    0: layout,
    1: setLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object.values(WidgetSettings));
  const {
    0: addType,
    1: setAddType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const onLayoutChange = async $event => {
    try {
      const layouts = layout.map(item => {
        const $eventItem = $event.filter($item => $item.i == item.layout.i)[0];
        return _objectSpread({}, item, {
          layout: $eventItem
        });
      });
      await Promise.all(layouts.map(item => _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__["default"].updateWidgetSettings(item.id, item)));
    } catch (err) {
      console.log(err);
    }
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMenuState(_objectSpread({}, menuState, {
      [side]: open
    }));
  };

  const decideWidget = widget => {
    switch (widget.type) {
      case 'Table':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["TableWidget"], {
          widgetId: widget.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: undefined
        });

      case 'Line Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["LineChartWidget"], {
          widgetId: widget.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: undefined
        });

      case 'Bar Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["BarChartWidget"], {
          widgetId: widget.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: undefined
        });

      case 'Pie Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["PieChartWidget"], {
          widgetId: widget.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: undefined
        });

      case 'Donut Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["DonutChartWidget"], {
          widgetId: widget.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: undefined
        });

      case 'Area Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["AreaChartWidget"], {
          widgetId: widget.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: undefined
        });
    }
  };

  const decideWidgetSettings = () => {
    switch (addType) {
      case 'Table':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["TableWidgetSettings"], {
          isAdding: true,
          onWidgetAdd: onWidgetAdd,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: undefined
        });

      case 'Line Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["LineChartWidgetSettings"], {
          isAdding: true,
          onWidgetAdd: onWidgetAdd,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: undefined
        });

      case 'Bar Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["BarChartWidgetSettings"], {
          isAdding: true,
          onWidgetAdd: onWidgetAdd,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: undefined
        });

      case 'Pie Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["PieChartWidgetSettings"], {
          isAdding: true,
          onWidgetAdd: onWidgetAdd,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: undefined
        });

      case 'Donut Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["DonutChartWidgetSettings"], {
          isAdding: true,
          onWidgetAdd: onWidgetAdd,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: undefined
        });

      case 'Area Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_17__["AreaChartWidgetSettings"], {
          isAdding: true,
          onWidgetAdd: onWidgetAdd,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: undefined
        });

      default:
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: undefined
        });
    }
  };

  const addPredefinedWidget = async (widget, _) => {
    try {
      const $widget = _objectSpread({}, widget);

      delete $widget.id;
      delete $widget.icon;
      $widget.layout.i = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
      const saveWidget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__["default"].createWidgetSettings($widget);
      await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_13__["default"].addWidgetToDashboard(id, saveWidget.id);
      setLayout([...layout, {
        layout: $widget.layout,
        type: $widget.type
      }]);
    } catch (e) {
      console.log(e);
    }
  };

  const onWidgetAdd = async config => {
    try {
      const layoutItem = _objectSpread({
        layout: {
          i: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
          x: 0,
          y: 0,
          w: 6,
          h: 11,
          maxW: 16,
          isDraggable: true,
          isResizable: true
        }
      }, config);

      const saveWidget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__["default"].createWidgetSettings(layoutItem);
      await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_13__["default"].addWidgetToDashboard(id, saveWidget.id);
      layoutItem.id = saveWidget.id;
      setLayout([...layout, layoutItem]);
    } catch (e) {
      console.log(e);
    }
  };

  const addWidget = async (type, _) => {
    setAddType(type);
    setMenuState(_objectSpread({}, menuState, {
      addWidget: true,
      right: false
    })); // try {
    //   const layoutItem = {
    //     layout: { i: uuidv4(), x: 0, y: 0, w: 6, h: 11, maxW: 16, isDraggable: true, isResizable: true },
    //     type
    //   }
    //   const saveWidget = await WidgetSettingsActions.createWidgetSettings(layoutItem)
    //   await DashboardActions.addWidgetToDashboard(id, saveWidget.id)
    //   layoutItem.id = saveWidget.id
    //   setLayout([...layout, layoutItem])
    // } catch (e) {
    //   console.log(e)
    // }
  };

  const sideList = () => __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx(_components_dashboards_widgets_menu__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onWidgetClick: addWidget,
    addPredefinedWidget: addPredefinedWidget,
    widgetSettings: Object.values(WidgetSettings),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }));

  const renderWidgets = () => layout.map((item, i) => __jsx("div", {
    key: item.layout.i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, decideWidget(item)));

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, sideList()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12___default.a, {
    anchor: "right",
    open: menuState.addWidget,
    onClose: toggleDrawer('addWidget', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, decideWidgetSettings()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12___default.a, {
    anchor: "right",
    open: menuState.settings,
    onClose: toggleDrawer('settings', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_components_dashboards_settings_dashboard_settings__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      justifySelf: 'flex-start',
      display: 'flex',
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "back",
    size: "medium",
    style: {
      outline: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }))), __jsx("div", {
    style: {
      justifySelf: 'flex-end',
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      paddingRight: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      outline: 'none'
    },
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, "Save"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      marginLeft: '10px',
      outline: 'none'
    },
    size: "small",
    onClick: toggleDrawer('right', true),
    startIcon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "Widgets"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      marginLeft: '10px',
      outline: 'none'
    },
    size: "small",
    onClick: toggleDrawer('settings', true),
    startIcon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, "Settings"))), __jsx("div", {
    style: {
      paddingBottom: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx(react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "layout",
    cols: 16,
    rowHeight: 30,
    width: 1920,
    layout: layout.map(item => item.layout),
    onLayoutChange: onLayoutChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, renderWidgets())));
};

EditDashboard.getInitialProps = async req => {
  const Authorization = next_cookies__WEBPACK_IMPORTED_MODULE_4___default()(req).id;
  const WidgetSettings = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getWidgetSettings({
    Authorization,
    id: "5e413f33f6af6d17b44df269"
  });
  return WidgetSettings;
};

/* harmony default export */ __webpack_exports__["default"] = (EditDashboard);

/***/ }),

/***/ 7:
/*!**********************************************!*\
  !*** multi ./pages/dashboards/[id]/edit.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\LoStudio\client\pages\dashboards\[id]\edit.jsx */"./pages/dashboards/[id]/edit.jsx");


/***/ }),

/***/ "@devexpress/dx-react-chart":
/*!*********************************************!*\
  !*** external "@devexpress/dx-react-chart" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-chart");

/***/ }),

/***/ "@devexpress/dx-react-chart-material-ui":
/*!*********************************************************!*\
  !*** external "@devexpress/dx-react-chart-material-ui" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-chart-material-ui");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/ExpansionPanel":
/*!***************************************************!*\
  !*** external "@material-ui/core/ExpansionPanel" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelDetails":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelDetails" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelSummary":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelSummary" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowLeft":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowLeft" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowLeft");

/***/ }),

/***/ "@material-ui/icons/BarChart":
/*!**********************************************!*\
  !*** external "@material-ui/icons/BarChart" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BarChart");

/***/ }),

/***/ "@material-ui/icons/BubbleChart":
/*!*************************************************!*\
  !*** external "@material-ui/icons/BubbleChart" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BubbleChart");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/DonutLarge":
/*!************************************************!*\
  !*** external "@material-ui/icons/DonutLarge" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DonutLarge");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/ListAlt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/ListAlt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ListAlt");

/***/ }),

/***/ "@material-ui/icons/Lock":
/*!******************************************!*\
  !*** external "@material-ui/icons/Lock" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Lock");

/***/ }),

/***/ "@material-ui/icons/PieChart":
/*!**********************************************!*\
  !*** external "@material-ui/icons/PieChart" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PieChart");

/***/ }),

/***/ "@material-ui/icons/Refresh":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Refresh" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Refresh");

/***/ }),

/***/ "@material-ui/icons/Save":
/*!******************************************!*\
  !*** external "@material-ui/icons/Save" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Save");

/***/ }),

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@material-ui/icons/TableChart":
/*!************************************************!*\
  !*** external "@material-ui/icons/TableChart" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChart");

/***/ }),

/***/ "@material-ui/icons/Timeline":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Timeline" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Timeline");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "d3-scale":
/*!***************************!*\
  !*** external "d3-scale" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "material-table":
/*!*********************************!*\
  !*** external "material-table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-grid-layout":
/*!************************************!*\
  !*** external "react-grid-layout" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-grid-layout");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=edit.js.map