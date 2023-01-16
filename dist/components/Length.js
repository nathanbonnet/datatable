"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _action = require("../store/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeLength = function changeLength() {
  (0, _action.itemPerPage)(document.getElementById('show').value);
};

var Length = function Length() {
  return /*#__PURE__*/_react.default.createElement("label", {
    for: "show"
  }, "Show", /*#__PURE__*/_react.default.createElement("select", {
    onChange: function onChange() {
      return changeLength();
    },
    name: "show",
    id: "show"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react.default.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react.default.createElement("option", {
    value: "100"
  }, "100")), "entries");
};

var _default = Length;
exports.default = _default;