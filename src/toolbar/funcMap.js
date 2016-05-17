export const funcMap = {
  h1: {
    text: '# ',
    selection: 0
  },
  h2: {
    text: '## ',
    selection: 0
  },
  h3: {
    text: '### ',
    selection: 0
  },
  link: {
    text: '[]()',
    selection: -3
  },
  image: {
    text: '![]()',
    selection: -3
  },
  bold: {
    text: '****',
    selection: -2
  },
  italic: {
    text: '__',
    selection: -1 
  },
  code: {
    text: '``',
    selection: -1 
  },
  ul: {
    text: '* ',
    selection: 0
  },
  ol: {
    text: '1. ',
    selection: 0
  },
  table: {
    text: '\n| | |\n|-|-|\n| | |',
    selection: -16
  },
  blockquote: {
    text: '> ',
    selection: 0
  },
  hr: {
    text: '\n***\n',
    selection: 0
  }
}