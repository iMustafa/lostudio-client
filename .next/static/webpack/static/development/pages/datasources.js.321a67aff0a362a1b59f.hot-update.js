webpackHotUpdate("static\\development\\pages\\datasources.js",{

/***/ "./pages/datasources/index.tsx":
/*!*************************************!*\
  !*** ./pages/datasources/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_datasource_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/datasource.actions */ "./actions/datasource.actions.ts");
/* harmony import */ var _components_datasources_AddDatasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/datasources/AddDatasource */ "./components/datasources/AddDatasource.jsx");
/* harmony import */ var _components_datasources_ListDatasources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/datasources/ListDatasources */ "./components/datasources/ListDatasources.jsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SideMenu */ "./components/SideMenu.jsx");


var _jsxFileName = "F:\\Projects\\LoStudio\\client\\pages\\datasources\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {};
});

var Datasources = function Datasources(_Datasources) {
  var classes = useStyles();

  var renderDatasource = function renderDatasource() {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(_Datasources).map(function (datasource) {});
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 2,
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_SideMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: 'container',
    style: {
      margin: "25px auto 0 auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_components_datasources_AddDatasource__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_components_datasources_ListDatasources__WEBPACK_IMPORTED_MODULE_7__["default"], {
    datasources: _Datasources,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

Datasources.getInitialProps = function _callee(req) {
  var Authorization, _Datasources2;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          Authorization = next_cookies__WEBPACK_IMPORTED_MODULE_4___default()(req).id;
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_datasource_actions__WEBPACK_IMPORTED_MODULE_5__["default"].getDatasources({
            Authorization: Authorization
          }));

        case 4:
          _Datasources2 = _context.sent;
          return _context.abrupt("return", _Datasources2);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", []);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

/* harmony default export */ __webpack_exports__["default"] = (Datasources);

/***/ })

})
//# sourceMappingURL=datasources.js.321a67aff0a362a1b59f.hot-update.js.map