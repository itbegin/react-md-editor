'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewBox = function PreviewBox(_ref) {
  var styles = _ref.styles;
  var html = _ref.html;
  var style = _ref.style;
  return _react2.default.createElement(
    'div',
    { style: _lodash2.default.merge({}, styles.previewBox, style) },
    _react2.default.createElement('div', {
      style: styles.preview,
      className: 'markdown-body',
      dangerouslySetInnerHTML: { __html: html }
    })
  );
};

PreviewBox.propTypes = {
  styles: _react.PropTypes.object.isRequired,
  html: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};

exports.default = PreviewBox;
//# sourceMappingURL=PreviewBox.js.map