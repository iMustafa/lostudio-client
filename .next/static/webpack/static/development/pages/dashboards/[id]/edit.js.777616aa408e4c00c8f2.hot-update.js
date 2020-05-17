webpackHotUpdate("static/development/pages/dashboards/[id]/edit.js",{

/***/ "./components/widgets/table/table-widget.jsx":
/*!***************************************************!*\
  !*** ./components/widgets/table/table-widget.jsx ***!
  \***************************************************/
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
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Refresh */ "./node_modules/@material-ui/icons/Refresh.js");
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _table_widget_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./table-widget-settings */ "./components/widgets/table/table-widget-settings.jsx");
/* harmony import */ var _export_table_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./export-table-data */ "./components/widgets/table/export-table-data.jsx");
/* harmony import */ var _helpers_measure_conditions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers/measure-conditions */ "./helpers/measure-conditions.js");



var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/table/table-widget.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    list: {
      width: 500
    },
    widgetActions: {
      display: 'flex',
      backgroundColor: "#3F51B5",
      borderTopRightRadius: "5px",
      borderTopLeftRadius: "5px"
    },
    widgetTitle: {
      flex: 1,
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      paddingLeft: "10px"
    },
    actionButtons: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  };
});

var TableWidget = function TableWidget(_ref) {
  var widgetId = _ref.widgetId;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      widget = _useState[0],
      setWidget = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoadingData = _useState3[0],
      setIsLoadingData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      refresh = _useState4[0],
      setRefresh = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    right: false,
    "export": false
  }),
      menuState = _useState5[0],
      setMenuState = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      measureConditions = _useState6[0],
      setMeasureConditions = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      measureConditionsFields = _useState7[0],
      setMeasureConditionsFields = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getMeasureConditions = function getMeasureConditions() {
      var $measureConditions;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getMeasureConditions$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].getWidgetSettingsMeasureConditions(widgetId));

            case 3:
              $measureConditions = _context.sent;
              setMeasureConditions($measureConditions);
              setMeasureConditionsFields($measureConditions.map(function (condition) {
                return condition.field;
              }));
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
      }, null, null, [[0, 8]], Promise);
    };

    getMeasureConditions();
  }, []);

  var getWidgetData = function getWidgetData() {
    var $data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getWidgetData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].executeWidgetQuery(widgetId));

          case 3:
            $data = _context2.sent;
            setData($data);
            return _context2.abrupt("return", $data);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]], Promise);
  };

  var getWidget = function getWidget() {
    var $widget;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getWidget$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].getWidgetSettingsById(widgetId));

          case 3:
            $widget = _context3.sent;
            setWidget($widget);
            return _context3.abrupt("return", $widget);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]], Promise);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getWidget();
    getWidgetData();
  }, [refresh]);

  var refreshData = function refreshData() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function refreshData$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            setIsLoadingData(true);
            getWidget();
            getWidgetData();
            setIsLoadingData(false);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleSettingsClose = function handleSettingsClose() {
    setRefresh(refresh + 1);
    toggleDrawer('right', false);
  };

  var onRowAdd = function onRowAdd(newData) {
    var $data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function onRowAdd$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].addWidgetSettingsDocument(widgetId, newData));

          case 3:
            $data = _context5.sent;
            getWidgetData();
            return _context5.abrupt("return", $data);

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 8]], Promise);
  };

  var onRowUpdate = function onRowUpdate(newData, oldData) {
    var keyId, $data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function onRowUpdate$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            keyId = oldData[widget.config.primaryKey];
            _context6.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].editWidgetSettingsDocument(widgetId, newData, keyId));

          case 4:
            $data = _context6.sent;
            getWidgetData();
            return _context6.abrupt("return", $data);

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 9]], Promise);
  };

  var onRowDelete = function onRowDelete(oldData) {
    var keyId, $data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function onRowDelete$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            keyId = oldData[widget.config.primaryKey];
            _context7.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].deleteWidgetSettingsDocument(widgetId, keyId));

          case 4:
            $data = _context7.sent;
            getWidgetData();
            return _context7.abrupt("return", $data);

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 9]], Promise);
  };

  var editable = function editable() {
    var _widget$config = widget.config,
        isEditable = _widget$config.isEditable,
        isDeletable = _widget$config.isDeletable,
        isAddable = _widget$config.isAddable;
    var obj = {};
    if (isEditable) obj.onRowUpdate = onRowUpdate;
    if (isDeletable) obj.onRowDelete = onRowDelete;
    if (isAddable) obj.onRowAdd = onRowAdd;
    return obj;
  };

  var renderTable = function renderTable() {
    return isLoadingData || !widget ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 40
      }
    }) : __jsx(material_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
      columns: widget.config.fields.map(function (field) {
        return {
          field: field,
          title: field,
          render: function render(rowData) {
            var doesHaveCondition = measureConditionsFields.includes(field);

            if (doesHaveCondition) {
              var condition = measureConditions.filter(function (c) {
                return c.field == field;
              })[0];
              var isConditionMet = Object(_helpers_measure_conditions__WEBPACK_IMPORTED_MODULE_15__["measureConditionResult"])(condition, rowData[field]);
              return isConditionMet ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                style: {
                  backgroundColor: condition.color
                },
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 19
                }
              }, rowData[field]) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 21
                }
              }, rowData[field]);
            } else {
              return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 24
                }
              }, rowData[field]);
            }
          }
        };
      }),
      data: data,
      title: widget.title || '',
      editable: editable(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }
    });
  };

  var toggleDrawer = function toggleDrawer(side, open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
      setMenuState(_objectSpread({}, menuState, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, side, open)));
    };
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.widgetActions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.widgetTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      color: "#FFF"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, widget && widget.title ? widget.title : 'Widget Title')), __jsx("div", {
    className: classes.actionButtons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: toggleDrawer('export', true),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: toggleDrawer('right', true),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: refreshData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      color: "#FFF"
    },
    fontSize: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  })))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, renderTable()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, __jsx(_table_widget_settings__WEBPACK_IMPORTED_MODULE_13__["default"], {
    widget: widget,
    handleSettingsClose: handleSettingsClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    anchor: "right",
    open: menuState["export"],
    onClose: toggleDrawer('export', false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, __jsx(_export_table_data__WEBPACK_IMPORTED_MODULE_14__["default"], {
    widget: widget,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TableWidget);

/***/ })

})
//# sourceMappingURL=edit.js.777616aa408e4c00c8f2.hot-update.js.map