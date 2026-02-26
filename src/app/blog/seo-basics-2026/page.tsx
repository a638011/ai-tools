import Link from 'next/link'

export default function SeoBasics2026() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">2026 SEO入门指南：搜索引擎优化基础知识</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">SEO（Search Engine Optimization，搜索引擎优化）是让你的网站在搜索结果中排名更高的技术和策略。2026年，随着AI搜索和语义理解的发展，SEO的玩法也在不断演变。本文带你从零开始了解SEO的核心概念和实操方法。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">搜索引擎的工作原理</h2>
        <p className="text-gray-700 leading-relaxed">理解SEO之前，先了解搜索引擎是怎么工作的：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 爬取（Crawling）→ 搜索引擎的爬虫（如 Googlebot）访问网页，读取内容</p>
          <p>2. 索引（Indexing）→ 将网页内容存入数据库，建立倒排索引</p>
          <p>3. 排名（Ranking）→ 用户搜索时，根据相关性和质量对结果排序</p>
          <p>4. 展示（Serving）→ 将排序后的结果呈现给用户</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SEO的三大支柱</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="font-medium text-blue-600">技术SEO（Technical SEO）</p>
            <p className="text-gray-600">确保搜索引擎能正确爬取和索引你的网站：网站速度、移动适配、结构化数据、sitemap等。</p>
          </div>
          <div>
            <p className="font-medium text-blue-600">内容SEO（On-Page SEO）</p>
            <p className="text-gray-600">优化页面内容和HTML元素：标题、关键词、内容质量、内部链接等。</p>
          </div>
          <div>
            <p className="font-medium text-blue-600">站外SEO（Off-Page SEO）</p>
            <p className="text-gray-600">提升网站权威性：外部链接、社交媒体、品牌提及等。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">关键词研究</h2>
        <p className="text-gray-700 leading-relaxed">关键词是SEO的起点。你需要找到用户实际搜索的词，而不是你以为他们会搜的词。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>关键词类型</span><span>示例</span><span>特点</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>短尾词</span><span>JSON格式化</span><span>搜索量大，竞争激烈</span>
            <span>长尾词</span><span>在线JSON格式化工具免费</span><span>搜索量小，转化率高</span>
            <span>问题词</span><span>JSON格式化怎么用</span><span>适合写教程内容</span>
            <span>品牌词</span><span>cyunyun工具箱</span><span>精准流量，竞争小</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium">💡 2026年关键词策略：</p>
          <p className="mt-1">重点布局长尾词和问题词。AI搜索时代，用户的搜索越来越像自然语言提问，长尾词的价值在上升。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">页面优化要素</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">&lt;!-- 标题标签：最重要的SEO元素 --&gt;</p>
          <p>&lt;title&gt;在线JSON格式化工具 - 免费JSON校验美化 | cyunyun&lt;/title&gt;</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">&lt;!-- Meta描述：影响点击率 --&gt;</p>
          <p>&lt;meta name=&quot;description&quot; content=&quot;免费在线JSON</p>
          <p>格式化工具，支持JSON校验、美化、压缩。粘贴即用，</p>
          <p>无需注册。&quot; /&gt;</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">&lt;!-- 标题层级：H1只用一个 --&gt;</p>
          <p>&lt;h1&gt;在线JSON格式化工具&lt;/h1&gt;</p>
          <p>&lt;h2&gt;什么是JSON？&lt;/h2&gt;</p>
          <p>&lt;h2&gt;如何使用&lt;/h2&gt;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">技术SEO清单</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>□ 网站加载速度 &lt; 3秒（Core Web Vitals达标）</p>
          <p>□ 移动端适配（响应式设计）</p>
          <p>□ HTTPS加密</p>
          <p>□ 提交 sitemap.xml 到搜索引擎</p>
          <p>□ 配置 robots.txt</p>
          <p>□ 无死链（404页面）</p>
          <p>□ URL结构清晰（如 /blog/seo-basics 而非 /p?id=123）</p>
          <p>□ 添加结构化数据（Schema.org）</p>
          <p>□ 图片压缩和懒加载</p>
          <p>□ 使用 canonical 标签避免重复内容</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">内容质量标准（E-E-A-T）</h2>
        <p className="text-gray-700 leading-relaxed">Google 用 E-E-A-T 标准评估内容质量：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">Experience</code><span className="text-gray-600">经验 — 作者是否有实际经验</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">Expertise</code><span className="text-gray-600">专业性 — 内容是否专业准确</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">Authoritativeness</code><span className="text-gray-600">权威性 — 网站和作者是否被认可</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">Trustworthiness</code><span className="text-gray-600">可信度 — 信息是否准确可靠</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2026年SEO新趋势</h2>
        <p className="text-gray-700 leading-relaxed">1. AI搜索整合。Google SGE 和百度AI搜索改变了搜索结果的展示方式，优化内容需要考虑AI摘要的抓取。</p>
        <p className="text-gray-700 leading-relaxed">2. 语音搜索优化。越来越多用户通过语音助手搜索，内容要更口语化、更直接回答问题。</p>
        <p className="text-gray-700 leading-relaxed">3. 视频SEO。短视频平台的搜索量持续增长，视频内容的SEO价值越来越高。</p>
        <p className="text-gray-700 leading-relaxed">4. 用户体验信号。Core Web Vitals（LCP、FID、CLS）作为排名因素的权重在增加。</p>
        <p className="text-gray-700 leading-relaxed">5. 零点击搜索。越来越多搜索在结果页直接给出答案，争取精选摘要（Featured Snippet）位置变得更重要。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">免费SEO工具推荐</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-36">Google Search Console</code><span className="text-gray-600">监控网站在Google搜索中的表现</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-36">百度搜索资源平台</code><span className="text-gray-600">百度收录和流量分析</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-36">Google PageSpeed</code><span className="text-gray-600">网站速度和性能检测</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-36">Lighthouse</code><span className="text-gray-600">综合性能、SEO、无障碍审计</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想提升网站的SEO表现？我们提供多种对SEO友好的 <Link href="/" className="text-blue-500 hover:underline font-medium">免费在线工具</Link>，每个工具页面都经过SEO优化，也可以作为你学习SEO的参考案例。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
