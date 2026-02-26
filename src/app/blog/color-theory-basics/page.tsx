import Link from 'next/link'

export default function ColorTheoryBasics() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">配色理论入门：互补色、类似色、三角色是什么？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">为什么有些网站配色看起来很舒服，有些却让人眼花缭乱？配色不是靠感觉，而是有科学理论支撑的。掌握基本的色彩理论，你也能搭配出专业级的配色方案。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">色轮（Color Wheel）</h2>
        <p className="text-gray-700 leading-relaxed">色轮是理解配色的基础工具。它把颜色按照色相（Hue）排列成一个圆环，由三种基础色衍生出所有颜色：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p><strong>三原色（Primary）：</strong>红、黄、蓝 — 不能由其他颜色混合得到</p>
          <p><strong>二次色（Secondary）：</strong>橙、绿、紫 — 两种原色混合</p>
          <p><strong>三次色（Tertiary）：</strong>红橙、黄橙、黄绿、蓝绿、蓝紫、红紫 — 原色+二次色混合</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">色彩三要素：HSL</h2>
        <p className="text-gray-700 leading-relaxed">每种颜色都可以用三个维度来描述：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>要素</span><span>英文</span><span>说明</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>色相</span><span>Hue</span><span>颜色本身（红/蓝/绿），0°-360°</span>
            <span>饱和度</span><span>Saturation</span><span>颜色的鲜艳程度，0%-100%</span>
            <span>明度</span><span>Lightness</span><span>颜色的明暗程度，0%-100%</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">/* CSS中使用HSL */</p>
          <p>color: hsl(0, 100%, 50%);    /* 纯红 */</p>
          <p>color: hsl(0, 100%, 75%);    /* 浅红/粉色 */</p>
          <p>color: hsl(0, 50%, 50%);     /* 暗红 */</p>
          <p>color: hsl(120, 100%, 50%);  /* 纯绿 */</p>
          <p>color: hsl(240, 100%, 50%);  /* 纯蓝 */</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">六种经典配色方案</h2>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. 互补色（Complementary）</h2>
        <p className="text-gray-700 leading-relaxed">色轮上正对面的两种颜色，对比最强烈。适合需要突出重点的设计。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 红 ↔ 绿（圣诞节配色）</p>
          <p>• 蓝 ↔ 橙（最受欢迎的互补色组合）</p>
          <p>• 紫 ↔ 黄</p>
          <p>💡 用途：CTA按钮、警告信息、品牌强调色</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. 类似色（Analogous）</h2>
        <p className="text-gray-700 leading-relaxed">色轮上相邻的2-3种颜色，过渡自然和谐。适合营造统一、舒适的视觉感受。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 蓝 + 蓝绿 + 绿（海洋感）</p>
          <p>• 红 + 红橙 + 橙（温暖感）</p>
          <p>• 紫 + 蓝紫 + 蓝（科技感）</p>
          <p>💡 用途：背景渐变、品牌色系、自然主题</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. 三角色（Triadic）</h2>
        <p className="text-gray-700 leading-relaxed">色轮上等距的三种颜色（间隔120°），既有对比又保持平衡。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 红 + 黄 + 蓝（三原色，超人配色）</p>
          <p>• 橙 + 绿 + 紫</p>
          <p>💡 用途：儿童品牌、活泼的UI、游戏界面</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. 分裂互补色（Split-Complementary）</h2>
        <p className="text-gray-700 leading-relaxed">选一种颜色，然后用它互补色两侧的颜色。比互补色柔和，比类似色有对比。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>• 蓝 + 红橙 + 黄橙</p>
          <p>💡 用途：适合新手，容易搭配出好看的效果</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">5. 矩形/四角色（Tetradic）</h2>
        <p className="text-gray-700 leading-relaxed">色轮上形成矩形的四种颜色，两对互补色。颜色丰富但需要注意平衡。</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">6. 单色（Monochromatic）</h2>
        <p className="text-gray-700 leading-relaxed">同一色相的不同明度和饱和度变化。最安全、最优雅的配色方案。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">/* 蓝色单色方案 */</p>
          <p>--blue-100: hsl(210, 100%, 95%);  /* 最浅 */</p>
          <p>--blue-300: hsl(210, 80%, 70%);</p>
          <p>--blue-500: hsl(210, 90%, 50%);   /* 主色 */</p>
          <p>--blue-700: hsl(210, 80%, 35%);</p>
          <p>--blue-900: hsl(210, 70%, 20%);   /* 最深 */</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用配色技巧</h2>
        <div className="bg-green-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ <strong>60-30-10法则</strong>：主色60%、辅助色30%、强调色10%</p>
          <p>✅ <strong>不超过3-4种颜色</strong>：颜色太多会显得杂乱</p>
          <p>✅ <strong>注意对比度</strong>：文字和背景的对比度至少4.5:1（WCAG标准）</p>
          <p>✅ <strong>考虑色盲用户</strong>：不要仅靠颜色传达信息</p>
          <p>✅ <strong>从自然界取色</strong>：日落、森林、海洋的配色天然和谐</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速生成配色方案？试试我们的 <Link href="/color-palette-generator" className="text-blue-500 hover:underline font-medium">配色方案生成器</Link>，支持互补色、类似色、三角色等多种模式。也可以用 <Link href="/color-converter" className="text-blue-500 hover:underline font-medium">颜色转换工具</Link> 在HEX、RGB、HSL之间转换。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
