var { resolve } = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  devtool: 'source-map',
  context: resolve(__dirname, '../app'),
  entry: [
      'react-hot-loader/patch',
      // activate HMR for react

      'webpack-dev-server/client?http://1.201.137.209:2082',
      'webpack/hot/only-dev-server',
      resolve(__dirname, '../app/js/index.js'),
  ],
  output: {
      path: resolve(__dirname, '../dist/assets'),
      filename: "[name]-[hash].js",
      publicPath: 'http://1.201.137.209:2082/dist/assets/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
    new HtmlWebpackPlugin({
        template: '../../templates/index.html'
    })
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

  //resolve: {
  //  modules: ['node_modules', 'bower_components'],
  //  extensions: ['*', '.js', '.jsx']
  //},
}
