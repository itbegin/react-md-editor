const backgroundColor = '#fff'
const borderColor = '#ddd'

module.exports = {
  stage: {
    position: 'relative',
    backgroundColor,
    border: `1px solid ${borderColor}`,
    display: 'flex',
    flexDirection: 'column',
  },
  full: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: 'auto',
    zIndex: 300,
  },
  controlPanel: {
    width: '100%',
    borderBottom: `1px solid ${borderColor}`,
  },
  togglePanel: {
    display: 'flex',
    alignItems: 'center',
  },
  toggleTab: {
    cursor: 'pointer',
    display: 'inline-block',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#666',
    textDecoration: 'none',
    marginLeft: '-1px',
    borderLeft: `solid 1px ${borderColor}`,
    borderRight: `solid 1px ${borderColor}`,
  },
  selectedTab: {
    borderLeft: `solid 1px ${borderColor}`,
    borderRight: `solid 1px ${borderColor}`,
    backgroundColor: '#f6f6f6',
  },
  tools: {
    marginRight: '5px',
  },
  headerPopup: {
    display: 'none',
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#767676',
    width: '100px',
    WebkitTransform: 'translateX(-40%)',
    transform: 'translateX(-40%)',
    marginTop: '4px',
    padding: '5px 0 5px',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,0.15)',
    borderRadius: '4px',
    boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
    zIndex: 1,
  },
  headerPopupHover: {
    display: 'block',
  },
  iconWrap: {
    padding: '4px 5px',
    color: '#767676',
    cursor: 'pointer',
    display: 'inline-block',
  },
  icon: {
    fill: 'currentColor',
    verticalAlign: 'text-top',
  },
  iconHover: {
    fill: '#00bb19',
  },
  contentBox: {
    display: 'inline-block',
    flex: 1,
    position: 'relative',
  },
  editBox: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  editarea: {
    display: 'block',
    minHeight: '100%',
    width: '100%',
    margin: '0 auto',
    padding: '8px',
    resize: 'vertical',
    backgroundColor: '#fafafa',
    border: 0,
    borderColor: '#ccc',
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
    fontSize: '14px',
    lineHeight: '24px',
  },
  editareaFocus: {
    backgroundColor: '#ffffff',
    borderColor: '#51a7e8',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(81, 167, 232, 0.5)',
  },
  editFooter: {
    padding: '7px 10px',
    color: '#767676',
    backgroundColor: '#fafafa',
    borderTop: '1px dashed',
    borderColor: '#ccc',
  },
  editFooterFocus: {
    borderColor: '#51a7e8',
    boxShadow: 'rgba(81, 167, 232, 0.5) 0 0 3px',
  },
  previewBox: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
    overflow: 'auto',
  },
  preview: {
    padding: '8px',
    minHeight: '150px',
  },
  hide: {
    display: 'none',
  }
}
