React = require 'react'
merge = require 'xtend'

{PropTypes} = React


module.exports = ReactLoaderMixin =
  propTypes:
    src: PropTypes.string
    onLoad: PropTypes.func
    onError: PropTypes.func
  renderLoader: (loader, props) ->
    loader merge props,
      src: @props.src
      onLoad: (args...) =>
        @loaderDidLoad? args...
        @props.onLoad? args...
      onError: (args...) =>
        @loaderDidError? args...
        @props.onError? args...
