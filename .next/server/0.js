exports.ids = [0];
exports.modules = {

/***/ "./components/widgets/gantt-chart/gantt-chart-widget-toolbar.jsx":
/*!***********************************************************************!*\
  !*** ./components/widgets/gantt-chart/gantt-chart-widget-toolbar.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\gantt-chart\\gantt-chart-widget-toolbar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Toolbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleZoomChange", e => {
      if (this.props.onZoomChange) {
        this.props.onZoomChange(e.target.value);
      }
    });
  }

  render() {
    const zoomRadios = ['Hours', 'Days', 'Months'].map(value => {
      const isActive = this.props.zoom === value;
      return __jsx("label", {
        key: value,
        className: `radio-label ${isActive ? 'radio-label-active' : ''}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("input", {
        type: "radio",
        checked: isActive,
        onChange: this.handleZoomChange,
        value: value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), value);
    });
    return __jsx("div", {
      className: "tool-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Zooming: "), zoomRadios);
  }

}

/***/ }),

/***/ "./components/widgets/gantt-chart/gantt-chart-widget.jsx":
/*!***************************************************************!*\
  !*** ./components/widgets/gantt-chart/gantt-chart-widget.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gantt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dhtmlx-gantt */ "dhtmlx-gantt");
/* harmony import */ var dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\gantt-chart\\gantt-chart-widget.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Gantt extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  setZoom(value) {
    switch (value) {
      case 'Hours':
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.scale_unit = 'day';
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.date_scale = '%d %M';
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.scale_height = 60;
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.min_column_width = 30;
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.subscales = [{
          unit: 'hour',
          step: 1,
          date: '%H'
        }];
        break;

      case 'Days':
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.min_column_width = 70;
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.scale_unit = 'week';
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.date_scale = '#%W';
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.subscales = [{
          unit: 'day',
          step: 1,
          date: '%d %M'
        }];
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.scale_height = 60;
        break;

      case 'Months':
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.min_column_width = 70;
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.scale_unit = 'month';
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.date_scale = '%F';
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.scale_height = 60;
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.subscales = [{
          unit: 'week',
          step: 1,
          date: '#%W'
        }];
        break;

      default:
        break;
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.zoom !== nextProps.zoom;
  }

  componentDidUpdate() {
    dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].render();
  }

  componentDidMount() {
    dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.xml_date = "%Y-%m-%d %H:%i";
    const {
      tasks
    } = this.props;
    dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].init(this.ganttContainer);
    console.log(tasks);
    dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].parse(tasks);
  }

  render() {
    const {
      zoom
    } = this.props;
    this.setZoom(zoom);
    return __jsx("div", {
      ref: input => {
        this.ganttContainer = input;
      },
      style: {
        width: '100%',
        height: '90vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./components/widgets/gantt-chart/index.jsx":
/*!**************************************************!*\
  !*** ./components/widgets/gantt-chart/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gantt_chart_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gantt-chart-widget */ "./components/widgets/gantt-chart/gantt-chart-widget.jsx");
/* harmony import */ var _gantt_chart_widget_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gantt-chart-widget-toolbar */ "./components/widgets/gantt-chart/gantt-chart-widget-toolbar.jsx");
/* harmony import */ var _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/widgetSettings.actions */ "./actions/widgetSettings.actions.ts");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\components\\widgets\\gantt-chart\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const GanttChartWidget = () => {
  const {
    0: widget,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: tasks,
    1: setTasks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    data: [],
    links: []
  });
  const {
    0: isLoadingData,
    1: setIsLoadingData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: zoom,
    1: setZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Days');

  const handleZoomChange = zoom => {
    setZoom(zoom);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      try {
        const Widget = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getWidgetSettingsById("5e78a808f2c42d5a58cc2cdc");
        const Result = await _actions_widgetSettings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].executeWidgetQuery("5e78a808f2c42d5a58cc2cdc");
        setTasks({
          data: Result[0].data,
          links: Result[0].links
        });
        setWidget(_objectSpread({}, Widget));
        setIsLoadingData(false);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const renderGunttChart = () => isLoadingData || !widget ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    className: "zoom-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_gantt_chart_widget_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    zoom: zoom,
    onZoomChange: handleZoomChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), __jsx("div", {
    className: "gantt-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_gantt_chart_widget__WEBPACK_IMPORTED_MODULE_1__["default"], {
    tasks: tasks,
    zoom: zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })));

  return renderGunttChart();
};

/* harmony default export */ __webpack_exports__["default"] = (GanttChartWidget);

/***/ })

};;
//# sourceMappingURL=0.js.map