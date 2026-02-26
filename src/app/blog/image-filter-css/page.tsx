import Link from 'next/link'

export default function ImageFilterCss() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS滤镜效果大全：blur、grayscale、sepia等详解</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">CSS的 <code className="bg-gray-100 px-1 rounded text-sm">filter</code> 属性可以直接在浏览器中对图片和元素应用视觉效果，无需Photoshop。模糊、灰度、复古色调、亮度调节……这些效果只需一行CSS。本文详解所有CSS滤镜函数及其组合用法。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">CSS Filter语法</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">/* 单个滤镜 */</p>
          <p>{`filter: blur(5px);`}</p>
          <p></p>
          <p className="text-gray-500">/* 多个滤镜叠加 */</p>
          <p>{`filter: blur(2px) brightness(1.2) contrast(1.1);`}</p>
          <p></p>
          <p className="text-gray-500">/* 移除所有滤镜 */</p>
          <p>{`filter: none;`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">所有滤镜函数详解</h2>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. blur() — 高斯模糊</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: blur(0px);   /* 无模糊 */`}</p>
          <p>{`filter: blur(2px);   /* 轻微模糊 */`}</p>
          <p>{`filter: blur(5px);   /* 中等模糊 */`}</p>
          <p>{`filter: blur(20px);  /* 强烈模糊 */`}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">常用于背景虚化、毛玻璃效果、加载占位图。值越大越模糊。</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. brightness() — 亮度</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: brightness(0);     /* 全黑 */`}</p>
          <p>{`filter: brightness(0.5);   /* 变暗50% */`}</p>
          <p>{`filter: brightness(1);     /* 原始亮度 */`}</p>
          <p>{`filter: brightness(1.5);   /* 提亮50% */`}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. contrast() — 对比度</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: contrast(0);     /* 全灰 */`}</p>
          <p>{`filter: contrast(0.5);   /* 低对比度 */`}</p>
          <p>{`filter: contrast(1);     /* 原始对比度 */`}</p>
          <p>{`filter: contrast(2);     /* 高对比度 */`}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. grayscale() — 灰度</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: grayscale(0);    /* 原始颜色 */`}</p>
          <p>{`filter: grayscale(0.5);  /* 50%灰度 */`}</p>
          <p>{`filter: grayscale(1);    /* 完全灰度 */`}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">常用于悼念日网页变灰、hover前的图片预览。</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">5. sepia() — 复古棕褐色</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: sepia(0);    /* 无效果 */`}</p>
          <p>{`filter: sepia(0.5);  /* 50%复古 */`}</p>
          <p>{`filter: sepia(1);    /* 完全复古 */`}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">6. saturate() — 饱和度</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: saturate(0);    /* 完全去色 */`}</p>
          <p>{`filter: saturate(1);    /* 原始饱和度 */`}</p>
          <p>{`filter: saturate(2);    /* 双倍饱和 */`}</p>
          <p>{`filter: saturate(3);    /* 超高饱和 */`}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">7. hue-rotate() — 色相旋转</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: hue-rotate(0deg);     /* 原始色相 */`}</p>
          <p>{`filter: hue-rotate(90deg);    /* 旋转90° */`}</p>
          <p>{`filter: hue-rotate(180deg);   /* 旋转180° */`}</p>
          <p>{`filter: hue-rotate(270deg);   /* 旋转270° */`}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">8. invert() — 反色</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: invert(0);    /* 原始颜色 */`}</p>
          <p>{`filter: invert(1);    /* 完全反色 */`}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">实现暗色模式的快捷方式：<code className="bg-gray-100 px-1 rounded text-sm">filter: invert(1) hue-rotate(180deg)</code>，但不推荐用于生产环境。</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">9. opacity() — 透明度</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: opacity(0);    /* 完全透明 */`}</p>
          <p>{`filter: opacity(0.5);  /* 半透明 */`}</p>
          <p>{`filter: opacity(1);    /* 完全不透明 */`}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">10. drop-shadow() — 投影</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`filter: drop-shadow(4px 4px 8px rgba(0,0,0,0.3));`}</p>
          <p className="text-gray-500">/* 参数：水平偏移 垂直偏移 模糊半径 颜色 */</p>
        </div>
        <p className="text-gray-700 leading-relaxed">与 <code className="bg-gray-100 px-1 rounded text-sm">box-shadow</code> 不同，drop-shadow会沿着PNG透明图片的轮廓投影。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用组合效果</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="text-gray-500 font-medium">毛玻璃效果（Glassmorphism）</p>
            <p className="font-mono text-gray-700">{`backdrop-filter: blur(10px) saturate(1.8);`}</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">老照片效果</p>
            <p className="font-mono text-gray-700">{`filter: sepia(0.8) contrast(1.1) brightness(0.9);`}</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">冷色调</p>
            <p className="font-mono text-gray-700">{`filter: saturate(0.8) hue-rotate(180deg) brightness(1.1);`}</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">Hover高亮效果</p>
            <p className="font-mono text-gray-700">{`img { filter: grayscale(1); transition: filter 0.3s; }`}</p>
            <p className="font-mono text-gray-700">{`img:hover { filter: grayscale(0); }`}</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 性能提示：</p>
          <p>• CSS滤镜会触发GPU加速，大量使用可能影响性能</p>
          <p>• <code className="bg-yellow-100 px-1 rounded">backdrop-filter</code> 比 <code className="bg-yellow-100 px-1 rounded">filter</code> 性能开销更大</p>
          <p>• 动画中使用滤镜时，加上 <code className="bg-yellow-100 px-1 rounded">will-change: filter</code> 优化</p>
          <p>• 所有现代浏览器均支持CSS filter，IE不支持</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想实时预览CSS滤镜效果？试试我们的 <Link href="/image-filters" className="text-blue-500 hover:underline font-medium">在线图片滤镜工具</Link>，拖动滑块即可调节各种滤镜参数，一键复制CSS代码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
