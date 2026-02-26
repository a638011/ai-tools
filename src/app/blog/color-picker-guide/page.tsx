import Link from 'next/link'

export default function ColorPickerGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">网页取色器使用指南：快速获取任意颜色值</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">设计师发来一张设计稿，你需要精确还原每个颜色。或者你在某个网站上看到一个好看的配色，想知道它的色值。取色器（Color Picker）就是解决这类问题的工具。本文介绍各种取色方法和颜色格式的转换。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">颜色的表示方式</h2>
        <p className="text-gray-700 leading-relaxed">同一个颜色可以用多种格式表示，了解它们的区别很重要：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>格式</span><span>示例</span><span>说明</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>HEX</span><code className="font-mono">#FF6B35</code><span>最常用，6位十六进制</span>
            <span>HEX (短)</span><code className="font-mono">#F63</code><span>3位简写形式</span>
            <span>RGB</span><code className="font-mono">rgb(255, 107, 53)</code><span>红绿蓝三通道，0-255</span>
            <span>RGBA</span><code className="font-mono">rgba(255, 107, 53, 0.8)</code><span>带透明度的RGB</span>
            <span>HSL</span><code className="font-mono">hsl(19, 100%, 60%)</code><span>色相、饱和度、亮度</span>
            <span>HSLA</span><code className="font-mono">hsla(19, 100%, 60%, 0.8)</code><span>带透明度的HSL</span>
            <span>HWB</span><code className="font-mono">hwb(19 21% 0%)</code><span>色相、白度、黑度</span>
            <span>LAB</span><code className="font-mono">lab(62% 45 58)</code><span>感知均匀色彩空间</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HEX颜色详解</h2>
        <p className="text-gray-700 leading-relaxed">HEX是网页开发中最常用的颜色格式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>#FF6B35</p>
          <p className="text-gray-500"> ││││││</p>
          <p className="text-gray-500"> ││││└┘── 蓝色通道：0x35 = 53</p>
          <p className="text-gray-500"> ││└┘──── 绿色通道：0x6B = 107</p>
          <p className="text-gray-500"> └┘────── 红色通道：0xFF = 255</p>
        </div>
        <p className="text-gray-700 leading-relaxed">8位HEX（如 <code className="bg-gray-100 px-1 rounded text-sm">#FF6B3580</code>）最后两位表示透明度，80 = 50%透明。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HSL：更直观的颜色模型</h2>
        <p className="text-gray-700 leading-relaxed">HSL比RGB更符合人类对颜色的认知：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">H（色相）</span><span className="text-gray-600">0-360度，0=红，120=绿，240=蓝</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">S（饱和度）</span><span className="text-gray-600">0%=灰色，100%=纯色</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">L（亮度）</span><span className="text-gray-600">0%=黑色，50%=纯色，100%=白色</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">HSL的优势：想要同色系的浅色？只需增加L值。想要柔和的颜色？降低S值。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 同色系配色，只调整亮度 */</p>
          <p>{`--primary:       hsl(220, 80%, 50%);  /* 主色 */`}</p>
          <p>{`--primary-light: hsl(220, 80%, 70%);  /* 浅色 */`}</p>
          <p>{`--primary-dark:  hsl(220, 80%, 30%);  /* 深色 */`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">浏览器内置取色器</h2>
        <p className="text-gray-700 leading-relaxed">Chrome DevTools自带取色器，无需安装任何插件：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>1. 按F12打开开发者工具</p>
          <p>2. 选中一个元素，在Styles面板找到颜色属性</p>
          <p>3. 点击颜色方块，打开取色器</p>
          <p>4. 点击吸管图标，在页面上任意位置取色</p>
          <p>5. 取色器支持HEX、RGB、HSL格式切换</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JavaScript颜色转换</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// HEX转RGB</p>
          <p>{`function hexToRgb(hex) {`}</p>
          <p className="pl-4">{`const r = parseInt(hex.slice(1, 3), 16);`}</p>
          <p className="pl-4">{`const g = parseInt(hex.slice(3, 5), 16);`}</p>
          <p className="pl-4">{`const b = parseInt(hex.slice(5, 7), 16);`}</p>
          <p className="pl-4">{`return \`rgb(\${r}, \${g}, \${b})\`;`}</p>
          <p>{`}`}</p>
          <p></p>
          <p className="text-gray-500">// RGB转HEX</p>
          <p>{`function rgbToHex(r, g, b) {`}</p>
          <p className="pl-4">{`return '#' + [r, g, b]`}</p>
          <p className="pl-8">{`.map(x => x.toString(16).padStart(2, '0'))`}</p>
          <p className="pl-8">{`.join('');`}</p>
          <p>{`}`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">配色技巧</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>🎨 60-30-10法则：主色60%、辅色30%、强调色10%</p>
          <p>🔄 互补色：色轮上相对的颜色，对比强烈（如蓝+橙）</p>
          <p>🔺 三角配色：色轮上等距的三个颜色，平衡且丰富</p>
          <p>📐 类似色：色轮上相邻的颜色，和谐自然</p>
          <p>♿ 无障碍：文字与背景的对比度至少4.5:1（WCAG AA标准）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要取色或转换颜色格式？试试我们的 <Link href="/color-picker" className="text-blue-500 hover:underline font-medium">在线取色器</Link>，支持HEX、RGB、HSL互转，还能生成配色方案。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
