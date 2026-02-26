import Link from 'next/link'

export default function PlaceholderImagesGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">占位图服务大全：设计师必备的占位图工具</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">在设计网页原型或开发前端页面时，经常需要临时图片来填充布局。手动找图太麻烦，占位图服务（Placeholder Image）可以通过URL直接生成指定尺寸的图片，省时省力。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是占位图？</h2>
        <p className="text-gray-700 leading-relaxed">占位图是开发和设计过程中用来临时替代真实图片的图像。它们通常显示尺寸信息、纯色背景或随机图片，帮助你在没有最终素材时预览布局效果。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常用占位图服务</h2>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. placehold.co</h2>
        <p className="text-gray-700 leading-relaxed">最流行的纯色占位图服务，支持自定义尺寸、颜色和文字：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">&lt;!-- 基础用法：宽x高 --&gt;</p>
          <p>&lt;img src=&quot;https://placehold.co/600x400&quot; /&gt;</p>
          <p></p>
          <p className="text-gray-500">&lt;!-- 自定义颜色：背景色/文字色 --&gt;</p>
          <p>&lt;img src=&quot;https://placehold.co/600x400/3b82f6/white&quot; /&gt;</p>
          <p></p>
          <p className="text-gray-500">&lt;!-- 自定义文字 --&gt;</p>
          <p>&lt;img src=&quot;https://placehold.co/600x400?text=Banner+Image&quot; /&gt;</p>
          <p></p>
          <p className="text-gray-500">&lt;!-- 指定格式 --&gt;</p>
          <p>&lt;img src=&quot;https://placehold.co/600x400.png&quot; /&gt;</p>
          <p>&lt;img src=&quot;https://placehold.co/600x400.webp&quot; /&gt;</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Lorem Picsum（picsum.photos）</h2>
        <p className="text-gray-700 leading-relaxed">提供随机的高质量真实照片，非常适合需要真实感的原型：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">&lt;!-- 随机图片 --&gt;</p>
          <p>&lt;img src=&quot;https://picsum.photos/600/400&quot; /&gt;</p>
          <p></p>
          <p className="text-gray-500">&lt;!-- 指定图片ID（固定图片） --&gt;</p>
          <p>&lt;img src=&quot;https://picsum.photos/id/237/600/400&quot; /&gt;</p>
          <p></p>
          <p className="text-gray-500">&lt;!-- 灰度效果 --&gt;</p>
          <p>&lt;img src=&quot;https://picsum.photos/600/400?grayscale&quot; /&gt;</p>
          <p></p>
          <p className="text-gray-500">&lt;!-- 模糊效果（1-10） --&gt;</p>
          <p>&lt;img src=&quot;https://picsum.photos/600/400?blur=5&quot; /&gt;</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. 其他有趣的占位图服务</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p><strong>placekitten.com</strong> — 猫咪图片占位图，程序员最爱</p>
          <p><strong>placedog.net</strong> — 狗狗图片占位图</p>
          <p><strong>dummyimage.com</strong> — 功能丰富的纯色占位图，支持更多自定义</p>
          <p><strong>fakeimg.pl</strong> — 轻量级占位图，支持Retina</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见尺寸参考</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>用途</span><span>推荐尺寸</span><span>宽高比</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>网站Banner</span><span>1920×600</span><span>16:5</span>
            <span>博客封面</span><span>1200×630</span><span>约1.9:1</span>
            <span>缩略图</span><span>300×200</span><span>3:2</span>
            <span>头像</span><span>200×200</span><span>1:1</span>
            <span>产品图</span><span>800×800</span><span>1:1</span>
            <span>社交媒体分享</span><span>1200×630</span><span>约1.9:1</span>
            <span>Instagram帖子</span><span>1080×1080</span><span>1:1</span>
            <span>YouTube缩略图</span><span>1280×720</span><span>16:9</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">CSS纯代码占位图</h2>
        <p className="text-gray-700 leading-relaxed">不想依赖外部服务？可以用CSS创建简单的占位图：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 纯CSS占位图 */</p>
          <p>.placeholder {'{'}</p>
          <p>  width: 100%;</p>
          <p>  aspect-ratio: 16 / 9;</p>
          <p>  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);</p>
          <p>  display: flex;</p>
          <p>  align-items: center;</p>
          <p>  justify-content: center;</p>
          <p>  color: white;</p>
          <p>  font-size: 14px;</p>
          <p>  border-radius: 8px;</p>
          <p>{'}'}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 骨架屏加载效果 */</p>
          <p>.skeleton {'{'}</p>
          <p>  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);</p>
          <p>  background-size: 200% 100%;</p>
          <p>  animation: shimmer 1.5s infinite;</p>
          <p>{'}'}</p>
          <p></p>
          <p>@keyframes shimmer {'{'}</p>
          <p>  0% {'{'} background-position: -200% 0; {'}'}</p>
          <p>  100% {'{'} background-position: 200% 0; {'}'}</p>
          <p>{'}'}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">开发中的最佳实践</h2>
        <div className="bg-green-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 开发阶段用占位图，上线前替换为真实图片</p>
          <p>✅ 始终设置图片的width和height属性，避免布局偏移（CLS）</p>
          <p>✅ 使用loading=&quot;lazy&quot;延迟加载非首屏图片</p>
          <p>✅ 为占位图添加有意义的alt文本</p>
          <p>✅ 考虑使用骨架屏（Skeleton）代替占位图提升用户体验</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速生成占位图？试试我们的 <Link href="/placeholder-image" className="text-blue-500 hover:underline font-medium">占位图生成器</Link>，支持自定义尺寸、颜色、文字，一键复制URL或下载图片。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
