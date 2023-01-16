"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _action = require("../store/action");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination() {
  var dataLength = (0, _reactRedux.useSelector)(function (state) {
    return state.sources.length;
  });
  var numberResults = (0, _reactRedux.useSelector)(function (state) {
    return state.itemPerPage;
  });
  var numberOfPage = Math.ceil(dataLength / numberResults);
  var buttonArray = new Array(numberOfPage);

  if (buttonArray.length) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, "Pr\xE9vious"), buttonArray.fill(null).map(function (v, k) {
      return /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick() {
          return (0, _action.pageSelected)(k + 1);
        }
      }, k + 1);
    }), /*#__PURE__*/_react.default.createElement("span", null, "Next"));
  }
};

var _default = Pagination;
exports.default = _default;