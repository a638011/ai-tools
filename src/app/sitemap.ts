import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ai-starlight.cc'
  const tools = ['', '/copywriter', '/weekly-report', '/resume', '/name-gen', '/moments', '/email']
  return tools.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
}
