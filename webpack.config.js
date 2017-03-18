var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src/js/');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: APP_DIR + "/app.js",
  output: {
    path: BUILD_DIR,
    filename: "/app.js"
  },
  module : {
    rules: [
        {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
        },
        {
            test: /\.json$/,
            use: 'json-loader'
        } 
    ]
  },
  plugins: debug ? [
      new HtmlWebpackPlugin({"title":"Math Exercises"})
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};