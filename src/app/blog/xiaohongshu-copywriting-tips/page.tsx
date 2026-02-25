import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '2026小红书爆款文案怎么写？5个模板直接套用 | AI Tools',
  description: '总结小红书爆款笔记的文案规律，提供5个可直接套用的写作模板。种草带货、故事分享、教程干货、测评对比、情感共鸣，配合AI文案生成器一键搞定。',
  keywords: '小红书文案,小红书爆款文案,小红书文案模板,小红书文案怎么写,种草文案,小红书笔记模板',
}

export default function XiaohongshuPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">2026小红书爆款文案怎么写？5个模板直接套用</h1>
        <p className="text-gray-400 text-sm mb-8">2026-02-25 · 文案技巧 · 阅读约5分钟</p>

        <p className="text-gray-700 leading-relaxed">小红书作为国内最大的种草平台，文案质量直接决定了笔记的曝光量。很多人发笔记没流量，核心原因就是文案不够吸引人。今天总结了5种经过验证的爆款文案模板，直接套用就能写出高互动的笔记。</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">一、种草带货型</h2>
        <p className="text-gray-700 leading-relaxed">这是小红书最常见的文案类型，核心是<strong>制造购买欲望</strong>。</p>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-600">
          <p className="font-medium mb-2">模板结构：</p>
          <p>🔥 吸睛标题（数字+痛点+解决方案）</p>
          <p>💫 真实使用感受（第一人称）</p>
          <p>✨ 3个核心卖点（用emoji分点）</p>
          <p>⚠️ 注意事项（增加可信度）</p>
          <p>📌 总结+话题标签</p>
        </div>
        <p className="text-gray-700 leading-relaxed">关键技巧：标题一定要有<strong>数字</strong>和<strong>情绪词</strong>，比如"用了一个月的真实感受"比"产品测评"点击率高3倍。</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">二、故事分享型</h2>
        <p className="text-gray-700 leading-relaxed">用真实故事打动读者，<strong>共鸣感</strong>是核心。</p>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-600">
          <p className="font-medium mb-2">模板结构：</p>
          <p>📖 故事开头（制造悬念）</p>
          <p>🙅‍♀️ 转折（"一开始我是拒绝的"）</p>
          <p>😂 反转（被打脸的真实体验）</p>
          <p>🌟 变化和收获</p>
          <p>❤️ 推荐+话题标签</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">三、教程干货型</h2>
        <p className="text-gray-700 leading-relaxed">信息密度高，<strong>收藏率</strong>最高的类型。</p>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-600">
          <p className="font-medium mb-2">模板结构：</p>
          <p>📚 保姆级标题（"看完少走99%弯路"）</p>
          <p>🔍 先说结论</p>
          <p>📋 分步骤详解（Step 1/2/3/4）</p>
          <p>❌ 常见误区避坑</p>
          <p>💡 总结提醒 + "收藏这篇"</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">四、测评对比型</h2>
        <p className="text-gray-700 leading-relaxed">客观分析，帮助读者做决策，<strong>信任感</strong>最强。</p>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-600">
          <p className="font-medium mb-2">模板结构：</p>
          <p>🔬 深度测评标题（"用了30天的真实数据"）</p>
          <p>⭐ 综合评分</p>
          <p>📊 分维度评测（外观/体验/效果/性价比）</p>
          <p>✅❌ 优缺点对比</p>
          <p>🏆 适合人群 + 总结</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">五、情感共鸣型</h2>
        <p className="text-gray-700 leading-relaxed">触动内心，<strong>转发率</strong>最高。</p>
        <div className="bg-gray-50 rounded-lg p-4 my-4 text-sm text-gray-600">
          <p className="font-medium mb-2">模板结构：</p>
          <p>💭 引发思考的开头</p>
          <p>短句+换行（制造节奏感）</p>
          <p>🌱 温暖的转折</p>
          <p>❤️ 金句收尾</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">懒人方案：用AI一键生成</h2>
        <p className="text-gray-700 leading-relaxed">如果你觉得手动套模板还是麻烦，可以试试我们的<Link href="/copywriter" className="text-blue-500 hover:underline">AI文案生成器</Link>，选择平台和风格，输入产品关键词，一键生成符合以上模板的爆款文案。</p>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
          <p className="text-gray-700 mb-3">👇 立即体验</p>
          <Link href="/copywriter" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">
            ✍️ 打开AI文案生成器
          </Link>
        </div>
      </article>
    </main>
  )
}
