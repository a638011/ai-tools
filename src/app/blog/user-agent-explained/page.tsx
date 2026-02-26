import Link from 'next/link'

export default function UserAgentExplained() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">User Agent是什么？浏览器UA字符串详解</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">每次你打开网页，浏览器都会悄悄告诉服务器一段信息——User Agent字符串。它包含了你的浏览器类型、版本、操作系统等信息。这篇文章带你读懂这段"浏览器身份证"。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是User Agent？</h2>
        <p className="text-gray-700 leading-relaxed">User Agent（用户代理，简称UA）是浏览器在HTTP请求头中发送的一段字符串，用于向服务器标识自己的身份。服务器可以根据UA来决定返回什么样的内容——比如给手机返回移动版页面，给桌面浏览器返回完整版。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// HTTP请求头中的UA</p>
          <p>User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)</p>
          <p>AppleWebKit/537.36 (KHTML, like Gecko)</p>
          <p>Chrome/120.0.0.0 Safari/537.36</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">UA字符串的结构</h2>
        <p className="text-gray-700 leading-relaxed">以Chrome的UA为例，拆解每一部分：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-3">
          <div>
            <code className="text-blue-600">Mozilla/5.0</code>
            <p className="text-gray-600 mt-1">历史遗留标识。几乎所有浏览器都以此开头，源于早期Netscape浏览器的兼容性需要。</p>
          </div>
          <div>
            <code className="text-blue-600">(Windows NT 10.0; Win64; x64)</code>
            <p className="text-gray-600 mt-1">操作系统信息。Windows NT 10.0 = Windows 10/11，Win64表示64位系统。</p>
          </div>
          <div>
            <code className="text-blue-600">AppleWebKit/537.36</code>
            <p className="text-gray-600 mt-1">渲染引擎。WebKit是Safari的引擎，Chrome的Blink引擎从WebKit分支而来。</p>
          </div>
          <div>
            <code className="text-blue-600">(KHTML, like Gecko)</code>
            <p className="text-gray-600 mt-1">又一个历史遗留。KHTML是KDE的引擎，Gecko是Firefox的引擎。为了兼容性，大家都声称自己"像"别人。</p>
          </div>
          <div>
            <code className="text-blue-600">Chrome/120.0.0.0</code>
            <p className="text-gray-600 mt-1">实际的浏览器名称和版本号。</p>
          </div>
          <div>
            <code className="text-blue-600">Safari/537.36</code>
            <p className="text-gray-600 mt-1">Chrome也声称自己是Safari，因为很多网站只检测Safari就认为支持WebKit。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么UA这么混乱？</h2>
        <p className="text-gray-700 leading-relaxed">UA字符串的混乱是浏览器大战的历史遗产。简单来说：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 早期网站只给Netscape（Mozilla）提供高级功能</p>
          <p>2. IE为了获得这些功能，在UA中加入了"Mozilla兼容"</p>
          <p>3. 后来的浏览器为了不被网站歧视，都把前辈的名字加进UA</p>
          <p>4. 最终每个浏览器的UA都声称自己是所有其他浏览器</p>
        </div>
        <p className="text-gray-700 leading-relaxed">这就是为什么Chrome的UA里同时出现了Mozilla、AppleWebKit、Chrome和Safari。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">各浏览器UA示例</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-4">
          <div>
            <p className="font-medium text-gray-700">Chrome (Windows)</p>
            <p className="font-mono text-gray-500 text-xs break-all">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Firefox (macOS)</p>
            <p className="font-mono text-gray-500 text-xs break-all">Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Safari (iPhone)</p>
            <p className="font-mono text-gray-500 text-xs break-all">Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Edge (Windows)</p>
            <p className="font-mono text-gray-500 text-xs break-all">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用JavaScript获取UA</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 获取当前浏览器UA</p>
            <p>navigator.userAgent</p>
          </div>
          <div>
            <p className="text-gray-500">// 简单判断浏览器类型</p>
            <p>{`const ua = navigator.userAgent;`}</p>
            <p>{`const isChrome = ua.includes('Chrome')`}</p>
            <p>{`  && !ua.includes('Edg');`}</p>
            <p>{`const isFirefox = ua.includes('Firefox');`}</p>
            <p>{`const isSafari = ua.includes('Safari')`}</p>
            <p>{`  && !ua.includes('Chrome');`}</p>
            <p>{`const isEdge = ua.includes('Edg');`}</p>
          </div>
          <div>
            <p className="text-gray-500">// 判断移动设备</p>
            <p>{`const isMobile = /Android|iPhone|iPad/`}</p>
            <p>{`  .test(ua);`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">UA嗅探的问题</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ 基于UA判断浏览器功能（UA嗅探）是不推荐的做法：</p>
          <p>• UA可以被用户或扩展随意修改</p>
          <p>• UA字符串格式不可靠，经常变化</p>
          <p>• 更好的方式是<span className="font-medium">特性检测</span>（Feature Detection）</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// ❌ UA嗅探（不推荐）</p>
          <p>{`if (ua.includes('Chrome')) { ... }`}</p>
          <p className="text-gray-500 mt-2">// ✅ 特性检测（推荐）</p>
          <p>{`if ('IntersectionObserver' in window) { ... }`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User-Agent Client Hints</h2>
        <p className="text-gray-700 leading-relaxed">Chrome正在推动用Client Hints替代传统UA字符串。新API更结构化，也更注重隐私：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 新的API（Chrome 90+）</p>
          <p>{`navigator.userAgentData.brands`}</p>
          <p className="text-green-600">{`// [{brand:"Chromium",version:"120"},`}</p>
          <p className="text-green-600">{`//  {brand:"Google Chrome",version:"120"}]`}</p>
          <p className="mt-2">{`navigator.userAgentData.mobile`}</p>
          <p className="text-green-600">// false</p>
          <p className="mt-2">{`navigator.userAgentData.platform`}</p>
          <p className="text-green-600">// "Windows"</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线检测</h2>
        <p className="text-gray-700 leading-relaxed">想看看你的浏览器UA长什么样？试试我们的 <Link href="/user-agent" className="text-blue-500 hover:underline font-medium">User Agent检测工具</Link>，一键查看并解析你的UA字符串。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
