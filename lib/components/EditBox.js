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

var selectDivStyle = {
  display: 'inline-block',
  position: 'relative'
};
var fileInputStyle = {
  position: 'absolute',
  opacity: '0',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  cursor: 'pointer'
};

var EditBox = function (_Component) {
  _inherits(EditBox, _Component);

  function EditBox() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, EditBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EditBox)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onBlur = function (e) {
      if (e.target !== _this.editarea) {
        _this.props.onBlur();
      }
    }, _this.onSelect = function () {
      var el = _this.editarea;
      var start = 0;
      var end = 0;
      if (document.selection) {
        var range = document.selection.createRange();
        var drange = range.duplicate();

        drange.moveToElementText(el);
        drange.setEndPoint('EndToEnd', range);

        start = drange.text.length - range.text.length;
        end = start + range.text.length;
      } else if (window.getSelection) {
        start = el.selectionStart;
        end = el.selectionEnd;
      }
      _this.props.setSelectedPosition({ start: start, end: end });
    }, _this.setTextSelected = function (inputDom, startIndex, endIndex) {
      if (inputDom.setSelectionRange) {
        inputDom.setSelectionRange(startIndex, endIndex);
      } else if (inputDom.createTextRange) {
        var range = inputDom.createTextRange();
        range.collapse(true);
        range.moveStart('character', startIndex);
        range.moveEnd('character', endIndex - startIndex - 1);
        range.select();
      }
      inputDom.focus();
      _this.props.onFocus();
    }, _this.handleFileChange = function (e) {
      var imageUpload = _this.props.imageUpload;

      if (imageUpload) {
        imageUpload(e.target.files[0], _this.image);
      }
    }, _this.image = function () {
      var src = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var value = _this.props.value;

      _this.props.onChange('' + value + (value.length !== 0 ? '\n' : '') + '![](' + src + ')');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.onBlur);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.selectedPosition !== this.props.selectedPosition) {
        this.setTextSelected(this.editarea, this.props.selectedPosition.start, this.props.selectedPosition.end);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onBlur);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var styles = _props.styles;
      var value = _props.value;
      var focus = _props.focus;
      var _onChange = _props.onChange;
      var onFocus = _props.onFocus;
      var imageUpload = _props.imageUpload;
      var style = _props.style;

      return _react2.default.createElement(
        'div',
        { style: _lodash2.default.merge({}, styles.editBox, style) },
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', flex: 1 } },
          _react2.default.createElement('textarea', {
            ref: function ref(t) {
              return _this2.editarea = t;
            },
            value: value,
            onChange: function onChange(e) {
              return _onChange(e.target.value);
            },
            onFocus: onFocus,
            onSelect: this.onSelect,
            style: _lodash2.default.merge({}, styles.editarea, focus && styles.editareaFocus),
            onDrop: function onDrop(e) {
              e.preventDefault();
              e.stopPropagation();
              if (imageUpload) {
                imageUpload(e.dataTransfer.files[0], _this2.image);
              }
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { style: _lodash2.default.merge({}, styles.editFooter, focus && styles.editFooterFocus) },
          _react2.default.createElement(
            'span',
            { style: _lodash2.default.merge({}, !imageUpload && { visibility: 'hidden' }) },
            'Attach files by dragging & dropping, or  ',
            _react2.default.createElement(
              'div',
              { style: selectDivStyle },
              _react2.default.createElement(
                'span',
                { style: { color: '#4078c0' } },
                'select'
              ),
              _react2.default.createElement('input', { type: 'file', style: fileInputStyle, onChange: this.handleFileChange })
            ),
            '.'
          )
        )
      );
    }
  }]);

  return EditBox;
}(_react.Component);

EditBox.propTypes = {
  value: _react.PropTypes.string.isRequired,
  focus: _react.PropTypes.bool.isRequired,
  onBlur: _react.PropTypes.func.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  onFocus: _react.PropTypes.func.isRequired,
  styles: _react.PropTypes.object.isRequired,
  style: _react.PropTypes.object,
  selectedPosition: _react.PropTypes.object.isRequired,
  setSelectedPosition: _react.PropTypes.func.isRequired,
  format: _react.PropTypes.func.isRequired,
  imageUpload: _react.PropTypes.func
};

exports.default = EditBox;
//# sourceMappingURL=EditBox.js.map