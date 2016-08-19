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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolBar = function (_React$Component) {
  _inherits(ToolBar, _React$Component);

  function ToolBar() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ToolBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ToolBar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.onHoverChange = function (hover) {
      return _this.setState({ hover: hover });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToolBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var icon = _props.icon;
      var styles = _props.styles;
      var onClick = _props.onClick;
      var Popup = _props.Popup;
      var paths = icon.paths;
      var transform = icon.transform;

      var others = _objectWithoutProperties(icon, ['paths', 'transform']);

      var hover = this.state.hover;

      return _react2.default.createElement(
        'div',
        {
          style: styles.iconWrap,
          onClick: onClick,
          onMouseOver: function onMouseOver() {
            return _this2.onHoverChange(true);
          },
          onMouseOut: function onMouseOut() {
            return _this2.onHoverChange(false);
          }
        },
        _react2.default.createElement(
          'svg',
          _extends({}, others, { style: _lodash2.default.merge({}, styles.icon, hover && styles.iconHover) }),
          _react2.default.createElement(
            'g',
            { transform: transform },
            paths.map(function (p, i) {
              return _react2.default.createElement('path', { key: i, d: p });
            })
          )
        ),
        Popup && _react2.default.createElement(Popup, { hover: hover })
      );
    }
  }]);

  return ToolBar;
}(_react2.default.Component);

ToolBar.propTypes = {
  onClick: _react.PropTypes.func,
  styles: _react.PropTypes.object.isRequired,
  icon: _react.PropTypes.object.isRequired,
  Popup: _react.PropTypes.func
};

exports.default = ToolBar;
//# sourceMappingURL=ToolBar.js.map