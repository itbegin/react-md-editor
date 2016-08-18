import React from 'react'
import ReactDOM from 'react-dom'
import BaseEditorApp from './apps/BaseEditorApp'
import ImageEditorApp from './apps/ImageEditorApp'

ReactDOM.render(
  <div>
    <BaseEditorApp />
    <div style={{ marginTop: '60px' }} />
    <ImageEditorApp />
  </div>,
  document.getElementById('container')
)
