'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderPopup = function (_React$Component) {
  _inherits(HeaderPopup, _React$Component);

  function HeaderPopup() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderPopup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HeaderPopup)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderPopup, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var hover = _props.hover;
      var styles = _props.styles;
      var _onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        { style: _lodash2.default.merge({}, styles.headerPopup, hover && styles.headerPopupHover) },
        _react2.default.createElement(
          'div',
          {
            style: { fontSize: '1.8em', padding: '4px 3px', cursor: 'pointer' },
            onClick: function onClick(e) {
              return _onClick(1);
            }
          },
          '标题1'
        ),
        _react2.default.createElement(
          'div',
          {
            style: { fontSize: '1.5em', padding: '4px 3px', cursor: 'pointer' },
            onClick: function onClick(e) {
              return _onClick(2);
            }
          },
          '标题2'
        ),
        _react2.default.createElement(
          'div',
          {
            style: { fontSize: '1.3em', padding: '4px 3px', cursor: 'pointer' },
            onClick: function onClick(e) {
              return _onClick(3);
            }
          },
          '标题3'
        )
      );
    }
  }]);

  return HeaderPopup;
}(_react2.default.Component);

HeaderPopup.propTypes = {
  hover: _react.PropTypes.bool.isRequired,
  styles: _react.PropTypes.object.isRequired,
  onClick: _react.PropTypes.func.isRequired
};
exports.default = HeaderPopup;
//# sourceMappingURL=HeaderPopup.js.map