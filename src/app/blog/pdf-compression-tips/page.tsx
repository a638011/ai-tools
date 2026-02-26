import Link from 'next/link'

export default function PdfCompressionTips() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PDF压缩技巧：减小PDF文件大小的5种方法</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">PDF文件太大是个常见痛点：邮件附件超过限制、上传系统有大小要求、存储空间不够用。一个包含高清图片的PDF动辄几十MB。本文介绍5种实用的PDF压缩方法。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">PDF为什么这么大？</h2>
        <p className="text-gray-700 leading-relaxed">了解PDF体积的构成，才能有针对性地压缩：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 嵌入的高分辨率图片 — 这是PDF体积大的头号原因，一张未压缩的照片可能占几MB</p>
          <p>• 嵌入字体 — 完整嵌入一个中文字体可能增加5-15MB</p>
          <p>• 矢量图形 — 复杂的插图和图表</p>
          <p>• 元数据和缩略图 — 编辑历史、预览图等隐藏数据</p>
          <p>• 重复资源 — 同一张图片在多个页面重复嵌入</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法一：压缩图片质量</h2>
        <p className="text-gray-700 leading-relaxed">最有效的方法。PDF中的图片通常不需要原始分辨率：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>用途</span><span>建议DPI</span><span>效果</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>屏幕阅读</span><span>72-96 DPI</span><span>体积最小</span>
            <span>普通打印</span><span>150 DPI</span><span>体积适中</span>
            <span>高质量打印</span><span>300 DPI</span><span>体积较大</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># Ghostscript压缩图片质量</p>
          <p>{`gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 \\`}</p>
          <p>{`   -dPDFSETTINGS=/ebook \\`}</p>
          <p>{`   -dNOPAUSE -dBATCH \\`}</p>
          <p>{`   -sOutputFile=compressed.pdf input.pdf`}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>Ghostscript预设级别：</p>
          <p><code className="bg-gray-200 px-1 rounded">/screen</code> — 72 DPI，最小体积，适合屏幕阅读</p>
          <p><code className="bg-gray-200 px-1 rounded">/ebook</code> — 150 DPI，平衡质量和体积（推荐）</p>
          <p><code className="bg-gray-200 px-1 rounded">/printer</code> — 300 DPI，适合打印</p>
          <p><code className="bg-gray-200 px-1 rounded">/prepress</code> — 300 DPI，保留最高质量</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法二：子集化嵌入字体</h2>
        <p className="text-gray-700 leading-relaxed">完整嵌入一个中文字体可能有10MB+。子集化只嵌入文档中实际使用的字符：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 完整嵌入思源黑体：约15MB</p>
          <p>• 子集化后（假设用了500个字）：约200KB</p>
          <p>• 体积减少：98%以上</p>
        </div>
        <p className="text-gray-700 leading-relaxed">大多数PDF编辑器在导出时都有"子集化字体"选项，务必勾选。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法三：移除冗余数据</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 删除元数据 — 作者、创建软件、编辑历史等</p>
          <p>• 移除缩略图 — 旧版PDF可能嵌入每页的预览图</p>
          <p>• 清理注释和表单 — 不需要的批注和表单字段</p>
          <p>• 扁平化图层 — 将多图层合并为单层</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p className="text-gray-500"># 使用qpdf线性化并清理</p>
          <p>{`qpdf --linearize --object-streams=generate input.pdf output.pdf`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法四：转换颜色空间</h2>
        <p className="text-gray-700 leading-relaxed">CMYK颜色空间（用于印刷）比RGB占用更多空间。如果PDF只用于屏幕显示，转换为RGB可以减小体积：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• CMYK图片：4个通道，文件更大</p>
          <p>• RGB图片：3个通道，文件更小</p>
          <p>• 灰度图片：1个通道，文件最小</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法五：使用在线压缩工具</h2>
        <p className="text-gray-700 leading-relaxed">对于非技术用户，在线工具是最简单的选择：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 上传PDF文件</p>
          <p>2. 选择压缩级别（低/中/高）</p>
          <p>3. 点击压缩</p>
          <p>4. 下载压缩后的文件</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">压缩效果参考</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>PDF类型</span><span>原始大小</span><span>压缩后</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>扫描文档（300DPI）</span><span>25MB</span><span>3-5MB</span>
            <span>PPT导出PDF</span><span>15MB</span><span>2-4MB</span>
            <span>设计稿PDF</span><span>50MB</span><span>8-15MB</span>
            <span>纯文字PDF</span><span>500KB</span><span>400KB（压缩空间小）</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要压缩PDF？试试我们的 <Link href="/pdf-compress" className="text-blue-500 hover:underline font-medium">PDF在线压缩工具</Link>，智能压缩保持画质，文件在浏览器端处理保护隐私。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
