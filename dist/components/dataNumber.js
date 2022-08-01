"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataNumber = function DataNumber(props) {
  var numberEntries = (0, _reactRedux.useSelector)(function (state) {
    return state.result;
  });
  var dataLength = (0, _reactRedux.useSelector)(function (state) {
    return state.dataNumber;
  });
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "show"
  }, "Showing 1 to ", numberEntries, " of ", dataLength, " entries");
};

var _default = DataNumber;
exports.default = _default;