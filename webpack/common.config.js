const path = require('path');
const webpack = require('webpack');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {

  entry: {
    'app': './src/client/app.js',
    'vendor': './src/client/vendor.js'
  },

  resolve: {

    extensions: ['', '.js', '.css'],

    root: path.resolve(__dirname, 'src/client'),

    modulesDirectories: ['node_modules']

  },

  module: {

    loaders: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader'
      }

    ]

  },

  plugins: [
    new OccurenceOrderPlugin(true),
    new CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity
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

  postcss: [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-cssnext')({
      browsers: ['last 2 versions']
    })
    // just use css-loader option that already use cssnano under the hood
  ]

};
