"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = require("../../npm/tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _index4 = require("../../redux/action/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

<<<<<<< HEAD
    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "$compid__36", "$compid__37", "$compid__38", "$compid__39", "swiperConfig", "wxInfo", "circle", "weiXinInfo", "isOpened", "userInfo"], _this2.config = {
      navigationBarTitleText: '新网服务终端'
    }, _this2.customComponents = ["AtModal", "AtModalHeader", "AtModalContent", "AtModalAction", "AtIcon", "AtGrid"], _temp), _possibleConstructorReturn(_this2, _ret);
=======
    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "swiperConfig", "wxInfo", "circle", "weiXinInfo", "userInfo"], _this2.config = {
      navigationBarTitleText: '新网服务终端'
    }, _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        swiperConfig: {
          vertical: false
        },
        circle: true,
<<<<<<< HEAD
        weiXinInfo: false,
        isOpened: wx.canIUse('button.open-type.getUserInfo')
=======
        weiXinInfo: false
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
      };
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */
<<<<<<< HEAD
      this.$$refs = [];
=======
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
    }
  }, {
    key: "openURL",
    value: function openURL(url) {
      _index2.default.navigateTo({
        url: url
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this = this;
<<<<<<< HEAD
=======
      wx.login({
        success: function success(res) {
          if (res.code) {
            wx.getUserInfo({
              success: function success(userinfo) {
                // 发起网络请求
                wx.request({
                  url: 'https://hotel.park666.com/api/user/third',
                  data: {
                    code: res.code,
                    user_info: userinfo.rawData
                  }
                });
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
      // 获取用户信息
      wx.getUserInfo({
        success: function success(res) {
          _this.props.setWeiXinUser(res);
          setTimeout(function () {
            res.userInfo.nickName = res.userInfo.nickName + "111111111";
            console.log(res);
            _this.props.setWeiXinUser(res);
            console.log(_this.props);
          }, 5000);
          // _this.setState({ weiXinInfo: res.userInfo });
        }
      });
<<<<<<< HEAD
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _index2.default.getUserInfo(params).then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: "bindGetUserInfo",
    value: function bindGetUserInfo(e) {
      this.setState({ isOpened: false });
    }
=======
      // // 进行微信授权
      // wx.getSetting({
      //   success(res) {
      //     if (!res.authSetting['scope.record']) {
      //       wx.authorize({
      //         scope: 'scope.record',
      //         success() {
      //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
      //           wx.startRecord()
      //         }
      //       })
      //     }
      //   }
      // })
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
<<<<<<< HEAD
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
=======
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
      ;

      var _state = this.__state,
          swiperConfig = _state.swiperConfig,
          circle = _state.circle,
<<<<<<< HEAD
          weiXinInfo = _state.weiXinInfo,
          isOpened = _state.isOpened;
=======
          weiXinInfo = _state.weiXinInfo;
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
      var wxInfo = this.__props.userInfo.wxInfo;

      console.log("fdsa", this.__props);
      var anonymousState__temp = (0, _index.internal_inline_style)({ backgroundColor: '#dfe2e5' });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ width: '100%', height: '100%' });
      var anonymousState__temp3 = (0, _index.internal_inline_style)({ backgroundColor: '#f1f1f1' });
      var anonymousState__temp4 = (0, _index.internal_inline_style)({ width: '100%', height: '100%' });
      var anonymousState__temp5 = (0, _index.internal_inline_style)({ backgroundColor: '#dfe2e5' });
      var anonymousState__temp6 = (0, _index.internal_inline_style)({ width: '100%', height: '100%' });
      var anonymousState__temp7 = [{
        iconInfo: {
          prefixClass: 'iconfont',
          value: 'jilu',
          size: 34,
          color: '#F58423'
        },
        // image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '押金纪录'
      }, {
        iconInfo: {
          prefixClass: 'iconfont',
          value: 'shalou',
          size: 34,
          color: '#9B9E9F'
        },
        value: '敬请期待'
      }];
<<<<<<< HEAD
      var $compid__36 = (0, _index.genCompid)(__prefix + "$compid__36");
      _index.propsManager.set({
        "isOpened": isOpened
      }, $compid__36);
      var $compid__37 = (0, _index.genCompid)(__prefix + "$compid__37");
      _index.propsManager.set({
        "prefixClass": "iconfont",
        "value": "home",
        "size": "50",
        "color": "#FFF"
      }, $compid__37);
      var $compid__38 = (0, _index.genCompid)(__prefix + "$compid__38");
      _index.propsManager.set({
        "prefixClass": "iconfont",
        "value": "zizhu",
        "size": "50",
        "color": "#FFF"
      }, $compid__38);
      var $compid__39 = (0, _index.genCompid)(__prefix + "$compid__39");
      _index.propsManager.set({
        "columnNum": 2,
        "data": anonymousState__temp7
      }, $compid__39);
=======
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
<<<<<<< HEAD
        $compid__36: $compid__36,
        $compid__37: $compid__37,
        $compid__38: $compid__38,
        $compid__39: $compid__39,
=======
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
        wxInfo: wxInfo
      });
      return this.__state;
    }
  }]);

  return Index;
<<<<<<< HEAD
}(_index.Component), _class.$$events = ["bindGetUserInfo", "openURL"], _class.$$componentPath = "pages/index/index", _temp2);
=======
}(_index.Component), _class.properties = {
  "userInfo": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["openURL"], _temp2);
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
Index = tslib_1.__decorate([(0, _index3.connect)(function (_ref2) {
  var counter = _ref2.counter,
      userInfo = _ref2.userInfo;
  return {
    counter: counter, userInfo: userInfo
  };
}, function (dispatch, rep) {
  return {
    setWeiXinUser: function setWeiXinUser(data) {
      dispatch((0, _index4.setWeiXinUser)(data));
    }
  };
})], Index);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));