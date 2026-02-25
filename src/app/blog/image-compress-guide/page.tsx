import Link from 'next/link'

export default function ImageCompressGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">如何压缩图片不损失画质？图片压缩完全指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">图片是网页中最大的资源消耗。一张未压缩的照片可能有5-10MB，而压缩后只需要200-500KB，体积减少90%以上，肉眼几乎看不出区别。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么要压缩图片？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>加快网页加载</strong> — 图片占网页总大小的60-70%，压缩后加载速度显著提升</li>
          <li><strong>提升SEO排名</strong> — Google将页面速度作为排名因素</li>
          <li><strong>节省带宽</strong> — 减少服务器流量成本</li>
          <li><strong>改善用户体验</strong> — 没人喜欢等待图片加载</li>
          <li><strong>社交媒体限制</strong> — 很多平台有文件大小限制</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">图片格式对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 font-medium text-gray-700 mb-2">
            <span>格式</span><span>适用场景</span><span>透明度</span><span>压缩率</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span className="font-mono">JPEG</span><span>照片</span><span>❌</span><span>⭐⭐⭐</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span className="font-mono">PNG</span><span>图标/截图</span><span>✅</span><span>⭐⭐</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span className="font-mono">WebP</span><span>通用（推荐）</span><span>✅</span><span>⭐⭐⭐⭐</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span className="font-mono">AVIF</span><span>新一代格式</span><span>✅</span><span>⭐⭐⭐⭐⭐</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span className="font-mono">SVG</span><span>矢量图标</span><span>✅</span><span>极小</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">压缩质量怎么选？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>80-90%</strong> — 几乎无损，适合产品图、作品展示</li>
          <li><strong>60-80%</strong> — 轻微损失，适合博客配图、社交媒体（推荐）</li>
          <li><strong>40-60%</strong> — 明显压缩，适合缩略图、预览图</li>
          <li><strong>低于40%</strong> — 画质损失较大，仅适合极端场景</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">最佳实践</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 上传前先压缩，不要依赖平台自动压缩</p>
          <p>✅ 照片用JPEG/WebP，图标用SVG/PNG</p>
          <p>✅ 网页图片宽度一般不超过1920px</p>
          <p>✅ 使用响应式图片（srcset），不同设备加载不同尺寸</p>
          <p>✅ 开启浏览器缓存和CDN加速</p>
          <p>✅ 考虑使用懒加载（loading=lazy）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线压缩工具</h2>
        <p className="text-gray-700 leading-relaxed">我们的 <Link href="/image-compress" className="text-blue-500 hover:underline font-medium">免费图片压缩工具</Link> 特点：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>完全在浏览器本地处理，图片不上传服务器</li>
          <li>自定义压缩质量（10%-100%）</li>
          <li>实时显示压缩前后大小对比</li>
          <li>支持JPG、PNG、WebP格式</li>
          <li>一键下载压缩后的图片</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
