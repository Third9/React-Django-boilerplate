var { resolve } = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  devtool: 'source-map',
  context: resolve(__dirname, '../src'),
  entry: [
      'react-hot-loader/patch',
      // activate HMR for react

      'webpack-dev-server/client?http://127.0.0.1:3031',
      'webpack/hot/only-dev-server',
      resolve(__dirname, '../src/js/index.js'),
  ],
  output: {
      path: resolve(__dirname, '../dist/assets'),
      filename: "[name]-[hash].js",
      publicPath: 'http://127.0.0.1:3031/dist/assets/',
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
