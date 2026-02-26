import Link from 'next/link'

export default function QrCodeScanning() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">二维码识别技术：从原理到实践</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">二维码（QR Code）已经渗透到生活的方方面面：扫码支付、扫码登录、扫码点餐、扫码骑车。但你有没有想过，一张黑白方块图是怎么存储信息的？手机又是如何瞬间识别出来的？</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">二维码的结构</h2>
        <p className="text-gray-700 leading-relaxed">QR Code（Quick Response Code）由日本 Denso Wave 公司于1994年发明。一个标准二维码包含以下关键区域：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">定位图案</code><span className="text-gray-600">三个角落的大方块，帮助扫描器确定二维码的位置和方向</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">对齐图案</code><span className="text-gray-600">较大的二维码中用于校正透视变形</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">时序图案</code><span className="text-gray-600">定位图案之间的交替黑白线，确定模块坐标</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">格式信息</code><span className="text-gray-600">存储纠错级别和掩码模式</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">数据区域</code><span className="text-gray-600">实际编码的数据内容</span></div>
          <div className="flex gap-4"><code className="font-mono text-blue-600 w-28">纠错码</code><span className="text-gray-600">Reed-Solomon纠错码，允许部分损坏仍可读取</span></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">编码模式</h2>
        <p className="text-gray-700 leading-relaxed">二维码支持四种编码模式，根据内容自动选择最高效的方式：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>模式</span><span>支持字符</span><span>每字符位数</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">数字模式</span><span>0-9</span><span>3.3 bits</span>
            <span className="font-mono">字母数字</span><span>0-9, A-Z, 空格, $%*+-./:</span><span>5.5 bits</span>
            <span className="font-mono">字节模式</span><span>ISO 8859-1 / UTF-8</span><span>8 bits</span>
            <span className="font-mono">汉字模式</span><span>Shift JIS 双字节字符</span><span>13 bits</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">纠错能力</h2>
        <p className="text-gray-700 leading-relaxed">二维码最强大的特性之一是纠错能力。即使二维码被部分遮挡或损坏，仍然可以正确读取。这就是为什么很多二维码中间可以放Logo。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>纠错级别</span><span>恢复能力</span><span>适用场景</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span className="font-mono">L（低）</span><span>约 7%</span><span>数据量大，环境干净</span>
            <span className="font-mono">M（中）</span><span>约 15%</span><span>一般用途（默认）</span>
            <span className="font-mono">Q（较高）</span><span>约 25%</span><span>工业环境</span>
            <span className="font-mono">H（高）</span><span>约 30%</span><span>需要放Logo或恶劣环境</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">识别流程</h2>
        <p className="text-gray-700 leading-relaxed">手机扫描二维码的完整流程：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 图像采集 → 摄像头捕获画面</p>
          <p>2. 灰度化 → 转为灰度图像</p>
          <p>3. 二值化 → 黑白分离，确定模块边界</p>
          <p>4. 定位检测 → 找到三个定位图案，确定位置和旋转角度</p>
          <p>5. 透视校正 → 修正拍摄角度造成的变形</p>
          <p>6. 数据提取 → 按网格读取每个模块的黑白值</p>
          <p>7. 纠错解码 → 使用Reed-Solomon算法恢复数据</p>
          <p>8. 内容解析 → 根据编码模式还原原始文本</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">JavaScript生成二维码</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500">// 使用 qrcode 库生成二维码</p>
          <p>import QRCode from &apos;qrcode&apos;</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">// 生成 Data URL</p>
          <p>const dataUrl = await QRCode.toDataURL(</p>
          <p>  &apos;https://www.cyunyun.com&apos;,</p>
          <p>  &#123; errorCorrectionLevel: &apos;H&apos;, width: 256 &#125;</p>
          <p>)</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">// 生成到 Canvas</p>
          <p>QRCode.toCanvas(canvasElement, &apos;Hello World&apos;)</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">二维码 vs 条形码</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>特性</span><span>条形码</span><span>二维码</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>维度</span><span>一维</span><span>二维</span>
            <span>数据容量</span><span>约20字符</span><span>最多4296字符</span>
            <span>字符类型</span><span>仅数字</span><span>数字、字母、中文、二进制</span>
            <span>纠错能力</span><span>无</span><span>最高30%</span>
            <span>读取方向</span><span>单方向</span><span>任意角度360°</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">安全提醒</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p className="font-medium text-red-600">⚠️ 扫码安全注意事项：</p>
          <p className="mt-1">1. 不要扫描来源不明的二维码，可能指向钓鱼网站</p>
          <p>2. 扫码后先查看URL，确认域名再操作</p>
          <p>3. 公共场所的二维码可能被覆盖替换，注意是否有粘贴痕迹</p>
          <p>4. 不要通过二维码下载未知APP</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要识别或生成二维码？试试我们的 <Link href="/qr-code" className="text-blue-500 hover:underline font-medium">免费在线二维码工具</Link>，支持扫描识别和自定义生成。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多实用工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
