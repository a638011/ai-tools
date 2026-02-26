import Link from 'next/link'

export default function OnlineToolsSecurity() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">在线工具安全吗？如何安全使用网页工具</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">在线工具越来越多：格式转换、图片压缩、JSON格式化、密码生成……方便是方便，但你有没有想过，你粘贴进去的数据去了哪里？上传的文件会不会被保存？本文帮你分析在线工具的安全风险，并教你如何安全使用。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具的两种架构</h2>
        <p className="text-gray-700 leading-relaxed">理解在线工具的安全性，首先要知道它的数据处理方式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-3">
          <div>
            <p className="font-medium text-green-600">🟢 客户端处理（浏览器本地）</p>
            <p className="text-gray-600">所有计算在你的浏览器中完成，数据不离开你的电脑。使用 JavaScript/WebAssembly 在本地执行。这类工具是安全的。</p>
          </div>
          <div>
            <p className="font-medium text-yellow-600">🟡 服务端处理（上传到服务器）</p>
            <p className="text-gray-600">数据被发送到远程服务器处理，结果再返回给你。你的数据经过了第三方服务器，存在泄露风险。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">如何判断工具是否在本地处理？</h2>
        <p className="text-gray-700 leading-relaxed">以下方法可以帮你判断：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 打开浏览器开发者工具（F12），切换到 Network 标签</p>
          <p>2. 使用工具处理数据，观察是否有网络请求发出</p>
          <p>3. 如果没有数据上传请求，说明是本地处理</p>
          <p>4. 断开网络后工具仍能正常使用，也说明是本地处理</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 浏览器控制台检查网络请求</p>
          <p className="text-gray-500">// 打开 DevTools → Network → 操作工具</p>
          <p className="text-gray-500">// 观察是否有 POST 请求携带你的数据</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">// 本地处理的工具通常使用：</p>
          <p>FileReader API    <span className="text-gray-500">// 读取本地文件</span></p>
          <p>Canvas API        <span className="text-gray-500">// 图片处理</span></p>
          <p>Web Crypto API    <span className="text-gray-500">// 加密解密</span></p>
          <p>WebAssembly       <span className="text-gray-500">// 高性能计算</span></p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见在线工具的风险等级</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>工具类型</span><span>风险等级</span><span>注意事项</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>文本格式化/转换</span><span className="text-green-600">低</span><span>多为本地处理</span>
            <span>图片压缩/裁剪</span><span className="text-yellow-600">中</span><span>部分需上传服务器</span>
            <span>PDF转换</span><span className="text-yellow-600">中</span><span>大多需要服务端处理</span>
            <span>OCR文字识别</span><span className="text-red-600">高</span><span>几乎都需要上传</span>
            <span>AI写作/翻译</span><span className="text-red-600">高</span><span>数据必须发送到AI服务器</span>
            <span>密码生成器</span><span className="text-green-600">低</span><span>应该是纯本地生成</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">哪些数据绝对不要粘贴到在线工具？</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="text-red-600 font-medium">🚫 高危数据清单：</p>
          <p className="mt-1">• 密码、密钥、Token、API Key</p>
          <p>• 身份证号、银行卡号、手机号</p>
          <p>• 公司机密文件、源代码、数据库内容</p>
          <p>• 客户隐私数据、医疗记录</p>
          <p>• SSH私钥、SSL证书私钥</p>
          <p>• 未公开的商业合同和财务数据</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">安全使用在线工具的8个原则</h2>
        <p className="text-gray-700 leading-relaxed">1. 优先选择本地处理的工具。数据不离开浏览器是最安全的。</p>
        <p className="text-gray-700 leading-relaxed">2. 检查网站是否使用 HTTPS。地址栏有🔒图标，数据传输才是加密的。</p>
        <p className="text-gray-700 leading-relaxed">3. 阅读隐私政策。正规工具会明确说明数据是否上传、是否保留、保留多久。</p>
        <p className="text-gray-700 leading-relaxed">4. 敏感数据用脱敏版本测试。先用假数据试用，确认安全后再用真实数据。</p>
        <p className="text-gray-700 leading-relaxed">5. 使用开源工具。代码公开透明，可以自行审查数据处理逻辑。</p>
        <p className="text-gray-700 leading-relaxed">6. 敏感操作优先用离线工具。如密码管理用 KeePass，代码格式化用 IDE 插件。</p>
        <p className="text-gray-700 leading-relaxed">7. 定期清理浏览器数据。使用完在线工具后清除缓存和 LocalStorage。</p>
        <p className="text-gray-700 leading-relaxed">8. 公司电脑遵守IT政策。很多公司明确禁止使用外部在线工具处理公司数据。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">开发者如何构建安全的在线工具？</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 本地处理文件的安全模式</p>
          <p>const input = document.querySelector(&apos;input[type=file]&apos;)</p>
          <p>input.addEventListener(&apos;change&apos;, (e) =&gt; &#123;</p>
          <p>  const file = e.target.files[0]</p>
          <p>  const reader = new FileReader()</p>
          <p>  reader.onload = (event) =&gt; &#123;</p>
          <p>    <span className="text-gray-500">// 数据在浏览器内存中处理</span></p>
          <p>    <span className="text-gray-500">// 不发送任何网络请求</span></p>
          <p>    processLocally(event.target.result)</p>
          <p>  &#125;</p>
          <p>  reader.readAsArrayBuffer(file)</p>
          <p>&#125;)</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">我们的所有工具都优先采用浏览器本地处理，你的数据不会上传到任何服务器。访问 <Link href="/" className="text-blue-500 hover:underline font-medium">www.cyunyun.com</Link> 体验安全、免费的在线工具集合。</p>
      </article>
    </main>
  )
}
