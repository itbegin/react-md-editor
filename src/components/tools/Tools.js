import React, { PropTypes } from 'react'
import _ from 'lodash'
import ToolBar from './ToolBar'
import icons from './icons.json'
import HeaderPopup from './components/HeaderPopup'

const formatIcons = ['header', 'quote', 'blod', 'italic', 'code', 'link', 'ol', 'ul']

class Tools extends React.Component {
  header = (i) => {
    const levels = ['', '#', '##', '###']
    this.props.format(`${levels[i]} `, '')
  }
  quote = () => {
    this.props.format('> ', '')
  }
  blod = () => {
    this.props.format('**', '**')
  }
  italic = () => {
    this.props.format('*', '*')
  }
  code = () => {
    this.props.format('```\n', '\n```')
  }
  link = () => {
    this.props.format('[', ']()')
  }
  ol = () => {
    this.props.format('1. ', '')
  }
  ul = () => {
    this.props.format('- ', '')
  }
  render() {
    const { styles, scale, setScale } = this.props
    const nextScale = scale === 'full' ? 'normal' : 'full'
    return (
      <div style={styles.tools}>
        {
          _.map(formatIcons, (icon) => {
            let popup
            let onClick
            if (icon === 'header') {
              popup = (props) => <HeaderPopup {...props} styles={styles} onClick={this[icon]} />
            } else {
              onClick = this[icon]
            }
            return (
              <ToolBar
                key={icon}
                styles={styles}
                icon={icons[icon]}
                Popup={popup}
                onClick={onClick}
              />
            )
          })
        }
        <ToolBar
          key={scale}
          styles={styles}
          icon={icons[nextScale]}
          onClick={() => setScale(nextScale)}
        />
      </div>
    )
  }
}

Tools.propTypes = {
  styles: PropTypes.object.isRequired,
  format: PropTypes.func.isRequired,
  scale: PropTypes.oneOf(['normal', 'full']).isRequired,
  setScale: PropTypes.func.isRequired,
}

export default Tools
