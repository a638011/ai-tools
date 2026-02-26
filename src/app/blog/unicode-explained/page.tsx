import Link from 'next/link'

export default function UnicodeExplained() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unicode编码详解：为什么emoji能在全世界通用？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">你在手机上发一个😀，对方不管用什么设备都能看到同一个表情。中文网页在美国的电脑上也能正常显示。这一切都要归功于Unicode——一个试图收录全世界所有文字的编码标准。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">编码的混乱年代</h2>
        <p className="text-gray-700 leading-relaxed">在Unicode之前，各国各自为政：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• ASCII — 美国标准，只有英文字母和符号（128个字符）</p>
          <p>• GB2312/GBK — 中国大陆简体中文</p>
          <p>• Big5 — 台湾繁体中文</p>
          <p>• Shift_JIS — 日文</p>
          <p>• EUC-KR — 韩文</p>
          <p>• ISO-8859-1 — 西欧语言</p>
        </div>
        <p className="text-gray-700 leading-relaxed">问题来了：一个GBK编码的中文文件，在日文系统上打开就是乱码。不同编码之间互不兼容，这就是著名的"乱码问题"。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unicode：一统天下</h2>
        <p className="text-gray-700 leading-relaxed">Unicode的目标很简单：给世界上每一个字符分配一个唯一的编号（码点/Code Point）。不管是中文、阿拉伯文、emoji还是古埃及象形文字，都有自己的编号。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>字符</span><span>码点</span><span>名称</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>A</span><span className="font-mono">U+0041</span><span>LATIN CAPITAL LETTER A</span>
            <span>中</span><span className="font-mono">U+4E2D</span><span>CJK UNIFIED IDEOGRAPH-4E2D</span>
            <span>😀</span><span className="font-mono">U+1F600</span><span>GRINNING FACE</span>
            <span>♥</span><span className="font-mono">U+2665</span><span>BLACK HEART SUIT</span>
            <span>π</span><span className="font-mono">U+03C0</span><span>GREEK SMALL LETTER PI</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">截至2025年，Unicode 16.0已收录超过15万个字符，覆盖161种现代和历史文字系统。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unicode ≠ UTF-8</h2>
        <p className="text-gray-700 leading-relaxed">很多人把Unicode和UTF-8搞混。Unicode是字符集（定义字符和编号的对应关系），UTF-8是编码方式（定义编号如何存储为字节）。</p>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 类比：Unicode像一本字典（字→编号），UTF-8是把编号写到纸上的书写规则。</p>
        </div>
        <p className="text-gray-700 leading-relaxed">Unicode有三种主要编码方式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>编码</span><span>字节数</span><span>特点</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">UTF-8</span><span>1-4字节</span><span>兼容ASCII，Web标准，最流行</span>
            <span className="font-mono">UTF-16</span><span>2或4字节</span><span>JavaScript/Java内部使用</span>
            <span className="font-mono">UTF-32</span><span>固定4字节</span><span>简单但浪费空间</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">UTF-8编码规则</h2>
        <p className="text-gray-700 leading-relaxed">UTF-8是变长编码，ASCII字符只用1字节，中文用3字节，emoji用4字节：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>码点范围</span><span>UTF-8字节数</span><span>示例</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600 font-mono">
            <span>U+0000-007F</span><span>1字节</span><span className="font-sans">A, 1, @</span>
            <span>U+0080-07FF</span><span>2字节</span><span className="font-sans">é, ñ, α</span>
            <span>U+0800-FFFF</span><span>3字节</span><span className="font-sans">中, 日, 한</span>
            <span>U+10000-10FFFF</span><span>4字节</span><span className="font-sans">😀, 🎉, 𝄞</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Emoji的故事</h2>
        <p className="text-gray-700 leading-relaxed">Emoji起源于1999年日本运营商NTT DoCoMo，最初只有176个图标。2010年被纳入Unicode标准后，emoji才真正实现了跨平台通用。</p>
        <p className="text-gray-700 leading-relaxed mt-3">有趣的是，同一个emoji码点在不同平台上的样子可能不同——Apple、Google、Microsoft各自设计自己的emoji图形，但码点是统一的。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 肤色修饰符：👋🏻👋🏽👋🏿 — 基础emoji + 肤色码点组合</p>
          <p>• 组合emoji：👨‍👩‍👧‍👦 — 多个码点用零宽连接符（ZWJ）拼接</p>
          <p>• 国旗emoji：🇨🇳 — 两个区域指示符号组合（C+N）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">编程中的Unicode</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500">// JavaScript</p>
          <p>&quot;中&quot;.codePointAt(0).toString(16)  // &quot;4e2d&quot;</p>
          <p>String.fromCodePoint(0x1F600)      // &quot;😀&quot;</p>
          <p>&quot;😀&quot;.length  // 2（JS用UTF-16，emoji占2个code unit）</p>
          <p>[...&quot;😀&quot;].length  // 1（展开后正确计数）</p>
          <p></p>
          <p className="text-gray-500"># Python 3（原生Unicode）</p>
          <p>ord(&apos;中&apos;)  # 20013 (0x4E2D)</p>
          <p>chr(0x1F600)  # &apos;😀&apos;</p>
          <p>len(&apos;😀&apos;)  # 1（Python正确处理）</p>
        </div>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ JavaScript的<code className="bg-gray-100 px-1 rounded">.length</code>对emoji会返回2，因为JS内部用UTF-16编码。用<code className="bg-gray-100 px-1 rounded">[...str].length</code>或<code className="bg-gray-100 px-1 rounded">Array.from(str).length</code>获取正确长度。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要查看字符的Unicode编码？试试我们的 <Link href="/unicode-converter" className="text-blue-500 hover:underline font-medium">Unicode转换工具</Link>，支持字符、码点、UTF-8字节互转。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
