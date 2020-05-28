const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../src/favicon.ico'),
          to: path.resolve(__dirname, '../../build'),
        },
      ],
    }),
  ],
};
