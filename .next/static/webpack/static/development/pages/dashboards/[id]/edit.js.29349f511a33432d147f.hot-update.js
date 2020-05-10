webpackHotUpdate("static/development/pages/dashboards/[id]/edit.js",{

/***/ "./components/widgets/form-controls/autocomplete/autocomplete-widget.jsx":
/*!*******************************************************************************!*\
  !*** ./components/widgets/form-controls/autocomplete/autocomplete-widget.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");



var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/form-controls/autocomplete/autocomplete-widget.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {};
});

var AutoCompleteWidget = function AutoCompleteWidget(_ref) {
  var widgetId = _ref.widgetId;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    properties: {},
    config: {
      fields: []
    }
  }),
      widget = _useState[0],
      setWidget = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    right: false
  }),
      menuState = _useState3[0],
      setMenuState = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getData = function getData() {
      var $widget, $data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].getWidgetSettingsById(widgetId));

            case 3:
              $widget = _context.sent;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_6__["default"].executeWidgetQuery(widgetId));

            case 6:
              $data = _context.sent;
              setWidget($widget);
              setData($data);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 11]], Promise);
    };

    getData();
  }, []);
  return __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: widget.properties.id,
    placeholder: widget.properties.placeholder,
    className: widget.properties.className,
    value: widget.properties.value,
    options: data,
    getOptionLabel: function getOptionLabel(option) {
      return option[widget.config.fields[0]];
    },
    style: {
      width: '100%'
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        fullWidth: true,
        name: widget.properties.name
      }, params, {
        label: widget.properties.label,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteWidget);

/***/ })

})
//# sourceMappingURL=edit.js.29349f511a33432d147f.hot-update.js.map