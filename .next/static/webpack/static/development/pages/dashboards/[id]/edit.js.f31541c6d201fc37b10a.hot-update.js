webpackHotUpdate("static/development/pages/dashboards/[id]/edit.js",{

/***/ "./components/widgets/form-controls/number/number-widget.jsx":
/*!*******************************************************************!*\
  !*** ./components/widgets/form-controls/number/number-widget.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");


var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/number/number-widget.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {};
});

var NumberWidget = function NumberWidget(_ref) {
  var widgetId = _ref.widgetId;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    properties: {}
  }),
      widget = _useState[0],
      setWidget = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    right: false
  }),
      menuState = _useState2[0],
      setMenuState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getData = function getData() {
      var $widget;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getWidgetSettingsById(widgetId));

            case 3:
              $widget = _context.sent;
              setWidget($widget);
              return _context.abrupt("return", $widget);

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

    getData();
  }, []);
  return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullWidth: true,
    type: "number",
    label: widget.properties.label,
    id: widget.properties.id,
    placeholder: widget.properties.placeholder,
    className: widget.properties.className,
    value: widget.properties.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NumberWidget);

/***/ })

})
//# sourceMappingURL=edit.js.f31541c6d201fc37b10a.hot-update.js.map