// import webpack
const webpack = require("webpack");
//leitura de css
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // entrada, saida e bundle
  entry: "./ex/index.js",
  output: {
    path: __dirname + "/public",
    filename: "./bundle.js"
  },
  // definicao do servidor a ser usado
  devServer: {
    port: 8080,
    contentBase: "./public"
  },
  plugins: [new ExtractTextPlugin("app.css")],
  //modulos
  module: {
    // babel
    loaders: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  }
};
