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
  {
    slug: 'json-formatter-guide',
    title: '在线JSON格式化工具使用指南：格式化、压缩、校验',
    desc: '详细介绍JSON格式化工具的使用方法，包括常见JSON错误排查，程序员必备技能。',
    date: '2026-02-25',
    tag: '开发工具',
  },
  {
    slug: 'qrcode-generator-guide',
    title: '二维码生成器使用指南：如何免费生成QR Code',
    desc: '免费在线二维码生成器教程，支持网址、文本、WiFi信息，自定义尺寸，一键下载。',
    date: '2026-02-25',
    tag: '实用工具',
  },
  {
    slug: 'css-units-guide',
    title: 'CSS中px、rem、em、vw有什么区别？前端单位完全指南',
    desc: '详解CSS各种单位的区别和使用场景，附在线转换工具，前端开发必读。',
    date: '2026-02-25',
    tag: '前端开发',
  },
  {
    slug: 'uuid-guide',
    title: '什么是UUID？UUID v4生成原理与使用场景',
    desc: '详解UUID的概念、版本区别、v4生成原理，以及在数据库和分布式系统中的应用。',
    date: '2026-02-25',
    tag: '开发知识',
  },
  {
    slug: 'cron-expression-guide',
    title: 'Cron表达式详解：Linux定时任务完全指南',
    desc: '详解Cron表达式语法、常用示例，从入门到精通Linux定时任务配置。',
    date: '2026-02-25',
    tag: '运维技能',
  },
  {
    slug: 'image-compress-guide',
    title: '如何压缩图片不损失画质？图片压缩完全指南',
    desc: '图片压缩原理、格式对比、最佳实践，在保持画质的前提下大幅减小图片体积。',
    date: '2026-02-25',
    tag: '实用技巧',
  },
  {
    slug: 'sql-formatting-guide',
    title: 'SQL格式化最佳实践：写出可读性强的SQL语句',
    desc: 'SQL代码规范、格式化技巧、命名约定，附在线格式化工具。',
    date: '2026-02-25',
    tag: '开发知识',
  },
  {
    slug: 'ip-geolocation-guide',
    title: '如何查询IP地址的地理位置？IP定位原理详解',
    desc: 'IP地址定位原理、精度分析、隐私保护，教你查询任意IP的地理位置信息。',
    date: '2026-02-25',
    tag: '网络知识',
  },
  {
    slug: 'regex-tutorial',
    title: '正则表达式入门教程：从零开始学Regex',
    desc: '正则表达式基础语法、常用模式、实战示例，手把手教你掌握正则表达式。',
    date: '2026-02-25',
    tag: '开发技能',
  },
  {
    slug: 'base64-encoding-guide',
    title: 'Base64编码是什么？原理、用途与在线工具',
    desc: '详解Base64编码原理、为什么需要Base64、常见使用场景。',
    date: '2026-02-25',
    tag: '开发知识',
  },
  {
    slug: 'hash-algorithm-guide',
    title: 'Hash加密算法详解：MD5、SHA-1、SHA-256有什么区别？',
    desc: '详解常见Hash算法的原理、区别、安全性对比，以及实际应用场景。',
    date: '2026-02-25',
    tag: '信息安全',
  },
  {
    slug: 'jwt-token-guide',
    title: 'JWT Token详解：原理、结构与安全实践',
    desc: '详解JWT的工作原理、三段式结构、签名验证，以及安全最佳实践。',
    date: '2026-02-25',
    tag: '开发知识',
  },
  {
    slug: 'markdown-cheatsheet',
    title: 'Markdown语法速查表：5分钟掌握Markdown写作',
    desc: '最全Markdown语法速查表，涵盖标题、列表、链接、代码块、表格等常用语法。',
    date: '2026-02-26',
    tag: '效率工具',
  },
  {
    slug: 'css-color-formats',
    title: 'CSS颜色格式详解：HEX、RGB、HSL怎么选？',
    desc: '详解CSS颜色格式的区别、转换方法和使用场景。',
    date: '2026-02-26',
    tag: '前端开发',
  },
  {
    slug: 'pdf-tools-guide',
    title: 'PDF文件处理完全指南：合并、压缩、转换一站搞定',
    desc: '详解PDF常见处理需求和解决方案，附免费在线工具。',
    date: '2026-02-26',
    tag: '实用工具',
  },
  {
    slug: 'css-box-shadow-guide',
    title: 'CSS Box Shadow完全指南：从基础到高级阴影效果',
    desc: '详解box-shadow语法、参数、多层阴影、常用效果，附可视化生成器。',
    date: '2026-02-26',
    tag: '前端开发',
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
