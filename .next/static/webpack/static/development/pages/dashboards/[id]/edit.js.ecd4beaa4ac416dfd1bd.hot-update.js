webpackHotUpdate("static\\development\\pages\\dashboards\\[id]\\edit.js",{

/***/ "./components/widgets/form-controls/autocomplete/autocomplete-widget-settings.jsx":
/*!****************************************************************************************!*\
  !*** ./components/widgets/form-controls/autocomplete/autocomplete-widget-settings.jsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\form-controls\\autocomplete\\autocomplete-widget-settings.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      datasources = _useState[0],
      setDatasources = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(!isAdding ? widget.dataSourceId : ''),
      datasource = _useState2[0],
      setDatasource = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      docList = _useState3[0],
      setDocList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(!isAdding ? widget.config.docId : ''),
      doc = _useState4[0],
      setDoc = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      fieldList = _useState5[0],
      setFieldList = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(!isAdding ? widget.config.fields : []),
      fields = _useState6[0],
      setFields = _useState6[1];

  var getDatasources = function getDatasources() {
    var $datasources, $docList, $fieldList;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getDatasources$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDatasources({}));

          case 3:
            $datasources = _context.sent;

            if (isAdding) {
              _context.next = 13;
              break;
            }

            _context.next = 7;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDocList(datasource));

          case 7:
            $docList = _context.sent;
            _context.next = 10;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getFieldList(datasource, doc));

          case 10:
            $fieldList = _context.sent;
            setDocList($docList);
            setFieldList($fieldList);

          case 13:
            setDatasources($datasources);
            return _context.abrupt("return", $datasources);

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 17]]);
  };

  var getDocList = function getDocList(id) {
    var $docList;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getDocList$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setDatasource(id);
            _context2.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDocList(id));

          case 4:
            $docList = _context2.sent;
            setDocList($docList);
            return _context2.abrupt("return", $docList);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };

  var getFieldList = function getFieldList(id, docId) {
    var $fieldList;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getFieldList$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setDoc(docId);
            _context3.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getFieldList(id, docId));

          case 4:
            $fieldList = _context3.sent;
            setFieldList($fieldList);
            return _context3.abrupt("return", $fieldList);

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };

  var handleDatasourceChange = function handleDatasourceChange(event) {
    var _event$target, name, value;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function handleDatasourceChange$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _event$target = event.target, name = _event$target.name, value = _event$target.value;
            setFieldList([]);
            setFields([]);
            _context4.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getDocList(value));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  };

  var handleDocChange = function handleDocChange(event) {
    var _event$target2, name, value;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function handleDocChange$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _event$target2 = event.target, name = _event$target2.name, value = _event$target2.value;
            setFieldList([]);
            setFields([]);
            _context5.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getFieldList(datasource, value));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    });
  };

  var handleFieldChange = function handleFieldChange(name) {
    return function (event) {
      var checked = event.target.checked;
      checked ? setFields([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fields), [name])) : setFields(fields.filter(function (field) {
        return field != name;
      }));
    };
  };

  var renderFieldSettings = function renderFieldSettings() {
    return fieldList.length ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("h2", {
      className: classes.h2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("span", {
      className: classes.span,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "Fields Settings")), fieldList.map(function (field) {
      return __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: field,
        control: __jsx(Checkbox, {
          checked: fields.includes(field),
          onChange: handleFieldChange(field),
          value: field,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }),
        label: field,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      });
    })) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    });
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Placeholder"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Value"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  })), __jsx("h2", {
    className: classes.h2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("span", {
    className: classes.span,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Unique Properties")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      justifyContent: 'space-evenly',
      width: '100%',
      flexDirection: 'row'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: "female",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }),
    label: "From Data Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: "male",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }),
    label: "Fixed Values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "data-source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, datasources.map(function (item) {
    return __jsx(MenuItem, {
      key: item.id,
      value: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, item.title);
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "doc-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, docList.map(function (item) {
    return __jsx(MenuItem, {
      key: item,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, item);
  }))), renderFieldSettings()), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteWidgetSettings);

/***/ })

})
//# sourceMappingURL=edit.js.ecd4beaa4ac416dfd1bd.hot-update.js.map