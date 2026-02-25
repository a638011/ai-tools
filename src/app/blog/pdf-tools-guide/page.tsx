import Link from 'next/link'

export default function PdfToolsGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PDF文件处理完全指南：合并、压缩、转换一站搞定</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 4分钟</p>

        <p className="text-gray-700 leading-relaxed">PDF是最通用的文档格式，但处理PDF往往需要付费软件。其实很多常见操作都可以在线免费完成，而且不需要上传到服务器。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见PDF处理需求</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. PDF合并</h3>
        <p className="text-gray-700 leading-relaxed">把多个PDF文件合并成一个，常见场景：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>合并多份合同/报告为一个文件</li>
          <li>将扫描的多页文档合为一个PDF</li>
          <li>整合多个部门的文件</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-2">👉 使用 <Link href="/pdf-merge" className="text-blue-500 hover:underline font-medium">PDF合并工具</Link>，拖入文件即可按顺序合并。</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. PDF压缩</h3>
        <p className="text-gray-700 leading-relaxed">PDF文件太大无法发送邮件？常见场景：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>邮件附件限制（通常25MB）</li>
          <li>微信/钉钉文件大小限制</li>
          <li>网站上传限制</li>
          <li>节省存储空间</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-2">👉 使用 <Link href="/pdf-compress" className="text-blue-500 hover:underline font-medium">PDF压缩工具</Link>，通过优化内部结构减小体积。</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. 图片转PDF</h3>
        <p className="text-gray-700 leading-relaxed">把照片或截图转成PDF，常见场景：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>手机拍的证件照转PDF提交</li>
          <li>多张产品图合成PDF目录</li>
          <li>截图整理成文档</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-2">👉 使用 <Link href="/image-to-pdf" className="text-blue-500 hover:underline font-medium">图片转PDF工具</Link>，支持JPG/PNG，多张图片按顺序生成。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">为什么选择在线工具？</h2>
        <div className="bg-blue-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>✅ 免费 — 不需要购买Adobe Acrobat等付费软件</p>
          <p>✅ 无需安装 — 打开浏览器就能用</p>
          <p>✅ 隐私安全 — 我们的工具在浏览器本地处理，文件不上传服务器</p>
          <p>✅ 跨平台 — Windows/Mac/手机都能用</p>
          <p>✅ 无限制 — 不限文件大小和使用次数</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">PDF处理小技巧</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>减小PDF大小</strong> — 如果PDF包含高分辨率图片，先压缩图片再生成PDF效果更好</li>
          <li><strong>保持清晰度</strong> — 扫描文档建议300DPI，屏幕阅读150DPI即可</li>
          <li><strong>合并顺序</strong> — 合并前先确认文件顺序，避免重新操作</li>
          <li><strong>批量处理</strong> — 多个文件可以一次性拖入，不需要逐个添加</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">全部PDF工具</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm space-y-2">
          <p>🔗 <Link href="/pdf-merge" className="text-blue-500 hover:underline">PDF合并</Link> — 多个PDF合为一个</p>
          <p>🗜️ <Link href="/pdf-compress" className="text-blue-500 hover:underline">PDF压缩</Link> — 减小PDF文件体积</p>
          <p>🖼️ <Link href="/image-to-pdf" className="text-blue-500 hover:underline">图片转PDF</Link> — JPG/PNG转PDF</p>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">更多工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
