/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: true,
    locales: ['en', 'sv', 'es', 'de'],
    defaultLocale: 'sv',
  },
}

module.exports = nextConfig
