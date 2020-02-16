const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  publicRuntimeConfig: {
    API_URL: 'http://localhost:3001/api',
  }
};
