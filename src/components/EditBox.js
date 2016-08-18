import React, { PropTypes, Component } from 'react'
import _ from 'lodash'

const selectDivStyle = {
  display: 'inline-block',
  position: 'relative',
}
const fileInputStyle = {
  position: 'absolute',
  opacity: '0',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  cursor: 'pointer',
}

class EditBox extends Component {
  componentDidMount() {
    document.addEventListener('click', this.onBlur)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedPosition !== this.props.selectedPosition) {
      this.setTextSelected(
        this.editarea,
        this.props.selectedPosition.start,
        this.props.selectedPosition.end
      )
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onBlur)
  }
  onBlur = (e) => {
    if (e.target !== this.editarea) {
      this.props.onBlur()
    }
  }
  onSelect = () => {
    const el = this.editarea
    let start = 0
    let end = 0
    if (document.selection) {
      const range = document.selection.createRange()
      const drange = range.duplicate()

      drange.moveToElementText(el)
      drange.setEndPoint('EndToEnd', range)

      start = drange.text.length - range.text.length
      end = start + range.text.length
    } else if (window.getSelection) {
      start = el.selectionStart
      end = el.selectionEnd
    }
    this.props.setSelectedPosition({ start, end })
  }
  setTextSelected = (inputDom, startIndex, endIndex) => {
    if (inputDom.setSelectionRange) {
      inputDom.setSelectionRange(startIndex, endIndex)
    } else if (inputDom.createTextRange) {
      const range = inputDom.createTextRange()
      range.collapse(true);
      range.moveStart('character', startIndex)
      range.moveEnd('character', endIndex - startIndex - 1)
      range.select()
    }
    inputDom.focus()
    this.props.onFocus()
  }
  handleFileChange = (e) => {
    const { imageUpload } = this.props
    if (imageUpload) {
      imageUpload(e.target.files[0], this.image)
    }
  }
  image = (src = '') => {
    const { value } = this.props
    this.props.onChange(`${value}${value.length !== 0 ? '\n' : ''}![](${src})`)
  }
  render() {
    const { styles, value, focus, onChange, onFocus, imageUpload, style } = this.props
    return (
      <div style={_.merge({}, styles.editBox, style)}>
        <textarea
          ref={(t) => (this.editarea = t)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onSelect={this.onSelect}
          style={_.merge({}, styles.editarea, focus && styles.editareaFocus)}
          onDrop={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (imageUpload) {
              imageUpload(e.dataTransfer.files[0], this.image)
            }
          }}
        />
        <div style={_.merge({}, styles.editFooter, focus && styles.editFooterFocus)}>
          <span style={_.merge({}, !imageUpload && { visibility: 'hidden' })}>
            {'Attach files by dragging & dropping, or  '}
            <div style={selectDivStyle}>
              <span style={{ color: '#4078c0' }}>{'select'}</span>
              <input type="file" style={fileInputStyle} onChange={this.handleFileChange} />
            </div>
            {'.'}
          </span>
        </div>
      </div>
    )
  }
}

EditBox.propTypes = {
  value: PropTypes.string.isRequired,
  focus: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
  style: PropTypes.object,
  selectedPosition: PropTypes.object.isRequired,
  setSelectedPosition: PropTypes.func.isRequired,
  format: PropTypes.func.isRequired,
  imageUpload: PropTypes.func,
}

export default EditBox
