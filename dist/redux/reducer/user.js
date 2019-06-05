"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // src/reducers/counter.js


exports.default = userInfo;

var _index = require("../constants/index.js");

var INITIAL_STATE = {
  wxInfo: false
};
function userInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];
  var type = action.type,
      user = action.user;

  switch (type) {
    case _index.WEIXIN_USER:
      return _extends({}, state, {
        wxInfo: user || state.wxInfo
      });
    default:
      return state;
  }
}