"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _action = require("../store/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Research = function Research() {
  return /*#__PURE__*/_react.default.createElement("label", null, "Search :", /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      return (0, _action.search)(e.target.value);
    },
    type: "search",
    id: "search"
  }));
};

var _default = Research;
exports.default = _default;