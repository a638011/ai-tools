import Link from 'next/link'

export default function JwtTokenGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">JWT Token详解：原理、结构与安全实践</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">JWT（JSON Web Token）是现代Web开发中最流行的身份认证方案。几乎所有前后端分离的项目都在用它。这篇文章帮你彻底搞懂JWT。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JWT的三段式结构</h2>
        <p className="text-gray-700 leading-relaxed">JWT由三部分组成，用点号（.）分隔：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm">
          <span className="text-red-500">eyJhbGciOiJIUzI1NiJ9</span>.<span className="text-blue-500">eyJ1c2VyIjoiam9obiJ9</span>.<span className="text-green-500">SflKxwRJSMeKKF2QT4fw</span>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><span className="text-red-500 font-medium">Header</span> — 声明算法和类型（如 HS256, JWT）</li>
          <li><span className="text-blue-500 font-medium">Payload</span> — 携带用户数据（如 user_id, role, exp）</li>
          <li><span className="text-green-500 font-medium">Signature</span> — 用密钥对前两部分签名，防篡改</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">工作流程</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1️⃣ 用户登录 → 服务器验证密码</p>
          <p>2️⃣ 服务器生成JWT → 返回给客户端</p>
          <p>3️⃣ 客户端存储JWT（localStorage/Cookie）</p>
          <p>4️⃣ 每次请求携带JWT → Authorization: Bearer xxx</p>
          <p>5️⃣ 服务器验证签名 → 提取用户信息 → 处理请求</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JWT vs Session</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>对比项</span><span>JWT</span><span>Session</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>存储位置</span><span>客户端</span><span>服务端</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>扩展性</span><span>✅ 天然分布式</span><span>需要共享Session</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>跨域</span><span>✅ 方便</span><span>需要额外配置</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>注销</span><span>❌ 较难</span><span>✅ 直接删除</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>大小</span><span>较大</span><span>仅Session ID</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用Payload字段</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-12">iss</code><span className="text-gray-600">签发者（Issuer）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-12">sub</code><span className="text-gray-600">主题（Subject，通常是用户ID）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-12">exp</code><span className="text-gray-600">过期时间（Unix时间戳）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-12">iat</code><span className="text-gray-600">签发时间</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-12">aud</code><span className="text-gray-600">受众（Audience）</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-12">jti</code><span className="text-gray-600">JWT唯一标识（防重放）</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">安全最佳实践</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 使用HTTPS传输JWT</p>
          <p>✅ 设置合理的过期时间（Access Token 15-30分钟）</p>
          <p>✅ 使用Refresh Token机制续期</p>
          <p>✅ 密钥足够长且安全存储</p>
          <p>✅ 验证所有标准字段（exp, iss, aud）</p>
          <p>❌ 不要在Payload中存敏感信息（它只是Base64编码，不是加密）</p>
          <p>❌ 不要把JWT存在localStorage（XSS风险），推荐HttpOnly Cookie</p>
          <p>❌ 不要使用none算法</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线解码工具</h2>
        <p className="text-gray-700 leading-relaxed">需要查看JWT内容？用我们的 <Link href="/jwt-decoder" className="text-blue-500 hover:underline font-medium">免费JWT解码器</Link>，粘贴Token即可查看Header和Payload，还能检查是否过期。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
