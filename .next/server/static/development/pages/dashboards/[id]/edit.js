module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/dashboards/system-widgets.jsx":
/*!**************************************************!*\
  !*** ./components/dashboards/system-widgets.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "@material-ui/core/ExpansionPanel");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "@material-ui/core/ExpansionPanelSummary");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "@material-ui/core/ExpansionPanelDetails");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/widget-icon */ "./components/widgets/widget-icon.jsx");
/* harmony import */ var _material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/TableChart */ "@material-ui/icons/TableChart");
/* harmony import */ var _material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Timeline */ "@material-ui/icons/Timeline");
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/BubbleChart */ "@material-ui/icons/BubbleChart");
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/DonutLarge */ "@material-ui/icons/DonutLarge");
/* harmony import */ var _material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/PieChart */ "@material-ui/icons/PieChart");
/* harmony import */ var _material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "@material-ui/icons/BarChart");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\system-widgets.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({}));

const SystemWidgets = props => {
  const classes = useStyles();
  const TableWidgets = [{
    title: 'Table',
    icon: __jsx(_material_ui_icons_TableChart__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    })
  }];
  const ChartWidgets = [{
    title: 'Line Chart',
    icon: __jsx(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    })
  }, {
    title: 'Bar Chart',
    icon: __jsx(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    })
  }, {
    title: 'Bubble Chart',
    icon: __jsx(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    })
  }, {
    title: 'Pie Chart',
    icon: __jsx(_material_ui_icons_PieChart__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    })
  }, {
    title: 'Donut Chart',
    icon: __jsx(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    })
  }];
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Tables")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, TableWidgets.map(chart => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onWidgetClick: props.onWidgetClick,
    icon: chart.icon,
    title: chart.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })))))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Charts")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, ChartWidgets.map(chart => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_widgets_widget_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onWidgetClick: props.onWidgetClick,
    icon: chart.icon,
    title: chart.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SystemWidgets);

/***/ }),

/***/ "./components/dashboards/widgets-menu.jsx":
/*!************************************************!*\
  !*** ./components/dashboards/widgets-menu.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _system_widgets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system-widgets */ "./components/dashboards/system-widgets.jsx");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\dashboards\\widgets-menu.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const TabPanel = props => {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: `full-width-tabpanel-${index}`,
    "aria-labelledby": `full-width-tab-${index}`
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, children));
};

const a11yProps = index => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
};

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({}));

const WidgetSidemenu = props => {
  const classes = useStyles();
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "fullWidth",
    "aria-label": "full width tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "System Widgets"
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "My Widgets"
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })))), __jsx("div", {
    index: value,
    onChangeIndex: handleChangeIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(_system_widgets__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onWidgetClick: props.onWidgetClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Item Two")));
};

/* harmony default export */ __webpack_exports__["default"] = (WidgetSidemenu);

/***/ }),

