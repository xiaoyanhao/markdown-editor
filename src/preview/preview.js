marked.setOptions({
  highlight: (code, lang) => {
    return hljs.highlight(lang, code).value
  }
})


class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.scroll = this.scroll.bind(this)
    this.syncScrollWithEditor = this.syncScrollWithEditor.bind(this)
  }

  rawMarkup() {
    let rawMarkup = this.props.input
    if (rawMarkup) {
      rawMarkup = marked(rawMarkup, {sanitize: true})
    }
    return {__html: rawMarkup}
  }

  syncScrollWithEditor(event) {
    this.props.syncScroll(event.currentTarget)
  }

  componentDidMount() {
    let that = this
    this.refs.article.addEventListener('mouseenter', (event) => {
      event.currentTarget.addEventListener('scroll', that.syncScrollWithEditor)
    })

    this.refs.article.addEventListener('mouseleave', (event) => {
      event.currentTarget.removeEventListener('scroll', that.syncScrollWithEditor)
    })
  }

  scroll(percentage) {
    this.refs.article.scrollTop =
    (this.refs.article.scrollHeight - this.refs.article.offsetHeight) * percentage
  }

  render() {
    return (
      <div id='preview'>
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

export default Preview