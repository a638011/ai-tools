import Link from 'next/link'

export default function EmojiUnicodeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Emoji背后的技术：Unicode编码与Emoji发展史</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">每天我们发送数十亿个Emoji，但你知道😀背后是怎么工作的吗？一个笑脸是如何从你的手机传到对方屏幕上的？</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Emoji的起源</h2>
        <p className="text-gray-700 leading-relaxed">Emoji（絵文字）起源于1999年日本，由NTT DoCoMo的栗田穣崇设计了最初的176个Emoji。2010年，Unicode 6.0正式收录Emoji，从此Emoji成为全球标准。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Emoji是怎么工作的？</h2>
        <p className="text-gray-700 leading-relaxed">Emoji本质上就是Unicode字符，和字母"A"（U+0041）没有区别：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm space-y-1">
          <p>😀 → U+1F600 (Grinning Face)</p>
          <p>❤️ → U+2764 + U+FE0F (Red Heart)</p>
          <p>👨‍💻 → U+1F468 + U+200D + U+1F4BB (Man Technologist)</p>
          <p>🇨🇳 → U+1F1E8 + U+1F1F3 (Flag: China)</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么同一个Emoji在不同平台长得不一样？</h2>
        <p className="text-gray-700 leading-relaxed">Unicode只定义了Emoji的名称和含义，不规定外观。每个平台（Apple、Google、Microsoft、Samsung）自己设计Emoji的样式。</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 这可能导致误解！同一个Emoji在不同平台上的表情可能差异很大。</p>
          <p>比如🔫在Apple上是水枪，在某些平台上曾经是真枪。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Emoji的组合技术</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>ZWJ序列</strong> — 用零宽连接符（U+200D）组合多个Emoji：👨 + 💻 = 👨‍💻</li>
          <li><strong>肤色修饰符</strong> — 基础Emoji + 肤色修饰符：👋 + 🏽 = 👋🏽</li>
          <li><strong>国旗</strong> — 两个区域指示符组合：🇨 + 🇳 = 🇨🇳</li>
          <li><strong>变体选择符</strong> — U+FE0F让文本字符显示为Emoji样式：❤ → ❤️</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">开发中使用Emoji的注意事项</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 数据库使用 utf8mb4 编码（MySQL的utf8不支持4字节Emoji）</p>
          <p>✅ 字符串长度计算要注意：一个Emoji可能占2-7个UTF-16码元</p>
          <p>✅ JavaScript中用 Array.from() 正确分割含Emoji的字符串</p>
          <p>✅ 正则匹配Emoji用 Unicode属性：/\p{'{'}Emoji{'}'}/u</p>
          <p>❌ 不要用 string.length 计算含Emoji的字符数</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Emoji数量</h2>
        <p className="text-gray-700 leading-relaxed">截至Unicode 16.0（2024年），共有3,790个Emoji。每年Unicode联盟都会审核新Emoji提案并发布更新。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线Emoji工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速找到合适的Emoji？试试我们的 <Link href="/emoji" className="text-blue-500 hover:underline font-medium">Emoji搜索工具</Link>，按关键词搜索，一键复制使用。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