/***/ "./components/widgets/area-chart.widget.jsx":
/*!**************************************************!*\
  !*** ./components/widgets/area-chart.widget.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\area-chart.widget.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const data = [{
  year: '2010',
  android: 67225,
  ios: 46598
}, {
  year: '2011',
  android: 179873,
  ios: 90560
}, {
  year: '2012',
  android: 310088,
  ios: 118848
}, {
  year: '2015',
  android: 539318,
  ios: 189924
}];
const chartRootStyles = {
  chart: {
    paddingRight: '20px'
  }
};
const legendStyles = {
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row'
  }
};

const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1)
  }
});

const legendItemStyles = {
  item: {
    flexDirection: 'column'
  }
};

const ChartRootBase = (_ref) => {
  let {
    classes
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"].Root, _extends({}, restProps, {
    className: classes.chart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }));
};

const LegendRootBase = (_ref2) => {
  let {
    classes
  } = _ref2,
      restProps = _objectWithoutProperties(_ref2, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"].Root, _extends({}, restProps, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }));
};

const LegendLabelBase = (_ref3) => {
  let {
    classes
  } = _ref3,
      restProps = _objectWithoutProperties(_ref3, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"].Label, _extends({}, restProps, {
    className: classes.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }));
};

const LegendItemBase = (_ref4) => {
  let {
    classes
  } = _ref4,
      restProps = _objectWithoutProperties(_ref4, ["classes"]);

  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"].Item, _extends({}, restProps, {
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }));
};

const ChartRoot = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(chartRootStyles, {
  name: 'ChartRoot'
})(ChartRootBase);
const LegendRoot = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(legendStyles, {
  name: 'LegendRoot'
})(LegendRootBase);
const LegendLabel = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(legendLabelStyles, {
  name: 'LegendLabel'
})(LegendLabelBase);
const LegendItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(legendItemStyles, {
  name: 'LegendItem'
})(LegendItemBase);
class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    const {
      data: chartData
    } = this.state;
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
      data: chartData,
      rootComponent: ChartRoot,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ArgumentScale"], {
      factory: d3_scale__WEBPACK_IMPORTED_MODULE_4__["scalePoint"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ArgumentAxis"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["AreaSeries"], {
      name: "Android",
      valueField: "android",
      argumentField: "year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["AreaSeries"], {
      name: "iOS",
      valueField: "ios",
      argumentField: "year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Animation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"], {
      position: "bottom",
      rootComponent: LegendRoot,
      itemComponent: LegendItem,
      labelComponent: LegendLabel,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      text: "Worldwide Sales to End Users by OS",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/widgets/bar-chart-widget.jsx":
/*!*************************************************!*\
  !*** ./components/widgets/bar-chart-widget.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\bar-chart-widget.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const data = [{
  year: '1950',
  population: 2.525
}, {
  year: '1960',
  population: 3.018
}, {
  year: '1970',
  population: 3.682
}, {
  year: '1980',
  population: 4.440
}, {
  year: '1990',
  population: 5.310
}, {
  year: '2000',
  population: 6.127
}, {
  year: '2010',
  population: 6.930
}];
class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    const {
      data: chartData
    } = this.state;
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
      data: chartData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ArgumentAxis"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"], {
      max: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["BarSeries"], {
      valueField: "population",
      argumentField: "year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      text: "World population",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Animation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/widgets/donut-chart-widget.jsx":
/*!***************************************************!*\
  !*** ./components/widgets/donut-chart-widget.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\donut-chart-widget.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const data = [{
  region: 'Asia',
  val: 4119626293
}, {
  region: 'Africa',
  val: 1012956064
}, {
  region: 'Northern America',
  val: 344124520
}, {
  region: 'Latin America and the Caribbean',
  val: 590946440
}, {
  region: 'Europe',
  val: 727082222
}, {
  region: 'Oceania',
  val: 35104756
}];
class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    const {
      data: chartData
    } = this.state;
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
      data: chartData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["PieSeries"], {
      valueField: "val",
      argumentField: "region",
      innerRadius: 0.6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      text: "The Population of Continents and Regions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Animation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/widgets/index.js":
/*!*************************************!*\
  !*** ./components/widgets/index.js ***!
  \*************************************/
