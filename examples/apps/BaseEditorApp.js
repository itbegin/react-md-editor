import React, { Component } from 'react'
import MDEditor from '../../src'

class BaseEditorApp extends Component {
  state = {
    mdValue: '',
    mdTab: 'edit',
  }
  onMDValueChange = (mdValue) => this.setState({ mdValue })
  onMDTabChange = (mdTab) => this.setState({ mdTab })
  render() {
    const { mdValue, mdTab } = this.state
    return (
      <div style={{ position: 'relative', margin: 'auto', width: '800px' }}>
        <MDEditor
          value={mdValue}
          tab={mdTab}
          onValueChange={this.onMDValueChange}
          onTabChange={this.onMDTabChange}
          minHeight={200}
        />
      </div>
    )
  }
}

export default BaseEditorApp
