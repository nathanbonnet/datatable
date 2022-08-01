"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.result = exports.pageSelected = exports.order = exports.dataNumber = exports.body = void 0;

var _index = require("./index");

var pageSelected = function pageSelected(page) {
  _index.store.dispatch({
    type: 'PAGE',
    page: page
  });
};

exports.pageSelected = pageSelected;

var result = function result(_result) {
  _index.store.dispatch({
    type: 'RESULT',
    result: _result
  });
};

exports.result = result;

var body = function body(sources) {
  _index.store.dispatch({
    type: 'BODY',
    sources: sources
  });
};

exports.body = body;

var dataNumber = function dataNumber(_dataNumber) {
  _index.store.dispatch({
    type: 'DATA_NUMBER',
    dataNumber: _dataNumber
  });
};

exports.dataNumber = dataNumber;

var order = function order(_order, name) {
  _index.store.dispatch({
    type: 'ORDER',
    order: _order,
    name: name
  });
};

exports.order = order;