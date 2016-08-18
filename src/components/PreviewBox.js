import React, { PropTypes } from 'react'
import _ from 'lodash'

const PreviewBox = ({ styles, html, style }) => (
  <div style={_.merge({}, styles.previewBox, style)}>
    <div
      style={styles.preview}
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
)

PreviewBox.propTypes = {
  styles: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default PreviewBox
