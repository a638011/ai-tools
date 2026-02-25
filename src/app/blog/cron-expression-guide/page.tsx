import Link from 'next/link'

export default function CronGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cron表达式详解：Linux定时任务完全指南</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">Cron是Linux/Unix系统中最常用的定时任务工具。无论是定时备份数据库、清理日志、还是发送报告，都离不开Cron。掌握Cron表达式是每个后端开发者和运维工程师的必备技能。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cron表达式格式</h2>
        <p className="text-gray-700 leading-relaxed">标准Cron表达式由5个字段组成，用空格分隔：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-center">
          <p className="text-gray-700">┌───── 分钟 (0-59)</p>
          <p className="text-gray-700">│ ┌───── 小时 (0-23)</p>
          <p className="text-gray-700">│ │ ┌───── 日 (1-31)</p>
          <p className="text-gray-700">│ │ │ ┌───── 月 (1-12)</p>
          <p className="text-gray-700">│ │ │ │ ┌───── 星期 (0-6, 0=周日)</p>
          <p className="text-blue-600 font-bold">* * * * *</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">特殊字符</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><code className="bg-gray-100 px-1 rounded">*</code> — 匹配所有值（每分钟/每小时/每天...）</li>
          <li><code className="bg-gray-100 px-1 rounded">,</code> — 列举多个值（1,3,5 = 第1、3、5）</li>
          <li><code className="bg-gray-100 px-1 rounded">-</code> — 范围（1-5 = 1到5）</li>
          <li><code className="bg-gray-100 px-1 rounded">/</code> — 步长（*/5 = 每5个单位）</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">* * * * *</code><span className="text-gray-600">每分钟执行</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">*/5 * * * *</code><span className="text-gray-600">每5分钟执行</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">0 * * * *</code><span className="text-gray-600">每小时整点执行</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">0 9 * * *</code><span className="text-gray-600">每天早上9点</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">0 9 * * 1-5</code><span className="text-gray-600">工作日早上9点</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">0 0 * * *</code><span className="text-gray-600">每天午夜</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">0 0 1 * *</code><span className="text-gray-600">每月1号午夜</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">0 0 * * 0</code><span className="text-gray-600">每周日午夜</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">30 3 * * *</code><span className="text-gray-600">每天凌晨3:30</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-32">0 9,18 * * *</code><span className="text-gray-600">每天9点和18点</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实际应用场景</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>数据库备份</strong> — <code>0 2 * * *</code> 每天凌晨2点自动备份</li>
          <li><strong>日志清理</strong> — <code>0 0 * * 0</code> 每周日清理过期日志</li>
          <li><strong>数据同步</strong> — <code>*/30 * * * *</code> 每30分钟同步一次</li>
          <li><strong>报告生成</strong> — <code>0 9 * * 1</code> 每周一早9点生成周报</li>
          <li><strong>证书续期</strong> — <code>0 0 1 * *</code> 每月1号检查SSL证书</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Linux中使用Cron</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p># 编辑当前用户的crontab</p>
          <p className="text-blue-600">crontab -e</p>
          <p className="mt-2"># 查看当前用户的定时任务</p>
          <p className="text-blue-600">crontab -l</p>
          <p className="mt-2"># 删除所有定时任务</p>
          <p className="text-blue-600">crontab -r</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线解析工具</h2>
        <p className="text-gray-700 leading-relaxed">记不住Cron语法？用我们的 <Link href="/cron-parser" className="text-blue-500 hover:underline font-medium">Cron表达式在线解析器</Link>，输入表达式即可看到每个字段的含义，还有常用模板一键使用。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
