import Link from 'next/link'

export default function PdfMergeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PDF合并教程：多个PDF文件合并为一个</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">工作中经常遇到需要把多个PDF合并成一个的场景：合同的多个附件、扫描的多页文档、报告的各个章节。本文介绍几种实用的PDF合并方法，从在线工具到命令行方案都有覆盖。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见合并场景</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 合同签署 — 正文+附件+签字页合并为一个完整文件</p>
          <p>• 报告汇总 — 多个部门的报告合并成一份总报告</p>
          <p>• 扫描文档 — 分批扫描的页面合并为完整文档</p>
          <p>• 作品集 — 多个设计稿合并为一个作品集PDF</p>
          <p>• 发票归档 — 月度发票合并存档</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法一：在线工具（最简单）</h2>
        <p className="text-gray-700 leading-relaxed">在线PDF合并工具是最快捷的方式，无需安装任何软件：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 打开在线PDF合并工具</p>
          <p>2. 上传或拖拽多个PDF文件</p>
          <p>3. 拖动调整文件顺序</p>
          <p>4. 点击"合并"按钮</p>
          <p>5. 下载合并后的PDF</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 选择在线工具时注意隐私安全。优先选择在浏览器端处理的工具（文件不上传到服务器），我们的工具就是完全在本地浏览器中处理。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法二：命令行工具</h2>
        <p className="text-gray-700 leading-relaxed">对于批量处理或自动化场景，命令行工具更高效：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500"># 使用 pdftk（PDF Toolkit）</p>
            <p>{`pdftk file1.pdf file2.pdf file3.pdf cat output merged.pdf`}</p>
          </div>
          <div>
            <p className="text-gray-500"># 使用通配符合并目录下所有PDF</p>
            <p>{`pdftk *.pdf cat output all-merged.pdf`}</p>
          </div>
          <div>
            <p className="text-gray-500"># 使用 qpdf（更现代的选择）</p>
            <p>{`qpdf --empty --pages file1.pdf file2.pdf file3.pdf -- merged.pdf`}</p>
          </div>
          <div>
            <p className="text-gray-500"># 使用 Ghostscript</p>
            <p>{`gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite \\`}</p>
            <p>{`   -sOutputFile=merged.pdf file1.pdf file2.pdf`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法三：Python脚本</h2>
        <p className="text-gray-700 leading-relaxed">用Python可以灵活控制合并逻辑：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`from PyPDF2 import PdfMerger`}</p>
          <p>{``}</p>
          <p>{`merger = PdfMerger()`}</p>
          <p>{``}</p>
          <p>{`# 添加完整PDF`}</p>
          <p>{`merger.append('report_q1.pdf')`}</p>
          <p>{`merger.append('report_q2.pdf')`}</p>
          <p>{``}</p>
          <p>{`# 只添加特定页面（第2-5页）`}</p>
          <p>{`merger.append('appendix.pdf', pages=(1, 5))`}</p>
          <p>{``}</p>
          <p>{`# 在指定位置插入`}</p>
          <p>{`merger.merge(position=1, fileobj='cover.pdf')`}</p>
          <p>{``}</p>
          <p>{`merger.write('final_report.pdf')`}</p>
          <p>{`merger.close()`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法四：JavaScript（浏览器端）</h2>
        <p className="text-gray-700 leading-relaxed">使用pdf-lib库可以在浏览器中合并PDF：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`import { PDFDocument } from 'pdf-lib';`}</p>
          <p>{``}</p>
          <p>{`async function mergePDFs(pdfBuffers) {`}</p>
          <p>{`  const merged = await PDFDocument.create();`}</p>
          <p>{`  `}</p>
          <p>{`  for (const buffer of pdfBuffers) {`}</p>
          <p>{`    const pdf = await PDFDocument.load(buffer);`}</p>
          <p>{`    const pages = await merged.copyPages(pdf, pdf.getPageIndices());`}</p>
          <p>{`    pages.forEach(page => merged.addPage(page));`}</p>
          <p>{`  }`}</p>
          <p>{`  `}</p>
          <p>{`  return await merged.save();`}</p>
          <p>{`}`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">合并时的注意事项</h2>
        <div className="bg-red-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>⚠️ 加密PDF需要先解密才能合并</p>
          <p>⚠️ 不同页面尺寸的PDF合并后会保留各自尺寸，可能影响打印</p>
          <p>⚠️ 书签和目录可能在合并后丢失，需要重新生成</p>
          <p>⚠️ 表单字段名称冲突时可能导致表单功能异常</p>
          <p>⚠️ 合并大量PDF时注意内存占用</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">工具对比</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-3 gap-2 font-medium text-gray-700 mb-2">
            <span>方法</span><span>优点</span><span>缺点</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-gray-600">
            <span>在线工具</span><span>零安装，最简单</span><span>文件大小限制</span>
            <span>pdftk</span><span>功能全面</span><span>需要安装</span>
            <span>Python</span><span>灵活可编程</span><span>需要编程基础</span>
            <span>浏览器JS</span><span>隐私安全</span><span>大文件性能差</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速合并PDF？试试我们的 <Link href="/pdf-merge" className="text-blue-500 hover:underline font-medium">PDF在线合并工具</Link>，拖拽上传即可合并，文件完全在浏览器端处理，保护你的隐私。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
