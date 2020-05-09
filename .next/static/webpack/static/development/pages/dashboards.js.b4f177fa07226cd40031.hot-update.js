webpackHotUpdate("static/development/pages/dashboards.js",{

/***/ "./actions/datasource.actions.ts":
/*!***************************************!*\
  !*** ./actions/datasource.actions.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatasourceActions; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);











function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




var API_URL = next_config__WEBPACK_IMPORTED_MODULE_11___default()().publicRuntimeConfig.API_URL;

var DatasourceActions =
/*#__PURE__*/
function () {
  function DatasourceActions() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, DatasourceActions);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(DatasourceActions, null, [{
    key: "createDatasource",
    value: function createDatasource(data) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function createDatasource$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("".concat(API_URL, "/DataSources"), data, {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('id')
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err;
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "updateDatasource",
    value: function updateDatasource(id, data) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function updateDatasource$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_10___default.a.patch("".concat(API_URL, "/DataSources/").concat(id), data, {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('id')
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getDatasources",
    value: function getDatasources(_ref) {
      var Authorization, query;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getDatasources$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              Authorization = _ref.Authorization, query = _ref.query;
              return _context3.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat(API_URL, "/DataSources"), {
                headers: {
                  Authorization: Authorization || js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('id')
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
      });
    }
  }, {
    key: "getUserDatasources",
    value: function getUserDatasources(id, query) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getUserDatasources$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat(API_URL, "/users/").concat(id, "/dataSrouces"), {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('id')
                },
                params: _objectSpread({}, query)
              }).then(function (res) {
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
    key: "getDatasourceById",
    value: function getDatasourceById(id) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getDatasourceById$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat(API_URL, "/DataSources/").concat(id), {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('id')
                }
              }).then(function (res) {
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
    key: "removeDatasource",
    value: function removeDatasource(id) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function removeDatasource$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_10___default.a["delete"]("".concat(API_URL, "/DataSources/").concat(id), {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('id')
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }, {
    key: "getDocList",
    value: function getDocList(id) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getDocList$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat(API_URL, "/DataSources/").concat(id, "/doc-list"), {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('id')
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
      });
    }
  }, {
    key: "getFieldList",
    value: function getFieldList(id, docId) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getFieldList$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat(API_URL, "/DataSources/").concat(id, "/field-list"), {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('id')
                },
                params: {
                  docId: docId
                }
              }).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      });
    }
  }, {
    key: "queryDatasource",
    value: function queryDatasource(query) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function queryDatasource$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('', {}).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return err.response;
              }));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      });
    }
  }]);

  return DatasourceActions;
}();



/***/ }),

/***/ "./components/dashboards/create-dashboard.jsx":
/*!****************************************************!*\
  !*** ./components/dashboards/create-dashboard.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");



var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/create-dashboard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: '25px'
    },
    cardBody: {
      padding: '10px'
    },
    cardTitle: {
      fontSize: '12px',
      backgroundColor: '#3F51B5',
      padding: '3px 3px 3px 6px',
      color: '#FFF',
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
    },
    actionButtons: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
});

var getSteps = function getSteps() {
  return ['Dashboard Settings', 'Datasource Settings', 'Add Collaborators', 'Confirmation'];
};

var CreateDashboard = function CreateDashboard() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      activeStep = _useState[0],
      setActiveStep = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      datasources = _useState2[0],
      setDatasources = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a()),
      skipped = _useState3[0],
      setSkipped = _useState3[1];

  var steps = getSteps();
  useEffect(function () {
    var getDataSources = function getDataSources() {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getDataSources$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_4__["default"].getDatasources());

            case 3:
              data = _context.sent;
              setDatasources(data);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    };

    getDataSources();
  }, []);

  var getStepContent = function getStepContent(step) {
    switch (step) {
      case 0:
        return __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
          row: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
          type: "text",
          name: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
          type: "text",
          name: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }));

      case 1:
        return __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
          row: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
          id: "datasource-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Default DataSource"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__["default"], {
          labelId: "datasource-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, datasources.map(function (datasource) {
          return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
            value: datasource._id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, datasource.title);
        })));

      case 2:
        return 'Allow people to help you build your dashboard!';

      case 3:
        return 'Confirm your data';

      default:
        return 'Unknown step';
    }
  };

  var isStepOptional = function isStepOptional(step) {
    return step === 2;
  };

  var isStepSkipped = function isStepSkipped(step) {
    return skipped.has(step);
  };

  var handleNext = function handleNext() {
    var newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a(newSkipped.values());
      newSkipped["delete"](activeStep);
    }

    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
    setSkipped(newSkipped);
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: classes.cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Create new dashboard"), __jsx("div", {
    className: classes.cardBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeStep: activeStep,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, steps.map(function (label, index) {
    var stepProps = {};
    var labelProps = {};

    if (isStepOptional(index)) {
      labelProps.optional = __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Optional");
    }

    if (isStepSkipped(index)) {
      stepProps.completed = false;
    }

    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: label
    }, stepProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }), __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, labelProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }), label));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, activeStep === steps.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "All steps completed - you're finished"), __jsx("div", {
    className: classes.actionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleReset,
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Reset"))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, getStepContent(activeStep)), __jsx("div", {
    className: classes.actionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Back"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, activeStep === steps.length - 1 ? 'Finish' : 'Next')))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateDashboard);

/***/ })

})
//# sourceMappingURL=dashboards.js.b4f177fa07226cd40031.hot-update.js.map