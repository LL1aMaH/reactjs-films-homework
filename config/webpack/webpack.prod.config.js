const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
const TercerWebpackPlugin = require("terser-webpack-plugin");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const merge = require("webpack-merge");
const main = require("./webpack.main.config.js");

const name = (ext) => `[name].[hash].${ext}`;

module.exports = merge(main, {
  mode: "development",
  entry: { main: "./src/index.jsx" },
  output: {
    filename: `js/${name("js")}`,
    path: path.resolve(__dirname, "../../build/"),
    publicPath: "/",
  },
  optimization: {
    minimizer: [new OptimizeCssAssetPlugin(), new TercerWebpackPlugin()],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "../../index.html"),
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
});
