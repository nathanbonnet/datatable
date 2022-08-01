"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reducer = require("./reducer");

var reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

var store = (0, _redux.createStore)(_reducer.reducer, reduxDevtools);
exports.store = store;