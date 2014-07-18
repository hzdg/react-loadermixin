path = require 'path'

module.exports =
  entry: path.join __dirname, 'src', 'index.coffee'
  output:
    path: path.join __dirname, 'standalone'
    filename: 'react-loadermixin.js'
    libraryTarget: 'umd'
    target: 'web'
  externals: ['react']
  module:
    loaders: [
      {test: /\.coffee$/, loader: 'coffee'}
    ]
