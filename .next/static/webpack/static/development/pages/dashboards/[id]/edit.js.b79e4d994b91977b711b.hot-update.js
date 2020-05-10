webpackHotUpdate("static/development/pages/dashboards/[id]/edit.js",{

/***/ "./components/widgets/form-controls/password/password-widget.jsx":
/*!***********************************************************************!*\
  !*** ./components/widgets/form-controls/password/password-widget.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");


var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/password/password-widget.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {};
});

var PasswordWidget = function PasswordWidget(_ref) {
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      value = _useState3[0],
      setValue = _useState3[1];

  var handleChange = function handleChange(event) {
    var value = event.target.value;
    setValue(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getData = function getData() {
      var $widget;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(WidgetSettingsActions.getWidgetSettingsById(widgetId));

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
  return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.textField,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: widget.properties.name,
    label: widget.properties.label,
    id: widget.properties.id,
    onChange: handleChange,
    className: widget.properties.className,
    value: value,
    type: 'password',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordWidget);

/***/ })

})
//# sourceMappingURL=edit.js.b79e4d994b91977b711b.hot-update.js.map