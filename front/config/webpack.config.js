var { resolve } = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: resolve(__dirname, '../src'),
  entry: [
      resolve(__dirname, '../src/js/index.js'),
  ],
  output: {
      path: resolve(__dirname, '../dist/assets'),
      filename: "[name]-[hash].js",
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ],
  },
}
