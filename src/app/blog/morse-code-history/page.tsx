import Link from 'next/link'

export default function MorseCodeHistory() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">摩尔斯电码入门：从历史到实用转换</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">在没有互联网、没有手机的年代，人类是怎么远距离通信的？答案是摩尔斯电码——一种用"点"和"划"表示字母的编码系统。虽然诞生于1830年代，但它至今仍在航海、业余无线电等领域使用。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">摩尔斯电码的历史</h2>
        <p className="text-gray-700 leading-relaxed">1836年，美国画家塞缪尔·摩尔斯（Samuel Morse）和他的助手阿尔弗雷德·维尔（Alfred Vail）发明了电报机和配套的编码系统。1844年5月24日，摩尔斯发出了历史上第一条电报："What hath God wrought"（上帝创造了什么）。</p>
        <p className="text-gray-700 leading-relaxed mt-3">摩尔斯电码的设计非常巧妙——使用频率最高的字母用最短的编码。比如英语中最常用的字母E只需要一个点（·），而不常用的Q需要四个符号（--·-）。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">国际摩尔斯电码表</h2>
        <p className="text-gray-700 leading-relaxed">现在通用的是国际摩尔斯电码（International Morse Code），用点（·）和划（-）表示：</p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">字母</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 text-gray-600 font-mono">
            <span>A · -</span><span>B - · · ·</span><span>C - · - ·</span><span>D - · ·</span>
            <span>E ·</span><span>F · · - ·</span><span>G - - ·</span><span>H · · · ·</span>
            <span>I · ·</span><span>J · - - -</span><span>K - · -</span><span>L · - · ·</span>
            <span>M - -</span><span>N - ·</span><span>O - - -</span><span>P · - - ·</span>
            <span>Q - - · -</span><span>R · - ·</span><span>S · · ·</span><span>T -</span>
            <span>U · · -</span><span>V · · · -</span><span>W · - -</span><span>X - · · -</span>
            <span>Y - · - -</span><span>Z - - · ·</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">数字</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 text-gray-600 font-mono">
            <span>0 - - - - -</span><span>1 · - - - -</span>
            <span>2 · · - - -</span><span>3 · · · - -</span>
            <span>4 · · · · -</span><span>5 · · · · ·</span>
            <span>6 - · · · ·</span><span>7 - - · · ·</span>
            <span>8 - - - · ·</span><span>9 - - - - ·</span>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 数字的规律：1-5是从1个划逐渐变成5个点，6-0是从1个点逐渐变成5个划。对称而优美。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SOS：最著名的摩尔斯电码</h2>
        <p className="text-gray-700 leading-relaxed">SOS是国际通用的求救信号：</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 font-mono text-sm text-center">
          <p className="text-2xl text-red-600">· · ·  - - -  · · ·</p>
          <p className="text-gray-600 mt-2 font-sans">三短 三长 三短</p>
        </div>
        <p className="text-gray-700 leading-relaxed">SOS在1906年被确定为国际求救信号，并非缩写（不是Save Our Souls），而是因为这个组合简单、易识别、不会和其他信号混淆。1912年泰坦尼克号沉没时就发出了SOS信号。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">摩尔斯电码的时间规则</h2>
        <p className="text-gray-700 leading-relaxed">摩尔斯电码不仅定义了符号，还有严格的时间规则：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 点（·）= 1个时间单位</p>
          <p>• 划（-）= 3个时间单位</p>
          <p>• 符号内间隔 = 1个时间单位</p>
          <p>• 字母间间隔 = 3个时间单位</p>
          <p>• 单词间间隔 = 7个时间单位</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用代码实现摩尔斯电码转换</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// JavaScript 文本转摩尔斯电码</p>
          <p>{'const MORSE = {'}</p>
          <p>  &apos;A&apos;: &apos;.-&apos;, &apos;B&apos;: &apos;-...&apos;, &apos;C&apos;: &apos;-.-.&apos;,</p>
          <p>  &apos;D&apos;: &apos;-..&apos;, &apos;E&apos;: &apos;.&apos;, &apos;F&apos;: &apos;..-.&apos;,</p>
          <p>  &apos;S&apos;: &apos;...&apos;, &apos;O&apos;: &apos;---&apos;, &apos;S&apos;: &apos;...&apos;,</p>
          <p>  // ... 完整码表</p>
          <p>{'}'};</p>
          <p></p>
          <p>function toMorse(text) {'{'}</p>
          <p>  return text.toUpperCase()</p>
          <p>    .split(&apos;&apos;)</p>
          <p>    .map(c =&gt; MORSE[c] || c)</p>
          <p>    .join(&apos; &apos;);</p>
          <p>{'}'}</p>
          <p></p>
          <p>toMorse(&apos;SOS&apos;); // &quot;... --- ...&quot;</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">现代应用</h2>
        <p className="text-gray-700 leading-relaxed">摩尔斯电码并没有完全退出历史舞台：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>• 业余无线电（Ham Radio）中仍广泛使用</p>
          <p>• 航空和航海的导航信标用摩尔斯电码标识</p>
          <p>• 残障人士辅助通信工具（用眨眼或按压发送）</p>
          <p>• Android手机的Gboard键盘支持摩尔斯电码输入</p>
          <p>• 手电筒求救信号（三短三长三短闪烁）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">想把文字转换成摩尔斯电码？试试我们的 <Link href="/morse-code" className="text-blue-500 hover:underline font-medium">摩尔斯电码转换器</Link>，支持文本和摩尔斯电码双向转换，还能播放声音。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