/*! exports provided: LineChartWidget, TableWidget, BarChartWidget, PieChartWidget, DonutChartWidget, AreaChartWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-widget */ "./components/widgets/table-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableWidget", function() { return _table_widget__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _line_chart_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart-widget */ "./components/widgets/line-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartWidget", function() { return _line_chart_widget__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bar_chart_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar-chart-widget */ "./components/widgets/bar-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChartWidget", function() { return _bar_chart_widget__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pie_chart_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie-chart-widget */ "./components/widgets/pie-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartWidget", function() { return _pie_chart_widget__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _donut_chart_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donut-chart-widget */ "./components/widgets/donut-chart-widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonutChartWidget", function() { return _donut_chart_widget__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _area_chart_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./area-chart.widget */ "./components/widgets/area-chart.widget.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaChartWidget", function() { return _area_chart_widget__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./components/widgets/line-chart-widget.jsx":
/*!**************************************************!*\
  !*** ./components/widgets/line-chart-widget.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\line-chart-widget.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        month: 'Jan',
        sale: 50,
        total: 987
      }, {
        month: 'Feb',
        sale: 100,
        total: 3000
      }, {
        month: 'March',
        sale: 30,
        total: 1100
      }, {
        month: 'April',
        sale: 107,
        total: 7100
      }, {
        month: 'May',
        sale: 95,
        total: 4300
      }, {
        month: 'June',
        sale: 150,
        total: 7500
      }]
    };
  }

  render() {
    const {
      data: chartData
    } = this.state;
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
      data: chartData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ValueScale"], {
      name: "sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ValueScale"], {
      name: "total",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ArgumentAxis"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"], {
      scaleName: "sale",
      showGrid: false,
      showLine: true,
      showTicks: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"], {
      scaleName: "total",
      position: "right",
      showGrid: false,
      showLine: true,
      showTicks: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["BarSeries"], {
      name: "Units Sold",
      valueField: "sale",
      argumentField: "month",
      scaleName: "sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["LineSeries"], {
      name: "Total Transactions",
      valueField: "total",
      argumentField: "month",
      scaleName: "total",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Legend"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/widgets/pie-chart-widget.jsx":
/*!*************************************************!*\
  !*** ./components/widgets/pie-chart-widget.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "@devexpress/dx-react-chart");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\pie-chart-widget.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const data = [{
  country: 'Russia',
  area: 12
}, {
  country: 'Canada',
  area: 7
}, {
  country: 'USA',
  area: 7
}, {
  country: 'China',
  area: 7
}, {
  country: 'Brazil',
  area: 6
}, {
  country: 'Australia',
  area: 5
}, {
  country: 'India',
  area: 2
}, {
  country: 'Others',
  area: 55
}];
class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    const {
      data: chartData
    } = this.state;
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
      data: chartData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["PieSeries"], {
      valueField: "area",
      argumentField: "country",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      text: "Area of Countries",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Animation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./components/widgets/table-widget.jsx":
/*!*********************************************!*\
  !*** ./components/widgets/table-widget.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-table */ "material-table");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\table-widget.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TableWidget = props => {
  return __jsx(material_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    columns: [{
      title: 'Adı',
      field: 'name'
    }, {
      title: 'Soyadı',
      field: 'surname'
    }, {
      title: 'Doğum Yılı',
      field: 'birthYear',
      type: 'numeric'
    }, {
      title: 'Doğum Yeri',
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
    }],
    title: "Demo Title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TableWidget);

/***/ }),

/***/ "./components/widgets/widget-icon.jsx":
/*!********************************************!*\
  !*** ./components/widgets/widget-icon.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\widget-icon.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
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
}));

const TableWidget = ({
  title,
  icon,
  onWidgetClick
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.root,
    onClick: onWidgetClick.bind(undefined, title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, icon, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (TableWidget);

/***/ }),

/***/ "./pages/dashboards/[id]/edit.jsx":
/*!****************************************!*\
  !*** ./pages/dashboards/[id]/edit.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-layout */ "react-grid-layout");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-table */ "material-table");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ArrowLeft */ "@material-ui/icons/ArrowLeft");
/* harmony import */ var _material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Save */ "@material-ui/icons/Save");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_dashboards_widgets_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/dashboards/widgets-menu */ "./components/dashboards/widgets-menu.jsx");
/* harmony import */ var _components_widgets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/widgets */ "./components/widgets/index.js");
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\pages\\dashboards\\[id]\\edit.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  list: {
    width: 500
  },
  fullList: {
    width: 'auto'
  }
});

