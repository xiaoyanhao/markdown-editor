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
    let svg = event.currentTarget
    svg.classList.toggle('slide-down')
    svg.classList.toggle('slide-up')
    this.props.onToggleSlideToolbar()
  }

  toggleSlideEditor(event) {
    let svg = event.currentTarget
    svg.classList.toggle('slide-left')
    svg.classList.toggle('slide-right')
    this.props.onToggleSlideEditor()
  }

  render() {
    return (
      <div id='editor' className='slide-left'>
        <svg className='slide-toolbar slide-down' onClick={this.toggleSlideToolbar}>
          <path d="M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z"></path>
        </svg>
        <svg className='slide-editor slide-left' onClick={this.toggleSlideEditor}>
          <path d='M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z'></path>
        </svg>
        <textarea onKeyUp={this.handleInputChange}></textarea>
      </div>
    )
  }
}

export default Editor
