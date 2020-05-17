webpackHotUpdate("static/development/pages/dashboards/[id]/edit.js",{

/***/ "./components/widgets/widget-icon.jsx":
/*!********************************************!*\
  !*** ./components/widgets/widget-icon.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/widgets/widget-icon.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      cursor: 'pointer',
      outline: 'none'
    },
    card: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      paddingTop: 15,
      paddingBottom: 15
    }
  };
});

var TableWidget = function TableWidget(_ref) {
  var title = _ref.title,
      widget = _ref.widget,
      icon = _ref.icon,
      onWidgetClick = _ref.onWidgetClick,
      addPredefinedWidget = _ref.addPredefinedWidget;
  var classes = useStyles();
  console.log(widget.title);
  return __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    onClick: widget ? addPredefinedWidget.bind(_this, widget) : onWidgetClick.bind(_this, title),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, icon, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, title.title)));
};

/* harmony default export */ __webpack_exports__["default"] = (TableWidget);

/***/ })

})
//# sourceMappingURL=edit.js.4cc456443bdbec00a047.hot-update.js.map