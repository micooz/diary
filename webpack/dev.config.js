const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(webpackCommon, {

  debug: true,

  devtool: 'cheap-module-eval-source-map',

  output: {

    path: path.resolve(__dirname, '../dist'),

    filename: '[name]-bundle.js',

    sourceMapFilename: '[name].map',

    chunkFilename: '[id]-chunk.js'

  },

  plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify('development'),
      'NODE_ENV': JSON.stringify('development'),
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]

});
