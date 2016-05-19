/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _editor = __webpack_require__(1);

	var _editor2 = _interopRequireDefault(_editor);

	var _preview = __webpack_require__(2);

	var _preview2 = _interopRequireDefault(_preview);

	var _toolbar = __webpack_require__(3);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MarkdownEditor = function (_React$Component) {
	  _inherits(MarkdownEditor, _React$Component);

	  function MarkdownEditor(props) {
	    _classCallCheck(this, MarkdownEditor);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MarkdownEditor).call(this, props));

	    _this.state = { input: props.initialInput };
	    _this.handleInputChange = _this.handleInputChange.bind(_this);
	    _this.toggleSlideToolbar = _this.toggleSlideToolbar.bind(_this);
	    _this.toggleSlideEditor = _this.toggleSlideEditor.bind(_this);
	    _this.handleToolbarFunc = _this.handleToolbarFunc.bind(_this);
	    _this.syncScroll = _this.syncScroll.bind(_this);
	    return _this;
	  }

	  _createClass(MarkdownEditor, [{
	    key: 'handleInputChange',
	    value: function handleInputChange(newInput) {
	      this.setState({ input: newInput });
	    }
	  }, {
	    key: 'toggleSlideToolbar',
	    value: function toggleSlideToolbar() {
	      var markdownEditor = this.refs.markdownEditor;
	      markdownEditor.classList.toggle('slide-toolbar');
	    }
	  }, {
	    key: 'toggleSlideEditor',
	    value: function toggleSlideEditor() {
	      var markdownEditor = this.refs.markdownEditor;
	      markdownEditor.classList.toggle('slide-editor');
	    }
	  }, {
	    key: 'handleToolbarFunc',
	    value: function handleToolbarFunc(obj) {
	      this.refs.editor.appendTextAndFocus(obj);
	    }
	  }, {
	    key: 'syncScroll',
	    value: function syncScroll(target) {
	      var tagName = target.tagName;
	      var percentage = target.scrollTop / target.scrollHeight;

	      if (tagName === 'TEXTAREA') {
	        this.refs.preview.scroll(percentage);
	      } else if (tagName === 'ARTICLE') {
	        this.refs.editor.scroll(percentage);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'markdown-editor', ref: 'markdownEditor' },
	        React.createElement(_toolbar2.default, {
	          input: this.state.input,
	          handleToolbarFunc: this.handleToolbarFunc
	        }),
	        React.createElement(
	          'div',
	          { className: 'col-2', ref: '' },
	          React.createElement(_editor2.default, {
	            ref: 'editor',
	            onInputChange: this.handleInputChange,
	            onToggleSlideToolbar: this.toggleSlideToolbar,
	            onToggleSlideEditor: this.toggleSlideEditor,
	            syncScroll: this.syncScroll
	          }),
	          React.createElement(_preview2.default, {
	            ref: 'preview',
	            input: this.state.input,
	            syncScroll: this.syncScroll
	          })
	        )
	      );
	    }
	  }]);

	  return MarkdownEditor;
	}(React.Component);

	MarkdownEditor.propTypes = { initialInput: React.PropTypes.string };
	MarkdownEditor.defaultProps = { initialInput: null };

	ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementsByTagName('body')[0]);

	// window.onerror = function(message, source, lineno, colno, error) {
	//   console.error(message, source, lineno, colno, error)
	// }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Editor = function (_React$Component) {
	  _inherits(Editor, _React$Component);

	  function Editor(props) {
	    _classCallCheck(this, Editor);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Editor).call(this, props));

	    _this.handleInputChange = _this.handleInputChange.bind(_this);
	    _this.toggleSlideToolbar = _this.toggleSlideToolbar.bind(_this);
	    _this.toggleSlideEditor = _this.toggleSlideEditor.bind(_this);
	    _this.syncScrollWithPreview = _this.syncScrollWithPreview.bind(_this);
	    _this.scroll = _this.scroll.bind(_this);
	    return _this;
	  }

	  _createClass(Editor, [{
	    key: 'handleInputChange',
	    value: function handleInputChange(event) {
	      event.target.scrollTop = event.target.scrollHeight;
	      this.props.onInputChange(event.target.value);
	    }
	  }, {
	    key: 'toggleSlideToolbar',
	    value: function toggleSlideToolbar(event) {
	      event.currentTarget.classList.toggle('slide-toolbar');
	      this.props.onToggleSlideToolbar();
	    }
	  }, {
	    key: 'toggleSlideEditor',
	    value: function toggleSlideEditor(event) {
	      event.currentTarget.classList.toggle('slide-editor');
	      this.props.onToggleSlideEditor();
	    }
	  }, {
	    key: 'appendTextAndFocus',
	    value: function appendTextAndFocus(obj) {
	      var input = this.refs.textarea;
	      var length = input.value.length;
	      var pos = input.selectionStart;

	      if (pos != input.selectionEnd) {
	        pos = length;
	      }

	      input.value = input.value.substring(0, pos) + obj.text + input.value.substring(pos);
	      pos += obj.text.length + obj.selection;

	      input.setSelectionRange(pos, pos);
	      input.focus();
	    }
	  }, {
	    key: 'syncScrollWithPreview',
	    value: function syncScrollWithPreview(event) {
	      this.props.syncScroll(event.currentTarget);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      this.refs.textarea.addEventListener('mouseenter', function (event) {
	        event.currentTarget.addEventListener('scroll', that.syncScrollWithPreview);
	      });

	      this.refs.textarea.addEventListener('mouseleave', function (event) {
	        event.currentTarget.removeEventListener('scroll', that.syncScrollWithPreview);
	      });
	    }
	  }, {
	    key: 'scroll',
	    value: function scroll(percentage) {
	      this.refs.textarea.scrollTop = this.refs.textarea.scrollHeight * percentage;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'editor' },
	        React.createElement(
	          'svg',
	          { onClick: this.toggleSlideToolbar },
	          React.createElement('path', { d: 'M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z' })
	        ),
	        React.createElement(
	          'svg',
	          { onClick: this.toggleSlideEditor },
	          React.createElement('path', { d: 'M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z' })
	        ),
	        React.createElement('textarea', {
	          autoFocus: true,
	          ref: 'textarea',
	          className: 'markdown-body',
	          onKeyUp: this.handleInputChange
	        })
	      );
	    }
	  }]);

	  return Editor;
	}(React.Component);

	exports.default = Editor;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	marked.setOptions({
	  highlight: function highlight(code, lang) {
	    return hljs.highlight(lang, code).value;
	  }
	});

	var Preview = function (_React$Component) {
	  _inherits(Preview, _React$Component);

	  function Preview(props) {
	    _classCallCheck(this, Preview);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Preview).call(this, props));

	    _this.scroll = _this.scroll.bind(_this);
	    _this.syncScrollWithEditor = _this.syncScrollWithEditor.bind(_this);
	    return _this;
	  }

	  _createClass(Preview, [{
	    key: 'rawMarkup',
	    value: function rawMarkup() {
	      var rawMarkup = this.props.input;
	      if (rawMarkup) {
	        rawMarkup = marked(rawMarkup, { sanitize: true });
	      }
	      return { __html: rawMarkup };
	    }
	  }, {
	    key: 'syncScrollWithEditor',
	    value: function syncScrollWithEditor(event) {
	      this.props.syncScroll(event.currentTarget);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      this.refs.article.addEventListener('mouseenter', function (event) {
	        event.currentTarget.addEventListener('scroll', that.syncScrollWithEditor);
	      });

	      this.refs.article.addEventListener('mouseleave', function (event) {
	        event.currentTarget.removeEventListener('scroll', that.syncScrollWithEditor);
	      });
	    }
	  }, {
	    key: 'scroll',
	    value: function scroll(percentage) {
	      this.refs.article.scrollTop = this.refs.article.scrollHeight * percentage;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'preview' },
	        React.createElement('article', {
	          ref: 'article',
	          className: 'markdown-body',
	          dangerouslySetInnerHTML: this.rawMarkup()
	        })
	      );
	    }
	  }]);

	  return Preview;
	}(React.Component);

	exports.default = Preview;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _funcMap = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Toolbar = function (_React$Component) {
	  _inherits(Toolbar, _React$Component);

	  function Toolbar(props) {
	    _classCallCheck(this, Toolbar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toolbar).call(this, props));

	    _this.handleToolbarFunc = _this.handleToolbarFunc.bind(_this);
	    return _this;
	  }

	  _createClass(Toolbar, [{
	    key: 'handleToolbarFunc',
	    value: function handleToolbarFunc(event) {
	      event.stopPropagation();
	      var target = event.target;

	      if (target === event.currentTarget) {
	        return false;
	      }

	      while (target.tagName !== 'BUTTON') {
	        target = target.parentNode;
	      }

	      var func = target.id.split('-')[1];

	      if (_funcMap.funcMap[func]) {
	        this.props.handleToolbarFunc(_funcMap.funcMap[func]);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'toolbar', onClick: this.handleToolbarFunc },
	        React.createElement(
	          'div',
	          { className: 'btn-group' },
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Header 1', className: 'btn', id: 'toolbar-h1' },
	            React.createElement(
	              'strong',
	              null,
	              'h1'
	            )
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Header 2', className: 'btn', id: 'toolbar-h2' },
	            React.createElement(
	              'strong',
	              null,
	              'h2'
	            )
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Header 3', className: 'btn', id: 'toolbar-h3' },
	            React.createElement(
	              'strong',
	              null,
	              'h3'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'btn-group' },
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Link', className: 'btn', id: 'toolbar-link' },
	            React.createElement(
	              'svg',
	              null,
	              React.createElement('path', { d: 'M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z' })
	            )
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Image', className: 'btn', id: 'toolbar-image' },
	            React.createElement(
	              'svg',
	              null,
	              React.createElement('path', { d: 'M6 5h2v2H6V5z m6-0.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v11l3-5 2 4 2-2 3 3V5z' })
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'btn-group' },
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Bold', className: 'btn', id: 'toolbar-bold' },
	            React.createElement(
	              'strong',
	              null,
	              'B'
	            )
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Italic', className: 'btn', id: 'toolbar-italic' },
	            React.createElement(
	              'i',
	              null,
	              'i'
	            )
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Code', className: 'btn', id: 'toolbar-code' },
	            React.createElement(
	              'svg',
	              null,
	              React.createElement('path', { d: 'M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z' })
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'btn-group' },
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Unordered List', className: 'btn', id: 'toolbar-ul' },
	            React.createElement(
	              'svg',
	              null,
	              React.createElement('path', { d: 'M2 13c0 0.59 0 1-0.59 1H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h0.81c0.59 0 0.59 0.41 0.59 1z m2.59-9h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1zM1.41 7H0.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h0.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1z m0-5H0.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h0.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1z m10 5H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1z m0 5H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1z' })
	            )
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Ordered List', className: 'btn', id: 'toolbar-ol' },
	            React.createElement(
	              'svg',
	              null,
	              React.createElement('path', { d: 'M12 13c0 0.59 0 1-0.59 1H4.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h6.81c0.59 0 0.59 0.41 0.59 1zM4.59 4h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1z m6.81 3H4.59c-0.59 0-0.59 0.41-0.59 1s0 1 0.59 1h6.81c0.59 0 0.59-0.41 0.59-1s0-1-0.59-1zM2 1H1.28C0.98 1.19 0.7 1.25 0.25 1.34v0.66h0.75v2.14H0.16v0.86h2.84v-0.86h-1V1z m0.25 8.13c-0.17 0-0.45 0.03-0.66 0.06 0.53-0.56 1.14-1.25 1.14-1.89-0.02-0.78-0.56-1.3-1.36-1.3-0.59 0-0.97 0.2-1.38 0.64l0.58 0.58c0.19-0.19 0.38-0.38 0.64-0.38 0.28 0 0.48 0.16 0.48 0.52 0 0.53-0.77 1.2-1.7 2.06v0.58h3l-0.09-0.88h-0.66z m-0.08 3.78v-0.03c0.44-0.19 0.64-0.47 0.64-0.86 0-0.7-0.56-1.11-1.44-1.11-0.48 0-0.89 0.19-1.28 0.52l0.55 0.64c0.25-0.2 0.44-0.31 0.69-0.31 0.27 0 0.42 0.13 0.42 0.36 0 0.27-0.2 0.44-0.86 0.44v0.75c0.83 0 0.98 0.17 0.98 0.47 0 0.25-0.23 0.38-0.58 0.38-0.28 0-0.56-0.14-0.81-0.38L0 14.44c0.3 0.36 0.77 0.56 1.41 0.56 0.83 0 1.53-0.41 1.53-1.16 0-0.5-0.31-0.81-0.77-0.94z' })
	            )
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Table', className: 'btn', id: 'toolbar-table' },
	            React.createElement(
	              'svg',
	              null,
	              React.createElement('path', { 'class': 'path1', d: 'M0 1v14h16v-14h-16zM6 10v-3h4v3h-4zM10 11v3h-4v-3h4zM10 3v3h-4v-3h4zM5 3v3h-4v-3h4zM1 7h4v3h-4v-3zM11 7h4v3h-4v-3zM11 6v-3h4v3h-4zM1 11h4v3h-4v-3zM11 14v-3h4v3h-4z' })
	            )
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Blockquote', className: 'btn', id: 'toolbar-blockquote' },
	            React.createElement(
	              'svg',
	              null,
	              React.createElement('path', { d: 'M6.16 3.17C3.73 4.73 2.55 6.34 2.55 9.03c0.16-0.05 0.3-0.05 0.44-0.05 1.27 0 2.5 0.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61C1.09 14 0 12.48 0 9.75 0 5.95 1.75 3.22 5.02 1.33l1.14 1.84z m7 0C10.73 4.73 9.55 6.34 9.55 9.03c0.16-0.05 0.3-0.05 0.44-0.05 1.27 0 2.5 0.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84z' })
	            )
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Horizontal Rule', className: 'btn', id: 'toolbar-hr' },
	            React.createElement(
	              'svg',
	              null,
	              React.createElement('path', { d: 'M1 7h2v2h1V3h-1v3H1V3H0v6h1V7z m9 2V7h-1v2h1z m0-3V4h-1v2h1z m-3 0V4h2v-1H6v6h1V7h2v-1H7zM0 13h10V11H0v2z' })
	            )
	          )
	        ),
	        React.createElement(
	          'a',
	          { href: 'https://help.github.com/categories/writing-on-github/', target: '_blank' },
	          React.createElement(
	            'button',
	            { type: 'button', title: 'Help', className: 'btn', id: 'toolbar-help' },
	            React.createElement(
	              'svg',
	              null,
	              React.createElement('path', { d: 'M6 10h2v2H6V10z m4-3.5c0 2.14-2 2.5-2 2.5H6c0-0.55 0.45-1 1-1h0.5c0.28 0 0.5-0.22 0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28 0-0.5 0.22-0.5 0.5v0.5H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z' })
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'print-hint' },
	          React.createElement(
	            'i',
	            null,
	            React.createElement(
	              'kbd',
	              null,
	              '⌘p'
	            ),
	            ' or ',
	            React.createElement(
	              'kbd',
	              null,
	              '⌃p'
	            ),
	            ' to print the preview only'
	          )
	        )
	      );
	    }
	  }]);

	  return Toolbar;
	}(React.Component);

	exports.default = Toolbar;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var funcMap = exports.funcMap = {
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
	};

/***/ }
/******/ ]);