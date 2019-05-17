"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setWeiXinUser = exports.minus = exports.add = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // src/actions/counter.js


exports.asyncAdd = asyncAdd;

var _index = require("../constants/index.js");

var add = exports.add = function add() {
  return {
    type: _index.ADD
  };
};
var minus = exports.minus = function minus() {
  return {
    type: _index.MINUS
  };
};
// 异步的 action
function asyncAdd() {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(add());
    }, 2000);
  };
}
var setWeiXinUser = exports.setWeiXinUser = function setWeiXinUser(user) {
  return {
    type: _index.WEIXIN_USER,
    user: _extends({}, user)
  };
};