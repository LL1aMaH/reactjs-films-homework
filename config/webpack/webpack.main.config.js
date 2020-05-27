const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const name = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoader = (ext) => {
  const loader = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadALL: true,
      },
    },
    "css-loader",
  ];

  if (ext) loader.push(ext);

  return loader;
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoader(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoader("sass-loader"),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/${name("css")}`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../../src/favicon.ico"),
          to: path.resolve(__dirname, "../../build"),
        },
      ],
    }),
  ],
};
