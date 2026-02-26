import Link from 'next/link'

export default function CsvDataProcessing() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-500 hover:underline mb-6 inline-block">← 返回博客</Link>
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CSV文件处理指南：导入、查看、转换全攻略</h1>
        <p className="text-gray-400 text-sm mb-8">2026年2月 · 阅读时间 5分钟</p>

        <p className="text-gray-700 leading-relaxed">CSV（Comma-Separated Values）是最通用的数据交换格式之一。无论是导出数据库数据、处理Excel表格、还是对接API，CSV都是绑不开的格式。这篇文章从基础到进阶，帮你掌握CSV文件的处理技巧。</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">什么是CSV？</h2>
        <p className="text-gray-700 leading-relaxed">CSV是纯文本格式，用逗号分隔每个字段，用换行分隔每条记录。它的优点是简单、通用、体积小。</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700">
          <p className="text-gray-500">// 一个典型的CSV文件</p>
          <p>姓名,年龄,城市,职业</p>
          <p>张三,28,北京,工程师</p>
          <p>李四,35,上海,设计师</p>
          <p>王五,42,深圳,产品经理</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">CSV的格式规则</h2>
        <p className="text-gray-700 leading-relaxed">看似简单的CSV其实有不少细节：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-2">
          <p>• 字段之间用逗号 <code className="bg-gray-100 px-1 rounded">,</code> 分隔（也有用制表符、分号的变体）</p>
          <p>• 如果字段内容包含逗号，需要用双引号包裹：<code className="bg-gray-100 px-1 rounded">&quot;北京市,朝阳区&quot;</code></p>
          <p>• 如果字段内容包含双引号，用两个双引号转义：<code className="bg-gray-100 px-1 rounded">&quot;他说&quot;&quot;你好&quot;&quot;&quot;</code></p>
          <p>• 如果字段包含换行符，也需要双引号包裹</p>
          <p>• 第一行通常是表头（但不是必须的）</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">用JavaScript解析CSV</h2>
        <p className="text-gray-700 leading-relaxed">简单场景可以用split处理，但要注意引号内的逗号：</p>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 简单解析（不处理引号）</p>
            <p>{`function parseSimpleCSV(text) {`}</p>
            <p>{`  const lines = text.trim().split('\\n');`}</p>
            <p>{`  const headers = lines[0].split(',');`}</p>
            <p>{`  return lines.slice(1).map(line => {`}</p>
            <p>{`    const values = line.split(',');`}</p>
            <p>{`    return headers.reduce((obj, h, i) => {`}</p>
            <p>{`      obj[h.trim()] = values[i]?.trim();`}</p>
            <p>{`      return obj;`}</p>
            <p>{`    }, {});`}</p>
            <p>{`  });`}</p>
            <p>{`}`}</p>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 my-4 text-sm text-gray-700">
          <p>⚠️ 生产环境建议使用成熟的库（如Papa Parse），手写解析器很难正确处理所有边界情况。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">生成CSV文件</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 font-mono text-sm text-gray-700 space-y-3">
          <div>
            <p className="text-gray-500">// 将对象数组转为CSV字符串</p>
            <p>{`function toCSV(data) {`}</p>
            <p>{`  if (!data.length) return '';`}</p>
            <p>{`  const headers = Object.keys(data[0]);`}</p>
            <p>{`  const rows = data.map(row =>`}</p>
            <p>{`    headers.map(h => {`}</p>
            <p>{`      let val = String(row[h] ?? '');`}</p>
            <p>{`      // 包含逗号或引号时需要转义`}</p>
            <p>{`      if (val.includes(',') || val.includes('"')`}</p>
            <p>{`        || val.includes('\\n')) {`}</p>
            <p>{`        val = '"' + val.replace(/"/g, '""') + '"';`}</p>
            <p>{`      }`}</p>
            <p>{`      return val;`}</p>
            <p>{`    }).join(',')`}</p>
            <p>{`  );`}</p>
            <p>{`  return [headers.join(','), ...rows].join('\\n');`}</p>
            <p>{`}`}</p>
          </div>
          <div>
            <p className="text-gray-500">// 在浏览器中下载CSV</p>
            <p>{`function downloadCSV(csvStr, filename) {`}</p>
            <p>{`  const BOM = '\\uFEFF'; // Excel需要BOM识别UTF-8`}</p>
            <p>{`  const blob = new Blob([BOM + csvStr],`}</p>
            <p>{`    { type: 'text/csv;charset=utf-8' });`}</p>
            <p>{`  const url = URL.createObjectURL(blob);`}</p>
            <p>{`  const a = document.createElement('a');`}</p>
            <p>{`  a.href = url;`}</p>
            <p>{`  a.download = filename;`}</p>
            <p>{`  a.click();`}</p>
            <p>{`}`}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">常见问题及解决</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm text-gray-700 space-y-4">
          <div>
            <p className="font-medium text-red-600">Excel打开CSV中文乱码</p>
            <p>原因：Excel默认用系统编码（GBK）打开，而CSV通常是UTF-8。</p>
            <p>解决：生成CSV时加BOM头（<code className="bg-gray-100 px-1 rounded">\uFEFF</code>），或在Excel中用"数据→从文本"导入并选择UTF-8编码。</p>
          </div>
          <div>
            <p className="font-medium text-red-600">数字被Excel自动转换</p>
            <p>比如身份证号变成科学计数法，电话号码前导0消失。</p>
            <p>解决：在数字前加等号和引号：<code className="bg-gray-100 px-1 rounded">{`="0755123456"`}</code>，或将列格式设为文本后再粘贴。</p>
          </div>
          <div>
            <p className="font-medium text-red-600">分隔符不是逗号</p>
            <p>有些地区（如欧洲）用分号做分隔符，因为逗号是小数点。</p>
            <p>解决：导入时指定分隔符，或用TSV（制表符分隔）格式。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">CSV vs 其他格式</h2>
        <div className="bg-gray-50 rounded-xl p-4 my-4 text-sm">
          <div className="grid grid-cols-4 gap-2 font-medium text-gray-700 mb-2">
            <span>格式</span><span>优点</span><span>缺点</span><span>适用场景</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-gray-600">
            <span>CSV</span><span>简单通用</span><span>无数据类型</span><span>数据交换</span>
            <span>JSON</span><span>结构化、嵌套</span><span>体积较大</span><span>API、配置</span>
            <span>Excel</span><span>格式丰富</span><span>需专用软件</span><span>报表、分析</span>
            <span>TSV</span><span>避免逗号冲突</span><span>不如CSV通用</span><span>生物信息学</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">在线工具</h2>
        <p className="text-gray-700 leading-relaxed">需要快速查看或转换CSV文件？试试我们的 <Link href="/csv-viewer" className="text-blue-500 hover:underline font-medium">免费CSV查看器</Link>，支持在线预览、编辑、格式转换，无需上传到服务器。</p>
        <p className="text-gray-700 leading-relaxed mt-4">更多数据处理工具请访问 <Link href="/" className="text-blue-500 hover:underline">www.cyunyun.com</Link>。</p>
      </article>
    </main>
  )
}
