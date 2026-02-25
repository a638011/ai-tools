import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '周报不会写？6种万能模板让你5分钟搞定 | AI Tools',
  description: '程序员、产品经理、运营、销售、设计师、管理层等不同岗位的周报模板，附写作技巧和注意事项，5分钟搞定周报。',
  keywords: '周报模板,周报怎么写,工作周报,程序员周报,产品经理周报,周报范文,AI周报生成器',
}

export default function WeeklyReportPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">周报不会写？6种万能模板让你5分钟搞定</h1>
        <p className="text-gray-400 text-sm mb-8">2026-02-25 · 职场效率 · 阅读约5分钟</p>

        <p className="text-gray-700 leading-relaxed">每到周五下午，最让打工人头疼的事情之一就是写周报。写少了显得没干活，写多了又像在凑字数。其实周报有固定套路，掌握模板后5分钟就能搞定。</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">周报的核心结构</h2>
        <p className="text-gray-700 leading-relaxed">不管什么岗位，好的周报都包含三个部分：</p>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-700">
          <p>📋 <strong>本周完成</strong> — 做了什么（用数据量化）</p>
          <p>🎯 <strong>下周计划</strong> — 要做什么（具体可执行）</p>
          <p>⚠️ <strong>问题与建议</strong> — 遇到什么困难，需要什么支持</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">一、程序员周报模板</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-600 whitespace-pre-line">
{`【本周完成】
1. 完成用户模块API开发（5个接口），已通过代码审查
2. 修复线上Bug 3个（#1234, #1235, #1236）
3. 优化首页加载性能，LCP从3.2s降至1.8s
4. 参与需求评审会议2次

【下周计划】
1. 完成订单模块开发（预计3天）
2. 编写单元测试，覆盖率目标>80%
3. 配合QA进行集成测试

【问题】
- 第三方支付接口文档不完整，需要对方提供补充文档`}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">二、产品经理周报模板</h2>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-600 whitespace-pre-line">
{`【本周完成】
1. 完成V2.0需求文档撰写，已评审通过
2. 竞品分析报告（分析了3款竞品的核心功能差异）
3. 用户访谈5人，整理反馈报告
4. 跟进开发进度，当前Sprint完成率85%

【下周计划】
1. V2.0 UI设计评审
2. 制定Q2产品路线图
3. 组织用户满意度调研

【数据看板】
- DAU: 12,500（+8%）
- 次日留存: 42%（+2%）
- 核心转化率: 3.2%（持平）`}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">写周报的3个技巧</h2>
        <div className="bg-yellow-50 rounded-lg p-4 my-4 text-sm text-gray-700">
          <p>💡 <strong>用数据说话</strong> — "优化了性能"不如"LCP从3.2s降至1.8s"</p>
          <p>💡 <strong>突出价值</strong> — 不是列流水账，而是展示你的贡献</p>
          <p>💡 <strong>平时记录</strong> — 每天花1分钟记下做了什么，周五汇总就很快</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">更快的方式：AI帮你写</h2>
        <p className="text-gray-700 leading-relaxed">如果连5分钟都不想花，试试<Link href="/weekly-report" className="text-blue-500 hover:underline">AI周报生成器</Link>，输入本周做的事情，选择你的岗位，一键生成专业周报。</p>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
          <p className="text-gray-700 mb-3">👇 立即体验</p>
          <Link href="/weekly-report" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">
            📊 打开AI周报生成器
          </Link>
        </div>
      </article>
    </main>
  )
}
