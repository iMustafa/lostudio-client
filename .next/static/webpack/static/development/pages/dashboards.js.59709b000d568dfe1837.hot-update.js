webpackHotUpdate("static/development/pages/dashboards.js",{

/***/ "./components/dashboards/create-dashboard.jsx":
/*!****************************************************!*\
  !*** ./components/dashboards/create-dashboard.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");




var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/create-dashboard.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















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

var CreateDashboard = function CreateDashboard(_ref) {
  var setRefresh = _ref.setRefresh,
      refresh = _ref.refresh;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    title: '',
    description: '',
    datasourceId: '',
    collaborators: []
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      activeStep = _useState2[0],
      setActiveStep = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      datasources = _useState3[0],
      setDatasources = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Set()),
      skipped = _useState4[0],
      setSkipped = _useState4[1];

  var steps = getSteps();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getDataSources = function getDataSources() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getDataSources$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_4__["default"].getDatasources({}));

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
      }, null, null, [[0, 7]], Promise);
    };

    getDataSources();
  }, []);

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setState(_objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value)));
  };

  var getStepContent = function getStepContent(step) {
    switch (step) {
      case 0:
        return __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
          row: true,
          style: {
            marginBottom: 15
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }
        }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
          onChange: handleChange,
          fullWidth: true,
          label: "Title",
          type: "text",
          name: "title",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
          onChange: handleChange,
          fullWidth: true,
          label: "Description",
          multiline: true,
          type: "text",
          name: "description",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }
        }));

      case 1:
        return __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
          row: true,
          style: {
            marginBottom: 15
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }
        }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
          id: "datasource-label",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }
        }, "Default DataSource"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__["default"], {
          value: state.datasourceId,
          onChange: handleChange,
          name: "datasourceId",
          fullWidth: true,
          labelId: "datasource-label",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }
        }, datasources.map(function (datasource) {
          return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
            value: datasource.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }
          }, datasource.title);
        })));

      case 2:
        return 'Allow people to help you build your dashboard!';

      case 3:
        return __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }
        }, __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }
        }, "Name: ", state.title), __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }
        }, "Description: ", state.description), __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }
        }, "Datasource: ", state.datasourceId));

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
      newSkipped = new Set(newSkipped.values());
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

  var submitData = function submitData() {
    var dashboard;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function submitData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_19__["default"].createDashboard({
              dashboard: state
            }));

          case 3:
            dashboard = _context2.sent;
            setRefresh(refresh + 1);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]], Promise);
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.cardTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, "Create new dashboard"), __jsx("div", {
    className: classes.cardBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeStep: activeStep,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, steps.map(function (label, index) {
    var stepProps = {};
    var labelProps = {};

    if (isStepOptional(index)) {
      labelProps.optional = __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "caption",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 39
        }
      }, "Optional");
    }

    if (isStepSkipped(index)) {
      stepProps.completed = false;
    }

    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: label
    }, stepProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, labelProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 19
      }
    }), label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, "All steps completed - you're finished"), __jsx("div", {
    className: classes.actionButtons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }, "Reset"))) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, getStepContent(activeStep)), __jsx("div", {
    className: classes.actionButtons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  }, "Back"), activeStep === steps.length - 1 ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "contained",
    color: "primary",
    onClick: submitData,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 29
    }
  }, "Finish") : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  }, "Next")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateDashboard);

/***/ })

})
//# sourceMappingURL=dashboards.js.59709b000d568dfe1837.hot-update.js.map