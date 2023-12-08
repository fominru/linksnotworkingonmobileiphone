/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, {dev, isServer}) {
    const customConfig = {...config};
    if (dev) {
      customConfig.devtool = 'cheap-module-source-map';
      customConfig.productionBrowserSourceMaps = true;
    } else {
      customConfig.devtool = isServer ? false : 'nosources-source-map';
      customConfig.productionBrowserSourceMaps = false;
    }
    return config;
  },
}

module.exports = nextConfig
