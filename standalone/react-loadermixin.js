!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.ReactLoaderMixin=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var PropTypes, React, ReactLoaderMixin, merge,
  __slice = [].slice;

React = (window.React);

merge = _dereq_('xtend');

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

},{"xtend":2}],2:[function(_dereq_,module,exports){
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

},{}]},{},[1])
(1)
});