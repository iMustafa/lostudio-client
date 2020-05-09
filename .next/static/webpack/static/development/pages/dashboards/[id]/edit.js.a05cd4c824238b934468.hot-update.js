webpackHotUpdate("static\\development\\pages\\dashboards\\[id]\\edit.js",{

/***/ "./components/widgets/form-controls/autocomplete/autocomplete-widget-settings.jsx":
/*!****************************************************************************************!*\
  !*** ./components/widgets/form-controls/autocomplete/autocomplete-widget-settings.jsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\form-controls\\autocomplete\\autocomplete-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
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
  };
});

var AutoCompleteWidgetSettings = function AutoCompleteWidgetSettings(_ref) {
  var widget = _ref.widget,
      handleSettingsClose = _ref.handleSettingsClose,
      isAdding = _ref.isAdding,
      onWidgetAdd = _ref.onWidgetAdd;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Placeholder"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Value"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Unique Properties")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    row: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "female",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }),
    label: "From Data Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "male",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }),
    label: "Fixed Values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteWidgetSettings);

/***/ })

})
//# sourceMappingURL=edit.js.a05cd4c824238b934468.hot-update.js.map