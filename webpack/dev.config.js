const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');
const config = require('../config');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(webpackCommon, {

  debug: true,

  devtool: 'cheap-module-eval-source-map',

  output: {

    path: config.static,

    filename: '[name].js',

    sourceMapFilename: '[name].map',

    chunkFilename: '[id]-chunk.js'

  },

  plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify('development'),
      'NODE_ENV': JSON.stringify('development'),
      'process.env': {
        NODE_ENV: '"development"'
      },
      '__DEVELOPMENT__': true
    })
  ],

  devServer: {
    port: 3000,
    host: 'localhost',
    publicPath: '/diary/dist',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }

});
