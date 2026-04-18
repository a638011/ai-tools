import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.cyunyun.com'
  const now = new Date().toISOString()

  const tools = [
    'age-calculator','ascii-table','aspect-ratio','base64','binary-text',
    'bmi-calculator','border-radius','box-shadow','chmod-calculator',
    'color-converter','color-palette','color-picker','copywriter',
    'countdown-timer','cron-parser','css-animation','css-grid','css-minifier',
    'css-units','csv-viewer','date-calculator','email','emoji','favicon',
    'flexbox','font-preview','gradient','hash','html-entity','html-formatter',
    'html-preview','http-status','image-base64','image-compress','image-filter',
    'image-resize','image-to-pdf','image-watermark','ip-lookup','js-minifier',
    'json-csv','json-diff','json-formatter','json-path','json-schema',
    'json-to-xml','json-to-yaml','jwt-decoder','loan-calculator','lorem',
    'markdown','markdown-table','math-calculator','md-to-html','meta-tag',
    'moments','morse-code','name-gen','number-base','open-graph',
    'password-gen','pdf-compress','pdf-merge','percentage-calc',
    'placeholder-image','pomodoro','punycode','qrcode','qr-reader',
    'random-picker','regex','regex-gen','resume','robots-txt','rot13',
    'screen-resolution','sql-formatter','stopwatch','string-case','svg-editor',
    'text-case','text-diff','text-replace','text-reverse','text-shadow-gen',
    'text-sort','timestamp','tip-calculator','toml-formatter','tts',
    'unicode-converter','unit-converter','url-encode','user-agent-parser',
    'uuid','weekly-report','word-count','word-frequency','xml-formatter',
    'yaml-formatter',
  ]

  const blogs = [
    'ai-copywriting-tips','ascii-code-table','aspect-ratio-explained',
    'baby-naming-guide-2026','base64-encoding-guide','binary-number-system',
    'bmi-health-guide','border-radius-tricks','business-email-writing',
    'caesar-cipher-guide','color-picker-guide','color-theory-basics',
    'cron-expression-guide','cron-parser-guide','css-animation-guide',
    'css-box-shadow-guide','css-color-formats','css-grid-tutorial',
    'css-minification-guide','css-units-guide','csv-data-processing',
    'date-calculation-tips','developer-productivity','developer-tools-2026',
    'developer-tools-collection-2026','email-etiquette-guide','emoji-unicode-guide',
    'favicon-design-guide','flexbox-vs-grid','gradient-design-tips',
    'hash-algorithm-guide','hash-generator-guide','html-formatting-tips',
    'html-preview-tools','http-status-codes-guide','image-compress-guide',
    'image-filter-css','image-resize-guide','image-to-pdf-guide',
    'image-watermark-guide','ip-geolocation-guide','javascript-minification',
    'json-comparison-tools','json-csv-converter-guide','json-formatter-guide',
    'jsonpath-tutorial','json-schema-tutorial','json-xml-conversion',
    'jwt-token-guide','linux-file-permissions','loan-interest-guide',
    'markdown-cheatsheet','markdown-table-syntax','markdown-to-html-guide',
    'morse-code-history','naming-culture-china','online-tools-security',
    'open-graph-protocol','password-security-guide','pdf-compression-tips',
    'pdf-merge-guide','pdf-tools-guide','percentage-calculation',
    'placeholder-images-guide','pomodoro-technique','punycode-idn-guide',
    'qrcode-generator-guide','qr-code-scanning','random-number-generation',
    'regex-common-patterns','regex-tutorial','resume-ats-guide',
    'resume-writing-guide','robots-txt-guide','scientific-calculator-guide',
    'screen-resolution-guide','seo-basics-2026','seo-meta-tags-guide',
    'sql-formatting-guide','stopwatch-timer-guide','svg-basics-tutorial',
    'text-processing-tips','text-reverse-uses','text-shadow-css',
    'text-sorting-techniques','timestamp-conversion-guide','timestamp-converter-guide',
    'tip-calculator-guide','toml-config-guide','tts-technology-guide',
    'unicode-explained','unit-conversion-guide','url-encoding-guide',
    'user-agent-explained','uuid-guide','web-accessibility-guide',
    'web-fonts-guide','wechat-moments-copywriting','weekly-report-template',
    'weekly-report-tips','word-frequency-analysis','xiaohongshu-copywriting-tips',
    'xml-json-comparison','yaml-vs-json',
  ]

  const entries: MetadataRoute.Sitemap = []

  // Homepage
  entries.push({ url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 })

  // Tool pages
  for (const tool of tools) {
    entries.push({ url: `${base}/${tool}`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 })
  }

  // Blog index
  entries.push({ url: `${base}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.7 })

  // Blog posts
  for (const blog of blogs) {
    entries.push({ url: `${base}/blog/${blog}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 })
  }

  return entries
}