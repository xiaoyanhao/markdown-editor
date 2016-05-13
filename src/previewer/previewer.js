marked.setOptions({
  highlight: (code, lang) => {
    return hljs.highlight(lang, code).value
  }
})


class Previewer extends React.Component {
  constructor(props) {
    super(props)
  }

  rawMarkup() {
    let rawMarkup = this.props.input
    if (rawMarkup) {
      rawMarkup = marked(rawMarkup)
      // rawMarkup = marked(rawMarkup, {sanitize: true})
    }
    return {__html: rawMarkup}
  }

  render() {
    return (
      <article className='previewer markdown-body' dangerouslySetInnerHTML={this.rawMarkup()}>
      </article>
    )
  }
}

export default Previewer