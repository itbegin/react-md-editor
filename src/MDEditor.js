import React, { PropTypes } from 'react'
import _ from 'lodash'
import styles from './styles'
import Tools from './components/tools/Tools'
import EditBox from './components/EditBox'
import PreviewBox from './components/PreviewBox'
import Marked from './utils/markFn'

const Tabs = {
  edit: '编辑',
  preview: '预览',
}

class MDEditor extends React.Component {
  state = {
    focus: false,
    selectedPosition: {
      start: 0,
      end: 0,
    },
    scale: 'normal',
  }
  setFocus = (focus) => this.setState({ focus })
  setSelectedPosition = (selectedPosition) => this.setState({ selectedPosition })
  setScale = (scale) => this.setState({ scale })
  format = (before, after) => {
    const { selectedPosition } = this.state
    const { value, onValueChange } = this.props
    let firstPart = value.substring(0, selectedPosition.start)
    const selectPart = value.substring(selectedPosition.start, selectedPosition.end)
    let lastPart = value.substring(selectedPosition.end)
    if (firstPart.substring(firstPart.length - before.length) === before &&
    lastPart.substring(0, after.length) === after) {
      firstPart = firstPart.substring(0, firstPart.length - before.length)
      lastPart = lastPart.substring(after.length)
    } else {
      firstPart += before
      lastPart = after + lastPart
    }
    onValueChange(firstPart + selectPart + lastPart)
    this.setSelectedPosition({
      start: firstPart.length,
      end: firstPart.length + selectPart.length,
    })
  }
  render() {
    const { tab, onTabChange, value, onValueChange, markFn, imageUpload, minHeight } = this.props
    const { focus, selectedPosition, scale } = this.state
    let editBoxStyle = { minHeight: `${minHeight}px` }
    let previewBoxStyle = {}
    if (tab === 'edit' && scale === 'normal') {
      previewBoxStyle = { display: 'none' }
    }
    if (tab === 'edit' && scale === 'full') {
      editBoxStyle = { width: '50%' }
      previewBoxStyle = { position: 'absolute', width: '50%', left: '50%', top: 0 }
    }
    if (tab === 'preview') {
      editBoxStyle = { display: 'none' }
    }
    return (
      <div style={_.merge({}, styles.stage, styles[scale])}>
        <div style={styles.controlPanel}>
          <div style={styles.togglePanel}>
            {
              _.map(Tabs, (t, k) => (
                <span
                  key={k}
                  style={_.merge({}, styles.toggleTab, tab === k && styles.selectedTab)}
                  onClick={() => onTabChange(k)}
                >
                  {t}
                </span>
              ))
            }
            <div style={{ flex: 1 }} />
            <Tools
              format={this.format}
              styles={styles}
              scale={scale}
              setScale={this.setScale}
            />
          </div>
        </div>
        <div style={styles.contentBox}>
          <EditBox
            value={value}
            focus={focus}
            onChange={onValueChange}
            onBlur={() => this.setFocus(false)}
            onFocus={() => this.setFocus(true)}
            styles={styles}
            style={editBoxStyle}
            selectedPosition={selectedPosition}
            setSelectedPosition={this.setSelectedPosition}
            format={this.format}
            imageUpload={imageUpload}
          />
          <PreviewBox
            styles={styles}
            style={previewBoxStyle}
            html={markFn(value)}
          />
        </div>
      </div>
    )
  }
}

MDEditor.defaultProps = {
  markFn: Marked,
}

MDEditor.propTypes = {
  value: PropTypes.string.isRequired,
  tab: PropTypes.oneOf(_.keys(Tabs)).isRequired,
  onValueChange: PropTypes.func.isRequired,
  onTabChange: PropTypes.func.isRequired,
  markFn: PropTypes.func,
  imageUpload: PropTypes.func,
  minHeight: PropTypes.number,
}
export default MDEditor
