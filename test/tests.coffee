{assert} = chai
{div} = React.DOM
LoaderMixin = ReactLoaderMixin


# A simple spy function that expects a single argument. An optional `original`
# function may be passed to the `spy` factory. Whenever the spy is called, it
# will be called with the argument passed to the spy, and its return value will
# be passed through.
spy = (original) ->
  fn = (opts) ->
    fn.calls.push opts
    original? opts
  fn.calls = []
  fn.callCount = -> fn.calls.length
  # Asserts whether or not the spy was ever called with the provided argument.
  # If it can't match the argument by value, it will attempt to compare it to
  # spy calls as an 'options' object, checking to see if any of the provided
  # options were in a set of options passed to a spy call.
  fn.calledWith = (opts) ->
    for callOpts in fn.calls
      break if match = opts is callOpts
      for opt of opts
        break if not match = opt of callOpts and opts[opt] is callOpts[opt]
    match
  fn


createLoaderComponentClass = (loader) ->
  React.createClass
    mixins: [LoaderMixin]
    componentDidMount: ->
      @loaderDidLoad = spy()
      @loaderDidError = spy()
    render: ->
      @renderLoader loader, @props.loaderProps


createLoader = ->
  loader = spy div
  loader.resolve = (args...) ->
    onLoad args... for {onLoad} in loader.calls
  loader.reject = (error) ->
    onError error for {onError} in loader.calls
  loader


describe 'ReactLoaderMixin', ->
  el = null
  loader = null
  LoaderComponent = null

  beforeEach ->
    el = document.createElement 'div'
    LoaderComponent = createLoaderComponentClass loader = createLoader()

  it 'gives props to the loader function', ->
    React.renderComponent (LoaderComponent loaderProps: className: 'test'), el
    assert loader.calledWith className: 'test', 'Expected loader to get props'

  it 'calls `loaderDidLoad` on load', ->
    component = React.renderComponent (LoaderComponent null), el
    loader.resolve success = true
    assert.equal component.loaderDidLoad.callCount(), 1,
      'Expected `loaderDidLoad` to have been called once'
    assert component.loaderDidLoad.calledWith(success),
      'Expected `loaderDidLoad` to have been called with success argument'

  it 'calls `props.onLoad` on load', ->
    component = React.renderComponent (LoaderComponent onLoad: onLoad = spy()), el
    loader.resolve success = true
    assert.equal onLoad.callCount(), 1,
      'Expected `props.onLoad` to have been called once'
    assert onLoad.calledWith(success),
      'Expected `props.onLoad` to have been called with success argument'

  it 'calls `loaderDidError` on error', ->
    component = React.renderComponent (LoaderComponent null), el
    loader.reject error = new Error()
    assert.equal component.loaderDidError.callCount(), 1,
      'Expected `loaderDidError` to have been called once'
    assert component.loaderDidError.calledWith(error),
      'Expected `loaderDidError` to have been called with an error'

  it 'calls `props.onError` on error', ->
    component = React.renderComponent (LoaderComponent onError: onError = spy()), el
    loader.reject error = new Error()
    assert.equal onError.callCount(), 1,
      'Expected `props.onError` to have been called once'
    assert onError.calledWith(error),
      'Expected `props.onError` to have been called with an error'
