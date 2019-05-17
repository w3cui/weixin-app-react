"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../../npm/redux/lib/redux.js");

var _counter = require("./counter.js");

var _counter2 = _interopRequireDefault(_counter);

var _user = require("./user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: _counter2.default,
  userInfo: _user2.default
}); // src/reducers/index.js