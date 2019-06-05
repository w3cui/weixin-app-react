"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _chunk2 = require("../../../../../lodash/chunk.js");

var _chunk3 = _interopRequireDefault(_chunk2);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _isObject2 = require("../../../../../lodash/isObject.js");

var _isObject3 = _interopRequireDefault(_isObject2);

var _isFunction2 = require("../../../../../lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtGrid = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtGrid, _AtComponent);

  function AtGrid() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

<<<<<<< HEAD
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtGrid.__proto__ || Object.getPrototypeOf(AtGrid)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray3", "data", "gridGroup", "columnNum", "mode", "hasBorder", "className"], _this.handleClick = function (item, index, row) {
=======
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtGrid.__proto__ || Object.getPrototypeOf(AtGrid)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "data", "gridGroup", "columnNum", "mode", "hasBorder", "className"], _this.handleClick = function (item, index, row) {
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
      for (var _len2 = arguments.length, arg = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        arg[_key2 - 3] = arguments[_key2];
      }

      var _this$props = _this.props,
          onClick = _this$props.onClick,
          columnNum = _this$props.columnNum;

      if ((0, _isFunction3.default)(onClick)) {
<<<<<<< HEAD
        var _this$props2;

        /* prettier-ignore */
        var clickIndex = row * columnNum + index;
        (_this$props2 = _this.props).onClick.apply(_this$props2, [item, clickIndex].concat(arg));
      }
    }, _this.customComponents = ["AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
=======
        /* prettier-ignore */
        var clickIndex = row * columnNum + index;
        _this.__triggerPropsFn("onClick", [null].concat([item, clickIndex].concat(arg)));
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
  }

  _createClass(AtGrid, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtGrid.prototype.__proto__ || Object.getPrototypeOf(AtGrid.prototype), "_constructor", this).call(this, props);
<<<<<<< HEAD

      this.$$refs = [];
=======
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
    }
  }, {
    key: "_createData",
    value: function _createData() {
<<<<<<< HEAD
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
=======
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
      ;

      var _props = this.__props,
          data = _props.data,
          mode = _props.mode,
          columnNum = _props.columnNum,
          hasBorder = _props.hasBorder;


      if (Array.isArray(data) && data.length === 0) {
        return null;
      }

      var gridGroup = (0, _chunk3.default)(data, columnNum);

      var bodyClass = (0, _index6.default)(['at-grid__flex-item', 'at-grid-item', "at-grid-item--" + mode], {
        'at-grid-item--no-border': !hasBorder
      });

      var anonymousState__temp = (0, _index6.default)('at-grid', this.__props.className);
<<<<<<< HEAD
      var loopArray3 = gridGroup.map(function (item, i) {
=======
      var loopArray0 = gridGroup.map(function (item, i) {
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $anonymousCallee__0 = item.$original.map(function (childItem, index) {
          childItem = {
            $original: (0, _index.internal_get_original)(childItem)
          };
          var $loopState__temp3 = (0, _index6.default)(bodyClass, {
            'at-grid-item--last': index === columnNum - 1
          });
          var $loopState__temp5 = (0, _index.internal_inline_style)({
            flex: "0 0 " + 100 / columnNum + "%"
          });
<<<<<<< HEAD
          var $loopState__temp7 = (0, _isObject3.default)(childItem.$original.iconInfo) && !childItem.$original.image ? _this2.mergeStyle({ fontSize: (childItem.$original.iconInfo.size || 24) + "px" }, childItem.$original.iconInfo.customStyle) : null;
          var $loopState__temp9 = (0, _isObject3.default)(childItem.$original.iconInfo) && !childItem.$original.image;
          var $compid__19 = (0, _index.genCompid)(__prefix + "dEUvQfkJme" + i + "-" + index);
          $loopState__temp9 && _index.propsManager.set({
            "customStyle": $loopState__temp7,
            "value": childItem.$original.iconInfo.value,
            "color": childItem.$original.iconInfo.color,
            "className": childItem.$original.iconInfo.className,
            "prefixClass": childItem.$original.iconInfo.prefixClass
          }, $compid__19);
=======
          var $loopState__temp7 = (0, _isObject3.default)(childItem.$original.iconInfo) && !childItem.$original.image;
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
          return {
            $loopState__temp3: $loopState__temp3,
            $loopState__temp5: $loopState__temp5,
            $loopState__temp7: $loopState__temp7,
<<<<<<< HEAD
            $loopState__temp9: $loopState__temp9,
            $compid__19: $compid__19,
=======
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
            $original: childItem.$original
          };
        });
        return {
          $anonymousCallee__0: $anonymousCallee__0,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
<<<<<<< HEAD
        loopArray3: loopArray3,
=======
        loopArray0: loopArray0,
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
        data: data,
        gridGroup: gridGroup
      });
      return this.__state;
    }
  }]);

  return AtGrid;
<<<<<<< HEAD
}(_component2.default), _class.$$events = ["handleClick"], _class.$$componentPath = "D:/\u9879\u76EE/weixin-react/node_modules/taro-ui/dist/weapp/components/grid/index", _temp2);
=======
}(_component2.default), _class.properties = {
  "onClick": {
    "type": null,
    "value": null
  },
  "columnNum": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "data": {
    "type": null,
    "value": null
  },
  "mode": {
    "type": null,
    "value": null
  },
  "hasBorder": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleClick"], _temp2);
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e


AtGrid.defaultProps = {
  data: [],
  columnNum: 3,
  mode: 'square',
  hasBorder: true
};

AtGrid.propTypes = {
  mode: _index4.default.string,
  onClick: _index4.default.func,
  hasBorder: _index4.default.bool,
  columnNum: _index4.default.number,
  data: _index4.default.arrayOf(_index4.default.shape({
    image: _index4.default.string,
    value: _index4.default.string,
    iconInfo: _index4.default.shape({
      size: _index4.default.number,
      value: _index4.default.string,
      color: _index4.default.string,
      prefixClass: _index4.default.string,
      customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
      className: _index4.default.oneOfType([_index4.default.array, _index4.default.string])
    })
  }))
};
exports.default = AtGrid;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtGrid));