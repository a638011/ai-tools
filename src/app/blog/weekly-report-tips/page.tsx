import Link from 'next/link'

export default function WeeklyReportTips() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">周报写作技巧：如何写出让领导满意的周报</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">周报是职场中最常见的工作汇报形式，但很多人把它当成流水账来写。一份好的周报不仅能展示你的工作成果，还能帮你争取资源、获得认可。本文分享实用的周报写作技巧，让你的周报从"应付差事"变成"职场利器"。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">周报的核心目的</h2>
        <p className="text-gray-700 leading-relaxed">写周报不是为了证明你很忙，而是为了：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">同步信息</code><span className="text-gray-600">让领导和团队了解项目进展和当前状态</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">展示价值</code><span className="text-gray-600">量化你的工作成果，体现个人贡献</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">暴露风险</code><span className="text-gray-600">提前预警问题，争取支持和资源</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-24">规划方向</code><span className="text-gray-600">明确下周计划，保持工作节奏</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">周报的黄金结构</h2>
        <p className="text-gray-700 leading-relaxed">推荐使用"三段式"结构，简洁清晰：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium text-blue-600">一、本周完成</p>
            <p className="text-gray-600">列出已完成的工作，重点突出成果和数据</p>
          </div>
          <div>
            <p className="font-medium text-blue-600">二、进行中 / 遇到的问题</p>
            <p className="text-gray-600">正在推进的事项，以及需要协助解决的问题</p>
          </div>
          <div>
            <p className="font-medium text-blue-600">三、下周计划</p>
            <p className="text-gray-600">下周的工作重点和目标</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">反面教材 vs 正面示范</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium text-red-600">❌ 差的周报：</p>
          <p className="mt-1">1. 本周开了几个会</p>
          <p>2. 改了一些bug</p>
          <p>3. 写了文档</p>
          <p>4. 和产品沟通了需求</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium text-green-600">✅ 好的周报：</p>
          <p className="mt-1">1. 完成用户登录模块重构，登录响应时间从 2.3s 降至 0.8s（提升65%）</p>
          <p>2. 修复线上支付回调丢失问题，影响订单约 200单/天，已上线验证</p>
          <p>3. 完成 API 接口文档 v2.0，覆盖 35 个接口</p>
          <p>4. 与产品确认 Q2 需求优先级，输出排期表（附链接）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">写好周报的7个技巧</h2>
        <p className="text-gray-700 leading-relaxed">1. 用数据说话。"优化了性能"不如"页面加载时间从3s降到1.2s"。能量化的一定要量化。</p>
        <p className="text-gray-700 leading-relaxed">2. 突出业务价值。不要只写技术细节，要关联业务影响。"修复了一个bug"不如"修复支付异常，挽回日均损失约5000元"。</p>
        <p className="text-gray-700 leading-relaxed">3. 控制篇幅。周报不是日记，每个板块3-5条即可。领导没时间看长篇大论。</p>
        <p className="text-gray-700 leading-relaxed">4. 主动暴露风险。遇到问题不要藏着，提前说明风险和需要的支持，这是专业的表现。</p>
        <p className="text-gray-700 leading-relaxed">5. 下周计划要具体。"继续推进项目"太模糊，"完成支付模块联调并提测"才是好的计划。</p>
        <p className="text-gray-700 leading-relaxed">6. 固定时间写。建议周五下午花15-20分钟写周报，趁记忆清晰。</p>
        <p className="text-gray-700 leading-relaxed">7. 日常随手记录。平时用便签或文档记录每天的工作要点，周五汇总就很轻松。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">不同岗位的周报侧重</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>岗位</span><span>重点内容</span><span>关键指标</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>开发</span><span>功能完成度、bug修复、技术优化</span><span>代码量、响应时间、bug数</span>
            <span>产品</span><span>需求推进、用户反馈、数据分析</span><span>需求完成率、用户满意度</span>
            <span>运营</span><span>活动效果、用户增长、内容产出</span><span>DAU、转化率、ROI</span>
            <span>设计</span><span>设计稿交付、评审反馈、设计规范</span><span>交付数量、修改轮次</span>
            <span>销售</span><span>客户拜访、商机跟进、成交情况</span><span>拜访量、成交额、转化率</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">周报模板</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p className="font-medium">【周报】姓名 - 第X周（MM.DD - MM.DD）</p>
          <p>&nbsp;</p>
          <p className="font-medium">一、本周完成</p>
          <p>1. [项目名] 具体成果 + 数据/影响</p>
          <p>2. [项目名] 具体成果 + 数据/影响</p>
          <p>&nbsp;</p>
          <p className="font-medium">二、进行中 & 问题</p>
          <p>1. [项目名] 当前进度 XX%，预计完成时间</p>
          <p>2. [风险] 问题描述 + 需要的支持</p>
          <p>&nbsp;</p>
          <p className="font-medium">三、下周计划</p>
          <p>1. [优先级P0] 具体任务 + 预期产出</p>
          <p>2. [优先级P1] 具体任务 + 预期产出</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速生成周报？试试我们的 <Link href="/weekly-report" className="text-blue-500 hover:underline font-medium">AI周报生成器</Link>，输入关键词自动生成结构化周报。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
