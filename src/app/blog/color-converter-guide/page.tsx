import Link from 'next/link'

export default function ColorConverterGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">在线颜色转换器完全指南：HEX、RGB、HSL 一键互转</h1>
        <p className="text-gray-400 text-sm mb-8">2026年4月 · 阅读时间 7分钟</p>

        <p className="text-gray-700 leading-relaxed">
          前端开发时，你是否经常在 HEX、RGB、HSL 三种颜色格式之间来回换算？设计师给了一个 HEX 色值，你却需要 HSL 来调透明度。每次都要打开 Figma 或查文档，效率很低。<strong>在线颜色转换器</strong>就是来解决这个问题的——输入任意格式，一键输出所有格式，省时省力。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">三种颜色格式到底是什么</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">HEX（十六进制）</h3>
        <p className="text-gray-700 leading-relaxed">
          最常见的网页颜色格式，用 <code className="font-mono text-blue-600">#</code> 开头，后接 6 位十六进制数字。每两位代表一个颜色通道：红（R）、绿（G）、蓝（B），取值范围 <code className="font-mono">00</code> 到 <code className="font-mono">FF</code>。
        </p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div><span className="text-gray-500">示例：</span><code className="font-mono text-blue-600">#FF6B35</code></div>
          <div><span className="text-gray-500">FF</span><span className="text-red-500 ml-2">= 红色 255</span></div>
          <div><span className="text-gray-500">6B</span><span className="text-green-500 ml-2">= 绿色 107</span></div>
          <div><span className="text-gray-500">35</span><span className="text-blue-500 ml-2">= 蓝色 53</span></div>
          <div><span className="text-gray-500">带透明：</span><code className="font-mono text-blue-600">#FF6B3580</code>（最后两位是 Alpha）</div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">RGB / RGBA</h3>
        <p className="text-gray-700 leading-relaxed">
          光学显示的基础模型，通过红、绿、蓝三原色的叠加来呈现颜色。每个通道取值 <code className="font-mono">0-255</code>，也可以用百分比表示。支持第四个参数 Alpha 表示透明度（0-1）。
        </p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div><span className="text-gray-500">标准格式：</span><code className="font-mono text-blue-600">rgb(255, 107, 53)</code></div>
          <div><span className="text-gray-500">带透明：</span><code className="font-mono text-blue-600">rgba(255, 107, 53, 0.8)</code></div>
          <div><span className="text-gray-500">百分比：</span><code className="font-mono text-blue-600">rgb(100%, 42%, 21%)</code></div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">HSL / HSLA</h3>
        <p className="text-gray-700 leading-relaxed">
          更符合人类直觉的颜色描述方式：<strong>H</strong>ue（色相，0-360°）、<strong>S</strong>aturation（饱和度，0-100%）、<strong>L</strong>ightness（亮度，0-100%）。调整色调、明暗比 HEX/RGB 直观得多。
        </p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div><span className="text-gray-500">格式：</span><code className="font-mono text-blue-600">hsl(21, 100%, 60%)</code></div>
          <div><span className="text-gray-500">H=21°</span><span className="text-gray-600 ml-2">色相（红色附近）</span></div>
          <div><span className="text-gray-500">S=100%</span><span className="text-gray-600 ml-2">饱和度（最鲜艳）</span></div>
          <div><span className="text-gray-500">L=60%</span><span className="text-gray-600 ml-2">亮度（不过亮不过暗）</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么需要在线颜色转换器</h2>
        <p className="text-gray-700 leading-relaxed">
          手动换算不仅慢，还容易出错。使用在线工具的优势：
        </p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div>✅ <strong>实时预览</strong> — 输入颜色立即看到实际效果</div>
          <div>✅ <strong>一键多格式</strong> — 输入 HEX，输出 RGB、HSL、HSL、CMYK 全部给你</div>
          <div>✅ <strong>取色工具</strong> — 从图片或屏幕吸取颜色</div>
          <div>✅ <strong>调色板</strong> — 生成配色方案、渐变色</div>
          <div>✅ <strong>色盲友好</strong> — 模拟不同类型色盲的显示效果</div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">使用步骤</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">第一步：输入颜色</h3>
        <p className="text-gray-700 leading-relaxed">
          在颜色输入框中粘贴或输入颜色值，支持任意格式。工具会自动识别是 HEX、RGB 还是 HSL，无需手动选择类型。例如输入 <code className="font-mono text-blue-600">#3498db</code> 或 <code className="font-mono text-blue-600">rgb(52, 152, 219)</code> 都可以。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">第二步：查看所有格式</h3>
        <p className="text-gray-700 leading-relaxed">
          转换结果会同时显示 HEX、RGB、RGBA、HSL、HSLA 五种格式，点一下即可复制。CMYK 也会一并输出，方便做印刷设计。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">第三步：调整色相/饱和度/亮度</h3>
        <p className="text-gray-700 leading-relaxed">
          如果需要微调，用 HSL 滑块最方便。拖动色相滑块可以查看同色系不同色调，调节饱和度和亮度可以快速生成浅色版本和深色版本，非常适合做主题色。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">第四步：生成配色方案</h3>
        <p className="text-gray-700 leading-relaxed">
          输入主色后，点击「生成配色方案」，工具会自动输出互补色、邻近色、三角配色等 harmonious 配色组合。设计师可以直接拿去用，前端可以直接复制色值。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见使用场景</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">前端开发</h3>
        <p className="text-gray-700 leading-relaxed">
          Tailwind CSS 用 HEX 和 RGB，CSS 变量常用 HSL，Material Design 用 HEX。颜色转换器让你在不同框架之间切换时无需手动换算，复制即用。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">UI 设计</h3>
        <p className="text-gray-700 leading-relaxed">
          Figma 默认显示 HEX，但有些设计系统用 HSL 或 RGB。设计师在做深色模式时，用 HSL 调整 L（亮度）值最直接——把 L 值统一降低，色调保持不变，整个配色方案瞬间变成暗色主题。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">品牌设计</h3>
        <p className="text-gray-700 leading-relaxed">
          品牌色通常需要在网页、印刷品、APP 中保持一致。HEX 适合数字产品，CMYK 适合印刷。用颜色转换器快速检查两者差异，确保品牌色在不同媒介上的一致性。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">进阶技巧</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">用 HSL 快速生成同色系渐变</h3>
        <p className="text-gray-700 leading-relaxed">
          在 HSL 模式下，只需要把 L 值从 <code className="font-mono">20%</code> 调到 <code className="font-mono">90%</code>，就能得到一套同色系渐变色板。用于 CSS 渐变背景、阴影层次非常方便。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">透明度的正确用法</h3>
        <p className="text-gray-700 leading-relaxed">
          在 HEX 中加两位十六进制表示 Alpha（如 <code className="font-mono">#3498db80</code>），或用 RGBA/HSLA 更清晰。建议用 8 位 HEX 而不是简写 4 位，兼容性更好。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">CSS 变量配合使用</h3>
        <p className="text-gray-700 leading-relaxed">
          用颜色转换器生成基础色后，可以建立 CSS 变量系统：
        </p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`:root {`}</p>
          <p>{`  --primary: hsl(21, 100%, 60%);`}</p>
          <p>{`  --primary-light: hsl(21, 100%, 80%);`}</p>
          <p>{`  --primary-dark: hsl(21, 100%, 40%);`}</p>
          <p>{`  --primary-alpha: hsla(21, 100%, 60%, 0.2);`}</p>
          <p>{`}`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具推荐</h2>
        <p className="text-gray-700 leading-relaxed">
          试试我们的 <Link href="/color-converter" className="text-blue-500 hover:underline font-medium">在线颜色转换器</Link>，支持 HEX、RGB、RGBA、HSL、HSLA、CMYK 六大格式实时互转，还有调色板生成器和颜色预览功能。完全免费，无需注册，即开即用。
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          更多开发者工具和设计工具，欢迎访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。
        </p>
      </article>
    </main>
  )
}