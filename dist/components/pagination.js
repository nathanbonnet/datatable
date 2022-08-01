"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _action = require("../store/action");

var _reactRedux = require("react-redux");

var Pagination = function Pagination() {
  var dataLength = (0, _reactRedux.useSelector)(function (state) {
    return state.dataNumber;
  });
  var numberResults = (0, _reactRedux.useSelector)(function (state) {
    return state.result;
  });
  var numberOfPage = Math.ceil(dataLength / numberResults);
  var buttonArray = new Array(numberOfPage);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Pr\xE9vious"), buttonArray.fill(null).map(function (v, k) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return (0, _action.pageSelected)(k + 1);
      }
    }, k + 1);
  }), /*#__PURE__*/React.createElement("span", null, "Next"));
};

var _default = Pagination;
exports.default = _default;