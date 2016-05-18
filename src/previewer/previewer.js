marked.setOptions({
  highlight: (code, lang) => {
    return hljs.highlight(lang, code).value
  }
})


class Previewer extends React.Component {
  constructor(props) {
    super(props)
    this.scroll = this.scroll.bind(this)
  }

  rawMarkup() {
    let rawMarkup = this.props.input
    if (rawMarkup) {
      rawMarkup = marked(rawMarkup, {sanitize: true})
    }
    return {__html: rawMarkup}
  }

  scroll(percentage) {
    let previewer = this.refs.article
    console.log(percentage * previewer.scrollHeight, previewer.scrollHeight)
    previewer.scrollTop = percentage * previewer.scrollHeight
  }

  render() {
    return (
      <div id='previewer'>
        <article
          ref='article'
          className='markdown-body'
          dangerouslySetInnerHTML={this.rawMarkup()}
        >
        </article>
      </div>
    )
  }
}

export default Previewer