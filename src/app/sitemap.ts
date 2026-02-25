import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ai-starlight.cc'
  const tools = ['', '/copywriter', '/weekly-report', '/resume', '/name-gen', '/moments', '/email', '/blog',
    '/blog/xiaohongshu-copywriting-tips', '/blog/baby-naming-guide-2026', '/blog/weekly-report-template',
    '/blog/resume-writing-guide', '/blog/wechat-moments-copywriting', '/blog/business-email-writing',
    '/word-count', '/json-formatter', '/base64', '/timestamp', '/password-gen', '/color-converter']
  return tools.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
}
