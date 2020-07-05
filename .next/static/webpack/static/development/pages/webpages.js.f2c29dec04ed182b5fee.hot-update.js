webpackHotUpdate("static/development/pages/webpages.js",{

/***/ "./pages/webpages/index.tsx":
/*!**********************************!*\
  !*** ./pages/webpages/index.tsx ***!
  \**********************************/
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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_dashboards_list_dashboards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dashboards/list-dashboards */ "./components/dashboards/list-dashboards.jsx");


var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/pages/webpages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var WebPages = function WebPages(_ref) {
  var WebPages = _ref.WebPages;
  var $WebPages = Object.values(WebPages);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      refresh = _useState[0],
      setRefresh = _useState[1];

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
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
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_components_dashboards_list_dashboards__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dashboards: $WebPages,
    dashboardType: "webpage",
    title: "My Webpages",
    type: "personal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))));
};

WebPages.getInitialProps = function _callee(req) {
  var Authorization, _WebPages;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          Authorization = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(req).id;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getWebpages({
            Authorization: Authorization
          }));

        case 4:
          _WebPages = _context.sent;
          return _context.abrupt("return", {
            WebPages: _WebPages
          });

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            WebPages: []
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (WebPages);

/***/ })

})
//# sourceMappingURL=webpages.js.f2c29dec04ed182b5fee.hot-update.js.map