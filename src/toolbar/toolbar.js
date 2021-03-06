import {funcMap} from './funcMap'

class Toolbar extends React.Component {
  constructor(props) {
    super(props)
    this.handleToolbarFunc = this.handleToolbarFunc.bind(this)
    this.handleImages = this.handleImages.bind(this)
  }

  handleToolbarFunc(event) {
    event.stopPropagation()
    let target = event.target

    if (target === event.currentTarget) {
      return false
    }

    while (target.tagName !== 'BUTTON') {
      target = target.parentNode
      if (!target) {
        return false
      }
    }

    let func = target.id.split('-')[1]

    if (funcMap[func]) {
      this.props.handleToolbarFunc(funcMap[func])
    } else if (func == 'upload') {
      target.firstChild.click()
    } else if (func == 'pdf') {
      window.print()
    } else if (func == 'markdown') {
      let blob = new Blob([this.props.input], {type: 'text/plain'})
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'untitled.md'
      link.click()
    }
  }

  handleImages(event) {
    let files = event.currentTarget.files
    for (let i = 0; i < files.length; i++) {
      let url = window.URL.createObjectURL(files[i])
      let func = {
        text: '![](' + url + ')',
        selection: 0
      }
      this.props.handleToolbarFunc(func)
    }
  }

  render() {
    return (
      <div id='toolbar' onClick={this.handleToolbarFunc}>
        <div className='btn-group'>
          <button type='button' title='Header 1' className='btn' id='toolbar-h1'><strong>h1</strong></button>
          <button type='button' title='Header 2' className='btn' id='toolbar-h2'><strong>h2</strong></button>
          <button type='button' title='Header 3' className='btn' id='toolbar-h3'><strong>h3</strong></button>
        </div>

        <div className='btn-group'>
          <button type='button' title='Link' className='btn' id='toolbar-link'>
            <svg>
              <path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path>
            </svg>
          </button>
          <button type='button' title='Image' className='btn' id='toolbar-image'>
            <svg>
              <path d="M6 5h2v2H6V5z m6-0.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v11l3-5 2 4 2-2 3 3V5z"></path>
            </svg>
          </button>
          <button type='button' title='Upload Image' className='btn' id='toolbar-upload'>
            <input type='file' name='image' accept='image/*' onChange={this.handleImages} multiple hidden />
            <svg>
              <path d="M8 11h4c1.381 0 2.5-1.122 2.5-2.5 0-1.048-0.643-1.946-1.559-2.317v0c-0.261-1.247-1.367-2.183-2.691-2.183-0.431 0-0.84 0.099-1.203 0.276-0.601-1.061-1.741-1.776-3.047-1.776-1.933 0-3.5 1.567-3.5 3.5 0 0.069 0.002 0.138 0.006 0.206v0c-0.886 0.385-1.506 1.269-1.506 2.294 0 1.381 1.116 2.5 2.5 2.5h4v-3l-1.625 1.625-0.375-0.375 2.25-2.25 2.25 2.25-0.375 0.375-1.625-1.625v3zM7.5 11v2.5h0.5v-2.5h-0.5z"></path>
            </svg>
          </button>
        </div>

        <div className='btn-group'>
          <button type='button' title='Bold' className='btn' id='toolbar-bold'><strong>B</strong></button>
          <button type='button' title='Italic' className='btn' id='toolbar-italic'><i>i</i></button>
          <button type='button' title='Code' className='btn' id='toolbar-code'>
            <svg>
              <path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path>
            </svg>
          </button>
        </div>

        <div className='btn-group'>
          <button type='button' title='Unordered List' className='btn' id='toolbar-ul'>
            <svg>
              <path d="M2 13c0 0.59 0 1-0.59 1H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h0.81c0.59 0 0.59 0.41 0.59 1z m2.59-9h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1zM1.41 7H0.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h0.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1z m0-5H0.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h0.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1z m10 5H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1z m0 5H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1z"></path>
            </svg>
          </button>
          <button type='button' title='Ordered List' className='btn' id='toolbar-ol'>
            <svg>
              <path d="M12 13c0 0.59 0 1-0.59 1H4.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h6.81c0.59 0 0.59 0.41 0.59 1zM4.59 4h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1z m6.81 3H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1zM2 1H1.28C0.98 1.19 0.7 1.25 0.25 1.34v0.66h0.75v2.14H0.16v0.86h2.84v-0.86h-1V1z m0.25 8.13c-0.17 0-0.45 0.03-0.66 0.06 0.53-0.56 1.14-1.25 1.14-1.89-0.02-0.78-0.56-1.3-1.36-1.3-0.59 0-0.97 0.2-1.38 0.64l0.58 0.58c0.19-0.19 0.38-0.38 0.64-0.38 0.28 0 0.48 0.16 0.48 0.52 0 0.53-0.77 1.2-1.7 2.06v0.58h3l-0.09-0.88h-0.66z m-0.08 3.78v-0.03c0.44-0.19 0.64-0.47 0.64-0.86 0-0.7-0.56-1.11-1.44-1.11-0.48 0-0.89 0.19-1.28 0.52l0.55 0.64c0.25-0.2 0.44-0.31 0.69-0.31 0.27 0 0.42 0.13 0.42 0.36 0 0.27-0.2 0.44-0.86 0.44v0.75c0.83 0 0.98 0.17 0.98 0.47 0 0.25-0.23 0.38-0.58 0.38-0.28 0-0.56-0.14-0.81-0.38L0 14.44c0.3 0.36 0.77 0.56 1.41 0.56 0.83 0 1.53-0.41 1.53-1.16 0-0.5-0.31-0.81-0.77-0.94z"></path>
            </svg>
          </button>
          <button type='button' title='Table' className='btn' id='toolbar-table'>
            <svg>
              <path class="path1" d="M0 1v14h16v-14h-16zM6 10v-3h4v3h-4zM10 11v3h-4v-3h4zM10 3v3h-4v-3h4zM5 3v3h-4v-3h4zM1 7h4v3h-4v-3zM11 7h4v3h-4v-3zM11 6v-3h4v3h-4zM1 11h4v3h-4v-3zM11 14v-3h4v3h-4z"></path>
            </svg>
          </button>
          <button type='button' title='Blockquote' className='btn' id='toolbar-blockquote'>
            <svg>
              <path d="M6.16 3.17C3.73 4.73 2.55 6.34 2.55 9.03c0.16-0.05 0.3-0.05 0.44-0.05 1.27 0 2.5 0.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61C1.09 14 0 12.48 0 9.75 0 5.95 1.75 3.22 5.02 1.33l1.14 1.84z m7 0C10.73 4.73 9.55 6.34 9.55 9.03c0.16-0.05 0.3-0.05 0.44-0.05 1.27 0 2.5 0.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84z"></path>
            </svg>
          </button>
          <button type='button' title='Horizontal Rule' className='btn' id='toolbar-hr'>
            <svg>
              <path d="M1 7h2v2h1V3h-1v3H1V3H0v6h1V7z m9 2V7h-1v2h1z m0-3V4h-1v2h1z m-3 0V4h2v-1H6v6h1V7h2v-1H7zM0 13h10V11H0v2z"></path>
            </svg>
          </button>
        </div>

        <div className='btn-group'>
          <button type='button' title='Download Markdown' className='btn' id='toolbar-markdown'>
            <svg>
              <path d="M14.846 3h-13.692c-0.636 0-1.154 0.518-1.154 1.154v7.692c0 0.636 0.518 1.154 1.154 1.154h13.692c0.636 0 1.154-0.518 1.154-1.154v-7.692c0-0.636-0.518-1.154-1.154-1.154zM9 10.998l-2 0.002v-3l-1.5 1.923-1.5-1.923v3h-2v-6h2l1.5 2 1.5-2 2-0.002v6zM11.986 11.498l-2.486-3.498h1.5v-3h2v3h1.5l-2.514 3.498z"></path>
            </svg>
          </button>
          <button type='button' title='Download PDF(⌘p or ⌃p)' className='btn' id='toolbar-pdf'>
            <svg>
              <path d="M13.156 9.211c-0.213-0.21-0.686-0.321-1.406-0.331-0.487-0.005-1.073 0.038-1.69 0.124-0.276-0.159-0.561-0.333-0.784-0.542-0.601-0.561-1.103-1.34-1.415-2.197 0.020-0.080 0.038-0.15 0.054-0.222 0 0 0.339-1.923 0.249-2.573-0.012-0.089-0.020-0.115-0.044-0.184l-0.029-0.076c-0.092-0.212-0.273-0.437-0.556-0.425l-0.171-0.005c-0.316 0-0.573 0.161-0.64 0.403-0.205 0.757 0.007 1.889 0.39 3.355l-0.098 0.239c-0.275 0.67-0.619 1.345-0.923 1.94l-0.040 0.077c-0.32 0.626-0.61 1.157-0.873 1.607l-0.271 0.144c-0.020 0.010-0.485 0.257-0.594 0.323-0.926 0.553-1.539 1.18-1.641 1.678-0.032 0.159-0.008 0.362 0.156 0.456l0.263 0.132c0.114 0.057 0.234 0.086 0.357 0.086 0.659 0 1.425-0.821 2.48-2.662 1.218-0.396 2.604-0.726 3.819-0.908 0.926 0.521 2.065 0.883 2.783 0.883 0.128 0 0.238-0.012 0.327-0.036 0.138-0.037 0.254-0.115 0.325-0.222 0.139-0.21 0.168-0.499 0.13-0.795-0.011-0.088-0.081-0.196-0.157-0.271zM3.307 12.72c0.12-0.329 0.596-0.979 1.3-1.556 0.044-0.036 0.153-0.138 0.253-0.233-0.736 1.174-1.229 1.642-1.553 1.788zM7.476 3.12c0.212 0 0.333 0.534 0.343 1.035s-0.107 0.853-0.252 1.113c-0.12-0.385-0.179-0.992-0.179-1.389 0 0-0.009-0.759 0.088-0.759v0zM6.232 9.961c0.148-0.264 0.301-0.543 0.458-0.839 0.383-0.724 0.624-1.29 0.804-1.755 0.358 0.651 0.804 1.205 1.328 1.649 0.065 0.055 0.135 0.111 0.207 0.166-1.066 0.211-1.987 0.467-2.798 0.779v0zM12.952 9.901c-0.065 0.041-0.251 0.064-0.37 0.064-0.386 0-0.864-0.176-1.533-0.464 0.257-0.019 0.493-0.029 0.705-0.029 0.387 0 0.502-0.002 0.88 0.095s0.383 0.293 0.318 0.333v0z"></path>
              <path d="M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"></path>
            </svg>
          </button>
        </div>

        <a href='https://help.github.com/categories/writing-on-github/' target='_blank'>
          <button type='button' title='Help' className='btn' id='toolbar-help'>
            <svg>
              <path d="M6 10h2v2H6V10z m4-3.5c0 2.14-2 2.5-2 2.5H6c0-0.55 0.45-1 1-1h0.5c0.28 0 0.5-0.22 0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28 0-0.5 0.22-0.5 0.5v0.5H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z"></path>
            </svg>
          </button>
        </a>
      </div>
    )
  }
}

export default Toolbar