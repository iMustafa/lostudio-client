webpackHotUpdate("static/development/pages/dashboards.js",{

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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
          label: "Title",
          type: "text",
          name: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
          label: "Description",
          multiline: true,
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
//# sourceMappingURL=dashboards.js.c5c73d9e616b9fddfa91.hot-update.js.map