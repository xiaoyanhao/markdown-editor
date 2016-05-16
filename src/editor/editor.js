class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.toggleSlideToolbar = this.toggleSlideToolbar.bind(this)
    this.toggleSlideEditor = this.toggleSlideEditor.bind(this)
  }

  handleInputChange(event) {
    this.props.onInputChange(event.target.value)
  }

  toggleSlideToolbar(event) {
    event.currentTarget.classList.toggle('slide-toolbar')
    this.props.onToggleSlideToolbar()
  }

  toggleSlideEditor(event) {
    event.currentTarget.classList.toggle('slide-editor')
    this.props.onToggleSlideEditor()
  }

  render() {
    return (
      <div id='editor'>
        <svg onClick={this.toggleSlideToolbar}>
          <path d="M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z"></path>
        </svg>
        <svg onClick={this.toggleSlideEditor}>
          <path d='M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z'></path>
        </svg>
        <textarea className='markdown-body' onKeyUp={this.handleInputChange}></textarea>
      </div>
    )
  }
}

export default Editor
