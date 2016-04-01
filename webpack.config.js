const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  debug: false,

  devtool: 'source-map',

  entry: {
    app: './src/client/app.js',
    vendor: './src/client/vendor.js'
  },

  resolve: {

    extensions: ['', '.js'],

    root: path.resolve(__dirname, 'src'),

    modulesDirectories: ['node_modules']

  },

  output: {

    path: path.resolve(__dirname, 'dist'),

    filename: '[name]-[chunkhash].js',

    sourceMapFilename: '[name]-[chunkhash].map',

    chunkFilename: '[id]-[chunkhash].js'

  },

  module: {

    loaders: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }

    ]

  },

  plugin: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {screw_ie8: true},
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'ENV': JSON.stringify('production'),
      'NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'none',
      inject: true
    })
  ],

  node: {
    global: 'window',
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  },

  htmlLoader: {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true
  },

  postcss: [autoprefixer]

};
