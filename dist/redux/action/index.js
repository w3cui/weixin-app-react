"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionUserInfo = exports.setWeiXinUser = exports.minus = exports.add = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // src/actions/counter.js


exports.asyncAdd = asyncAdd;

var _index = require("../../service/index.js");

var _index2 = require("../constants/index.js");

var add = exports.add = function add() {
  return {
    type: _index2.ADD
  };
};
var minus = exports.minus = function minus() {
  return {
    type: _index2.MINUS
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
    type: _index2.WEIXIN_USER,
    user: _extends({}, user)
  };
};
var actionUserInfo = exports.actionUserInfo = function actionUserInfo() {
  return function (dispatch) {
    (0, _index.setUserThird)().then(function (res) {
      dispatch(res);
    });
  };
};