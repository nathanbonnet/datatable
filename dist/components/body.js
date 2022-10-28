"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _information = _interopRequireDefault(require("./information"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _action = require("../store/action");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Body = function Body(props) {
  var sources = (0, _reactRedux.useSelector)(function (state) {
    return state.sources;
  });
  var page = (0, _reactRedux.useSelector)(function (state) {
    return state.page;
  });
  var orderStore = (0, _reactRedux.useSelector)(function (state) {
    return state.order;
  });
  var columnFilter = (0, _reactRedux.useSelector)(function (state) {
    return state.name;
  });

  var sortFunction = function sortFunction(sources, name) {
    if (sources === null) return;

    if (orderStore === 'asc') {
      sources.sort(function (a, b) {
        return a[name].toLowerCase() > b[name].toLowerCase() ? 1 : -1;
      });
      (0, _action.order)('desc', name);
    }

    if (orderStore === 'desc') {
      sources.sort(function (a, b) {
        return a[name].toLowerCase() < b[name].toLowerCase() ? 1 : -1;
      });
      (0, _action.order)('asc', name);
    }

    (0, _action.body)(_toConsumableArray(sources));
  };

  (0, _react.useEffect)(function () {
    sortFunction(sources, columnFilter);
  }, []);
  var numberOfResult = (0, _reactRedux.useSelector)(function (state) {
    return state.result;
  });
  var datas = (0, _information.default)(sources, numberOfResult, page);
  (0, _action.dataNumber)(sources && sources.length);
  return datas ? datas.map(function (data) {
    return /*#__PURE__*/_react.default.createElement("tr", null, props.columns && Object.keys(props.columns).map(function (column) {
      return /*#__PURE__*/_react.default.createElement("td", null, data[column]);
    }));
  }) : /*#__PURE__*/_react.default.createElement("p", null, "Aucun \xE9l\xE9ment trouv\xE9");
};

Body.prototype = {
  columns: _propTypes.default.object
};
var _default = Body;
exports.default = _default;