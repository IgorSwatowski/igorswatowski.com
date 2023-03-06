const path = require('path');
const withTM = require('next-transpile-modules')(['gsap']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
};

module.exports = withTM(nextConfig);
