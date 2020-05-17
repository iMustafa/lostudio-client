webpackHotUpdate("static/development/pages/dashboards/[id]/edit.js",{

/***/ "./pages/dashboards/[id]/edit.jsx":
/*!****************************************!*\
  !*** ./pages/dashboards/[id]/edit.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ArrowLeft */ "./node_modules/@material-ui/icons/ArrowLeft.js");
/* harmony import */ var _material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _components_dashboards_widgets_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/dashboards/widgets-menu */ "./components/dashboards/widgets-menu.jsx");
/* harmony import */ var _components_dashboards_settings_dashboard_settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/dashboards/settings/dashboard-settings */ "./components/dashboards/settings/dashboard-settings.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _helpers_decide_widgets__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../helpers/decide-widgets */ "./helpers/decide-widgets.jsx");




var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/pages/dashboards/[id]/edit.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  list: {
    width: 500
  },
  fullList: {
    width: 'auto'
  }
});

var EditDashboard = function EditDashboard() {
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_20__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(router.query.id),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    right: false,
    addWidget: false,
    settings: false
  }),
      menuState = _useState2[0],
      setMenuState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      layout = _useState3[0],
      setLayout = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      addType = _useState4[0],
      setAddType = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      WidgetSettings = _useState5[0],
      setWidgetSettings = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      SubDashboards = _useState6[0],
      setSubDashboards = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      refresh = _useState7[0],
      setRefresh = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getProps = function getProps() {
      var dashboard, $SubDashboards, $WidgetSettings;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_16__["default"].getDashboardById(id));

            case 3:
              dashboard = _context.sent;

              if (dashboard.isSub) {
                _context.next = 9;
                break;
              }

              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_16__["default"].getSubDashboards({
                id: id
              }));

            case 7:
              $SubDashboards = _context.sent;
              setSubDashboards($SubDashboards);

            case 9:
              _context.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_16__["default"].getWidgetSettings({
                id: id
              }));

            case 11:
              $WidgetSettings = _context.sent;
              setLayout($WidgetSettings);
              setWidgetSettings($WidgetSettings);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 16]], Promise);
    };

    getProps();
  }, [id, refresh]);

  var onLayoutChange = function onLayoutChange($event) {
    var layouts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function onLayoutChange$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            layouts = layout.map(function (item) {
              var $eventItem = $event.filter(function ($item) {
                return $item.i == item.layout.i;
              })[0];
              return _objectSpread({}, item, {
                layout: $eventItem
              });
            });
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(Promise.all(layouts.map(function (item) {
              return _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_17__["default"].updateWidgetSettings(item.id, item);
            })));

          case 4:
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 6]], Promise);
  };

  var toggleDrawer = function toggleDrawer(side, open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
      setMenuState(_objectSpread({}, menuState, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, side, open)));
    };
  };

  var addPredefinedWidget = function addPredefinedWidget(widget, _) {
    var $widget, saveWidget;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function addPredefinedWidget$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            $widget = _objectSpread({}, widget);
            delete $widget.id;
            delete $widget.icon;
            $widget.layout.i = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
            _context3.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_17__["default"].createWidgetSettings($widget));

          case 7:
            saveWidget = _context3.sent;
            _context3.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_16__["default"].addWidgetToDashboard(id, saveWidget.id));

          case 10:
            setLayout([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(layout), [{
              layout: $widget.layout,
              type: $widget.type
            }]));
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 13]], Promise);
  };

  var onWidgetAdd = function onWidgetAdd(config) {
    var isFormControl,
        widgetSettingsId,
        layoutItem,
        saveWidget,
        linkWidget,
        _saveWidget,
        _linkWidget,
        _args4 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function onWidgetAdd$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            isFormControl = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;
            widgetSettingsId = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : null;
            _context4.prev = 2;
            layoutItem = _objectSpread({
              layout: {
                i: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
                x: 0,
                y: 0,
                w: 6,
                h: 11,
                maxW: 16,
                isDraggable: true,
                isResizable: true
              }
            }, config);

            if (!widgetSettingsId) {
              _context4.next = 14;
              break;
            }

            delete layoutItem.layout;
            _context4.next = 8;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_17__["default"].createWidgetSettings(layoutItem));

          case 8:
            saveWidget = _context4.sent;
            _context4.next = 11;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_17__["default"].createSubWidget(widgetSettingsId, saveWidget.id));

          case 11:
            linkWidget = _context4.sent;
            _context4.next = 22;
            break;

          case 14:
            _context4.next = 16;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_17__["default"].createWidgetSettings(layoutItem));

          case 16:
            _saveWidget = _context4.sent;
            _context4.next = 19;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_16__["default"].addWidgetToDashboard(id, _saveWidget.id));

          case 19:
            _linkWidget = _context4.sent;
            layoutItem.id = _saveWidget.id;
            setLayout([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(layout), [layoutItem]));

          case 22:
            _context4.next = 27;
            break;

          case 24:
            _context4.prev = 24;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);

          case 27:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[2, 24]], Promise);
  };

  var addWidget = function addWidget(type, _) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function addWidget$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            setAddType(type);
            setMenuState(_objectSpread({}, menuState, {
              addWidget: true,
              right: false
            }));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var sideList = function sideList() {
    return __jsx("div", {
      className: classes.list,
      role: "presentation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 5
      }
    }, __jsx(_components_dashboards_widgets_menu__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onWidgetClick: addWidget,
      addPredefinedWidget: addPredefinedWidget,
      widgetSettings: Object.values(WidgetSettings),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }
    }));
  };

  var renderWidgets = function renderWidgets() {
    return layout.map(function (item, i) {
      return __jsx("div", {
        key: item.layout.i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 5
        }
      }, Object(_helpers_decide_widgets__WEBPACK_IMPORTED_MODULE_21__["decideWidget"])(item));
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, sideList()), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    anchor: "right",
    open: menuState.addWidget,
    onClose: toggleDrawer('addWidget', false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, Object(_helpers_decide_widgets__WEBPACK_IMPORTED_MODULE_21__["decideWidgetSettings"])(addType, onWidgetAdd)), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    anchor: "right",
    open: menuState.settings,
    onClose: toggleDrawer('settings', false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx(_components_dashboards_settings_dashboard_settings__WEBPACK_IMPORTED_MODULE_19__["default"], {
    id: id,
    refresh: refresh,
    setRefresh: setRefresh,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      router.back();
    },
    "aria-label": "back",
    size: "medium",
    style: {
      outline: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_11___default.a, {
    fontSize: "default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      maxWidth: 700,
      overflowX: 'scroll',
      alignItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: function onClick() {
      setId(router.query.id);
    },
    style: {
      marginLeft: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, "Main"), SubDashboards.map(function (subDashboard) {
    return __jsx("div", {
      key: subDashboard.subDashboardId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: function onClick() {
        setId(subDashboard.subDashboardId);
      },
      style: {
        marginLeft: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      noWrap: true,
      style: {
        fontWeight: 500,
        fontSize: '0.875rem',
        color: 'rgba(0, 0, 0, 0.87)'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 19
      }
    }, subDashboard.subDashboard.title)));
  })), __jsx("div", {
    style: {
      justifySelf: 'flex-end',
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      paddingRight: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      outline: 'none'
    },
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 71
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, "Save"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginLeft: '10px',
      outline: 'none'
    },
    size: "small",
    onClick: toggleDrawer('right', true),
    startIcon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 129
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, "Widgets"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginLeft: '10px',
      outline: 'none'
    },
    size: "small",
    onClick: toggleDrawer('settings', true),
    startIcon: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 132
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, "Settings"))), __jsx("div", {
    style: {
      paddingBottom: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, __jsx(react_grid_layout__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "layout",
    cols: 16,
    rowHeight: 30,
    width: 1920,
    layout: layout.map(function (item) {
      return item.layout;
    }),
    onLayoutChange: onLayoutChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, renderWidgets())));
}; // EditDashboard.getInitialProps = async (req) => {
//   const Authorization = Cookies(req).id
//   const { id } = req.query
//   const WidgetSettings = await DashboardActions.getWidgetSettings({ Authorization, id })
//   const SubDashboards = await DashboardActions.getSubDashboards({ Authorization, id })
//   return { WidgetSettings, SubDashboards }
// }


/* harmony default export */ __webpack_exports__["default"] = (EditDashboard);

/***/ })

})
//# sourceMappingURL=edit.js.6f694c4f6255f2ea1b2b.hot-update.js.map