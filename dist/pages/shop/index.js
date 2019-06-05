"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = require("../../npm/tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _index4 = require("../../redux/action/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userItemNew = function () {
  function userItemNew(parameters) {
    _classCallCheck(this, userItemNew);

    this.config = _extends({
      user: "",
      userId: ""
    }, parameters);
  }

  _createClass(userItemNew, [{
    key: "user2",
    value: function user2(name) {
      console.log(name);
    }
  }, {
    key: "user",
    set: function set(name) {
      this.config.user = name;
    },
    get: function get() {
      var user = this.config.user;

      return user;
    }
  }]);

  return userItemNew;
}();
userItemNew = tslib_1.__decorate([(0, _index3.connect)(function (_ref) {
  var counter = _ref.counter,
      userInfo = _ref.userInfo;
  return {
    counter: counter, userInfo: userInfo
  };
}, function (dispatch, rep) {
  return {
    setWeiXinUser: function setWeiXinUser(data) {
      dispatch((0, _index4.setWeiXinUser)(data));
    }
  };
})], userItemNew);

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref2;

    var _temp, _this2, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray1", "loopArray2", "$compid__14", "$compid__15", "$compid__16", "$compid__17", "current", "swiperConfig", "circle", "weiXinInfo", "passwords"], _this2.config = {
      navigationBarTitleText: '自助订房'
    }, _this2.customComponents = ["AtSteps", "AtButton", "AtForm", "EditorNum"], _temp), _possibleConstructorReturn(_this2, _ret);
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
        current: 0,
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

      console.log(this);
      config.navigationBarTitleText = '支付押金';
      this.setState({ current: current + 1 });
    }
  }, {
    key: "openPage",
    value: function openPage(url) {
      _index2.default.navigateTo({
        url: url
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var userItem2 = new userItemNew({ user: "" });
      console.log(userItem2);
      debugger;
    }
  }, {
    key: "onChange",
    value: function onChange() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          passwords = _state.passwords,
          current = _state.current;

      var _this = this;
      var items = [{ 'title': '选择房型' }, { 'title': '信息录入' }, { 'title': '支付押金' }, { 'title': '领取房卡' }];
      var inputItem = function inputItem() {
        if (!passwords) {
          return [];
        }var element = [];
        for (var index = 0; index < passwords.length; index++) {
          element[index] = "\u25CF";
        }
        console.log(element);
        return element;
      };
      var anonymousState__temp = (0, _index.internal_inline_style)({
        zIndex: 50,
        position: 'absolute',
        left: '0',
        top: 0,
        width: '100%',
        paddingTop: '30rpx',
        background: '#fff'
      });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ marginTop: '20rpx' });
      var anonymousState__temp3 = current === 0 ? (0, _index.internal_inline_style)({
        paddingTop: '200rpx'
      }) : null;
      var loopArray1 = current === 0 ? [1, 2, 3, 4, 5, 6].map(function (ref, _anonIdx) {
        ref = {
          $original: (0, _index.internal_get_original)(ref)
        };
        var $compid__13 = (0, _index.genCompid)(__prefix + "brDBVHaahd" + _anonIdx);
        current === 0 && _index.propsManager.set({
          "type": "primary"
        }, $compid__13);
        return {
          $compid__13: $compid__13,
          $original: ref.$original
        };
      }) : [];
      var loopArray2 = current === 1 ? [0, 1, 2, 3].map(function (r, _anonIdx3) {
        r = {
          $original: (0, _index.internal_get_original)(r)
        };
        var $loopState__temp5 = r.$original !== 3 ? inputItem().length === r.$original ? 'inputText focus' : 'inputText' : null;
        var $loopState__temp7 = r.$original !== 3 ? inputItem()[r.$original] : null;
        var $loopState__temp9 = inputItem().length === r.$original ? 'inputText focus' : 'inputText';
        var $loopState__temp11 = inputItem()[r.$original];
        return {
          $loopState__temp5: $loopState__temp5,
          $loopState__temp7: $loopState__temp7,
          $loopState__temp9: $loopState__temp9,
          $loopState__temp11: $loopState__temp11,
          $original: r.$original
        };
      }) : [];
      var $compid__14 = (0, _index.genCompid)(__prefix + "$compid__14");
      _index.propsManager.set({
        "items": items,
        "current": current,
        "onChange": this.onChange.bind(this)
      }, $compid__14);
      var $compid__15 = (0, _index.genCompid)(__prefix + "$compid__15");
      current === 1 && _index.propsManager.set({
        "className": "pay_password_list"
      }, $compid__15);
      var $compid__16 = (0, _index.genCompid)(__prefix + "$compid__16");
      current === 1 && _index.propsManager.set({
        "maxLength": 4,
        "onChange": this.childChange.bind(this),
        "onSubmit": this.childSubmit.bind(this)
      }, $compid__16);
      var $compid__17 = (0, _index.genCompid)(__prefix + "$compid__17");
      current === 2 && _index.propsManager.set({
        "type": "primary",
        "onClick": this.openPage.bind(this, "/pages/pay/success")
      }, $compid__17);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray1: loopArray1,
        loopArray2: loopArray2,
        $compid__14: $compid__14,
        $compid__15: $compid__15,
        $compid__16: $compid__16,
        $compid__17: $compid__17
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["onScrolltoupper", "onScroll"], _class.$$componentPath = "pages/shop/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));