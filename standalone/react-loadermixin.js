(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactLoaderMixin"] = factory(require("React"));
	else
		root["ReactLoaderMixin"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var PropTypes, React, ReactLoaderMixin, merge,
	  __slice = [].slice;

	React = __webpack_require__(1);

	merge = __webpack_require__(2);

	PropTypes = React.PropTypes;

	module.exports = ReactLoaderMixin = {
	  propTypes: {
	    src: PropTypes.string,
	    onLoad: PropTypes.func,
	    onError: PropTypes.func
	  },
	  renderLoader: function(loader, props) {
	    return loader(merge(props, {
	      src: this.props.src,
	      onLoad: (function(_this) {
	        return function() {
	          var args, _base;
	          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	          if (typeof _this.loaderDidLoad === "function") {
	            _this.loaderDidLoad.apply(_this, args);
	          }
	          return typeof (_base = _this.props).onLoad === "function" ? _base.onLoad.apply(_base, args) : void 0;
	        };
	      })(this),
	      onError: (function(_this) {
	        return function() {
	          var args, _base;
	          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	          if (typeof _this.loaderDidError === "function") {
	            _this.loaderDidError.apply(_this, args);
	          }
	          return typeof (_base = _this.props).onError === "function" ? _base.onError.apply(_base, args) : void 0;
	        };
	      })(this)
	    }));
	  }
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = extend

	function extend() {
	    var target = {}

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ }
/******/ ])
})
