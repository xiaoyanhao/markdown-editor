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

	var _previewer = __webpack_require__(2);

	var _previewer2 = _interopRequireDefault(_previewer);

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
	    return _this;
	  }

	  _createClass(MarkdownEditor, [{
	    key: 'handleInputChange',
	    value: function handleInputChange(newInput) {
	      this.setState({ input: newInput });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'markdownEditor' },
	        React.createElement(_editor2.default, { onInputChange: this.handleInputChange }),
	        React.createElement(_previewer2.default, { input: this.state.input })
	      );
	    }
	  }]);

	  return MarkdownEditor;
	}(React.Component);

	MarkdownEditor.propTypes = { initialInput: React.PropTypes.string };
	MarkdownEditor.defaultProps = { initialInput: null };

	ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById('main'));

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
	    return _this;
	  }

	  _createClass(Editor, [{
	    key: 'handleInputChange',
	    value: function handleInputChange(event) {
	      console.log(event.target.value);
	      this.props.onInputChange(event.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('textarea', { className: 'editor', onKeyUp: this.handleInputChange });
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

	var Previewer = function (_React$Component) {
	  _inherits(Previewer, _React$Component);

	  function Previewer(props) {
	    _classCallCheck(this, Previewer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Previewer).call(this, props));
	  }

	  _createClass(Previewer, [{
	    key: 'rawMarkup',
	    value: function rawMarkup() {
	      var rawMarkup = this.props.input;
	      if (rawMarkup) {
	        rawMarkup = marked(rawMarkup);
	        // rawMarkup = marked(rawMarkup, {sanitize: true})
	      }
	      return { __html: rawMarkup };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('article', { className: 'previewer markdown-body', dangerouslySetInnerHTML: this.rawMarkup() });
	    }
	  }]);

	  return Previewer;
	}(React.Component);

	exports.default = Previewer;

/***/ }
/******/ ]);