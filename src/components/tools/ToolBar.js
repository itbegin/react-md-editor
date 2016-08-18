import React, { PropTypes } from 'react'
import _ from 'lodash'

class ToolBar extends React.Component {
  state = {
    hover: false,
  }
  onHoverChange = (hover) => this.setState({ hover })
  render() {
    const { icon, styles, onClick, Popup } = this.props
    const { paths, transform, ...others } = icon
    const { hover } = this.state
    return (
      <div
        style={styles.iconWrap}
        onClick={onClick}
        onMouseOver={() => this.onHoverChange(true)}
        onMouseOut={() => this.onHoverChange(false)}
      >
        <svg {...others} style={_.merge({}, styles.icon, hover && styles.iconHover)}>
          <g transform={transform}>
            {
              paths.map((p, i) => (
                <path key={i} d={p} />
              ))
            }
          </g>
        </svg>
        {Popup && <Popup hover={hover} />}
      </div>
    )
  }
}

ToolBar.propTypes = {
  onClick: PropTypes.func,
  styles: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  Popup: PropTypes.func,
}

export default ToolBar
