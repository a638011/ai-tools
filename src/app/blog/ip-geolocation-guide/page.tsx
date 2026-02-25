import Link from 'next/link'

export default function IpGeolocationGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">如何查询IP地址的地理位置？IP定位原理详解</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">每台联网设备都有一个IP地址，通过IP地址可以大致定位设备所在的地理位置。这项技术被广泛用于内容分发、安全防护、广告投放等场景。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">IP地址基础知识</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>IPv4</strong> — 如 192.168.1.1，由4组0-255的数字组成，总共约43亿个地址</li>
          <li><strong>IPv6</strong> — 如 2001:0db8::1，128位地址，几乎无限</li>
          <li><strong>公网IP</strong> — 全球唯一，可被外部访问</li>
          <li><strong>内网IP</strong> — 局域网内使用（192.168.x.x, 10.x.x.x, 172.16-31.x.x）</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">IP定位的原理</h2>
        <p className="text-gray-700 leading-relaxed">IP地理定位主要依赖以下数据源：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>IP分配记录</strong> — IANA将IP段分配给各地区的RIR（区域互联网注册机构），再分配给ISP</li>
          <li><strong>ISP注册信息</strong> — 运营商在申请IP段时会登记所在地区</li>
          <li><strong>BGP路由数据</strong> — 通过网络路由路径推断位置</li>
          <li><strong>用户反馈数据</strong> — 大量用户的GPS/WiFi定位数据与IP关联</li>
          <li><strong>商业数据库</strong> — MaxMind、IP2Location等公司维护的数据库</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">IP定位的精度</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>级别</span><span>精度</span><span>准确率</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>国家</span><span>国家级</span><span>99%+</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>省/州</span><span>省级</span><span>90%+</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>城市</span><span>城市级</span><span>70-80%</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>街道</span><span>街道级</span><span>不可靠</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">注意：IP定位只能到城市级别，无法精确到街道或门牌号。VPN和代理会改变IP位置。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">IP查询能获取哪些信息？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>国家和地区</li>
          <li>城市</li>
          <li>经纬度（大致）</li>
          <li>ISP（互联网服务提供商）</li>
          <li>时区</li>
          <li>AS号（自治系统编号）</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见应用场景</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>内容本地化</strong> — 根据用户IP自动切换语言和货币</li>
          <li><strong>安全防护</strong> — 检测异常登录地点，阻止可疑IP</li>
          <li><strong>广告定向</strong> — 向特定地区用户展示本地广告</li>
          <li><strong>合规限制</strong> — 某些内容仅对特定地区开放</li>
          <li><strong>CDN调度</strong> — 将用户请求路由到最近的服务器</li>
          <li><strong>欺诈检测</strong> — 订单地址与IP位置不匹配时触发审核</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">隐私与安全</h2>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ IP地址属于个人信息，查询和使用需遵守隐私法规（如GDPR）</p>
          <p>🔒 使用VPN可以隐藏真实IP地址</p>
          <p>🌐 公共WiFi的IP不代表你的真实位置</p>
          <p>📱 移动网络IP可能显示运营商机房位置而非你的位置</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线查询工具</h2>
        <p className="text-gray-700 leading-relaxed">想查看自己的IP或查询任意IP的位置？试试我们的 <Link href="/ip-lookup" className="text-blue-500 hover:underline font-medium">免费IP地址查询工具</Link>，一键获取IP的地理位置、ISP、时区等完整信息。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
