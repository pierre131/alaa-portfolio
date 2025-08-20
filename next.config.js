const { i18n } = require('./next-i18next.config');
const enableI18n = !process.env.SKIP_I18N;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // دعم النشر على GitHub Pages عبر تحديد basePath و assetPrefix اختياريًا
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
}

// تضمين i18n فقط عندما لا يكون البناء للتصدير الثابت
if (enableI18n) {
  nextConfig.i18n = i18n;
}

module.exports = nextConfig 