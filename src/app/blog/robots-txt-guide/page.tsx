import Link from 'next/link'

export default function RobotsTxtGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">robots.txt完全指南：控制搜索引擎爬虫</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">robots.txt是网站根目录下的一个纯文本文件，它告诉搜索引擎爬虫哪些页面可以抓取、哪些不可以。虽然只是一个简单的文本文件，但配置不当可能导致网站从搜索结果中消失，或者敏感目录被索引。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">robots.txt的基本语法</h2>
        <p className="text-gray-700 leading-relaxed">robots.txt文件必须放在网站根目录，通过 <code className="bg-gray-100 px-1 rounded text-sm">https://yoursite.com/robots.txt</code> 访问。基本语法非常简单：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 这是注释</p>
          <p>User-agent: *</p>
          <p>Disallow: /private/</p>
          <p>Allow: /public/</p>
          <p></p>
          <p>Sitemap: https://yoursite.com/sitemap.xml</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">指令详解</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">User-agent</code><span className="text-gray-600">指定规则适用的爬虫，*表示所有爬虫</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">Disallow</code><span className="text-gray-600">禁止抓取的路径</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">Allow</code><span className="text-gray-600">允许抓取的路径（用于覆盖Disallow）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">Sitemap</code><span className="text-gray-600">指定站点地图的URL</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">Crawl-delay</code><span className="text-gray-600">爬取间隔秒数（部分爬虫支持）</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见配置示例</h2>
        <p className="text-gray-700 leading-relaxed font-medium">允许所有爬虫抓取所有内容：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>User-agent: *</p>
          <p>Disallow:</p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-4">禁止所有爬虫抓取整个网站：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>User-agent: *</p>
          <p>Disallow: /</p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-4">禁止特定目录，允许其中某个子目录：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>User-agent: *</p>
          <p>Disallow: /admin/</p>
          <p>Disallow: /tmp/</p>
          <p>Disallow: /api/</p>
          <p>Allow: /api/docs/</p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium mt-4">针对不同爬虫设置不同规则：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>User-agent: Googlebot</p>
          <p>Disallow: /nogoogle/</p>
          <p>Crawl-delay: 1</p>
          <p></p>
          <p>User-agent: Baiduspider</p>
          <p>Disallow: /nobaidu/</p>
          <p>Crawl-delay: 5</p>
          <p></p>
          <p>User-agent: *</p>
          <p>Disallow: /private/</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">通配符用法</h2>
        <p className="text-gray-700 leading-relaxed">Google和Bing支持通配符（非标准但广泛支持）：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500"># * 匹配任意字符序列</p>
          <p>Disallow: /*.pdf$    <span className="text-gray-400"># 禁止所有PDF文件</span></p>
          <p>Disallow: /*?sort=   <span className="text-gray-400"># 禁止含sort参数的URL</span></p>
          <p>Disallow: /*/temp    <span className="text-gray-400"># 禁止任意路径下的temp</span></p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见搜索引擎爬虫名称</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <code className="font-mono">Googlebot</code><span>Google搜索</span>
            <code className="font-mono">Baiduspider</code><span>百度搜索</span>
            <code className="font-mono">bingbot</code><span>Bing搜索</span>
            <code className="font-mono">Sogou web spider</code><span>搜狗搜索</span>
            <code className="font-mono">360Spider</code><span>360搜索</span>
            <code className="font-mono">YandexBot</code><span>Yandex搜索</span>
            <code className="font-mono">GPTBot</code><span>OpenAI爬虫</span>
            <code className="font-mono">CCBot</code><span>Common Crawl</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">屏蔽AI爬虫</h2>
        <p className="text-gray-700 leading-relaxed">随着AI训练数据需求增加，很多网站选择屏蔽AI爬虫：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 屏蔽常见AI爬虫</p>
          <p>User-agent: GPTBot</p>
          <p>Disallow: /</p>
          <p></p>
          <p>User-agent: CCBot</p>
          <p>Disallow: /</p>
          <p></p>
          <p>User-agent: Google-Extended</p>
          <p>Disallow: /</p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 重要提醒：</p>
          <p>• robots.txt是君子协议，恶意爬虫可能不遵守</p>
          <p>• 不要用robots.txt隐藏敏感信息，它本身是公开可读的</p>
          <p>• Disallow不等于noindex，被禁止抓取的页面仍可能出现在搜索结果中</p>
          <p>• 要完全阻止索引，应使用meta robots标签或X-Robots-Tag</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速生成robots.txt？试试我们的 <Link href="/robots-txt-generator" className="text-blue-500 hover:underline font-medium">robots.txt生成器</Link>，勾选选项即可生成规范的robots.txt文件。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
