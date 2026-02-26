import Link from 'next/link'

export default function PunycodeIdnGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Punycode和国际化域名：中文域名是怎么工作的？</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">你可能见过"中国.cn"或"München.de"这样的域名。域名系统（DNS）最初只支持ASCII字符，那这些包含中文、德文的域名是怎么工作的？答案就是Punycode编码和国际化域名（IDN）技术。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是国际化域名（IDN）？</h2>
        <p className="text-gray-700 leading-relaxed">国际化域名（Internationalized Domain Name，IDN）允许域名中使用非ASCII字符，如中文、阿拉伯文、日文等。IDN在RFC 3490中定义，使用一种叫IDNA（Internationalizing Domain Names in Applications）的标准。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-36">用户看到的</span><span className="text-gray-600">中国.cn</span></div>
          <div className="flex gap-4"><span className="text-gray-700 font-medium w-36">DNS实际处理的</span><span className="text-gray-600 font-mono">xn--fiqs8s.cn</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是Punycode？</h2>
        <p className="text-gray-700 leading-relaxed">Punycode是一种编码方法，将Unicode字符串转换为DNS兼容的ASCII字符串。它在RFC 3492中定义。所有Punycode编码的域名都以 <code className="bg-gray-100 px-1 rounded text-sm">xn--</code> 前缀开头。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-2 gap-2 font-medium text-gray-700 mb-2">
            <span>Unicode域名</span><span>Punycode编码</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>中国.cn</span><code className="font-mono">xn--fiqs8s.cn</code>
            <span>北京.中国</span><code className="font-mono">xn--1lq90i.xn--fiqs8s</code>
            <span>münchen.de</span><code className="font-mono">xn--mnchen-3ya.de</code>
            <span>例え.jp</span><code className="font-mono">xn--r8jz45g.jp</code>
            <span>مثال.com</span><code className="font-mono">xn--mgbh0fb.com</code>
            <span>пример.com</span><code className="font-mono">xn--e1afmapc.com</code>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Punycode编码原理</h2>
        <p className="text-gray-700 leading-relaxed">Punycode的编码过程分为几步：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 提取字符串中的ASCII字符，保持原位</p>
          <p>2. 非ASCII字符通过一种自适应的差值编码算法转换</p>
          <p>3. 用连字符分隔ASCII部分和编码部分</p>
          <p>4. 添加 <code className="bg-gray-100 px-1 rounded font-mono">xn--</code> 前缀标识这是Punycode</p>
        </div>
        <p className="text-gray-700 leading-relaxed">例如"münchen"的编码过程：ASCII部分是"mnchen"，非ASCII字符"ü"被编码为"3ya"，结果就是 <code className="bg-gray-100 px-1 rounded text-sm font-mono">xn--mnchen-3ya</code>。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">IDN的工作流程</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 用户在浏览器输入"中国.cn"</p>
          <p>2. 浏览器将其转换为Punycode："xn--fiqs8s.cn"</p>
          <p>3. DNS服务器用Punycode域名进行解析</p>
          <p>4. 获取IP地址，建立连接</p>
          <p>5. 浏览器地址栏显示原始的"中国.cn"</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JavaScript中的Punycode</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 使用URL API（浏览器内置）</p>
          <p>{`const url = new URL('http://中国.cn');`}</p>
          <p>{`console.log(url.hostname);`}</p>
          <p className="text-green-600">// "xn--fiqs8s.cn"</p>
          <p></p>
          <p className="text-gray-500">// 使用punycode库</p>
          <p>{`import punycode from 'punycode/';`}</p>
          <p>{`punycode.toASCII('中国.cn');`}</p>
          <p className="text-green-600">// "xn--fiqs8s.cn"</p>
          <p>{`punycode.toUnicode('xn--fiqs8s.cn');`}</p>
          <p className="text-green-600">// "中国.cn"</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Python中的Punycode</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># Python内置支持</p>
          <p>{`'中国'.encode('punycode')`}</p>
          <p className="text-green-600"># b'fiqs8s'</p>
          <p></p>
          <p>{`b'fiqs8s'.decode('punycode')`}</p>
          <p className="text-green-600"># '中国'</p>
          <p></p>
          <p className="text-gray-500"># 完整域名转换</p>
          <p>{`'中国.cn'.encode('idna').decode('ascii')`}</p>
          <p className="text-green-600"># 'xn--fiqs8s.cn'</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">IDN安全问题：同形异义攻击</h2>
        <p className="text-gray-700 leading-relaxed">IDN带来了一个安全隐患——同形异义攻击（Homograph Attack）。攻击者用看起来相似的Unicode字符伪造域名：</p>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-1">
          <p>⚠️ аpple.com（第一个а是西里尔字母）看起来和 apple.com 一模一样</p>
          <p>⚠️ gооgle.com（两个о是西里尔字母）看起来和 google.com 相同</p>
        </div>
        <p className="text-gray-700 leading-relaxed">现代浏览器的应对策略：当域名混合使用不同文字系统的字符时，地址栏会显示Punycode而非Unicode，帮助用户识别可疑域名。</p>

        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 中文域名的现状：</p>
          <p>• 中文域名注册量逐年增长，但实际使用率不高</p>
          <p>• 主要用于品牌保护和营销推广</p>
          <p>• 邮箱地址暂不支持中文域名</p>
          <p>• SEO方面，搜索引擎对IDN域名和ASCII域名一视同仁</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要进行Punycode编解码？试试我们的 <Link href="/punycode" className="text-blue-500 hover:underline font-medium">Punycode在线转换工具</Link>，支持中文域名和Punycode的双向转换。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
