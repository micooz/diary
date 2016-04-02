const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {

  debug: false,

  devtool: 'source-map',

  entry: {
    'app': './src/client/app.js',
    'vendor': './src/client/vendor.js'
  },

  resolve: {

    extensions: ['', '.js'],

    root: path.resolve(__dirname, 'src/client'),

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

  plugins: [
    new WebpackMd5Hash(),
    new DedupePlugin(),
    new OccurenceOrderPlugin(true),
    new CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity
    }),
    new UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    }),
    new DefinePlugin({
      'ENV': JSON.stringify('production'),
      'NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/client/index.html',
      chunksSortMode: 'none',
      inject: true
    })
  ],

  node: {
    global: 'window',
    crypto: 'empty',
    process: false,
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
