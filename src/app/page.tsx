import Link from 'next/link'

const categories = [
  {
    name: 'AI 智能写作',
    desc: '让AI帮你搞定各种文案和文书',
    icon: '✍️',
    gradient: 'from-violet-500 to-purple-600',
    tools: [
      { name: 'AI文案生成器', desc: '小红书/淘宝/抖音爆款文案一键生成', href: '/copywriter', icon: '✍️', hot: true },
      { name: 'AI周报生成器', desc: '5分钟搞定专业周报', href: '/weekly-report', icon: '📊', hot: true },
      { name: 'AI简历生成器', desc: '3种风格，一键生成专业简历', href: '/resume', icon: '📄', hot: false },
      { name: 'AI起名生成器', desc: '宝宝/品牌/公司智能起名', href: '/name-gen', icon: '✨', hot: false },
      { name: 'AI朋友圈文案', desc: '高级感文案，告别词穷', href: '/moments', icon: '💬', hot: false },
      { name: 'AI邮件助手', desc: '商务/求职邮件快速生成', href: '/email', icon: '📧', hot: false },
    ],
  },
  {
    name: '开发者工具箱',
    desc: '程序员日常必备效率工具',
    icon: '🛠️',
    gradient: 'from-blue-500 to-cyan-500',
    tools: [
      { name: 'JSON格式化', desc: '格式化、压缩、校验一站搞定', href: '/json-formatter', icon: '🔧', hot: true },
      { name: 'Base64编解码', desc: '支持中文的Base64转换', href: '/base64', icon: '🔐', hot: false },
      { name: '时间戳转换', desc: 'Unix时间戳与日期互转', href: '/timestamp', icon: '⏰', hot: false },
      { name: '正则表达式测试', desc: '实时匹配高亮，内置常用正则', href: '/regex', icon: '🔍', hot: false },
      { name: 'URL编解码', desc: 'URL编码/解码在线工具', href: '/url-encode', icon: '🔗', hot: false },
      { name: '颜色转换器', desc: 'HEX/RGB/HSL一键互转', href: '/color-converter', icon: '🎨', hot: false },
    ],
  },
  {
    name: '文本处理',
    desc: '高效处理各种文本需求',
    icon: '📝',
    gradient: 'from-emerald-500 to-teal-500',
    tools: [
      { name: '在线字数统计', desc: '中英文字数、字符数实时统计', href: '/word-count', icon: '📝', hot: false },
      { name: 'Markdown预览', desc: '左右分栏实时预览', href: '/markdown', icon: '📄', hot: false },
      { name: '文本对比', desc: '逐行对比，差异高亮显示', href: '/text-diff', icon: '📋', hot: false },
      { name: '密码生成器', desc: '安全随机密码，强度可调', href: '/password-gen', icon: '🔑', hot: false },
    ],
  },
]

const stats = [
  { value: '16+', label: '在线工具' },
  { value: '0', label: '使用费用' },
  { value: '0', label: '需要注册' },
  { value: '24/7', label: '随时可用' },
]

export default function Home() {
  const totalTools = categories.reduce((a, c) => a + c.tools.length, 0)
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            已上线 {totalTools} 个免费工具，持续更新中
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            AI Tools
          </h1>
          <p className="text-xl text-white/80 mb-2">
            免费在线工具集 · 无需注册 · 即用即走
          </p>
          <p className="text-base text-white/60 max-w-xl mx-auto mb-10">
            AI驱动的智能写作工具 + 程序员必备开发工具 + 实用文本处理，一站式解决你的效率需求
          </p>
          <div className="flex justify-center gap-4">
            <a href="#tools" className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition shadow-lg shadow-indigo-500/20">
              开始使用
            </a>
            <Link href="/blog" className="px-8 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition backdrop-blur-sm border border-white/20">
              📚 阅读博客
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="glass rounded-2xl shadow-xl border border-white/20 p-6 grid grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <main id="tools" className="max-w-5xl mx-auto px-4 py-16">
        {categories.map((cat, ci) => (
          <div key={cat.name} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-xl shadow-lg`}>
                {cat.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{cat.name}</h2>
                <p className="text-sm text-gray-400">{cat.desc}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {cat.tools.map(t => (
                <Link key={t.href} href={t.href}
                  className="group block p-5 bg-white rounded-2xl border border-gray-100 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{t.icon}</span>
                    {t.hot && (
                      <span className="text-[10px] bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-0.5 rounded-full font-medium">
                        🔥 热门
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* CTA */}
      <div className="gradient-bg py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">更多工具持续上线中</h2>
          <p className="text-white/70 mb-8">我们每周都在开发新工具，收藏本站，随时回来探索</p>
          <div className="flex justify-center gap-4">
            <a href="#tools" className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition">
              浏览全部工具
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">🚀 AI Tools</h3>
              <p className="text-sm leading-relaxed">免费在线工具平台，AI驱动的智能写作 + 开发者工具 + 文本处理，无需注册即用即走。</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">热门工具</h4>
              <div className="space-y-2 text-sm">
                <Link href="/copywriter" className="block hover:text-white transition">AI文案生成器</Link>
                <Link href="/weekly-report" className="block hover:text-white transition">AI周报生成器</Link>
                <Link href="/name-gen" className="block hover:text-white transition">AI起名生成器</Link>
                <Link href="/json-formatter" className="block hover:text-white transition">JSON格式化</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">资源</h4>
              <div className="space-y-2 text-sm">
                <Link href="/blog" className="block hover:text-white transition">📚 博客</Link>
                <Link href="/blog/xiaohongshu-copywriting-tips" className="block hover:text-white transition">小红书文案技巧</Link>
                <Link href="/blog/baby-naming-guide-2026" className="block hover:text-white transition">宝宝起名指南</Link>
                <Link href="/blog/weekly-report-template" className="block hover:text-white transition">周报模板大全</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            © 2026 AI Tools · All rights reserved
          </div>
        </div>
      </footer>
    </div>
  )
}
