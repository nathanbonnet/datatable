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

var Header = function Header(props) {
  var orderStore = (0, _reactRedux.useSelector)(function (state) {
    return state.order;
  });
  var columnFilter = (0, _reactRedux.useSelector)(function (state) {
    return state.name;
  });

  var sortFunction = function sortFunction() {
    (0, _action.order)(orderStore === 'asc' ? 'desc' : 'asc', columnFilter);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "blocFilter",
    onClick: function onClick() {
      return props.name === columnFilter && sortFunction();
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