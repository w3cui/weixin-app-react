"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.actionUserInfo = exports.setWeiXinUser = exports.minus = exports.add = undefined;
=======
exports.setWeiXinUser = exports.minus = exports.add = undefined;
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // src/actions/counter.js


exports.asyncAdd = asyncAdd;

<<<<<<< HEAD
var _index = require("../../service/index.js");

var _index2 = require("../constants/index.js");

var add = exports.add = function add() {
  return {
    type: _index2.ADD
=======
var _index = require("../constants/index.js");

var add = exports.add = function add() {
  return {
    type: _index.ADD
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
  };
};
var minus = exports.minus = function minus() {
  return {
<<<<<<< HEAD
    type: _index2.MINUS
=======
    type: _index.MINUS
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
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
<<<<<<< HEAD
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
=======
    type: _index.WEIXIN_USER,
    user: _extends({}, user)
  };
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
};