webpackHotUpdate("static/development/pages/dashboards.js",{

/***/ "./actions/dashboard.actions.ts":
/*!**************************************!*\
  !*** ./actions/dashboard.actions.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardActions; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);






var API_URL = next_config__WEBPACK_IMPORTED_MODULE_4___default()().publicRuntimeConfig.API_URL;

var DashboardActions =
/*#__PURE__*/
function () {
  function DashboardActions() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardActions);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DashboardActions, null, [{
    key: "createDashboard",
    value: function createDashboard(_ref) {
      var Authorization, dashboard;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createDashboard$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Authorization = _ref.Authorization, dashboard = _ref.dashboard;
              return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(API_URL, "/Dashboards"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('id')
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
      });
    }
  }, {
    key: "getDashboards",
    value: function getDashboards(_ref2) {
      var Authorization, query;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getDashboards$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              Authorization = _ref2.Authorization, query = _ref2.query;
              console.log(Authorization);
              return _context2.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('id')
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err;
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getDashboardById",
    value: function getDashboardById(data) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getDashboardById$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('', {}).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "updateDashboard",
    value: function updateDashboard(id, data) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updateDashboard$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch("".concat(API_URL, "/Dashboards/").concat(id), data).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "deleteDashboard",
    value: function deleteDashboard(data) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteDashboard$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('', {}).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }, {
    key: "getWidgetSettings",
    value: function getWidgetSettings(_ref3) {
      var Authorization, id;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getWidgetSettings$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              Authorization = _ref3.Authorization, id = _ref3.id;
              return _context6.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards/").concat(id, "/widgetSettings"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('id')
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }, {
    key: "getCollaborators",
    value: function getCollaborators(_ref4) {
      var Authorization, id;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getCollaborators$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              Authorization = _ref4.Authorization, id = _ref4.id;
              return _context7.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards/").concat(id, "/collaborators"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('id')
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      });
    }
  }, {
    key: "getCollaboratorations",
    value: function getCollaboratorations(_ref5) {
      var Authorization;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getCollaboratorations$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              Authorization = _ref5.Authorization;
              return _context8.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "/Dashboards/collaborations"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('id')
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      });
    }
  }, {
    key: "addCollaborator",
    value: function addCollaborator(_ref6) {
      var Authorization, email, id, editor, viewer;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addCollaborator$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              Authorization = _ref6.Authorization, email = _ref6.email, id = _ref6.id, editor = _ref6.editor, viewer = _ref6.viewer;
              return _context9.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(API_URL, "/Dashboards/").concat(id, "/dashboardRoleMappings"), {
                email: email,
                editor: editor,
                viewer: viewer
              }, {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('id')
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      });
    }
  }, {
    key: "addWidgetToDashboard",
    value: function addWidgetToDashboard(id, fk) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addWidgetToDashboard$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("".concat(API_URL, "/Dashboards/").concat(id, "/widgetSettings/rel/").concat(fk), {
                dashboardId: id,
                widgetSettingsId: fk
              }, {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('id')
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      });
    }
  }, {
    key: "removeWidgetFromDashboard",
    value: function removeWidgetFromDashboard(data) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function removeWidgetFromDashboard$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('', {}).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      });
    }
  }]);

  return DashboardActions;
}();



/***/ })

})
//# sourceMappingURL=dashboards.js.97d77012a66558af1130.hot-update.js.map