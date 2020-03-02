const path = require('path');
const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  publicRuntimeConfig: {
    API_URL: 'http://173.249.14.149/:3001/api'
  }
});
