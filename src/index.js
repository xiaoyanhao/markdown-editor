import Editor from './editor/editor'
import Previewer from './previewer/previewer'
import Toolbar from './toolbar/toolbar'


class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {input: props.initialInput}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.toggleSlideToolbar = this.toggleSlideToolbar.bind(this)
    this.toggleSlideEditor = this.toggleSlideEditor.bind(this)
    this.handleToolbarFunc = this.handleToolbarFunc.bind(this)
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

  render() {
    return (
      <div id='markdown-editor' ref='markdownEditor'>
        <Toolbar
          input={this.state.input}
          handleToolbarFunc={this.handleToolbarFunc}
        />
        <div className='col-2'>
          <Editor
            ref='editor'
            onInputChange={this.handleInputChange}
            onToggleSlideToolbar={this.toggleSlideToolbar}
            onToggleSlideEditor={this.toggleSlideEditor}
          />
          <Previewer input={this.state.input} />
        </div>
      </div>
    )
  }
}


MarkdownEditor.propTypes = {initialInput: React.PropTypes.string}
MarkdownEditor.defaultProps = {initialInput: null}


ReactDOM.render(
  <MarkdownEditor />,
  document.getElementsByTagName('body')[0]
)

// window.onerror = function(message, source, lineno, colno, error) {
//   console.error(message, source, lineno, colno, error)
// }