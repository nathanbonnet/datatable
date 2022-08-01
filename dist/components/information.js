"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var information = function information(dataStorage, numberOfResult, page) {
  return dataStorage.slice((page - 1) * numberOfResult, page * numberOfResult);
};

var _default = information;
exports.default = _default;