import Link from 'next/link'

export default function FaviconDesignGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Favicon设计指南：让你的网站图标脱颖而出</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">Favicon是浏览器标签页上那个小图标，虽然只有16×16到32×32像素，却是用户对你网站的第一印象。一个好的Favicon能让用户在几十个标签页中一眼找到你的网站。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Favicon的尺寸规范</h2>
        <p className="text-gray-700 leading-relaxed">不同平台需要不同尺寸的图标：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>尺寸</span><span>用途</span><span>格式</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>16×16</span><span>浏览器标签页</span><span>.ico / .png</span>
            <span>32×32</span><span>任务栏/书签</span><span>.ico / .png</span>
            <span>180×180</span><span>Apple Touch Icon</span><span>.png</span>
            <span>192×192</span><span>Android Chrome</span><span>.png</span>
            <span>512×512</span><span>PWA启动画面</span><span>.png</span>
            <span>SVG</span><span>现代浏览器</span><span>.svg</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">设计原则</h2>
        <p className="text-gray-700 leading-relaxed">在极小的画布上做设计，需要遵循一些特殊原则：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 极简至上 — 16px内只能容纳一个核心元素，去掉所有细节</p>
          <p>2. 高对比度 — 确保在浅色和深色标签栏上都清晰可见</p>
          <p>3. 品牌一致 — 使用品牌主色，让用户一眼认出</p>
          <p>4. 避免文字 — 除非是单个字母（如Google的G），否则文字在小尺寸下不可读</p>
          <p>5. 测试暗色模式 — 现在很多用户使用深色主题，确保图标不会消失</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HTML引入方式</h2>
        <p className="text-gray-700 leading-relaxed">在HTML的head标签中添加以下代码：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">{'<!-- 基础favicon -->'}</p>
            <p>{'<link rel="icon" href="/favicon.ico" sizes="32x32">'}</p>
          </div>
          <div>
            <p className="text-gray-500">{'<!-- SVG favicon（推荐，支持暗色模式） -->'}</p>
            <p>{'<link rel="icon" href="/icon.svg" type="image/svg+xml">'}</p>
          </div>
          <div>
            <p className="text-gray-500">{'<!-- Apple Touch Icon -->'}</p>
            <p>{'<link rel="apple-touch-icon" href="/apple-touch-icon.png">'}</p>
          </div>
          <div>
            <p className="text-gray-500">{'<!-- Web Manifest（PWA） -->'}</p>
            <p>{'<link rel="manifest" href="/manifest.json">'}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SVG Favicon的优势</h2>
        <p className="text-gray-700 leading-relaxed">SVG格式的Favicon是2026年的最佳选择：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 矢量图形，任意缩放不失真</p>
          <p>✅ 文件体积小，通常不到1KB</p>
          <p>✅ 支持CSS媒体查询，可适配暗色模式</p>
          <p>✅ 所有现代浏览器都支持</p>
        </div>
        <p className="text-gray-700 leading-relaxed">SVG Favicon支持暗色模式的示例：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>{'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">'}</p>
          <p>{'  <style>'}</p>
          <p>{'    circle { fill: #3B82F6; }'}</p>
          <p>{'    @media (prefers-color-scheme: dark) {'}</p>
          <p>{'      circle { fill: #60A5FA; }'}</p>
          <p>{'    }'}</p>
          <p>{'  </style>'}</p>
          <p>{'  <circle cx="16" cy="16" r="14"/>'}</p>
          <p>{'</svg>'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见错误</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>❌ 直接缩小Logo当Favicon — Logo的细节在16px下全糊了</p>
          <p>❌ 使用透明背景+浅色图标 — 在浅色标签栏上看不见</p>
          <p>❌ 只提供一个尺寸 — 不同设备需要不同尺寸</p>
          <p>❌ 忘记apple-touch-icon — iOS用户添加到主屏幕时会显示空白</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">制作流程建议</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 先在512×512画布上设计，确保图形清晰</p>
          <p>2. 缩小到32×32和16×16预览，调整细节</p>
          <p>3. 导出SVG版本作为主Favicon</p>
          <p>4. 生成各尺寸PNG用于兼容</p>
          <p>5. 用.ico格式打包16和32尺寸作为后备</p>
          <p>6. 在不同浏览器和设备上测试</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速生成Favicon？试试我们的 <Link href="/favicon-generator" className="text-blue-500 hover:underline font-medium">Favicon生成器</Link>，上传图片自动生成所有尺寸的Favicon文件。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
