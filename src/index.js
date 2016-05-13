import Editor from './editor/editor'
import Previewer from './previewer/previewer'


class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {input: props.initialInput}
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(newInput) {
    this.setState({input: newInput})
  }

  render() {
    return (
      <div className='markdownEditor'>
        <Editor onInputChange={this.handleInputChange} />
        <Previewer input={this.state.input} />
      </div>
    )
  }
}

MarkdownEditor.propTypes = {initialInput: React.PropTypes.string}
MarkdownEditor.defaultProps = {initialInput: null}


ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('main')
)