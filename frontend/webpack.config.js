const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = []
const config = {
  entry: './static/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = (env, argv) => {
  plugins.push(new HtmlWebpackPlugin({
    hash: true,
    minify: false,
    filename: '../../index.html',
    template: './template.html'
  }));
  config.plugins = plugins
  return config;
}

