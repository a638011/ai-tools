import Link from 'next/link'

export default function CssColorFormats() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS颜色格式详解：HEX、RGB、HSL怎么选？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">CSS中有多种颜色表示方式，每种都有自己的优势。选对格式能让你的代码更清晰、调色更高效。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HEX — 最常用</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>#FF5733 — 6位十六进制</p>
          <p>#F53 — 3位简写（等于 #FF5533）</p>
          <p>#FF573380 — 8位（含透明度）</p>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>优点：最广泛使用，设计稿常用格式，简洁</li>
          <li>缺点：不直观，难以心算调色</li>
          <li>适用：从设计稿复制颜色、品牌色定义</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">RGB / RGBA — 直观的三原色</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>rgb(255, 87, 51) — 红绿蓝各0-255</p>
          <p>rgba(255, 87, 51, 0.5) — 含透明度0-1</p>
          <p>rgb(255 87 51 / 50%) — 新语法</p>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>优点：容易理解三原色混合，透明度直观</li>
          <li>缺点：调亮度和饱和度不方便</li>
          <li>适用：需要透明度的场景、JavaScript动态颜色</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HSL / HSLA — 最适合调色</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>hsl(14, 100%, 60%) — 色相/饱和度/亮度</p>
          <p>hsla(14, 100%, 60%, 0.5) — 含透明度</p>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>H (Hue)</strong> — 色相，0-360度色轮（0红/120绿/240蓝）</li>
          <li><strong>S (Saturation)</strong> — 饱和度，0%灰色 → 100%纯色</li>
          <li><strong>L (Lightness)</strong> — 亮度，0%黑色 → 50%纯色 → 100%白色</li>
        </ul>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 HSL是调色的最佳选择！想要同色系的浅色？只需增加L值。想要柔和版本？降低S值。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实际对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <p className="text-gray-500 mb-2">同一个颜色的三种写法：</p>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded" style={{ background: '#FF5733' }} />
            <code className="font-mono text-gray-700">#FF5733</code>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded" style={{ background: 'rgb(255,87,51)' }} />
            <code className="font-mono text-gray-700">rgb(255, 87, 51)</code>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded" style={{ background: 'hsl(14,100%,60%)' }} />
            <code className="font-mono text-gray-700">hsl(14, 100%, 60%)</code>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">怎么选？</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 从设计稿取色 → <strong>HEX</strong></p>
          <p>✅ 需要透明度 → <strong>RGBA</strong> 或 <strong>HSLA</strong></p>
          <p>✅ 生成色彩系统/调色板 → <strong>HSL</strong>（调H生成不同颜色，调S/L生成变体）</p>
          <p>✅ CSS变量/主题 → <strong>HSL</strong>（方便动态调整）</p>
          <p>✅ JavaScript计算 → <strong>RGB</strong></p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线转换工具</h2>
        <p className="text-gray-700 leading-relaxed">需要在不同颜色格式之间转换？试试我们的 <Link href="/color-converter" className="text-blue-500 hover:underline font-medium">免费颜色转换器</Link>，支持HEX、RGB、HSL实时互转，还有可视化取色器。</p>
        <p className="text-gray-700 leading-relaxed mt-2">想生成渐变色？试试 <Link href="/gradient" className="text-blue-500 hover:underline font-medium">CSS渐变生成器</Link>。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
