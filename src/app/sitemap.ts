import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.cyunyun.com'
  const locales = ['', '/en', '/ja', '/ko', '/es']
  const now = new Date().toISOString()

  const tools = [
    'copywriter', 'weekly-report', 'resume', 'name-gen', 'moments', 'email',
    'json-formatter', 'base64', 'timestamp', 'regex', 'url-encode', 'color-converter',
    'word-count', 'markdown', 'text-diff', 'password-gen',
    'image-base64', 'hash', 'qrcode', 'lorem', 'css-units',
    'uuid', 'number-base', 'html-entity', 'string-case', 'sql-formatter',
    'cron-parser', 'ip-lookup', 'emoji', 'image-compress', 'text-case',
    'jwt-decoder', 'json-csv', 'gradient', 'box-shadow', 'meta-tag',
    'border-radius', 'md-to-html',
  ]

  const blogs = [
    'xiaohongshu-copywriting-tips', 'baby-naming-guide-2026', 'weekly-report-template',
    'resume-writing-guide', 'wechat-moments-copywriting', 'business-email-writing',
    'developer-tools-2026', 'password-security-guide',
    'json-formatter-guide', 'qrcode-generator-guide',
    'css-units-guide', 'uuid-guide',
    'cron-expression-guide', 'image-compress-guide',
    'sql-formatting-guide', 'ip-geolocation-guide',
    'regex-tutorial', 'base64-encoding-guide',
    'hash-algorithm-guide', 'jwt-token-guide',
  ]

  const entries: MetadataRoute.Sitemap = []

  // Homepage per locale
  entries.push({ url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 })
  for (const l of locales.slice(1)) {
    entries.push({ url: `${base}${l}`, lastModified: now, changeFrequency: 'daily', priority: 0.9 })
  }

  // Tool pages
  for (const tool of tools) {
    entries.push({ url: `${base}/${tool}`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 })
  }

  // Blog pages
  entries.push({ url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 })
  for (const blog of blogs) {
    entries.push({ url: `${base}/blog/${blog}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 })
  }

  return entries
}
