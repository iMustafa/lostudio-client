webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoStudio; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SideMenu */ "./components/SideMenu.jsx");
/* harmony import */ var _components_ApplicationMainBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ApplicationMainBar */ "./components/ApplicationMainBar.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_redirectTo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/redirectTo */ "./components/redirectTo.js");
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-grid-layout/css/styles.css */ "./node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-resizable/css/styles.css */ "./node_modules/react-resizable/css/styles.css");
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var dhtmlx_gantt_codebase_dhtmlxgantt_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! dhtmlx-gantt/codebase/dhtmlxgantt.css */ "./node_modules/dhtmlx-gantt/codebase/dhtmlxgantt.css");
/* harmony import */ var dhtmlx_gantt_codebase_dhtmlxgantt_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_gantt_codebase_dhtmlxgantt_css__WEBPACK_IMPORTED_MODULE_19__);







var _jsxFileName = "F:\\Projects\\LoStudio\\client\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;













var theme = {
  primary: 'green'
};
var routes = [{
  key: 'dashboards',
  text: 'Dashboards',
  route: '/dashboards',
  icon: function icon() {
    return __jsx(DashboardIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }
}, {
  key: 'datasources',
  text: 'Data Sources',
  route: '/datasources',
  icon: function icon() {
    return __jsx(StorageIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }
}, {
  key: 'widgets',
  text: 'Widgets',
  route: '/widgets',
  icon: function icon() {
    return __jsx(AssessmentIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  }
}];

var LoStudio =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LoStudio, _App);

  function LoStudio() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LoStudio);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(LoStudio).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LoStudio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_14__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "LoStudio"), __jsx("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), __jsx(_components_ApplicationMainBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        container: true,
        spacing: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        item: true,
        xs: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(_components_SideMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        item: true,
        xs: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var Component, router, ctx, pageProps, c;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
              pageProps = {};
              c = next_cookies__WEBPACK_IMPORTED_MODULE_15___default()(ctx);

              if (!Component.getInitialProps) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

            case 6:
              pageProps = _context.sent;

            case 7:
              if (!(typeof c.id == 'undefined')) {
                _context.next = 15;
                break;
              }

              if (!(ctx.pathname == "/login" || ctx.pathname == "/forgot-password" || ctx.pathname == '/signup')) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", {
                pageProps: pageProps
              });

            case 12:
              Object(_components_redirectTo__WEBPACK_IMPORTED_MODULE_16__["default"])('/login', {
                res: ctx.res,
                status: 301
              });

            case 13:
              _context.next = 16;
              break;

            case 15:
              if (ctx.pathname == "/") {
                Object(_components_redirectTo__WEBPACK_IMPORTED_MODULE_16__["default"])('/dashboards', {
                  res: ctx.res,
                  status: 301
                });
              }

            case 16:
              return _context.abrupt("return", {
                pageProps: pageProps
              });

            case 17:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return LoStudio;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.2570e4e496a6e8dc916f.hot-update.js.map