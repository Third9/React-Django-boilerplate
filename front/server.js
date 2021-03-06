var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config/webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true
}).listen(3031, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 127.0.0.1:3031');
});