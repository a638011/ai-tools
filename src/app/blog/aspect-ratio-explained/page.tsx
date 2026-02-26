import Link from 'next/link'

export default function AspectRatioExplained() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">常见宽高比详解：16:9、4:3、21:9有什么区别？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">买显示器时看到16:9和21:9，拍视频时纠结横屏还是竖屏，做网页时图片被拉伸变形……这些问题都和宽高比（Aspect Ratio）有关。搞懂宽高比，你就能在设计、摄影、视频制作中做出更好的选择。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是宽高比？</h2>
        <p className="text-gray-700 leading-relaxed">宽高比是图像或屏幕的宽度与高度的比例关系，通常写成 <code className="bg-gray-100 px-1 rounded text-sm">宽:高</code>。比如16:9表示宽度是高度的16/9≈1.78倍。</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 宽高比描述的是比例关系，不是实际尺寸。1920×1080和3840×2160都是16:9，只是分辨率不同。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见宽高比一览</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 font-medium text-gray-700 mb-2">
            <span>宽高比</span><span>小数值</span><span>常见分辨率</span><span>用途</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>1:1</span><span>1.0</span><span>1080×1080</span><span>Instagram帖子、头像</span>
            <span>4:3</span><span>1.33</span><span>1024×768</span><span>老式电视、iPad</span>
            <span>3:2</span><span>1.5</span><span>1440×960</span><span>单反相机照片</span>
            <span>16:9</span><span>1.78</span><span>1920×1080</span><span>电视、显示器、YouTube</span>
            <span>16:10</span><span>1.6</span><span>1920×1200</span><span>MacBook、部分笔记本</span>
            <span>21:9</span><span>2.33</span><span>2560×1080</span><span>超宽显示器、电影</span>
            <span>32:9</span><span>3.56</span><span>5120×1440</span><span>超超宽显示器</span>
            <span>9:16</span><span>0.56</span><span>1080×1920</span><span>手机竖屏、抖音/TikTok</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16:9 — 当今的标准</h2>
        <p className="text-gray-700 leading-relaxed">16:9是目前最主流的宽高比，几乎所有电视、显示器和在线视频平台都采用这个比例。常见分辨率：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 1280×720 — HD（720p）</p>
          <p>• 1920×1080 — Full HD（1080p）</p>
          <p>• 2560×1440 — QHD/2K</p>
          <p>• 3840×2160 — 4K UHD</p>
          <p>• 7680×4320 — 8K UHD</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4:3 — 经典比例</h2>
        <p className="text-gray-700 leading-relaxed">4:3是CRT电视和早期计算机显示器的标准比例。虽然在显示器领域已被16:9取代，但在某些场景仍然活跃：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• iPad（非Pro版本）</p>
          <p>• PPT演示文稿（传统格式）</p>
          <p>• 部分安防摄像头</p>
          <p>• 复古风格设计</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">21:9 — 电影级体验</h2>
        <p className="text-gray-700 leading-relaxed">21:9接近电影院的2.39:1画面比例，超宽显示器采用这个比例。优势是沉浸感强，适合电影观看和多窗口工作。缺点是很多视频内容仍是16:9，会有黑边。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">社交媒体推荐尺寸</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>平台</span><span>推荐尺寸</span><span>宽高比</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>微信公众号封面</span><span>900×383</span><span>2.35:1</span>
            <span>微博配图</span><span>1080×1080</span><span>1:1</span>
            <span>抖音/TikTok</span><span>1080×1920</span><span>9:16</span>
            <span>B站视频</span><span>1920×1080</span><span>16:9</span>
            <span>小红书</span><span>1080×1440</span><span>3:4</span>
            <span>Twitter/X头图</span><span>1500×500</span><span>3:1</span>
            <span>YouTube缩略图</span><span>1280×720</span><span>16:9</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">CSS中的宽高比</h2>
        <p className="text-gray-700 leading-relaxed">CSS提供了<code className="bg-gray-100 px-1 rounded text-sm">aspect-ratio</code>属性，轻松控制元素的宽高比：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <div>
            <p className="text-gray-500">/* 现代写法（推荐） */</p>
            <p>.video-container {'{'}</p>
            <p>  width: 100%;</p>
            <p>  aspect-ratio: 16 / 9;</p>
            <p>{'}'}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 正方形 */</p>
            <p>.avatar {'{'}</p>
            <p>  width: 100px;</p>
            <p>  aspect-ratio: 1;</p>
            <p>  border-radius: 50%;</p>
            <p>{'}'}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 图片裁剪保持比例 */</p>
            <p>.thumbnail {'{'}</p>
            <p>  aspect-ratio: 3 / 2;</p>
            <p>  object-fit: cover;  /* 裁剪填充，不变形 */</p>
            <p>{'}'}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">如何计算宽高比</h2>
        <p className="text-gray-700 leading-relaxed">给定分辨率，求最简宽高比：找宽和高的最大公约数（GCD），然后分别除以它。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 1920 × 1080</p>
          <p className="text-gray-500">// GCD(1920, 1080) = 120</p>
          <p className="text-gray-500">// 1920/120 : 1080/120 = 16:9</p>
          <p></p>
          <p>function gcd(a, b) {'{'}</p>
          <p>  return b === 0 ? a : gcd(b, a % b);</p>
          <p>{'}'}</p>
          <p>function aspectRatio(w, h) {'{'}</p>
          <p>  const d = gcd(w, h);</p>
          <p>  return `${'{'}w/d{'}'}:${'{'}h/d{'}'}`;</p>
          <p>{'}'}</p>
          <p>aspectRatio(1920, 1080); // &quot;16:9&quot;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要计算或转换宽高比？试试我们的 <Link href="/aspect-ratio-calculator" className="text-blue-500 hover:underline font-medium">宽高比计算器</Link>，输入任意两个值自动计算第三个。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
