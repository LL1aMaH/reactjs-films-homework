const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const open = require('open');

const app = express();
const config = require('./config/webpack/webpack.dev.config.js');

const compiler = webpack(config);

app.use(
  webpackHotMiddleware(compiler, {
    log: false,
  }),
);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    logLevel: 'SILENT',
  }),
);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n'); // eslint-disable-line
  open('http://localhost:3000/');
});
