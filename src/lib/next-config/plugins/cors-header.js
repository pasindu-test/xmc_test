const config = require('../../../temp/config');

/**
 * @param {import('next').NextConfig} nextConfig
 */
const corsHeaderPlugin = (nextConfig = {}) => {
  if (!config.sitecoreApiHost) {
    return nextConfig;
  }
  return Object.assign({}, nextConfig, {
    async headers() {
      const extendHeaders =
        typeof nextConfig.headers === 'function' ? await nextConfig.headers() : [];
      return [...(await extendHeaders)];
    },
  });
};

module.exports = corsHeaderPlugin;
