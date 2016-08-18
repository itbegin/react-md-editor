import React, { Component } from 'react'
import MDEditor from '../../src'

class ImageEditorApp extends Component {
  state = {
    mdValue: '',
    mdTab: 'edit',
  }
  onMDValueChange = (mdValue) => this.setState({ mdValue })
  onMDTabChange = (mdTab) => this.setState({ mdTab })
  imageUpload = (file, addImage) => {
    const filereader = new FileReader()
    filereader.onload = () => {
      addImage(filereader.result)
    }
    filereader.readAsDataURL(file)
  }
  render() {
    const { mdValue, mdTab } = this.state
    return (
      <div style={{ position: 'relative', margin: 'auto', width: '800px' }}>
        <MDEditor
          value={mdValue}
          tab={mdTab}
          onValueChange={this.onMDValueChange}
          onTabChange={this.onMDTabChange}
          imageUpload={this.imageUpload}
        />
      </div>
    )
  }
}

export default ImageEditorApp
