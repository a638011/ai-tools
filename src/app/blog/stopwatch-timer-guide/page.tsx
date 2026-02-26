import Link from 'next/link'

export default function StopwatchTimerGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">在线计时器和秒表：时间管理的好帮手</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">无论是做饭定时、运动计时、考试倒计时还是会议控时，计时器和秒表都是最简单实用的时间管理工具。这篇文章介绍计时器和秒表的区别、使用场景，以及如何用代码实现一个精准的计时器。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">计时器 vs 秒表</h2>
        <p className="text-gray-700 leading-relaxed">虽然都和时间有关，但它们的用途完全不同：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-4">
          <div>
            <p className="font-medium text-blue-600">倒计时器（Timer）</p>
            <p>设定一个时间，从这个时间开始递减到零。到时间后发出提醒。</p>
            <p className="text-gray-500 mt-1">场景：做饭定时、考试倒计时、番茄钟、会议限时</p>
          </div>
          <div>
            <p className="font-medium text-green-600">秒表（Stopwatch）</p>
            <p>从零开始递增计时，记录经过了多长时间。支持分段计时（Lap）。</p>
            <p className="text-gray-500 mt-1">场景：运动计时、实验计时、速度测试、工时记录</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">时间管理中的应用</h2>

        <p className="text-gray-700 leading-relaxed font-medium">1. 番茄工作法</p>
        <p className="text-gray-700 leading-relaxed">设定25分钟倒计时专注工作，5分钟休息。这是最经典的计时器应用场景。研究表明，有明确时间限制时，人的专注力和效率会显著提升。</p>

        <p className="text-gray-700 leading-relaxed font-medium mt-4">2. 时间块（Time Boxing）</p>
        <p className="text-gray-700 leading-relaxed">给每个任务分配固定时间块，用计时器严格执行：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>⏱️ 回复邮件 — 30分钟</p>
          <p>⏱️ 写报告 — 60分钟</p>
          <p>⏱️ 代码审查 — 45分钟</p>
          <p>⏱️ 午休 — 60分钟</p>
        </div>
        <p className="text-gray-700 leading-relaxed">时间到了就停下，即使没完成也切换到下一个任务。这能防止在某个任务上花太多时间。</p>

        <p className="text-gray-700 leading-relaxed font-medium mt-4">3. 帕金森定律对抗</p>
        <p className="text-gray-700 leading-relaxed">"工作会膨胀到填满可用时间。"给自己设一个比预期更短的倒计时，你会惊讶地发现很多事情其实不需要那么久。</p>

        <p className="text-gray-700 leading-relaxed font-medium mt-4">4. 运动训练</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• HIIT训练：30秒高强度 + 30秒休息，循环8-10组</p>
          <p>• 平板支撑：秒表计时，记录每次时长</p>
          <p>• 跑步分段：用Lap功能记录每圈用时</p>
          <p>• 拉伸：每个动作倒计时30秒</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用JavaScript实现秒表</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 精准秒表实现</p>
            <p>{`class Stopwatch {`}</p>
            <p>{`  constructor() {`}</p>
            <p>{`    this.startTime = 0;`}</p>
            <p>{`    this.elapsed = 0;`}</p>
            <p>{`    this.running = false;`}</p>
            <p>{`    this.laps = [];`}</p>
            <p>{`  }`}</p>
            <p>{`  start() {`}</p>
            <p>{`    if (this.running) return;`}</p>
            <p>{`    this.running = true;`}</p>
            <p>{`    this.startTime = Date.now() - this.elapsed;`}</p>
            <p>{`    this._tick();`}</p>
            <p>{`  }`}</p>
            <p>{`  stop() {`}</p>
            <p>{`    this.running = false;`}</p>
            <p>{`    this.elapsed = Date.now() - this.startTime;`}</p>
            <p>{`  }`}</p>
            <p>{`  reset() {`}</p>
            <p>{`    this.running = false;`}</p>
            <p>{`    this.elapsed = 0;`}</p>
            <p>{`    this.laps = [];`}</p>
            <p>{`  }`}</p>
            <p>{`  lap() {`}</p>
            <p>{`    this.laps.push(this.elapsed);`}</p>
            <p>{`  }`}</p>
            <p>{`  _tick() {`}</p>
            <p>{`    if (!this.running) return;`}</p>
            <p>{`    this.elapsed = Date.now() - this.startTime;`}</p>
            <p>{`    requestAnimationFrame(() => this._tick());`}</p>
            <p>{`  }`}</p>
            <p>{`}`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用JavaScript实现倒计时</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 倒计时器</p>
            <p>{`function countdown(seconds, onTick, onDone) {`}</p>
            <p>{`  let remaining = seconds;`}</p>
            <p>{`  onTick(remaining);`}</p>
            <p>{`  const timer = setInterval(() => {`}</p>
            <p>{`    remaining--;`}</p>
            <p>{`    onTick(remaining);`}</p>
            <p>{`    if (remaining <= 0) {`}</p>
            <p>{`      clearInterval(timer);`}</p>
            <p>{`      onDone();`}</p>
            <p>{`    }`}</p>
            <p>{`  }, 1000);`}</p>
            <p>{`  return () => clearInterval(timer);`}</p>
            <p>{`}`}</p>
            <p className="mt-2 text-gray-500">// 使用示例：25分钟番茄钟</p>
            <p>{`countdown(25 * 60,`}</p>
            <p>{`  (s) => console.log(formatTime(s)),`}</p>
            <p>{`  () => alert('时间到！')`}</p>
            <p>{`);`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">时间格式化</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 毫秒转 HH:MM:SS.ms 格式</p>
          <p>{`function formatTime(ms) {`}</p>
          <p>{`  const h = Math.floor(ms / 3600000);`}</p>
          <p>{`  const m = Math.floor((ms % 3600000) / 60000);`}</p>
          <p>{`  const s = Math.floor((ms % 60000) / 1000);`}</p>
          <p>{`  const mil = Math.floor((ms % 1000) / 10);`}</p>
          <p>{`  return [`}</p>
          <p>{`    h > 0 ? String(h).padStart(2,'0') : null,`}</p>
          <p>{`    String(m).padStart(2, '0'),`}</p>
          <p>{`    String(s).padStart(2, '0')`}</p>
          <p>{`  ].filter(Boolean).join(':')`}</p>
          <p>{`    + '.' + String(mil).padStart(2, '0');`}</p>
          <p>{`}`}</p>
          <p className="text-green-600 mt-1">// formatTime(754320) → &quot;12:34.32&quot;</p>
          <p className="text-green-600">// formatTime(3754320) → &quot;01:02:34.32&quot;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">setInterval的精度问题</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ <code className="bg-yellow-100 px-1 rounded">setInterval(fn, 1000)</code> 并不保证精确的1秒间隔。浏览器标签页在后台时，间隔可能被延长到1秒以上。</p>
          <p>解决方案：</p>
          <p>• 用 <code className="bg-yellow-100 px-1 rounded">Date.now()</code> 计算实际经过时间，而不是依赖计数器累加</p>
          <p>• 用 <code className="bg-yellow-100 px-1 rounded">requestAnimationFrame</code> 获得更流畅的更新</p>
          <p>• 用 Web Worker 在后台保持精确计时</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用技巧</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>💡 开会时设个倒计时，放在共享屏幕上，会议效率立刻提升</p>
          <p>💡 做饭同时煮多道菜？设多个不同时长的倒计时</p>
          <p>💡 用秒表记录日常任务耗时一周，你会发现时间都去哪了</p>
          <p>💡 考试前用倒计时模拟真实考试环境练习</p>
          <p>💡 给孩子设定游戏时间倒计时，培养时间观念</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要一个好用的计时工具？试试我们的 <Link href="/stopwatch" className="text-blue-500 hover:underline font-medium">免费在线秒表和计时器</Link>，支持倒计时、秒表、分段计时，还有到时提醒音，打开浏览器就能用。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多效率工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
