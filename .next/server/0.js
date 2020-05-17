exports.ids = [0];
exports.modules = {

/***/ "./components/page-builder/index.jsx":
/*!*******************************************!*\
  !*** ./components/page-builder/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grapesjs-preset-webpage */ "grapesjs-preset-webpage");
/* harmony import */ var grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grapesjs_blocks_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grapesjs-blocks-basic */ "grapesjs-blocks-basic");
/* harmony import */ var grapesjs_blocks_basic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grapesjs_blocks_basic__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/imustafa/Projects/LoStudio/client/components/page-builder/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const WebPages = () => {
  const {
    0: htmlString,
    1: setHtmlString
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: cssString,
    1: setCssString
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: pluginLoaded,
    1: setPluginLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: editor,
    1: setEditor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!pluginLoaded) {
      setPluginLoaded(true);
    } else if (!editor) {
      const e = grapesjs__WEBPACK_IMPORTED_MODULE_1___default.a.init({
        container: `#example-editor`,
        fromElement: true,
        plugins: [grapesjs_blocks_basic__WEBPACK_IMPORTED_MODULE_3___default.a, grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_2___default.a]
      });
      setEditor(e);
    }
  });
  return __jsx("div", {
    id: "example-editor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (WebPages);

/***/ })

};;
//# sourceMappingURL=0.js.map