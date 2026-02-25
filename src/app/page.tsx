import Link from 'next/link'

const categories = [
  {
    name: 'AI写作工具',
    icon: '✍️',
    tools: [
      { name: 'AI文案生成器', desc: '一键生成小红书/淘宝/抖音爆款文案', href: '/copywriter', icon: '✍️', tag: '热门' },
      { name: 'AI周报生成器', desc: '输入工作内容，秒出专业周报', href: '/weekly-report', icon: '📊', tag: '热门' },
      { name: 'AI简历生成器', desc: '填写信息，一键生成专业简历', href: '/resume', icon: '📄', tag: '' },
      { name: 'AI起名生成器', desc: '宝宝/品牌/公司智能起名', href: '/name-gen', icon: '✨', tag: '' },
      { name: 'AI朋友圈文案', desc: '一键生成高级感朋友圈文案', href: '/moments', icon: '💬', tag: '' },
      { name: 'AI邮件助手', desc: '快速生成商务/求职邮件', href: '/email', icon: '📧', tag: '' },
    ],
  },
  {
    name: '开发者工具',
    icon: '🛠️',
    tools: [
      { name: 'JSON格式化', desc: 'JSON格式化、压缩、校验', href: '/json-formatter', icon: '🔧', tag: '热门' },
      { name: 'Base64编解码', desc: '在线Base64编码/解码', href: '/base64', icon: '🔐', tag: '' },
      { name: '时间戳转换', desc: 'Unix时间戳与日期互转', href: '/timestamp', icon: '⏰', tag: '' },
      { name: '正则表达式测试', desc: '在线测试正则，实时匹配高亮', href: '/regex', icon: '🔍', tag: '' },
      { name: 'URL编解码', desc: '在线URL编码/解码', href: '/url-encode', icon: '🔗', tag: '' },
      { name: '颜色转换器', desc: 'HEX/RGB/HSL颜色互转', href: '/color-converter', icon: '🎨', tag: '' },
    ],
  },
  {
    name: '文本工具',
    icon: '📝',
    tools: [
      { name: '在线字数统计', desc: '实时统计字数、字符数、中英文', href: '/word-count', icon: '📝', tag: '' },
      { name: 'Markdown预览', desc: '实时编辑预览Markdown', href: '/markdown', icon: '📄', tag: '' },
      { name: '文本对比', desc: '对比两段文本的差异', href: '/text-diff', icon: '📋', tag: '' },
      { name: '密码生成器', desc: '生成安全随机密码', href: '/password-gen', icon: '🔑', tag: '' },
    ],
  },
]

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🚀 AI Tools</h1>
        <p className="text-lg text-gray-600">免费在线工具集 · 无需注册 · 即用即走</p>
        <p className="text-sm text-gray-400 mt-2">已上线 {categories.reduce((a, c) => a + c.tools.length, 0)} 个工具，持续更新中</p>
      </div>

      {categories.map(cat => (
        <div key={cat.name} className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{cat.icon} {cat.name}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {cat.tools.map(t => (
              <Link key={t.href} href={t.href}
                className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{t.icon}</span>
                  {t.tag === '热门' && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">{t.tag}</span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <footer className="text-center mt-12 text-sm text-gray-400 space-x-4">
        <Link href="/blog" className="text-blue-500 hover:underline">📚 博客</Link>
        <span>© 2026 AI Tools · Powered by AI</span>
      </footer>
    </main>
  )
}
