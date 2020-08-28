const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(path.join(__dirname, 'src'))

module.exports = {
  entry: "./src/render/index.js",
  output: {
    filename: "output.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Load a custom template (lodash by default)
      template: "./html/index.html",
    }),
  ],
  resolve: {
    alias: {
      "@render": path.join(__dirname, '../src/render'),
      // Templates: path.resolve(__dirname, 'src/templates/')
    }
  },
  target: "electron-renderer"
};
