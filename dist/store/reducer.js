"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  page: 1,
  result: 10,
  sources: {
    firstName: 'John'
  },
  dataNumber: 10,
  order: "asc",
  name: "firstName"
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "PAGE") {
    return _objectSpread(_objectSpread({}, state), {}, {
      page: state.page = action.page
    });
  }

  if (action.type === "RESULT") {
    return _objectSpread(_objectSpread({}, state), {}, {
      result: state.result = action.result
    });
  }

  if (action.type === "BODY") {
    return _objectSpread(_objectSpread({}, state), {}, {
      sources: state.sources = action.sources
    });
  }

  if (action.type === "DATA_NUMBER") {
    return _objectSpread(_objectSpread({}, state), {}, {
      dataNumber: state.dataNumber = action.dataNumber
    });
  }

  if (action.type === "ORDER") {
    return _objectSpread(_objectSpread({}, state), {}, {
      order: state.order = action.order,
      name: state.name = action.name
    });
  }

  return state;
};

exports.reducer = reducer;