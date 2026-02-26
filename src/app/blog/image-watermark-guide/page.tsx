import Link from 'next/link'

export default function ImageWatermarkGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">图片加水印教程：保护你的原创图片</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">在社交媒体和内容平台时代，图片盗用已经成为创作者面临的普遍问题。加水印是保护原创图片最简单有效的方式之一。本文将介绍水印的类型、最佳实践以及技术实现方法。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">水印的类型</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="font-medium text-gray-700">文字水印</p>
            <p className="text-gray-600">最常见的形式，通常是版权信息、作者名或网站地址。如 "© 2026 作者名" 或 "www.cyunyun.com"。</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">图片水印（Logo）</p>
            <p className="text-gray-600">使用品牌Logo作为水印，辨识度更高，适合企业和专业摄影师。</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">隐形水印（数字水印）</p>
            <p className="text-gray-600">肉眼不可见，嵌入在图片像素数据中。用于版权追踪和法律取证，不影响观看体验。</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">平铺水印</p>
            <p className="text-gray-600">将水印重复铺满整张图片，防止裁剪去除。常见于预览图和付费素材。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">水印位置选择</h2>
        <p className="text-gray-700 leading-relaxed">水印放在哪里直接影响保护效果和观看体验：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>位置</span><span>优点</span><span>缺点</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>右下角</span><span>最常见，不太影响画面</span><span>容易被裁剪</span>
            <span>中心位置</span><span>难以去除</span><span>影响观看体验</span>
            <span>平铺全图</span><span>最难去除</span><span>严重影响画面</span>
            <span>关键区域</span><span>保护重点内容</span><span>需要手动调整</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium">💡 最佳实践：</p>
          <p>将水印放在画面的关键区域（如人物面部附近、产品主体上），而不是空白角落。这样即使裁剪也无法完全去除。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">水印设计原则</h2>
        <p className="text-gray-700 leading-relaxed">好的水印应该在保护和美观之间取得平衡：</p>
        <p className="text-gray-700 leading-relaxed">1. 透明度控制在 30%-50%，既可见又不喧宾夺主。</p>
        <p className="text-gray-700 leading-relaxed">2. 字体选择简洁清晰的无衬线字体，避免花哨字体。</p>
        <p className="text-gray-700 leading-relaxed">3. 颜色建议使用白色或黑色，配合透明度适应不同背景。</p>
        <p className="text-gray-700 leading-relaxed">4. 大小适中，一般占图片宽度的 10%-20%。</p>
        <p className="text-gray-700 leading-relaxed">5. 包含关键信息：作者名/品牌名、版权符号©、年份。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Canvas API 实现水印</h2>
        <p className="text-gray-700 leading-relaxed">在浏览器中使用 Canvas API 可以轻松给图片添加文字水印：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 给图片添加文字水印</p>
          <p>function addWatermark(img, text) &#123;</p>
          <p>  const canvas = document.createElement(&apos;canvas&apos;)</p>
          <p>  canvas.width = img.width</p>
          <p>  canvas.height = img.height</p>
          <p>  const ctx = canvas.getContext(&apos;2d&apos;)</p>
          <p>&nbsp;</p>
          <p>  <span className="text-gray-500">// 绘制原图</span></p>
          <p>  ctx.drawImage(img, 0, 0)</p>
          <p>&nbsp;</p>
          <p>  <span className="text-gray-500">// 设置水印样式</span></p>
          <p>  ctx.font = &apos;24px Arial&apos;</p>
          <p>  ctx.fillStyle = &apos;rgba(255,255,255,0.4)&apos;</p>
          <p>  ctx.textAlign = &apos;right&apos;</p>
          <p>&nbsp;</p>
          <p>  <span className="text-gray-500">// 右下角绘制水印</span></p>
          <p>  ctx.fillText(text, canvas.width - 20,</p>
          <p>    canvas.height - 20)</p>
          <p>&nbsp;</p>
          <p>  return canvas.toDataURL(&apos;image/png&apos;)</p>
          <p>&#125;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">平铺水印实现</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 平铺水印 - 更强的保护</p>
          <p>function addTiledWatermark(img, text) &#123;</p>
          <p>  const canvas = document.createElement(&apos;canvas&apos;)</p>
          <p>  canvas.width = img.width</p>
          <p>  canvas.height = img.height</p>
          <p>  const ctx = canvas.getContext(&apos;2d&apos;)</p>
          <p>  ctx.drawImage(img, 0, 0)</p>
          <p>&nbsp;</p>
          <p>  ctx.font = &apos;18px Arial&apos;</p>
          <p>  ctx.fillStyle = &apos;rgba(255,255,255,0.3)&apos;</p>
          <p>  ctx.rotate(-Math.PI / 6) <span className="text-gray-500">// 旋转-30°</span></p>
          <p>&nbsp;</p>
          <p>  for (let y = -canvas.height; y &lt; canvas.height * 2; y += 100) &#123;</p>
          <p>    for (let x = -canvas.width; x &lt; canvas.width * 2; x += 200) &#123;</p>
          <p>      ctx.fillText(text, x, y)</p>
          <p>    &#125;</p>
          <p>  &#125;</p>
          <p>  return canvas.toDataURL(&apos;image/png&apos;)</p>
          <p>&#125;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">水印被去除怎么办？</h2>
        <p className="text-gray-700 leading-relaxed">即使加了水印，仍有被去除的风险。以下是额外的保护措施：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 保留原始无水印文件作为版权证据</p>
          <p>2. 发布前记录图片的 EXIF 信息和创建时间</p>
          <p>3. 使用图片搜索引擎（如 Google 以图搜图）定期检查盗用</p>
          <p>4. 在图片元数据中嵌入版权信息</p>
          <p>5. 考虑使用数字水印技术作为隐形保护层</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速给图片加水印？试试我们的 <Link href="/image-watermark" className="text-blue-500 hover:underline font-medium">免费在线图片水印工具</Link>，支持文字水印和平铺水印，所有处理在浏览器本地完成，不上传服务器。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
