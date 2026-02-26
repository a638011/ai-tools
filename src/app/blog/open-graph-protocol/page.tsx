import Link from 'next/link'

export default function OpenGraphProtocol() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Open Graph协议详解：让你的网页在社交媒体上好看</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">当你在微信、Twitter或Facebook分享一个链接时，有些链接会显示漂亮的标题、描述和图片预览，而有些只显示一个光秃秃的URL。这背后的秘密就是Open Graph协议（简称OG协议）。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是Open Graph协议？</h2>
        <p className="text-gray-700 leading-relaxed">Open Graph协议最初由Facebook在2010年推出，它通过在HTML的 <code className="bg-gray-100 px-1 rounded text-sm">&lt;head&gt;</code> 中添加特定的 <code className="bg-gray-100 px-1 rounded text-sm">&lt;meta&gt;</code> 标签，告诉社交媒体平台如何展示你的网页。现在几乎所有社交平台都支持OG协议，包括微信、微博、Twitter、LinkedIn等。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">四个必需的OG标签</h2>
        <p className="text-gray-700 leading-relaxed">OG协议定义了四个必需属性：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p>&lt;meta property="og:title" content="页面标题" /&gt;</p>
          <p>&lt;meta property="og:type" content="website" /&gt;</p>
          <p>&lt;meta property="og:url" content="https://example.com/page" /&gt;</p>
          <p>&lt;meta property="og:image" content="https://example.com/image.jpg" /&gt;</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">og:title</code><span className="text-gray-600">分享时显示的标题，建议60字符以内</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">og:type</code><span className="text-gray-600">内容类型：website、article、video等</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">og:url</code><span className="text-gray-600">页面的规范URL</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">og:image</code><span className="text-gray-600">预览图片URL，建议1200×630像素</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用的可选标签</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p>&lt;meta property="og:description" content="页面描述，150字以内" /&gt;</p>
          <p>&lt;meta property="og:site_name" content="网站名称" /&gt;</p>
          <p>&lt;meta property="og:locale" content="zh_CN" /&gt;</p>
          <p>&lt;meta property="og:image:width" content="1200" /&gt;</p>
          <p>&lt;meta property="og:image:height" content="630" /&gt;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">完整示例：博客文章</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>&lt;head&gt;</p>
          <p className="pl-4">&lt;meta property="og:title" content="如何学习编程" /&gt;</p>
          <p className="pl-4">&lt;meta property="og:type" content="article" /&gt;</p>
          <p className="pl-4">&lt;meta property="og:url" content="https://myblog.com/learn-coding" /&gt;</p>
          <p className="pl-4">&lt;meta property="og:image" content="https://myblog.com/images/coding.jpg" /&gt;</p>
          <p className="pl-4">&lt;meta property="og:description" content="零基础学编程的完整路线图" /&gt;</p>
          <p className="pl-4">&lt;meta property="og:site_name" content="我的博客" /&gt;</p>
          <p className="pl-4">&lt;meta property="article:published_time" content="2026-02-15" /&gt;</p>
          <p className="pl-4">&lt;meta property="article:author" content="张三" /&gt;</p>
          <p>&lt;/head&gt;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Twitter Cards</h2>
        <p className="text-gray-700 leading-relaxed">Twitter有自己的一套meta标签（Twitter Cards），但也会回退读取OG标签。建议两者都加：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p>&lt;meta name="twitter:card" content="summary_large_image" /&gt;</p>
          <p>&lt;meta name="twitter:title" content="页面标题" /&gt;</p>
          <p>&lt;meta name="twitter:description" content="页面描述" /&gt;</p>
          <p>&lt;meta name="twitter:image" content="https://example.com/image.jpg" /&gt;</p>
        </div>
        <p className="text-gray-700 leading-relaxed">Twitter Card类型包括：<code className="bg-gray-100 px-1 rounded text-sm">summary</code>（小图）、<code className="bg-gray-100 px-1 rounded text-sm">summary_large_image</code>（大图）、<code className="bg-gray-100 px-1 rounded text-sm">player</code>（视频）。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">OG图片最佳实践</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>📐 推荐尺寸：1200 × 630 像素（1.91:1比例）</p>
          <p>📦 文件大小：控制在1MB以内，推荐200-500KB</p>
          <p>🖼️ 格式：JPG或PNG，避免SVG和GIF</p>
          <p>📝 文字区域：重要文字放在图片中心，避免被裁切</p>
          <p>🔗 使用绝对URL，不要用相对路径</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">微信分享的特殊处理</h2>
        <p className="text-gray-700 leading-relaxed">微信分享有一些特殊要求：图片建议正方形（300×300），需要通过微信JS-SDK的 <code className="bg-gray-100 px-1 rounded text-sm">wx.updateAppMessageShareData</code> 接口设置分享信息。不过微信也会读取OG标签作为回退。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">如何调试OG标签？</h2>
        <p className="text-gray-700 leading-relaxed">各平台提供了调试工具：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-24">Facebook</span><span className="text-gray-600">Sharing Debugger（developers.facebook.com/tools/debug）</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-24">Twitter</span><span className="text-gray-600">Card Validator（cards-dev.twitter.com/validator）</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-24">LinkedIn</span><span className="text-gray-600">Post Inspector（linkedin.com/post-inspector）</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">修改OG标签后，社交平台可能会缓存旧数据。使用上述工具可以强制刷新缓存。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Next.js中设置OG标签</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// app/layout.tsx 或 page.tsx</p>
          <p>{"export const metadata = {"}</p>
          <p className="pl-4">{"openGraph: {"}</p>
          <p className="pl-8">{"title: '页面标题',"}</p>
          <p className="pl-8">{"description: '页面描述',"}</p>
          <p className="pl-8">{"images: ['https://example.com/og.jpg'],"}</p>
          <p className="pl-4">{"},"}</p>
          <p>{"}"}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想快速生成OG标签？试试我们的 <Link href="/og-meta-generator" className="text-blue-500 hover:underline font-medium">Open Graph Meta标签生成器</Link>，填写信息即可一键生成完整的meta标签代码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
