import Link from 'next/link'

export default function CssMinificationGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS压缩优化：减小文件体积提升加载速度</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">CSS文件的大小直接影响网页加载速度。一个未优化的CSS文件可能包含大量空白、注释和冗余代码。通过压缩（Minification），可以在不改变功能的前提下大幅减小文件体积。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是CSS压缩？</h2>
        <p className="text-gray-700 leading-relaxed">CSS压缩是移除源代码中所有不影响功能的字符的过程，包括：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 空格、换行、制表符</p>
          <p>• 注释（/* ... */）</p>
          <p>• 不必要的分号（最后一个属性后的分号）</p>
          <p>• 冗余的零（0.5 → .5）</p>
          <p>• 颜色值简写（#ffffff → #fff）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">压缩前后对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 压缩前 — 420字节 */</p>
            <p>{`.header {`}</p>
            <p>{'  background-color: #ffffff;'}</p>
            <p>{'  padding: 20px 20px 20px 20px;'}</p>
            <p>{'  margin: 0px;'}</p>
            <p>{'  font-weight: bold;'}</p>
            <p>{'  /* 主导航样式 */'}</p>
            <p>{'}'}</p>
            <p>{`.header .nav {`}</p>
            <p>{'  display: flex;'}</p>
            <p>{'  gap: 16px;'}</p>
            <p>{'}'}</p>
          </div>
          <div>
            <p className="text-green-600">/* 压缩后 — 98字节，减少77% */</p>
            <p>{`.header{background-color:#fff;padding:20px;margin:0;font-weight:700}.header .nav{display:flex;gap:16px}`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">压缩工具对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>工具</span><span>特点</span><span>适用场景</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>cssnano</span><span>PostCSS插件，优化全面</span><span>构建流程集成</span>
            <span>clean-css</span><span>独立工具，压缩率高</span><span>Node.js项目</span>
            <span>Lightning CSS</span><span>Rust编写，速度极快</span><span>大型项目</span>
            <span>esbuild</span><span>内置CSS压缩</span><span>已用esbuild的项目</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在构建流程中集成</h2>
        <p className="text-gray-700 leading-relaxed">以cssnano为例，在PostCSS中配置：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// postcss.config.js</p>
            <p>{`module.exports = {`}</p>
            <p>{`  plugins: [`}</p>
            <p>{`    require('autoprefixer'),`}</p>
            <p>{`    require('cssnano')({`}</p>
            <p>{`      preset: ['default', {`}</p>
            <p>{`        discardComments: { removeAll: true },`}</p>
            <p>{`        normalizeWhitespace: true,`}</p>
            <p>{`      }]`}</p>
            <p>{`    })`}</p>
            <p>{`  ]`}</p>
            <p>{`}`}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">Webpack中使用css-minimizer-webpack-plugin：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');`}</p>
          <p>{`module.exports = {`}</p>
          <p>{`  optimization: {`}</p>
          <p>{`    minimizer: ['...', new CssMinimizerPlugin()],`}</p>
          <p>{`  },`}</p>
          <p>{`};`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">除了压缩，还能做什么？</h2>
        <p className="text-gray-700 leading-relaxed">压缩只是CSS优化的一部分，还有更多策略：</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>💡 移除未使用的CSS — 用PurgeCSS或Tailwind的tree-shaking删除没用到的样式</p>
          <p>💡 合并媒体查询 — 将分散的@media合并，减少重复声明</p>
          <p>💡 使用CSS变量 — 减少重复的颜色值和尺寸</p>
          <p>💡 启用Gzip/Brotli — 服务器端压缩可再减少60-80%传输体积</p>
          <p>💡 按需加载 — 关键CSS内联，非关键CSS异步加载</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">关键CSS内联示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{'<head>'}</p>
          <p>{'  <!-- 关键CSS内联，首屏立即渲染 -->'}</p>
          <p>{'  <style>'}</p>
          <p>{'    body{margin:0;font-family:sans-serif}'}</p>
          <p>{'    .header{background:#fff;padding:16px}'}</p>
          <p>{'  </style>'}</p>
          <p>{'  <!-- 非关键CSS异步加载 -->'}</p>
          <p>{'  <link rel="preload" href="/styles.css" as="style"'}</p>
          <p>{'    onload="this.rel=\'stylesheet\'">'}</p>
          <p>{'</head>'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">注意事项</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ 只压缩生产环境的CSS，开发环境保持可读性方便调试</p>
          <p>⚠️ 保留Source Map，方便线上问题排查</p>
          <p>⚠️ 压缩后务必测试，某些激进优化可能改变样式行为</p>
          <p>⚠️ 不要手动压缩，交给工具自动化处理</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速压缩CSS？试试我们的 <Link href="/css-minify" className="text-blue-500 hover:underline font-medium">CSS在线压缩工具</Link>，粘贴代码一键压缩。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
