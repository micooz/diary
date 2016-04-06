const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = webpackMerge(webpackCommon, {

  debug: false,

  devtool: 'source-map',

  output: {

    path: path.resolve(__dirname, '../dist'),

    filename: '[name].min.js',

    sourceMapFilename: '[name].map',

    chunkFilename: '[id]-[chunkhash].js'

  },

  plugins: [
    new WebpackMd5Hash(),
    new DedupePlugin(),
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
      'NODE_ENV': JSON.stringify('production'),
      'process.env': {
        NODE_ENV: '"production"'
      },
      '__DEVELOPMENT__': false
    })
  ]

});
