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
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
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
      lineNumber: 47
    },
    __self: this
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Placeholder"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Value"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Unique Properties")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    row: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      checked: state.checkedA,
      value: "checkedA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }),
    label: "Secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      checked: state.checkedA,
      value: "checkedA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }),
    label: "Secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteWidgetSettings);

/***/ })

})
//# sourceMappingURL=edit.js.df51e408e4da7fc6f1ad.hot-update.js.map