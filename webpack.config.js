var path = require("path")
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
}
