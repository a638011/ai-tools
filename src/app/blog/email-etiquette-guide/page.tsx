import Link from 'next/link'

export default function EmailEtiquetteGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">邮件礼仪指南：职场邮件的10个注意事项</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">在职场中，邮件是最正式的沟通方式之一。一封得体的邮件能展现你的专业素养，而一封糟糕的邮件可能让你在同事和客户心中大打折扣。本文总结了职场邮件的10个关键注意事项，帮你写出专业、高效的邮件。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. 主题行要精准</h2>
        <p className="text-gray-700 leading-relaxed">主题行是收件人决定是否打开邮件的第一依据。好的主题行应该简洁、具体、包含关键信息。</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="text-red-600">❌ 主题：请查收 / 你好 / 重要 / （无主题）</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="text-green-600">✅ 主题：【审批】Q2营销预算方案 - 请于3月5日前反馈</p>
          <p className="text-green-600">✅ 主题：【会议纪要】2月25日产品评审会 - 3项待办</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium">💡 主题行公式：【类型标签】+ 具体事项 + 时间/行动要求</p>
          <p className="mt-1">常用标签：【审批】【通知】【请求】【FYI】【紧急】【会议纪要】</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 称呼要得体</h2>
        <p className="text-gray-700 leading-relaxed">称呼体现了你对收件人的尊重和对关系的把握：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">上级/客户</code><span className="text-gray-600">X总/X经理/X老师，您好</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">平级同事</code><span className="text-gray-600">Hi XX / XX你好</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">多人邮件</code><span className="text-gray-600">各位好 / 大家好 / Dear All</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">外部正式</code><span className="text-gray-600">尊敬的XX先生/女士</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. 正文结构清晰</h2>
        <p className="text-gray-700 leading-relaxed">职场邮件推荐"金字塔结构"：先说结论，再说原因和细节。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p className="font-medium">推荐结构：</p>
          <p>第一段：目的和结论（为什么写这封邮件，需要对方做什么）</p>
          <p>第二段：背景和详情（必要的上下文信息）</p>
          <p>第三段：行动项和截止时间（明确的下一步）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. 收件人、抄送、密送要分清</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">To（收件）</code><span className="text-gray-600">需要处理或回复的人，是邮件的直接责任人</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">CC（抄送）</code><span className="text-gray-600">需要知晓但不需要行动的人，如上级、相关方</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">BCC（密送）</code><span className="text-gray-600">其他收件人看不到的抄送，用于保护隐私</span></div>
        </div>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="text-red-600 font-medium">⚠️ 常见错误：</p>
          <p>• 群发邮件把所有人放在To里，暴露了所有人的邮箱地址（应该用BCC）</p>
          <p>• 回复时不小心"回复全部"，把私密内容发给了所有人</p>
          <p>• 抄送太多无关的人，造成信息噪音</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. 控制邮件长度</h2>
        <p className="text-gray-700 leading-relaxed">职场人每天收到大量邮件，没人愿意读长篇大论。邮件正文控制在5-8行以内为佳。如果内容确实很多，把详细信息放在附件中，邮件正文只写摘要和行动项。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. 附件不要忘</h2>
        <p className="text-gray-700 leading-relaxed">写了"请见附件"却忘记添加附件，是职场邮件最尴尬的失误之一。发送前务必检查：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 附件是否已添加</p>
          <p>• 附件是否是正确的版本</p>
          <p>• 附件命名是否规范（如"Q2预算方案_v2.0_20260225.xlsx"）</p>
          <p>• 附件大小是否超过邮箱限制（一般10-25MB）</p>
          <p>• 大文件考虑使用网盘链接代替附件</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. 回复要及时</h2>
        <p className="text-gray-700 leading-relaxed">职场邮件的回复时效建议：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">紧急邮件</code><span className="text-gray-600">2小时内回复</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">普通邮件</code><span className="text-gray-600">24小时内回复</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-20">复杂问题</code><span className="text-gray-600">先回复"已收到，预计X日前给您详细回复"</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. 语气要专业</h2>
        <p className="text-gray-700 leading-relaxed">邮件语气应该正式但不生硬，礼貌但不卑微。避免使用过多感叹号、表情符号和网络用语。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="text-red-600">❌ 这个方案有问题！！！赶紧改！！</p>
          <p className="text-green-600 mt-1">✅ 方案中有几处需要调整的地方，已在附件中标注，麻烦您看一下。</p>
          <p className="text-red-600 mt-2">❌ 老板说必须这周搞定，你看着办吧</p>
          <p className="text-green-600 mt-1">✅ 此事项优先级较高，需要在本周五前完成，如有困难请及时沟通。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. 签名要规范</h2>
        <p className="text-gray-700 leading-relaxed">专业的邮件签名应包含：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p className="font-medium">张三 | 产品经理</p>
          <p>XX科技有限公司 · 产品部</p>
          <p>手机：138-xxxx-xxxx</p>
          <p>邮箱：zhangsan@example.com</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. 发送前检查清单</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>□ 收件人是否正确（特别注意同名不同人）</p>
          <p>□ 主题行是否清晰具体</p>
          <p>□ 正文是否有错别字和语法错误</p>
          <p>□ 附件是否已添加且版本正确</p>
          <p>□ 抄送人是否合适（不多不少）</p>
          <p>□ 语气是否得体</p>
          <p>□ 是否明确了行动项和截止时间</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速撰写专业邮件？试试我们的 <Link href="/email-generator" className="text-blue-500 hover:underline font-medium">AI邮件生成器</Link>，输入要点自动生成得体的职场邮件。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
