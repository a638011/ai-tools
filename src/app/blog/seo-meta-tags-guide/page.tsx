import Link from 'next/link'

export default function SeoMetaTagsGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SEO Meta标签完全指南：让搜索引擎爱上你的网站</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">Meta标签是网页的"名片"，决定了你的页面在搜索结果和社交媒体中如何展示。写好Meta标签是SEO的第一步。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">最重要的Meta标签</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Title标签</h3>
        <p className="text-gray-700 leading-relaxed">搜索结果中显示的蓝色标题，对SEO影响最大。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          {'<title>'}页面标题 - 网站名{'</title>'}
        </div>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>✅ 长度控制在50-60个字符</p>
          <p>✅ 核心关键词放在前面</p>
          <p>✅ 每个页面标题唯一</p>
          <p>✅ 包含品牌名（放在末尾）</p>
          <p>❌ 不要堆砌关键词</p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Description标签</h3>
        <p className="text-gray-700 leading-relaxed">搜索结果中标题下方的描述文字。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          {'<meta name="description" content="页面描述..." />'}
        </div>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>✅ 长度控制在120-160个字符</p>
          <p>✅ 包含核心关键词（会被加粗显示）</p>
          <p>✅ 写成吸引点击的文案</p>
          <p>✅ 准确描述页面内容</p>
          <p>❌ 不要和其他页面重复</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Open Graph标签（社交分享）</h2>
        <p className="text-gray-700 leading-relaxed">当你的链接被分享到微信、Facebook、Twitter时，OG标签决定了预览卡片的样式。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-xs text-gray-700 space-y-1">
          <p>{'<meta property="og:title" content="页面标题" />'}</p>
          <p>{'<meta property="og:description" content="描述" />'}</p>
          <p>{'<meta property="og:image" content="https://example.com/image.jpg" />'}</p>
          <p>{'<meta property="og:url" content="https://example.com/page" />'}</p>
          <p>{'<meta property="og:type" content="website" />'}</p>
          <p>{'<meta property="og:site_name" content="网站名" />'}</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 og:image 推荐尺寸：1200×630像素，这是大多数平台的最佳显示尺寸。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Twitter Card标签</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-xs text-gray-700 space-y-1">
          <p>{'<meta name="twitter:card" content="summary_large_image" />'}</p>
          <p>{'<meta name="twitter:title" content="标题" />'}</p>
          <p>{'<meta name="twitter:description" content="描述" />'}</p>
          <p>{'<meta name="twitter:image" content="图片URL" />'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">其他重要标签</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-xs text-gray-700 space-y-2">
          <p className="text-gray-500">{'<!-- 视口设置（移动端必须） -->'}</p>
          <p>{'<meta name="viewport" content="width=device-width, initial-scale=1.0" />'}</p>
          <p className="text-gray-500 mt-2">{'<!-- 规范链接（避免重复内容） -->'}</p>
          <p>{'<link rel="canonical" href="https://example.com/page" />'}</p>
          <p className="text-gray-500 mt-2">{'<!-- 语言声明 -->'}</p>
          <p>{'<html lang="zh-CN">'}</p>
          <p className="text-gray-500 mt-2">{'<!-- 禁止索引（如需要） -->'}</p>
          <p>{'<meta name="robots" content="noindex, nofollow" />'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">完整模板</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-xs text-gray-700 space-y-1">
          <p>{'<meta charset="UTF-8" />'}</p>
          <p>{'<meta name="viewport" content="width=device-width, initial-scale=1.0" />'}</p>
          <p>{'<title>页面标题 - 网站名</title>'}</p>
          <p>{'<meta name="description" content="50-160字的页面描述" />'}</p>
          <p>{'<link rel="canonical" href="https://example.com/page" />'}</p>
          <p>{'<meta property="og:title" content="页面标题" />'}</p>
          <p>{'<meta property="og:description" content="描述" />'}</p>
          <p>{'<meta property="og:image" content="1200x630图片" />'}</p>
          <p>{'<meta name="twitter:card" content="summary_large_image" />'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线生成工具</h2>
        <p className="text-gray-700 leading-relaxed">手写Meta标签容易遗漏？用我们的 <Link href="/meta-tag" className="text-blue-500 hover:underline font-medium">Meta标签在线生成器</Link>，填写表单自动生成完整的Meta标签代码，包含OG和Twitter Card，还有Google搜索预览。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多SEO工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
