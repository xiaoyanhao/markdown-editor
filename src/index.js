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
  }

  handleInputChange(newInput) {
    this.setState({input: newInput})
  }

  toggleSlideToolbar() {
    let markdownEditor = this.refs.markdownEditor
    console.log(markdownEditor)
    markdownEditor.classList.toggle('slide-down')
    markdownEditor.classList.toggle('slide-up')
  }

  toggleSlideEditor() {
    let editor = this.refs.editor
    console.log(editor)
    editor.classList.toggle('slide-left')
    editor.classList.toggle('slide-right')
  }

  render() {
    return (
      <div id='markdown-editor' className='slide-down' ref='markdownEditor'>
        <Toolbar input={this.state.input} />
        <div className='col-2 slide-left' ref='editor'>
          <Editor
            {...this.props}
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