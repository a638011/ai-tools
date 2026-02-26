import Link from 'next/link'

export default function JavascriptMinification() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">JavaScript压缩混淆：原理和最佳实践</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 6分钟</p>

        <p className="text-gray-700 leading-relaxed">JavaScript是网页中体积最大的资源之一。未压缩的JS文件不仅增加下载时间，还会延长解析和执行时间。压缩（Minification）和混淆（Obfuscation）是两种不同但相关的优化手段。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">压缩 vs 混淆：区别是什么？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>压缩(Minify)</span><span>混淆(Obfuscate)</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>目的</span><span>减小体积</span><span>保护代码逻辑</span>
            <span>可逆性</span><span>可格式化还原</span><span>极难还原</span>
            <span>变量名</span><span>缩短为a,b,c</span><span>替换为无意义字符串</span>
            <span>性能影响</span><span>提升</span><span>可能降低</span>
            <span>适用场景</span><span>所有生产环境</span><span>商业软件保护</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">压缩做了什么？</h2>
        <p className="text-gray-700 leading-relaxed">JS压缩工具会执行以下优化：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 压缩前</p>
            <p>{`function calculateTotal(price, quantity) {`}</p>
            <p>{`  // 计算总价`}</p>
            <p>{`  const tax = 0.08;`}</p>
            <p>{`  const subtotal = price * quantity;`}</p>
            <p>{`  const total = subtotal + subtotal * tax;`}</p>
            <p>{`  return total;`}</p>
            <p>{`}`}</p>
          </div>
          <div>
            <p className="text-green-600">// 压缩后</p>
            <p>{`function calculateTotal(t,a){const c=t*a;return c+.08*c}`}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">具体操作包括：移除空白和注释、缩短变量名、删除未使用代码（Tree Shaking）、内联简单函数、简化表达式（true → !0）、合并变量声明。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">主流压缩工具对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>工具</span><span>速度</span><span>压缩率</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>Terser</span><span>中等</span><span>优秀，业界标准</span>
            <span>esbuild</span><span>极快（Go编写）</span><span>良好</span>
            <span>SWC</span><span>极快（Rust编写）</span><span>良好</span>
            <span>UglifyJS</span><span>慢</span><span>优秀（仅ES5）</span>
            <span>Google Closure</span><span>慢</span><span>最高（高级模式）</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实际配置示例</h2>
        <p className="text-gray-700 leading-relaxed">Vite项目（默认使用esbuild压缩）：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// vite.config.js</p>
          <p>{`export default {`}</p>
          <p>{`  build: {`}</p>
          <p>{`    minify: 'terser', // 或 'esbuild'（默认）`}</p>
          <p>{`    terserOptions: {`}</p>
          <p>{`      compress: {`}</p>
          <p>{`        drop_console: true,  // 移除console.log`}</p>
          <p>{`        drop_debugger: true, // 移除debugger`}</p>
          <p>{`      },`}</p>
          <p>{`    },`}</p>
          <p>{`  },`}</p>
          <p>{`}`}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">Webpack项目：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// webpack.config.js</p>
          <p>{`const TerserPlugin = require('terser-webpack-plugin');`}</p>
          <p>{`module.exports = {`}</p>
          <p>{`  optimization: {`}</p>
          <p>{`    minimize: true,`}</p>
          <p>{`    minimizer: [new TerserPlugin({`}</p>
          <p>{`      terserOptions: {`}</p>
          <p>{`        compress: { passes: 2 },`}</p>
          <p>{`      },`}</p>
          <p>{`    })],`}</p>
          <p>{`  },`}</p>
          <p>{`};`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tree Shaking：删除死代码</h2>
        <p className="text-gray-700 leading-relaxed">Tree Shaking是压缩的重要补充，它能删除未被引用的导出：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// utils.js — 导出3个函数</p>
            <p>{`export function add(a, b) { return a + b; }`}</p>
            <p>{`export function subtract(a, b) { return a - b; }`}</p>
            <p>{`export function multiply(a, b) { return a * b; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">// app.js — 只用了add</p>
            <p>{`import { add } from './utils';`}</p>
            <p className="text-green-600">// subtract和multiply会被Tree Shaking移除</p>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 Tree Shaking要求使用ES Module（import/export），CommonJS（require）无法被Tree Shake。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">最佳实践</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 生产环境必须压缩，开发环境保持原样方便调试</p>
          <p>2. 始终生成Source Map，线上排查问题时能映射回源码</p>
          <p>3. 移除console.log和debugger语句</p>
          <p>4. 使用ES Module语法以支持Tree Shaking</p>
          <p>5. 配合Gzip/Brotli服务器压缩，双重减小传输体积</p>
          <p>6. 代码分割（Code Splitting）按需加载，减少首屏JS体积</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速压缩JS代码？试试我们的 <Link href="/js-minify" className="text-blue-500 hover:underline font-medium">JavaScript在线压缩工具</Link>，粘贴代码一键压缩。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
