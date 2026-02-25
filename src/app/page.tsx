import Link from 'next/link'

const tools = [
  { name: 'AI文案生成器', desc: '一键生成小红书/淘宝/抖音爆款文案', href: '/copywriter', icon: '✍️', tag: '热门' },
  { name: 'AI周报生成器', desc: '输入工作内容，秒出专业周报', href: '/weekly-report', icon: '📊', tag: '热门' },
  { name: 'AI简历生成器', desc: '填写信息，一键生成专业简历', href: '/resume', icon: '📄', tag: 'NEW' },
  { name: 'AI起名生成器', desc: '宝宝/品牌/公司智能起名', href: '/name-gen', icon: '✨', tag: 'NEW' },
  { name: 'AI朋友圈文案', desc: '一键生成高级感朋友圈文案', href: '/moments', icon: '💬', tag: 'NEW' },
  { name: 'AI邮件助手', desc: '快速生成商务/求职邮件', href: '/email', icon: '📧', tag: 'NEW' },
  { name: '在线字数统计', desc: '实时统计字数、字符数、中英文', href: '/word-count', icon: '📝', tag: 'NEW' },
  { name: 'JSON格式化', desc: 'JSON格式化、压缩、校验工具', href: '/json-formatter', icon: '🔧', tag: 'NEW' },
  { name: 'Base64编解码', desc: '在线Base64编码/解码，支持中文', href: '/base64', icon: '🔐', tag: 'NEW' },
  { name: '时间戳转换', desc: 'Unix时间戳与日期互转', href: '/timestamp', icon: '⏰', tag: 'NEW' },
]

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🚀 AI Tools</h1>
        <p className="text-lg text-gray-600">免费AI工具集 · 让AI帮你提升效率</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map(t => (
          <Link key={t.href} href={t.href}
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">{t.icon}</span>
              {t.tag === '热门' ? (
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">{t.tag}</span>
              ) : t.tag === 'NEW' ? (
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">{t.tag}</span>
              ) : (
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">{t.tag}</span>
              )}
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">{t.name}</h2>
            <p className="text-sm text-gray-500">{t.desc}</p>
          </Link>
        ))}
      </div>
      <footer className="text-center mt-16 text-sm text-gray-400">
        <Link href="/blog" className="text-blue-500 hover:underline mr-4">📚 博客</Link>
        © 2026 AI Tools · Powered by AI
      </footer>
    </main>
  )
}
