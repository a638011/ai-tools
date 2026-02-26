import Link from 'next/link'

export default function ScientificCalculatorGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">在线科学计算器使用指南：三角函数、对数、幂运算</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">科学计算器是理工科学生和工程师的必备工具。无论是计算三角函数、对数还是复杂的幂运算，一个好用的科学计算器能大幅提升效率。本文将详细介绍科学计算器的核心功能和使用技巧。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">三角函数：sin、cos、tan</h2>
        <p className="text-gray-700 leading-relaxed">三角函数是科学计算中最常用的函数之一。使用前需要注意一个关键设置：角度模式。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">DEG</code><span className="text-gray-600">角度制，360° 为一个圆周</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">RAD</code><span className="text-gray-600">弧度制，2π 为一个圆周</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">常见错误就是在弧度模式下输入角度值。比如计算 sin(90°)，在 DEG 模式下结果是 1，但在 RAD 模式下 sin(90) ≈ 0.894。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用三角函数值速查</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 font-medium text-gray-700 mb-2">
            <span>角度</span><span>sin</span><span>cos</span><span>tan</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600 font-mono">
            <span>0°</span><span>0</span><span>1</span><span>0</span>
            <span>30°</span><span>0.5</span><span>0.866</span><span>0.577</span>
            <span>45°</span><span>0.707</span><span>0.707</span><span>1</span>
            <span>60°</span><span>0.866</span><span>0.5</span><span>1.732</span>
            <span>90°</span><span>1</span><span>0</span><span>∞</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">反三角函数</h2>
        <p className="text-gray-700 leading-relaxed">反三角函数（arcsin、arccos、arctan）用于已知三角函数值求角度。在计算器上通常标记为 sin⁻¹、cos⁻¹、tan⁻¹。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500">// JavaScript 中使用反三角函数</p>
          <p>Math.asin(0.5) * 180 / Math.PI  <span className="text-green-600">// 30°</span></p>
          <p>Math.acos(0.5) * 180 / Math.PI  <span className="text-green-600">// 60°</span></p>
          <p>Math.atan(1) * 180 / Math.PI    <span className="text-green-600">// 45°</span></p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">对数运算：lg 和 ln</h2>
        <p className="text-gray-700 leading-relaxed">对数是指数运算的逆运算。科学计算器通常提供两种对数：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">log / lg</code><span className="text-gray-600">常用对数，以10为底。log(100) = 2</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">ln</code><span className="text-gray-600">自然对数，以e为底。ln(e) = 1</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">换底公式是处理任意底数对数的关键：</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium">log_a(b) = ln(b) / ln(a) = log(b) / log(a)</p>
          <p className="mt-2">例如：log₂(8) = ln(8) / ln(2) = 2.079 / 0.693 = 3</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">幂运算与开方</h2>
        <p className="text-gray-700 leading-relaxed">幂运算是科学计算的基础操作：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p>2^10 = 1024          <span className="text-gray-500">// 幂运算</span></p>
          <p>√144 = 12            <span className="text-gray-500">// 平方根</span></p>
          <p>∛27 = 3              <span className="text-gray-500">// 立方根</span></p>
          <p>16^(1/4) = 2         <span className="text-gray-500">// n次方根</span></p>
          <p>e^1 ≈ 2.71828        <span className="text-gray-500">// 自然指数</span></p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用技巧</h2>
        <p className="text-gray-700 leading-relaxed">1. 使用括号明确运算优先级：<code className="bg-gray-100 px-1 rounded text-sm">2^(3+1)</code> 和 <code className="bg-gray-100 px-1 rounded text-sm">2^3+1</code> 结果完全不同。</p>
        <p className="text-gray-700 leading-relaxed">2. 科学记数法输入大数：<code className="bg-gray-100 px-1 rounded text-sm">3.14e8</code> 表示 3.14 × 10⁸。</p>
        <p className="text-gray-700 leading-relaxed">3. 阶乘运算 n! 在排列组合中非常有用：<code className="bg-gray-100 px-1 rounded text-sm">10! = 3628800</code>。</p>
        <p className="text-gray-700 leading-relaxed">4. 记住常用常数：π ≈ 3.14159，e ≈ 2.71828。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速进行科学计算？试试我们的 <Link href="/scientific-calculator" className="text-blue-500 hover:underline font-medium">免费在线科学计算器</Link>，支持三角函数、对数、幂运算等全部功能。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
