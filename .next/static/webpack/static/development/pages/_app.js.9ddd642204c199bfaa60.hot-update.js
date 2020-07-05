webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/SideMenu.jsx":
/*!*********************************!*\
  !*** ./components/SideMenu.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Web */ "./node_modules/@material-ui/icons/Web.js");
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Storage */ "./node_modules/@material-ui/icons/Storage.js");
/* harmony import */ var _material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Assessment */ "./node_modules/@material-ui/icons/Assessment.js");
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "./node_modules/@material-ui/icons/StarBorder.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Book */ "./node_modules/@material-ui/icons/Book.js");
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_18__);



var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/SideMenu.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  };
});

var SideMenu = function SideMenu() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      dashboards = _useState[0],
      setDashboards = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      webPages = _useState2[0],
      setWebPages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      refresh = _useState3[0],
      setRefresh = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    key: "dashboards",
    text: "Dashboards",
    route: "/dashboards",
    icon: function icon() {
      return __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 19
        }
      });
    },
    list: dashboards,
    open: false
  }, {
    key: "webpages",
    text: "Web Pages",
    route: "/webpages",
    icon: function icon() {
      return __jsx(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 19
        }
      });
    },
    list: webPages,
    open: false
  }, {
    key: "datasources",
    text: "Data Sources",
    route: "/datasources",
    icon: function icon() {
      return __jsx(_material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }
      });
    }
  }]),
      routes = _useState4[0],
      setRoutes = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var udpateView = function udpateView() {
      var GetDashboards, GetWebPages, $routes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function udpateView$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getDashboards({}));

            case 3:
              GetDashboards = _context.sent;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_13__["default"].getWebpages({}));

            case 6:
              GetWebPages = _context.sent;
              $routes = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(routes);
              $routes[0].list = GetDashboards;
              $routes[2].list = GetWebPages;
              setRoutes(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])($routes));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 13]], Promise);
    };

    udpateView();
  }, [refresh]);

  var handleChange = function handleChange(index) {
    var $routes = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(routes);

    $routes[index].open = !$routes[index].open;
    setRoutes(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])($routes));
  };

  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, routes.map(function (item, index) {
    return item.list ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.key,
      button: true,
      onClick: function onClick() {
        handleChange(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, item.icon()), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: function onClick() {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(item.route);
      },
      primary: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }), item.open ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 30
      }
    }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 47
      }
    })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17__["default"], {
      "in": item.open,
      timeout: "auto",
      unmountOnExit: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
      component: "div",
      disablePadding: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, item.list.map(function (e, i) {
      return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: e.title + i,
        button: true,
        onClick: function onClick() {
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("".concat(item.route, "/").concat(e.id, "/edit"));
        },
        className: classes.nested,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 23
        }
      }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 25
        }
      }, __jsx(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 27
        }
      })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        primary: e.title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }
      }));
    })))) : __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      button: true,
      key: item.key,
      onClick: function onClick() {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(item.route);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 15
      }
    }, item.icon()), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      primary: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 15
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ })

})
//# sourceMappingURL=_app.js.9ddd642204c199bfaa60.hot-update.js.map