module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/dashboards/add-dashboard-card.jsx":
/*!******************************************************!*\
  !*** ./components/dashboards/add-dashboard-card.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/add-dashboard-card.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  card: {
    height: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 15
  },
  media: {
    height: 140
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#3F51B5"
  }
}));

const AddDashboardCard = ({
  type,
  reloadChanges
}) => {
  const classes = useStyles();
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: "",
    type,
    description: ""
  });

  const handleChange = event => {
    const {
      name,
      value
    } = event.target;
    setState(_objectSpread({}, state, {
      [name]: value
    }));
  };

  const createProject = async () => {
    if (state.title) {
      try {
        const {
          title,
          description,
          type
        } = state;
        const project = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_13__["default"].createDashboard({
          dashboard: {
            title,
            description,
            type
          }
        });
        setState(_objectSpread({}, state, {
          title: '',
          description: ''
        }));
        reloadChanges();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, "Create new project"), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    fullWidth: true,
    required: true,
    name: "title",
    label: "Title",
    onChange: handleChange,
    value: state.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    fullWidth: true,
    multiline: true,
    name: "description",
    label: "Description",
    onChange: handleChange,
    value: state.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullWidth: true,
    color: "primary",
    onClick: createProject,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Create")));
};

/* harmony default export */ __webpack_exports__["default"] = (AddDashboardCard);

/***/ }),

/***/ "./components/dashboards/dashboard-item.jsx":
/*!**************************************************!*\
  !*** ./components/dashboards/dashboard-item.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/dashboard-item.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  media: {
    height: 140
  },
  card: {
    height: 280
  }
}));

const DashbordItem = ({
  title = "",
  description,
  id,
  permissions,
  type
}) => {
  const classes = useStyles();

  const navigateToBoard = () => {
    if (type == "webpage") next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(`/webpages/${id}/edit`);else next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(`/dashboards/${id}/edit`);
  };

  const renderButtons = () => {
    return !permissions ? __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "small",
      color: "primary",
      onClick: () => navigateToBoard(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, "Edit"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "small",
      color: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, "View")) : permissions.editor ? __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "small",
      color: "primary",
      onClick: () => navigateToBoard(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, "Edit"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "small",
      color: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, "View")) : __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "small",
      color: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, "View"));
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.media,
    image: "https://via.placeholder.com/350x150",
    title: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, description)), renderButtons());
};

/* harmony default export */ __webpack_exports__["default"] = (DashbordItem);

/***/ }),

/***/ "./components/dashboards/list-dashboards.jsx":
/*!***************************************************!*\
  !*** ./components/dashboards/list-dashboards.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dashboard_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-item */ "./components/dashboards/dashboard-item.jsx");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _add_dashboard_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-dashboard-card */ "./components/dashboards/add-dashboard-card.jsx");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/list-dashboards.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    marginTop: "25px"
  },
  cardBody: {
    padding: "10px"
  },
  cardTitle: {
    fontSize: "12px",
    backgroundColor: "#3F51B5",
    padding: "3px 3px 3px 6px",
    color: "#FFF",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
  },
  emptyCardBody: {
    padding: 10,
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    },
    borderBottom: "1px solid #DEDEDE",
    marginTop: 10,
    marginBottom: 15
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

const ListDashboards = ({
  dashboards,
  title,
  type,
  dashboardType,
  reloadChanges
}) => {
  const classes = useStyles();
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: showAddDashbaord,
    1: setShowAddDialog
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.cardTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: classes.search,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fullWidth: true,
    placeholder: "Search\u2026",
    onChange: handleChange,
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      "aria-label": "search"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), dashboards.length ? __jsx("div", {
    className: classes.cardBody,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(_add_dashboard_card__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: dashboardType,
    reloadChanges: reloadChanges,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  })), dashboards.filter(dashboard => {
    const regex = new RegExp(searchValue, "g");
    return searchValue ? regex.test(dashboard.title) : true;
  }).map((dashboard, index) => {
    const {
      title,
      description,
      id,
      permissions
    } = dashboard;
    const $type = dashboard.type;
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 3,
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 19
      }
    }, __jsx(_dashboard_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: $type,
      title: title,
      description: description,
      id: id,
      permissions: permissions,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }));
  }))) : showAddDashbaord ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 2,
    style: {
      justifyContent: "center",
      marginBottom: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx(_add_dashboard_card__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: dashboardType,
    reloadChanges: reloadChanges,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }))) : __jsx("div", {
    className: classes.emptyCardBody,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: "#DDD",
      fontSize: 128
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      color: "#DDD",
      fontSize: 32
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, "No dashboards found.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      color: "#DDD",
      fontSize: 18
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, type == "personal" ? "Create a new dashboard to be displayed here." : "When a corporation adds you to collaborate on their dashboards, they will appear here."), type == "personal" && __jsx("div", {
    style: {
      marginTop: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => {
      setShowAddDialog(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, "Get Started"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ListDashboards);

/***/ }),

/***/ "./pages/dashboards/index.tsx":
/*!************************************!*\
  !*** ./pages/dashboards/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _components_dashboards_list_dashboards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dashboards/list-dashboards */ "./components/dashboards/list-dashboards.jsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/pages/dashboards/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Dashboards = ({
  Collaborations,
  Dashboards
}) => {
  const {
    0: dashboards,
    1: setDashboards
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object.values(Dashboards));
  const collaborations = Object.values(Collaborations);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const reloadChanges = async () => {
    try {
      const getDashboards = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getDashboards({});
      setDashboards(Object.values(getDashboards));
      console.log(">> DASHBOARD RELOAD");
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    style: {
      margin: "25px auto 25px auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_components_dashboards_list_dashboards__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dashboardType: "dashboard",
    dashboards: dashboards,
    title: "My Dashboards",
    type: "personal",
    reloadChanges: reloadChanges,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(_components_dashboards_list_dashboards__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dashboardType: "dashboard",
    dashboards: collaborations,
    title: "My Collaborations",
    type: "collaborations",
    reloadChanges: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }))));
};

Dashboards.getInitialProps = async req => {
  try {
    const Authorization = next_cookies__WEBPACK_IMPORTED_MODULE_1___default()(req).id;
    const Dashboards = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getDashboards({
      Authorization
    });
    const Collaborations = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getCollaboratorations({
      Authorization
    });
    return {
      Collaborations,
      Dashboards
    };
  } catch (e) {
    return {
      Collaborations: [],
      Dashboards: []
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboards);

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./pages/dashboards/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/imustafa/Projects/LoStudio/client/pages/dashboards/index.tsx */"./pages/dashboards/index.tsx");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

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

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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

/***/ })

/******/ });
//# sourceMappingURL=dashboards.js.map