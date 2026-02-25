import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '商务邮件怎么写？模板+范文+注意事项全攻略 | AI Tools',
  description: '商务合作、求职应聘、离职申请、感谢信、投诉反馈、邀请函等6种常见邮件的写法，附专业模板、范文和注意事项。',
  keywords: '商务邮件怎么写,邮件模板,求职邮件,离职邮件,商务邮件范文,邮件格式,英文邮件',
}

export default function EmailPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">商务邮件怎么写？模板+范文+注意事项全攻略</h1>
        <p className="text-gray-400 text-sm mb-8">2026-02-25 · 职场技能 · 阅读约5分钟</p>

        <p className="text-gray-700 leading-relaxed">邮件是职场最重要的沟通工具之一。一封得体的邮件能给人留下专业的印象，而一封糟糕的邮件可能毁掉一次合作机会。本文整理了6种常见邮件的写法。</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">邮件的基本结构</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-700">
          <p>📧 <strong>主题行</strong> — 简明扼要，让人一眼知道邮件内容</p>
          <p>👋 <strong>称呼</strong> — 根据关系选择正式/友好程度</p>
          <p>📝 <strong>正文</strong> — 开门见山，逻辑清晰，重点突出</p>
          <p>🤝 <strong>结尾</strong> — 明确下一步行动或期望</p>
          <p>✍️ <strong>署名</strong> — 姓名+职位+联系方式</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">一、商务合作邮件</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-600 whitespace-pre-line">
{`主题：关于XX项目合作事宜

张经理，您好！

冒昧打扰，我是XX公司的李明，负责商务合作。

近期关注到贵公司在AI领域的出色表现，我们认为双方在以下方面有很大的合作空间：

1. 技术资源互补，共同开发新产品
2. 渠道共享，扩大市场覆盖
3. 联合营销，提升品牌影响力

如您方便，希望能安排一次会面详谈。

顺祝商祺！

李明
XX公司 商务部
电话：138xxxx8888`}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">二、求职邮件</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-600 whitespace-pre-line">
{`主题：求职申请 - 前端工程师岗位 - 李明

HR您好！

我通过贵公司招聘信息了解到前端工程师岗位，非常感兴趣。

关于我的情况：
1. 3年前端开发经验，熟悉React/Vue/TypeScript
2. 曾主导多个大型项目的前端架构设计
3. 对贵公司的产品方向非常认同

随信附上我的简历，期待面试机会。

祝好，
李明`}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">邮件写作注意事项</h2>
        <div className="bg-yellow-50 rounded-lg p-4 my-4 text-sm text-gray-700">
          <p>✅ <strong>主题行要具体</strong> — "合作"不如"关于XX项目合作事宜"</p>
          <p>✅ <strong>开门见山</strong> — 第一段就说清楚目的</p>
          <p>✅ <strong>分段分点</strong> — 方便快速阅读</p>
          <p>✅ <strong>检查附件</strong> — 说了"见附件"就一定要附上</p>
          <p>❌ <strong>避免错别字</strong> — 发送前至少检查一遍</p>
          <p>❌ <strong>避免过长</strong> — 能3句说清的不要写10句</p>
          <p>❌ <strong>避免群发感</strong> — 个性化称呼和内容</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">用AI快速生成邮件</h2>
        <p className="text-gray-700 leading-relaxed">输入核心要点，<Link href="/email" className="text-blue-500 hover:underline">AI邮件助手</Link>帮你生成完整的专业邮件，支持商务合作、求职、离职、感谢信等6种类型。</p>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
          <p className="text-gray-700 mb-3">👇 立即体验</p>
          <Link href="/email" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">
            📧 打开AI邮件助手
          </Link>
        </div>
      </article>
    </main>
  )
}
