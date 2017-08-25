module.exports =
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTingleIconSymbols = function (_React$Component) {
	  _inherits(IconTingleIconSymbols, _React$Component);

	  function IconTingleIconSymbols() {
	    _classCallCheck(this, IconTingleIconSymbols);

	    return _possibleConstructorReturn(this, (IconTingleIconSymbols.__proto__ || Object.getPrototypeOf(IconTingleIconSymbols)).apply(this, arguments));
	  }

	  _createClass(IconTingleIconSymbols, [{
	    key: 'render',
	    value: function render() {
	      try {
	        var Svg = __webpack_require__(46);
	        return _react2.default.createElement(Svg, this.props);
	      } catch (e) {
	        console.error('cant\'t find svg: tingle-icon-symbols');
	        return null;
	      }
	    }
	  }]);

	  return IconTingleIconSymbols;
	}(_react2.default.Component);

	IconTingleIconSymbols.defaultProps = {
	  className: '',
	  name: '',
	  width: '32px',
	  height: '32px',
	  fill: '#000',
	  onClick: function onClick() {}
	};

	// http://facebook.github.io/react/docs/reusable-components.html
	IconTingleIconSymbols.propTypes = {
	  className: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  fill: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func
	};

	IconTingleIconSymbols.displayName = 'IconTingleIconSymbols';

	exports.default = IconTingleIconSymbols;
	module.exports = exports['default'];

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
	     true ? // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return root.svg4everybody = factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory() : root.svg4everybody = factory();
	}(this, function() {
	    /*! svg4everybody v2.1.4 | github.com/jonathantneal/svg4everybody */
	    function embed(parent, svg, target) {
	        // if the target exists
	        if (target) {
	            // create a document fragment to hold the contents of the target
	            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
	            // conditionally set the viewBox on the svg
	            viewBox && svg.setAttribute("viewBox", viewBox);
	            // copy the contents of the clone into the fragment
	            for (// clone the target
	            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
	                fragment.appendChild(clone.firstChild);
	            }
	            // append the fragment into the svg
	            parent.appendChild(fragment);
	        }
	    }
	    function loadreadystatechange(xhr) {
	        // listen to changes in the request
	        xhr.onreadystatechange = function() {
	            // if the request is ready
	            if (4 === xhr.readyState) {
	                // get the cached html document
	                var cachedDocument = xhr._cachedDocument;
	                // ensure the cached html document based on the xhr response
	                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
	                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
	                xhr._embeds.splice(0).map(function(item) {
	                    // get the cached target
	                    var target = xhr._cachedTarget[item.id];
	                    // ensure the cached target
	                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
	                    // embed the target into the svg
	                    embed(item.parent, item.svg, target);
	                });
	            }
	        }, // test the ready state change immediately
	        xhr.onreadystatechange();
	    }
	    function svg4everybody(rawopts) {
	        function oninterval() {
	            // while the index exists in the live <use> collection
	            for (// get the cached <use> index
	            var index = 0; index < uses.length; ) {
	                // get the current <use>
	                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent);
	                if (svg) {
	                    var src = use.getAttribute("xlink:href") || use.getAttribute("href");
	                    if (polyfill && (!opts.validate || opts.validate(src, svg, use))) {
	                        // remove the <use> element
	                        parent.removeChild(use);
	                        // parse the src and get the url and id
	                        var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
	                        // if the link is external
	                        if (url.length) {
	                            // get the cached xhr request
	                            var xhr = requests[url];
	                            // ensure the xhr request exists
	                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
	                            xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
	                            xhr._embeds.push({
	                                parent: parent,
	                                svg: svg,
	                                id: id
	                            }), // prepare the xhr ready state change event
	                            loadreadystatechange(xhr);
	                        } else {
	                            // embed the local id into the svg
	                            embed(parent, document.getElementById(id));
	                        }
	                    }
	                } else {
	                    // increase the index when the previous value was not "valid"
	                    ++index;
	                }
	            }
	            // continue the interval
	            requestAnimationFrame(oninterval, 67);
	        }
	        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
	        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
	        // create xhr requests object
	        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use");
	        // conditionally start the interval if the polyfill is active
	        polyfill && oninterval();
	    }
	    function getSVGAncestor(node) {
	        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
	        return svg;
	    }
	    return svg4everybody;
	});

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(2);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _svg4everybody = __webpack_require__(4);

	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var webkitUA = /\bAppleWebKit\/(\d+)\b/;

	module.exports = _react2.default.createClass({

	  displayName: "TingleIconSymbols",

	  getDefaultProps: function getDefaultProps() {
	    return { "xmlns": "http://www.w3.org/2000/svg" };
	  },
	  componentDidMount: function componentDidMount() {
	    var webkitUAVersion = (navigator.userAgent.match(webkitUA) || [])[1];
	    (0, _svg4everybody2.default)({
	      polyfill: webkitUAVersion === '600' || webkitUAVersion < 537
	    });
	  },
	  render: function render() {
	    var _props = this.props,
	        onClick = _props.onClick,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['onClick', 'className']);

	    return _react2.default.createElement(
	      'span',
	      { onClick: onClick, className: (0, _classnames3.default)('t-icon t-svg', _defineProperty({}, className, !!className)) },
	      _react2.default.createElement(
	        'svg',
	        others,
	        _react2.default.createElement(
	          'symbol',
	          { id: 'field-required', viewBox: '0 0 200 200' },
	          _react2.default.createElement(
	            'g',
	            { className: 'transform-group' },
	            _react2.default.createElement(
	              'g',
	              { transform: 'scale(0.1953125, 0.1953125)' },
	              _react2.default.createElement('path', { d: 'M723.776 440.512 536.768 512l186.944 71.488c47.616 18.368 75.136 33.024 82.496 44.032 7.296 11.008 11.008 22.016 11.008 33.024 0 29.376-5.568 45.888-16.704 49.472-11.072 3.712-22.208 5.504-33.28 5.504-11.2 0-22.272-2.752-33.344-8.256-11.136-5.504-24.064-13.76-38.848-24.768L523.072 528.512l38.912 230.976c3.648 11.008 5.504 21.12 5.504 30.272 0 9.216 0 15.616 0 19.264 0 22.016-5.504 37.632-16.64 46.72C539.712 864.96 526.784 869.504 512 869.504c-11.328 0-23.552-3.648-36.8-11.008-13.248-7.296-19.776-23.808-19.776-49.472 0-7.296 0.96-14.656 2.816-22.016 1.92-7.296 2.816-16.512 2.816-27.52l45.184-230.976-175.232 153.984c-11.328 7.36-23.552 14.656-36.8 22.016-13.248 7.36-25.408 11.008-36.672 11.008-11.328 0-22.592-3.648-33.92-11.008-11.328-7.296-16.96-22.016-16.96-44.032 0-14.656 5.504-27.52 16.512-38.528s36.608-23.808 76.992-38.528L487.296 512 300.288 440.512C274.624 429.504 252.608 419.456 234.304 410.24c-18.368-9.152-27.52-24.768-27.52-46.72 0-18.304 5.504-32.064 16.576-41.28C234.496 313.152 245.504 308.48 256.704 308.48c11.072 0 23.104 2.752 36.096 8.256 12.864 5.504 24.896 13.76 36.096 24.768l172.032 153.984L462.08 264.512c0-11.008-0.96-20.096-2.816-27.52-1.92-7.296-2.752-14.656-2.752-22.016 0-14.656 5.504-28.352 16.64-41.28C484.288 160.96 497.28 154.496 512 154.496c22.656 0 37.568 7.36 45.248 22.016 7.488 14.656 11.328 27.52 11.328 38.528 0 7.36 0 15.616 0 24.768 0 9.216-1.92 17.408-5.696 24.768L517.696 495.488l175.168-153.984c15.04-14.656 28.16-23.808 39.552-27.52 11.328-3.648 22.592-5.504 33.92-5.504 15.04 0 27.264 5.504 36.672 16.512S817.28 348.864 817.28 363.52c0 14.656-3.712 26.624-11.008 35.776C798.848 408.448 771.392 422.208 723.776 440.512z' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'symbol',
	          { id: 'tingle-icon-symbols' },
	          _react2.default.createElement(
	            'symbol',
	            { id: 'field-required', viewBox: '0 0 200 200' },
	            _react2.default.createElement(
	              'g',
	              { className: 'transform-group' },
	              _react2.default.createElement(
	                'g',
	                { transform: 'scale(0.1953125, 0.1953125)' },
	                _react2.default.createElement('path', { d: 'M723.776 440.512 536.768 512l186.944 71.488c47.616 18.368 75.136 33.024 82.496 44.032 7.296 11.008 11.008 22.016 11.008 33.024 0 29.376-5.568 45.888-16.704 49.472-11.072 3.712-22.208 5.504-33.28 5.504-11.2 0-22.272-2.752-33.344-8.256-11.136-5.504-24.064-13.76-38.848-24.768L523.072 528.512l38.912 230.976c3.648 11.008 5.504 21.12 5.504 30.272 0 9.216 0 15.616 0 19.264 0 22.016-5.504 37.632-16.64 46.72C539.712 864.96 526.784 869.504 512 869.504c-11.328 0-23.552-3.648-36.8-11.008-13.248-7.296-19.776-23.808-19.776-49.472 0-7.296 0.96-14.656 2.816-22.016 1.92-7.296 2.816-16.512 2.816-27.52l45.184-230.976-175.232 153.984c-11.328 7.36-23.552 14.656-36.8 22.016-13.248 7.36-25.408 11.008-36.672 11.008-11.328 0-22.592-3.648-33.92-11.008-11.328-7.296-16.96-22.016-16.96-44.032 0-14.656 5.504-27.52 16.512-38.528s36.608-23.808 76.992-38.528L487.296 512 300.288 440.512C274.624 429.504 252.608 419.456 234.304 410.24c-18.368-9.152-27.52-24.768-27.52-46.72 0-18.304 5.504-32.064 16.576-41.28C234.496 313.152 245.504 308.48 256.704 308.48c11.072 0 23.104 2.752 36.096 8.256 12.864 5.504 24.896 13.76 36.096 24.768l172.032 153.984L462.08 264.512c0-11.008-0.96-20.096-2.816-27.52-1.92-7.296-2.752-14.656-2.752-22.016 0-14.656 5.504-28.352 16.64-41.28C484.288 160.96 497.28 154.496 512 154.496c22.656 0 37.568 7.36 45.248 22.016 7.488 14.656 11.328 27.52 11.328 38.528 0 7.36 0 15.616 0 24.768 0 9.216-1.92 17.408-5.696 24.768L517.696 495.488l175.168-153.984c15.04-14.656 28.16-23.808 39.552-27.52 11.328-3.648 22.592-5.504 33.92-5.504 15.04 0 27.264 5.504 36.672 16.512S817.28 348.864 817.28 363.52c0 14.656-3.712 26.624-11.008 35.776C798.848 408.448 771.392 422.208 723.776 440.512z' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'tingle-icon-symbols' },
	            _react2.default.createElement(
	              'symbol',
	              { id: 'angle-down', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'expand-more' },
	                _react2.default.createElement('polygon', { points: '16.6,8.6 12,13.2 7.4,8.6 6,10 12,16 18,10 ' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'angle-left', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'chevron-left' },
	                _react2.default.createElement('polygon', { points: '15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 ' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'angle-right', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'chevron-right' },
	                _react2.default.createElement('polygon', { points: '10,6 8.6,7.4 13.2,12 8.6,16.6 10,18 16,12 ' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'angle-up', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'expand-less' },
	                _react2.default.createElement('polygon', { points: '12,8 6,14 7.4,15.4 12,10.8 16.6,15.4 18,14 ' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'check-round', viewBox: '0 0 20 20' },
	              _react2.default.createElement(
	                'title',
	                null,
	                'check-round'
	              ),
	              _react2.default.createElement(
	                'desc',
	                null,
	                'Created with Sketch.'
	              ),
	              _react2.default.createElement(
	                'g',
	                { id: 'Page-1', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	                _react2.default.createElement(
	                  'g',
	                  { id: 'check-round' },
	                  _react2.default.createElement(
	                    'g',
	                    { id: 'check-circle' },
	                    _react2.default.createElement('path', { d: 'M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M8,15 L3,10 L4.4,8.6 L8,12.2 L15.6,4.6 L17,6 L8,15 L8,15 Z', id: 'Shape' })
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'check', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'check' },
	                _react2.default.createElement('polygon', { points: '9,16.2 4.8,12 3.4,13.4 9,19 21,7 19.6,5.6 ' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'cross-round', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'cancel' },
	                _react2.default.createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M17,15.6L15.6,17L12,13.4L8.4,17L7,15.6l3.6-3.6L7,8.4L8.4,7l3.6,3.6L15.6,7L17,8.4L13.4,12L17,15.6z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'cross', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'clear' },
	                _react2.default.createElement('polygon', { points: '19,6.4 17.6,5 12,10.6 6.4,5 5,6.4 10.6,12 5,17.6 6.4,19 12,13.4 17.6,19 19,17.6 13.4,12 ' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'empty-circle', viewBox: '0 0 24 24' },
	              _react2.default.createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20 z' })
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'info-circle', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'info-outline' },
	                _react2.default.createElement('path', { d: 'M11,17h2v-6h-2V17z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8c4.4,0,8,3.6,8,8S16.4,20,12,20z M11,9h2V7h-2V9z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'info-round', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'info' },
	                _react2.default.createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'map', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'place' },
	                _react2.default.createElement('path', { d: 'M12,2C8.1,2,5,5.1,5,9c0,5.2,7,13,7,13s7-7.8,7-13C19,5.1,15.9,2,12,2z M12,11.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5S13.4,11.5,12,11.5z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'minus-circle', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'unknown-4' },
	                _react2.default.createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8C20,16.4,16.4,20,12,20z M8,13h8v-2H8V13z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'minus-round', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'remove-circle' },
	                _react2.default.createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M17,13H7v-2h10V13z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'note-round', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'error' },
	                _react2.default.createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'pen', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'create' },
	                _react2.default.createElement('path', { d: 'M3,17.2V21h3.8L17.8,9.9l-3.8-3.8L3,17.2z M20.7,7c0.4-0.4,0.4-1,0-1.4l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0l-1.8,1.8l3.8,3.8L20.7,7z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'plus-circle', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'unknown-3' },
	                _react2.default.createElement('path', { d: 'M13,8h-2v3H8v2h3v3h2v-3h3v-2h-3V8z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8C20,16.4,16.4,20,12,20z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'plus-round', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'add-circle' },
	                _react2.default.createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'plus', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'add' },
	                _react2.default.createElement('path', { d: 'M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'search', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'search' },
	                _react2.default.createElement('path', { d: 'M15.5,14h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2C16,5.9,13.1,3,9.5,3C5.9,3,3,5.9,3,9.5S5.9,16,9.5,16c1.6,0,3.1-0.6,4.2-1.6l0.3,0.3v0.8l5,5l1.5-1.5L15.5,14z M9.5,14C7,14,5,12,5,9.5S7,5,9.5,5C12,5,14,7,14,9.5S12,14,9.5,14z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'setting', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'settings' },
	                _react2.default.createElement('path', { d: 'M19.4,13c0-0.3,0.1-0.6,0.1-1s0-0.7-0.1-1l2.1-1.7c0.2-0.2,0.2-0.4,0.1-0.6l-2-3.5C19.5,5.1,19.3,5,19,5.1l-2.5,1c-0.5-0.4-1.1-0.7-1.7-1l-0.4-2.6C14.5,2.2,14.2,2,14,2h-4C9.8,2,9.5,2.2,9.5,2.4L9.1,5.1C8.5,5.3,8,5.7,7.4,6.1L5,5.1C4.7,5,4.5,5.1,4.3,5.3l-2,3.5C2.2,8.9,2.3,9.2,2.5,9.4L4.6,11c0,0.3-0.1,0.6-0.1,1s0,0.7,0.1,1l-2.1,1.7c-0.2,0.2-0.2,0.4-0.1,0.6l2,3.5C4.5,18.9,4.7,19,5,18.9l2.5-1c0.5,0.4,1.1,0.7,1.7,1l0.4,2.6c0,0.2,0.2,0.4,0.5,0.4h4c0.2,0,0.5-0.2,0.5-0.4l0.4-2.6c0.6-0.3,1.2-0.6,1.7-1l2.5,1c0.2,0.1,0.5,0,0.6-0.2l2-3.5c0.1-0.2,0.1-0.5-0.1-0.6L19.4,13z M12,15.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5S13.9,15.5,12,15.5z' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'star', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'star' },
	                _react2.default.createElement('polygon', { points: '12,17.273 18.18,21 16.545,13.971 22,9.244 14.809,8.627 12,2 9.191,8.627 2,9.244 7.455,13.971 5.82,21 ' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'time', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'schedule' },
	                _react2.default.createElement('path', { fillOpacity: '0.9', d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8c4.4,0,8,3.6,8,8S16.4,20,12,20z' }),
	                _react2.default.createElement('polygon', { fillOpacity: '0.9', points: '12.5,7 11,7 11,13 16.2,16.2 17,14.9 12.5,12.2 ' })
	              )
	            ),
	            _react2.default.createElement(
	              'symbol',
	              { id: 'user', viewBox: '0 0 24 24' },
	              _react2.default.createElement(
	                'g',
	                { id: 'person' },
	                _react2.default.createElement('path', { d: 'M12,12c2.2,0,4-1.8,4-4c0-2.2-1.8-4-4-4C9.8,4,8,5.8,8,8C8,10.2,9.8,12,12,12z M12,14c-2.7,0-8,1.3-8,4v2h16v-2C20,15.3,14.7,14,12,14z' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'list-minus-circle', viewBox: '0 0 24 24' },
	            _react2.default.createElement(
	              'g',
	              { id: 'unknown-4' },
	              _react2.default.createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8C20,16.4,16.4,20,12,20z M8,13h8v-2H8V13z' })
	            )
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'note-message', viewBox: '0 0 16 16' },
	            _react2.default.createElement(
	              'g',
	              { className: 'transform-group' },
	              _react2.default.createElement(
	                'g',
	                { transform: 'scale(0.015625, 0.015625)' },
	                _react2.default.createElement('path', { d: 'M511.736499 64.4775c-246.457158 0-447.121364 200.541409-447.121364 447.121364 0 246.580978 200.63146 447.088618 447.121364 447.088618 246.553349 0 447.121364-200.506617 447.121364-447.088618C958.858886 265.018909 758.316453 64.4775 511.736499 64.4775L511.736499 64.4775zM511.736499 902.715703c-215.72625 0-391.178237-175.48064-391.178237-391.149585 0-215.790718 175.450964-391.208936 391.178237-391.208936 215.72625 0 391.214053 175.417195 391.214053 391.208936C902.977157 727.233016 727.463772 902.715703 511.736499 902.715703L511.736499 902.715703zM552.385291 451.746708l-81.297584 0c-11.235902 0-20.319791 9.106402-20.319791 20.319791l0 43.073005 0 14.3488 0 189.726086c0 11.213389 9.091052 20.319791 20.320814 20.319791l81.297584 0c11.234879 0 20.319791-9.106402 20.319791-20.319791L572.706105 529.488303l0-14.3488 0-43.073005C572.706105 460.852086 563.615053 451.746708 552.385291 451.746708zM447.352119 348.014158c0 35.558867 28.826536 64.385403 64.384379 64.385403 35.55989 0 64.386426-28.826536 64.386426-64.385403s-28.826536-64.385403-64.386426-64.385403C476.177632 283.628756 447.352119 312.455291 447.352119 348.014158L447.352119 348.014158z' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'note-warning', viewBox: '0 0 16 16' },
	            _react2.default.createElement(
	              'g',
	              { className: 'transform-group' },
	              _react2.default.createElement(
	                'g',
	                { transform: 'scale(0.015625, 0.015625)' },
	                _react2.default.createElement('path', { d: 'M512 764.224c-25.408 0-46.016-20.544-46.016-45.952 0-25.408 20.608-46.016 46.016-46.016s46.016 20.544 46.016 46.016C558.016 743.68 537.408 764.224 512 764.224L512 764.224 512 764.224zM512 764.224M512 611.648c-21.248 0-38.528-17.28-38.528-38.528L473.472 284.992c0-21.248 17.28-38.528 38.528-38.528s38.528 17.28 38.528 38.528l0 288.128C550.528 594.368 533.248 611.648 512 611.648L512 611.648zM512 611.648M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64L512 64zM512 900.224c-214.08 0-388.288-174.144-388.288-388.224S297.92 123.776 512 123.776 900.288 297.856 900.288 512 726.08 900.224 512 900.224L512 900.224zM512 900.224' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'toast-error', viewBox: '0 0 24 24' },
	            _react2.default.createElement(
	              'g',
	              { id: 'clear' },
	              _react2.default.createElement('polygon', { points: '19,6.4 17.6,5 12,10.6 6.4,5 5,6.4 10.6,12 5,17.6 6.4,19 12,13.4 17.6,19 19,17.6 13.4,12 ' })
	            )
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'toast-fail', viewBox: '0 0 108.364 108.364' },
	            _react2.default.createElement(
	              'g',
	              null,
	              _react2.default.createElement(
	                'g',
	                null,
	                _react2.default.createElement('path', { d: 'M54.182,0C24.258,0,0,24.258,0,54.182c0,29.924,24.258,54.183,54.182,54.183c29.923,0,54.182-24.259,54.182-54.183 C108.364,24.258,84.105,0,54.182,0z M68.713,33.622c3.424,0,6.201,2.777,6.201,6.201c0,3.426-2.777,6.203-6.201,6.203 c-3.423,0-6.203-2.777-6.203-6.203C62.51,36.399,65.29,33.622,68.713,33.622z M40.594,33.622c3.423,0,6.2,2.777,6.2,6.201 c0,3.426-2.777,6.203-6.2,6.203c-3.423,0-6.201-2.777-6.201-6.203C34.393,36.399,37.17,33.622,40.594,33.622z M76.607,79.098 c-1.521,0.66-3.286-0.041-3.944-1.562c-2.894-6.689-9.731-11.012-17.421-11.012c-7.868,0-14.747,4.32-17.523,11.005 c-0.479,1.153-1.596,1.85-2.771,1.85c-0.384,0-0.773-0.073-1.15-0.229c-1.53-0.637-2.255-2.393-1.62-3.922 c3.71-8.932,12.764-14.703,23.064-14.703c10.084,0,19.084,5.742,22.928,14.63C78.828,76.674,78.128,78.439,76.607,79.098z' })
	              )
	            ),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null)
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'toast-loading', viewBox: '0 0 399.389 399.389' },
	            _react2.default.createElement(
	              'g',
	              null,
	              _react2.default.createElement('path', { d: 'M340.896,58.489C303.18,20.773,253.031,0.001,199.693,0.001c-53.34,0-103.487,20.771-141.204,58.488 C20.772,96.207,0,146.355,0,199.694c0,53.34,20.772,103.489,58.49,141.206c37.717,37.717,87.864,58.488,141.204,58.488 c53.339,0,103.486-20.771,141.205-58.488c37.717-37.717,58.49-87.865,58.49-141.206C399.387,146.355,378.613,96.207,340.896,58.489 z M77.457,199.694c0-67.401,54.835-122.236,122.236-122.236S321.93,132.293,321.93,199.694s-54.836,122.237-122.237,122.237 S77.457,267.096,77.457,199.694z M328.061,328.063c-34.289,34.287-79.877,53.17-128.368,53.17v-41.147 c77.413,0,140.389-62.979,140.389-140.391c0-77.412-62.979-140.391-140.389-140.391c-4.593,0-9.134,0.229-13.615,0.662V18.655 c4.508-0.332,9.049-0.5,13.615-0.5c48.491,0,94.079,18.883,128.368,53.171c34.289,34.289,53.172,79.878,53.172,128.368 C381.232,248.187,362.35,293.776,328.061,328.063z' })
	            ),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null),
	            _react2.default.createElement('g', null)
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'toast-success', viewBox: '0 0 24 24' },
	            _react2.default.createElement(
	              'g',
	              { id: 'check' },
	              _react2.default.createElement('polygon', { points: '9,16.2 4.8,12 3.4,13.4 9,19 21,7 19.6,5.6 ' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'symbol',
	          { id: 'note-message', viewBox: '0 0 16 16' },
	          _react2.default.createElement(
	            'g',
	            { className: 'transform-group' },
	            _react2.default.createElement(
	              'g',
	              { transform: 'scale(0.015625, 0.015625)' },
	              _react2.default.createElement('path', { d: 'M511.736499 64.4775c-246.457158 0-447.121364 200.541409-447.121364 447.121364 0 246.580978 200.63146 447.088618 447.121364 447.088618 246.553349 0 447.121364-200.506617 447.121364-447.088618C958.858886 265.018909 758.316453 64.4775 511.736499 64.4775L511.736499 64.4775zM511.736499 902.715703c-215.72625 0-391.178237-175.48064-391.178237-391.149585 0-215.790718 175.450964-391.208936 391.178237-391.208936 215.72625 0 391.214053 175.417195 391.214053 391.208936C902.977157 727.233016 727.463772 902.715703 511.736499 902.715703L511.736499 902.715703zM552.385291 451.746708l-81.297584 0c-11.235902 0-20.319791 9.106402-20.319791 20.319791l0 43.073005 0 14.3488 0 189.726086c0 11.213389 9.091052 20.319791 20.320814 20.319791l81.297584 0c11.234879 0 20.319791-9.106402 20.319791-20.319791L572.706105 529.488303l0-14.3488 0-43.073005C572.706105 460.852086 563.615053 451.746708 552.385291 451.746708zM447.352119 348.014158c0 35.558867 28.826536 64.385403 64.384379 64.385403 35.55989 0 64.386426-28.826536 64.386426-64.385403s-28.826536-64.385403-64.386426-64.385403C476.177632 283.628756 447.352119 312.455291 447.352119 348.014158L447.352119 348.014158z' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'symbol',
	          { id: 'note-warning', viewBox: '0 0 16 16' },
	          _react2.default.createElement(
	            'g',
	            { className: 'transform-group' },
	            _react2.default.createElement(
	              'g',
	              { transform: 'scale(0.015625, 0.015625)' },
	              _react2.default.createElement('path', { d: 'M512 764.224c-25.408 0-46.016-20.544-46.016-45.952 0-25.408 20.608-46.016 46.016-46.016s46.016 20.544 46.016 46.016C558.016 743.68 537.408 764.224 512 764.224L512 764.224 512 764.224zM512 764.224M512 611.648c-21.248 0-38.528-17.28-38.528-38.528L473.472 284.992c0-21.248 17.28-38.528 38.528-38.528s38.528 17.28 38.528 38.528l0 288.128C550.528 594.368 533.248 611.648 512 611.648L512 611.648zM512 611.648M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64L512 64zM512 900.224c-214.08 0-388.288-174.144-388.288-388.224S297.92 123.776 512 123.776 900.288 297.856 900.288 512 726.08 900.224 512 900.224L512 900.224zM512 900.224' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'symbol',
	          { id: 'list-minus-circle', viewBox: '0 0 24 24' },
	          _react2.default.createElement(
	            'g',
	            { id: 'unknown-4' },
	            _react2.default.createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8C20,16.4,16.4,20,12,20z M8,13h8v-2H8V13z' })
	          )
	        ),
	        _react2.default.createElement(
	          'symbol',
	          { id: 'toast-error', viewBox: '0 0 24 24' },
	          _react2.default.createElement(
	            'g',
	            { id: 'clear' },
	            _react2.default.createElement('polygon', { points: '19,6.4 17.6,5 12,10.6 6.4,5 5,6.4 10.6,12 5,17.6 6.4,19 12,13.4 17.6,19 19,17.6 13.4,12 ' })
	          )
	        ),
	        _react2.default.createElement(
	          'symbol',
	          { id: 'toast-fail', viewBox: '0 0 108.364 108.364' },
	          _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement(
	              'g',
	              null,
	              _react2.default.createElement('path', { d: 'M54.182,0C24.258,0,0,24.258,0,54.182c0,29.924,24.258,54.183,54.182,54.183c29.923,0,54.182-24.259,54.182-54.183 C108.364,24.258,84.105,0,54.182,0z M68.713,33.622c3.424,0,6.201,2.777,6.201,6.201c0,3.426-2.777,6.203-6.201,6.203 c-3.423,0-6.203-2.777-6.203-6.203C62.51,36.399,65.29,33.622,68.713,33.622z M40.594,33.622c3.423,0,6.2,2.777,6.2,6.201 c0,3.426-2.777,6.203-6.2,6.203c-3.423,0-6.201-2.777-6.201-6.203C34.393,36.399,37.17,33.622,40.594,33.622z M76.607,79.098 c-1.521,0.66-3.286-0.041-3.944-1.562c-2.894-6.689-9.731-11.012-17.421-11.012c-7.868,0-14.747,4.32-17.523,11.005 c-0.479,1.153-1.596,1.85-2.771,1.85c-0.384,0-0.773-0.073-1.15-0.229c-1.53-0.637-2.255-2.393-1.62-3.922 c3.71-8.932,12.764-14.703,23.064-14.703c10.084,0,19.084,5.742,22.928,14.63C78.828,76.674,78.128,78.439,76.607,79.098z' })
	            )
	          ),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null)
	        ),
	        _react2.default.createElement(
	          'symbol',
	          { id: 'toast-loading', viewBox: '0 0 399.389 399.389' },
	          _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement('path', { d: 'M340.896,58.489C303.18,20.773,253.031,0.001,199.693,0.001c-53.34,0-103.487,20.771-141.204,58.488 C20.772,96.207,0,146.355,0,199.694c0,53.34,20.772,103.489,58.49,141.206c37.717,37.717,87.864,58.488,141.204,58.488 c53.339,0,103.486-20.771,141.205-58.488c37.717-37.717,58.49-87.865,58.49-141.206C399.387,146.355,378.613,96.207,340.896,58.489 z M77.457,199.694c0-67.401,54.835-122.236,122.236-122.236S321.93,132.293,321.93,199.694s-54.836,122.237-122.237,122.237 S77.457,267.096,77.457,199.694z M328.061,328.063c-34.289,34.287-79.877,53.17-128.368,53.17v-41.147 c77.413,0,140.389-62.979,140.389-140.391c0-77.412-62.979-140.391-140.389-140.391c-4.593,0-9.134,0.229-13.615,0.662V18.655 c4.508-0.332,9.049-0.5,13.615-0.5c48.491,0,94.079,18.883,128.368,53.171c34.289,34.289,53.172,79.878,53.172,128.368 C381.232,248.187,362.35,293.776,328.061,328.063z' })
	          ),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null),
	          _react2.default.createElement('g', null)
	        ),
	        _react2.default.createElement(
	          'symbol',
	          { id: 'toast-success', viewBox: '0 0 24 24' },
	          _react2.default.createElement(
	            'g',
	            { id: 'check' },
	            _react2.default.createElement('polygon', { points: '9,16.2 4.8,12 3.4,13.4 9,19 21,7 19.6,5.6 ' })
	          )
	        )
	      ),
	      _react2.default.createElement('div', { className: 't-icon-mask' })
	    );
	  }
	});

/***/ }

/******/ });