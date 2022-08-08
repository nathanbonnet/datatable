"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _action = require("../store/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Header = function Header(props) {
  var sources = (0, _reactRedux.useSelector)(function (state) {
    return state.sources;
  });
  var orderStore = (0, _reactRedux.useSelector)(function (state) {
    return state.order;
  });
  var columnFilter = (0, _reactRedux.useSelector)(function (state) {
    return state.name;
  });

  var sortFunction = function sortFunction(sources, name) {
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "blocFilter",
    onClick: function onClick() {
      return props.name === columnFilter && sortFunction(sources, props.name);
    }
  }, props.label, props.name === columnFilter ? orderStore === 'desc' ? /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    id: "sortIconUp",
    className: "icon fa-sm",
    icon: _freeSolidSvgIcons.faSortUp,
    fixedWidth: true
  }) : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    id: "sortIconDown",
    className: "icon fa-sm",
    icon: _freeSolidSvgIcons.faSortDown,
    fixedWidth: true
  }) : false)));
};

Header.prototype = {
  label: _propTypes.default.string,
  name: _propTypes.default.string
};
var _default = Header;
exports.default = _default;