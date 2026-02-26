import Link from 'next/link'

export default function ImageResizeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">图片尺寸调整指南：不失真缩放的技巧</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">上传头像要求200×200，社交媒体封面要1200×630，网站Banner要1920×600……不同场景对图片尺寸的要求各不相同。如何调整图片大小而不让画面变形或模糊？本文带你掌握图片缩放的核心技巧。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">图片缩放的基本概念</h2>
        <p className="text-gray-700 leading-relaxed">图片缩放涉及两个关键概念：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">分辨率</span><span className="text-gray-600">图片的像素数量，如1920×1080表示宽1920像素、高1080像素</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-28">宽高比</span><span className="text-gray-600">宽度与高度的比例，如16:9、4:3、1:1</span></div>
        </div>
        <p className="text-gray-700 leading-relaxed">缩放时保持宽高比是避免变形的关键。如果原图是16:9，缩放后也应该是16:9。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见平台的图片尺寸要求</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>平台/用途</span><span>推荐尺寸</span><span>宽高比</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>微信公众号封面</span><span>900×383</span><span>2.35:1</span>
            <span>微信朋友圈</span><span>1080×1080</span><span>1:1</span>
            <span>微博配图</span><span>1080×1080</span><span>1:1</span>
            <span>抖音封面</span><span>1080×1920</span><span>9:16</span>
            <span>小红书配图</span><span>1080×1440</span><span>3:4</span>
            <span>Twitter/X头图</span><span>1500×500</span><span>3:1</span>
            <span>Facebook封面</span><span>1200×630</span><span>1.91:1</span>
            <span>网站Favicon</span><span>32×32</span><span>1:1</span>
            <span>App图标</span><span>1024×1024</span><span>1:1</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">缩小图片：几乎无损</h2>
        <p className="text-gray-700 leading-relaxed">将大图缩小通常不会有明显的质量损失，因为是在减少像素。但要注意：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>✅ 保持宽高比，避免拉伸变形</p>
          <p>✅ 使用双三次插值（Bicubic）算法，效果最平滑</p>
          <p>✅ 缩小后适当锐化，补偿缩放带来的轻微模糊</p>
          <p>✅ 导出时选择合适的压缩质量（JPEG 80-90%通常足够）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">放大图片：挑战更大</h2>
        <p className="text-gray-700 leading-relaxed">放大图片本质上是在"凭空创造"像素，必然会损失清晰度。不同的插值算法效果差异很大：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-36">最近邻插值</span><span className="text-gray-600">速度快但锯齿明显，适合像素风格图片</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-36">双线性插值</span><span className="text-gray-600">较平滑但可能模糊，适合一般场景</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-36">双三次插值</span><span className="text-gray-600">效果最好的传统算法，大多数软件默认</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-36">AI超分辨率</span><span className="text-gray-600">使用深度学习重建细节，效果最佳</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">CSS中的图片缩放</h2>
        <p className="text-gray-700 leading-relaxed">网页开发中，CSS提供了灵活的图片适配方式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 保持比例填满容器，可能裁切 */</p>
            <p>{`img { object-fit: cover; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 保持比例完整显示，可能留白 */</p>
            <p>{`img { object-fit: contain; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 拉伸填满，可能变形 */</p>
            <p>{`img { object-fit: fill; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 响应式图片：宽度自适应 */</p>
            <p>{`img { max-width: 100%; height: auto; }`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HTML响应式图片</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">{`<!-- srcset提供不同尺寸 -->`}</p>
          <p>{`<img`}</p>
          <p className="pl-4">{`src="image-800.jpg"`}</p>
          <p className="pl-4">{`srcset="image-400.jpg 400w,`}</p>
          <p className="pl-12">{`image-800.jpg 800w,`}</p>
          <p className="pl-12">{`image-1200.jpg 1200w"`}</p>
          <p className="pl-4">{`sizes="(max-width: 600px) 400px, 800px"`}</p>
          <p className="pl-4">{`alt="响应式图片"`}</p>
          <p>{`/>`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">批量调整尺寸</h2>
        <p className="text-gray-700 leading-relaxed">需要批量处理时，命令行工具很高效：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <div>
            <p className="text-gray-500"># ImageMagick：缩放到宽800，高度自动</p>
            <p>mogrify -resize 800x *.jpg</p>
          </div>
          <div>
            <p className="text-gray-500"># ffmpeg：视频截图并缩放</p>
            <p>ffmpeg -i video.mp4 -vf scale=1280:720 -frames:v 1 thumb.jpg</p>
          </div>
          <div>
            <p className="text-gray-500"># sharp (Node.js)</p>
            <p>{`sharp('input.jpg').resize(800, 600).toFile('output.jpg')`}</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 图片优化建议：</p>
          <p>• 网页图片优先使用WebP格式，体积比JPEG小30%</p>
          <p>• 照片用JPEG，图标/插画用PNG或SVG</p>
          <p>• 移动端不需要超过1080px宽的图片</p>
          <p>• 使用懒加载（loading=&quot;lazy&quot;）减少首屏加载时间</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速调整图片尺寸？试试我们的 <Link href="/image-resize" className="text-blue-500 hover:underline font-medium">在线图片缩放工具</Link>，支持自定义尺寸、保持比例、批量处理，无需安装软件。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
