const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const main = require("./webpack.main.config.js");

const name = (ext) => `[name].${ext}`;

module.exports = merge(main, {
  mode: "development",
  entry: {
    main: [
      "@babel/polyfill",
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      "./src/index.jsx",
    ],
  },
  output: {
    filename: `js/${name("js")}`,
    path: path.resolve(__dirname, "../../build/"),
    publicPath: "/",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "../../index.html"),
      minify: {
        collapseWhitespace: false,
      },
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
});
