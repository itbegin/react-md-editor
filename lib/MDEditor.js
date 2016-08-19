'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _Tools = require('./components/tools/Tools');

var _Tools2 = _interopRequireDefault(_Tools);

var _EditBox = require('./components/EditBox');

var _EditBox2 = _interopRequireDefault(_EditBox);

var _PreviewBox = require('./components/PreviewBox');

var _PreviewBox2 = _interopRequireDefault(_PreviewBox);

var _markFn = require('./utils/markFn');

var _markFn2 = _interopRequireDefault(_markFn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = {
  edit: '编辑',
  preview: '预览'
};

var MDEditor = function (_React$Component) {
  _inherits(MDEditor, _React$Component);

  function MDEditor() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, MDEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(MDEditor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      focus: false,
      selectedPosition: {
        start: 0,
        end: 0
      },
      scale: 'normal'
    }, _this.setFocus = function (focus) {
      return _this.setState({ focus: focus });
    }, _this.setSelectedPosition = function (selectedPosition) {
      return _this.setState({ selectedPosition: selectedPosition });
    }, _this.setScale = function (scale) {
      return _this.setState({ scale: scale });
    }, _this.format = function (before, after) {
      var selectedPosition = _this.state.selectedPosition;
      var _this$props = _this.props;
      var value = _this$props.value;
      var onValueChange = _this$props.onValueChange;

      var firstPart = value.substring(0, selectedPosition.start);
      var selectPart = value.substring(selectedPosition.start, selectedPosition.end);
      var lastPart = value.substring(selectedPosition.end);
      if (firstPart.substring(firstPart.length - before.length) === before && lastPart.substring(0, after.length) === after) {
        firstPart = firstPart.substring(0, firstPart.length - before.length);
        lastPart = lastPart.substring(after.length);
      } else {
        firstPart += before;
        lastPart = after + lastPart;
      }
      onValueChange(firstPart + selectPart + lastPart);
      _this.setSelectedPosition({
        start: firstPart.length,
        end: firstPart.length + selectPart.length
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MDEditor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var tab = _props.tab;
      var onTabChange = _props.onTabChange;
      var value = _props.value;
      var onValueChange = _props.onValueChange;
      var markFn = _props.markFn;
      var imageUpload = _props.imageUpload;
      var minHeight = _props.minHeight;
      var _state = this.state;
      var focus = _state.focus;
      var selectedPosition = _state.selectedPosition;
      var scale = _state.scale;

      var editBoxStyle = minHeight ? { minHeight: minHeight + 'px' } : {};
      var previewBoxStyle = {};
      if (tab === 'edit' && scale === 'normal') {
        previewBoxStyle = { display: 'none' };
      }
      if (tab === 'edit' && scale === 'full') {
        editBoxStyle = { width: '50%' };
        previewBoxStyle = { position: 'absolute', width: '50%', left: '50%', top: 0 };
      }
      if (tab === 'preview') {
        editBoxStyle = { display: 'none' };
      }
      return _react2.default.createElement(
        'div',
        { style: _lodash2.default.merge({}, _styles2.default.stage, _styles2.default[scale]) },
        _react2.default.createElement(
          'div',
          { style: _styles2.default.controlPanel },
          _react2.default.createElement(
            'div',
            { style: _styles2.default.togglePanel },
            _lodash2.default.map(Tabs, function (t, k) {
              return _react2.default.createElement(
                'span',
                {
                  key: k,
                  style: _lodash2.default.merge({}, _styles2.default.toggleTab, tab === k && _styles2.default.selectedTab),
                  onClick: function onClick() {
                    return onTabChange(k);
                  }
                },
                t
              );
            }),
            _react2.default.createElement('div', { style: { flex: 1 } }),
            _react2.default.createElement(_Tools2.default, {
              format: this.format,
              styles: _styles2.default,
              scale: scale,
              setScale: this.setScale
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: _styles2.default.contentBox },
          _react2.default.createElement(_EditBox2.default, {
            value: value,
            focus: focus,
            onChange: onValueChange,
            onBlur: function onBlur() {
              return _this2.setFocus(false);
            },
            onFocus: function onFocus() {
              return _this2.setFocus(true);
            },
            styles: _styles2.default,
            style: editBoxStyle,
            selectedPosition: selectedPosition,
            setSelectedPosition: this.setSelectedPosition,
            format: this.format,
            imageUpload: imageUpload
          }),
          _react2.default.createElement(_PreviewBox2.default, {
            styles: _styles2.default,
            style: previewBoxStyle,
            html: markFn(value)
          })
        )
      );
    }
  }]);

  return MDEditor;
}(_react2.default.Component);

MDEditor.defaultProps = {
  markFn: _markFn2.default
};

MDEditor.propTypes = {
  value: _react.PropTypes.string.isRequired,
  tab: _react.PropTypes.oneOf(_lodash2.default.keys(Tabs)).isRequired,
  onValueChange: _react.PropTypes.func.isRequired,
  onTabChange: _react.PropTypes.func.isRequired,
  markFn: _react.PropTypes.func,
  imageUpload: _react.PropTypes.func,
  minHeight: _react.PropTypes.number
};
exports.default = MDEditor;
//# sourceMappingURL=MDEditor.js.map