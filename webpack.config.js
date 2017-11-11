const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'server.js'
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        }
      }
    ]
  },

  target: 'node',

  devtool: 'inline-source-map'
};

module.exports = webpackConfig;
