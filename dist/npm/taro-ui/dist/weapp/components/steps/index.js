"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtSteps = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtSteps, _AtComponent);

  function AtSteps() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtSteps);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtSteps.__proto__ || Object.getPrototypeOf(AtSteps)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray4", "items", "customStyle", "className", "current"], _this.customComponents = ["AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtSteps, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtSteps.prototype.__proto__ || Object.getPrototypeOf(AtSteps.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _props;

      (_props = this.props).onChange.apply(_props, arguments);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props2 = this.__props,
          customStyle = _props2.customStyle,
          className = _props2.className,
          items = _props2.items,
          current = _props2.current;


      var anonymousState__temp = (0, _index6.default)('at-steps', className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var loopArray4 = items.map(function (item, i) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp4 = (0, _index6.default)({
          'at-steps__item': true,
          'at-steps__item--active': i === current,
          'at-steps__item--inactive': i !== current
        });
        var $loopState__temp6 = item.$original.success || item.$original.error ? { fontSize: '28px' } : null;
        var $loopState__temp8 = item.$original.icon ? { fontSize: (item.$original.icon.size || 24) + "px" } : null;
        var $compid__20 = (0, _index.genCompid)(__prefix + "DExokBXDGc" + i);
        (item.$original.success || item.$original.error) && _index.propsManager.set({
          "customStyle": $loopState__temp6,
          "value": item.$original.success ? 'check-circle' : 'close-circle',
          "color": item.$original.success ? '#6190E8' : '#FF4949'
        }, $compid__20);
        var $compid__21 = (0, _index.genCompid)(__prefix + "KBREkXFuYy" + i);
        !(item.$original.success || item.$original.error) && item.$original.icon && _index.propsManager.set({
          "customStyle": $loopState__temp8,
          "value": item.$original.icon.value,
          "color": i === current ? item.$original.icon.activeColor : item.$original.icon.inactiveColor
        }, $compid__21);
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $compid__20: $compid__20,
          $compid__21: $compid__21,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray4: loopArray4,
        items: items
      });
      return this.__state;
    }
  }]);

  return AtSteps;
}(_component2.default), _class.$$events = ["handleClick"], _class.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  items: [],
  onChange: function onChange() {}
}, _class.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  current: _index4.default.number,
  items: _index4.default.array,
  onChange: _index4.default.func
}, _class.$$componentPath = "D:/\u9879\u76EE/weixin-react/node_modules/taro-ui/dist/weapp/components/steps/index", _temp2);
exports.default = AtSteps;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtSteps));