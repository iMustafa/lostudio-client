webpackHotUpdate("static\\development\\pages\\datasources.js",{

/***/ "./components/datasources/ListDatasources.jsx":
/*!****************************************************!*\
  !*** ./components/datasources/ListDatasources.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchInput */ "./components/SearchInput.jsx");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\datasources\\ListDatasources.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: '25px'
    },
    cardBody: {
      padding: '10px'
    },
    cardTitle: {
      fontSize: '12px',
      backgroundColor: '#3F51B5',
      padding: '3px 3px 3px 6px',
      color: '#FFF',
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
    }
  };
});

var ListDatasource = function ListDatasource(_ref) {
  var datasources = _ref.datasources;
  var classes = useStyles();
  console.log(datasources);
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: classes.cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "My Data sources"), __jsx("div", {
    className: classes.cardBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Basic Search Preview",
    style: {
      boxShadow: 'none'
    },
    columns: [{
      title: 'Name',
      field: 'name'
    }, {
      title: 'Surname',
      field: 'surname'
    }, {
      title: 'Birth Year',
      field: 'birthYear',
      type: 'numeric'
    }, {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: {
        34: 'İstanbul',
        63: 'Şanlıurfa'
      }
    }],
    data: [{
      name: 'Mehmet',
      surname: 'Baran',
      birthYear: 1987,
      birthCity: 63
    }, {
      name: 'Zerya Betül',
      surname: 'Baran',
      birthYear: 2017,
      birthCity: 34
    }],
    options: {
      search: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ListDatasource);

/***/ })

})
//# sourceMappingURL=datasources.js.fb363362d8e664a767bc.hot-update.js.map