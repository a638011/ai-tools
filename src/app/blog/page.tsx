import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '博客 - AI工具使用技巧与干货分享 | AI Tools',
  description: '分享AI工具使用技巧、文案写作方法、职场效率提升等实用干货文章。',
}

const posts = [
  {
    slug: 'xiaohongshu-copywriting-tips',
    title: '2026小红书爆款文案怎么写？5个模板直接套用',
    desc: '总结小红书爆款笔记的文案规律，提供5个可直接套用的模板，配合AI文案生成器一键搞定。',
    date: '2026-02-25',
    tag: '文案技巧',
  },
  {
    slug: 'baby-naming-guide-2026',
    title: '2026宝宝起名大全：寓意好又好听的名字推荐',
    desc: '精选古典文雅、时尚现代、诗词意境等多种风格的宝宝名字，附寓意解析和起名技巧。',
    date: '2026-02-25',
    tag: '起名指南',
  },
  {
    slug: 'weekly-report-template',
    title: '周报不会写？6种万能模板让你5分钟搞定',
    desc: '程序员、产品经理、运营、销售等不同岗位的周报模板，再也不用为写周报发愁。',
    date: '2026-02-25',
    tag: '职场效率',
  },
  {
    slug: 'resume-writing-guide',
    title: '简历怎么写才能通过HR筛选？2026最新指南',
    desc: '从简历结构、内容优化到常见误区，手把手教你写出高通过率的简历。',
    date: '2026-02-25',
    tag: '求职指南',
  },
  {
    slug: 'wechat-moments-copywriting',
    title: '高级感朋友圈文案大全：100+精选文案随便发',
    desc: '旅行、美食、自拍、工作、心情等场景的朋友圈文案合集，文艺、搞笑、高冷风格任选。',
    date: '2026-02-25',
    tag: '文案合集',
  },
  {
    slug: 'business-email-writing',
    title: '商务邮件怎么写？模板+范文+注意事项全攻略',
    desc: '商务合作、求职应聘、离职申请等6种常见邮件的写法，附专业模板和范文。',
    date: '2026-02-25',
    tag: '职场技能',
  },
  {
    slug: 'developer-tools-2026',
    title: '2026年程序员必备的10个在线开发工具',
    desc: '精选10个免费在线开发者工具：JSON格式化、Base64编解码、正则表达式测试等，无需安装，打开即用。',
    date: '2026-02-25',
    tag: '开发工具',
  },
  {
    slug: 'password-security-guide',
    title: '如何生成安全的密码？2026密码安全指南',
    desc: '密码安全完全指南：为什么你的密码不安全？如何生成强密码？密码管理最佳实践。',
    date: '2026-02-25',
    tag: '安全指南',
  },
]

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回工具集</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">📚 博客</h1>
      <p className="text-gray-500 mb-8">AI工具使用技巧、文案模板、职场干货</p>
      <div className="space-y-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`}
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{p.tag}</span>
              <span className="text-xs text-gray-400">{p.date}</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">{p.title}</h2>
            <p className="text-sm text-gray-500">{p.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
