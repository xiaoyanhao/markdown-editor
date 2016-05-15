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
      rawMarkup = marked(rawMarkup, {sanitize: true})
    }
    return {__html: rawMarkup}
  }

  render() {
    return (
      <div id='previewer'>
        <article className='markdown-body' dangerouslySetInnerHTML={this.rawMarkup()}>
        </article>
      </div>
    )
  }
}

export default Previewer