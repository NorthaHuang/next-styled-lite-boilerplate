/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    author: 'Northa Huang',
    siteName: 'Northa\'s Website',
    siteDescription: 'This is Northa\'s website!',
    customerServiceEmail: 'sonic800122@gmail.com'
  }
};

module.exports = nextConfig;