const EditDashboard = () => {
  const classes = useStyles();
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: false
  });
  const {
    0: layout,
    1: setLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const onLayoutChange = e => {
    console.log(e);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMenuState(_objectSpread({}, menuState, {
      [side]: open
    }));
  };

  const decideWidget = title => {
    switch (title) {
      case 'Table':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_12__["TableWidget"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: undefined
        });

      case 'Line Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_12__["LineChartWidget"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: undefined
        });

      case 'Bar Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_12__["BarChartWidget"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: undefined
        });

      case 'Pie Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_12__["PieChartWidget"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: undefined
        });

      case 'Donut Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_12__["DonutChartWidget"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: undefined
        });

      case 'Area Chart':
        return __jsx(_components_widgets__WEBPACK_IMPORTED_MODULE_12__["AreaChartWidget"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: undefined
        });
    }
  };

  const addWidget = (title, _) => {
    const index = layout.length;
    const layoutItem = {
      i: JSON.stringify({
        title,
        i: index.toString()
      }),
      x: 0,
      y: 0,
      w: 6,
      h: 11,
      maxW: 16
    };
    setLayout([...layout, layoutItem]);
  };

  const sideList = () => __jsx("div", {
    className: classes.list,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_components_dashboards_widgets_menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onWidgetClick: addWidget,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }));

  const renderWidgets = () => layout.map((layout, i) => __jsx("div", {
    key: layout.i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, decideWidget(JSON.parse(layout.i).title)));

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchor: "right",
    open: menuState.right,
    onClose: toggleDrawer('right', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, sideList('right')), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      justifySelf: 'flex-start',
      display: 'flex',
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "back",
    size: "medium",
    style: {
      outline: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }))), __jsx("div", {
    style: {
      justifySelf: 'flex-end',
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      paddingRight: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      outline: 'none'
    },
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "Save"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginLeft: '10px',
      outline: 'none'
    },
    size: "small",
    onClick: toggleDrawer('right', true),
    startIcon: __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Widgets"))), __jsx(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onLayoutChange: onLayoutChange,
    className: "layout",
    layout: layout,
    cols: 16,
    rowHeight: 30,
    width: 1920,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, renderWidgets()));
};

/* harmony default export */ __webpack_exports__["default"] = (EditDashboard);

/***/ }),

/***/ 8:
/*!**********************************************!*\
  !*** multi ./pages/dashboards/[id]/edit.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\LoStudio\client\pages\dashboards\[id]\edit.jsx */"./pages/dashboards/[id]/edit.jsx");


/***/ }),

/***/ "@devexpress/dx-react-chart":
/*!*********************************************!*\
  !*** external "@devexpress/dx-react-chart" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-chart");

/***/ }),

/***/ "@devexpress/dx-react-chart-material-ui":
/*!*********************************************************!*\
  !*** external "@devexpress/dx-react-chart-material-ui" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-chart-material-ui");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/ExpansionPanel":
/*!***************************************************!*\
  !*** external "@material-ui/core/ExpansionPanel" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelDetails":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelDetails" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelSummary":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelSummary" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowLeft":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowLeft" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowLeft");

/***/ }),

/***/ "@material-ui/icons/BarChart":
/*!**********************************************!*\
  !*** external "@material-ui/icons/BarChart" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BarChart");

/***/ }),

/***/ "@material-ui/icons/BubbleChart":
/*!*************************************************!*\
  !*** external "@material-ui/icons/BubbleChart" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BubbleChart");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/DonutLarge":
/*!************************************************!*\
  !*** external "@material-ui/icons/DonutLarge" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DonutLarge");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/PieChart":
/*!**********************************************!*\
  !*** external "@material-ui/icons/PieChart" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PieChart");

/***/ }),

/***/ "@material-ui/icons/Save":
/*!******************************************!*\
  !*** external "@material-ui/icons/Save" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Save");

/***/ }),

/***/ "@material-ui/icons/TableChart":
/*!************************************************!*\
  !*** external "@material-ui/icons/TableChart" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChart");

/***/ }),

/***/ "@material-ui/icons/Timeline":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Timeline" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Timeline");

/***/ }),

/***/ "d3-scale":
/*!***************************!*\
  !*** external "d3-scale" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),

/***/ "material-table":
/*!*********************************!*\
  !*** external "material-table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-grid-layout":
/*!************************************!*\
  !*** external "react-grid-layout" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-grid-layout");

/***/ })

/******/ });
//# sourceMappingURL=edit.js.map