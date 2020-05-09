webpackHotUpdate("static/development/pages/dashboards.js",{

/***/ "./components/dashboards/create-dashboard.jsx":
/*!****************************************************!*\
  !*** ./components/dashboards/create-dashboard.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");










var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/create-dashboard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({
    title: '',
    description: '',
    datasourceId: '',
    collaborators: []
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(0),
      activeStep = _useState2[0],
      setActiveStep = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]),
      datasources = _useState3[0],
      setDatasources = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9___default.a()),
      skipped = _useState4[0],
      setSkipped = _useState4[1];

  var steps = getSteps();
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    var getDataSources = function getDataSources() {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.async(function getDataSources$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getDatasources({}));

            case 3:
              data = _context.sent;
              console.log(data);
              setDatasources(data);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    };

    getDataSources();
  }, []);

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    console.log(name, value);
    setState(_objectSpread({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, value)));
  };

  var getStepContent = function getStepContent(step) {
    switch (step) {
      case 0:
        return __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_20__["default"], {
          row: true,
          style: {
            marginBottom: 15
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
          onChange: handleChange,
          fullWidth: true,
          label: "Title",
          type: "text",
          name: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
          onChange: handleChange,
          fullWidth: true,
          label: "Description",
          multiline: true,
          type: "text",
          name: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }));

      case 1:
        return __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_20__["default"], {
          row: true,
          style: {
            marginBottom: 15
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_25__["default"], {
          id: "datasource-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "Default DataSource"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_23__["default"], {
          value: state.datasourceId,
          onChange: handleChange,
          name: "datasourceId",
          fullWidth: true,
          labelId: "datasource-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, datasources.map(function (datasource) {
          return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_24__["default"], {
            value: datasource.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
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
      newSkipped = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9___default.a(newSkipped.values());
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

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: classes.cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Create new dashboard"), __jsx("div", {
    className: classes.cardBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_15__["default"], {
    activeStep: activeStep,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, steps.map(function (label, index) {
    var stepProps = {};
    var labelProps = {};

    if (isStepOptional(index)) {
      labelProps.optional = __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Optional");
    }

    if (isStepSkipped(index)) {
      stepProps.completed = false;
    }

    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_16__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
      key: label
    }, stepProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, labelProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), label));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, activeStep === steps.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "All steps completed - you're finished"), __jsx("div", {
    className: classes.actionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: handleReset,
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Reset"))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, getStepContent(activeStep)), __jsx("div", {
    className: classes.actionButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Back"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, activeStep === steps.length - 1 ? 'Finish' : 'Next')))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateDashboard);

/***/ })

})
//# sourceMappingURL=dashboards.js.d3d96d84909e3639c515.hot-update.js.map