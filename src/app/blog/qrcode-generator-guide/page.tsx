import Link from 'next/link'

export default function QRCodeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">二维码生成器使用指南：如何免费生成QR Code</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 3分钟</p>

        <p className="text-gray-700 leading-relaxed">二维码（QR Code）已经成为日常生活中不可或缺的工具。从支付到名片，从WiFi分享到活动签到，二维码无处不在。今天教你如何用免费工具快速生成自己的二维码。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">二维码能存储什么内容？</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>网址链接</strong>— 最常见的用途，扫码直接打开网页</li>
          <li><strong>纯文本</strong>— 存储任意文字信息</li>
          <li><strong>WiFi信息</strong>— 格式：WIFI:T:WPA;S:网络名;P:密码;; 扫码自动连接WiFi</li>
          <li><strong>电子邮件</strong>— mailto:格式，扫码直接发邮件</li>
          <li><strong>电话号码</strong>— tel:格式，扫码直接拨号</li>
          <li><strong>地理位置</strong>— 经纬度坐标，扫码打开地图</li>
          <li><strong>名片信息</strong>— vCard格式，扫码添加联系人</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3步生成二维码</h2>
        <p className="text-gray-700 leading-relaxed">使用我们的 <Link href="/qrcode" className="text-blue-500 hover:underline">免费二维码生成器</Link>，只需3步：</p>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li><strong>输入内容</strong>— 粘贴网址、输入文本或WiFi信息</li>
          <li><strong>调整尺寸</strong>— 拖动滑块选择128px到512px</li>
          <li><strong>下载使用</strong>— 点击生成，然后下载PNG图片</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">实用技巧</h2>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">WiFi二维码</h3>
        <p className="text-gray-700 leading-relaxed">想让客人扫码连WiFi？输入以下格式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4">
          <code className="text-sm text-gray-700">WIFI:T:WPA;S:你的WiFi名称;P:你的WiFi密码;;</code>
        </div>
        <p className="text-gray-700 leading-relaxed">生成二维码后打印出来贴在墙上，客人扫一扫就能连上WiFi，再也不用口述密码了。</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">名片二维码</h3>
        <p className="text-gray-700 leading-relaxed">把联系方式做成二维码，社交场合扫一扫就能添加好友：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4">
          <pre className="text-sm text-gray-700">{`BEGIN:VCARD
VERSION:3.0
N:张三
TEL:13800138000
EMAIL:zhangsan@email.com
END:VCARD`}</pre>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">选择合适的尺寸</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>128px</strong>— 适合网页内嵌、聊天分享</li>
          <li><strong>256px</strong>— 适合PPT演示、文档插入</li>
          <li><strong>512px</strong>— 适合打印、海报、展架</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见问题</h2>
        <p className="text-gray-700 leading-relaxed"><strong>Q: 二维码有有效期吗？</strong></p>
        <p className="text-gray-700 leading-relaxed">A: 二维码本身没有有效期，它只是一种编码方式。但如果二维码指向的网址失效了，扫码就会打不开。</p>

        <p className="text-gray-700 leading-relaxed mt-4"><strong>Q: 内容越多二维码越复杂？</strong></p>
        <p className="text-gray-700 leading-relaxed">A: 是的。存储的信息越多，二维码的点阵越密集。建议URL使用短链接服务来缩短。</p>

        <p className="text-gray-700 leading-relaxed mt-4"><strong>Q: 二维码可以自定义颜色和Logo吗？</strong></p>
        <p className="text-gray-700 leading-relaxed">A: 基础版支持黑白二维码。自定义颜色和Logo功能即将上线，敬请期待。</p>

        <p className="text-gray-700 leading-relaxed mt-8">立即试试 <Link href="/qrcode" className="text-blue-500 hover:underline font-medium">免费二维码生成器</Link>，3秒生成你的专属二维码。</p>
        <p className="text-gray-700 leading-relaxed">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
