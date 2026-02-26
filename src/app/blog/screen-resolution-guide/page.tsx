import Link from 'next/link'

export default function ScreenResolutionGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">屏幕分辨率详解：1080p/2K/4K有什么区别？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">买显示器、选手机、看视频时，总会遇到1080p、2K、4K这些术语。它们到底代表什么？分辨率越高越好吗？这篇文章帮你彻底搞懂屏幕分辨率。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是分辨率？</h2>
        <p className="text-gray-700 leading-relaxed">分辨率是指屏幕上像素点的数量，通常用"宽×高"表示。比如1920×1080意味着屏幕横向有1920个像素，纵向有1080个像素，总共约207万个像素点。像素越多，画面越细腻。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见分辨率对照表</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 font-medium text-gray-700 mb-2">
            <span>名称</span><span>分辨率</span><span>总像素</span><span>常见设备</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>720p (HD)</span><span>1280×720</span><span>92万</span><span>老手机、网络视频</span>
            <span>1080p (FHD)</span><span>1920×1080</span><span>207万</span><span>主流显示器、手机</span>
            <span>1440p (QHD/2K)</span><span>2560×1440</span><span>369万</span><span>高端显示器</span>
            <span>4K (UHD)</span><span>3840×2160</span><span>829万</span><span>高端电视、专业显示器</span>
            <span>5K</span><span>5120×2880</span><span>1475万</span><span>iMac、专业设计</span>
            <span>8K</span><span>7680×4320</span><span>3318万</span><span>高端电视</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1080p vs 2K vs 4K 直观对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 4K的像素数量是1080p的 <span className="font-bold text-blue-600">4倍</span>（宽和高各翻倍）</p>
          <p>• 2K的像素数量是1080p的 <span className="font-bold text-blue-600">1.78倍</span></p>
          <p>• 8K的像素数量是4K的 <span className="font-bold text-blue-600">4倍</span>，是1080p的 <span className="font-bold text-blue-600">16倍</span></p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-500">
          <p>1080p: ████████</p>
          <p>  2K  : ████████████████</p>
          <p>  4K  : ████████████████████████████████</p>
          <p className="text-gray-400 mt-1">（像素面积示意，非精确比例）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">"2K"的争议</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 严格来说，"2K"在电影行业指2048×1080（DCI 2K），横向约2000像素。但在消费市场，2K通常指2560×1440（QHD）。4K也类似：电影标准是4096×2160（DCI 4K），消费级是3840×2160（UHD）。</p>
          <p className="mt-2">日常交流中，2K=2560×1440，4K=3840×2160，这样理解就够了。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">PPI：像素密度才是关键</h2>
        <p className="text-gray-700 leading-relaxed">同样是1080p，27寸显示器和6寸手机的清晰度完全不同。真正决定清晰度的是PPI（Pixels Per Inch，每英寸像素数）：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="font-bold">PPI = √(宽² + 高²) ÷ 屏幕对角线英寸</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>设备</span><span>分辨率</span><span>PPI</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>27寸 1080p显示器</span><span>1920×1080</span><span>82 PPI</span>
            <span>27寸 4K显示器</span><span>3840×2160</span><span>163 PPI</span>
            <span>24寸 1080p显示器</span><span>1920×1080</span><span>92 PPI</span>
            <span>6.1寸 iPhone</span><span>2556×1179</span><span>460 PPI</span>
            <span>13寸 MacBook Air</span><span>2560×1664</span><span>224 PPI</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">一般认为，PPI超过300时人眼在正常距离已经分辨不出像素点（苹果称之为Retina显示屏）。桌面显示器因为观看距离较远，110 PPI以上就比较舒适。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">选购建议</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <p className="font-medium">24寸及以下显示器</p>
            <p className="text-gray-600">1080p足够，性价比最高</p>
          </div>
          <div>
            <p className="font-medium">27寸显示器</p>
            <p className="text-gray-600">建议2K(2560×1440)起步，1080p在27寸上会有颗粒感</p>
          </div>
          <div>
            <p className="font-medium">32寸及以上显示器</p>
            <p className="text-gray-600">建议4K，否则PPI太低</p>
          </div>
          <div>
            <p className="font-medium">设计/视频剪辑</p>
            <p className="text-gray-600">4K起步，色准比分辨率更重要</p>
          </div>
          <div>
            <p className="font-medium">游戏</p>
            <p className="text-gray-600">分辨率越高对显卡要求越高。竞技游戏优先高刷新率(144Hz+)而非高分辨率</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">前端开发中的分辨率</h2>
        <p className="text-gray-700 leading-relaxed">对于Web开发者，还需要理解设备像素比（DPR）：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 获取设备像素比</p>
            <p>window.devicePixelRatio</p>
            <p className="text-green-600">// Retina屏通常返回 2 或 3</p>
          </div>
          <div>
            <p className="text-gray-500">// 获取屏幕逻辑分辨率</p>
            <p>{`screen.width + ' × ' + screen.height`}</p>
          </div>
          <div>
            <p className="text-gray-500">// 获取物理分辨率</p>
            <p>{`(screen.width * devicePixelRatio) + ' × '`}</p>
            <p>{`+ (screen.height * devicePixelRatio)`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线检测</h2>
        <p className="text-gray-700 leading-relaxed">想知道你当前屏幕的分辨率和DPR？试试我们的 <Link href="/screen-resolution" className="text-blue-500 hover:underline font-medium">屏幕分辨率检测工具</Link>，一键获取完整的屏幕信息。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
