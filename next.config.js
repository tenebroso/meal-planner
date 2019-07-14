const withImages = require('next-images')
module.exports = withImages();

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
    });

    return config;
  },
  withImages: withImages(),
};