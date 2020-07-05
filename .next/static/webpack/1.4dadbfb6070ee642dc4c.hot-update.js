webpackHotUpdate(1,{

/***/ "./actions/dashboard.actions.ts":
/*!**************************************!*\
  !*** ./actions/dashboard.actions.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardActions; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);






var API_URL = next_config__WEBPACK_IMPORTED_MODULE_4___default()().publicRuntimeConfig.API_URL;

var DashboardActions = /*#__PURE__*/function () {
  function DashboardActions() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardActions);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DashboardActions, null, [{
    key: "createDashboard",
    value: function createDashboard(_ref) {
      var Authorization, dashboard;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createDashboard$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Authorization = _ref.Authorization, dashboard = _ref.dashboard;
              return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(API_URL, "/Dashboards"), dashboard, {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getDashboards",
    value: function getDashboards(_ref2) {
      var Authorization, query;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getDashboards$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              Authorization = _ref2.Authorization, query = _ref2.query;
              return _context2.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
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
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err;
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getWebpages",
    value: function getWebpages(_ref3) {
      var Authorization;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getWebpages$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              Authorization = _ref3.Authorization;
              return _context3.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                },
                params: {
                  filter: {
                    where: {
                      type: "webpage"
                    }
                  }
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err;
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "linkSubDashboard",
    value: function linkSubDashboard(_ref4) {
      var id, subDashboardId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function linkSubDashboard$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = _ref4.id, subDashboardId = _ref4.subDashboardId;
              return _context4.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(API_URL, "/Dashboards/").concat(id, "/subDashboards"), {
                dashboardId: id,
                subDashboardId: subDashboardId
              }, {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err;
              }));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "unLinkSubDashboard",
    value: function unLinkSubDashboard(_ref5) {
      var id, subDashboardId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function unLinkSubDashboard$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = _ref5.id, subDashboardId = _ref5.subDashboardId;
              return _context5.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("".concat(API_URL, "/Dashboards/").concat(id, "/subDashboards/").concat(subDashboardId), {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err;
              }));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getSubDashboards",
    value: function getSubDashboards(_ref6) {
      var Authorization, id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getSubDashboards$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              Authorization = _ref6.Authorization, id = _ref6.id;
              return _context6.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards/").concat(id, "/subDashboards"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                },
                params: {
                  filter: {
                    include: "subDashboard"
                  }
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err;
              }));

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getDashboardById",
    value: function getDashboardById(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getDashboardById$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards/").concat(id), {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "updateDashboard",
    value: function updateDashboard(id, data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updateDashboard$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch("".concat(API_URL, "/Dashboards/").concat(id), data).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "deleteDashboard",
    value: function deleteDashboard(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteDashboard$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("", {}).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getWidgetSettings",
    value: function getWidgetSettings(_ref7) {
      var Authorization, id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getWidgetSettings$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              Authorization = _ref7.Authorization, id = _ref7.id;
              return _context10.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards/").concat(id, "/widgetSettings"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getCollaborators",
    value: function getCollaborators(_ref8) {
      var Authorization, id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getCollaborators$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              Authorization = _ref8.Authorization, id = _ref8.id;
              return _context11.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards/").concat(id, "/collaborators"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 2:
            case "end":
              return _context11.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getCollaboratorations",
    value: function getCollaboratorations(_ref9) {
      var Authorization;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getCollaboratorations$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              Authorization = _ref9.Authorization;
              return _context12.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards/collaborations"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "addCollaborator",
    value: function addCollaborator(_ref10) {
      var Authorization, email, id, editor, viewer;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addCollaborator$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              Authorization = _ref10.Authorization, email = _ref10.email, id = _ref10.id, editor = _ref10.editor, viewer = _ref10.viewer;
              return _context13.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(API_URL, "/Dashboards/").concat(id, "/dashboardRoleMappings"), {
                email: email,
                editor: editor,
                viewer: viewer
              }, {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "addWidgetToDashboard",
    value: function addWidgetToDashboard(id, fk) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addWidgetToDashboard$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("".concat(API_URL, "/Dashboards/").concat(id, "/widgetSettings/rel/").concat(fk), {
                dashboardId: id,
                widgetSettingsId: fk
              }, {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "createWidgetInDashboard",
    value: function createWidgetInDashboard(id, widgetData) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createWidgetInDashboard$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(API_URL, "/Dashboards/").concat(id, "/widgetSettings"), widgetData, {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("id")
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context15.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "removeWidgetFromDashboard",
    value: function removeWidgetFromDashboard(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function removeWidgetFromDashboard$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("", {}).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context16.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return DashboardActions;
}();



/***/ })

})
//# sourceMappingURL=1.4dadbfb6070ee642dc4c.hot-update.js.map