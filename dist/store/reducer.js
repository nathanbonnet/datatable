"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  page: 1,
  itemPerPage: 10,
  sources: [],
  data: [],
  order: "asc",
  name: "firstName",
  search: ""
};

function paginate(state) {
  var offset = (state.page - 1) * state.itemPerPage;
  var search = state.search;
  var page = state.page;
  var sourcesFiltered = state.sources.filter(function (item) {
    return Object.values(item).some(function (value) {
      return value && value.toString().toLowerCase().includes(state.search.toLowerCase());
    });
  });
  var data = sourcesFiltered.slice(offset, offset + state.itemPerPage);

  if (sourcesFiltered.length < offset) {
    offset = 0;
    state.page = 1;
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    data: data,
    offset: offset,
    search: search,
    page: page,
    sourcesFiltered: sourcesFiltered
  });
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "PAGE") {
    return paginate(_objectSpread(_objectSpread({}, state), {}, {
      page: action.page
    }));
  }

  if (action.type === "SEARCH") {
    return paginate(_objectSpread(_objectSpread({}, state), {}, {
      search: action.search,
      page: action.page
    }));
  }

  if (action.type === "ITEM_PER_PAGE") {
    return paginate(_objectSpread(_objectSpread({}, state), {}, {
      itemPerPage: action.itemPerPage
    }));
  }

  if (action.type === "SAVE") {
    return paginate(_objectSpread(_objectSpread({}, state), {}, {
      sources: [].concat(_toConsumableArray(state.sources), _toConsumableArray(action.sources))
    }));
  }

  if (action.type === "ORDER") {
    if (action.order === 'asc') {
      state.sources.sort(function (a, b) {
        return a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1;
      });
    } else {
      state.sources.sort(function (a, b) {
        return a.firstName.toLowerCase() < b.firstName.toLowerCase() ? 1 : -1;
      });
    }

    return paginate(_objectSpread(_objectSpread({}, state), {}, {
      order: action.order,
      name: action.name,
      page: 1
    }));
  }

  return state;
};

exports.reducer = reducer;