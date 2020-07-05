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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

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

/***/ "./components/ApplicationMainBar.jsx":
/*!*******************************************!*\
  !*** ./components/ApplicationMainBar.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrimarySearchAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SideMenu */ "./components/SideMenu.jsx");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/ApplicationMainBar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));
function PrimarySearchAppBar() {
  const classes = useStyles();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    left: false
  });
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(_objectSpread({}, state, {
      [side]: open
    }));
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMenuOpen,
    onClose: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, "Profile"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "My account"));

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
    badgeContent: 4,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, "Messages")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "show 11 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
    badgeContent: 11,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, "Notifications")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: handleProfileMenuOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, "Profile")));

  return __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer('left', true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.title,
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, "LoStudio"), __jsx("div", {
    className: classes.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6___default.a, {
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
    badgeContent: 4,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "show 17 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
    badgeContent: 17,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_16___default.a, {
    open: state.left,
    onClose: toggleDrawer('left', false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, Object(_SideMenu__WEBPACK_IMPORTED_MODULE_17__["default"])())), renderMobileMenu, renderMenu);
}

/***/ }),

/***/ "./components/SideMenu.jsx":
/*!*********************************!*\
  !*** ./components/SideMenu.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Web */ "@material-ui/icons/Web");
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Storage */ "@material-ui/icons/Storage");
/* harmony import */ var _material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Assessment */ "@material-ui/icons/Assessment");
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Book */ "@material-ui/icons/Book");
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/SideMenu.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const SideMenu = () => {
  const classes = useStyles();
  const {
    0: dashboards,
    1: setDashboards
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: webPages,
    1: setWebPages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: routes,
    1: setRoutes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    key: "dashboards",
    text: "Dashboards",
    route: "/dashboards",
    icon: () => __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }),
    list: dashboards,
    open: false
  }, {
    key: "webpages",
    text: "Web Pages",
    route: "/webpages",
    icon: () => __jsx(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }),
    list: webPages,
    open: false
  }, {
    key: "datasources",
    text: "Data Sources",
    route: "/datasources",
    icon: () => __jsx(_material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    })
  }]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const udpateView = async () => {
      try {
        const GetDashboards = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getDashboards({});
        const GetWebPages = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getWebpages({});
        const $routes = [...routes];
        $routes[0].list = GetDashboards;
        $routes[1].list = GetWebPages;
        setRoutes([...$routes]);
      } catch (e) {
        console.log(e);
      }
    };

    udpateView();
  }, [refresh]);

  const handleChange = index => {
    const $routes = [...routes];
    $routes[index].open = !$routes[index].open;
    setRoutes([...$routes]);
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, routes.map((item, index) => item.list ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.key,
    button: true,
    onClick: () => {
      handleChange(index);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, item.icon()), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(item.route);
    },
    primary: item.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), item.open ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 30
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 47
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_15___default.a, {
    in: item.open,
    timeout: "auto",
    unmountOnExit: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "div",
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, item.list.map((e, i) => {
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: e.title + i,
      button: true,
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`${item.route}/${e.id}/edit`);
      },
      className: classes.nested,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 27
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      primary: e.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }
    }));
  })))) : __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    button: true,
    key: item.key,
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(item.route);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, item.icon()), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: item.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./components/redirectTo.js":
/*!**********************************!*\
  !*** ./components/redirectTo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return redirectTo; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

function redirectTo(destination, {
  res,
  status
} = {}) {
  if (res) {
    res.writeHead(status || 302, {
      Location: destination
    });
    res.end();
  } else {
    if (destination[0] === '/' && destination[1] !== '/') {
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(destination);
    } else {
      window.location = destination;
    }
  }
}

/***/ }),

/***/ "./node_modules/dhtmlx-gantt/codebase/dhtmlxgantt.css":
/*!************************************************************!*\
  !*** ./node_modules/dhtmlx-gantt/codebase/dhtmlxgantt.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/grapesjs/dist/css/grapes.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/grapesjs/dist/css/grapes.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-grid-layout/css/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-grid-layout/css/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-resizable/css/styles.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-resizable/css/styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoStudio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ApplicationMainBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ApplicationMainBar */ "./components/ApplicationMainBar.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_redirectTo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/redirectTo */ "./components/redirectTo.js");
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-grid-layout/css/styles.css */ "./node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-resizable/css/styles.css */ "./node_modules/react-resizable/css/styles.css");
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dhtmlx_gantt_codebase_dhtmlxgantt_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dhtmlx-gantt/codebase/dhtmlxgantt.css */ "./node_modules/dhtmlx-gantt/codebase/dhtmlxgantt.css");
/* harmony import */ var dhtmlx_gantt_codebase_dhtmlxgantt_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_gantt_codebase_dhtmlxgantt_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grapesjs/dist/css/grapes.min.css */ "./node_modules/grapesjs/dist/css/grapes.min.css");
/* harmony import */ var grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const theme = {
  primary: 'green'
};
class LoStudio extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};
    const c = next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx);
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);
    console.log(c.id);

    if (typeof c.id == 'undefined') {
      if (ctx.pathname == "/login" || ctx.pathname == "/forgot-password" || ctx.pathname == '/signup') return {
        pageProps
      };else Object(_components_redirectTo__WEBPACK_IMPORTED_MODULE_6__["default"])('/login', {
        res: ctx.res,
        status: 301
      });
    } else {
      if (ctx.pathname == "/login" || ctx.pathname == "/forgot-password" || ctx.pathname == '/signup') {
        Object(_components_redirectTo__WEBPACK_IMPORTED_MODULE_6__["default"])('/dashboards', {
          res: ctx.res,
          status: 301
        });
      }
    }

    return {
      pageProps
    };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
      theme: theme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, "LoStudio"), __jsx("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    })), __jsx(_components_ApplicationMainBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }), __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    })));
  }

}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

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

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Assessment":
/*!************************************************!*\
  !*** external "@material-ui/icons/Assessment" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assessment");

/***/ }),

/***/ "@material-ui/icons/Book":
/*!******************************************!*\
  !*** external "@material-ui/icons/Book" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Book");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/StarBorder":
/*!************************************************!*\
  !*** external "@material-ui/icons/StarBorder" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorder");

/***/ }),

/***/ "@material-ui/icons/Storage":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Storage" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Storage");

/***/ }),

/***/ "@material-ui/icons/Web":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Web" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Web");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map