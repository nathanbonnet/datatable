"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _body = _interopRequireDefault(require("./components/body"));

var _research = _interopRequireDefault(require("./components/research"));

var _dataNumber = _interopRequireDefault(require("./components/dataNumber"));

var _Length = _interopRequireDefault(require("./components/Length"));

var _pagination = _interopRequireDefault(require("./components/pagination"));

var _header = _interopRequireDefault(require("./components/header"));

var _action = require("./store/action");

require("./styles/App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DataTable = function DataTable(props) {
  //on stocke la data d'origine pour que l'on puisse l'utiliser dans le component research
  (0, _react.useEffect)(function () {
    (0, _action.order)(props.order, props.columnFilter);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bloc-table"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-table"
  }, props.show && /*#__PURE__*/_react.default.createElement(_Length.default, null), props.search && /*#__PURE__*/_react.default.createElement(_research.default, null)), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, props.columns && Object.entries(props.columns).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        label = _ref2[1];

    return /*#__PURE__*/_react.default.createElement(_header.default, {
      key: label,
      label: label,
      name: name
    });
  }))), /*#__PURE__*/_react.default.createElement("tbody", {
    id: "t-body"
  }, /*#__PURE__*/_react.default.createElement(_body.default, {
    columns: props.columns
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-table"
  }, props.dataNumber && /*#__PURE__*/_react.default.createElement(_dataNumber.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "page"
  }, props.paginationButton && /*#__PURE__*/_react.default.createElement(_pagination.default, null))));
};

DataTable.prototype = {
  columns: _propTypes.default.object,
  dataNumber: _propTypes.default.bool,
  paginationButton: _propTypes.default.bool,
  search: _propTypes.default.bool,
  show: _propTypes.default.bool,
  sources: _propTypes.default.array
};
var _default = DataTable;
exports.default = _default;