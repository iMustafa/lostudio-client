webpackHotUpdate("static/development/pages/dashboards.js",{

/***/ "./pages/dashboards/index.tsx":
/*!************************************!*\
  !*** ./pages/dashboards/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _components_dashboards_create_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/dashboards/create-dashboard */ "./components/dashboards/create-dashboard.jsx");
/* harmony import */ var _components_dashboards_list_dashboards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dashboards/list-dashboards */ "./components/dashboards/list-dashboards.jsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SideMenu */ "./components/SideMenu.jsx");


var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/pages/dashboards/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Dashboards = function Dashboards(_ref) {
  var Collaborations = _ref.Collaborations,
      Dashboards = _ref.Dashboards;
  var dashboards = Object.values(Dashboards);
  var collaborations = Object.values(Collaborations);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      refresh = _useState[0],
      setRefresh = _useState[1];

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 2,
    style: {
      position: 'relative'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_components_SideMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    style: {
      margin: "25px auto 25px auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_components_dashboards_create_dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    refresh: refresh,
    setRefresh: setRefresh,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx(_components_dashboards_list_dashboards__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dashboards: dashboards,
    title: "My Dashboards",
    type: "personal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_components_dashboards_list_dashboards__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dashboards: collaborations,
    title: "My Collaborations",
    type: "collaborations",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))));
};

Dashboards.getInitialProps = function _callee(req) {
  var Authorization, _Dashboards, Collaborations;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          Authorization = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(req).id;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getDashboards({
            Authorization: Authorization
          }));

        case 4:
          _Dashboards = _context.sent;
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getCollaboratorations({
            Authorization: Authorization
          }));

        case 7:
          Collaborations = _context.sent;
          return _context.abrupt("return", {
            Collaborations: Collaborations,
            Dashboards: _Dashboards
          });

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            Collaborations: [],
            Dashboards: []
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboards);

/***/ })

})
//# sourceMappingURL=dashboards.js.b91ef3af18e060cbd1eb.hot-update.js.map