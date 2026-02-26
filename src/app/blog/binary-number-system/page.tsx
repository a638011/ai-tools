import Link from 'next/link'

export default function BinaryNumberSystem() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">二进制是什么？计算机为什么用二进制？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">我们日常用十进制（0-9），但计算机只认识二进制（0和1）。为什么计算机不用十进制？二进制怎么表示数字和文字？这篇文章帮你彻底理解二进制。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么计算机用二进制？</h2>
        <p className="text-gray-700 leading-relaxed">计算机的核心是晶体管——一种微型电子开关，只有两种状态：通电（1）和断电（0）。用两种状态来表示信息，比用十种状态简单可靠得多：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 电路实现简单 — 只需区分高电压和低电压</p>
          <p>• 抗干扰能力强 — 两种状态不容易搞混</p>
          <p>• 逻辑运算天然对应 — AND/OR/NOT直接用电路实现</p>
          <p>• 存储高效 — 一个晶体管就是一个bit</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">二进制怎么计数？</h2>
        <p className="text-gray-700 leading-relaxed">十进制逢十进一，二进制逢二进一。每一位只能是0或1：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>十进制</span><span>二进制</span><span>计算过程</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600 font-mono">
            <span>0</span><span>0</span><span className="font-sans">-</span>
            <span>1</span><span>1</span><span className="font-sans">-</span>
            <span>2</span><span>10</span><span className="font-sans">1×2¹ + 0×2⁰</span>
            <span>3</span><span>11</span><span className="font-sans">1×2¹ + 1×2⁰</span>
            <span>4</span><span>100</span><span className="font-sans">1×2² + 0 + 0</span>
            <span>5</span><span>101</span><span className="font-sans">1×2² + 0 + 1×2⁰</span>
            <span>8</span><span>1000</span><span className="font-sans">1×2³</span>
            <span>10</span><span>1010</span><span className="font-sans">8 + 2</span>
            <span>16</span><span>10000</span><span className="font-sans">1×2⁴</span>
            <span>255</span><span>11111111</span><span className="font-sans">8位全1</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">位（bit）和字节（byte）</h2>
        <p className="text-gray-700 leading-relaxed">二进制的一位叫做bit（比特），8个bit组成1个byte（字节）。这是计算机存储的基本单位：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>1 bit = 0 或 1（2种可能）</p>
          <p>1 byte = 8 bits（256种可能，0-255）</p>
          <p>1 KB = 1024 bytes</p>
          <p>1 MB = 1024 KB</p>
          <p>1 GB = 1024 MB</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 为什么是1024而不是1000？因为 2¹⁰ = 1024，这是最接近1000的2的幂。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">十进制转二进制：除2取余法</h2>
        <p className="text-gray-700 leading-relaxed">把十进制数不断除以2，记录余数，最后倒序排列：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 例：将 13 转为二进制</p>
          <p>13 ÷ 2 = 6 ... 余 1</p>
          <p> 6 ÷ 2 = 3 ... 余 0</p>
          <p> 3 ÷ 2 = 1 ... 余 1</p>
          <p> 1 ÷ 2 = 0 ... 余 1</p>
          <p></p>
          <p className="text-gray-500">// 倒序排列余数：1101</p>
          <p className="text-green-600">// 13（十进制）= 1101（二进制）</p>
          <p className="text-gray-500">// 验证：8 + 4 + 0 + 1 = 13 ✓</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">二进制与十六进制</h2>
        <p className="text-gray-700 leading-relaxed">二进制写起来太长，所以程序员常用十六进制（0-9, A-F）作为简写。每4位二进制对应1位十六进制：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>二进制</span><span>十进制</span><span>十六进制</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600 font-mono">
            <span>0000</span><span>0</span><span>0</span>
            <span>0101</span><span>5</span><span>5</span>
            <span>1001</span><span>9</span><span>9</span>
            <span>1010</span><span>10</span><span>A</span>
            <span>1111</span><span>15</span><span>F</span>
            <span>11111111</span><span>255</span><span>FF</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">这就是为什么颜色值用十六进制：<code className="bg-gray-100 px-1 rounded text-sm">#FF0000</code> = 红色（R=255, G=0, B=0）。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">二进制运算</h2>
        <p className="text-gray-700 leading-relaxed">计算机用二进制进行所有运算，最基本的是位运算：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500">// AND（与）：两个都是1才是1</p>
          <p>  1010 &amp; 1100 = 1000</p>
          <p></p>
          <p className="text-gray-500">// OR（或）：有一个1就是1</p>
          <p>  1010 | 1100 = 1110</p>
          <p></p>
          <p className="text-gray-500">// XOR（异或）：不同为1，相同为0</p>
          <p>  1010 ^ 1100 = 0110</p>
          <p></p>
          <p className="text-gray-500">// NOT（取反）：0变1，1变0</p>
          <p>  ~1010 = 0101</p>
          <p></p>
          <p className="text-gray-500">// 左移：相当于乘以2</p>
          <p>  0011 &lt;&lt; 1 = 0110  (3 → 6)</p>
          <p></p>
          <p className="text-gray-500">// 右移：相当于除以2</p>
          <p>  0110 &gt;&gt; 1 = 0011  (6 → 3)</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">编程中的进制转换</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-2">
          <p className="text-gray-500">// JavaScript</p>
          <p>(13).toString(2)     // &quot;1101&quot; 十进制→二进制</p>
          <p>(255).toString(16)   // &quot;ff&quot;   十进制→十六进制</p>
          <p>parseInt(&quot;1101&quot;, 2)  // 13     二进制→十进制</p>
          <p>parseInt(&quot;ff&quot;, 16)   // 255    十六进制→十进制</p>
          <p></p>
          <p className="text-gray-500"># Python</p>
          <p>bin(13)    # &apos;0b1101&apos;</p>
          <p>hex(255)   # &apos;0xff&apos;</p>
          <p>int(&apos;1101&apos;, 2)   # 13</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速进行进制转换？试试我们的 <Link href="/number-base-converter" className="text-blue-500 hover:underline font-medium">进制转换工具</Link>，支持二进制、八进制、十进制、十六进制互转。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
