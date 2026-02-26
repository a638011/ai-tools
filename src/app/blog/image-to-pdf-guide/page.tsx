import Link from 'next/link'

export default function ImageToPdfGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">图片转PDF教程：批量图片合并为PDF</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">把图片转成PDF是日常高频需求：手机拍的证件照转PDF提交、多张截图合并成一个文档、扫描件整理归档。本文介绍多种方法，从零代码到编程方案全覆盖。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">图片转PDF的常见需求</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 证件扫描件 — 身份证、护照、学历证书转PDF提交</p>
          <p>• 工作文档 — 手写笔记、白板照片整理成文档</p>
          <p>• 设计交付 — 多张设计稿合并为一个PDF发给客户</p>
          <p>• 电子书制作 — 漫画或图片书转PDF方便阅读</p>
          <p>• 归档存储 — 多张收据、发票图片合并存档</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法一：在线工具（推荐）</h2>
        <p className="text-gray-700 leading-relaxed">最简单快捷，无需安装任何软件：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>1. 打开图片转PDF在线工具</p>
          <p>2. 上传一张或多张图片（支持JPG、PNG、WebP等）</p>
          <p>3. 拖动调整图片顺序</p>
          <p>4. 设置页面大小（A4、Letter等）和方向</p>
          <p>5. 选择图片适配方式（填充、适应、原始大小）</p>
          <p>6. 点击生成，下载PDF</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法二：Python脚本</h2>
        <p className="text-gray-700 leading-relaxed">批量处理时Python最高效：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500"># 方法A：使用Pillow（最简单）</p>
            <p>{`from PIL import Image`}</p>
            <p>{`import glob`}</p>
            <p>{``}</p>
            <p>{`images = [Image.open(f) for f in sorted(glob.glob('*.jpg'))]`}</p>
            <p>{`# 转换为RGB（PDF不支持RGBA）`}</p>
            <p>{`images = [img.convert('RGB') for img in images]`}</p>
            <p>{``}</p>
            <p>{`# 第一张图片调用save，其余通过append_images添加`}</p>
            <p>{`images[0].save('output.pdf', save_all=True,`}</p>
            <p>{`    append_images=images[1:])`}</p>
          </div>
          <div>
            <p className="text-gray-500"># 方法B：使用fpdf2（控制页面布局）</p>
            <p>{`from fpdf import FPDF`}</p>
            <p>{``}</p>
            <p>{`pdf = FPDF()`}</p>
            <p>{`for img_path in sorted(glob.glob('*.jpg')):`}</p>
            <p>{`    pdf.add_page()`}</p>
            <p>{`    # 图片宽度设为页面宽度，高度自动计算`}</p>
            <p>{`    pdf.image(img_path, x=0, y=0, w=210)  # A4宽度210mm`}</p>
            <p>{`pdf.output('output.pdf')`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法三：命令行工具</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500"># ImageMagick — 最通用的图片处理工具</p>
            <p>{`convert img1.jpg img2.jpg img3.jpg output.pdf`}</p>
          </div>
          <div>
            <p className="text-gray-500"># 指定页面大小和质量</p>
            <p>{`convert *.jpg -page A4 -compress jpeg -quality 85 output.pdf`}</p>
          </div>
          <div>
            <p className="text-gray-500"># img2pdf — 无损转换（不重新编码图片）</p>
            <p>{`img2pdf img1.jpg img2.jpg -o output.pdf`}</p>
          </div>
          <div>
            <p className="text-gray-500"># 指定A4页面大小</p>
            <p>{`img2pdf --pagesize A4 *.jpg -o output.pdf`}</p>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>💡 img2pdf的优势：它直接将JPEG数据嵌入PDF，不会重新编码图片，所以转换是无损的，速度也更快。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">方法四：JavaScript（浏览器端）</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-1">
          <p>{`import { PDFDocument } from 'pdf-lib';`}</p>
          <p>{``}</p>
          <p>{`async function imagesToPdf(imageFiles) {`}</p>
          <p>{`  const pdf = await PDFDocument.create();`}</p>
          <p>{`  `}</p>
          <p>{`  for (const file of imageFiles) {`}</p>
          <p>{`    const bytes = await file.arrayBuffer();`}</p>
          <p>{`    const image = file.type === 'image/png'`}</p>
          <p>{`      ? await pdf.embedPng(bytes)`}</p>
          <p>{`      : await pdf.embedJpg(bytes);`}</p>
          <p>{`    `}</p>
          <p>{`    const page = pdf.addPage([image.width, image.height]);`}</p>
          <p>{`    page.drawImage(image, {`}</p>
          <p>{`      x: 0, y: 0,`}</p>
          <p>{`      width: image.width, height: image.height,`}</p>
          <p>{`    });`}</p>
          <p>{`  }`}</p>
          <p>{`  `}</p>
          <p>{`  return await pdf.save();`}</p>
          <p>{`}`}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">图片预处理建议</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 旋转校正 — 确保图片方向正确，手机拍的照片注意EXIF方向信息</p>
          <p>• 裁剪边缘 — 去掉多余的白边或背景</p>
          <p>• 调整分辨率 — 屏幕阅读用150DPI足够，打印用300DPI</p>
          <p>• 统一尺寸 — 如果图片大小不一，考虑统一缩放到相同宽度</p>
          <p>• 压缩图片 — 先压缩图片再转PDF，最终文件更小</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要将图片转为PDF？试试我们的 <Link href="/image-to-pdf" className="text-blue-500 hover:underline font-medium">图片转PDF工具</Link>，支持批量上传、拖拽排序，完全在浏览器端处理。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多开发者工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
