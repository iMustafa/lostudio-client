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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
  }

  static async getDashboards({
    Authorization,
    query
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      },
      params: {
        filter: {
          where: {
            isSub: false
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
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err);
  }

  static async unLinkSubDashboard({
    id,
    subDashboardId
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${API_URL}/Dashboards/${id}/subDashboards/${subDashboardId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err);
  }

  static async getSubDashboards({
    Authorization,
    id
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/${id}/subDashboards`, {
      headers: {
        Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      },
      params: {
        filter: {
          include: 'subDashboard'
        }
      }
    }).then(res => res.data).catch(err => err);
  }

  static async getDashboardById(id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/Dashboards/${id}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
      }
    }).then(res => res.data).catch(err => err.response);
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
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/my-widgets.jsx";

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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    })
  }];
  const ChartWidgets = [{
    title: 'Line Chart',
    icon: __jsx(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 34
      }
    })
  }, {
    title: 'Bar Chart',
    icon: __jsx(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 33
      }
    })
  }, {
    title: 'Bubble Chart',
    icon: __jsx(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 36
      }
    })
  }, {
    title: 'Pie Chart',
    icon: __jsx(_material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 33
      }
    })
  }, {
    title: 'Donut Chart',
    icon: __jsx(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 35
      }
    })
  }, {
    title: 'Gantt Chart',
    icon: __jsx(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 35
      }
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Tables")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, MyTableWidgets.map(widget => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: widget.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    widget: widget,
    addPredefinedWidget: addPredefinedWidget,
    icon: widget.icon,
    title: widget.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Charts")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, MyChartWidgets.map(widget => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: widget.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    widget: widget,
    addPredefinedWidget: addPredefinedWidget,
    icon: widget.icon,
    title: widget.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
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
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/settings/add-new-collaborator.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    spacing: 2,
    container: true,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 6,
    className: classes.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
    type: "email",
    onChange: handleEmailChange,
    label: "Email",
    placeholder: "example@domain.com",
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 6,
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      margin: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
      checked: permissions.viewer,
      onChange: handlePermissionsChange,
      name: "viewer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 22
      }
    }),
    label: "Editor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      margin: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
      checked: permissions.editor,
      onChange: handlePermissionsChange,
      name: "editor",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 22
      }
    }),
    label: "Viewer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    spacing: 2,
    container: true,
    style: {
      margin: 0,
      width: '100%',
      marginTop: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    onClick: cancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "Cancel")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    onClick: addCollaborator,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
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
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/settings/collaborator-card.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    spacing: 2,
    container: true,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 7,
    className: classes.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, email), sent ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 16
    }
  }, firstName, " ", lastName) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      fontSize: 11
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 16
    }
  }, "User is not registered yet. They'll recieve the collaboration invitation once they register for an account")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 22
      }
    }),
    label: "Editor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 22
      }
    }),
    label: "Viewer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 2,
    className: classes.collaboratorActionButtons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "delete",
    style: {
      outline: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
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
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _privacy_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./privacy-settings */ "./components/dashboards/settings/privacy-settings.jsx");
/* harmony import */ var _general_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-settings */ "./components/dashboards/settings/general-settings.jsx");
/* harmony import */ var _sub_boards_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub-boards-settings */ "./components/dashboards/settings/sub-boards-settings.jsx");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/settings/dashboard-settings.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    p: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 27
    }
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
  id,
  refresh,
  setRefresh
}) => {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    color: "default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "fullWidth",
    "aria-label": "full width tabs example",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "General Settings",
    icon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 47
      }
    })
  }, a11yProps(0), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "Privacy Settings",
    icon: __jsx(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 47
      }
    })
  }, a11yProps(1), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })), id == router.query.id && __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "Pages Settings",
    icon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 71
      }
    })
  }, a11yProps(2), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  })))), __jsx("div", {
    index: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_general_settings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: id,
    refresh: refresh,
    setRefresh: setRefresh,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_privacy_settings__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  })), id == router.query.id && __jsx(TabPanel, {
    value: value,
    index: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(_sub_boards_settings__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: id,
    refresh: refresh,
    setRefresh: setRefresh,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
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
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/settings/general-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










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
  id,
  refresh,
  setRefresh
}) => {
  const classes = useStyles();
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: '',
    description: ''
  });
  const {
    0: isSub,
    1: setIsSub
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showDelete,
    1: setShowDelete
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isDeleting,
    1: setIsDeleting
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isEditing,
    1: setIsEditing
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: dashboard,
    1: setDashboard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getInitialProps = async () => {
      try {
        const $dashboard = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getDashboardById(id);
        setDashboard($dashboard);
        setState(_objectSpread({}, state, {
          title: $dashboard.title,
          description: dashboard.description
        }));
        setIsSub($dashboard.isSub ? true : false);
      } catch (e) {
        console.log(e);
      }
    };

    getInitialProps();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Dashboard Details")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    label: "Title",
    value: state.title,
    placeholder: "Dashboard Title",
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginTop: 10
    },
    fullWidth: true,
    value: state.description,
    label: "Description",
    placeholder: "Dashboard Description",
    multiline: true,
    rows: 2,
    rowsMax: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullWidth: true,
    style: {
      marginTop: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Save Changes")), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Delete Project")), showDelete ? __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginTop: 10,
      padding: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, !isSub ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      fontSize: 12
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, "Confirm your delete action by typing in the dashboard title below."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      fontSize: 8,
      color: '#c0392b'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, "*Deleting this project will result in deleting all of its included pages")) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, "Confirm your delete action by typing in the dashboard title below."), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fullWidth: true,
    label: "Title",
    placeholder: dashboard.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true,
    spacing: 2,
    style: {
      marginTop: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullWidth: true,
    onClick: () => {
      setShowDelete(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, "Cancel")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullWidth: true,
    style: {
      backgroundColor: '#c0392b',
      color: '#FFF'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, "Confirm Delete")))) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullWidth: true,
    onClick: () => {
      setShowDelete(true);
    },
    style: {
      marginTop: 10,
      backgroundColor: '#c0392b',
      color: "#FFF"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Delete Project"));
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
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/settings/privacy-settings.jsx";

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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 35
      }
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      fullWidth: true,
      style: {
        marginBottom: 10,
        outline: 'none'
      },
      onClick: () => setIsAddingCollaborator(true),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, "Add New Collaborator");
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Collaborators")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, renderButtonOrAdd(), collaborators.map(collaborator => __jsx(_collaborator_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: collaborator.id,
    collaborator: collaborator,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 44
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivacySettings);

/***/ }),

/***/ "./components/dashboards/settings/sub-boards-settings.jsx":
/*!****************************************************************!*\
  !*** ./components/dashboards/settings/sub-boards-settings.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/settings/sub-boards-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const SubDashboardSettings = ({
  id,
  refresh,
  setRefresh
}) => {
  const {
    0: subDashboards,
    1: setSubDashboards
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: update,
    1: setUpdate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: isShowingAddFields,
    1: setIsShowingAddFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isAdding,
    1: setIsAdding
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: '',
    description: '',
    isSub: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getSubDashboards = async () => {
      try {
        const $subDashBoards = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getSubDashboards({
          id
        });
        setSubDashboards($subDashBoards);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    getSubDashboards();
  }, [update]);

  const addNewDashboard = async () => {
    try {
      setIsAdding(true);
      const subDashboard = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_10__["default"].createDashboard({
        dashboard: state
      });
      const linkDashboard = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_10__["default"].linkSubDashboard({
        subDashboardId: subDashboard.id,
        id
      });
      setUpdate(update + 1);
      setIsShowingAddFields(false);
      setIsAdding(false);
      setRefresh(refresh + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteSubDashboard = async subDashboardId => {
    try {
      const subDashboard = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_10__["default"].unLinkSubDashboard({
        id,
        subDashboardId
      });
      setUpdate(update + 1);
      setRefresh(refresh + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const renderSubDashboardCard = subDashboard => __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "outlined",
    key: subDashboard.id,
    style: {
      marginTop: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: subDashboard.subDashboard.title,
    subheader: subDashboard.subDashboard.createdAt,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, subDashboard.subDashboard.description)), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => {
      deleteSubDashboard(subDashboard.id);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Delete")));

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, isShowingAddFields ? __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "outlined",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    label: "Title",
    fullWidth: true,
    onChange: event => {
      setState(_objectSpread({}, state, {
        title: event.target.value
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: 10
    },
    fullWidth: true,
    label: "Description",
    multiline: true,
    rows: 2,
    rowsMax: 4,
    onChange: event => {
      setState(_objectSpread({}, state, {
        description: event.target.value
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  })), isAdding ? __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  })) : __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: addNewDashboard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "Add"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => {
      setIsShowingAddFields(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, "Cancel"))) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fullWidth: true,
    onClick: () => {
      setIsShowingAddFields(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 14
    }
  }, "Add New Page"), isLoading ? __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  })) : subDashboards.map(subDashboard => renderSubDashboardCard(subDashboard)));
};

/* harmony default export */ __webpack_exports__["default"] = (SubDashboardSettings);

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
/* harmony import */ var _material_ui_icons_TextRotationNone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/TextRotationNone */ "@material-ui/icons/TextRotationNone");
/* harmony import */ var _material_ui_icons_TextRotationNone__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TextRotationNone__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_TouchApp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/TouchApp */ "@material-ui/icons/TouchApp");
/* harmony import */ var _material_ui_icons_TouchApp__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TouchApp__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/CheckBox */ "@material-ui/icons/CheckBox");
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "@material-ui/icons/DateRange");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/FileCopy */ "@material-ui/icons/FileCopy");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Dialpad__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Dialpad */ "@material-ui/icons/Dialpad");
/* harmony import */ var _material_ui_icons_Dialpad__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dialpad__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/RadioButtonChecked */ "@material-ui/icons/RadioButtonChecked");
/* harmony import */ var _material_ui_icons_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_SelectAll__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/SelectAll */ "@material-ui/icons/SelectAll");
/* harmony import */ var _material_ui_icons_SelectAll__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SelectAll__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_TextFormat__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/TextFormat */ "@material-ui/icons/TextFormat");
/* harmony import */ var _material_ui_icons_TextFormat__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TextFormat__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_TextFields__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/TextFields */ "@material-ui/icons/TextFields");
/* harmony import */ var _material_ui_icons_TextFields__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TextFields__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_GridOn__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/GridOn */ "@material-ui/icons/GridOn");
/* harmony import */ var _material_ui_icons_GridOn__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GridOn__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/Receipt */ "@material-ui/icons/Receipt");
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/Image */ "@material-ui/icons/Image");
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/List */ "@material-ui/icons/List");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/Subject */ "@material-ui/icons/Subject");
/* harmony import */ var _material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/icons/Autorenew */ "@material-ui/icons/Autorenew");
/* harmony import */ var _material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_icons_Title__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/icons/Title */ "@material-ui/icons/Title");
/* harmony import */ var _material_ui_icons_Title__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Title__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "@material-ui/icons/ViewList");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_icons_Reorder__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/icons/Reorder */ "@material-ui/icons/Reorder");
/* harmony import */ var _material_ui_icons_Reorder__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Reorder__WEBPACK_IMPORTED_MODULE_36__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/system-widgets.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





































const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({}));

const SystemWidgets = props => {
  const classes = useStyles();
  const TableWidgets = [{
    title: 'Table',
    icon: __jsx(_material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    })
  }];
  const ChartWidgets = [{
    title: 'Line Chart',
    icon: __jsx(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 34
      }
    })
  }, {
    title: 'Bar Chart',
    icon: __jsx(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 33
      }
    })
  }, {
    title: 'Bubble Chart',
    icon: __jsx(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 36
      }
    })
  }, {
    title: 'Pie Chart',
    icon: __jsx(_material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 33
      }
    })
  }, {
    title: 'Donut Chart',
    icon: __jsx(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 35
      }
    })
  }, {
    title: 'Gantt Chart',
    icon: __jsx(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 35
      }
    })
  }];
  const FormControlsWidgets = [{
    title: 'Form Group',
    icon: __jsx(_material_ui_icons_Reorder__WEBPACK_IMPORTED_MODULE_36___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 34
      }
    })
  }, {
    title: 'Auto Complete',
    icon: __jsx(_material_ui_icons_TextRotationNone__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 37
      }
    })
  }, {
    title: 'Button',
    icon: __jsx(_material_ui_icons_TouchApp__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 30
      }
    })
  }, {
    title: 'Checkbox',
    icon: __jsx(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 32
      }
    })
  }, {
    title: 'Date Time',
    icon: __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }
    })
  }, {
    title: 'File',
    icon: __jsx(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 28
      }
    })
  }, {
    title: 'Number',
    icon: __jsx(_material_ui_icons_Dialpad__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 30
      }
    })
  }, {
    title: 'Password',
    icon: __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_23___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 32
      }
    })
  }, {
    title: 'Radio',
    icon: __jsx(_material_ui_icons_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_24___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 29
      }
    })
  }, {
    title: 'Select',
    icon: __jsx(_material_ui_icons_SelectAll__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 30
      }
    })
  }, {
    title: 'Text Area',
    icon: __jsx(_material_ui_icons_TextFormat__WEBPACK_IMPORTED_MODULE_26___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    })
  }, {
    title: 'Text Field',
    icon: __jsx(_material_ui_icons_TextFields__WEBPACK_IMPORTED_MODULE_27___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 34
      }
    })
  }];
  const HtmlElementWidgets = [{
    title: 'Accordion',
    icon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    })
  }, {
    title: 'Data Grid',
    icon: __jsx(_material_ui_icons_GridOn__WEBPACK_IMPORTED_MODULE_28___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 33
      }
    })
  }, {
    title: 'Div',
    icon: __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_29___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 27
      }
    })
  }, {
    title: 'Image',
    icon: __jsx(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_30___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    })
  }, {
    title: 'List',
    icon: __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_31___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 28
      }
    })
  }, {
    title: 'Paragraph',
    icon: __jsx(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_32___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 33
      }
    })
  }, {
    title: 'Progress Bar',
    icon: __jsx(_material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_33___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 36
      }
    })
  }, {
    title: 'Span',
    icon: __jsx(_material_ui_icons_Title__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 28
      }
    })
  }, {
    title: 'Tabs',
    icon: __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_35___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 28
      }
    })
  }];
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "Tables")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, TableWidgets.map(chart => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onWidgetClick: props.onWidgetClick,
    icon: chart.icon,
    title: chart.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Charts")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, ChartWidgets.map(chart => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onWidgetClick: props.onWidgetClick,
    icon: chart.icon,
    title: chart.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "HTML Elements")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, HtmlElementWidgets.map(element => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onWidgetClick: props.onWidgetClick,
    icon: element.icon,
    title: element.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Form Controls")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, FormControlsWidgets.map(control => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onWidgetClick: props.onWidgetClick,
    icon: control.icon,
    title: control.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
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
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/widgets-menu.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    p: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 27
    }
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    color: "default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "fullWidth",
    "aria-label": "full width tabs example",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "System Widgets"
  }, a11yProps(0), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "My Widgets"
  }, a11yProps(1), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  })))), __jsx("div", {
    index: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_system_widgets__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onWidgetClick: onWidgetClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_my_widgets__WEBPACK_IMPORTED_MODULE_8__["default"], {
    addPredefinedWidget: addPredefinedWidget,
    widgetSettings: widgetSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WidgetSidemenu);

/***/ }),

/***/ "./components/widgets/charts/area-chart/area-chart-widget-settings.jsx":
/*!*****************************************************************************!*\
  !*** ./components/widgets/charts/area-chart/area-chart-widget-settings.jsx ***!
  \*****************************************************************************/
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
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/area-chart/area-chart-widget-settings.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 57
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }),
    label: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 30
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 54
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 39
    }
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 35
    }
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (AreaChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/charts/area-chart/area-chart-widget.jsx":
/*!********************************************************************!*\
  !*** ./components/widgets/charts/area-chart/area-chart-widget.jsx ***!
  \********************************************************************/
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
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/area-chart/area-chart-widget.jsx";
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }));
};

const LegendRootBase = (_ref2) => {
  let {
    classes
  } = _ref2,
      restProps = _objectWithoutProperties(_ref2, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"].Root, _extends({}, restProps, {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  }));
};

const LegendLabelBase = (_ref3) => {
  let {
    classes
  } = _ref3,
      restProps = _objectWithoutProperties(_ref3, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"].Label, _extends({}, restProps, {
    className: classes.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 3
    }
  }));
};

const LegendItemBase = (_ref4) => {
  let {
    classes
  } = _ref4,
      restProps = _objectWithoutProperties(_ref4, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"].Item, _extends({}, restProps, {
    className: classes.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }
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
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
      data: chartData,
      rootComponent: ChartRoot,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }, __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ArgumentScale"], {
      factory: d3_scale__WEBPACK_IMPORTED_MODULE_4__["scalePoint"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ArgumentAxis"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["AreaSeries"], {
      name: "Android",
      valueField: "android",
      argumentField: "year",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["AreaSeries"], {
      name: "iOS",
      valueField: "ios",
      argumentField: "year",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Animation"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"], {
      position: "bottom",
      rootComponent: LegendRoot,
      itemComponent: LegendItem,
      labelComponent: LegendLabel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      text: "Worldwide Sales to End Users by OS",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ "./components/widgets/charts/area-chart/index.js":
/*!*******************************************************!*\
  !*** ./components/widgets/charts/area-chart/index.js ***!
  \*******************************************************/
/*! exports provided: AreaChartWidget, AreaChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-chart-widget */ "./components/widgets/charts/area-chart/area-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidget", function() { return _area_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _area_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-chart-widget-settings */ "./components/widgets/charts/area-chart/area-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidgetSettings", function() { return _area_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/charts/bar-chart/bar-chart-widget-settings.jsx":
/*!***************************************************************************!*\
  !*** ./components/widgets/charts/bar-chart/bar-chart-widget-settings.jsx ***!
  \***************************************************************************/
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
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/bar-chart/bar-chart-widget-settings.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 57
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }),
    label: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 30
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 54
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 39
    }
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 35
    }
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (BarChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/charts/bar-chart/bar-chart-widget.jsx":
/*!******************************************************************!*\
  !*** ./components/widgets/charts/bar-chart/bar-chart-widget.jsx ***!
  \******************************************************************/
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
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _bar_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bar-chart-widget-settings */ "./components/widgets/charts/bar-chart/bar-chart-widget-settings.jsx");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/bar-chart/bar-chart-widget.jsx";

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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 40
      }
    }) : __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      data: data,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ArgumentAxis"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"], {
      max: 7,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["BarSeries"], {
      valueField: "total",
      argumentField: "month",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      text: "World population",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__["Animation"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    })));
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.widgetActions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.widgetTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "Widget Title")), __jsx("div", {
    className: classes.actionButtons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, renderChart()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx(_bar_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BarChartWidget);

/***/ }),

/***/ "./components/widgets/charts/bar-chart/index.js":
/*!******************************************************!*\
  !*** ./components/widgets/charts/bar-chart/index.js ***!
  \******************************************************/
/*! exports provided: BarChartWidget, BarChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bar_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-chart-widget */ "./components/widgets/charts/bar-chart/bar-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidget", function() { return _bar_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bar_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-chart-widget-settings */ "./components/widgets/charts/bar-chart/bar-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidgetSettings", function() { return _bar_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/charts/donut-chart/donut-chart-widget-settings.jsx":
/*!*******************************************************************************!*\
  !*** ./components/widgets/charts/donut-chart/donut-chart-widget-settings.jsx ***!
  \*******************************************************************************/
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
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/donut-chart/donut-chart-widget-settings.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 57
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }),
    label: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 30
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 54
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 39
    }
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 35
    }
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (DonutChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/charts/donut-chart/donut-chart-widget.jsx":
/*!**********************************************************************!*\
  !*** ./components/widgets/charts/donut-chart/donut-chart-widget.jsx ***!
  \**********************************************************************/
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
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _donut_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./donut-chart-widget-settings */ "./components/widgets/charts/donut-chart/donut-chart-widget-settings.jsx");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/donut-chart/donut-chart-widget.jsx";

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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 40
      }
    }) : __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      data: data,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["PieSeries"], {
      valueField: "total",
      argumentField: "month",
      innerRadius: 0.6,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      text: "The Population of Continents and Regions",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__["Animation"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    })));
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.widgetActions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.widgetTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "Widget Title")), __jsx("div", {
    className: classes.actionButtons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, renderChart()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx(_donut_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DonutChartWidget);

/***/ }),

/***/ "./components/widgets/charts/donut-chart/index.js":
/*!********************************************************!*\
  !*** ./components/widgets/charts/donut-chart/index.js ***!
  \********************************************************/
/*! exports provided: DonutChartWidget, DonutChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _donut_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donut-chart-widget */ "./components/widgets/charts/donut-chart/donut-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidget", function() { return _donut_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _donut_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donut-chart-widget-settings */ "./components/widgets/charts/donut-chart/donut-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidgetSettings", function() { return _donut_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/charts/index.js":
/*!********************************************!*\
  !*** ./components/widgets/charts/index.js ***!
  \********************************************/
/*! exports provided: AreaChartWidget, AreaChartWidgetSettings, BarChartWidget, BarChartWidgetSettings, DonutChartWidget, DonutChartWidgetSettings, LineChartWidget, LineChartWidgetSettings, PieChartWidget, PieChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-chart */ "./components/widgets/charts/area-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidget", function() { return _area_chart__WEBPACK_IMPORTED_MODULE_0__["AreaChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidgetSettings", function() { return _area_chart__WEBPACK_IMPORTED_MODULE_0__["AreaChartWidgetSettings"]; });

/* harmony import */ var _bar_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-chart */ "./components/widgets/charts/bar-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidget", function() { return _bar_chart__WEBPACK_IMPORTED_MODULE_1__["BarChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidgetSettings", function() { return _bar_chart__WEBPACK_IMPORTED_MODULE_1__["BarChartWidgetSettings"]; });

/* harmony import */ var _donut_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-chart */ "./components/widgets/charts/donut-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidget", function() { return _donut_chart__WEBPACK_IMPORTED_MODULE_2__["DonutChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidgetSettings", function() { return _donut_chart__WEBPACK_IMPORTED_MODULE_2__["DonutChartWidgetSettings"]; });

/* harmony import */ var _line_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-chart */ "./components/widgets/charts/line-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidget", function() { return _line_chart__WEBPACK_IMPORTED_MODULE_3__["LineChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidgetSettings", function() { return _line_chart__WEBPACK_IMPORTED_MODULE_3__["LineChartWidgetSettings"]; });

/* harmony import */ var _pie_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pie-chart */ "./components/widgets/charts/pie-chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidget", function() { return _pie_chart__WEBPACK_IMPORTED_MODULE_4__["PieChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidgetSettings", function() { return _pie_chart__WEBPACK_IMPORTED_MODULE_4__["PieChartWidgetSettings"]; });



 // export * from './gantt-chart'




/***/ }),

/***/ "./components/widgets/charts/line-chart/index.js":
/*!*******************************************************!*\
  !*** ./components/widgets/charts/line-chart/index.js ***!
  \*******************************************************/
/*! exports provided: LineChartWidget, LineChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-chart-widget */ "./components/widgets/charts/line-chart/line-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidget", function() { return _line_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _line_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart-widget-settings */ "./components/widgets/charts/line-chart/line-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidgetSettings", function() { return _line_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/charts/line-chart/line-chart-widget-settings.jsx":
/*!*****************************************************************************!*\
  !*** ./components/widgets/charts/line-chart/line-chart-widget-settings.jsx ***!
  \*****************************************************************************/
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
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/line-chart/line-chart-widget-settings.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 57
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }),
    label: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 30
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 54
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 39
    }
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 35
    }
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, isAdding ? 'Add' : 'Save')));
};

/* harmony default export */ __webpack_exports__["default"] = (LineChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/charts/line-chart/line-chart-widget.jsx":
/*!********************************************************************!*\
  !*** ./components/widgets/charts/line-chart/line-chart-widget.jsx ***!
  \********************************************************************/
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
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _line_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./line-chart-widget-settings */ "./components/widgets/charts/line-chart/line-chart-widget-settings.jsx");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/line-chart/line-chart-widget.jsx";

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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 40
      }
    }) : __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 64
      }
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      data: data,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }
    }, __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__["ValueScale"], {
      name: "total",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ArgumentAxis"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"], {
      scaleName: "total",
      position: "left",
      showGrid: true,
      showLine: true,
      showTicks: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["LineSeries"], {
      name: "Total Transactions",
      valueField: "total",
      argumentField: "month",
      scaleName: "total",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Legend"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    })));
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.widgetActions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.widgetTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Widget Title")), __jsx("div", {
    className: classes.actionButtons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, renderTable()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_line_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LineChartWidget);

/***/ }),

/***/ "./components/widgets/charts/pie-chart/index.js":
/*!******************************************************!*\
  !*** ./components/widgets/charts/pie-chart/index.js ***!
  \******************************************************/
/*! exports provided: PieChartWidget, PieChartWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pie_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie-chart-widget */ "./components/widgets/charts/pie-chart/pie-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidget", function() { return _pie_chart_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _pie_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie-chart-widget-settings */ "./components/widgets/charts/pie-chart/pie-chart-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidgetSettings", function() { return _pie_chart_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/charts/pie-chart/pie-chart-widget-settings.jsx":
/*!***************************************************************************!*\
  !*** ./components/widgets/charts/pie-chart/pie-chart-widget-settings.jsx ***!
  \***************************************************************************/
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
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/pie-chart/pie-chart-widget-settings.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 57
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }),
    label: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 30
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 54
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data-source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item.id,
    value: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "doc-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: item,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 33
    }
  }, item)))), renderFieldSettings(), renderQuerySettings(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    onClick: saveConfigSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }, isAdding ? 'Add' : 'Save'));
};

/* harmony default export */ __webpack_exports__["default"] = (PieChartWidgetSettings);

/***/ }),

/***/ "./components/widgets/charts/pie-chart/pie-chart-widget.jsx":
/*!******************************************************************!*\
  !*** ./components/widgets/charts/pie-chart/pie-chart-widget.jsx ***!
  \******************************************************************/
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
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _pie_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pie-chart-widget-settings */ "./components/widgets/charts/pie-chart/pie-chart-widget-settings.jsx");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/charts/pie-chart/pie-chart-widget.jsx";

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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 40
      }
    }) : __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      data: data,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["PieSeries"], {
      valueField: "total",
      argumentField: "month",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      text: "Area of Countries",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_4__["Animation"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    })));
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.widgetActions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.widgetTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Widget Title")), __jsx("div", {
    className: classes.actionButtons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, renderChart()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx(_pie_chart_widget_settings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PieChartWidget);

/***/ }),

/***/ "./components/widgets/form-controls/autocomplete/autocomplete-widget-settings.jsx":
/*!****************************************************************************************!*\
  !*** ./components/widgets/form-controls/autocomplete/autocomplete-widget-settings.jsx ***!
  \****************************************************************************************/
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
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/autocomplete/autocomplete-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















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

const AutoCompleteWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: linkToFormGroup,
    1: setLinkToFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formGroups,
    1: setFormGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFormGroup,
    1: setSelectedFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: selectionOption,
    1: setSelectionOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('datasource');
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: '',
    id: '',
    name: '',
    placeholder: '',
    className: '',
    value: ''
  });
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.fields : '');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__["default"].getFormGroupWidgets();
        setFormGroups($formGroups);
      } catch (e) {
        console.log(e);
      }
    };

    getFormGroups();
  }, []);

  const handleSelectFormGroup = event => {
    const {
      value
    } = event.target;
    setSelectedFormGroup(value);
  };

  const handleLinkToFormGroup = event => {
    const {
      checked
    } = event.target;
    if (!checked) setSelectedFormGroup(null);
    setLinkToFormGroup(checked);
  };

  const renderFormGroupSelection = _ => linkToFormGroup ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "form-group-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "Form Group"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    fullWidth: true,
    labelId: "form-group-title",
    value: selectedFormGroup,
    onChange: handleSelectFormGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, formGroups.map(formGroup => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: formGroup.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, formGroup.properties.name)))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  });

  const getDatasources = async () => {
    try {
      const $datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDatasources({});

      if (!isAdding) {
        const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDocList(datasource);
        const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getFieldList(datasource, doc);
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
      const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDocList(id);
      setDocList($docList);
      return $docList;
    } catch (e) {
      console.log(e);
    }
  };

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId);
      const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getFieldList(id, docId);
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

  const handleFieldChange = event => {
    const {
      value
    } = event.target;
    setFields(value);
  };

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDatasources();
  }, []);

  const handleSourceChange = event => {
    const {
      value
    } = event.target;
    setSelectionOption(value);
  };

  const saveConfigData = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        config: {
          docId: doc,
          fields: [fields],
          type: selectionOption == 'datasource' ? 'simple' : 'constant',
          func: 'find',
          query: {},
          values: selectionOption == 'datasource' ? [] : []
        },
        properties,
        type: 'Auto Complete'
      };

      if (isAdding) {
        onWidgetAdd(data, true, selectedFormGroup);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const renderFieldSettings = () => fieldList.length ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }, "Fields Settings")), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: handleFieldChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {
      value: field,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 26
      }
    }),
    label: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Typography"], {
    style: {
      fontSize: 12,
      color: '#F00',
      marginTop: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }, "* You can only select one field in an autocomplete textfield.")) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  });

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }
  }, "Placeholder"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "placeholder",
    onChange: handlePropertiesChange,
    value: properties.placeholder,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10___default.a, {
      checked: linkToFormGroup,
      onChange: handleLinkToFormGroup,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 20
      }
    }),
    label: "Link To Form Group?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }
  })), renderFormGroupSelection(), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }, "Unique Properties")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: handleSourceChange,
    value: selectionOption,
    style: {
      justifyContent: 'space-evenly',
      width: '100%',
      flexDirection: 'row'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "datasource",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 57
      }
    }),
    label: "From Data Source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "fixed",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 52
      }
    }),
    label: "Fixed Values",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }))), selectionOption == 'datasource' ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "data-source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 15
    }
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: item.id,
    value: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 43
    }
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "doc-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 15
    }
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: item,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 39
    }
  }, item)))), renderFieldSettings()) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    style: {
      marginBottom: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/autocomplete/autocomplete-widget.jsx":
/*!*******************************************************************************!*\
  !*** ./components/widgets/form-controls/autocomplete/autocomplete-widget.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/autocomplete/autocomplete-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const AutoCompleteWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    properties: {},
    config: {
      fields: []
    }
  });
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__["default"].getWidgetSettingsById(widgetId);
        const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__["default"].executeWidgetQuery(widgetId);
        setWidget($widget);
        setData($data);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: widget.properties.id,
    placeholder: widget.properties.placeholder,
    className: widget.properties.className,
    value: widget.properties.value,
    options: data,
    getOptionLabel: option => option[widget.config.fields[0]],
    fullWidth: true,
    renderInput: params => __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
      fullWidth: true,
      name: widget.properties.name
    }, params, {
      label: widget.properties.label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteWidget);

/***/ }),

/***/ "./components/widgets/form-controls/autocomplete/index.js":
/*!****************************************************************!*\
  !*** ./components/widgets/form-controls/autocomplete/index.js ***!
  \****************************************************************/
/*! exports provided: AutoCompleteWidget, AutoCompleteWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete-widget */ "./components/widgets/form-controls/autocomplete/autocomplete-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteWidget", function() { return _autocomplete_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _autocomplete_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete-widget-settings */ "./components/widgets/form-controls/autocomplete/autocomplete-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteWidgetSettings", function() { return _autocomplete_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/button/button-widget-settings.jsx":
/*!****************************************************************************!*\
  !*** ./components/widgets/form-controls/button/button-widget-settings.jsx ***!
  \****************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-simple-code-editor */ "react-simple-code-editor");
/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prismjs/components/prism-core */ "prismjs/components/prism-core");
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prismjs/components/prism-clike */ "prismjs/components/prism-clike");
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "prismjs/components/prism-javascript");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/button/button-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















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

const ButtonWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: linkToFormGroup,
    1: setLinkToFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formGroups,
    1: setFormGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFormGroup,
    1: setSelectedFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: '',
    id: '',
    className: ''
  });
  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(`function (a, b) {
    alert(a + b)
  }`);

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_12__["default"].getFormGroupWidgets();
        setFormGroups($formGroups);
      } catch (e) {
        console.log(e);
      }
    };

    getFormGroups();
  }, []);

  const handleSelectFormGroup = event => {
    const {
      value
    } = event.target;
    setSelectedFormGroup(value);
  };

  const handleLinkToFormGroup = event => {
    const {
      checked
    } = event.target;
    if (!checked) setSelectedFormGroup(null);
    setLinkToFormGroup(checked);
  };

  const renderFormGroupSelection = _ => linkToFormGroup ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "form-group-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, "Form Group"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullWidth: true,
    labelId: "form-group-title",
    value: selectedFormGroup,
    onChange: handleSelectFormGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, formGroups.map(formGroup => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: formGroup.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, formGroup.properties.name)))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  });

  const saveConfigData = async () => {
    try {
      const data = {
        properties: _objectSpread({}, properties, {
          code
        }),
        type: 'Button'
      };

      if (isAdding) {
        onWidgetAdd(data, true, selectedFormGroup);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_12__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10___default.a, {
      checked: linkToFormGroup,
      onChange: handleLinkToFormGroup,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 20
      }
    }),
    label: "Link To Form Group?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  })), renderFormGroupSelection(), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, "Unique Properties")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, "OnClick Event"), __jsx(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_14___default.a, {
    value: code,
    onValueChange: code => setCode(code),
    highlight: code => Object(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_15__["highlight"])(code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_15__["languages"].javascript),
    padding: 10,
    style: {
      fontFamily: '"Fira code", "Fira Mono", monospace',
      fontSize: 12,
      border: '1px solid #DEDEDE'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/button/button-widget.jsx":
/*!*******************************************************************!*\
  !*** ./components/widgets/form-controls/button/button-widget.jsx ***!
  \*******************************************************************/
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
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/button/button-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const ButtonWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    properties: {}
  });
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getWidgetSettingsById(widgetId);
        console.log($widget.properties.code);
        Function($widget.properties.code)();
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: widget.properties.className,
    id: widget.properties.id,
    onClick: Function(widget.properties.code)(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, widget.properties.label);
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonWidget);

/***/ }),

/***/ "./components/widgets/form-controls/button/index.js":
/*!**********************************************************!*\
  !*** ./components/widgets/form-controls/button/index.js ***!
  \**********************************************************/
/*! exports provided: ButtonWidget, ButtonWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-widget */ "./components/widgets/form-controls/button/button-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return _button_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _button_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-widget-settings */ "./components/widgets/form-controls/button/button-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidgetSettings", function() { return _button_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/checkbox/checkbox-widget-settings.jsx":
/*!********************************************************************************!*\
  !*** ./components/widgets/form-controls/checkbox/checkbox-widget-settings.jsx ***!
  \********************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/checkbox/checkbox-widget-settings.jsx";

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

const CheckboxWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Placeholder"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Value"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Type"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/checkbox/checkbox-widget.jsx":
/*!***********************************************************************!*\
  !*** ./components/widgets/form-controls/checkbox/checkbox-widget.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/checkbox/checkbox-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const CheckboxWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        console.log($widget);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a // label={widget.config.label || ''}
  // id={widget.config.id || ''}
  // placeholder={widget.config.placeholder || ''}
  // className={widget.config.className || ''}
  // styles={widget.config.styles || {}}
  // name={widget.config.name || ''}
  // value={widget.config.value || ''}
  // type={widget.config.type || 'text'}
  , {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxWidget);

/***/ }),

/***/ "./components/widgets/form-controls/checkbox/index.js":
/*!************************************************************!*\
  !*** ./components/widgets/form-controls/checkbox/index.js ***!
  \************************************************************/
/*! exports provided: CheckboxWidget, CheckboxWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox-widget */ "./components/widgets/form-controls/checkbox/checkbox-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return _checkbox_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _checkbox_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-widget-settings */ "./components/widgets/form-controls/checkbox/checkbox-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidgetSettings", function() { return _checkbox_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/date-time/datetime-widget-settings.jsx":
/*!*********************************************************************************!*\
  !*** ./components/widgets/form-controls/date-time/datetime-widget-settings.jsx ***!
  \*********************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/date-time/datetime-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














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

const DateTimeWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: linkToFormGroup,
    1: setLinkToFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formGroups,
    1: setFormGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFormGroup,
    1: setSelectedFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: '',
    id: '',
    name: '',
    className: ''
  });

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getFormGroupWidgets();
        setFormGroups($formGroups);
      } catch (e) {
        console.log(e);
      }
    };

    getFormGroups();
  }, []);

  const handleSelectFormGroup = event => {
    const {
      value
    } = event.target;
    setSelectedFormGroup(value);
  };

  const handleLinkToFormGroup = event => {
    const {
      checked
    } = event.target;
    if (!checked) setSelectedFormGroup(null);
    setLinkToFormGroup(checked);
  };

  const renderFormGroupSelection = _ => linkToFormGroup ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "form-group-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Form Group"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    labelId: "form-group-title",
    value: selectedFormGroup,
    onChange: handleSelectFormGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, formGroups.map(formGroup => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: formGroup.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, formGroup.properties.name)))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  });

  const handleFieldChange = name => event => {
    const {
      checked
    } = event.target;
    checked ? setSelectedFileFormats([...selectedFileFormats, name]) : setSelectedFileFormats(selectedFileFormats.filter(format => format != name));
  };

  const saveConfigData = async () => {
    try {
      const data = {
        properties,
        type: 'Date Time'
      };

      if (isAdding) {
        onWidgetAdd(data, true, selectedFormGroup);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      checked: linkToFormGroup,
      onChange: handleLinkToFormGroup,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 20
      }
    }),
    label: "Link To Form Group?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  })), renderFormGroupSelection(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (DateTimeWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/date-time/datetime-widget.jsx":
/*!************************************************************************!*\
  !*** ./components/widgets/form-controls/date-time/datetime-widget.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @date-io/date-fns */ "@date-io/date-fns");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/pickers */ "@material-ui/pickers");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/date-time/datetime-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const DateTimeWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    properties: {}
  });
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  const {
    0: selectedDate,
    1: setSelectedDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getWidgetSettingsById(widgetId);
        console.log($widget);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__["KeyboardDatePicker"], {
    disableToolbar: true,
    fullWidth: true,
    name: widget.properties.name,
    variant: "inline",
    format: "MM/dd/yyyy",
    margin: "normal",
    id: widget.properties.id,
    label: widget.properties.label,
    value: selectedDate,
    onChange: handleDateChange,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DateTimeWidget);

/***/ }),

/***/ "./components/widgets/form-controls/date-time/index.js":
/*!*************************************************************!*\
  !*** ./components/widgets/form-controls/date-time/index.js ***!
  \*************************************************************/
/*! exports provided: DateTimeWidget, DateTimeWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datetime_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime-widget */ "./components/widgets/form-controls/date-time/datetime-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeWidget", function() { return _datetime_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _datetime_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime-widget-settings */ "./components/widgets/form-controls/date-time/datetime-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeWidgetSettings", function() { return _datetime_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/file/file-widget-settings.jsx":
/*!************************************************************************!*\
  !*** ./components/widgets/form-controls/file/file-widget-settings.jsx ***!
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/file/file-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














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
const acceptedFileFormats = ["text/plain", "application/pdf", "image/png", "image/tiff", "image/webp", "image/gif", "image/jpeg", "application/json", "audio/mpeg", "audio/wav", "audio/webm", "video/mpeg", "video/ogg", "video/mp2t", "video/webm", "video/3gpp", "video/3gpp2", "application/xml", "text/csv"];

const FileWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: linkToFormGroup,
    1: setLinkToFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formGroups,
    1: setFormGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFormGroup,
    1: setSelectedFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    id: '',
    name: '',
    className: ''
  });
  const {
    0: selectedFileFormats,
    1: setSelectedFileFormats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_10__["default"].getFormGroupWidgets();
        setFormGroups($formGroups);
      } catch (e) {
        console.log(e);
      }
    };

    getFormGroups();
  }, []);

  const handleSelectFormGroup = event => {
    const {
      value
    } = event.target;
    setSelectedFormGroup(value);
  };

  const handleLinkToFormGroup = event => {
    const {
      checked
    } = event.target;
    if (!checked) setSelectedFormGroup(null);
    setLinkToFormGroup(checked);
  };

  const renderFormGroupSelection = _ => linkToFormGroup ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "form-group-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "Form Group"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullWidth: true,
    labelId: "form-group-title",
    value: selectedFormGroup,
    onChange: handleSelectFormGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, formGroups.map(formGroup => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: formGroup.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, formGroup.properties.name)))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  });

  const handleFieldChange = name => event => {
    const {
      checked
    } = event.target;
    checked ? setSelectedFileFormats([...selectedFileFormats, name]) : setSelectedFileFormats(selectedFileFormats.filter(format => format != name));
  };

  const saveConfigData = async () => {
    try {
      const data = {
        properties: _objectSpread({}, properties, {
          acceptedFileFormats: selectedFileFormats
        }),
        type: 'File'
      };

      if (isAdding) {
        onWidgetAdd(data, true, selectedFormGroup);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_10__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: linkToFormGroup,
      onChange: handleLinkToFormGroup,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 20
      }
    }),
    label: "Link To Form Group?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  })), renderFormGroupSelection(), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, "Unique Properties")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, "Accepted File Formats"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
    style: {
      color: "#F00",
      fontSize: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, "*Leave blank to accept all file types."), acceptedFileFormats.map(format => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: format,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: selectedFileFormats.includes(format),
      onChange: handleFieldChange(format),
      value: format,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    }),
    label: format,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 43
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/file/file-widget.jsx":
/*!***************************************************************!*\
  !*** ./components/widgets/form-controls/file/file-widget.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/file/file-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const FileWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    properties: {
      acceptedFileFormats: []
    }
  });
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx("input", {
    type: "file",
    id: widget.properties.id,
    name: widget.properties.name,
    className: widget.properties.className,
    accept: widget.properties.acceptedFileFormats.join(','),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FileWidget);

/***/ }),

/***/ "./components/widgets/form-controls/file/index.js":
/*!********************************************************!*\
  !*** ./components/widgets/form-controls/file/index.js ***!
  \********************************************************/
/*! exports provided: FileWidget, FileWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-widget */ "./components/widgets/form-controls/file/file-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileWidget", function() { return _file_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _file_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-widget-settings */ "./components/widgets/form-controls/file/file-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileWidgetSettings", function() { return _file_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/form-group/form-group-widget-settings.jsx":
/*!************************************************************************************!*\
  !*** ./components/widgets/form-controls/form-group/form-group-widget-settings.jsx ***!
  \************************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/form-group/form-group-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











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

const FormGroupWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  const saveConfigData = async () => {
    try {
      const data = {
        properties,
        type: 'Form Group'
      };

      if (isAdding) {
        onWidgetAdd(data);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (FormGroupWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/form-group/form-group-widget.jsx":
/*!***************************************************************************!*\
  !*** ./components/widgets/form-controls/form-group/form-group-widget.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _helpers_decide_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/decide-widgets */ "./helpers/decide-widgets.jsx");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/form-group/form-group-widget.jsx";

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

const FormGroupWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    properties: {}
  });
  const {
    0: subWidgets,
    1: setSubWidgets
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getWidgetSettingsById(widgetId);
        const $subWidgets = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getSubWidgets(widgetId);
        setWidget($widget);
        setSubWidgets($subWidgets);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, subWidgets.map(subWidget => __jsx("div", {
    key: subWidget.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, Object(_helpers_decide_widgets__WEBPACK_IMPORTED_MODULE_4__["decideWidget"])(subWidget.subWidgetSettings))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormGroupWidget);

/***/ }),

/***/ "./components/widgets/form-controls/form-group/index.js":
/*!**************************************************************!*\
  !*** ./components/widgets/form-controls/form-group/index.js ***!
  \**************************************************************/
/*! exports provided: FormGroupWidget, FormGroupWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_group_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-group-widget */ "./components/widgets/form-controls/form-group/form-group-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupWidget", function() { return _form_group_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _form_group_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-group-widget-settings */ "./components/widgets/form-controls/form-group/form-group-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupWidgetSettings", function() { return _form_group_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/index.js":
/*!***************************************************!*\
  !*** ./components/widgets/form-controls/index.js ***!
  \***************************************************/
/*! exports provided: AutoCompleteWidget, AutoCompleteWidgetSettings, ButtonWidget, ButtonWidgetSettings, CheckboxWidget, CheckboxWidgetSettings, DateTimeWidget, DateTimeWidgetSettings, FileWidget, FileWidgetSettings, NumberWidget, NumberWidgetSettings, PasswordWidget, PasswordWidgetSettings, RadioWidget, RadioWidgetSettings, SelectWidget, SelectWidgetSettings, TextAreaWidget, TextAreaWidgetSettings, TextFieldWidget, TextFieldWidgetSettings, FormGroupWidget, FormGroupWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete */ "./components/widgets/form-controls/autocomplete/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteWidget", function() { return _autocomplete__WEBPACK_IMPORTED_MODULE_0__["AutoCompleteWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteWidgetSettings", function() { return _autocomplete__WEBPACK_IMPORTED_MODULE_0__["AutoCompleteWidgetSettings"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./components/widgets/form-controls/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return _button__WEBPACK_IMPORTED_MODULE_1__["ButtonWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidgetSettings", function() { return _button__WEBPACK_IMPORTED_MODULE_1__["ButtonWidgetSettings"]; });

/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox */ "./components/widgets/form-controls/checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidgetSettings", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxWidgetSettings"]; });

/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-time */ "./components/widgets/form-controls/date-time/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeWidget", function() { return _date_time__WEBPACK_IMPORTED_MODULE_3__["DateTimeWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeWidgetSettings", function() { return _date_time__WEBPACK_IMPORTED_MODULE_3__["DateTimeWidgetSettings"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file */ "./components/widgets/form-controls/file/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileWidget", function() { return _file__WEBPACK_IMPORTED_MODULE_4__["FileWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileWidgetSettings", function() { return _file__WEBPACK_IMPORTED_MODULE_4__["FileWidgetSettings"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number */ "./components/widgets/form-controls/number/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberWidget", function() { return _number__WEBPACK_IMPORTED_MODULE_5__["NumberWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberWidgetSettings", function() { return _number__WEBPACK_IMPORTED_MODULE_5__["NumberWidgetSettings"]; });

/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password */ "./components/widgets/form-controls/password/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordWidget", function() { return _password__WEBPACK_IMPORTED_MODULE_6__["PasswordWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordWidgetSettings", function() { return _password__WEBPACK_IMPORTED_MODULE_6__["PasswordWidgetSettings"]; });

/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio */ "./components/widgets/form-controls/radio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioWidget", function() { return _radio__WEBPACK_IMPORTED_MODULE_7__["RadioWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioWidgetSettings", function() { return _radio__WEBPACK_IMPORTED_MODULE_7__["RadioWidgetSettings"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./components/widgets/form-controls/select/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return _select__WEBPACK_IMPORTED_MODULE_8__["SelectWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidgetSettings", function() { return _select__WEBPACK_IMPORTED_MODULE_8__["SelectWidgetSettings"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./textarea */ "./components/widgets/form-controls/textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return _textarea__WEBPACK_IMPORTED_MODULE_9__["TextAreaWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidgetSettings", function() { return _textarea__WEBPACK_IMPORTED_MODULE_9__["TextAreaWidgetSettings"]; });

/* harmony import */ var _textfield__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./textfield */ "./components/widgets/form-controls/textfield/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextFieldWidget", function() { return _textfield__WEBPACK_IMPORTED_MODULE_10__["TextFieldWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextFieldWidgetSettings", function() { return _textfield__WEBPACK_IMPORTED_MODULE_10__["TextFieldWidgetSettings"]; });

/* harmony import */ var _form_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-group */ "./components/widgets/form-controls/form-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupWidget", function() { return _form_group__WEBPACK_IMPORTED_MODULE_11__["FormGroupWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupWidgetSettings", function() { return _form_group__WEBPACK_IMPORTED_MODULE_11__["FormGroupWidgetSettings"]; });














/***/ }),

/***/ "./components/widgets/form-controls/number/index.js":
/*!**********************************************************!*\
  !*** ./components/widgets/form-controls/number/index.js ***!
  \**********************************************************/
/*! exports provided: NumberWidget, NumberWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-widget */ "./components/widgets/form-controls/number/number-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberWidget", function() { return _number_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _number_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number-widget-settings */ "./components/widgets/form-controls/number/number-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberWidgetSettings", function() { return _number_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/number/number-widget-settings.jsx":
/*!****************************************************************************!*\
  !*** ./components/widgets/form-controls/number/number-widget-settings.jsx ***!
  \****************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/number/number-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














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

const NumberWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: linkToFormGroup,
    1: setLinkToFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formGroups,
    1: setFormGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFormGroup,
    1: setSelectedFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: '',
    id: '',
    name: '',
    placeholder: '',
    className: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getFormGroupWidgets();
        setFormGroups($formGroups);
      } catch (e) {
        console.log(e);
      }
    };

    getFormGroups();
  }, []);

  const handleSelectFormGroup = event => {
    const {
      value
    } = event.target;
    setSelectedFormGroup(value);
  };

  const handleLinkToFormGroup = event => {
    const {
      checked
    } = event.target;
    if (!checked) setSelectedFormGroup(null);
    setLinkToFormGroup(checked);
  };

  const renderFormGroupSelection = _ => linkToFormGroup ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "form-group-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Form Group"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fullWidth: true,
    labelId: "form-group-title",
    value: selectedFormGroup,
    onChange: handleSelectFormGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, formGroups.map(formGroup => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
    value: formGroup.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, formGroup.properties.name)))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  });

  const saveConfigData = async () => {
    try {
      const data = {
        properties,
        type: 'Number'
      };

      if (isAdding) {
        onWidgetAdd(data, true, selectedFormGroup);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "Placeholder"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "placeholder",
    onChange: handlePropertiesChange,
    value: properties.placeholder,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {
      checked: linkToFormGroup,
      onChange: handleLinkToFormGroup,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 20
      }
    }),
    label: "Link To Form Group?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  })), renderFormGroupSelection(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (NumberWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/number/number-widget.jsx":
/*!*******************************************************************!*\
  !*** ./components/widgets/form-controls/number/number-widget.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/number/number-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const NumberWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    properties: {}
  });
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    type: "number",
    label: widget.properties.label,
    id: widget.properties.id,
    placeholder: widget.properties.placeholder,
    className: widget.properties.className,
    value: widget.properties.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NumberWidget);

/***/ }),

/***/ "./components/widgets/form-controls/password/index.js":
/*!************************************************************!*\
  !*** ./components/widgets/form-controls/password/index.js ***!
  \************************************************************/
/*! exports provided: PasswordWidget, PasswordWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _password_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-widget */ "./components/widgets/form-controls/password/password-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordWidget", function() { return _password_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _password_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-widget-settings */ "./components/widgets/form-controls/password/password-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordWidgetSettings", function() { return _password_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/password/password-widget-settings.jsx":
/*!********************************************************************************!*\
  !*** ./components/widgets/form-controls/password/password-widget-settings.jsx ***!
  \********************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/password/password-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














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

const PasswordWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: linkToFormGroup,
    1: setLinkToFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formGroups,
    1: setFormGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFormGroup,
    1: setSelectedFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: '',
    id: '',
    name: '',
    className: ''
  });

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getFormGroupWidgets();
        setFormGroups($formGroups);
      } catch (e) {
        console.log(e);
      }
    };

    getFormGroups();
  }, []);

  const handleSelectFormGroup = event => {
    const {
      value
    } = event.target;
    setSelectedFormGroup(value);
  };

  const handleLinkToFormGroup = event => {
    const {
      checked
    } = event.target;
    if (!checked) setSelectedFormGroup(null);
    setLinkToFormGroup(checked);
  };

  const renderFormGroupSelection = _ => linkToFormGroup ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "form-group-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Form Group"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    labelId: "form-group-title",
    value: selectedFormGroup,
    onChange: handleSelectFormGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, formGroups.map(formGroup => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: formGroup.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, formGroup.properties.name)))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  });

  const saveConfigData = async () => {
    try {
      const data = {
        properties,
        type: 'Password'
      };

      if (isAdding) {
        onWidgetAdd(data, true, selectedFormGroup);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8___default.a, {
      checked: linkToFormGroup,
      onChange: handleLinkToFormGroup,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 20
      }
    }),
    label: "Link To Form Group?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  })), renderFormGroupSelection(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/password/password-widget.jsx":
/*!***********************************************************************!*\
  !*** ./components/widgets/form-controls/password/password-widget.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/password/password-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const PasswordWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    properties: {}
  });
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleChange = event => {
    const {
      value
    } = event.target;
    setValue(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getWidgetSettingsById(widgetId);
        setWidget($widget);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: widget.properties.name,
    label: widget.properties.label,
    id: widget.properties.id,
    fullWidth: true,
    onChange: handleChange,
    className: widget.properties.className,
    value: value,
    type: 'password',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordWidget);

/***/ }),

/***/ "./components/widgets/form-controls/radio/index.js":
/*!*********************************************************!*\
  !*** ./components/widgets/form-controls/radio/index.js ***!
  \*********************************************************/
/*! exports provided: RadioWidget, RadioWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-widget */ "./components/widgets/form-controls/radio/radio-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioWidget", function() { return _radio_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _radio_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-widget-settings */ "./components/widgets/form-controls/radio/radio-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioWidgetSettings", function() { return _radio_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/radio/radio-widget-settings.jsx":
/*!**************************************************************************!*\
  !*** ./components/widgets/form-controls/radio/radio-widget-settings.jsx ***!
  \**************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/radio/radio-widget-settings.jsx";

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

const RadioWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Placeholder"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Value"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Type"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/radio/radio-widget.jsx":
/*!*****************************************************************!*\
  !*** ./components/widgets/form-controls/radio/radio-widget.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/radio/radio-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const RadioWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        console.log($widget);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a // label={widget.config.label || ''}
  // id={widget.config.id || ''}
  // placeholder={widget.config.placeholder || ''}
  // className={widget.config.className || ''}
  // styles={widget.config.styles || {}}
  // name={widget.config.name || ''}
  // value={widget.config.value || ''}
  // type={widget.config.type || 'text'}
  , {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RadioWidget);

/***/ }),

/***/ "./components/widgets/form-controls/select/index.js":
/*!**********************************************************!*\
  !*** ./components/widgets/form-controls/select/index.js ***!
  \**********************************************************/
/*! exports provided: SelectWidget, SelectWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-widget */ "./components/widgets/form-controls/select/select-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return _select_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _select_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-widget-settings */ "./components/widgets/form-controls/select/select-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidgetSettings", function() { return _select_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/select/select-widget-settings.jsx":
/*!****************************************************************************!*\
  !*** ./components/widgets/form-controls/select/select-widget-settings.jsx ***!
  \****************************************************************************/
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
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/select/select-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















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

const SelectWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: '',
    id: '',
    name: '',
    className: ''
  });
  const {
    0: selectionOption,
    1: setSelectionOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('datasource');
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.fields : '');
  const {
    0: linkToFormGroup,
    1: setLinkToFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formGroups,
    1: setFormGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFormGroup,
    1: setSelectedFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const getDatasources = async () => {
    try {
      const $datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDatasources({});

      if (!isAdding) {
        const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDocList(datasource);
        const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getFieldList(datasource, doc);
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
      const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDocList(id);
      setDocList($docList);
      return $docList;
    } catch (e) {
      console.log(e);
    }
  };

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId);
      const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getFieldList(id, docId);
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

  const handleFieldChange = event => {
    const {
      value
    } = event.target;
    setFields(value);
  };

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDatasources();
  }, []);

  const handleSourceChange = event => {
    const {
      value
    } = event.target;
    setSelectionOption(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__["default"].getFormGroupWidgets();
        setFormGroups($formGroups);
      } catch (e) {
        console.log(e);
      }
    };

    getFormGroups();
  }, []);

  const handleSelectFormGroup = event => {
    const {
      value
    } = event.target;
    setSelectedFormGroup(value);
  };

  const handleLinkToFormGroup = event => {
    const {
      checked
    } = event.target;
    if (!checked) setSelectedFormGroup(null);
    setLinkToFormGroup(checked);
  };

  const renderFormGroupSelection = _ => linkToFormGroup ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "form-group-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, "Form Group"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    fullWidth: true,
    labelId: "form-group-title",
    value: selectedFormGroup,
    onChange: handleSelectFormGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, formGroups.map(formGroup => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: formGroup.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, formGroup.properties.name)))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  });

  const renderFieldSettings = () => fieldList.length ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, "Fields Settings")), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: handleFieldChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {
      value: field,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 26
      }
    }),
    label: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Typography"], {
    style: {
      fontSize: 12,
      color: '#F00',
      marginTop: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, "* You can only select one field in a select field.")) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  });

  const saveConfigData = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        config: {
          docId: doc,
          fields: [fields],
          type: selectionOption == 'datasource' ? 'simple' : 'constant',
          func: 'find',
          query: {},
          values: selectionOption == 'datasource' ? [] : []
        },
        properties,
        type: 'Select'
      };

      if (isAdding) {
        onWidgetAdd(data, true, selectedFormGroup);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10___default.a, {
      checked: linkToFormGroup,
      onChange: handleLinkToFormGroup,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 20
      }
    }),
    label: "Link To Form Group?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 9
    }
  })), renderFormGroupSelection(), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }, "Unique Properties")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: handleSourceChange,
    value: selectionOption,
    style: {
      justifyContent: 'space-evenly',
      width: '100%',
      flexDirection: 'row'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "datasource",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 57
      }
    }),
    label: "From Data Source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "fixed",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 52
      }
    }),
    label: "Fixed Values",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }))), selectionOption == 'datasource' ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "data-source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 15
    }
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: item.id,
    value: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 43
    }
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "doc-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 15
    }
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: item,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 39
    }
  }, item)))), renderFieldSettings()) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/select/select-widget.jsx":
/*!*******************************************************************!*\
  !*** ./components/widgets/form-controls/select/select-widget.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/select/select-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const SelectWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const labelId = Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    config: {},
    properties: {}
  });
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleChange = event => {
    setValue(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].getWidgetSettingsById(widgetId);
        const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].executeWidgetQuery(widgetId);
        setWidget($widget);
        setData($data);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: labelId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, widget.properties.label), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fullWidth: true,
    labelId: labelId,
    id: widget.properties.id,
    name: widget.properties.name,
    value: value,
    onChange: handleChange,
    className: widget.properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, data.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: option[widget.config.fields[0]],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, option[widget.config.fields[0]]))));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectWidget);

/***/ }),

/***/ "./components/widgets/form-controls/textarea/index.js":
/*!************************************************************!*\
  !*** ./components/widgets/form-controls/textarea/index.js ***!
  \************************************************************/
/*! exports provided: TextAreaWidget, TextAreaWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textarea_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea-widget */ "./components/widgets/form-controls/textarea/textarea-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return _textarea_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _textarea_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea-widget-settings */ "./components/widgets/form-controls/textarea/textarea-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidgetSettings", function() { return _textarea_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/textarea/textarea-widget-settings.jsx":
/*!********************************************************************************!*\
  !*** ./components/widgets/form-controls/textarea/textarea-widget-settings.jsx ***!
  \********************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/textarea/textarea-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














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

const TextAreaWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: linkToFormGroup,
    1: setLinkToFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formGroups,
    1: setFormGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFormGroup,
    1: setSelectedFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: '',
    id: '',
    name: '',
    className: ''
  });

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getFormGroupWidgets();
        setFormGroups($formGroups);
      } catch (e) {
        console.log(e);
      }
    };

    getFormGroups();
  }, []);

  const handleSelectFormGroup = event => {
    const {
      value
    } = event.target;
    setSelectedFormGroup(value);
  };

  const handleLinkToFormGroup = event => {
    const {
      checked
    } = event.target;
    if (!checked) setSelectedFormGroup(null);
    setLinkToFormGroup(checked);
  };

  const renderFormGroupSelection = _ => linkToFormGroup ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "form-group-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Form Group"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    labelId: "form-group-title",
    value: selectedFormGroup,
    onChange: handleSelectFormGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, formGroups.map(formGroup => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: formGroup.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, formGroup.properties.name)))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  });

  const saveConfigData = async () => {
    try {
      const data = {
        properties,
        type: 'Text Area'
      };

      if (isAdding) {
        onWidgetAdd(data, true, selectedFormGroup);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8___default.a, {
      checked: linkToFormGroup,
      onChange: handleLinkToFormGroup,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 20
      }
    }),
    label: "Link To Form Group?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  })), renderFormGroupSelection(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAreaWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/textarea/textarea-widget.jsx":
/*!***********************************************************************!*\
  !*** ./components/widgets/form-controls/textarea/textarea-widget.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/textarea/textarea-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const TextAreaWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    properties: {}
  });
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleChange = event => {
    const {
      value
    } = event.target;
    setValue(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getWidgetSettingsById(widgetId);
        setWidget($widget);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: widget.properties.name,
    label: widget.properties.label,
    id: widget.properties.id,
    fullWidth: true,
    onChange: handleChange,
    className: widget.properties.className,
    value: value,
    multiline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TextAreaWidget);

/***/ }),

/***/ "./components/widgets/form-controls/textfield/index.js":
/*!*************************************************************!*\
  !*** ./components/widgets/form-controls/textfield/index.js ***!
  \*************************************************************/
/*! exports provided: TextFieldWidget, TextFieldWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_field_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-field-widget */ "./components/widgets/form-controls/textfield/text-field-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextFieldWidget", function() { return _text_field_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _text_field_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-field-widget-settings */ "./components/widgets/form-controls/textfield/text-field-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextFieldWidgetSettings", function() { return _text_field_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/form-controls/textfield/text-field-widget-settings.jsx":
/*!***********************************************************************************!*\
  !*** ./components/widgets/form-controls/textfield/text-field-widget-settings.jsx ***!
  \***********************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/textfield/text-field-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














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

const TextFieldWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: linkToFormGroup,
    1: setLinkToFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formGroups,
    1: setFormGroups
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedFormGroup,
    1: setSelectedFormGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: properties,
    1: setProperties
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: '',
    id: '',
    name: '',
    className: ''
  });

  const handlePropertiesChange = event => {
    const {
      name,
      value
    } = event.target;
    setProperties(_objectSpread({}, properties, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getFormGroupWidgets();
        setFormGroups($formGroups);
      } catch (e) {
        console.log(e);
      }
    };

    getFormGroups();
  }, []);

  const handleSelectFormGroup = event => {
    const {
      value
    } = event.target;
    setSelectedFormGroup(value);
  };

  const handleLinkToFormGroup = event => {
    const {
      checked
    } = event.target;
    if (!checked) setSelectedFormGroup(null);
    setLinkToFormGroup(checked);
  };

  const renderFormGroupSelection = _ => linkToFormGroup ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "form-group-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Form Group"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    labelId: "form-group-title",
    value: selectedFormGroup,
    onChange: handleSelectFormGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, formGroups.map(formGroup => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: formGroup.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, formGroup.properties.name)))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  });

  const saveConfigData = async () => {
    try {
      const data = {
        properties,
        type: 'Text Field'
      };

      if (isAdding) {
        onWidgetAdd(data, true, selectedFormGroup);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      checked: linkToFormGroup,
      onChange: handleLinkToFormGroup,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 20
      }
    }),
    label: "Link To Form Group?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  })), renderFormGroupSelection(), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: saveConfigData,
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (TextFieldWidgetSettings);

/***/ }),

/***/ "./components/widgets/form-controls/textfield/text-field-widget.jsx":
/*!**************************************************************************!*\
  !*** ./components/widgets/form-controls/textfield/text-field-widget.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/textfield/text-field-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const TextFieldWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    properties: {}
  });
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleChange = event => {
    const {
      value
    } = event.target;
    setValue(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getWidgetSettingsById(widgetId);
        setWidget($widget);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: widget.properties.name,
    label: widget.properties.label,
    id: widget.properties.id,
    fullWidth: true,
    onChange: handleChange,
    className: widget.properties.className,
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TextFieldWidget);

/***/ }),

/***/ "./components/widgets/helpers/connection-settings/connection-settings.jsx":
/*!********************************************************************************!*\
  !*** ./components/widgets/helpers/connection-settings/connection-settings.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _database_connection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database-connection */ "./components/widgets/helpers/connection-settings/database-connection.jsx");
/* harmony import */ var _http_connection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http-connection */ "./components/widgets/helpers/connection-settings/http-connection.jsx");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/helpers/connection-settings/connection-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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
});

const ConnectionSettings = ({
  connectionMethod,
  setConnectionMethod,
  isAdding,
  setDoc,
  setDatasource,
  setFields,
  doc,
  datasource,
  fields,
  primaryKey,
  setPrimaryKey,
  url,
  setURL,
  headers,
  setHeaders,
  method,
  setMethod,
  body,
  setBody,
  query,
  setQuery
}) => {
  const classes = useStyles();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Connection Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Connection Method"), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    value: connectionMethod,
    onChange: event => setConnectionMethod(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    value: "database",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 55
      }
    }),
    label: "Database",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    value: "http",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 51
      }
    }),
    label: "HTTP",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }))), connectionMethod == 'database' ? __jsx(_database_connection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isAdding: isAdding,
    setDoc: setDoc,
    setDatasource: setDatasource,
    setFields: setFields,
    doc: doc,
    datasource: datasource,
    fields: fields,
    primaryKey: primaryKey,
    setPrimaryKey: setPrimaryKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }) : __jsx(_http_connection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    url: url,
    setURL: setURL,
    headers: headers,
    setHeaders: setHeaders,
    method: method,
    setMethod: setMethod,
    body: body,
    setBody: setBody,
    query: query,
    setQuery: setQuery,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConnectionSettings);

/***/ }),

/***/ "./components/widgets/helpers/connection-settings/database-connection.jsx":
/*!********************************************************************************!*\
  !*** ./components/widgets/helpers/connection-settings/database-connection.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/helpers/connection-settings/database-connection.jsx";

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

const DatabaseConnection = ({
  isAdding,
  setDoc,
  setDatasource,
  setFields,
  doc,
  datasource,
  fields,
  primaryKey,
  setPrimaryKey
}) => {
  const classes = useStyles();
  const {
    0: datasources,
    1: setDatasources
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: docList,
    1: setDocList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: fieldList,
    1: setFieldList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getDatasources = async () => {
    try {
      const $datasources = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_8__["default"].getDatasources({});

      if (!isAdding) {
        const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_8__["default"].getDocList(datasource);
        const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_8__["default"].getFieldList(datasource, doc);
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
      const $docList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_8__["default"].getDocList(id);
      setDocList($docList);
      return $docList;
    } catch (e) {
      console.log(e);
    }
  };

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId);
      const $fieldList = await _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_8__["default"].getFieldList(id, docId);
      setFieldList($fieldList);
      return $fieldList;
    } catch (e) {
      console.log(e);
    }
  };

  const handleDatasourceChange = async event => {
    const {
      value
    } = event.target;
    setFieldList([]);
    setFields([]);
    await getDocList(value);
  };

  const handleDocChange = async event => {
    const {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 57
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, "Fields Settings")), fieldList.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }),
    label: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 30
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "primary-key",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, "Primary Key"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    name: "primaryKey",
    labelId: "primary-key",
    value: primaryKey,
    onChange: event => setPrimaryKey(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, fields.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: item,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 30
    }
  }, item))))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  });

  const renderQuerySettings = () => fields.length ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 54
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, "Query Settings")), fields.map(field => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  });

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getDatasources();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "data-source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, datasources.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: item.id,
    value: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 37
    }
  }, item.title)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "doc-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, docList.map(item => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: item,
    value: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 33
    }
  }, item)))), renderFieldSettings(), renderQuerySettings());
};

/* harmony default export */ __webpack_exports__["default"] = (DatabaseConnection);

/***/ }),

/***/ "./components/widgets/helpers/connection-settings/http-connection.jsx":
/*!****************************************************************************!*\
  !*** ./components/widgets/helpers/connection-settings/http-connection.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Save */ "@material-ui/icons/Save");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "@material-ui/icons/Cancel");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/helpers/connection-settings/http-connection.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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
});
const httpMethods = [{
  value: 'get',
  title: 'Get'
}, {
  value: 'post',
  title: 'Post'
}, {
  value: 'put',
  title: 'Put'
}, {
  value: 'patch',
  title: 'Patch'
}, {
  value: 'head',
  title: 'Head'
}, {
  value: 'delete',
  title: 'Delete'
}];

const HTTPConnection = ({
  url,
  setURL,
  method,
  setMethod,
  headers,
  setHeaders,
  body,
  setBody,
  query,
  setQuery
}) => {
  const classes = useStyles();
  const {
    0: requestHeader,
    1: setRequestHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    key: '',
    value: ''
  });
  const {
    0: isAddingRequestHeader,
    1: setIsAddingRequestHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: queryParam,
    1: setQueryParam
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    key: '',
    value: ''
  });
  const {
    0: isAddingRequestQueryParam,
    1: setIsAddingQueryParam
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: bodyParam,
    1: setBodyParam
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    key: '',
    value: ''
  });
  const {
    0: isAddingRequestBodyParam,
    1: setIsAddingRequestBodyParam
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const renderRequestHeader = header => {};

  const renderQueryParameter = queryParameter => {};

  const renderBodyParameter = bodyParameter => {};

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Request URL"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    value: url,
    onChange: event => {
      setURL(event.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "http-method-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Request Method"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default.a, {
    value: method,
    onChange: event => {
      setMethod(event.target.value);
    },
    labelId: "http-method-label",
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, httpMethods.map(m => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
    value: m.value,
    key: m.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 34
    }
  }, m.title)))), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Request Headers")), isAddingRequestHeader ? __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: 15,
      marginBottom: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 6,
    style: {
      paddingLeft: 10,
      paddingRight: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }, "Key"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onChange: event => {
      setRequestHeader(_objectSpread({}, requestHeader, {
        key: event.target.value
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 6,
    style: {
      paddingLeft: 10,
      paddingRight: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, "Value"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onChange: event => {
      setRequestHeader(_objectSpread({}, requestHeader, {
        value: event.target.value
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 0,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fullWidth: true,
    onClick: () => {
      setIsAddingRequestHeader(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14___default.a, {
    style: {
      color: "#F00"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, "Cancel"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default.a, {
    style: {
      color: "#3F51B5"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, "Save"))))) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fullWidth: true,
    onClick: () => {
      setIsAddingRequestHeader(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "Add"), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, "Request Query Parameters")), isAddingRequestQueryParam ? __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: 15,
      marginBottom: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    style: {
      paddingLeft: 10,
      paddingRight: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, "Key"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onChange: event => {
      setQueryParam(_objectSpread({}, queryParam, {
        key: event.target.value
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    style: {
      paddingLeft: 10,
      paddingRight: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, "Value"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onChange: event => {
      setQueryParam(_objectSpread({}, queryParam, {
        value: event.target.value
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 0,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fullWidth: true,
    onClick: () => {
      setIsAddingQueryParam(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14___default.a, {
    style: {
      color: "#F00"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, "Cancel"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default.a, {
    style: {
      color: "#3F51B5"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }, "Save"))))) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fullWidth: true,
    onClick: () => {
      setIsAddingQueryParam(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, "Add"));
};

/* harmony default export */ __webpack_exports__["default"] = (HTTPConnection);

/***/ }),

/***/ "./components/widgets/helpers/connection-settings/index.js":
/*!*****************************************************************!*\
  !*** ./components/widgets/helpers/connection-settings/index.js ***!
  \*****************************************************************/
/*! exports provided: ConnectionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connection_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-settings */ "./components/widgets/helpers/connection-settings/connection-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionSettings", function() { return _connection_settings__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./components/widgets/helpers/index.js":
/*!*********************************************!*\
  !*** ./components/widgets/helpers/index.js ***!
  \*********************************************/
/*! exports provided: MeasureConditionItem, ListMeasureCondition, AddMeasureCondition, ConnectionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _measure_conditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./measure-conditions */ "./components/widgets/helpers/measure-conditions/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeasureConditionItem", function() { return _measure_conditions__WEBPACK_IMPORTED_MODULE_0__["MeasureConditionItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListMeasureCondition", function() { return _measure_conditions__WEBPACK_IMPORTED_MODULE_0__["ListMeasureCondition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddMeasureCondition", function() { return _measure_conditions__WEBPACK_IMPORTED_MODULE_0__["AddMeasureCondition"]; });

/* harmony import */ var _connection_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection-settings */ "./components/widgets/helpers/connection-settings/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionSettings", function() { return _connection_settings__WEBPACK_IMPORTED_MODULE_1__["ConnectionSettings"]; });




/***/ }),

/***/ "./components/widgets/helpers/measure-conditions/add-measure-condition.jsx":
/*!*********************************************************************************!*\
  !*** ./components/widgets/helpers/measure-conditions/add-measure-condition.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Save */ "@material-ui/icons/Save");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "@material-ui/icons/Cancel");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helpers_css_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helpers/css-colors */ "./helpers/css-colors.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _helpers_measure_conditions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../helpers/measure-conditions */ "./helpers/measure-conditions.js");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/helpers/measure-conditions/add-measure-condition.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const AddMeasureCondition = ({
  widget,
  setIsAddingMeasureCondition,
  setRefresh,
  refresh
}) => {
  const {
    0: measureConditionsFields,
    1: updateMeasureConditionsFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(widget.config.fields);
  const {
    0: showSpinner,
    1: setShowSpinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = event => {
    const {
      name,
      value
    } = event.target;
    updateMeasureConditionsFields(_objectSpread({}, measureConditionsFields, {
      [name]: value
    }));
  };

  const addMeasureCondition = async () => {
    try {
      setShowSpinner(true);
      const measureCondition = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_15__["default"].createWidgetSettingsMeasureConditions(widget.id, measureConditionsFields);
      setShowSpinner(false);
      setIsAddingMeasureCondition(false);
      setRefresh(refresh + 1);
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      padding: 15,
      marginBottom: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    style: {
      paddingLeft: 5,
      paddingRight: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "field-select-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Field"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    labelId: "field-select-label",
    value: measureConditionsFields.field,
    onChange: handleChange,
    name: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, fields.map(field => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: field,
    value: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 36
    }
  }, field))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    style: {
      paddingLeft: 5,
      paddingRight: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "expression-select-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Expression"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    labelId: "expression-select-label",
    value: measureConditionsFields.expression,
    onChange: handleChange,
    name: "expression",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, _helpers_measure_conditions__WEBPACK_IMPORTED_MODULE_16__["conditionCases"].map(conditionCase => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: conditionCase.title,
    value: conditionCase.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 52
    }
  }, conditionCase.friendlyName))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    style: {
      paddingLeft: 5,
      paddingRight: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_14___default.a, {
    fullWidth: true,
    options: _helpers_css_colors__WEBPACK_IMPORTED_MODULE_13__["default"],
    renderInput: params => __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({
      fullWidth: true,
      name: "color"
    }, params, {
      label: "Color",
      onChange: handleChange,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    style: {
      marginTop: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    style: {
      paddingLeft: 5,
      paddingRight: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    type: "number",
    label: "Minimum Value",
    onChange: handleChange,
    name: "minValue",
    value: measureConditionsFields.minValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    style: {
      paddingLeft: 5,
      paddingRight: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    type: "number",
    name: "maxValue",
    onChange: handleChange,
    label: "Maximum Value",
    value: measureConditionsFields.maxValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 0,
    style: {
      marginTop: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    onClick: () => {
      setIsAddingMeasureCondition(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      color: '#F00'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      marginLeft: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "Cancel"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, showSpinner ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullWidth: true,
    onClick: addMeasureCondition,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      color: '#3F51B5'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      marginLeft: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, "Save")))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddMeasureCondition);

/***/ }),

/***/ "./components/widgets/helpers/measure-conditions/index.js":
/*!****************************************************************!*\
  !*** ./components/widgets/helpers/measure-conditions/index.js ***!
  \****************************************************************/
/*! exports provided: MeasureConditionItem, ListMeasureCondition, AddMeasureCondition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _measure_conditions_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./measure-conditions-item */ "./components/widgets/helpers/measure-conditions/measure-conditions-item.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeasureConditionItem", function() { return _measure_conditions_item__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _measure_conditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./measure-conditions */ "./components/widgets/helpers/measure-conditions/measure-conditions.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListMeasureCondition", function() { return _measure_conditions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _add_measure_condition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-measure-condition */ "./components/widgets/helpers/measure-conditions/add-measure-condition.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddMeasureCondition", function() { return _add_measure_condition__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./components/widgets/helpers/measure-conditions/measure-conditions-item.jsx":
/*!***********************************************************************************!*\
  !*** ./components/widgets/helpers/measure-conditions/measure-conditions-item.jsx ***!
  \***********************************************************************************/
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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "@material-ui/icons/ArrowUpward");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "@material-ui/icons/ArrowDownward");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/helpers/measure-conditions/measure-conditions-item.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  measureConditionFieldTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});

const MeasureConditionItem = ({
  widget,
  measureCondition,
  key,
  setRefresh,
  refresh
}) => {
  const classes = useStyles();
  const {
    0: showSpinner,
    1: setShowSpinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const removeMeasureCondition = async () => {
    try {
      setShowSpinner(true);
      const $measureCondition = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].deleteWidgetSettingsMeasureConditions(widget.id, measureCondition.id);
      setShowSpinner(false);
      setRefresh(refresh + 1);
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      padding: 15,
      marginBottom: 15
    },
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.measureConditionFieldTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Field"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, measureCondition.field)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.measureConditionFieldTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Expression"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, measureCondition.expression)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.measureConditionFieldTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Color"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, measureCondition.color))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 0,
    style: {
      marginTop: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 6,
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, measureCondition.minValue)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 6,
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, measureCondition.maxValue))), showSpinner ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 0,
    style: {
      marginTop: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fullWidth: true,
    onClick: removeMeasureCondition,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      color: '#F00'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginLeft: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, "Delete"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: '#3F51B5'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginLeft: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, "Edit")))));
};

/* harmony default export */ __webpack_exports__["default"] = (MeasureConditionItem);

/***/ }),

/***/ "./components/widgets/helpers/measure-conditions/measure-conditions.jsx":
/*!******************************************************************************!*\
  !*** ./components/widgets/helpers/measure-conditions/measure-conditions.jsx ***!
  \******************************************************************************/
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
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _measure_conditions_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./measure-conditions-item */ "./components/widgets/helpers/measure-conditions/measure-conditions-item.jsx");
/* harmony import */ var _add_measure_condition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-measure-condition */ "./components/widgets/helpers/measure-conditions/add-measure-condition.jsx");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/helpers/measure-conditions/measure-conditions.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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
});

const ListMeasureConditions = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: isAddingMeasureCondition,
    1: setIsAddingMeasureCondition
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: measureConditions,
    1: setMeasureConditions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getMeasureConditions = async () => {
      try {
        const $measureConditions = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getWidgetSettingsMeasureConditions(widget.id);
        setMeasureConditions($measureConditions);
      } catch (e) {
        console.log(e);
      }
    };

    getMeasureConditions();
  }, [refresh]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Measure Conditions")), isAddingMeasureCondition ? __jsx(_add_measure_condition__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setRefresh: setRefresh,
    refresh: refresh,
    widget: widget,
    setIsAddingMeasureCondition: setIsAddingMeasureCondition,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    style: {
      marginBottom: 15
    },
    onClick: () => {
      setIsAddingMeasureCondition(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Add Measure Condition"), measureConditions.map(measureCondition => __jsx(_measure_conditions_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setRefresh: setRefresh,
    refresh: refresh,
    widget: widget,
    key: measureCondition.id,
    measureCondition: measureCondition,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ListMeasureConditions);

/***/ }),

/***/ "./components/widgets/html-elements/accordion/accordion-widget-settings.jsx":
/*!**********************************************************************************!*\
  !*** ./components/widgets/html-elements/accordion/accordion-widget-settings.jsx ***!
  \**********************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/accordion/accordion-widget-settings.jsx";

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

const AccordionWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionWidgetSettings);

/***/ }),

/***/ "./components/widgets/html-elements/accordion/accordion-widget.jsx":
/*!*************************************************************************!*\
  !*** ./components/widgets/html-elements/accordion/accordion-widget.jsx ***!
  \*************************************************************************/
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
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "@material-ui/core/ExpansionPanelDetails");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "@material-ui/core/ExpansionPanelSummary");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/accordion/accordion-widget.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

const AccordionWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [widget, setWidget] = useState(null);
  const [menuState, setMenuState] = useState({
    right: false
  });

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const expansionPanelItem = ({
    id,
    title,
    description,
    innerHTML,
    text
  }) => {
    return __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
      expanded: expanded === id,
      onChange: handleChange(id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {
      expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 44
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.heading,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.secondaryHeading,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, description)), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, text)));
  };

  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, expansionPanelItem({
    id: 1,
    title: 'Test',
    description: 'Description',
    text: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionWidget);

/***/ }),

/***/ "./components/widgets/html-elements/accordion/index.js":
/*!*************************************************************!*\
  !*** ./components/widgets/html-elements/accordion/index.js ***!
  \*************************************************************/
/*! exports provided: AccordionWidget, AccordionWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion-widget */ "./components/widgets/html-elements/accordion/accordion-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionWidget", function() { return _accordion_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _accordion_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion-widget-settings */ "./components/widgets/html-elements/accordion/accordion-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionWidgetSettings", function() { return _accordion_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/html-elements/data-grid/data-grid-widget-settings.jsx":
/*!**********************************************************************************!*\
  !*** ./components/widgets/html-elements/data-grid/data-grid-widget-settings.jsx ***!
  \**********************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/data-grid/data-grid-widget-settings.jsx";

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

const DataGridWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (DataGridWidgetSettings);

/***/ }),

/***/ "./components/widgets/html-elements/data-grid/data-grid-widget.jsx":
/*!*************************************************************************!*\
  !*** ./components/widgets/html-elements/data-grid/data-grid-widget.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/data-grid/data-grid-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const DataGridWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DataGridWidget);

/***/ }),

/***/ "./components/widgets/html-elements/data-grid/index.js":
/*!*************************************************************!*\
  !*** ./components/widgets/html-elements/data-grid/index.js ***!
  \*************************************************************/
/*! exports provided: DataGridWidget, DataGridWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_grid_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-grid-widget */ "./components/widgets/html-elements/data-grid/data-grid-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataGridWidget", function() { return _data_grid_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _data_grid_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-grid-widget-settings */ "./components/widgets/html-elements/data-grid/data-grid-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataGridWidgetSettings", function() { return _data_grid_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/html-elements/div/div-widget-settings.jsx":
/*!**********************************************************************!*\
  !*** ./components/widgets/html-elements/div/div-widget-settings.jsx ***!
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/div/div-widget-settings.jsx";

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

const DivWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (DivWidgetSettings);

/***/ }),

/***/ "./components/widgets/html-elements/div/div-widget.jsx":
/*!*************************************************************!*\
  !*** ./components/widgets/html-elements/div/div-widget.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/div/div-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const DivWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DivWidget);

/***/ }),

/***/ "./components/widgets/html-elements/div/index.js":
/*!*******************************************************!*\
  !*** ./components/widgets/html-elements/div/index.js ***!
  \*******************************************************/
/*! exports provided: DivWidget, DivWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _div_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./div-widget */ "./components/widgets/html-elements/div/div-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivWidget", function() { return _div_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _div_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./div-widget-settings */ "./components/widgets/html-elements/div/div-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivWidgetSettings", function() { return _div_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/html-elements/image/image-widget-settings.jsx":
/*!**************************************************************************!*\
  !*** ./components/widgets/html-elements/image/image-widget-settings.jsx ***!
  \**************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/image/image-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











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

const ImageWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const saveConfigData = async () => {
    try {
      const {
        url,
        title
      } = state;
      const data = {
        title,
        type: 'Image',
        config: {
          url
        }
      };

      if (isAdding) {
        onWidgetAdd(data);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: event => {
      setState(_objectSpread({}, state, {
        title: event.target.value
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Image URL"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: event => {
      setState(_objectSpread({}, state, {
        url: event.target.value
      }));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    onClick: saveConfigData,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageWidgetSettings);

/***/ }),

/***/ "./components/widgets/html-elements/image/image-widget.jsx":
/*!*****************************************************************!*\
  !*** ./components/widgets/html-elements/image/image-widget.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/image/image-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const ImageWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].getWidgetSettingsById(widgetId);
        setWidget($widget);
        console.log($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx("div", {
    style: {
      backgroundImage: widget.config ? `url('${widget.config.url}')` : '',
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageWidget);

/***/ }),

/***/ "./components/widgets/html-elements/image/index.js":
/*!*********************************************************!*\
  !*** ./components/widgets/html-elements/image/index.js ***!
  \*********************************************************/
/*! exports provided: ImageWidget, ImageWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-widget */ "./components/widgets/html-elements/image/image-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWidget", function() { return _image_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _image_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-widget-settings */ "./components/widgets/html-elements/image/image-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWidgetSettings", function() { return _image_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/html-elements/index.js":
/*!***************************************************!*\
  !*** ./components/widgets/html-elements/index.js ***!
  \***************************************************/
/*! exports provided: AccordionWidget, AccordionWidgetSettings, DataGridWidget, DataGridWidgetSettings, DivWidget, DivWidgetSettings, ImageWidget, ImageWidgetSettings, ListWidget, ListWidgetSettings, ParagraphWidget, ParagraphWidgetSettings, ProgressBarWidget, ProgressBarWidgetSettings, SpanWidget, SpanWidgetSettings, TabsWidget, TabsWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./components/widgets/html-elements/accordion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionWidget", function() { return _accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionWidgetSettings", function() { return _accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionWidgetSettings"]; });

/* harmony import */ var _data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-grid */ "./components/widgets/html-elements/data-grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataGridWidget", function() { return _data_grid__WEBPACK_IMPORTED_MODULE_1__["DataGridWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataGridWidgetSettings", function() { return _data_grid__WEBPACK_IMPORTED_MODULE_1__["DataGridWidgetSettings"]; });

/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./div */ "./components/widgets/html-elements/div/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivWidget", function() { return _div__WEBPACK_IMPORTED_MODULE_2__["DivWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivWidgetSettings", function() { return _div__WEBPACK_IMPORTED_MODULE_2__["DivWidgetSettings"]; });

/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./components/widgets/html-elements/image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWidget", function() { return _image__WEBPACK_IMPORTED_MODULE_3__["ImageWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWidgetSettings", function() { return _image__WEBPACK_IMPORTED_MODULE_3__["ImageWidgetSettings"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ "./components/widgets/html-elements/list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListWidget", function() { return _list__WEBPACK_IMPORTED_MODULE_4__["ListWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListWidgetSettings", function() { return _list__WEBPACK_IMPORTED_MODULE_4__["ListWidgetSettings"]; });

/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paragraph */ "./components/widgets/html-elements/paragraph/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParagraphWidget", function() { return _paragraph__WEBPACK_IMPORTED_MODULE_5__["ParagraphWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParagraphWidgetSettings", function() { return _paragraph__WEBPACK_IMPORTED_MODULE_5__["ParagraphWidgetSettings"]; });

/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress-bar */ "./components/widgets/html-elements/progress-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarWidget", function() { return _progress_bar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarWidgetSettings", function() { return _progress_bar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarWidgetSettings"]; });

/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./span */ "./components/widgets/html-elements/span/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpanWidget", function() { return _span__WEBPACK_IMPORTED_MODULE_7__["SpanWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpanWidgetSettings", function() { return _span__WEBPACK_IMPORTED_MODULE_7__["SpanWidgetSettings"]; });

/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs */ "./components/widgets/html-elements/tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsWidget", function() { return _tabs__WEBPACK_IMPORTED_MODULE_8__["TabsWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsWidgetSettings", function() { return _tabs__WEBPACK_IMPORTED_MODULE_8__["TabsWidgetSettings"]; });











/***/ }),

/***/ "./components/widgets/html-elements/list/index.js":
/*!********************************************************!*\
  !*** ./components/widgets/html-elements/list/index.js ***!
  \********************************************************/
/*! exports provided: ListWidget, ListWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-widget */ "./components/widgets/html-elements/list/list-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListWidget", function() { return _list_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _list_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-widget-settings */ "./components/widgets/html-elements/list/list-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListWidgetSettings", function() { return _list_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/html-elements/list/list-widget-settings.jsx":
/*!************************************************************************!*\
  !*** ./components/widgets/html-elements/list/list-widget-settings.jsx ***!
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/list/list-widget-settings.jsx";

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

const ListWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListWidgetSettings);

/***/ }),

/***/ "./components/widgets/html-elements/list/list-widget.jsx":
/*!***************************************************************!*\
  !*** ./components/widgets/html-elements/list/list-widget.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/list/list-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const ListWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ListWidget);

/***/ }),

/***/ "./components/widgets/html-elements/paragraph/index.js":
/*!*************************************************************!*\
  !*** ./components/widgets/html-elements/paragraph/index.js ***!
  \*************************************************************/
/*! exports provided: ParagraphWidget, ParagraphWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paragraph_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paragraph-widget */ "./components/widgets/html-elements/paragraph/paragraph-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParagraphWidget", function() { return _paragraph_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _paragraph_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paragraph-widget-settings */ "./components/widgets/html-elements/paragraph/paragraph-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParagraphWidgetSettings", function() { return _paragraph_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/html-elements/paragraph/paragraph-widget-settings.jsx":
/*!**********************************************************************************!*\
  !*** ./components/widgets/html-elements/paragraph/paragraph-widget-settings.jsx ***!
  \**********************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/paragraph/paragraph-widget-settings.jsx";

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

const ParagraphWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (ParagraphWidgetSettings);

/***/ }),

/***/ "./components/widgets/html-elements/paragraph/paragraph-widget.jsx":
/*!*************************************************************************!*\
  !*** ./components/widgets/html-elements/paragraph/paragraph-widget.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/paragraph/paragraph-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const ParagraphWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ParagraphWidget);

/***/ }),

/***/ "./components/widgets/html-elements/progress-bar/index.js":
/*!****************************************************************!*\
  !*** ./components/widgets/html-elements/progress-bar/index.js ***!
  \****************************************************************/
/*! exports provided: ProgressBarWidget, ProgressBarWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress_bar_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar-widget */ "./components/widgets/html-elements/progress-bar/progress-bar-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarWidget", function() { return _progress_bar_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _progress_bar_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-bar-widget-settings */ "./components/widgets/html-elements/progress-bar/progress-bar-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarWidgetSettings", function() { return _progress_bar_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/html-elements/progress-bar/progress-bar-widget-settings.jsx":
/*!****************************************************************************************!*\
  !*** ./components/widgets/html-elements/progress-bar/progress-bar-widget-settings.jsx ***!
  \****************************************************************************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/progress-bar/progress-bar-widget-settings.jsx";

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

const ProgressBarWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBarWidgetSettings);

/***/ }),

/***/ "./components/widgets/html-elements/progress-bar/progress-bar-widget.jsx":
/*!*******************************************************************************!*\
  !*** ./components/widgets/html-elements/progress-bar/progress-bar-widget.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/progress-bar/progress-bar-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const ProgressBarWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBarWidget);

/***/ }),

/***/ "./components/widgets/html-elements/span/index.js":
/*!********************************************************!*\
  !*** ./components/widgets/html-elements/span/index.js ***!
  \********************************************************/
/*! exports provided: SpanWidget, SpanWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _span_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./span-widget */ "./components/widgets/html-elements/span/span-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpanWidget", function() { return _span_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _span_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./span-widget-settings */ "./components/widgets/html-elements/span/span-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpanWidgetSettings", function() { return _span_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/html-elements/span/span-widget-settings.jsx":
/*!************************************************************************!*\
  !*** ./components/widgets/html-elements/span/span-widget-settings.jsx ***!
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/span/span-widget-settings.jsx";

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

const SpanWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (SpanWidgetSettings);

/***/ }),

/***/ "./components/widgets/html-elements/span/span-widget.jsx":
/*!***************************************************************!*\
  !*** ./components/widgets/html-elements/span/span-widget.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/span/span-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const SpanWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SpanWidget);

/***/ }),

/***/ "./components/widgets/html-elements/tabs/index.js":
/*!********************************************************!*\
  !*** ./components/widgets/html-elements/tabs/index.js ***!
  \********************************************************/
/*! exports provided: TabsWidget, TabsWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-widget */ "./components/widgets/html-elements/tabs/tabs-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsWidget", function() { return _tabs_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tabs_widget_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-widget-settings */ "./components/widgets/html-elements/tabs/tabs-widget-settings.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsWidgetSettings", function() { return _tabs_widget_settings__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/widgets/html-elements/tabs/tabs-widget-settings.jsx":
/*!************************************************************************!*\
  !*** ./components/widgets/html-elements/tabs/tabs-widget-settings.jsx ***!
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/tabs/tabs-widget-settings.jsx";

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

const TabsWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (TabsWidgetSettings);

/***/ }),

/***/ "./components/widgets/html-elements/tabs/tabs-widget.jsx":
/*!***************************************************************!*\
  !*** ./components/widgets/html-elements/tabs/tabs-widget.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/html-elements/tabs/tabs-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));

const TabsWidget = ({
  widgetId
}) => {
  const classes = useStyles();
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId);
        setWidget($widget);
        return $widget;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TabsWidget);

/***/ }),

/***/ "./components/widgets/index.js":
/*!*************************************!*\
  !*** ./components/widgets/index.js ***!
  \*************************************/
/*! exports provided: TableWidget, TableWidgetSettings, AreaChartWidget, AreaChartWidgetSettings, BarChartWidget, BarChartWidgetSettings, DonutChartWidget, DonutChartWidgetSettings, LineChartWidget, LineChartWidgetSettings, PieChartWidget, PieChartWidgetSettings, AutoCompleteWidget, AutoCompleteWidgetSettings, ButtonWidget, ButtonWidgetSettings, CheckboxWidget, CheckboxWidgetSettings, DateTimeWidget, DateTimeWidgetSettings, FileWidget, FileWidgetSettings, NumberWidget, NumberWidgetSettings, PasswordWidget, PasswordWidgetSettings, RadioWidget, RadioWidgetSettings, SelectWidget, SelectWidgetSettings, TextAreaWidget, TextAreaWidgetSettings, TextFieldWidget, TextFieldWidgetSettings, FormGroupWidget, FormGroupWidgetSettings, AccordionWidget, AccordionWidgetSettings, DataGridWidget, DataGridWidgetSettings, DivWidget, DivWidgetSettings, ImageWidget, ImageWidgetSettings, ListWidget, ListWidgetSettings, ParagraphWidget, ParagraphWidgetSettings, ProgressBarWidget, ProgressBarWidgetSettings, SpanWidget, SpanWidgetSettings, TabsWidget, TabsWidgetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ "./components/widgets/table/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableWidget", function() { return _table__WEBPACK_IMPORTED_MODULE_0__["TableWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableWidgetSettings", function() { return _table__WEBPACK_IMPORTED_MODULE_0__["TableWidgetSettings"]; });

/* harmony import */ var _charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts */ "./components/widgets/charts/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidget", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["AreaChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidgetSettings", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["AreaChartWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidget", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["BarChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidgetSettings", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["BarChartWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidget", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["DonutChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidgetSettings", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["DonutChartWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidget", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["LineChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidgetSettings", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["LineChartWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidget", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["PieChartWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidgetSettings", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["PieChartWidgetSettings"]; });

/* harmony import */ var _form_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-controls */ "./components/widgets/form-controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["ButtonWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["ButtonWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["CheckboxWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["CheckboxWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["DateTimeWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["DateTimeWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["FileWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["FileWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["NumberWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["NumberWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["PasswordWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["PasswordWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["RadioWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["RadioWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["SelectWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["SelectWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["TextAreaWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["TextAreaWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextFieldWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["TextFieldWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextFieldWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["TextFieldWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupWidget", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["FormGroupWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupWidgetSettings", function() { return _form_controls__WEBPACK_IMPORTED_MODULE_2__["FormGroupWidgetSettings"]; });

/* harmony import */ var _html_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-elements */ "./components/widgets/html-elements/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionWidget", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["AccordionWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionWidgetSettings", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["AccordionWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataGridWidget", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["DataGridWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataGridWidgetSettings", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["DataGridWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivWidget", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["DivWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivWidgetSettings", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["DivWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWidget", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["ImageWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWidgetSettings", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["ImageWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListWidget", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["ListWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListWidgetSettings", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["ListWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParagraphWidget", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["ParagraphWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParagraphWidgetSettings", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["ParagraphWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarWidget", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["ProgressBarWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarWidgetSettings", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["ProgressBarWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpanWidget", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["SpanWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpanWidgetSettings", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["SpanWidgetSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsWidget", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["TabsWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsWidgetSettings", function() { return _html_elements__WEBPACK_IMPORTED_MODULE_3__["TabsWidgetSettings"]; });






/***/ }),

/***/ "./components/widgets/table/export-table-data.jsx":
/*!********************************************************!*\
  !*** ./components/widgets/table/export-table-data.jsx ***!
  \********************************************************/
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
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/table/export-table-data.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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
});

const ExportTableData = ({
  widget,
  data,
  selectedRows
}) => {
  const classes = useStyles();
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    method: 'download',
    format: 'csv',
    fields: widget.config.fields
  });
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const handleDataChange = event => {
    const {
      name,
      value
    } = event.target;
    setState(_objectSpread({}, state, {
      [name]: value
    }));
  };

  const handleFieldChange = name => event => {
    const {
      checked
    } = event.target;
    checked ? setFields([...fields, name]) : setFields(fields.filter(field => field != name));
  };

  const exportData = async () => {
    try {
      const {
        format,
        method
      } = state;
      const file = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__["default"].exportWidgetData(widget.id, format, method, JSON.stringify(fields));
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Export Settings")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "export-format",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "Export Format"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "format",
    labelId: "export-format",
    value: state.format,
    onChange: handleDataChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "csv",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "CSV"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "json",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "JSON"))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "export-method",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "Export Method"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "method",
    labelId: "export-method",
    value: state.method,
    onChange: handleDataChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "download",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, "Download"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "Email"))), __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "Export Fields")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, "Select fields to export from the data set."), state.fields.map(field => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: field,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10___default.a, {
      checked: fields.includes(field),
      onChange: handleFieldChange(field),
      value: field,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }
    }),
    label: field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClick: exportData,
    className: classes.formControl,
    fullWidth: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, "Export"));
};

/* harmony default export */ __webpack_exports__["default"] = (ExportTableData);

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

/***/ "./components/widgets/table/table-widget-settings-panel.jsx":
/*!******************************************************************!*\
  !*** ./components/widgets/table/table-widget-settings-panel.jsx ***!
  \******************************************************************/
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
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers */ "./components/widgets/helpers/index.js");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/table/table-widget-settings-panel.jsx";

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

const TableWidgetSettingsPanel = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const {
    0: connectionMethod,
    1: setConnectionMethod
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.connectionMethod : 'database');
  const {
    0: doc,
    1: setDoc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.docId : '');
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.title : '');
  const {
    0: datasource,
    1: setDatasource
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.dataSourceId : '');
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.fields : []);
  const {
    0: primaryKey,
    1: setPrimaryKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isAdding ? widget.config.primaryKey : null);
  const {
    0: isEditable,
    1: setIsEditable
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isAdding ? false : widget.config.isEditable);
  const {
    0: isDeletable,
    1: setIsDeletable
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isAdding ? false : widget.config.isDeletable);
  const {
    0: isAddable,
    1: setIsAddable
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isAdding ? false : widget.config.isAddable);
  const {
    0: url,
    1: setURL
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isAdding ? '' : widget.config.url);
  const {
    0: headers,
    1: setHeaders
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isAdding ? {} : widget.config.headers || {});
  const {
    0: method,
    1: setMethod
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isAdding ? '' : widget.config.method);
  const {
    0: body,
    1: setBody
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isAdding ? {} : widget.config.body || {});
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isAdding ? {} : widget.config.query || {});

  const saveConfigSettings = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        title,
        config: {
          docId: doc,
          fields,
          type: 'simple',
          func: 'find',
          query: {},
          isEditable,
          isDeletable,
          isAddable,
          primaryKey,
          connectionMethod,
          url,
          headers,
          method,
          body,
          query
        },
        type: 'Table'
      };
      console.log(data);

      if (isAdding) {
        onWidgetAdd(data);
      } else {
        const update = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_8__["default"].updateWidgetSettings(widget.id, data);
        handleSettingsClose(update);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fullWidth: true,
    className: classes.formControl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: title,
    onChange: event => {
      setTitle(event.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      marginTop: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      checked: isEditable,
      onChange: event => {
        setIsEditable(event.target.checked);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }),
    label: "Allow Edit?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      checked: isDeletable,
      onChange: event => {
        setIsDeletable(event.target.checked);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }),
    label: "Allow Delete?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      checked: isAddable,
      onChange: event => {
        setIsAddable(event.target.checked);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }),
    label: "Allow Add?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  })), __jsx(_helpers__WEBPACK_IMPORTED_MODULE_9__["ConnectionSettings"], {
    isAdding: isAdding,
    connectionMethod: connectionMethod,
    setConnectionMethod: setConnectionMethod,
    setDoc: setDoc,
    setDatasource: setDatasource,
    setFields: setFields,
    doc: doc,
    datasource: datasource,
    fields: fields,
    primaryKey: primaryKey,
    setPrimaryKey: setPrimaryKey,
    url: url,
    setURL: setURL,
    headers: headers,
    setHeaders: setHeaders,
    method: method,
    setMethod: setMethod,
    body: body,
    setBody: setBody,
    query: query,
    setQuery: setQuery,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fullWidth: true,
    className: classes.formControl,
    onClick: saveConfigSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, isAdding ? 'Add' : 'Save'));
};

/* harmony default export */ __webpack_exports__["default"] = (TableWidgetSettingsPanel);

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
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Assessment */ "@material-ui/icons/Assessment");
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _table_widget_settings_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-widget-settings-panel */ "./components/widgets/table/table-widget-settings-panel.jsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers */ "./components/widgets/helpers/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/table/table-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return __jsx("div", _extends({
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, children)));
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  panel: {
    backgroundColor: "#FFF",
    color: "#000"
  }
}));

const TableWidgetSettings = ({
  widget,
  handleSettingsClose,
  isAdding,
  onWidgetAdd
}) => {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static",
    className: classes.panel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: value,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    icon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 22
      }
    }),
    label: "Widget Settings"
  }, a11yProps(0), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    icon: __jsx(_material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 22
      }
    }),
    label: "Measure Conditions"
  }, a11yProps(1), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_table_widget_settings_panel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    isAdding: isAdding,
    onWidgetAdd: onWidgetAdd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(_helpers__WEBPACK_IMPORTED_MODULE_10__["ListMeasureCondition"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    isAdding: isAdding,
    onWidgetAdd: onWidgetAdd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  })));
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
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Share */ "@material-ui/icons/Share");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _table_widget_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-widget-settings */ "./components/widgets/table/table-widget-settings.jsx");
/* harmony import */ var _export_table_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./export-table-data */ "./components/widgets/table/export-table-data.jsx");
/* harmony import */ var _helpers_measure_conditions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers/measure-conditions */ "./helpers/measure-conditions.js");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/table/table-widget.jsx";

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
    right: false,
    export: false
  });
  const {
    0: measureConditions,
    1: setMeasureConditions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: measureConditionsFields,
    1: setMeasureConditionsFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getMeasureConditions = async () => {
      try {
        const $measureConditions = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__["default"].getWidgetSettingsMeasureConditions(widgetId);
        setMeasureConditions($measureConditions);
        setMeasureConditionsFields($measureConditions.map(condition => condition.field));
      } catch (e) {
        console.log(e);
      }
    };

    getMeasureConditions();
  }, []);

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

  const onRowAdd = async newData => {
    try {
      const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__["default"].addWidgetSettingsDocument(widgetId, newData);
      getWidgetData();
      return $data;
    } catch (e) {
      console.log(e);
    }
  };

  const onRowUpdate = async (newData, oldData) => {
    try {
      const keyId = oldData[widget.config.primaryKey];
      const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__["default"].editWidgetSettingsDocument(widgetId, newData, keyId);
      getWidgetData();
      return $data;
    } catch (e) {
      console.log(e);
    }
  };

  const onRowDelete = async oldData => {
    try {
      const keyId = oldData[widget.config.primaryKey];
      const $data = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_4__["default"].deleteWidgetSettingsDocument(widgetId, keyId);
      getWidgetData();
      return $data;
    } catch (e) {
      console.log(e);
    }
  };

  const editable = () => {
    const {
      isEditable,
      isDeletable,
      isAddable
    } = widget.config;
    const obj = {};
    if (isEditable) obj.onRowUpdate = onRowUpdate;
    if (isDeletable) obj.onRowDelete = onRowDelete;
    if (isAddable) obj.onRowAdd = onRowAdd;
    return obj;
  };

  const renderTable = () => {
    return isLoadingData || !widget ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 40
      }
    }) : __jsx(material_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
      columns: widget.config.fields.map(field => ({
        field,
        title: field,
        render: rowData => {
          const doesHaveCondition = measureConditionsFields.includes(field);

          if (doesHaveCondition) {
            const condition = measureConditions.filter(c => c.field == field)[0];
            const isConditionMet = Object(_helpers_measure_conditions__WEBPACK_IMPORTED_MODULE_13__["measureConditionResult"])(condition, rowData[field]);
            return isConditionMet ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                backgroundColor: condition.color
              },
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }
            }, rowData[field]) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 21
              }
            }, rowData[field]);
          } else {
            return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 24
              }
            }, rowData[field]);
          }
        }
      })),
      data: data,
      title: widget.title || '',
      editable: editable(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }
    });
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMenuState(_objectSpread({}, menuState, {
      [side]: open
    }));
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.widgetActions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.widgetTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      color: "#FFF"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, widget && widget.title ? widget.title : 'Widget Title')), __jsx("div", {
    className: classes.actionButtons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('export', true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: toggleDrawer('right', true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: refreshData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, renderTable()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, __jsx(_table_widget_settings__WEBPACK_IMPORTED_MODULE_11__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    anchor: "right",
    open: menuState.export,
    onClose: toggleDrawer('export', false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, __jsx(_export_table_data__WEBPACK_IMPORTED_MODULE_12__["default"], {
    widget: widget,
    data: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
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
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/widget-icon.jsx";

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, icon, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      marginTop: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, widget ? widget.title : title)));
};

/* harmony default export */ __webpack_exports__["default"] = (TableWidget);

/***/ }),

/***/ "./helpers/css-colors.js":
/*!*******************************!*\
  !*** ./helpers/css-colors.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const CSS_COLOR_NAMES = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
/* harmony default export */ __webpack_exports__["default"] = (CSS_COLOR_NAMES);

/***/ }),

/***/ "./helpers/decide-widgets.jsx":
/*!************************************!*\
  !*** ./helpers/decide-widgets.jsx ***!
  \************************************/
/*! exports provided: decideWidgetSettings, decideWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decideWidgetSettings", function() { return decideWidgetSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decideWidget", function() { return decideWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/widgets */ "./components/widgets/index.js");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/helpers/decide-widgets.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const decideWidgetSettings = (addType, onWidgetAdd) => {
  switch (addType) {
    case 'Table':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["TableWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 14
        }
      });

    case 'Line Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["LineChartWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 14
        }
      });

    case 'Bar Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["BarChartWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 14
        }
      });

    case 'Pie Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["PieChartWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 14
        }
      });

    case 'Donut Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["DonutChartWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 14
        }
      });

    case 'Area Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["AreaChartWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 14
        }
      });

    case 'Auto Complete':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["AutoCompleteWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      });

    case 'Button':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ButtonWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 14
        }
      });

    case 'Checkbox':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["CheckboxWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 14
        }
      });

    case 'Date Time':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["DateTimeWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 14
        }
      });

    case 'File':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["FileWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 14
        }
      });

    case 'Number':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["NumberWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 14
        }
      });

    case 'Password':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["PasswordWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 14
        }
      });

    case 'Radio':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["RadioWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 14
        }
      });

    case 'Select':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["SelectWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 14
        }
      });

    case 'Text Area':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["TextAreaWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 14
        }
      });

    case 'Text Field':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["TextFieldWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 14
        }
      });

    case 'Accordion':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["AccordionWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 14
        }
      });

    case 'Data Grid':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["DataGridWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 14
        }
      });

    case 'Div':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["DivWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 14
        }
      });

    case 'Image':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ImageWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 14
        }
      });

    case 'List':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ListWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 14
        }
      });

    case 'Paragraph':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ParagraphWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 14
        }
      });

    case 'Progress Bar':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ProgressBarWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 14
        }
      });

    case 'Span':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["SpanWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 14
        }
      });

    case 'Tabs':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["TabsWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 14
        }
      });

    case 'Form Group':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["FormGroupWidgetSettings"], {
        isAdding: true,
        onWidgetAdd: onWidgetAdd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 14
        }
      });

    default:
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 14
        }
      });
  }
};

const decideWidget = widget => {
  switch (widget.type) {
    case 'Table':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["TableWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 14
        }
      });

    case 'Line Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["LineChartWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 14
        }
      });

    case 'Bar Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["BarChartWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 14
        }
      });

    case 'Pie Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["PieChartWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 14
        }
      });

    case 'Donut Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["DonutChartWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 14
        }
      });

    case 'Area Chart':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["AreaChartWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 14
        }
      });

    case 'TextField':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["TextFieldWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 14
        }
      });

    case 'Auto Complete':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["AutoCompleteWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 14
        }
      });

    case 'Button':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ButtonWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 14
        }
      });

    case 'Checkbox':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["CheckboxWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 14
        }
      });

    case 'Date Time':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["DateTimeWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 14
        }
      });

    case 'File':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["FileWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 14
        }
      });

    case 'Number':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["NumberWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 14
        }
      });

    case 'Password':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["PasswordWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 14
        }
      });

    case 'Radio':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["RadioWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 14
        }
      });

    case 'Select':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["SelectWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 14
        }
      });

    case 'Text Area':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["TextAreaWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 14
        }
      });

    case 'Text Field':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["TextFieldWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 14
        }
      });

    case 'Accordion':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["AccordionWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 14
        }
      });

    case 'Data Grid':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["DataGridWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 14
        }
      });

    case 'Div':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["DivWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 14
        }
      });

    case 'Image':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ImageWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 14
        }
      });

    case 'List':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ListWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 14
        }
      });

    case 'Paragraph':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ParagraphWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 14
        }
      });

    case 'Progress Bar':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["ProgressBarWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 14
        }
      });

    case 'Span':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["SpanWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 14
        }
      });

    case 'Tabs':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["TabsWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 14
        }
      });

    case 'Form Group':
      return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_1__["FormGroupWidget"], {
        widgetId: widget.id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 14
        }
      });
  }
};



/***/ }),

/***/ "./helpers/measure-conditions.js":
/*!***************************************!*\
  !*** ./helpers/measure-conditions.js ***!
  \***************************************/
/*! exports provided: measureConditionResult, conditionCases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureConditionResult", function() { return measureConditionResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionCases", function() { return conditionCases; });
const conditionCases = [{
  title: 'equals',
  friendlyName: 'Equals'
}, {
  title: 'does_not_equal',
  friendlyName: 'Does Not Equal'
}, {
  title: 'is_less_than',
  friendlyName: 'Is Less Than'
}, {
  title: 'is_greater_than',
  friendlyName: 'Is Greater Than'
}, {
  title: 'is_between',
  friendlyName: 'Is Between'
}, {
  title: 'is_not_between',
  friendlyName: 'Is Not Between'
}];

const measureConditionResult = (measureCondition, value) => {
  const {
    expression,
    minValue,
    maxValue
  } = measureCondition;

  switch (expression) {
    case 'equals':
      return value == minValue ? true : false;

    case 'does_not_equal':
      return value != minValue ? true : false;

    case 'is_less_than':
      return value < minValue ? true : false;

    case 'is_greater_than':
      return value > minValue ? true : false;

    case 'is_between':
      return value > minValue && value < maxValue ? true : false;

    case 'is_not_between':
      return value < minValue || value > maxValue ? true : false;

    default:
      return false;
  }
};



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
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ArrowLeft */ "@material-ui/icons/ArrowLeft");
/* harmony import */ var _material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Save */ "@material-ui/icons/Save");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _components_dashboards_widgets_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/dashboards/widgets-menu */ "./components/dashboards/widgets-menu.jsx");
/* harmony import */ var _components_dashboards_settings_dashboard_settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/dashboards/settings/dashboard-settings */ "./components/dashboards/settings/dashboard-settings.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _helpers_decide_widgets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../helpers/decide-widgets */ "./helpers/decide-widgets.jsx");
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/pages/dashboards/[id]/edit.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  list: {
    width: 500
  },
  fullList: {
    width: 'auto'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}));

const EditDashboard = () => {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["useRouter"])();
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(router.query.id);
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: addType,
    1: setAddType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: WidgetSettings,
    1: setWidgetSettings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: SubDashboards,
    1: setSubDashboards
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getProps = async () => {
      try {
        setIsLoading(true);
        const dashboard = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_15__["default"].getDashboardById(id);

        if (!dashboard.isSub) {
          const $SubDashboards = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_15__["default"].getSubDashboards({
            id
          });
          setSubDashboards($SubDashboards);
        }

        const $WidgetSettings = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_15__["default"].getWidgetSettings({
          id
        });
        setLayout($WidgetSettings);
        setWidgetSettings($WidgetSettings);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    getProps();
  }, [id, refresh]);

  const onLayoutChange = async $event => {
    try {
      const layouts = layout.map(item => {
        const $eventItem = $event.filter($item => $item.i == item.layout.i)[0];
        return _objectSpread({}, item, {
          layout: $eventItem
        });
      });
      await Promise.all(layouts.map(item => _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_16__["default"].updateWidgetSettings(item.id, item)));
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

  const addPredefinedWidget = async (widget, _) => {
    try {
      const $widget = _objectSpread({}, widget);

      delete $widget.id;
      delete $widget.icon;
      $widget.layout.i = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
      const saveWidget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_16__["default"].createWidgetSettings($widget);
      await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_15__["default"].addWidgetToDashboard(id, saveWidget.id);
      setLayout([...layout, {
        layout: $widget.layout,
        type: $widget.type
      }]);
    } catch (e) {
      console.log(e);
    }
  };

  const onWidgetAdd = async (config, isFormControl = false, widgetSettingsId = null) => {
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

      if (widgetSettingsId) {
        delete layoutItem.layout;
        setIsLoading(true);
        const saveWidget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_16__["default"].createWidgetSettings(layoutItem);
        const linkWidget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_16__["default"].createSubWidget(widgetSettingsId, saveWidget.id);
        setIsLoading(false);
      } else {
        setIsLoading(true);
        const saveWidget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_16__["default"].createWidgetSettings(layoutItem);
        const linkWidget = await _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_15__["default"].addWidgetToDashboard(id, saveWidget.id);
        layoutItem.id = saveWidget.id;
        setLayout([...layout, layoutItem]);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addWidget = async (type, _) => {
    setAddType(type);
    setMenuState(_objectSpread({}, menuState, {
      addWidget: true,
      right: false
    }));
  };

  const sideList = () => __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, __jsx(_components_dashboards_widgets_menu__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onWidgetClick: addWidget,
    addPredefinedWidget: addPredefinedWidget,
    widgetSettings: Object.values(WidgetSettings),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }));

  const renderWidgets = () => layout.map((item, i) => __jsx("div", {
    key: item.layout.i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, Object(_helpers_decide_widgets__WEBPACK_IMPORTED_MODULE_20__["decideWidget"])(item)));

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.backdrop,
    open: isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "inherit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, sideList()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14___default.a, {
    anchor: "right",
    open: menuState.addWidget,
    onClose: toggleDrawer('addWidget', false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, Object(_helpers_decide_widgets__WEBPACK_IMPORTED_MODULE_20__["decideWidgetSettings"])(addType, onWidgetAdd)), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14___default.a, {
    anchor: "right",
    open: menuState.settings,
    onClose: toggleDrawer('settings', false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(_components_dashboards_settings_dashboard_settings__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: id,
    refresh: refresh,
    setRefresh: setRefresh,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => {
      router.back();
    },
    "aria-label": "back",
    size: "medium",
    style: {
      outline: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fontSize: "default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      flex: 1,
      overflowX: 'scroll',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: () => {
      setId(router.query.id);
    },
    style: {
      marginLeft: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, "Main"), SubDashboards.map(subDashboard => __jsx("div", {
    key: subDashboard.subDashboardId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: () => {
      setId(subDashboard.subDashboardId);
    },
    style: {
      marginLeft: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    noWrap: true,
    style: {
      fontWeight: 500,
      fontSize: '0.875rem',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }, subDashboard.subDashboard.title))))), __jsx("div", {
    style: {
      justifySelf: 'flex-end',
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      paddingRight: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      outline: 'none'
    },
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 71
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, "Save"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginLeft: '10px',
      outline: 'none'
    },
    size: "small",
    onClick: toggleDrawer('right', true),
    startIcon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 129
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, "Widgets"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginLeft: '10px',
      outline: 'none'
    },
    size: "small",
    onClick: toggleDrawer('settings', true),
    startIcon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 132
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, "Settings"))), __jsx("div", {
    style: {
      paddingBottom: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, __jsx(react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "layout",
    cols: 16,
    rowHeight: 30,
    width: 1920,
    layout: layout.map(item => item.layout),
    onLayoutChange: onLayoutChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, renderWidgets())));
}; // EditDashboard.getInitialProps = async (req) => {
//   const Authorization = Cookies(req).id
//   const { id } = req.query
//   const WidgetSettings = await DashboardActions.getWidgetSettings({ Authorization, id })
//   const SubDashboards = await DashboardActions.getSubDashboards({ Authorization, id })
//   return { WidgetSettings, SubDashboards }
// }


/* harmony default export */ __webpack_exports__["default"] = (EditDashboard);

/***/ }),

/***/ 4:
/*!**********************************************!*\
  !*** multi ./pages/dashboards/[id]/edit.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/imustafa/Projects/LoStudio/client/pages/dashboards/[id]/edit.jsx */"./pages/dashboards/[id]/edit.jsx");


/***/ }),

/***/ "@date-io/date-fns":
/*!************************************!*\
  !*** external "@date-io/date-fns" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@date-io/date-fns");

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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

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

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

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

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

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

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

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

/***/ "@material-ui/icons/ArrowDownward":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDownward" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

/***/ }),

/***/ "@material-ui/icons/ArrowLeft":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowLeft" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowLeft");

/***/ }),

/***/ "@material-ui/icons/ArrowUpward":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowUpward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "@material-ui/icons/Assessment":
/*!************************************************!*\
  !*** external "@material-ui/icons/Assessment" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assessment");

/***/ }),

/***/ "@material-ui/icons/Autorenew":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Autorenew" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Autorenew");

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

/***/ "@material-ui/icons/Cancel":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cancel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cancel");

/***/ }),

/***/ "@material-ui/icons/CheckBox":
/*!**********************************************!*\
  !*** external "@material-ui/icons/CheckBox" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckBox");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/DateRange":
/*!***********************************************!*\
  !*** external "@material-ui/icons/DateRange" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DateRange");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Dialpad":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Dialpad" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dialpad");

/***/ }),

/***/ "@material-ui/icons/DonutLarge":
/*!************************************************!*\
  !*** external "@material-ui/icons/DonutLarge" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DonutLarge");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/FileCopy":
/*!**********************************************!*\
  !*** external "@material-ui/icons/FileCopy" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FileCopy");

/***/ }),

/***/ "@material-ui/icons/GridOn":
/*!********************************************!*\
  !*** external "@material-ui/icons/GridOn" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GridOn");

/***/ }),

/***/ "@material-ui/icons/Image":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Image" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Image");

/***/ }),

/***/ "@material-ui/icons/List":
/*!******************************************!*\
  !*** external "@material-ui/icons/List" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

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

/***/ "@material-ui/icons/RadioButtonChecked":
/*!********************************************************!*\
  !*** external "@material-ui/icons/RadioButtonChecked" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RadioButtonChecked");

/***/ }),

/***/ "@material-ui/icons/Receipt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Receipt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Receipt");

/***/ }),

/***/ "@material-ui/icons/Refresh":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Refresh" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Refresh");

/***/ }),

/***/ "@material-ui/icons/Reorder":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Reorder" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Reorder");

/***/ }),

/***/ "@material-ui/icons/Save":
/*!******************************************!*\
  !*** external "@material-ui/icons/Save" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Save");

/***/ }),

/***/ "@material-ui/icons/SelectAll":
/*!***********************************************!*\
  !*** external "@material-ui/icons/SelectAll" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SelectAll");

/***/ }),

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "@material-ui/icons/Subject":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Subject" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Subject");

/***/ }),

/***/ "@material-ui/icons/TableChart":
/*!************************************************!*\
  !*** external "@material-ui/icons/TableChart" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChart");

/***/ }),

/***/ "@material-ui/icons/TextFields":
/*!************************************************!*\
  !*** external "@material-ui/icons/TextFields" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TextFields");

/***/ }),

/***/ "@material-ui/icons/TextFormat":
/*!************************************************!*\
  !*** external "@material-ui/icons/TextFormat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TextFormat");

/***/ }),

/***/ "@material-ui/icons/TextRotationNone":
/*!******************************************************!*\
  !*** external "@material-ui/icons/TextRotationNone" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TextRotationNone");

/***/ }),

/***/ "@material-ui/icons/Timeline":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Timeline" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Timeline");

/***/ }),

/***/ "@material-ui/icons/Title":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Title" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Title");

/***/ }),

/***/ "@material-ui/icons/TouchApp":
/*!**********************************************!*\
  !*** external "@material-ui/icons/TouchApp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TouchApp");

/***/ }),

/***/ "@material-ui/icons/ViewList":
/*!**********************************************!*\
  !*** external "@material-ui/icons/ViewList" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewList");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "@material-ui/pickers":
/*!***************************************!*\
  !*** external "@material-ui/pickers" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/pickers");

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

/***/ "prismjs/components/prism-clike":
/*!*************************************************!*\
  !*** external "prismjs/components/prism-clike" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-clike");

/***/ }),

/***/ "prismjs/components/prism-core":
/*!************************************************!*\
  !*** external "prismjs/components/prism-core" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-core");

/***/ }),

/***/ "prismjs/components/prism-javascript":
/*!******************************************************!*\
  !*** external "prismjs/components/prism-javascript" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-javascript");

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

/***/ "react-simple-code-editor":
/*!*******************************************!*\
  !*** external "react-simple-code-editor" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-simple-code-editor");

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