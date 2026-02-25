import Link from 'next/link'

export default function DevToolsCollection() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">2026年程序员必备在线工具合集：40+免费开发者工具</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">作为程序员，我们每天都在和各种数据格式、编码转换、文本处理打交道。这里整理了40+免费在线工具，全部无需注册、无需安装，打开浏览器就能用。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🛠️ 数据格式工具</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><Link href="/json-formatter" className="text-blue-500 hover:underline">JSON格式化</Link> — 格式化、压缩、验证JSON数据</li>
          <li><Link href="/json-csv" className="text-blue-500 hover:underline">JSON↔CSV转换</Link> — JSON数组与CSV表格互转</li>
          <li><Link href="/sql-formatter" className="text-blue-500 hover:underline">SQL格式化</Link> — SQL语句格式化、压缩、关键词大写</li>
          <li><Link href="/base64" className="text-blue-500 hover:underline">Base64编解码</Link> — 文本与Base64互转</li>
          <li><Link href="/url-encode" className="text-blue-500 hover:underline">URL编解码</Link> — URL特殊字符编码解码</li>
          <li><Link href="/html-entity" className="text-blue-500 hover:underline">HTML实体编解码</Link> — HTML特殊字符转换</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🔐 安全与加密</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><Link href="/hash" className="text-blue-500 hover:underline">Hash生成器</Link> — MD5/SHA-1/SHA-256/SHA-512</li>
          <li><Link href="/jwt-decoder" className="text-blue-500 hover:underline">JWT解码器</Link> — 解析JWT Token的Header和Payload</li>
          <li><Link href="/password-gen" className="text-blue-500 hover:underline">密码生成器</Link> — 生成安全随机密码</li>
          <li><Link href="/uuid" className="text-blue-500 hover:underline">UUID生成器</Link> — 批量生成UUID v4</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">📝 文本处理</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><Link href="/regex" className="text-blue-500 hover:underline">正则表达式测试</Link> — 实时高亮匹配，常用模板</li>
          <li><Link href="/text-diff" className="text-blue-500 hover:underline">文本对比</Link> — 两段文本差异对比</li>
          <li><Link href="/word-count" className="text-blue-500 hover:underline">字数统计</Link> — 字符数、词数、行数统计</li>
          <li><Link href="/string-case" className="text-blue-500 hover:underline">字符串格式转换</Link> — camelCase/snake_case互转</li>
          <li><Link href="/text-case" className="text-blue-500 hover:underline">大小写转换</Link> — 大写/小写/首字母大写</li>
          <li><Link href="/markdown" className="text-blue-500 hover:underline">Markdown预览</Link> — 实时编辑预览Markdown</li>
          <li><Link href="/md-to-html" className="text-blue-500 hover:underline">Markdown转HTML</Link> — Markdown转HTML代码</li>
          <li><Link href="/lorem" className="text-blue-500 hover:underline">Lorem Ipsum</Link> — 生成占位文本</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🎨 设计与CSS</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><Link href="/color-converter" className="text-blue-500 hover:underline">颜色转换器</Link> — HEX/RGB/HSL互转</li>
          <li><Link href="/gradient" className="text-blue-500 hover:underline">CSS渐变生成器</Link> — 可视化生成渐变代码</li>
          <li><Link href="/box-shadow" className="text-blue-500 hover:underline">Box Shadow生成器</Link> — 可视化生成阴影效果</li>
          <li><Link href="/border-radius" className="text-blue-500 hover:underline">Border Radius生成器</Link> — 可视化生成圆角</li>
          <li><Link href="/css-units" className="text-blue-500 hover:underline">CSS单位转换</Link> — px/rem/em/vw互转</li>
          <li><Link href="/meta-tag" className="text-blue-500 hover:underline">Meta标签生成器</Link> — 生成SEO友好的meta标签</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🖼️ 图片工具</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><Link href="/image-compress" className="text-blue-500 hover:underline">图片压缩</Link> — 在线压缩图片，自定义质量</li>
          <li><Link href="/image-base64" className="text-blue-500 hover:underline">图片Base64转换</Link> — 图片与Data URL互转</li>
          <li><Link href="/qrcode" className="text-blue-500 hover:underline">二维码生成器</Link> — 生成自定义二维码</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">📄 PDF工具</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><Link href="/pdf-merge" className="text-blue-500 hover:underline">PDF合并</Link> — 多个PDF合为一个</li>
          <li><Link href="/pdf-compress" className="text-blue-500 hover:underline">PDF压缩</Link> — 减小PDF文件体积</li>
          <li><Link href="/image-to-pdf" className="text-blue-500 hover:underline">图片转PDF</Link> — 多张图片生成PDF</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🔢 其他实用工具</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><Link href="/timestamp" className="text-blue-500 hover:underline">时间戳转换</Link> — Unix时间戳与日期互转</li>
          <li><Link href="/number-base" className="text-blue-500 hover:underline">进制转换</Link> — 十/十六/二/八进制互转</li>
          <li><Link href="/cron-parser" className="text-blue-500 hover:underline">Cron表达式解析</Link> — 解析定时任务表达式</li>
          <li><Link href="/ip-lookup" className="text-blue-500 hover:underline">IP地址查询</Link> — 查询IP地理位置</li>
          <li><Link href="/emoji" className="text-blue-500 hover:underline">Emoji搜索</Link> — 搜索并复制Emoji</li>
        </ul>

        <div className="bg-blue-50 rounded-xl p-4 my-8 text-sm text-gray-700">
          <p className="font-medium mb-2">💡 所有工具的特点：</p>
          <p>✅ 完全免费，无需注册</p>
          <p>✅ 浏览器本地处理，数据不上传</p>
          <p>✅ 支持5种语言（中/英/日/韩/西）</p>
          <p>✅ 手机端完美适配</p>
        </div>

        <p className="text-gray-700 leading-relaxed">收藏 <Link href="/" className="text-blue-500 hover:underline font-medium">www.cyunyun.com</Link>，持续更新更多实用工具。</p>
      </article>
    </main>
  )
}
