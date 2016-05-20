import Editor from './editor/editor'
import Preview from './preview/preview'
import Toolbar from './toolbar/toolbar'
import {readme} from './data/readme'


class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {input: props.initialInput}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.toggleSlideToolbar = this.toggleSlideToolbar.bind(this)
    this.toggleSlideEditor = this.toggleSlideEditor.bind(this)
    this.handleToolbarFunc = this.handleToolbarFunc.bind(this)
    this.syncScroll = this.syncScroll.bind(this)
  }

  handleInputChange(newInput) {
    this.setState({input: newInput})
  }

  toggleSlideToolbar() {
    let markdownEditor = this.refs.markdownEditor
    markdownEditor.classList.toggle('slide-toolbar')
  }

  toggleSlideEditor() {
    let markdownEditor = this.refs.markdownEditor
    markdownEditor.classList.toggle('slide-editor')
  }

  handleToolbarFunc(obj) {
    this.refs.editor.appendTextAndFocus(obj)
  }

  syncScroll(target) {
    let tagName = target.tagName
    let percentage = target.scrollTop / target.scrollHeight

    if (tagName === 'TEXTAREA') {
      this.refs.preview.scroll(percentage)
    } else if (tagName === 'ARTICLE') {
      this.refs.editor.scroll(percentage)
    }
  }

  render() {
    return (
      <div id='markdown-editor' ref='markdownEditor'>
        <Toolbar
          input={this.state.input}
          handleToolbarFunc={this.handleToolbarFunc}
        />
        <div className='col-2' ref=''>
          <Editor
            ref='editor'
            cachedInput={this.props.initialInput}
            onInputChange={this.handleInputChange}
            onToggleSlideToolbar={this.toggleSlideToolbar}
            onToggleSlideEditor={this.toggleSlideEditor}
            syncScroll={this.syncScroll}
          />
          <Preview
            ref='preview'
            input={this.state.input}
            syncScroll={this.syncScroll}
          />
        </div>
      </div>
    )
  }
}


MarkdownEditor.propTypes = {
  initialInput: React.PropTypes.string
}

let initialInput = localStorage.getItem('cachedInput')
if (!initialInput) {
  MarkdownEditor.defaultProps = {
    initialInput: readme
  }
} else {
  MarkdownEditor.defaultProps = {
    initialInput: initialInput
  }
}


ReactDOM.render(
  <MarkdownEditor />,
  document.getElementsByTagName('body')[0]
)


window.onunload = () => {
  localStorage.setItem(
    'cachedInput',
    document.getElementsByTagName('textarea')[0].value
  )
}