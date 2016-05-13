class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    console.log(event.target.value)
    this.props.onInputChange(event.target.value)
  }

  render() {
    return (
      <textarea className='editor' onKeyUp={this.handleInputChange}>
      </textarea>
    )
  }
}

export default Editor