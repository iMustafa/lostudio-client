webpackHotUpdate("static/development/pages/dashboards/[id]/edit.js",{

/***/ "./components/widgets/form-controls/select/select-widget-settings.jsx":
/*!****************************************************************************!*\
  !*** ./components/widgets/form-controls/select/select-widget-settings.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/select/select-widget-settings.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















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

var SelectWidgetSettings = function SelectWidgetSettings(_ref) {
  var widget = _ref.widget,
      handleSettingsClose = _ref.handleSettingsClose,
      isAdding = _ref.isAdding,
      onWidgetAdd = _ref.onWidgetAdd;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    label: '',
    id: '',
    name: '',
    className: ''
  }),
      properties = _useState[0],
      setProperties = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('datasource'),
      selectionOption = _useState2[0],
      setSelectionOption = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      datasources = _useState3[0],
      setDatasources = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(!isAdding ? widget.dataSourceId : ''),
      datasource = _useState4[0],
      setDatasource = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      docList = _useState5[0],
      setDocList = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(!isAdding ? widget.config.docId : ''),
      doc = _useState6[0],
      setDoc = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      fieldList = _useState7[0],
      setFieldList = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(!isAdding ? widget.config.fields : ''),
      fields = _useState8[0],
      setFields = _useState8[1];

  var getDatasources = function getDatasources() {
    var $datasources, $docList, $fieldList;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getDatasources$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_15__["default"].getDatasources({}));

          case 3:
            $datasources = _context.sent;

            if (isAdding) {
              _context.next = 13;
              break;
            }

            _context.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_15__["default"].getDocList(datasource));

          case 7:
            $docList = _context.sent;
            _context.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_15__["default"].getFieldList(datasource, doc));

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
    }, null, null, [[0, 17]], Promise);
  };

  var getDocList = function getDocList(id) {
    var $docList;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getDocList$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setDatasource(id);
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_15__["default"].getDocList(id));

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
    }, null, null, [[0, 9]], Promise);
  };

  var getFieldList = function getFieldList(id, docId) {
    var $fieldList;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getFieldList$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setDoc(docId);
            _context3.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_15__["default"].getFieldList(id, docId));

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
    }, null, null, [[0, 9]], Promise);
  };

  var handleDatasourceChange = function handleDatasourceChange(event) {
    var _event$target, name, value;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function handleDatasourceChange$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _event$target = event.target, name = _event$target.name, value = _event$target.value;
            setFieldList([]);
            setFields([]);
            _context4.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getDocList(value));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleDocChange = function handleDocChange(event) {
    var _event$target2, name, value;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function handleDocChange$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _event$target2 = event.target, name = _event$target2.name, value = _event$target2.value;
            setFieldList([]);
            setFields([]);
            _context5.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(getFieldList(datasource, value));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleFieldChange = function handleFieldChange(event) {
    var value = event.target.value;
    setFields(value);
  };

  var handlePropertiesChange = function handlePropertiesChange(event) {
    var _event$target3 = event.target,
        name = _event$target3.name,
        value = _event$target3.value;
    setProperties(_objectSpread({}, properties, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getDatasources();
  }, []);

  var handleSourceChange = function handleSourceChange(event) {
    var value = event.target.value;
    setSelectionOption(value);
  };

  var renderFieldSettings = function renderFieldSettings() {
    return fieldList.length ? __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 7
      }
    }, __jsx("h2", {
      className: classes.h2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: classes.span,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }, "Fields Settings")), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
      onChange: handleFieldChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    }, fieldList.map(function (field) {
      return __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: field,
        control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], {
          value: field,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 26
          }
        }),
        label: field,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 15
        }
      });
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Typography"], {
      style: {
        fontSize: 12,
        color: '#F00',
        marginTop: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }
    }, "* You can only select one field in a select field.")) : __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 7
      }
    });
  };

  var saveConfigData = function saveConfigData() {
    var data, update;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function saveConfigData$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            data = {
              dataSourceId: datasource,
              config: {
                docId: doc,
                fields: [fields],
                type: selectionOption == 'datasource' ? 'simple' : 'constant',
                func: 'find',
                query: {},
                values: selectionOption == 'datasource' ? [] : []
              },
              properties: properties,
              type: 'Select'
            };

            if (!isAdding) {
              _context6.next = 6;
              break;
            }

            onWidgetAdd(data);
            _context6.next = 10;
            break;

          case 6:
            _context6.next = 8;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_16__["default"].updateWidgetSettings(widget.id, data));

          case 8:
            update = _context6.sent;
            handleSettingsClose(update);

          case 10:
            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 12]], Promise);
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, "Widget Info")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, "Title"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, "Widget Properties")), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, "Label"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "label",
    onChange: handlePropertiesChange,
    value: properties.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, "ID"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "id",
    onChange: handlePropertiesChange,
    value: properties.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, "Name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "name",
    onChange: handlePropertiesChange,
    value: properties.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }, "Class name"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "className",
    onChange: handlePropertiesChange,
    value: properties.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  })), __jsx("h2", {
    className: classes.h2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, "Unique Properties")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    row: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onChange: handleSourceChange,
    value: selectionOption,
    style: {
      justifyContent: 'space-evenly',
      width: '100%',
      flexDirection: 'row'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "datasource",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 57
      }
    }),
    label: "From Data Source",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "fixed",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 52
      }
    }),
    label: "Fixed Values",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }))), selectionOption == 'datasource' ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "data-source",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, "Data Source"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__["default"], {
    name: "datasource",
    labelId: "data-source",
    value: datasource,
    onChange: handleDatasourceChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, datasources.map(function (item) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item.id,
      value: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 43
      }
    }, item.title);
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    className: classes.formControl,
    disabled: datasource ? false : true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "doc-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 15
    }
  }, "Table/Collection"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__["default"], {
    name: "docList",
    labelId: "doc-list",
    value: doc,
    onChange: handleDocChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }, docList.map(function (item) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 39
      }
    }, item);
  }))), renderFieldSettings()) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullWidth: true,
    color: "primary",
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 7
    }
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectWidgetSettings);

/***/ })

})
//# sourceMappingURL=edit.js.e64c686913b6b508c4f2.hot-update.js.map