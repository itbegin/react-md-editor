import React, { PropTypes } from 'react'
import _ from 'lodash'

class HeaderPopup extends React.Component {
  state = {}
  render() {
    const { hover, styles, onClick } = this.props
    return (
      <div style={_.merge({}, styles.headerPopup, hover && styles.headerPopupHover)}>
        <div
          style={{ fontSize: '1.8em', padding: '4px 3px', cursor: 'pointer' }}
          onClick={(e) => onClick(1)}
        >
          {'标题1'}
        </div>
        <div
          style={{ fontSize: '1.5em', padding: '4px 3px', cursor: 'pointer' }}
          onClick={(e) => onClick(2)}
        >
          {'标题2'}
        </div>
        <div
          style={{ fontSize: '1.3em', padding: '4px 3px', cursor: 'pointer' }}
          onClick={(e) => onClick(3)}
        >
          {'标题3'}
        </div>
      </div>
    )
  }
}
HeaderPopup.propTypes = {
  hover: PropTypes.bool.isRequired,
  styles: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default HeaderPopup
