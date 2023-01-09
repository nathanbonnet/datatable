"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _action = require("../store/action");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Research = function Research() {
  var dataOrigine = (0, _reactRedux.useSelector)(function (state) {
    return state.dataOrigine;
  });

  var filterData = function filterData(data, value) {
    return data.filter(function (d) {
      return Object.values(d).some(function (valueData) {
        return valueData && valueData.toString().includes(value.toLowerCase());
      });
    });
  };

  var searchBanner = function searchBanner(value, data) {
    if (!data) return; //retourne le resultat dans le store redux grâce à l'action body

    (0, _action.body)(filterData(data, value));
  };

  return /*#__PURE__*/_react.default.createElement("label", null, "Search :", /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      return searchBanner(e.target.value, dataOrigine);
    },
    type: "search",
    id: "search"
  }));
};

var _default = Research;
exports.default = _default;