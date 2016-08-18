# react-md-editor

react-md-editor is a markdown editor, based on textarea.

# usage

BaseEditorApp.js

```js
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
        />
      </div>
    )
  }
}

export default BaseEditorApp
```

entry.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
import BaseEditorApp from './apps/BaseEditorApp.jsx'

ReactDOM.render(
  <div>
    <BaseEditorApp />
  </div>,
  document.getElementById('container')
)

```

# Props

1. value: the markdown text user input, which is PropTypes.string.isRequired.

2. tab: the show current show tab, which is PropTypes.oneOf(['edit', 'preview']).isRequired.

3. onValueChange: the func to chnage the value state, which is PropTypes.func.isRequired.

4. onTabChange: the func to chnage the tab state, which is PropTypes.func.isRequired,

5. markFn: the func to convert value (the markdown text) to html, which is PropTypes.func(there is aready a default one),

6. imageUpload: the func to handle upload file,
there two args, one is file (the js File object), other is addImage(url) func, which is PropTypes.func,

7. minHeight: the textarea's minimum height, which is PropTypes.number(present px)

# sample
  git clone repository and change current directory to this project directory.

```
1. npm i
2. npm start
3. http://localhost:9090/examples
```
