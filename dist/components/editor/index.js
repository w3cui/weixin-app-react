"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

{}

var EditorNum = (_temp2 = _class = function (_BaseComponent) {
  _inherits(EditorNum, _BaseComponent);

  function EditorNum() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditorNum);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditorNum.__proto__ || Object.getPrototypeOf(EditorNum)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray5", "editorItem", "value", "maxLength"], _this.customComponents = ["Icons"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditorNum, [{
    key: "_constructor",
    value: function _constructor() {
      _get(EditorNum.prototype.__proto__ || Object.getPrototypeOf(EditorNum.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        editorItem: [7, 8, 9, "", 4, 5, 6, "+", 1, 2, 3, '-', '.', 0, 'x', '完成'],
        value: ""
      };
      this.$$refs = [];
    }
    /**
     * 获取焦点
     */

  }, {
    key: "childFocus",
    value: function childFocus(ref) {
      var value = this.state.value;
      var _props = this.props,
          onChange = _props.onChange,
          onSubmit = _props.onSubmit,
          maxLength = _props.maxLength;

      var retValue = ref === 'x' ? value.substr(0, value.length - 1) : "" + value + (ref === '完成' ? '' : ref);
      if (retValue.length > maxLength) {
        return false;
      } else if (ref === '完成' && onSubmit && retValue.length === maxLength) {
        this.props.onSubmit();
      } else if (ref !== '完成' && ref !== '') {
        this.setState({ value: retValue });
        this.props.onChange(retValue, ref);
      }
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

      var editorItem = this.__state.editorItem;

      var isAddClassName = function isAddClassName(data) {
        switch (data) {
          case '':
            return '';
            break;
          case '完成':
            return 'submit';
            break;
          default:
            return 'hover';
            break;
        }
      };
      var loopArray5 = editorItem.map(function (ref, $key) {
        ref = {
          $original: (0, _index.internal_get_original)(ref)
        };
        var $loopState__temp2 = "at-col at-col-3 " + isAddClassName(ref.$original);
        var $compid__22 = (0, _index.genCompid)(__prefix + "eVuzcqWzIY" + $key);
        ref.$original === 'x' && _index.propsManager.set({
          "icon": "iconfont-qingchu",
          "size": "45rpx"
        }, $compid__22);
        return {
          $loopState__temp2: $loopState__temp2,
          $compid__22: $compid__22,
          $original: ref.$original
        };
      });
      Object.assign(this.__state, {
        loopArray5: loopArray5
      });
      return this.__state;
    }
  }]);

  return EditorNum;
}(_index.Component), _class.$$events = ["childFocus"], _class.$$componentPath = "components/editor/index", _temp2);
exports.default = EditorNum;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(EditorNum));