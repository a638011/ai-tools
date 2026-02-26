import Link from 'next/link'

export default function HtmlPreviewTools() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">在线HTML预览工具：前端开发必备</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">前端开发中，快速预览HTML代码效果是最基本的需求。无论是调试一段代码片段、测试邮件模板，还是教学演示，在线HTML预览工具都能让你省去搭建本地环境的麻烦。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么需要在线预览？</h2>
        <p className="text-gray-700 leading-relaxed">虽然可以直接双击HTML文件在浏览器中打开，但在线预览工具有独特优势：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 即时反馈 — 代码修改后实时看到效果，无需手动刷新</p>
          <p>• 无需本地文件 — 直接在浏览器中编写和运行</p>
          <p>• 分享方便 — 生成链接发给同事或学生</p>
          <p>• 隔离环境 — 不会影响本地项目</p>
          <p>• 多设备预览 — 测试不同屏幕尺寸的响应式效果</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见使用场景</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 调试HTML邮件模板 — 邮件HTML有很多兼容性限制，需要反复预览调整</p>
          <p>2. 学习HTML/CSS — 初学者边写边看效果，学习效率翻倍</p>
          <p>3. 快速原型 — 验证一个布局想法，不需要创建完整项目</p>
          <p>4. 代码面试 — 在线编写和展示前端代码</p>
          <p>5. 技术博客 — 文章中嵌入可运行的代码示例</p>
          <p>6. Bug复现 — 创建最小复现案例分享给团队</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">一个完整的HTML预览示例</h2>
        <p className="text-gray-700 leading-relaxed">把以下代码粘贴到HTML预览工具中试试：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{'<!DOCTYPE html>'}</p>
          <p>{'<html lang="zh-CN">'}</p>
          <p>{'<head>'}</p>
          <p>{'  <meta charset="UTF-8">'}</p>
          <p>{'  <meta name="viewport" content="width=device-width">'}</p>
          <p>{'  <style>'}</p>
          <p>{'    body { font-family: system-ui; padding: 2rem; }'}</p>
          <p>{'    .card {'}</p>
          <p>{'      border: 1px solid #e5e7eb;'}</p>
          <p>{'      border-radius: 12px;'}</p>
          <p>{'      padding: 1.5rem;'}</p>
          <p>{'      max-width: 400px;'}</p>
          <p>{'      box-shadow: 0 2px 8px rgba(0,0,0,0.08);'}</p>
          <p>{'    }'}</p>
          <p>{'    .card h2 { margin-top: 0; color: #1f2937; }'}</p>
          <p>{'    .btn {'}</p>
          <p>{'      background: #3b82f6; color: white;'}</p>
          <p>{'      border: none; padding: 8px 20px;'}</p>
          <p>{'      border-radius: 6px; cursor: pointer;'}</p>
          <p>{'    }'}</p>
          <p>{'    .btn:hover { background: #2563eb; }'}</p>
          <p>{'  </style>'}</p>
          <p>{'</head>'}</p>
          <p>{'<body>'}</p>
          <p>{'  <div class="card">'}</p>
          <p>{'    <h2>Hello World</h2>'}</p>
          <p>{'    <p>这是一个卡片组件示例</p>'}</p>
          <p>{'    <button class="btn">点击我</button>'}</p>
          <p>{'  </div>'}</p>
          <p>{'</body>'}</p>
          <p>{'</html>'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HTML预览工具的实现原理</h2>
        <p className="text-gray-700 leading-relaxed">在线HTML预览工具通常使用iframe的srcdoc属性来渲染用户输入的HTML：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 核心原理就这么简单</p>
          <p>{`const iframe = document.querySelector('iframe');`}</p>
          <p>{`iframe.srcdoc = userHtmlCode;`}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">iframe提供了天然的沙箱隔离，用户代码不会影响到主页面。更安全的实现还会使用sandbox属性限制iframe的能力。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">选择预览工具的考量</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium text-gray-700 mb-2">
            <span>需求</span><span>建议</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>快速预览HTML片段</span><span>轻量在线工具</span>
            <span>HTML+CSS+JS完整项目</span><span>CodePen / CodeSandbox</span>
            <span>React/Vue组件</span><span>StackBlitz / CodeSandbox</span>
            <span>邮件模板测试</span><span>专用邮件预览工具</span>
            <span>教学演示</span><span>支持嵌入分享的工具</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">安全注意事项</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ 不要在预览工具中输入敏感信息（密码、API密钥等）</p>
          <p>⚠️ 预览他人分享的代码时注意检查是否有恶意脚本</p>
          <p>⚠️ 本地预览工具比在线工具更安全，代码不会上传到服务器</p>
          <p>⚠️ 我们的工具完全在浏览器端运行，代码不会发送到任何服务器</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速预览HTML代码？试试我们的 <Link href="/html-preview" className="text-blue-500 hover:underline font-medium">HTML在线预览工具</Link>，粘贴代码即时查看渲染效果。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
