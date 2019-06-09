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

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "$compid__8", "$compid__9", "$compid__10", "$compid__11", "$compid__12", "swiperConfig", "circle", "weiXinInfo", "current", "passwords"], _this2.config = {
      navigationBarTitleText: '密码办理入住'
    }, _this2.customComponents = ["AtSteps", "AtIcon", "AtButton"], _temp), _possibleConstructorReturn(_this2, _ret);
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
        weiXinInfo: false,
        current: 2,
        passwords: ''
      };
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */
      this.$$refs = [];
    }
    // hloadChange(event) {
    //   const { current } = this.state
    //   this.setState({ ...{ passwords: event.detail.value }, ...(event.detail.value.length === 4 ? { current: current + 1 } : {}) })
    // }

  }, {
    key: "childChange",
    value: function childChange(v, k) {
      var current = this.state.current;

      this.setState({ passwords: v });
    }
  }, {
    key: "childSubmit",
    value: function childSubmit() {
      var current = this.state.current;
      var config = this.config;

      config.navigationBarTitleText = '支付成功';
      this.setState({ current: current + 1 });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var current = this.__state.current;

      var _this = this;
      var items = [{ 'title': '输入密码' }, { 'title': '支付押金' }, { 'title': '领取房卡（钥匙）' }];
      var anonymousState__temp = (0, _index.internal_inline_style)({
        paddingTop: '30rpx',
        paddingBottom: '20rpx'
      });
      var $compid__8 = (0, _index.genCompid)(__prefix + "$compid__8");
      _index.propsManager.set({
        "items": items,
        "current": current
      }, $compid__8);
      var $compid__9 = (0, _index.genCompid)(__prefix + "$compid__9");
      _index.propsManager.set({
        "prefixClass": "iconfont",
        "value": "gou",
        "size": "80",
        "color": "#f58523"
      }, $compid__9);
      var $compid__10 = (0, _index.genCompid)(__prefix + "$compid__10");
      _index.propsManager.set({
        "prefixClass": "iconfont",
        "value": "gengduo",
        "size": "30",
        "color": "#9B9E9F"
      }, $compid__10);
      var $compid__11 = (0, _index.genCompid)(__prefix + "$compid__11");
      _index.propsManager.set({
        "prefixClass": "iconfont",
        "value": "gengduo",
        "size": "30",
        "color": "#9B9E9F"
      }, $compid__11);
      var $compid__12 = (0, _index.genCompid)(__prefix + "$compid__12");
      _index.propsManager.set({
        "type": "primary",
        "disabled": true
      }, $compid__12);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__8: $compid__8,
        $compid__9: $compid__9,
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/pay/success", _temp2);
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