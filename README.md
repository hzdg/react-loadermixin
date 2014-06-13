react-loadermixin
=================

A component that is a loader is expected to meet the following contract:

 - It accepts `src`, `onLoad`, and `onError` props
 - It calls `onLoad` when it successfully loads the `src`
 - It calls `onError` if it fails to load the `src`

This simple [React] mixin helps a component meet that contract.


Usage
-----

```javascript
var LoaderMixin = require('react-loadermixin');

// Create a component that mixes in the loader behaviors. The class can take
// advantage of a few useful features of the mixin: It can define
// `loaderDidLoad` and `loaderDidError` hooks, and it can use the provided
// `renderLoader()` method to call a loader function with the `src` prop and
// bind to the `onLoad` and `onError` events of the loader function.
var LoaderComponent = React.createClass({
  mixins: [LoaderMixin],
  loaderDidLoad: function() {
    // Do something on load.
  },
  loaderDidError: function(error) {
    // Do something on error.
  },
  render: function() {
    // For illustration, we use an img component as our loader function. It's a
    // good choice because it implements The expected interface for a loader
    // function in that it takes `src`, `onLoad`, and `onError` props.
    this.renderLoader(React.DOM.img, {className: 'image'});
  }
});

// ...in a parent component's `render()`.
<LoaderComponent
  src="/path/to/image.jpg"
  onLoad={this.handleLoad}
  onError={this.handleError}
/>

```


Props
-----

These props are accepted by the component and used by the mixin throughout the
load cycle.

<table>
  <thead>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>`src`</td>
      <td>string</td>
      <td>The URL of an asset to be loaded.</td>
    </tr>
    <tr>
      <td>`onLoad`</td>
      <td>function</td>
      <td>A handler for the loader function's `onLoad` event.</td>
    </tr>
    <tr>
      <td>`onError`</td>
      <td>function</td>
      <td>A handler for the loader function's `onError` event.</td>
    </tr>
  </tbody>
</table>


Component Specifications
------------------------

These methods are provided to the component class by the mixin.

<table>
  <thead>
    <th>Name</th>
    <th>Arguments</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>`renderLoader`</td>
      <td>function `loader`, object `props`</td>
      <td>A helper method that automates starting the load and binding to its
          events. Accepts a `loader` function and optional `props` as arguments.
          The `loader` function is expected to accept `src`, `onLoad`, and
          `onError` props, and to return a 'renderable' value (such as a
          component instance). The `renderLoader` method should be called in
          the component's `render()` method.</td>
    </tr>
  </tbody>
</table>


Load cycle methods
------------------

These methods may optionally be defined on the component class. If they are
defined, the mixed in behavior will utilize them at particular points throughout
the load cycle.

<table>
  <thead>
    <th>Name</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>`loaderDidLoad`</td>
      <td>Invoked when the loader function has successfully loaded the asset.
          This is invoked immediately before the `props.onLoad` callback.</td>
    </tr>
    <tr>
      <td>`loaderDidError`</td>
      <td>Invoked when the loader function has failed to load the asset.
          This is invoked immediately before the `props.onError` callback.</td>
    </tr>
  </tbody>
</table>


[React]: http://facebook.github.io/react/
