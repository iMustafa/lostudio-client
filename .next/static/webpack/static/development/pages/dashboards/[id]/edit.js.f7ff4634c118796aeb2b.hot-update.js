webpackHotUpdate("static/development/pages/dashboards/[id]/edit.js",{

/***/ "./components/dashboards/settings/general-settings.jsx":
/*!*************************************************************!*\
  !*** ./components/dashboards/settings/general-settings.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/dashboard.actions */ "./actions/dashboard.actions.ts");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");



var _this = undefined,
    _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/dashboards/settings/general-settings.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function () {
  return {
    h2: {
      width: '100%',
      textAlign: 'center',
      borderBottom: '1px solid #000',
      lineHeight: '0.1em',
      marginTop: "20px",
      marginBottom: "20px",
      fontFamily: 'Roboto',
      fontSize: '13px',
      color: "#3F51B5"
    },
    span: {
      background: '#fff',
      padding: '0 10px'
    }
  };
});

var GeneralSettings = function GeneralSettings(_ref) {
  var id = _ref.id;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: '',
    description: ''
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isSub = _useState2[0],
      setIsSub = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showDelete = _useState3[0],
      setShowDelete = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      dashboard = _useState4[0],
      setDashboard = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getInitialProps = function getInitialProps() {
      var $dashboard;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_4__["default"].getDashboardById(id));

            case 3:
              $dashboard = _context.sent;
              setDashboard($dashboard);
              setState(_objectSpread({}, state, {
                title: $dashboard.title,
                description: dashboard.description
              }));
              setIsSub($dashboard.isSub ? true : false);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 9]], Promise);
    };

    getInitialProps();
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.h2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Dashboard Details")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Title",
    value: state.title,
    placeholder: "Dashboard Title",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      marginTop: 10
    },
    fullWidth: true,
    value: state.description,
    label: "Description",
    placeholder: "Dashboard Description",
    multiline: true,
    rows: 2,
    rowsMax: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fullWidth: true,
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Save Changes")), __jsx("h2", {
    className: classes.h2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.span,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "Delete Project")), showDelete ? __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, isSub ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, "Confirm your delete action by typing in the dashboard title below."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      fontSize: 8,
      color: '#c0392b'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, "Deleting this project will result in deleting all of its included pages")) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, "Confirm your delete action by typing in the dashboard title below."), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fullWidth: true,
    label: "Title",
    placeholder: dashboard.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2,
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fullWidth: true,
    onClick: function onClick() {
      setShowDelete(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, "Cancel")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fullWidth: true,
    style: {
      backgroundColor: '#c0392b',
      color: '#FFF'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, "Confirm Delete")))) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fullWidth: true,
    onClick: function onClick() {
      setShowDelete(true);
    },
    style: {
      marginTop: 10,
      backgroundColor: '#c0392b',
      color: "#FFF"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Delete Project"));
};

/* harmony default export */ __webpack_exports__["default"] = (GeneralSettings);

/***/ })

})
//# sourceMappingURL=edit.js.f7ff4634c118796aeb2b.hot-update.js.map