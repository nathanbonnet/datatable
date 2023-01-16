"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.save = exports.pageSelected = exports.order = exports.itemPerPage = void 0;

var _index = require("./index");

var pageSelected = function pageSelected(page) {
  _index.store.dispatch({
    type: 'PAGE',
    page: page
  });
};

exports.pageSelected = pageSelected;

var save = function save(sources) {
  _index.store.dispatch({
    type: 'SAVE',
    sources: sources
  });
};

exports.save = save;

var itemPerPage = function itemPerPage(_itemPerPage) {
  _index.store.dispatch({
    type: 'ITEM_PER_PAGE',
    itemPerPage: _itemPerPage
  });
};

exports.itemPerPage = itemPerPage;

var search = function search(_search) {
  _index.store.dispatch({
    type: 'SEARCH',
    search: _search
  });
};

exports.search = search;

var order = function order(_order, columnFilter) {
  _index.store.dispatch({
    type: 'ORDER',
    order: _order,
    name: columnFilter
  });
};

exports.order = order;