import {funcMap} from './funcMap'

class Toolbar extends React.Component {
  constructor(props) {
    super(props)
    this.handleToolbarFunc = this.handleToolbarFunc.bind(this)
  }

  handleToolbarFunc(event) {
    event.stopPropagation()
    let target = event.target

    if (target === event.currentTarget) {
      return false
    }

    while (target.tagName !== 'BUTTON') {
      target = target.parentNode
    }

    let func = target.id.split('-')[1]

    if (funcMap[func]) {
      this.props.handleToolbarFunc(funcMap[func])
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

        <a href='https://help.github.com/categories/writing-on-github/' target='_blank'>
          <button type='button' title='Help' className='btn' id='toolbar-help'>
            <svg>
              <path d="M6 10h2v2H6V10z m4-3.5c0 2.14-2 2.5-2 2.5H6c0-0.55 0.45-1 1-1h0.5c0.28 0 0.5-0.22 0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28 0-0.5 0.22-0.5 0.5v0.5H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z"></path>
            </svg>
          </button>
        </a>

        <div className='print-hint'>
          <i>
            <kbd>⌘p</kbd> or <kbd>⌃p</kbd> to print the preview only
          </i>
        </div>
      </div>
    )
  }
}

export default Toolbar