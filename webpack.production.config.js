const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'envify-loader!babel'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }
  ]},
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: '/'
  },
  sassLoader: {
     includePaths: [path.resolve(__dirname, "./styles")]
   }
