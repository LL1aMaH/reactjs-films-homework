const devConfig = require('./config/webpack/webpack.dev.config');
const prodConfig = require('./config/webpack/webpack.prod.config');

const isDev = process.env.NODE_ENV === 'development'

module.exports = () => {
    if (!isDev) {
      return prodConfig;
    }
    return devConfig;
  };