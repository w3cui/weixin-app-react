"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserThird = undefined;

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 登录
var setUserThird = exports.setUserThird = function setUserThird() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request2.default)("/api/user/third", {
    method: 'POST',
    data: params
  });
};