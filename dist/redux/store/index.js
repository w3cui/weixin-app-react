"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../../npm/redux/lib/redux.js");

var _index = require("../../npm/redux-thunk/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _reduxLogger = require("../../npm/redux-logger/dist/redux-logger.js");

var _index3 = require("../reducer/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_index2.default, (0, _reduxLogger.createLogger)()];
exports.default = (0, _redux.createStore)(_index4.default, _redux.applyMiddleware.apply(undefined, middlewares));