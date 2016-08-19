'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ToolBar = require('./ToolBar');

var _ToolBar2 = _interopRequireDefault(_ToolBar);

var _icons = require('./icons.json');

var _icons2 = _interopRequireDefault(_icons);

var _HeaderPopup = require('./components/HeaderPopup');

var _HeaderPopup2 = _interopRequireDefault(_HeaderPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formatIcons = ['header', 'quote', 'blod', 'italic', 'code', 'link', 'ol', 'ul'];

var Tools = function (_React$Component) {
  _inherits(Tools, _React$Component);

  function Tools() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Tools);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Tools)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.header = function (i) {
      var levels = ['', '#', '##', '###'];
      _this.props.format(levels[i] + ' ', '');
    }, _this.quote = function () {
      _this.props.format('> ', '');
    }, _this.blod = function () {
      _this.props.format('**', '**');
    }, _this.italic = function () {
      _this.props.format('*', '*');
    }, _this.code = function () {
      _this.props.format('```\n', '\n```');
    }, _this.link = function () {
      _this.props.format('[', ']()');
    }, _this.ol = function () {
      _this.props.format('1. ', '');
    }, _this.ul = function () {
      _this.props.format('- ', '');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tools, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var styles = _props.styles;
      var scale = _props.scale;
      var setScale = _props.setScale;

      var nextScale = scale === 'full' ? 'normal' : 'full';
      return _react2.default.createElement(
        'div',
        { style: styles.tools },
        _lodash2.default.map(formatIcons, function (icon) {
          var popup = void 0;
          var onClick = void 0;
          if (icon === 'header') {
            popup = function popup(props) {
              return _react2.default.createElement(_HeaderPopup2.default, _extends({}, props, { styles: styles, onClick: _this2[icon] }));
            };
          } else {
            onClick = _this2[icon];
          }
          return _react2.default.createElement(_ToolBar2.default, {
            key: icon,
            styles: styles,
            icon: _icons2.default[icon],
            Popup: popup,
            onClick: onClick
          });
        }),
        _react2.default.createElement(_ToolBar2.default, {
          key: scale,
          styles: styles,
          icon: _icons2.default[nextScale],
          onClick: function onClick() {
            return setScale(nextScale);
          }
        })
      );
    }
  }]);

  return Tools;
}(_react2.default.Component);

Tools.propTypes = {
  styles: _react.PropTypes.object.isRequired,
  format: _react.PropTypes.func.isRequired,
  scale: _react.PropTypes.oneOf(['normal', 'full']).isRequired,
  setScale: _react.PropTypes.func.isRequired
};

exports.default = Tools;
//# sourceMappingURL=Tools.js.map