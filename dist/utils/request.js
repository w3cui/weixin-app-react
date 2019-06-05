"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 状态码错误信息
var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

var checkStatus = function checkStatus(error) {
  // message.destroy()
  if (error.response && error.response.status >= 200 && error.response.status < 300) {
    return error.response;
  }
  if (!error.response) return error;
  var errortext = codeMessage[error.response.status] || error.response.statusText;
  // notification.error({
  //     message: `请求错误 ${error.response.status} : ${error}`,
  //     description: errortext,
  // });
  console.log("\u8BF7\u6C42\u9519\u8BEF " + error.response.status + " : " + error, errortext);
  var errorCatch = new Error(errortext);
  errorCatch.name = error.response.status;
  errorCatch.response = error;
  throw errorCatch;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

exports.default = function (url, params) {
  var config = _extends({
    url: "" + _index3.host + params.url,
    data: {},
    header: {
      'content-type': 'application/json'
    }
  }, params);
  return _index2.default.request({
    url: "" + _index3.host + params.url,
    data: {
      foo: 'foo',
      bar: 10
    },
    dataType: "JSON",
    header: {
      'content-type': 'application/json'
    }
  }).then(function (res) {
    _index2.default.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    });
  });
};