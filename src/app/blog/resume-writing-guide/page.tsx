import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '简历怎么写才能通过HR筛选？2026最新指南 | AI Tools',
  description: '从简历结构、内容优化到常见误区，手把手教你写出高通过率的简历。附3种风格模板和实用技巧。',
  keywords: '简历怎么写,简历模板,简历制作,求职简历,简历优化,HR筛选简历,2026简历指南',
}

export default function ResumePost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">简历怎么写才能通过HR筛选？2026最新指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026-02-25 · 求职指南 · 阅读约5分钟</p>

        <p className="text-gray-700 leading-relaxed">HR平均看一份简历只花6-10秒。在这么短的时间内，你的简历必须快速传达关键信息。以下是经过验证的简历写作方法。</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">一、简历的黄金结构</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-700">
          <p>1️⃣ <strong>基本信息</strong> — 姓名、电话、邮箱（简洁即可）</p>
          <p>2️⃣ <strong>求职意向</strong> — 目标职位、期望薪资（可选）</p>
          <p>3️⃣ <strong>工作经历</strong> — 倒序排列，用STAR法则描述</p>
          <p>4️⃣ <strong>教育背景</strong> — 学校、专业、学历</p>
          <p>5️⃣ <strong>技能特长</strong> — 与岗位相关的硬技能</p>
          <p>6️⃣ <strong>自我评价</strong> — 2-3句话概括核心优势</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">二、STAR法则写经历</h2>
        <p className="text-gray-700 leading-relaxed">描述工作经历时，用STAR法则让内容更有说服力：</p>
        <div className="bg-blue-50 rounded-lg p-4 my-4 text-sm text-gray-700">
          <p><strong>S</strong>ituation（背景）— 什么情况下</p>
          <p><strong>T</strong>ask（任务）— 你负责什么</p>
          <p><strong>A</strong>ction（行动）— 你做了什么</p>
          <p><strong>R</strong>esult（结果）— 取得了什么成果（用数据）</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-700">
          <p className="font-medium mb-2">❌ 错误示范：</p>
          <p className="text-red-600">负责公司网站的前端开发工作</p>
          <p className="font-medium mb-2 mt-3">✅ 正确示范：</p>
          <p className="text-green-600">主导公司官网改版项目，带领3人团队完成前端重构，页面加载速度提升60%，用户跳出率降低25%，项目提前1周交付</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">三、常见误区</h2>
        <div className="bg-yellow-50 rounded-lg p-4 my-4 text-sm text-gray-700">
          <p>❌ <strong>写成流水账</strong> — 不要罗列日常工作，要突出成果</p>
          <p>❌ <strong>一份简历投所有</strong> — 应该针对不同岗位调整重点</p>
          <p>❌ <strong>篇幅过长</strong> — 应届生1页，有经验者最多2页</p>
          <p>❌ <strong>没有数据</strong> — 用数字量化你的贡献</p>
          <p>❌ <strong>照片不专业</strong> — 要么用职业照，要么不放</p>
          <p>❌ <strong>错别字</strong> — 这是最低级但最致命的错误</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">四、3种简历风格选择</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-700">
          <p>💼 <strong>简洁专业</strong> — 适合大多数岗位，结构清晰，重点突出</p>
          <p>🎨 <strong>创意风格</strong> — 适合设计、市场等创意岗位</p>
          <p>🎓 <strong>学术科研</strong> — 适合研究生、博士、科研岗位</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">快速生成简历</h2>
        <p className="text-gray-700 leading-relaxed">填写基本信息，<Link href="/resume" className="text-blue-500 hover:underline">AI简历生成器</Link>帮你按照专业模板快速生成简历，支持3种风格。</p>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
          <p className="text-gray-700 mb-3">👇 立即体验</p>
          <Link href="/resume" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">
            📄 打开AI简历生成器
          </Link>
        </div>
      </article>
    </main>
  )
}
