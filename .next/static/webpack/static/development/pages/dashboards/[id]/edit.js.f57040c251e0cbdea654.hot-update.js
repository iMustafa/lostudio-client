webpackHotUpdate("static/development/pages/dashboards/[id]/edit.js",{

/***/ "./components/widgets/form-controls/select/select-widget.jsx":
/*!*******************************************************************!*\
  !*** ./components/widgets/form-controls/select/select-widget.jsx ***!
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
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/select/select-widget.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {};
});

var SelectWidget = function SelectWidget(_ref) {
  var widgetId = _ref.widgetId;
  var classes = useStyles();
  var labelId = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    config: {},
    properties: {}
  }),
      widget = _useState[0],
      setWidget = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    right: false
  }),
      menuState = _useState3[0],
      setMenuState = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getData = function getData() {
      var $widget, $data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_7__["default"].getWidgetSettingsById(widgetId));

            case 3:
              $widget = _context.sent;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_7__["default"].executeWidgetQuery(widgetId));

            case 6:
              $data = _context.sent;
              setWidget($widget);
              setData($data);
              return _context.abrupt("return", $widget);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 12]], Promise);
    };

    getData();
  }, []);
  return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: labelId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, widget.properties.label), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    labelId: labelId,
    id: widget.properties.id,
    name: widget.properties.name,
    value: age,
    onChange: handleChange,
    className: widget.properties.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, data.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: option[widget.config.fields[0]],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, option[widget.config.fields[0]]);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectWidget);

/***/ })

})
//# sourceMappingURL=edit.js.f57040c251e0cbdea654.hot-update.js.map