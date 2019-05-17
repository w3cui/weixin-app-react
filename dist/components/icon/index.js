"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icons = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Icons, _BaseComponent);

  function Icons() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Icons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Icons.__proto__ || Object.getPrototypeOf(Icons)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "icon", "iconName", "size", "color"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Icons, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Icons.prototype.__proto__ || Object.getPrototypeOf(Icons.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _props = this.__props,
          icon = _props.icon,
          iconName = _props.iconName,
          size = _props.size,
          color = _props.color;

      var anonymousState__temp = (0, _index.internal_inline_style)({ fontSize: size || '35rpx', color: color || '#555' });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        icon: icon,
        iconName: iconName
      });
      return this.__state;
    }
  }]);

  return Icons;
}(_index.Component), _class.properties = {
  "icon": {
    "type": null,
    "value": null
  },
  "iconName": {
    "type": null,
    "value": null
  },
  "size": {
    "type": null,
    "value": null
  },
  "color": {
    "type": null,
    "value": null
  }
}, _class.$$events = [], _temp2);
exports.default = Icons;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Icons));