import Link from 'next/link'

export default function BorderRadiusTricks() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSS border-radius高级技巧：不只是圆角</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">大多数开发者对border-radius的认知停留在 <code className="bg-gray-100 px-1 rounded text-sm">border-radius: 8px</code> 做圆角和 <code className="bg-gray-100 px-1 rounded text-sm">border-radius: 50%</code> 做圆形。但border-radius的能力远不止于此，它可以创造出各种有机形状。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">基础语法回顾</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 四个角相同 */</p>
            <p>{`border-radius: 8px;`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 左上/右下  右上/左下 */</p>
            <p>{`border-radius: 8px 16px;`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 左上  右上/左下  右下 */</p>
            <p>{`border-radius: 8px 16px 24px;`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 左上  右上  右下  左下（顺时针） */</p>
            <p>{`border-radius: 8px 16px 24px 32px;`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">隐藏技能：椭圆圆角</h2>
        <p className="text-gray-700 leading-relaxed">border-radius支持用斜杠 <code className="bg-gray-100 px-1 rounded text-sm">/</code> 分别设置水平和垂直半径，创造椭圆形的圆角：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 水平半径 / 垂直半径 */</p>
            <p>{`border-radius: 50% / 30%;`}</p>
            <p className="text-green-600">/* 椭圆形！不是正圆 */</p>
          </div>
          <div>
            <p className="text-gray-500">/* 每个角独立设置椭圆半径 */</p>
            <p>{`border-radius: 10px 20px 30px 40px / 40px 30px 20px 10px;`}</p>
            <p className="text-green-600">/* 斜杠前：四个角的水平半径 */</p>
            <p className="text-green-600">/* 斜杠后：四个角的垂直半径 */</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用形状示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">/* 鸡蛋形 */</p>
            <p>{`.egg { width: 120px; height: 160px; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 水滴形 */</p>
            <p>{`.drop { width: 100px; height: 100px; border-radius: 0 50% 50% 50%; transform: rotate(45deg); }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 胶囊形（药丸按钮） */</p>
            <p>{`.pill { padding: 8px 24px; border-radius: 9999px; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 有机blob形状 */</p>
            <p>{`.blob { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 半圆形 */</p>
            <p>{`.semicircle { width: 200px; height: 100px; border-radius: 100px 100px 0 0; }`}</p>
          </div>
          <div>
            <p className="text-gray-500">/* 四分之一圆 */</p>
            <p>{`.quarter { width: 100px; height: 100px; border-radius: 100% 0 0 0; }`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8值语法详解</h2>
        <p className="text-gray-700 leading-relaxed">完整的border-radius可以接受8个值，这是它最强大的形式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p>{`border-radius: TL-h TR-h BR-h BL-h / TL-v TR-v BR-v BL-v;`}</p>
          <p className="text-gray-500 mt-2">TL=左上 TR=右上 BR=右下 BL=左下</p>
          <p className="text-gray-500">h=水平半径 v=垂直半径</p>
        </div>
        <p className="text-gray-700 leading-relaxed">每个角实际上是一个椭圆的四分之一弧。当水平和垂直半径不同时，圆角就变成了椭圆弧，这就是创造有机形状的秘密。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">百分比 vs 像素</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>单位</span><span>行为</span><span>适用场景</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">px</span><span>固定大小圆角</span><span>按钮、卡片、输入框</span>
            <span className="font-mono">%</span><span>相对元素尺寸</span><span>圆形、椭圆、有机形状</span>
            <span className="font-mono">em/rem</span><span>相对字体大小</span><span>随文字缩放的圆角</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 注意：百分比的水平半径相对于元素宽度，垂直半径相对于元素高度。所以同样是50%，在非正方形元素上会产生椭圆效果。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">动画效果</h2>
        <p className="text-gray-700 leading-relaxed">border-radius支持CSS过渡和动画，可以创造流动的形状变化：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`.morph {`}</p>
          <p>{`  width: 200px; height: 200px;`}</p>
          <p>{`  background: linear-gradient(135deg, #667eea, #764ba2);`}</p>
          <p>{`  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;`}</p>
          <p>{`  animation: morph 8s ease-in-out infinite;`}</p>
          <p>{`}`}</p>
          <p>{`@keyframes morph {`}</p>
          <p>{`  0%   { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }`}</p>
          <p>{`  50%  { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }`}</p>
          <p>{`  100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }`}</p>
          <p>{`}`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想可视化调整border-radius？试试我们的 <Link href="/border-radius" className="text-blue-500 hover:underline font-medium">Border Radius生成器</Link>，拖动滑块实时预览效果并生成CSS代码。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
